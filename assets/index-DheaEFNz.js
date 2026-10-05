(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="170",Pu=0,Rl=1,Iu=2,b0=1,Lu=2,Jn=3,bi=0,sn=1,_e=2,Mi=0,Ts=1,Wi=2,Cl=3,Pl=4,Du=5,ki=100,Nu=101,Uu=102,Ou=103,Fu=104,ku=200,zu=201,Bu=202,Gu=203,Qo=204,tc=205,Hu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,Ku=212,$u=213,ju=214,ec=0,nc=1,ic=2,Cs=3,sc=4,rc=5,ac=6,oc=7,qa=0,Zu=1,Ju=2,vi=0,Qu=1,td=2,ed=3,nd=4,id=5,sd=6,rd=7,S0=300,Ps=301,Is=302,cc=303,lc=304,Ya=306,za=1e3,Hi=1001,hc=1002,je=1003,w0=1004,Ur=1005,pn=1006,eo=1007,_i=1008,ri=1009,E0=1010,T0=1011,wr=1012,$c=1013,Xi=1014,Gn=1015,Tr=1016,jc=1017,Zc=1018,Ls=1020,A0=35902,R0=1021,C0=1022,On=1023,P0=1024,I0=1025,As=1026,Ds=1027,Jc=1028,Qc=1029,L0=1030,tl=1031,el=1033,Da=33776,Na=33777,Ua=33778,Oa=33779,uc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,xc=37496,_c=37808,Mc=37809,vc=37810,yc=37811,bc=37812,Sc=37813,wc=37814,Ec=37815,Tc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Fa=36492,Lc=36494,Dc=36495,D0=36283,Nc=36284,Uc=36285,Oc=36286,ad=3200,od=3201,nl=0,cd=1,Qn="",He="srgb",Fs="srgb-linear",Ka="linear",Me="srgb",ts=7680,Il=519,ld=512,hd=513,ud=514,N0=515,dd=516,fd=517,pd=518,md=519,Ll=35044,xr=35048,Dl="300 es",ei=2e3,Ba=2001;class ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Fc=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function gd(i,t){return(i%t+t)%t}function io(i,t,e){return(1-e)*i+e*t}function Zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,a,o,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],E=s[2],w=s[5],T=s[8];return r[0]=a*_+o*x+l*E,r[3]=a*g+o*M+l*w,r[6]=a*p+o*v+l*T,r[1]=c*_+h*x+d*E,r[4]=c*g+h*M+d*w,r[7]=c*p+h*v+d*T,r[2]=u*_+f*x+m*E,r[5]=u*g+f*M+m*w,r[8]=u*p+f*v+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(so.makeScale(t,e)),this}rotate(t){return this.premultiply(so.makeRotation(-t)),this}translate(t,e){return this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const so=new ee;function U0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ga(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){const i=Ga("canvas");return i.style.display="block",i}const Nl={};function _r(i){i in Nl||(Nl[i]=!0,console.warn(i))}function _d(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const de={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ul=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],Fl=[.3127,.329],kl=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[Fs]:{primaries:Ul,whitePoint:Fl,transfer:Ka,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:Ul,whitePoint:Fl,transfer:Me,toXYZ:kl,fromXYZ:zl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let es;class yd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=Ga("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ga("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class O0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ar(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class Ze extends ks{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Hi,s=Hi,r=pn,a=_i,o=On,l=ri,c=Ze.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ar(),this.name="",this.source=new O0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==S0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=S0;Ze.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,E=(p+1)/2,w=(h+u)/4,T=(d+_)/4,R=(m+g)/4;return M>v&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wd extends ks{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new O0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class il extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==m){let g=1-o;const p=l*u+c*f+h*m+d*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const E=Math.sqrt(M),w=Math.atan2(E,p*x);g=Math.sin(g*w)/E,o=Math.sin(o*w)/E}const v=o*x;if(l=l*g+u*v,c=c*g+f*v,h=h*g+m*v,d=d*g+_*v,g===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new K,Bl=new zs;class Zi{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Fr.subVectors(this.max,Js),ns.subVectors(t.a,Js),is.subVectors(t.b,Js),ss.subVectors(t.c,Js),li.subVectors(is,ns),hi.subVectors(ss,is),Ri.subVectors(ns,ss);let e=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,li.z,0,-li.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!oo(e,ns,is,ss,Fr)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,ns,is,ss,Fr))?!1:(kr.crossVectors(li,hi),e=[kr.x,kr.y,kr.z],oo(e,ns,is,ss,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new K,new K,new K,new K,new K,new K,new K,new K],Tn=new K,Or=new Zi,ns=new K,is=new K,ss=new K,li=new K,hi=new K,Ri=new K,Js=new K,Fr=new K,kr=new K,Ci=new K;function oo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Td=new Zi,Qs=new K,co=new K;class Ji{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(co)),this.expandByPoint(Qs.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new K,lo=new K,zr=new K,ui=new K,ho=new K,Br=new K,uo=new K;class sl{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lo.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(lo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(zr),o=ui.dot(this.direction),l=-ui.dot(zr),c=ui.lengthSq(),h=Math.abs(1-a*a);let d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lo).addScaledVector(zr,u),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){ho.subVectors(e,t),Br.subVectors(n,t),uo.crossVectors(ho,Br);let a=this.direction.dot(uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const l=o*this.direction.dot(Br.crossVectors(ui,Br));if(l<0)return null;const c=o*this.direction.dot(ho.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(uo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,m,_,g){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,_,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,m=o*h,_=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Rd)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(n,un),di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(n,un)),di.normalize(),Gr.crossVectors(un,di),s[0]=di.x,s[4]=Gr.x,s[8]=un.x,s[1]=di.y,s[5]=Gr.y,s[9]=un.y,s[2]=di.z,s[6]=Gr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],E=n[15],w=s[0],T=s[4],R=s[8],S=s[12],b=s[1],P=s[5],z=s[9],H=s[13],W=s[2],tt=s[6],O=s[10],it=s[14],B=s[3],nt=s[7],et=s[11],ot=s[15];return r[0]=a*w+o*b+l*W+c*B,r[4]=a*T+o*P+l*tt+c*nt,r[8]=a*R+o*z+l*O+c*et,r[12]=a*S+o*H+l*it+c*ot,r[1]=h*w+d*b+u*W+f*B,r[5]=h*T+d*P+u*tt+f*nt,r[9]=h*R+d*z+u*O+f*et,r[13]=h*S+d*H+u*it+f*ot,r[2]=m*w+_*b+g*W+p*B,r[6]=m*T+_*P+g*tt+p*nt,r[10]=m*R+_*z+g*O+p*et,r[14]=m*S+_*H+g*it+p*ot,r[3]=x*w+M*b+v*W+E*B,r[7]=x*T+M*P+v*tt+E*nt,r[11]=x*R+M*z+v*O+E*et,r[15]=x*S+M*H+v*it+E*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+_*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+g*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=d*g*c-_*u*c+_*l*f-o*g*f-d*l*p+o*u*p,M=m*u*c-h*g*c-m*l*f+a*g*f+h*l*p-a*u*p,v=h*_*c-m*d*c+m*o*f-a*_*f-h*o*p+a*d*p,E=m*d*l-h*_*l-m*o*u+a*_*u+h*o*g-a*d*g,w=e*x+n*M+s*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*g*r-_*s*f+n*g*f+d*s*p-n*u*p)*T,t[2]=(o*g*r-_*l*r+_*s*c-n*g*c-o*s*p+n*l*p)*T,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*T,t[4]=M*T,t[5]=(h*g*r-m*u*r+m*s*f-e*g*f-h*s*p+e*u*p)*T,t[6]=(m*l*r-a*g*r-m*s*c+e*g*c+a*s*p-e*l*p)*T,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*T,t[8]=v*T,t[9]=(m*d*r-h*_*r-m*n*f+e*_*f+h*n*p-e*d*p)*T,t[10]=(a*_*r-m*o*r+m*n*c-e*_*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=E*T,t[13]=(h*_*s-m*d*s+m*n*u-e*_*u-h*n*g+e*d*g)*T,t[14]=(m*o*s-a*_*s-m*n*l+e*_*l+a*n*g-e*o*g)*T,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,_=a*h,g=a*d,p=o*d,x=l*c,M=l*h,v=l*d,E=n.x,w=n.y,T=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+v)*E,s[2]=(m-M)*E,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(u+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+M)*T,s[9]=(g-x)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,h=1/a,d=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ei){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,m;if(o===ei)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ba)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ei){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let m,_;if(o===ei)m=(a+r)*d,_=-2*d;else if(o===Ba)m=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new K,An=new kt,Ad=new K(0,0,0),Rd=new K(1,1,1),di=new K,Gr=new K,un=new K,Gl=new kt,Hl=new zs;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class F0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const Vl=new K,as=new zs,Yn=new kt,Hr=new K,tr=new K,Pd=new K,Id=new zs,Wl=new K(1,0,0),Xl=new K(0,1,0),ql=new K(0,0,1),Yl={type:"added"},Ld={type:"removed"},os={type:"childadded",child:null},fo={type:"childremoved",child:null};class Fe extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new K,e=new Sn,n=new zs,s=new K(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new ee}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(tr,Hr,this.up):Yn.lookAt(Hr,tr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Yn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,Id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new K(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new K,Kn=new K,po=new K,$n=new K,cs=new K,ls=new K,Kl=new K,mo=new K,go=new K,xo=new K,_o=new Le,Mo=new Le,vo=new Le;class Un{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Kn.subVectors(n,e),po.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(Kn),l=Rn.dot(po),c=Kn.dot(Kn),h=Kn.dot(po),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),Mo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(vo,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Kn.subVectors(t,e),Rn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;cs.subVectors(s,n),ls.subVectors(r,n),mo.subVectors(t,n);const l=cs.dot(mo),c=ls.dot(mo);if(l<=0&&c<=0)return e.copy(n);go.subVectors(t,s);const h=cs.dot(go),d=ls.dot(go);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);xo.subVectors(t,r);const f=cs.dot(xo),m=ls.dot(xo);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ls,o);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Kl.subVectors(r,s),o=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Kl,o);const p=1/(g+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(cs,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=gd(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yo(a,r,t+1/3),this.g=yo(a,r,t),this.b=yo(a,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=k0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return de.fromWorkingColorSpace(qe.copy(this),t),Math.round(cn(qe.r*255,0,255))*65536+Math.round(cn(qe.g*255,0,255))*256+Math.round(cn(qe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=He){de.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Vr);const n=io(fi.h,Vr.h,e),s=io(fi.s,Vr.s,e),r=io(fi.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Ot;Ot.NAMES=k0;let Dd=0;class Ti extends ks{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ar(),this.name="",this.blending=Ts,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=tc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ve extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new K,Wr=new ce;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}}class z0 extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class B0 extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nd=0;const xn=new kt,bo=new Fe,hs=new K,dn=new Zi,er=new Zi,Be=new K;class We extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(U0(t)?B0:z0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(dn.min,er.min),dn.expandByPoint(Be),Be.addVectors(dn.max,er.max),dn.expandByPoint(Be)):(dn.expandByPoint(er.min),dn.expandByPoint(er.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Be.add(hs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new K,l[R]=new K;const c=new K,h=new K,d=new K,u=new ce,f=new ce,m=new ce,_=new K,g=new K;function p(R,S,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),m.sub(u);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[R].add(_),o[S].add(_),o[b].add(_),l[R].add(g),l[S].add(g),l[b].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const b=x[R],P=b.start,z=b.count;for(let H=P,W=P+z;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new K,v=new K,E=new K,w=new K;function T(R){E.fromBufferAttribute(s,R),w.copy(E);const S=o[R];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,S=x.length;R<S;++R){const b=x[R],P=b.start,z=b.count;for(let H=P,W=P+z;H<W;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new K,r=new K,a=new K,o=new K,l=new K,c=new K,h=new K,d=new K;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new $e(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new kt,Pi=new sl,Xr=new Ji,jl=new K,qr=new K,Yr=new K,Kr=new K,So=new K,$r=new K,Zl=new K,jr=new K;class Jt extends Fe{constructor(t=new We,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(So.fromBufferAttribute(d,t),a?$r.addScaledVector(So,h):$r.addScaledVector(So.sub(e),h))}e.add($r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Xr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Xr,jl)===null||Pi.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&($l.copy(r).invert(),Pi.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Zr(this,p,t,n,c,h,d,w,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);s=Zr(this,a,t,n,c,h,d,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=M;v<E;v+=3){const w=v,T=v+1,R=v+2;s=Zr(this,p,t,n,c,h,d,w,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=Zr(this,a,t,n,c,h,d,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,a,o){let l;if(t.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;jr.copy(o),jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qr),i.getVertexPosition(l,Yr),i.getVertexPosition(c,Kr);const h=Ud(i,t,e,n,qr,Yr,Kr,Zl);if(h){const d=new K;Un.getBarycoord(Zl,qr,Yr,Kr,d),s&&(h.uv=Un.getInterpolatedAttribute(s,o,l,c,d,new ce)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,d,new ce)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,d,new K),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new K,materialIndex:0};Un.getNormal(qr,Yr,Kr,u.normal),h.face=u,h.barycoord=d}return h}class Yi extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function m(_,g,p,x,M,v,E,w,T,R,S){const b=v/T,P=E/R,z=v/2,H=E/2,W=w/2,tt=T+1,O=R+1;let it=0,B=0;const nt=new K;for(let et=0;et<O;et++){const ot=et*P-H;for(let Q=0;Q<tt;Q++){const Ct=Q*b-z;nt[_]=Ct*x,nt[g]=ot*M,nt[p]=W,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Q/T),d.push(1-et/R),it+=1}}for(let et=0;et<R;et++)for(let ot=0;ot<T;ot++){const Q=u+ot+tt*et,Ct=u+ot+tt*(et+1),$=u+(ot+1)+tt*(et+1),xt=u+(ot+1)+tt*et;l.push(Q,Ct,xt),l.push(Ct,$,xt),B+=6}o.addGroup(f,B,S),f+=B,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function Od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function G0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Fd={clone:Ns,merge:tn};var kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class H0 extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new K,Jl=new ce,Ql=new ce;class bn extends H0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,ds=1;class Bd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(us,ds,t,e);s.layers=this.layers,this.add(s);const r=new bn(us,ds,t,e);r.layers=this.layers,this.add(r);const a=new bn(us,ds,t,e);a.layers=this.layers,this.add(a);const o=new bn(us,ds,t,e);o.layers=this.layers,this.add(o);const l=new bn(us,ds,t,e);l.layers=this.layers,this.add(l);const c=new bn(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class V0 extends Ze{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gd extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new V0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yi(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Mi});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=pn),new Bd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const wo=new K,Hd=new K,Vd=new ee;class Oi{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wo.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vd.getNormalMatrix(t),s=this.coplanarPoint(wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ji,Jr=new K;class rl{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,u-c,g-f,v-p).normalize(),n[1].setComponents(l+r,u+c,g+f,v+p).normalize(),n[2].setComponents(l+a,u+h,g+m,v+x).normalize(),n[3].setComponents(l-a,u-h,g-m,v-x).normalize(),n[4].setComponents(l-o,u-d,g-_,v-M).normalize(),e===ei)n[5].setComponents(l+o,u+d,g+_,v+M).normalize();else if(e===Ba)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Rr extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<c;M++){const v=M*d-r;m.push(v,-x,0),_.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,v=x+c*(p+1),E=x+1+c*(p+1),w=x+1+c*p;f.push(M,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ep=`#if defined( USE_POINTS_UV )
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
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pp=`#ifdef USE_NORMALMAP
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
#endif`,mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
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
}`,Jp=`#if DEPTH_PACKING == 3200
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
}`,Qp=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,o1=`#define LAMBERT
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
}`,c1=`#define LAMBERT
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
}`,l1=`#define MATCAP
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
}`,h1=`#define MATCAP
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
}`,u1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,f1=`#define PHONG
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
}`,p1=`#define PHONG
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
}`,m1=`#define STANDARD
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
}`,g1=`#define STANDARD
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
}`,x1=`#define TOON
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
}`,_1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,S1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:Kd,alphatest_fragment:$d,alphatest_pars_fragment:jd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:lf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:xf,displacementmap_pars_vertex:_f,displacementmap_vertex:Mf,emissivemap_fragment:vf,emissivemap_pars_fragment:yf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:kf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:If,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Of,lights_pars_begin:Ff,lights_toon_fragment:zf,lights_toon_pars_fragment:Bf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Zf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphinstance_vertex:sp,morphcolor_vertex:rp,morphnormal_vertex:ap,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:lp,normal_fragment_maps:hp,normal_pars_fragment:up,normal_pars_vertex:dp,normal_vertex:fp,normalmap_pars_fragment:pp,clearcoat_normal_fragment_begin:mp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:xp,iridescence_pars_fragment:_p,opaque_fragment:Mp,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:bp,dithering_fragment:Sp,dithering_pars_fragment:wp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ap,shadowmap_pars_vertex:Rp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Pp,skinbase_vertex:Ip,skinning_pars_vertex:Lp,skinning_vertex:Dp,skinnormal_vertex:Np,specularmap_fragment:Up,specularmap_pars_fragment:Op,tonemapping_fragment:Fp,tonemapping_pars_fragment:kp,transmission_fragment:zp,transmission_pars_fragment:Bp,uv_pars_fragment:Gp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Wp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Kp,cube_vert:$p,cube_frag:jp,depth_vert:Zp,depth_frag:Jp,distanceRGBA_vert:Qp,distanceRGBA_frag:t1,equirect_vert:e1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:s1,meshbasic_vert:r1,meshbasic_frag:a1,meshlambert_vert:o1,meshlambert_frag:c1,meshmatcap_vert:l1,meshmatcap_frag:h1,meshnormal_vert:u1,meshnormal_frag:d1,meshphong_vert:f1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:x1,meshtoon_frag:_1,points_vert:M1,points_frag:v1,shadow_vert:y1,shadow_frag:b1,sprite_vert:S1,sprite_frag:w1},It={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:tn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:tn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:tn([It.points,It.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:tn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:tn([It.common,It.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:tn([It.sprite,It.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:tn([It.common,It.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:tn([It.lights,It.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Qr={r:0,b:0,g:0},Li=new Sn,E1=new kt;function T1(i,t,e,n,s,r,a){const o=new Ot(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function m(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=m(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===Ya)?(h===void 0&&(h=new Jt(new Yi(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Ns(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(M.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Li)),h.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new Rr(2,2),new Si({name:"BackgroundMaterial",uniforms:Ns(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=de.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,M){x.getRGB(Qr,G0(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:g}}function A1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,P,z,H,W){let tt=!1;const O=d(H,z,P);r!==O&&(r=O,c(r.object)),tt=f(b,H,z,W),tt&&m(b,H,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,v(b,P,z,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,P,z){const H=z.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let tt=W[P.id];tt===void 0&&(tt={},W[P.id]=tt);let O=tt[H];return O===void 0&&(O=u(l()),tt[H]=O),O}function u(b){const P=[],z=[],H=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,P,z,H){const W=r.attributes,tt=P.attributes;let O=0;const it=z.getAttributes();for(const B in it)if(it[B].location>=0){const et=W[B];let ot=tt[B];if(ot===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;O++}return r.attributesNum!==O||r.index!==H}function m(b,P,z,H){const W={},tt=P.attributes;let O=0;const it=z.getAttributes();for(const B in it)if(it[B].location>=0){let et=tt[B];et===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),W[B]=ot,O++}r.attributes=W,r.attributesNum=O,r.index=H}function _(){const b=r.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),W[b]!==P&&(i.vertexAttribDivisor(b,P),W[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==b[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function M(b,P,z,H,W,tt,O){O===!0?i.vertexAttribIPointer(b,P,z,W,tt):i.vertexAttribPointer(b,P,z,H,W,tt)}function v(b,P,z,H){_();const W=H.attributes,tt=z.getAttributes(),O=P.defaultAttributeValues;for(const it in tt){const B=tt[it];if(B.location>=0){let nt=W[it];if(nt===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const et=nt.normalized,ot=nt.itemSize,Q=t.get(nt);if(Q===void 0)continue;const Ct=Q.buffer,$=Q.type,xt=Q.bytesPerElement,Tt=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===$c;if(nt.isInterleavedBufferAttribute){const ft=nt.data,Ft=ft.stride,Bt=nt.offset;if(ft.isInstancedInterleavedBuffer){for(let ct=0;ct<B.locationSize;ct++)p(B.location+ct,ft.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ct=0;ct<B.locationSize;ct++)g(B.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ct=0;ct<B.locationSize;ct++)M(B.location+ct,ot/B.locationSize,$,et,Ft*xt,(Bt+ot/B.locationSize*ct)*xt,Tt)}else{if(nt.isInstancedBufferAttribute){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,nt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ft=0;ft<B.locationSize;ft++)M(B.location+ft,ot/B.locationSize,$,et,ot*xt,ot/B.locationSize*ft*xt,Tt)}}else if(O!==void 0){const et=O[it];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(B.location,et);break;case 3:i.vertexAttrib3fv(B.location,et);break;case 4:i.vertexAttrib4fv(B.location,et);break;default:i.vertexAttrib1fv(B.location,et)}}}}x()}function E(){R();for(const b in n){const P=n[b];for(const z in P){const H=P[z];for(const W in H)h(H[W].object),delete H[W];delete P[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const z in P){const H=P[z];for(const W in H)h(H[W].object),delete H[W];delete P[z]}delete n[b.id]}function T(b){for(const P in n){const z=n[P];if(z[b.id]===void 0)continue;const H=z[b.id];for(const W in H)h(H[W].object),delete H[W];delete z[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function R1(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==On&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ri&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function P1(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Oi,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(m,u,M,f);for(let E=0;E!==M;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function I1(i){let t=new WeakMap;function e(a,o){return o===cc?a.mapping=Ps:o===lc&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cc||o===lc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class X0 extends H0{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ws=4,th=[.125,.215,.35,.446,.526,.582],zi=20,Eo=new X0,eh=new Ot;let To=null,Ao=0,Ro=0,Co=!1;const Fi=(1+Math.sqrt(5))/2,fs=1/Fi,nh=[new K(-Fi,fs,0),new K(Fi,fs,0),new K(-fs,0,Fi),new K(fs,0,Fi),new K(0,Fi,-fs),new K(0,Fi,fs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class ih{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ao,Ro),this._renderer.xr.enabled=Co,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Tr,format:On,colorSpace:Fs,depthBuffer:!1},s=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L1(r)),this._blurMaterial=D1(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s){const o=new bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(eh),h.toneMapping=vi,h.autoClear=!1;const f=new Ve({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Jt(new Yi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(eh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const M=this._cubeSize;ta(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ta(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nh[(s-r-1)%nh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Jt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):zi;g>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zi}`);const p=[];let x=0;for(let T=0;T<zi;++T){const R=T/_,S=Math.exp(-R*R/2);p.push(S),T===0?x+=S:T<g&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;const v=this._sizeLods[s],E=3*v*(s>M-ws?s-M+ws:0),w=4*(this._cubeSize-v);ta(e,E,w,3*v,2*v),l.setRenderTarget(e),l.render(d,Eo)}}function L1(i){const t=[],e=[],n=[];let s=i;const r=i-ws+1+th.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ws?l=th[a-i+ws-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*f),M=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(S,_*m*w),M.set(u,g*m*w);const b=[w,w,w,w,w,w];v.set(b,p*m*w)}const E=new We;E.setAttribute("position",new $e(x,_)),E.setAttribute("uv",new $e(M,g)),E.setAttribute("faceIndex",new $e(v,p)),t.push(E),s>ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function D1(i,t,e){const n=new Float32Array(zi),s=new K(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function rh(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ah(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function N1(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cc||l===lc,h=l===Ps||l===Is;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ih(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ih(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function U1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O1(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const E=x[M+0],w=x[M+1],T=x[M+2];u.push(E,w,w,T,T,E)}}else if(m!==void 0){const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const E=M+0,w=M+1,T=M+2;u.push(E,w,w,T,T,E)}}else return;const g=new(U0(u)?B0:z0)(u,1);g.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function F1(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function k1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z1(i,t,e){const n=new WeakMap,s=new Le;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*E*4*d),T=new il(w,v,E,d);T.type=Gn,T.needsUpdate=!0;const R=M*4;for(let b=0;b<d;b++){const P=g[b],z=p[b],H=x[b],W=v*E*4*b;for(let tt=0;tt<P.count;tt++){const O=tt*R;f===!0&&(s.fromBufferAttribute(P,tt),w[W+O+0]=s.x,w[W+O+1]=s.y,w[W+O+2]=s.z,w[W+O+3]=0),m===!0&&(s.fromBufferAttribute(z,tt),w[W+O+4]=s.x,w[W+O+5]=s.y,w[W+O+6]=s.z,w[W+O+7]=0),_===!0&&(s.fromBufferAttribute(H,tt),w[W+O+8]=s.x,w[W+O+9]=s.y,w[W+O+10]=s.z,w[W+O+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new ce(v,E)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function B1(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class q0 extends Ze{constructor(t,e,n,s,r,a,o,l,c,h=As){if(h!==As&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Xi),n===void 0&&h===Ds&&(n=Ls),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Y0=new Ze,oh=new q0(1,1),K0=new il,$0=new Ed,j0=new V0,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function H1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function V1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function W1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function X1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),ze(e,n)}}function q1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),ze(e,n)}}function Y1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),ze(e,n)}}function K1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function j1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Z1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function J1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=N0,r=oh):r=Y0,e.setTexture2D(t||r,s)}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$0,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||j0,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||K0,s)}function am(i){switch(i){case 5126:return G1;case 35664:return H1;case 35665:return V1;case 35666:return W1;case 35674:return X1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return K1;case 35667:case 35671:return $1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}function om(i,t){i.uniform1fv(this.addr,t)}function cm(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function lm(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function hm(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function um(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dm(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fm(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pm(i,t){i.uniform1iv(this.addr,t)}function mm(i,t){i.uniform2iv(this.addr,t)}function gm(i,t){i.uniform3iv(this.addr,t)}function xm(i,t){i.uniform4iv(this.addr,t)}function _m(i,t){i.uniform1uiv(this.addr,t)}function Mm(i,t){i.uniform2uiv(this.addr,t)}function vm(i,t){i.uniform3uiv(this.addr,t)}function ym(i,t){i.uniform4uiv(this.addr,t)}function bm(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Y0,r[a])}function Sm(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$0,r[a])}function wm(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||j0,r[a])}function Em(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||K0,r[a])}function Tm(i){switch(i){case 5126:return om;case 35664:return cm;case 35665:return lm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return xm;case 5125:return _m;case 36294:return Mm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Em}}class Am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=am(e.type)}}class Rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tm(e.type)}}class Cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function Pm(i,t,e){const n=i.name,s=n.length;for(Po.lastIndex=0;;){const r=Po.exec(n),a=Po.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fh(e,c===void 0?new Am(o,i,t):new Rm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Cm(o),fh(e,d)),e=d}}}class ka{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Pm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ph(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Im=37297;let Lm=0;function Dm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const mh=new ee;function Nm(i){de._getMatrix(mh,de.workingColorSpace,i);const t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Ka:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dm(i.getShaderSource(t),a)}else return s}function Um(i,t){const e=Nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(i,t){let e;switch(t){case Qu:e="Linear";break;case td:e="Reinhard";break;case ed:e="Cineon";break;case nd:e="ACESFilmic";break;case sd:e="AgX";break;case rd:e="Neutral";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new K;function Fm(){de.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function zm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Mr(i){return i!==""}function xh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(i){return i.replace(Gm,Vm)}const Hm=new Map;function Vm(i,t){let e=ne[t];if(e===void 0){const n=Hm.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(Wm,Xm)}function Xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Km(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function $m(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qa:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=qm(e),c=Ym(e),h=Km(e),d=$m(e),u=jm(e),f=km(e),m=zm(r),_=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(g=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?ne.tonemapping_pars_fragment:"",e.toneMapping!==vi?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),a=kc(a),a=xh(a,e),a=_h(a,e),o=kc(o),o=xh(o,e),o=_h(o,e),a=Mh(a),o=Mh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+a,v=x+p+o,E=ph(s,s.VERTEX_SHADER,M),w=ph(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(E).trim(),W=s.getShaderInfoLog(w).trim();let tt=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{const it=gh(s,E,"vertex"),B=gh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+it+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||W==="")&&(O=!1);O&&(P.diagnostics={runnable:tt,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(w),R=new ka(s,_),S=Bm(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Im)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Jm++,this.code=t,this.usedTimes=0}}function eg(i,t,e,n,s,r,a){const o=new F0,l=new Qm,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,z,H){const W=z.fog,tt=H.geometry,O=S.isMeshStandardMaterial?z.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),B=it&&it.mapping===Ya?it.image.height:null,nt=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const et=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ot=et!==void 0?et.length:0;let Q=0;tt.morphAttributes.position!==void 0&&(Q=1),tt.morphAttributes.normal!==void 0&&(Q=2),tt.morphAttributes.color!==void 0&&(Q=3);let Ct,$,xt,Tt;if(nt){const ie=Bn[nt];Ct=ie.vertexShader,$=ie.fragmentShader}else Ct=S.vertexShader,$=S.fragmentShader,l.update(S),xt=l.getVertexShaderID(S),Tt=l.getFragmentShaderID(S);const ft=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Bt=H.isInstancedMesh===!0,ct=H.isBatchedMesh===!0,Dt=!!S.map,mt=!!S.matcap,Zt=!!it,G=!!S.aoMap,De=!!S.lightMap,se=!!S.bumpMap,Pt=!!S.normalMap,qt=!!S.displacementMap,re=!!S.emissiveMap,Gt=!!S.metalnessMap,I=!!S.roughnessMap,A=S.anisotropy>0,Z=S.clearcoat>0,_t=S.dispersion>0,Mt=S.iridescence>0,gt=S.sheen>0,y=S.transmission>0,L=A&&!!S.anisotropyMap,N=Z&&!!S.clearcoatMap,k=Z&&!!S.clearcoatNormalMap,F=Z&&!!S.clearcoatRoughnessMap,D=Mt&&!!S.iridescenceMap,ht=Mt&&!!S.iridescenceThicknessMap,J=gt&&!!S.sheenColorMap,lt=gt&&!!S.sheenRoughnessMap,Et=!!S.specularMap,St=!!S.specularColorMap,wt=!!S.specularIntensityMap,U=y&&!!S.transmissionMap,yt=y&&!!S.thicknessMap,V=!!S.gradientMap,st=!!S.alphaMap,vt=S.alphaTest>0,bt=!!S.alphaHash,Ut=!!S.extensions;let $t=vi;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&($t=i.toneMapping);const le={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:$,defines:S.defines,customVertexShaderID:xt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ct,batchingColor:ct&&H._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,instancingMorph:Bt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Fs,alphaToCoverage:!!S.alphaToCoverage,map:Dt,matcap:mt,envMap:Zt,envMapMode:Zt&&it.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:De,bumpMap:se,normalMap:Pt,displacementMap:u&&qt,emissiveMap:re,normalMapObjectSpace:Pt&&S.normalMapType===cd,normalMapTangentSpace:Pt&&S.normalMapType===nl,metalnessMap:Gt,roughnessMap:I,anisotropy:A,anisotropyMap:L,clearcoat:Z,clearcoatMap:N,clearcoatNormalMap:k,clearcoatRoughnessMap:F,dispersion:_t,iridescence:Mt,iridescenceMap:D,iridescenceThicknessMap:ht,sheen:gt,sheenColorMap:J,sheenRoughnessMap:lt,specularMap:Et,specularColorMap:St,specularIntensityMap:wt,transmission:y,transmissionMap:U,thicknessMap:yt,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:bt,combine:S.combine,mapUv:Dt&&_(S.map.channel),aoMapUv:G&&_(S.aoMap.channel),lightMapUv:De&&_(S.lightMap.channel),bumpMapUv:se&&_(S.bumpMap.channel),normalMapUv:Pt&&_(S.normalMap.channel),displacementMapUv:qt&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:Gt&&_(S.metalnessMap.channel),roughnessMapUv:I&&_(S.roughnessMap.channel),anisotropyMapUv:L&&_(S.anisotropyMap.channel),clearcoatMapUv:N&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:k&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:J&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(S.sheenRoughnessMap.channel),specularMapUv:Et&&_(S.specularMap.channel),specularColorMapUv:St&&_(S.specularColorMap.channel),specularIntensityMapUv:wt&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Pt||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!tt.attributes.uv&&(Dt||st),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ft,skinning:H.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:Dt&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_e,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const b=m[S.type];let P;if(b){const z=Bn[b];P=Fd.clone(z.uniforms)}else P=S.uniforms;return P}function E(S,b){let P;for(let z=0,H=h.length;z<H;z++){const W=h[z];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Zm(i,b,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function ng(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ig(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,m,_,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function o(d,u,f,m,_,g){const p=a(d,u,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,_,g){const p=a(d,u,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||ig),n.length>1&&n.sort(u||yh),s.length>1&&s.sort(u||yh)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function sg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new bh,i.set(n,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Ot};break;case"SpotLight":e={position:new K,direction:new K,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let og=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){const t=new rg,e=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const s=new K,r=new kt,a=new kt;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,E=0,w=0,T=0;c.sort(cg);for(let S=0,b=c.length;S<b;S++){const P=c[S],z=P.color,H=P.intensity,W=P.distance,tt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],H);T++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,B=e.get(P);B.shadowIntensity=it.intensity,B.shadowBias=it.bias,B.shadowNormalBias=it.normalBias,B.shadowRadius=it.radius,B.shadowMapSize=it.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=O,f++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(z).multiplyScalar(H),O.distance=W,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[_]=O;const it=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,it.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=it.matrix,P.castShadow){const B=e.get(P);B.shadowIntensity=it.intensity,B.shadowBias=it.bias,B.shadowNormalBias=it.normalBias,B.shadowRadius=it.radius,B.shadowMapSize=it.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=tt,v++}_++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(z).multiplyScalar(H),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=O,g++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const it=P.shadow,B=e.get(P);B.shadowIntensity=it.intensity,B.shadowBias=it.bias,B.shadowNormalBias=it.normalBias,B.shadowRadius=it.radius,B.shadowMapSize=it.mapSize,B.shadowCameraNear=it.camera.near,B.shadowCameraFar=it.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=O,m++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(H),O.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=O,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=f,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=T,n.version=og++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Sh(i){const t=new lg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function hg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sh(i),t.set(s,[o])):r>=a.length?(o=new Sh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ug extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dg extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(i,t,e){let n=new rl;const s=new ce,r=new ce,a=new Le,o=new ug({depthPacking:od}),l=new dg,c={},h=e.maxTextureSize,d={[bi]:sn,[sn]:bi,[_e]:_e},u=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new We;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let p=this.type;this.render=function(w,T,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==Jn&&this.type===Jn,W=p===Jn&&this.type!==Jn;for(let tt=0,O=w.length;tt<O;tt++){const it=w[tt],B=it.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const nt=B.getFrameExtents();if(s.multiply(nt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,B.mapSize.y=r.y)),B.map===null||H===!0||W===!0){const ot=this.type!==Jn?{minFilter:je,magFilter:je}:{};B.map!==null&&B.map.dispose(),B.map=new qi(s.x,s.y,ot),B.map.texture.name=it.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const et=B.getViewportCount();for(let ot=0;ot<et;ot++){const Q=B.getViewport(ot);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),z.viewport(a),B.updateMatrices(it,ot),n=B.getFrustum(),v(T,R,B.camera,it,this.type)}B.isPointLightShadow!==!0&&this.type===Jn&&x(B,R),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,P)};function x(w,T){const R=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,R,f,_,null)}function M(w,T,R,S){let b=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=b.uuid,H=T.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let tt=W[H];tt===void 0&&(tt=b.clone(),W[H]=tt,T.addEventListener("dispose",E)),b=tt}if(b.visible=T.visible,b.wireframe=T.wireframe,S===Jn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=R}return b}function v(w,T,R,S,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const H=t.update(w),W=w.material;if(Array.isArray(W)){const tt=H.groups;for(let O=0,it=tt.length;O<it;O++){const B=tt[O],nt=W[B.materialIndex];if(nt&&nt.visible){const et=M(w,nt,S,b);w.onBeforeShadow(i,w,T,R,H,et,B),i.renderBufferDirect(R,null,H,et,w,B),w.onAfterShadow(i,w,T,R,H,et,B)}}}else if(W.visible){const tt=M(w,W,S,b);w.onBeforeShadow(i,w,T,R,H,tt,null),i.renderBufferDirect(R,null,H,tt,w,null),w.onAfterShadow(i,w,T,R,H,tt,null)}}const z=w.children;for(let H=0,W=z.length;H<W;H++)v(z[H],T,R,S,b)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const gg={[ec]:nc,[ic]:ac,[sc]:oc,[Cs]:rc,[nc]:ec,[ac]:ic,[oc]:sc,[rc]:Cs};function xg(i,t){function e(){let U=!1;const yt=new Le;let V=null;const st=new Le(0,0,0,0);return{setMask:function(vt){V!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),V=vt)},setLocked:function(vt){U=vt},setClear:function(vt,bt,Ut,$t,le){le===!0&&(vt*=$t,bt*=$t,Ut*=$t),yt.set(vt,bt,Ut,$t),st.equals(yt)===!1&&(i.clearColor(vt,bt,Ut,$t),st.copy(yt))},reset:function(){U=!1,V=null,st.set(-1,0,0,0)}}}function n(){let U=!1,yt=!1,V=null,st=null,vt=null;return{setReversed:function(bt){if(yt!==bt){const Ut=t.get("EXT_clip_control");yt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const $t=vt;vt=null,this.setClear($t)}yt=bt},getReversed:function(){return yt},setTest:function(bt){bt?ft(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(bt){V!==bt&&!U&&(i.depthMask(bt),V=bt)},setFunc:function(bt){if(yt&&(bt=gg[bt]),st!==bt){switch(bt){case ec:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case ac:i.depthFunc(i.GREATER);break;case oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){U=bt},setClear:function(bt){vt!==bt&&(yt&&(bt=1-bt),i.clearDepth(bt),vt=bt)},reset:function(){U=!1,V=null,st=null,vt=null,yt=!1}}}function s(){let U=!1,yt=null,V=null,st=null,vt=null,bt=null,Ut=null,$t=null,le=null;return{setTest:function(ie){U||(ie?ft(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ie){yt!==ie&&!U&&(i.stencilMask(ie),yt=ie)},setFunc:function(ie,ln,Je){(V!==ie||st!==ln||vt!==Je)&&(i.stencilFunc(ie,ln,Je),V=ie,st=ln,vt=Je)},setOp:function(ie,ln,Je){(bt!==ie||Ut!==ln||$t!==Je)&&(i.stencilOp(ie,ln,Je),bt=ie,Ut=ln,$t=Je)},setLocked:function(ie){U=ie},setClear:function(ie){le!==ie&&(i.clearStencil(ie),le=ie)},reset:function(){U=!1,yt=null,V=null,st=null,vt=null,bt=null,Ut=null,$t=null,le=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,E=null,w=null,T=new Ot(0,0,0),R=0,S=!1,b=null,P=null,z=null,H=null,W=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,it=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=it>=1):B.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=it>=2);let nt=null,et={};const ot=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),Ct=new Le().fromArray(ot),$=new Le().fromArray(Q);function xt(U,yt,V,st){const vt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(U,bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<V;Ut++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(yt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return bt}const Tt={};Tt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(Cs),se(!1),Pt(Rl),ft(i.CULL_FACE),G(Mi);function ft(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ft(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Bt(U,yt){return d[U]!==yt?(i.bindFramebuffer(U,yt),d[U]=yt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ct(U,yt){let V=f,st=!1;if(U){V=u.get(yt),V===void 0&&(V=[],u.set(yt,V));const vt=U.textures;if(V.length!==vt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Ut=vt.length;bt<Ut;bt++)V[bt]=i.COLOR_ATTACHMENT0+bt;V.length=vt.length,st=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,st=!0);st&&i.drawBuffers(V)}function Dt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const mt={[ki]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};mt[Ou]=i.MIN,mt[Fu]=i.MAX;const Zt={[ku]:i.ZERO,[zu]:i.ONE,[Bu]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function G(U,yt,V,st,vt,bt,Ut,$t,le,ie){if(U===Mi){_===!0&&(Ft(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),U!==Du){if(U!==g||ie!==S){if((p!==ki||v!==ki)&&(i.blendEquation(i.FUNC_ADD),p=ki,v=ki),ie)switch(U){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,M=null,E=null,w=null,T.set(0,0,0),R=0,g=U,S=ie}return}vt=vt||yt,bt=bt||V,Ut=Ut||st,(yt!==p||vt!==v)&&(i.blendEquationSeparate(mt[yt],mt[vt]),p=yt,v=vt),(V!==x||st!==M||bt!==E||Ut!==w)&&(i.blendFuncSeparate(Zt[V],Zt[st],Zt[bt],Zt[Ut]),x=V,M=st,E=bt,w=Ut),($t.equals(T)===!1||le!==R)&&(i.blendColor($t.r,$t.g,$t.b,le),T.copy($t),R=le),g=U,S=!1}function De(U,yt){U.side===_e?Ft(i.CULL_FACE):ft(i.CULL_FACE);let V=U.side===sn;yt&&(V=!V),se(V),U.blending===Ts&&U.transparent===!1?G(Mi):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const st=U.stencilWrite;o.setTest(st),st&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function Pt(U){U!==Pu?(ft(i.CULL_FACE),U!==P&&(U===Rl?i.cullFace(i.BACK):U===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),P=U}function qt(U){U!==z&&(O&&i.lineWidth(U),z=U)}function re(U,yt,V){U?(ft(i.POLYGON_OFFSET_FILL),(H!==yt||W!==V)&&(i.polygonOffset(yt,V),H=yt,W=V)):Ft(i.POLYGON_OFFSET_FILL)}function Gt(U){U?ft(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function I(U){U===void 0&&(U=i.TEXTURE0+tt-1),nt!==U&&(i.activeTexture(U),nt=U)}function A(U,yt,V){V===void 0&&(nt===null?V=i.TEXTURE0+tt-1:V=nt);let st=et[V];st===void 0&&(st={type:void 0,texture:void 0},et[V]=st),(st.type!==U||st.texture!==yt)&&(nt!==V&&(i.activeTexture(V),nt=V),i.bindTexture(U,yt||Tt[U]),st.type=U,st.texture=yt)}function Z(){const U=et[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function y(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(U){Ct.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ct.copy(U))}function lt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Et(U,yt){let V=c.get(yt);V===void 0&&(V=new WeakMap,c.set(yt,V));let st=V.get(U);st===void 0&&(st=i.getUniformBlockIndex(yt,U.name),V.set(U,st))}function St(U,yt){const st=c.get(yt).get(U);l.get(yt)!==st&&(i.uniformBlockBinding(yt,st,U.__bindingPointIndex),l.set(yt,st))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,et={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,x=null,M=null,v=null,E=null,w=null,T=new Ot(0,0,0),R=0,S=!1,b=null,P=null,z=null,H=null,W=null,Ct.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Ft,bindFramebuffer:Bt,drawBuffers:ct,useProgram:Dt,setBlending:G,setMaterial:De,setFlipSided:se,setCullFace:Pt,setLineWidth:qt,setPolygonOffset:re,setScissorTest:Gt,activeTexture:I,bindTexture:A,unbindTexture:Z,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:D,texImage3D:ht,updateUBOMapping:Et,uniformBlockBinding:St,texStorage2D:k,texStorage3D:F,texSubImage2D:gt,texSubImage3D:y,compressedTexSubImage2D:L,compressedTexSubImage3D:N,scissor:J,viewport:lt,reset:wt}}function wh(i,t,e,n){const s=_g(n);switch(e){case R0:return i*t;case P0:return i*t;case I0:return i*t*2;case Jc:return i*t/s.components*s.byteLength;case Qc:return i*t/s.components*s.byteLength;case L0:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case C0:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:case pc:return Math.max(i,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(t,8)/2;case mc:case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Lc:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case D0:case Nc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case ri:case E0:return{byteLength:1,components:1};case wr:case T0:case Tr:return{byteLength:2,components:1};case jc:case Zc:return{byteLength:2,components:4};case Xi:case $c:case Gn:return{byteLength:4,components:1};case A0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,A){return f?new OffscreenCanvas(I,A):Ga("canvas")}function _(I,A,Z){let _t=1;const Mt=Gt(I);if((Mt.width>Z||Mt.height>Z)&&(_t=Z/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const gt=Math.floor(_t*Mt.width),y=Math.floor(_t*Mt.height);d===void 0&&(d=m(gt,y));const L=A?m(gt,y):d;return L.width=gt,L.height=y,L.getContext("2d").drawImage(I,0,0,gt,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+y+")."),L}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,Z,_t,Mt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt=A;if(A===i.RED&&(Z===i.FLOAT&&(gt=i.R32F),Z===i.HALF_FLOAT&&(gt=i.R16F),Z===i.UNSIGNED_BYTE&&(gt=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(gt=i.R8UI),Z===i.UNSIGNED_SHORT&&(gt=i.R16UI),Z===i.UNSIGNED_INT&&(gt=i.R32UI),Z===i.BYTE&&(gt=i.R8I),Z===i.SHORT&&(gt=i.R16I),Z===i.INT&&(gt=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(gt=i.RG32F),Z===i.HALF_FLOAT&&(gt=i.RG16F),Z===i.UNSIGNED_BYTE&&(gt=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(gt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(gt=i.RG16UI),Z===i.UNSIGNED_INT&&(gt=i.RG32UI),Z===i.BYTE&&(gt=i.RG8I),Z===i.SHORT&&(gt=i.RG16I),Z===i.INT&&(gt=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),Z===i.UNSIGNED_INT&&(gt=i.RGB32UI),Z===i.BYTE&&(gt=i.RGB8I),Z===i.SHORT&&(gt=i.RGB16I),Z===i.INT&&(gt=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(gt=i.RGBA32UI),Z===i.BYTE&&(gt=i.RGBA8I),Z===i.SHORT&&(gt=i.RGBA16I),Z===i.INT&&(gt=i.RGBA32I)),A===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),A===i.RGBA){const y=Mt?Ka:de.getTransfer(_t);Z===i.FLOAT&&(gt=i.RGBA32F),Z===i.HALF_FLOAT&&(gt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(gt=y===Me?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function v(I,A){let Z;return I?A===null||A===Xi||A===Ls?Z=i.DEPTH24_STENCIL8:A===Gn?Z=i.DEPTH32F_STENCIL8:A===wr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xi||A===Ls?Z=i.DEPTH_COMPONENT24:A===Gn?Z=i.DEPTH_COMPONENT32F:A===wr&&(Z=i.DEPTH_COMPONENT16),Z}function E(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==je&&I.minFilter!==pn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function w(I){const A=I.target;A.removeEventListener("dispose",w),R(A),A.isVideoTexture&&h.delete(A)}function T(I){const A=I.target;A.removeEventListener("dispose",T),b(A)}function R(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Z=I.source,_t=u.get(Z);if(_t){const Mt=_t[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&S(I),Object.keys(_t).length===0&&u.delete(Z)}n.remove(I)}function S(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Z=I.source,_t=u.get(Z);delete _t[A.__cacheKey],a.memory.textures--}function b(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Mt=0;Mt<A.__webglFramebuffer[_t].length;Mt++)i.deleteFramebuffer(A.__webglFramebuffer[_t][Mt]);else i.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)i.deleteFramebuffer(A.__webglFramebuffer[_t]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=I.textures;for(let _t=0,Mt=Z.length;_t<Mt;_t++){const gt=n.get(Z[_t]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(Z[_t])}n.remove(I)}let P=0;function z(){P=0}function H(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function W(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function tt(I,A){const Z=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const _t=I.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Z,I,A);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function O(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){$(Z,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function it(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){$(Z,I,A);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function B(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){xt(Z,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const nt={[za]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},et={[je]:i.NEAREST,[w0]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},ot={[ld]:i.NEVER,[md]:i.ALWAYS,[hd]:i.LESS,[N0]:i.LEQUAL,[ud]:i.EQUAL,[pd]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function Q(I,A){if(A.type===Gn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===pn||A.magFilter===eo||A.magFilter===Ur||A.magFilter===_i||A.minFilter===pn||A.minFilter===eo||A.minFilter===Ur||A.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,nt[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,nt[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,nt[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,et[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,et[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===je||A.minFilter!==Ur&&A.minFilter!==_i||A.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ct(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",w));const _t=A.source;let Mt=u.get(_t);Mt===void 0&&(Mt={},u.set(_t,Mt));const gt=W(A);if(gt!==I.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),Mt[gt].usedTimes++;const y=Mt[I.__cacheKey];y!==void 0&&(Mt[I.__cacheKey].usedTimes--,y.usedTimes===0&&S(A)),I.__cacheKey=gt,I.__webglTexture=Mt[gt].texture}return Z}function $(I,A,Z){let _t=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=i.TEXTURE_3D);const Mt=Ct(I,A),gt=A.source;e.bindTexture(_t,I.__webglTexture,i.TEXTURE0+Z);const y=n.get(gt);if(gt.version!==y.__version||Mt===!0){e.activeTexture(i.TEXTURE0+Z);const L=de.getPrimaries(de.workingColorSpace),N=A.colorSpace===Qn?null:de.getPrimaries(A.colorSpace),k=A.colorSpace===Qn||L===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let F=_(A.image,!1,s.maxTextureSize);F=re(A,F);const D=r.convert(A.format,A.colorSpace),ht=r.convert(A.type);let J=M(A.internalFormat,D,ht,A.colorSpace,A.isVideoTexture);Q(_t,A);let lt;const Et=A.mipmaps,St=A.isVideoTexture!==!0,wt=y.__version===void 0||Mt===!0,U=gt.dataReady,yt=E(A,F);if(A.isDepthTexture)J=v(A.format===Ds,A.type),wt&&(St?e.texStorage2D(i.TEXTURE_2D,1,J,F.width,F.height):e.texImage2D(i.TEXTURE_2D,0,J,F.width,F.height,0,D,ht,null));else if(A.isDataTexture)if(Et.length>0){St&&wt&&e.texStorage2D(i.TEXTURE_2D,yt,J,Et[0].width,Et[0].height);for(let V=0,st=Et.length;V<st;V++)lt=Et[V],St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,ht,lt.data):e.texImage2D(i.TEXTURE_2D,V,J,lt.width,lt.height,0,D,ht,lt.data);A.generateMipmaps=!1}else St?(wt&&e.texStorage2D(i.TEXTURE_2D,yt,J,F.width,F.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,D,ht,F.data)):e.texImage2D(i.TEXTURE_2D,0,J,F.width,F.height,0,D,ht,F.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){St&&wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,J,Et[0].width,Et[0].height,F.depth);for(let V=0,st=Et.length;V<st;V++)if(lt=Et[V],A.format!==On)if(D!==null)if(St){if(U)if(A.layerUpdates.size>0){const vt=wh(lt.width,lt.height,A.format,A.type);for(const bt of A.layerUpdates){const Ut=lt.data.subarray(bt*vt/lt.data.BYTES_PER_ELEMENT,(bt+1)*vt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,bt,lt.width,lt.height,1,D,Ut)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,F.depth,D,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,J,lt.width,lt.height,F.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,F.depth,D,ht,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,J,lt.width,lt.height,F.depth,0,D,ht,lt.data)}else{St&&wt&&e.texStorage2D(i.TEXTURE_2D,yt,J,Et[0].width,Et[0].height);for(let V=0,st=Et.length;V<st;V++)lt=Et[V],A.format!==On?D!==null?St?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,J,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,ht,lt.data):e.texImage2D(i.TEXTURE_2D,V,J,lt.width,lt.height,0,D,ht,lt.data)}else if(A.isDataArrayTexture)if(St){if(wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,J,F.width,F.height,F.depth),U)if(A.layerUpdates.size>0){const V=wh(F.width,F.height,A.format,A.type);for(const st of A.layerUpdates){const vt=F.data.subarray(st*V/F.data.BYTES_PER_ELEMENT,(st+1)*V/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,F.width,F.height,1,D,ht,vt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,D,ht,F.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,F.width,F.height,F.depth,0,D,ht,F.data);else if(A.isData3DTexture)St?(wt&&e.texStorage3D(i.TEXTURE_3D,yt,J,F.width,F.height,F.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,D,ht,F.data)):e.texImage3D(i.TEXTURE_3D,0,J,F.width,F.height,F.depth,0,D,ht,F.data);else if(A.isFramebufferTexture){if(wt)if(St)e.texStorage2D(i.TEXTURE_2D,yt,J,F.width,F.height);else{let V=F.width,st=F.height;for(let vt=0;vt<yt;vt++)e.texImage2D(i.TEXTURE_2D,vt,J,V,st,0,D,ht,null),V>>=1,st>>=1}}else if(Et.length>0){if(St&&wt){const V=Gt(Et[0]);e.texStorage2D(i.TEXTURE_2D,yt,J,V.width,V.height)}for(let V=0,st=Et.length;V<st;V++)lt=Et[V],St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,D,ht,lt):e.texImage2D(i.TEXTURE_2D,V,J,D,ht,lt);A.generateMipmaps=!1}else if(St){if(wt){const V=Gt(F);e.texStorage2D(i.TEXTURE_2D,yt,J,V.width,V.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,ht,F)}else e.texImage2D(i.TEXTURE_2D,0,J,D,ht,F);g(A)&&p(_t),y.__version=gt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function xt(I,A,Z){if(A.image.length!==6)return;const _t=Ct(I,A),Mt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Z);const gt=n.get(Mt);if(Mt.version!==gt.__version||_t===!0){e.activeTexture(i.TEXTURE0+Z);const y=de.getPrimaries(de.workingColorSpace),L=A.colorSpace===Qn?null:de.getPrimaries(A.colorSpace),N=A.colorSpace===Qn||y===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const k=A.isCompressedTexture||A.image[0].isCompressedTexture,F=A.image[0]&&A.image[0].isDataTexture,D=[];for(let st=0;st<6;st++)!k&&!F?D[st]=_(A.image[st],!0,s.maxCubemapSize):D[st]=F?A.image[st].image:A.image[st],D[st]=re(A,D[st]);const ht=D[0],J=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),Et=M(A.internalFormat,J,lt,A.colorSpace),St=A.isVideoTexture!==!0,wt=gt.__version===void 0||_t===!0,U=Mt.dataReady;let yt=E(A,ht);Q(i.TEXTURE_CUBE_MAP,A);let V;if(k){St&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Et,ht.width,ht.height);for(let st=0;st<6;st++){V=D[st].mipmaps;for(let vt=0;vt<V.length;vt++){const bt=V[vt];A.format!==On?J!==null?St?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,bt.width,bt.height,J,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Et,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,bt.width,bt.height,J,lt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,Et,bt.width,bt.height,0,J,lt,bt.data)}}}else{if(V=A.mipmaps,St&&wt){V.length>0&&yt++;const st=Gt(D[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Et,st.width,st.height)}for(let st=0;st<6;st++)if(F){St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,D[st].width,D[st].height,J,lt,D[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Et,D[st].width,D[st].height,0,J,lt,D[st].data);for(let vt=0;vt<V.length;vt++){const Ut=V[vt].image[st].image;St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Ut.width,Ut.height,J,lt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Et,Ut.width,Ut.height,0,J,lt,Ut.data)}}else{St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,J,lt,D[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Et,J,lt,D[st]);for(let vt=0;vt<V.length;vt++){const bt=V[vt];St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,J,lt,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,Et,J,lt,bt.image[st])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),gt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Tt(I,A,Z,_t,Mt,gt){const y=r.convert(Z.format,Z.colorSpace),L=r.convert(Z.type),N=M(Z.internalFormat,y,L,Z.colorSpace),k=n.get(A),F=n.get(Z);if(F.__renderTarget=A,!k.__hasExternalTextures){const D=Math.max(1,A.width>>gt),ht=Math.max(1,A.height>>gt);Mt===i.TEXTURE_3D||Mt===i.TEXTURE_2D_ARRAY?e.texImage3D(Mt,gt,N,D,ht,A.depth,0,y,L,null):e.texImage2D(Mt,gt,N,D,ht,0,y,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Pt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,Mt,F.__webglTexture,0,se(A)):(Mt===i.TEXTURE_2D||Mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,Mt,F.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(I,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const _t=A.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,gt=v(A.stencilBuffer,Mt),y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=se(A);Pt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,gt,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,I)}else{const _t=A.textures;for(let Mt=0;Mt<_t.length;Mt++){const gt=_t[Mt],y=r.convert(gt.format,gt.colorSpace),L=r.convert(gt.type),N=M(gt.internalFormat,y,L,gt.colorSpace),k=se(A);Z&&Pt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,N,A.width,A.height):Pt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,N,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,N,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=n.get(A.depthTexture);_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),tt(A.depthTexture,0);const Mt=_t.__webglTexture,gt=se(A);if(A.depthTexture.format===As)Pt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Ds)Pt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Bt(I){const A=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const _t=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=_t}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ft(A.__webglFramebuffer,I)}else if(Z){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=i.createRenderbuffer(),ft(A.__webglDepthbuffer[_t],I,!1);else{const Mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,gt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ft(A.__webglDepthbuffer,I,!1);else{const _t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,A,Z){const _t=n.get(I);A!==void 0&&Tt(_t.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Bt(I)}function Dt(I){const A=I.texture,Z=n.get(I),_t=n.get(A);I.addEventListener("dispose",T);const Mt=I.textures,gt=I.isWebGLCubeRenderTarget===!0,y=Mt.length>1;if(y||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=A.version,a.memory.textures++),gt){Z.__webglFramebuffer=[];for(let L=0;L<6;L++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[L]=[];for(let N=0;N<A.mipmaps.length;N++)Z.__webglFramebuffer[L][N]=i.createFramebuffer()}else Z.__webglFramebuffer[L]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let L=0;L<A.mipmaps.length;L++)Z.__webglFramebuffer[L]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(y)for(let L=0,N=Mt.length;L<N;L++){const k=n.get(Mt[L]);k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Pt(I)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let L=0;L<Mt.length;L++){const N=Mt[L];Z.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[L]);const k=r.convert(N.format,N.colorSpace),F=r.convert(N.type),D=M(N.internalFormat,k,F,N.colorSpace,I.isXRRenderTarget===!0),ht=se(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,D,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,Z.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(Z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Q(i.TEXTURE_CUBE_MAP,A);for(let L=0;L<6;L++)if(A.mipmaps&&A.mipmaps.length>0)for(let N=0;N<A.mipmaps.length;N++)Tt(Z.__webglFramebuffer[L][N],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,N);else Tt(Z.__webglFramebuffer[L],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);g(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(y){for(let L=0,N=Mt.length;L<N;L++){const k=Mt[L],F=n.get(k);e.bindTexture(i.TEXTURE_2D,F.__webglTexture),Q(i.TEXTURE_2D,k),Tt(Z.__webglFramebuffer,I,k,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),g(k)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(L=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,_t.__webglTexture),Q(L,A),A.mipmaps&&A.mipmaps.length>0)for(let N=0;N<A.mipmaps.length;N++)Tt(Z.__webglFramebuffer[N],I,A,i.COLOR_ATTACHMENT0,L,N);else Tt(Z.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,L,0);g(A)&&p(L),e.unbindTexture()}I.depthBuffer&&Bt(I)}function mt(I){const A=I.textures;for(let Z=0,_t=A.length;Z<_t;Z++){const Mt=A[Z];if(g(Mt)){const gt=x(I),y=n.get(Mt).__webglTexture;e.bindTexture(gt,y),p(gt),e.unbindTexture()}}}const Zt=[],G=[];function De(I){if(I.samples>0){if(Pt(I)===!1){const A=I.textures,Z=I.width,_t=I.height;let Mt=i.COLOR_BUFFER_BIT;const gt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,y=n.get(I),L=A.length>1;if(L)for(let N=0;N<A.length;N++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,y.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let N=0;N<A.length;N++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,y.__webglColorRenderbuffer[N]);const k=n.get(A[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,Z,_t,0,0,Z,_t,Mt,i.NEAREST),l===!0&&(Zt.length=0,G.length=0,Zt.push(i.COLOR_ATTACHMENT0+N),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Zt.push(gt),G.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let N=0;N<A.length;N++){e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,y.__webglColorRenderbuffer[N]);const k=n.get(A[N]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function se(I){return Math.min(s.maxSamples,I.samples)}function Pt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function re(I,A){const Z=I.colorSpace,_t=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Fs&&Z!==Qn&&(de.getTransfer(Z)===Me?(_t!==On||Mt!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=it,this.setTextureCube=B,this.rebindTextures=ct,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Pt}function vg(i,t){function e(n,s=Qn){let r;const a=de.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===jc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===A0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===E0)return i.BYTE;if(n===T0)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===$c)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Tr)return i.HALF_FLOAT;if(n===R0)return i.ALPHA;if(n===C0)return i.RGB;if(n===On)return i.RGBA;if(n===P0)return i.LUMINANCE;if(n===I0)return i.LUMINANCE_ALPHA;if(n===As)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Jc)return i.RED;if(n===Qc)return i.RED_INTEGER;if(n===L0)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Da||n===Na||n===Ua||n===Oa)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===Mc||n===vc||n===yc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Lc||n===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===D0||n===Nc||n===Uc||n===Oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yg extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class nn extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Si({vertexShader:Sg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends ks{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null;const _=new Eg,g=e.getContextAttributes();let p=null,x=null;const M=[],v=[],E=new ce;let w=null;const T=new bn;T.viewport=new Le;const R=new bn;R.viewport=new Le;const S=[T,R],b=new yg;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let xt=M[$];return xt===void 0&&(xt=new Io,M[$]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function($){let xt=M[$];return xt===void 0&&(xt=new Io,M[$]=xt),xt.getGripSpace()},this.getHand=function($){let xt=M[$];return xt===void 0&&(xt=new Io,M[$]=xt),xt.getHandSpace()};function H($){const xt=v.indexOf($.inputSource);if(xt===-1)return;const Tt=M[xt];Tt!==void 0&&(Tt.update($.inputSource,$.frame,c||a),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<M.length;$++){const xt=v[$];xt!==null&&(v[$]=null,M[$].disconnect(xt))}P=null,z=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const xt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new qi(f.framebufferWidth,f.framebufferHeight,{format:On,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let xt=null,Tt=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=g.stencil?Ds:As,Tt=g.stencil?Ls:Xi);const Ft={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new qi(u.textureWidth,u.textureHeight,{format:On,type:ri,depthTexture:new q0(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt($){for(let xt=0;xt<$.removed.length;xt++){const Tt=$.removed[xt],ft=v.indexOf(Tt);ft>=0&&(v[ft]=null,M[ft].disconnect(Tt))}for(let xt=0;xt<$.added.length;xt++){const Tt=$.added[xt];let ft=v.indexOf(Tt);if(ft===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=v.length){v.push(Tt),ft=Bt;break}else if(v[Bt]===null){v[Bt]=Tt,ft=Bt;break}if(ft===-1)break}const Ft=M[ft];Ft&&Ft.connect(Tt)}}const O=new K,it=new K;function B($,xt,Tt){O.setFromMatrixPosition(xt.matrixWorld),it.setFromMatrixPosition(Tt.matrixWorld);const ft=O.distanceTo(it),Ft=xt.projectionMatrix.elements,Bt=Tt.projectionMatrix.elements,ct=Ft[14]/(Ft[10]-1),Dt=Ft[14]/(Ft[10]+1),mt=(Ft[9]+1)/Ft[5],Zt=(Ft[9]-1)/Ft[5],G=(Ft[8]-1)/Ft[0],De=(Bt[8]+1)/Bt[0],se=ct*G,Pt=ct*De,qt=ft/(-G+De),re=qt*-G;if(xt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(qt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Gt=ct+qt,I=Dt+qt,A=se-re,Z=Pt+(ft-re),_t=mt*Dt/I*Gt,Mt=Zt*Dt/I*Gt;$.projectionMatrix.makePerspective(A,Z,_t,Mt,Gt,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,xt){xt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(xt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let xt=$.near,Tt=$.far;_.texture!==null&&(_.depthNear>0&&(xt=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),b.near=R.near=T.near=xt,b.far=R.far=T.far=Tt,(P!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far),T.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;const ft=$.parent,Ft=b.cameras;nt(b,ft);for(let Bt=0;Bt<Ft.length;Bt++)nt(Ft[Bt],ft);Ft.length===2?B(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),et($,b,ft)};function et($,xt,Tt){Tt===null?$.matrix.copy(xt.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(xt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fc*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ot=null;function Q($,xt){if(h=xt.getViewerPose(c||a),m=xt,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ft=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let Bt=0;Bt<Tt.length;Bt++){const ct=Tt[Bt];let Dt=null;if(f!==null)Dt=f.getViewport(ct);else{const Zt=d.getViewSubImage(u,ct);Dt=Zt.viewport,Bt===0&&(t.setRenderTargetTextures(x,Zt.colorTexture,u.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(x))}let mt=S[Bt];mt===void 0&&(mt=new bn,mt.layers.enable(Bt),mt.viewport=new Le,S[Bt]=mt),mt.matrix.fromArray(ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Bt===0&&(b.matrix.copy(mt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(mt)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Bt=d.getDepthInformation(Tt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const ft=v[Tt],Ft=M[Tt];ft!==null&&Ft!==void 0&&Ft.update(ft,xt,c||a)}ot&&ot($,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),m=null}const Ct=new W0;Ct.setAnimationLoop(Q),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}}const Di=new Sn,Ag=new kt;function Rg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,G0(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===sn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===sn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,Di.copy(v),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(Di)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=s[x.id];v===void 0&&(m(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",g));const E=M.program;n.updateUBOMapping(x,E);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const M=d();x.__bindingPointIndex=M;const v=i.createBuffer(),E=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],v=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,b=R.length;S<b;S++){const P=R[S];if(f(P,w,S,E)===!0){const z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let tt=0;tt<H.length;tt++){const O=H[tt],it=_(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,z+W,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,v,E){const w=x.value,T=M+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const R=E[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function m(x){const M=x.uniforms;let v=0;const E=16;for(let T=0,R=M.length;T<R;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,P=S.length;b<P;b++){const z=S[b],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,tt=H.length;W<tt;W++){const O=H[W],it=_(O),B=v%E,nt=B%it.boundary,et=B+nt;v+=nt,et!==0&&E-et<it.storage&&(v+=E-et),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=it.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Pg{constructor(t={}){const{canvas:e=xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=vi,this.toneMappingExposure=1;const v=this;let E=!1,w=0,T=0,R=null,S=-1,b=null;const P=new Le,z=new Le;let H=null;const W=new Ot(0);let tt=0,O=e.width,it=e.height,B=1,nt=null,et=null;const ot=new Le(0,0,O,it),Q=new Le(0,0,O,it);let Ct=!1;const $=new rl;let xt=!1,Tt=!1;const ft=new kt,Ft=new kt,Bt=new K,ct=new Le,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Zt(){return R===null?B:1}let G=n;function De(C,X){return e.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),G===null){const X="webgl2";if(G=De(X,C),G===null)throw De(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let se,Pt,qt,re,Gt,I,A,Z,_t,Mt,gt,y,L,N,k,F,D,ht,J,lt,Et,St,wt,U;function yt(){se=new U1(G),se.init(),St=new vg(G,se),Pt=new C1(G,se,t,St),qt=new xg(G,se),Pt.reverseDepthBuffer&&u&&qt.buffers.depth.setReversed(!0),re=new k1(G),Gt=new ng,I=new Mg(G,se,qt,Gt,Pt,St,re),A=new I1(v),Z=new N1(v),_t=new Wd(G),wt=new A1(G,_t),Mt=new O1(G,_t,re,wt),gt=new B1(G,Mt,_t,re),J=new z1(G,Pt,I),F=new P1(Gt),y=new eg(v,A,Z,se,Pt,wt,F),L=new Rg(v,Gt),N=new sg,k=new hg(se),ht=new T1(v,A,Z,qt,gt,f,l),D=new mg(v,gt,Pt),U=new Cg(G,re,Pt,qt),lt=new R1(G,se,re),Et=new F1(G,se,re),re.programs=y.programs,v.capabilities=Pt,v.extensions=se,v.properties=Gt,v.renderLists=N,v.shadowMap=D,v.state=qt,v.info=re}yt();const V=new Tg(v,G);this.xr=V,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(O,it,!1))},this.getSize=function(C){return C.set(O,it)},this.setSize=function(C,X,rt=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,it=X,e.width=Math.floor(C*B),e.height=Math.floor(X*B),rt===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(O*B,it*B).floor()},this.setDrawingBufferSize=function(C,X,rt){O=C,it=X,B=rt,e.width=Math.floor(C*rt),e.height=Math.floor(X*rt),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,X,rt,at){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,X,rt,at),qt.viewport(P.copy(ot).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,X,rt,at){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,X,rt,at),qt.scissor(z.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(C){qt.setScissorTest(Ct=C)},this.setOpaqueSort=function(C){nt=C},this.setTransparentSort=function(C){et=C},this.getClearColor=function(C){return C.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(C=!0,X=!0,rt=!0){let at=0;if(C){let Y=!1;if(R!==null){const At=R.texture.format;Y=At===el||At===tl||At===Qc}if(Y){const At=R.texture.type,Lt=At===ri||At===Xi||At===wr||At===Ls||At===jc||At===Zc,Ht=ht.getClearColor(),Vt=ht.getClearAlpha(),jt=Ht.r,te=Ht.g,Wt=Ht.b;Lt?(m[0]=jt,m[1]=te,m[2]=Wt,m[3]=Vt,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=jt,_[1]=te,_[2]=Wt,_[3]=Vt,G.clearBufferiv(G.COLOR,0,_))}else at|=G.COLOR_BUFFER_BIT}X&&(at|=G.DEPTH_BUFFER_BIT),rt&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),N.dispose(),k.dispose(),Gt.dispose(),A.dispose(),Z.dispose(),gt.dispose(),wt.dispose(),U.dispose(),y.dispose(),V.dispose(),V.removeEventListener("sessionstart",vl),V.removeEventListener("sessionend",yl),Ai.stop()};function st(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=re.autoReset,X=D.enabled,rt=D.autoUpdate,at=D.needsUpdate,Y=D.type;yt(),re.autoReset=C,D.enabled=X,D.autoUpdate=rt,D.needsUpdate=at,D.type=Y}function bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ut(C){const X=C.target;X.removeEventListener("dispose",Ut),$t(X)}function $t(C){le(C),Gt.remove(C)}function le(C){const X=Gt.get(C).programs;X!==void 0&&(X.forEach(function(rt){y.releaseProgram(rt)}),C.isShaderMaterial&&y.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,rt,at,Y,At){X===null&&(X=Dt);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=Au(C,X,rt,at,Y);qt.setMaterial(at,Lt);let Vt=rt.index,jt=1;if(at.wireframe===!0){if(Vt=Mt.getWireframeAttribute(rt),Vt===void 0)return;jt=2}const te=rt.drawRange,Wt=rt.attributes.position;let fe=te.start*jt,be=(te.start+te.count)*jt;At!==null&&(fe=Math.max(fe,At.start*jt),be=Math.min(be,(At.start+At.count)*jt)),Vt!==null?(fe=Math.max(fe,0),be=Math.min(be,Vt.count)):Wt!=null&&(fe=Math.max(fe,0),be=Math.min(be,Wt.count));const Ee=be-fe;if(Ee<0||Ee===1/0)return;wt.setup(Y,at,Ht,rt,Vt);let an,ge=lt;if(Vt!==null&&(an=_t.get(Vt),ge=Et,ge.setIndex(an)),Y.isMesh)at.wireframe===!0?(qt.setLineWidth(at.wireframeLinewidth*Zt()),ge.setMode(G.LINES)):ge.setMode(G.TRIANGLES);else if(Y.isLine){let Xt=at.linewidth;Xt===void 0&&(Xt=1),qt.setLineWidth(Xt*Zt()),Y.isLineSegments?ge.setMode(G.LINES):Y.isLineLoop?ge.setMode(G.LINE_LOOP):ge.setMode(G.LINE_STRIP)}else Y.isPoints?ge.setMode(G.POINTS):Y.isSprite&&ge.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ge.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,Wn=Y._multiDrawCounts,xe=Y._multiDrawCount,En=Vt?_t.get(Vt).bytesPerElement:1,Qi=Gt.get(at).currentProgram.getUniforms();for(let hn=0;hn<xe;hn++)Qi.setValue(G,"_gl_DrawID",hn),ge.render(Xt[hn]/En,Wn[hn])}else if(Y.isInstancedMesh)ge.renderInstances(fe,Ee,Y.count);else if(rt.isInstancedBufferGeometry){const Xt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Wn=Math.min(rt.instanceCount,Xt);ge.renderInstances(fe,Ee,Wn)}else ge.render(fe,Ee)};function ie(C,X,rt){C.transparent===!0&&C.side===_e&&C.forceSinglePass===!1?(C.side=sn,C.needsUpdate=!0,Nr(C,X,rt),C.side=bi,C.needsUpdate=!0,Nr(C,X,rt),C.side=_e):Nr(C,X,rt)}this.compile=function(C,X,rt=null){rt===null&&(rt=C),p=k.get(rt),p.init(X),M.push(p),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),C!==rt&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const at=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ht=At[Lt];ie(Ht,rt,Y),at.add(Ht)}else ie(At,rt,Y),at.add(At)}),M.pop(),p=null,at},this.compileAsync=function(C,X,rt=null){const at=this.compile(C,X,rt);return new Promise(Y=>{function At(){if(at.forEach(function(Lt){Gt.get(Lt).currentProgram.isReady()&&at.delete(Lt)}),at.size===0){Y(C);return}setTimeout(At,10)}se.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ln=null;function Je(C){ln&&ln(C)}function vl(){Ai.stop()}function yl(){Ai.start()}const Ai=new W0;Ai.setAnimationLoop(Je),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){ln=C,V.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},V.addEventListener("sessionstart",vl),V.addEventListener("sessionend",yl),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(X),X=V.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,R),p=k.get(C,M.length),p.init(X),M.push(p),Ft.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(Ft),Tt=this.localClippingEnabled,xt=F.init(this.clippingPlanes,Tt),g=N.get(C,x.length),g.init(),x.push(g),V.enabled===!0&&V.isPresenting===!0){const At=v.xr.getDepthSensingMesh();At!==null&&to(At,X,-1/0,v.sortObjects)}to(C,X,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(nt,et),mt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,mt&&ht.addToRenderList(g,C),this.info.render.frame++,xt===!0&&F.beginShadows();const rt=p.state.shadowsArray;D.render(rt,C,X),xt===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=g.opaque,Y=g.transmissive;if(p.setupLights(),X.isArrayCamera){const At=X.cameras;if(Y.length>0)for(let Lt=0,Ht=At.length;Lt<Ht;Lt++){const Vt=At[Lt];Sl(at,Y,C,Vt)}mt&&ht.render(C);for(let Lt=0,Ht=At.length;Lt<Ht;Lt++){const Vt=At[Lt];bl(g,C,Vt,Vt.viewport)}}else Y.length>0&&Sl(at,Y,C,X),mt&&ht.render(C),bl(g,C,X);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,X),wt.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],xt===!0&&F.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function to(C,X,rt,at){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){at&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const Lt=gt.update(C),Ht=C.material;Ht.visible&&g.push(C,Lt,Ht,rt,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Lt=gt.update(C),Ht=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ct.copy(Lt.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(Ht)){const Vt=Lt.groups;for(let jt=0,te=Vt.length;jt<te;jt++){const Wt=Vt[jt],fe=Ht[Wt.materialIndex];fe&&fe.visible&&g.push(C,Lt,fe,rt,ct.z,Wt)}}else Ht.visible&&g.push(C,Lt,Ht,rt,ct.z,null)}}const At=C.children;for(let Lt=0,Ht=At.length;Lt<Ht;Lt++)to(At[Lt],X,rt,at)}function bl(C,X,rt,at){const Y=C.opaque,At=C.transmissive,Lt=C.transparent;p.setupLightsView(rt),xt===!0&&F.setGlobalState(v.clippingPlanes,rt),at&&qt.viewport(P.copy(at)),Y.length>0&&Dr(Y,X,rt),At.length>0&&Dr(At,X,rt),Lt.length>0&&Dr(Lt,X,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Sl(C,X,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new qi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Tr:ri,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const At=p.state.transmissionRenderTarget[at.id],Lt=at.viewport||P;At.setSize(Lt.z,Lt.w);const Ht=v.getRenderTarget();v.setRenderTarget(At),v.getClearColor(W),tt=v.getClearAlpha(),tt<1&&v.setClearColor(16777215,.5),v.clear(),mt&&ht.render(rt);const Vt=v.toneMapping;v.toneMapping=vi;const jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),xt===!0&&F.setGlobalState(v.clippingPlanes,at),Dr(C,rt,at),I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At),se.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Wt=0,fe=X.length;Wt<fe;Wt++){const be=X[Wt],Ee=be.object,an=be.geometry,ge=be.material,Xt=be.group;if(ge.side===_e&&Ee.layers.test(at.layers)){const Wn=ge.side;ge.side=sn,ge.needsUpdate=!0,wl(Ee,rt,at,an,ge,Xt),ge.side=Wn,ge.needsUpdate=!0,te=!0}}te===!0&&(I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At))}v.setRenderTarget(Ht),v.setClearColor(W,tt),jt!==void 0&&(at.viewport=jt),v.toneMapping=Vt}function Dr(C,X,rt){const at=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,At=C.length;Y<At;Y++){const Lt=C[Y],Ht=Lt.object,Vt=Lt.geometry,jt=at===null?Lt.material:at,te=Lt.group;Ht.layers.test(rt.layers)&&wl(Ht,X,rt,Vt,jt,te)}}function wl(C,X,rt,at,Y,At){C.onBeforeRender(v,X,rt,at,Y,At),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,X,rt,at,C,At),Y.transparent===!0&&Y.side===_e&&Y.forceSinglePass===!1?(Y.side=sn,Y.needsUpdate=!0,v.renderBufferDirect(rt,X,at,Y,C,At),Y.side=bi,Y.needsUpdate=!0,v.renderBufferDirect(rt,X,at,Y,C,At),Y.side=_e):v.renderBufferDirect(rt,X,at,Y,C,At),C.onAfterRender(v,X,rt,at,Y,At)}function Nr(C,X,rt){X.isScene!==!0&&(X=Dt);const at=Gt.get(C),Y=p.state.lights,At=p.state.shadowsArray,Lt=Y.state.version,Ht=y.getParameters(C,Y.state,At,X,rt),Vt=y.getProgramCacheKey(Ht);let jt=at.programs;at.environment=C.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(C.isMeshStandardMaterial?Z:A).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Ut),jt=new Map,at.programs=jt);let te=jt.get(Vt);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===Lt)return Tl(C,Ht),te}else Ht.uniforms=y.getUniforms(C),C.onBeforeCompile(Ht,v),te=y.acquireProgram(Ht,Vt),jt.set(Vt,te),at.uniforms=Ht.uniforms;const Wt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=F.uniform),Tl(C,Ht),at.needsLights=Cu(C),at.lightsStateVersion=Lt,at.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),at.currentProgram=te,at.uniformsList=null,te}function El(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=ka.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Tl(C,X){const rt=Gt.get(C);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function Au(C,X,rt,at,Y){X.isScene!==!0&&(X=Dt),I.resetTextureUnits();const At=X.fog,Lt=at.isMeshStandardMaterial?X.environment:null,Ht=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,Vt=(at.isMeshStandardMaterial?Z:A).get(at.envMap||Lt),jt=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,te=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Wt=!!rt.morphAttributes.position,fe=!!rt.morphAttributes.normal,be=!!rt.morphAttributes.color;let Ee=vi;at.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const an=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ge=an!==void 0?an.length:0,Xt=Gt.get(at),Wn=p.state.lights;if(xt===!0&&(Tt===!0||C!==b)){const gn=C===b&&at.id===S;F.setState(at,C,gn)}let xe=!1;at.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Wn.state.version||Xt.outputColorSpace!==Ht||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==Vt||at.fog===!0&&Xt.fog!==At||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==F.numPlanes||Xt.numIntersection!==F.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==te||Xt.morphTargets!==Wt||Xt.morphNormals!==fe||Xt.morphColors!==be||Xt.toneMapping!==Ee||Xt.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,Xt.__version=at.version);let En=Xt.currentProgram;xe===!0&&(En=Nr(at,X,Y));let Qi=!1,hn=!1,$s=!1;const Te=En.getUniforms(),kn=Xt.uniforms;if(qt.useProgram(En.program)&&(Qi=!0,hn=!0,$s=!0),at.id!==S&&(S=at.id,hn=!0),Qi||b!==C){qt.buffers.depth.getReversed()?(ft.copy(C.projectionMatrix),Md(ft),vd(ft),Te.setValue(G,"projectionMatrix",ft)):Te.setValue(G,"projectionMatrix",C.projectionMatrix),Te.setValue(G,"viewMatrix",C.matrixWorldInverse);const oi=Te.map.cameraPosition;oi!==void 0&&oi.setValue(G,Bt.setFromMatrixPosition(C.matrixWorld)),Pt.logarithmicDepthBuffer&&Te.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Te.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,hn=!0,$s=!0)}if(Y.isSkinnedMesh){Te.setOptional(G,Y,"bindMatrix"),Te.setOptional(G,Y,"bindMatrixInverse");const gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Te.setValue(G,"boneTexture",gn.boneTexture,I))}Y.isBatchedMesh&&(Te.setOptional(G,Y,"batchingTexture"),Te.setValue(G,"batchingTexture",Y._matricesTexture,I),Te.setOptional(G,Y,"batchingIdTexture"),Te.setValue(G,"batchingIdTexture",Y._indirectTexture,I),Te.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(G,"batchingColorTexture",Y._colorsTexture,I));const js=rt.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&J.update(Y,rt,En),(hn||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,Te.setValue(G,"receiveShadow",Y.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(kn.envMap.value=Vt,kn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(kn.envMapIntensity.value=X.environmentIntensity),hn&&(Te.setValue(G,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Ru(kn,$s),At&&at.fog===!0&&L.refreshFogUniforms(kn,At),L.refreshMaterialUniforms(kn,at,B,it,p.state.transmissionRenderTarget[C.id]),ka.upload(G,El(Xt),kn,I)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ka.upload(G,El(Xt),kn,I),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Te.setValue(G,"center",Y.center),Te.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(G,"normalMatrix",Y.normalMatrix),Te.setValue(G,"modelMatrix",Y.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const gn=at.uniformsGroups;for(let oi=0,ci=gn.length;oi<ci;oi++){const Al=gn[oi];U.update(Al,En),U.bind(Al,En)}}return En}function Ru(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Cu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,X,rt){Gt.get(C.texture).__webglTexture=X,Gt.get(C.depthTexture).__webglTexture=rt;const at=Gt.get(C);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=rt===void 0,at.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const rt=Gt.get(C);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,rt=0){R=C,w=X,T=rt;let at=!0,Y=null,At=!1,Lt=!1;if(C){const Vt=Gt.get(C);if(Vt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(G.FRAMEBUFFER,null),at=!1;else if(Vt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Vt.__hasExternalTextures)I.rebindTextures(C,Gt.get(C.texture).__webglTexture,Gt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&Gt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const te=Gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[X])?Y=te[X][rt]:Y=te[X],At=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?Y=Gt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[rt]:Y=te,P.copy(C.viewport),z.copy(C.scissor),H=C.scissorTest}else P.copy(ot).multiplyScalar(B).floor(),z.copy(Q).multiplyScalar(B).floor(),H=Ct;if(qt.bindFramebuffer(G.FRAMEBUFFER,Y)&&at&&qt.drawBuffers(C,Y),qt.viewport(P),qt.scissor(z),qt.setScissorTest(H),At){const Vt=Gt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Vt.__webglTexture,rt)}else if(Lt){const Vt=Gt.get(C.texture),jt=X||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.__webglTexture,rt||0,jt)}S=-1},this.readRenderTargetPixels=function(C,X,rt,at,Y,At,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const Vt=C.texture,jt=Vt.format,te=Vt.type;if(!Pt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-at&&rt>=0&&rt<=C.height-Y&&G.readPixels(X,rt,at,Y,St.convert(jt),St.convert(te),At)}finally{const Vt=R!==null?Gt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,X,rt,at,Y,At,Lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){const Vt=C.texture,jt=Vt.format,te=Vt.type;if(!Pt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-at&&rt>=0&&rt<=C.height-Y){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const Wt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.bufferData(G.PIXEL_PACK_BUFFER,At.byteLength,G.STREAM_READ),G.readPixels(X,rt,at,Y,St.convert(jt),St.convert(te),0);const fe=R!==null?Gt.get(R).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,fe);const be=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _d(G,be,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,At),G.deleteBuffer(Wt),G.deleteSync(be),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,rt=0){C.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const at=Math.pow(2,-rt),Y=Math.floor(C.image.width*at),At=Math.floor(C.image.height*at),Lt=X!==null?X.x:0,Ht=X!==null?X.y:0;I.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Lt,Ht,Y,At),qt.unbindTexture()},this.copyTextureToTexture=function(C,X,rt=null,at=null,Y=0){C.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,C=arguments[1],X=arguments[2],Y=arguments[3]||0,rt=null);let At,Lt,Ht,Vt,jt,te,Wt,fe,be;const Ee=C.isCompressedTexture?C.mipmaps[Y]:C.image;rt!==null?(At=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,jt=rt.min.y,te=rt.isBox3?rt.min.z:0):(At=Ee.width,Lt=Ee.height,Ht=Ee.depth||1,Vt=0,jt=0,te=0),at!==null?(Wt=at.x,fe=at.y,be=at.z):(Wt=0,fe=0,be=0);const an=St.convert(X.format),ge=St.convert(X.type);let Xt;X.isData3DTexture?(I.setTexture3D(X,0),Xt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Xt=G.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Wn=G.getParameter(G.UNPACK_ROW_LENGTH),xe=G.getParameter(G.UNPACK_IMAGE_HEIGHT),En=G.getParameter(G.UNPACK_SKIP_PIXELS),Qi=G.getParameter(G.UNPACK_SKIP_ROWS),hn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ee.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,te);const $s=C.isDataArrayTexture||C.isData3DTexture,Te=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const kn=Gt.get(C),js=Gt.get(X),gn=Gt.get(kn.__renderTarget),oi=Gt.get(js.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,gn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ci=0;ci<Ht;ci++)$s&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(C).__webglTexture,Y,te+ci),C.isDepthTexture?(Te&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(X).__webglTexture,Y,be+ci),G.blitFramebuffer(Vt,jt,At,Lt,Wt,fe,At,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST)):Te?G.copyTexSubImage3D(Xt,Y,Wt,fe,be+ci,Vt,jt,At,Lt):G.copyTexSubImage2D(Xt,Y,Wt,fe,be+ci,Vt,jt,At,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Te?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Xt,Y,Wt,fe,be,At,Lt,Ht,an,ge,Ee.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Y,Wt,fe,be,At,Lt,Ht,an,Ee.data):G.texSubImage3D(Xt,Y,Wt,fe,be,At,Lt,Ht,an,ge,Ee):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,Wt,fe,At,Lt,an,ge,Ee.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,Wt,fe,Ee.width,Ee.height,an,Ee.data):G.texSubImage2D(G.TEXTURE_2D,Y,Wt,fe,At,Lt,an,ge,Ee);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe),G.pixelStorei(G.UNPACK_SKIP_PIXELS,En),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qi),G.pixelStorei(G.UNPACK_SKIP_IMAGES,hn),Y===0&&X.generateMipmaps&&G.generateMipmap(Xt),qt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,rt=null,at=null,Y=0){return C.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,at=arguments[1]||null,C=arguments[2],X=arguments[3],Y=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,rt,at,Y)},this.initRenderTarget=function(C){Gt.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,qt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class ol{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ig extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Z0 extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=je,h=je,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eh extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ps=new kt,Th=new kt,na=[],Ah=new Zi,Lg=new kt,nr=new Jt,ir=new Ji;class J0 extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Eh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Ah.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Ah)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),ir.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ir.copy(this.boundingSphere),ir.applyMatrix4(n),t.ray.intersectsSphere(ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Th.multiplyMatrices(n,ps),nr.matrixWorld=Th,nr.raycast(t,na);for(let a=0,o=na.length;a<o;a++){const l=na[a];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Z0(new Float32Array(s*this.count),s,this.count,Jc,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cl extends Ti{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ha=new K,Va=new K,Rh=new kt,sr=new sl,ia=new Ji,Lo=new K,Ch=new K;class Dg extends Fe{constructor(t=new We,e=new cl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Rh.copy(s).invert(),sr.copy(t.ray).applyMatrix4(Rh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=h.getX(_),x=h.getX(_+1),M=sa(this,t,sr,l,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=sa(this,t,sr,l,_,g);p&&e.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){const p=sa(this,t,sr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=sa(this,t,sr,l,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sa(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ha.fromBufferAttribute(a,s),Va.fromBufferAttribute(a,r),e.distanceSqToSegment(Ha,Va,Lo,Ch)>n)return;Lo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Lo);if(!(l<t.near||l>t.far))return{distance:l,point:Ch.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ph=new K,Ih=new K;class Q0 extends Dg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ph.fromBufferAttribute(e,s),Ih.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ph.distanceTo(Ih);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tu extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lh=new kt,zc=new sl,ra=new Ji,aa=new K;class Ng extends Fe{constructor(t=new We,e=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;Lh.copy(s).invert(),zc.copy(t.ray).applyMatrix4(Lh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,_=f;m<_;m++){const g=c.getX(m);aa.fromBufferAttribute(d,g),Dh(aa,g,l,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,_=f;m<_;m++)aa.fromBufferAttribute(d,m),Dh(aa,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dh(i,t,e,n,s,r,a){const o=zc.distanceSqToPoint(i);if(o<e){const l=new K;zc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Cr extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=n/2;let p=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function x(){const v=new K,E=new K;let w=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],b=R/r,P=b*(e-t)+t;for(let z=0;z<=s;z++){const H=z/s,W=H*l+o,tt=Math.sin(W),O=Math.cos(W);E.x=P*tt,E.y=-b*n+g,E.z=P*O,d.push(E.x,E.y,E.z),v.set(tt,T,O).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-b),S.push(m++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const b=_[S][R],P=_[S+1][R],z=_[S+1][R+1],H=_[S][R+1];(t>0||S!==0)&&(h.push(b,P,H),w+=3),(e>0||S!==r-1)&&(h.push(P,z,H),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){const E=m,w=new ce,T=new K;let R=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*b,0),u.push(0,b,0),f.push(.5,.5),m++;const P=m;for(let z=0;z<=s;z++){const W=z/s*l+o,tt=Math.cos(W),O=Math.sin(W);T.x=S*O,T.y=g*b,T.z=S*tt,d.push(T.x,T.y,T.z),u.push(0,b,0),w.x=tt*.5+.5,w.y=O*.5*b+.5,f.push(w.x,w.y),m++}for(let z=0;z<s;z++){const H=E+z,W=P+z;v===!0?h.push(W,W+1,H):h.push(W+1,W,H),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Us extends yi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Us(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new K,v=new K,E=new K;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],v),f(e[w+2],E),l(M,v,E,x)}function l(x,M,v,E){const w=E+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=x.clone().lerp(v,R/w),b=M.clone().lerp(v,R/w),P=w-R;for(let z=0;z<=P;z++)z===0&&R===w?T[R][z]=S:T[R][z]=S.clone().lerp(b,z/P)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const b=Math.floor(S/2);S%2===0?(u(T[R][b+1]),u(T[R+1][b]),u(T[R][b])):(u(T[R][b+1]),u(T[R+1][b+1]),u(T[R+1][b]))}}function c(x){const M=new K;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new K;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=g(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(v,1-E)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],E=a[x+4],w=Math.max(M,v,E),T=Math.min(M,v,E);w>.9&&T<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const x=new K,M=new K,v=new K,E=new K,w=new ce,T=new ce,R=new ce;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),E.copy(x).add(M).add(v).divideScalar(3);const P=g(E);_(w,b+0,x,P),_(T,b+2,M,P),_(R,b+4,v,P)}}function _(x,M,v,E){E<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.details)}}class hl extends ll{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class Os extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new K,u=new K,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const w=E/e;d.x=-t*Math.cos(s+w*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+w*r)*Math.sin(a+M*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(w+v,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],E=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(M,v,w),(p!==n-1||l<Math.PI)&&f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bc extends Ti{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ot(16777215),this.specular=new Ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ii extends Ti{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ul extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ug extends ul{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Do=new kt,Nh=new K,Uh=new K;class Og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fg extends Og{constructor(){super(new X0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kg extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Oh extends ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const ye=[0,4,7,11],pe=[0,3,7,10],Re=[0,4,7],Ni=[0,3,7],Cn=[0,4,7,10],eu={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",ye],["G",ye],["E",pe],["A",Re],["D",ye],["B",pe],["G",ye],["A",Re],["B",pe],["F#",pe],["G",ye],["D",Re],["E",pe],["A",Re],["G",ye],["A",Cn]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",ye],["G",Re],["E",pe],["A",Ni],["F",ye],["G",Re],["E",Cn],["A",Ni],["D",pe],["G",Re],["C",ye],["A",pe],["D",pe],["E",pe],["F",ye],["E",Cn]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",ye],["A",pe],["F",ye],["G",Re]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",ye],["F#",pe],["D",ye],["E",Re],["A",ye],["C#",pe],["D",ye],["E",Re]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",Ni],["A#",Re],["C",Re],["A",Ni],["D",pe],["A#",ye],["G",pe],["A",Re]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",Ni],["C",Re],["D",Re],["B",Re],["E",Ni],["C",Re],["A",Ni],["B",Cn]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",ye],["E",pe],["D",pe],["C",ye],["A#",ye],["A",pe],["G",pe],["C",Re]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1},desert:{name:"MESA HIGHWAY",bpm:128,chords:[["A",pe],["D",Re],["G",Re],["E",pe],["A",pe],["F",ye],["G",Re],["E",Cn]],lead:["A4 . . C5 . . E5 . G5 . . . E5 . D5 .","F#5 . . . . . A5 . F#5 . E5 . D5 . . .","G5 . . B5 . . D6 . B5 . . . A5 . G5 .","E5 . . . . . . . - - G5 . A5 . B5 .","C6 . . B5 . . A5 . E5 . . . G5 . A5 .","A5 . . . C6 . . . E6 . . . C6 . A5 .","B5 . . . D6 . . . G5 . . . B5 . D6 .","G#5 . . . . . B5 . . . E5 . . . - -"],bass:[0,null,null,0,null,7,null,0,null,0,null,7,12,null,7,null],kick:[0,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"fm"},alps:{name:"GLACIER RUN",bpm:150,chords:[["E",Re],["B",Re],["C#",pe],["A",ye],["E",Re],["G#",pe],["A",ye],["B",Cn]],lead:["B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .","F#6 . . . D#6 . . . B5 . . . F#5 . . .","E6 . . D#6 . . C#6 . . . B5 . G#5 . . .","C#6 . . . . . B5 . A5 . . . G#5 . A5 .","B5 . . E6 . . G#6 . . . F#6 . E6 . . .","D#6 . . . B5 . . . F#6 . . . D#6 . . .","E6 . . C#6 . . A5 . . . G#6 . . . E6 .","F#6 . . . . . . . D#6 . . . A5 . . ."],bass:[0,null,12,null,0,null,12,null,0,null,12,null,7,null,12,null],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"square",pad:!0,arp:{pattern:[0,1,2,3,2,1,0,1],wave:"triangle",oct:5}},vegas:{name:"JACKPOT BOULEVARD",bpm:116,chords:[["D",pe],["G",Cn],["D",pe],["G",Cn],["A#",ye],["A",Cn],["D",pe],["A",Cn]],lead:["D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .","B5 . . . . . G5 . F5 . . . D5 . F5 .","A5 . . C6 . . D6 . . . C6 . A5 . . .","G5 . . . . . . . - - F5 . G5 . B5 .","D6 . . . A5 . . . F5 . . . A5 . D6 .","C#6 . . . . . E6 . . . C#6 . A5 . . .","F6 . . E6 . . D6 . . . C6 . A5 . . .","A5 . . . . . . . E5 . G5 . A5 . C#6 ."],bass:[0,null,0,12,null,0,null,10,0,null,7,null,12,10,7,null],kick:[0,7,10],snare:[4,12],hat:[0,2,3,4,6,8,10,11,12,14],leadWave:"saw2",gated:!0},riviera:{name:"COTE D'AZUR",bpm:112,chords:[["F",ye],["E",pe],["D",pe],["C",ye],["A#",ye],["A",pe],["G",pe],["C",Cn]],lead:["E6 . . . C6 . A5 . . . G5 . A5 . C6 .","B5 . . . . . G5 . E5 . . . D5 . E5 .","F5 . A5 . C6 . . . E6 . . . D6 . C6 .","B5 . . . . . . . G5 . . . - - - -","D6 . . F6 . . A6 . . . F6 . D6 . . .","C6 . . . E6 . . . G6 . . . E6 . C6 .","A#5 . . . D6 . . . F6 . . . D6 . A#5 .","E6 . . . . . . . . . . . - - - -"],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,10,null,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,1,0,2],wave:"sine",oct:5},stabs:!1}},vr=["miami","tokyo","desert","alps","vegas","riviera","palm","signal","rival","sunset"].map(i=>({id:i,name:eu[i].name})),nu={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},zg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?nu[t[1]]+(parseInt(t[2],10)+1)*12:69},rr=i=>440*Math.pow(2,(i-69)/12);class Bg{constructor(){this.ctx=null,this.muted=(()=>{try{return localStorage.getItem("th86-muted")==="1"}catch{return!1}})(),this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const l=e.createBufferSource();l.buffer=this.noise,l.loop=!0;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2400,c.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,l.connect(c).connect(this.skidG).connect(this.sfx),l.start()}toggleMute(){this.muted=!this.muted;try{localStorage.setItem("th86-muted",this.muted?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const l=this.ctx,c=l.currentTime+r,h=l.createOscillator();h.type=n,h.frequency.setValueAtTime(t,c),a&&h.frequency.exponentialRampToValueAtTime(a,c+e);const d=l.createGain();d.gain.setValueAtTime(s,c),d.gain.exponentialRampToValueAtTime(.001,c+e),h.connect(d).connect(o??this.sfx),h.start(c),h.stop(c+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const l=this.ctx,c=o??l.currentTime+s,h=l.createBufferSource();h.buffer=this.noise;const d=l.createBiquadFilter();d.type=r,d.frequency.setValueAtTime(n,c),r==="lowpass"&&d.frequency.exponentialRampToValueAtTime(80,c+t);const u=l.createGain();u.gain.setValueAtTime(e,c),u.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(d).connect(u).connect(a??this.sfx),h.start(c,Math.random()*.5),h.stop(c+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}gun(t=1){if(this.ctx)for(const[e,n]of[[0,1],[.048,.8]]){const s=.9+Math.random()*.2,r=t*n;this.burst(.045,.5*r,1900*s,e,"bandpass"),this.burst(.11,.42*r,650*s,e),this.tone(125*s,.07,"sine",.38*r,e,42),this.burst(.014,.22*r,5200,e+.004,"highpass")}}rocket(t=1){if(this.ctx){this.tone(160,.12,"square",.4*t,0,50),this.burst(.06,.5*t,900);for(let e=0;e<4;e++)this.burst(.18,(.32-e*.07)*t,2600-e*450,.05+e*.12,"bandpass")}}boom(t=1){this.ctx&&(this.tone(70,.9,"sine",.6*t,0,24),this.burst(1.1,.9*t,1400),this.burst(.25,.5*t,4200,0,"highpass"),this.tone(45,1.2,"triangle",.35*t,.08,20))}chime(){this.ctx&&(this.tone(880,.12,"triangle",.3,0,880),this.tone(1320,.18,"triangle",.3,.12,1320))}ping(){this.ctx&&(this.tone(1800+Math.random()*900,.12,"triangle",.22,0,900),this.burst(.04,.25,6e3,0,"highpass"))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?eu[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,l]=t.chords[r],c=nu[o],h=t.bass[a];if(h!=null&&this.voice(rr(36+c+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const f of l)this.voice(rr(60+c+f),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const f of l)this.padNote(rr(48+c+f),s*16,n);if(t.arp){const f=t.arp.pattern[a%t.arp.pattern.length],m=l[f%l.length]+12*Math.floor(f/l.length);this.voice(rr((t.arp.oct+1)*12+c+m),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const d=t.lead[r].split(/\s+/),u=d[a];if(u&&u!=="."&&u!=="-"){let f=1;for(;a+f<16&&d[a+f]===".";)f++;this.voice(rr(zg(u)),s*f*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const f=this.ctx,m=f.createOscillator(),_=f.createGain();m.frequency.setValueAtTime(150,n),m.frequency.exponentialRampToValueAtTime(40,n+.12),_.gain.setValueAtTime(.7,n),_.gain.exponentialRampToValueAtTime(.001,n+.18),m.connect(_).connect(this.musicBus),m.start(n),m.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const l=s.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(t,n),l.detune.value=o,l.connect(r),l.start(n),l.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,l=!1){const c=this.ctx;if(n==="fm"){const m=c.createOscillator(),_=c.createOscillator(),g=c.createGain();m.frequency.setValueAtTime(t,r),_.frequency.setValueAtTime(t*2,r),g.gain.setValueAtTime(t*3,r),g.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),_.connect(g).connect(m.frequency);const p=c.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),m.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const x of[m,_])x.start(r),x.stop(r+e+.08);return}const h=c.createOscillator(),d=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const m=c.createOscillator();m.type="sawtooth",m.detune.value=8,m.frequency.setValueAtTime(t,r),d.push(m)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const m=c.createOscillator(),_=c.createGain();m.frequency.value=6,_.gain.setValueAtTime(0,r),_.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),m.connect(_).connect(h.frequency);for(const g of d)_.connect(g.frequency);m.start(r),m.stop(r+e+.05)}const u=c.createBiquadFilter();u.type="lowpass",u.frequency.value=a;const f=c.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(s,r+.005),f.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),f.gain.linearRampToValueAtTime(0,r+e),h.connect(u).connect(f).connect(this.musicBus),(o||l)&&f.connect(this.delay);for(const m of[h,...d])m!==h&&m.connect(u),m.start(r),m.stop(r+e+.02)}}const Gg=()=>"92",ue={mode:Gg(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function Hg(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new Cr(t);return s.colorSpace=He,s}const Sr='"Press Start 2P", monospace',Vg='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',oa=i=>"#"+i.toString(16).padStart(6,"0");class Wg{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new Cr(this.canvas),this.texture.magFilter=je,this.texture.minFilter=w0,this.texture.colorSpace=He}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,l=this.cw*e,c=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,l,c),h.clip(),h.fillStyle=oa(t.bg),h.fillRect(a,o,l,c),t.stripes===-1)for(let _=0;_<c;_+=8)for(let g=0;g<l;g+=8)(g+_)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+g,o+_,8,8));else t.stripes!==void 0&&(h.fillStyle=oa(t.stripes),h.fillRect(a,o+c-6,l,3),h.fillRect(a,o+3,l,3));if(t.border!==void 0&&(h.strokeStyle=oa(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,l-3,c-3)),h.fillStyle=oa(t.fg),t.arrows){const _=l/3,g=_*.38;for(let M=0;M<3;M++){const v=a+M*_+_*.12,E=v+_*.62,[w,T]=t.arrows==="R"?[v,E]:[E,v],R=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(w,o+3),h.lineTo(w+R*g,o+3),h.lineTo(T,o+c/2),h.lineTo(w+R*g,o+c-3),h.lineTo(w,o+c-3),h.lineTo(T-R*g,o+c/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,x=this.canvas.height;return[a/p,1-(o+c)/x,(a+l)/p,1-o/x]}h.textAlign="center",h.textBaseline="middle";const d=t.jp?Vg:Sr;if(t.vertical){const m=[...t.text],_=Math.min(l-6,Math.floor((c-6)/m.length));h.font=`bold ${_}px ${d}`,m.forEach((g,p)=>h.fillText(g,a+l/2,o+4+_*(p+.5)))}else{const m=t.sub?2:1,_=t.jp?(c-6)/m:8*Math.max(1,Math.floor((c-8)/m/10));let g=Math.floor(_);for(h.font=`bold ${g}px ${d}`;g>6&&h.measureText(t.text).width>l-6;){if(g-=t.jp?1:8,g<8&&!t.jp){g=8;break}h.font=`bold ${g}px ${d}`}const p=t.sub?o+c*.34:o+c/2+1;h.fillText(t.text,a+l/2,p),t.sub&&(h.font=`8px ${Sr}`,h.fillText(t.sub,a+l/2,o+c*.74))}h.restore(),this.texture.needsUpdate=!0;const u=this.canvas.width,f=this.canvas.height;return[a/u,1-(o+c)/f,(a+l)/u,1-o/f]}}const pt=852,Ne=480,_n=i=>"#"+i.toString(16).padStart(6,"0"),Xg=(i,t)=>Math.round((i>>16&255)*t)<<16|Math.round((i>>8&255)*t)<<8|Math.round((i&255)*t),zt=16769088,Nt=16777215,he=16751136,ae=16724016,Se=4255999,Pn=16734880,yn=4251712,Es=class Es{constructor(t){this.canvas=t,t.width=pt,t.height=Ne,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,pt,Ne)}text(t,e,n,s,r,a="left",o=0){const l=this.g;l.font=`${s}px ${Sr}`,l.textAlign=a,l.textBaseline="top";const c=s<8?1:Math.max(2,s/8);l.fillStyle=_n(o),l.fillText(t,e+c,n+c),l.fillStyle=_n(r),l.fillText(t,e,n)}shade(t,e,n,s,r=.6){this.g.fillStyle=`rgba(10,10,32,${r})`,this.g.fillRect(t,e,n,s)}arrow(t,e,n,s,r){const a=Math.max(2,Math.round(s/2));for(let o=0;o<a;o++){const l=(o+1)*2-1;n==="up"?this.rect(t-o,e-a/2+o,l,1,r):n==="down"?this.rect(t-o,e+a/2-o,l,1,r):n==="left"?this.rect(t-a/2+o,e-o,1,l,r):this.rect(t+a/2-o,e-o,1,l,r)}}keyW(t,e=16){return Es.ARROWS[t]?e:(this.g.font=`${e>=20?16:8}px ${Sr}`,Math.max(e,Math.ceil(this.g.measureText(t).width)+10))}keycap(t,e,n,s=16,r=Nt){const a=s>=20?16:8,o=this.keyW(n,s),l=Es.ARROWS[n];return this.rect(t+1,e+2,o,s,328975),this.box(t,e,o,s,2763338,r,1),this.rect(t+1,e+1,o-2,1,5263482),l?this.arrow(t+o/2-.5,e+s/2,l,s-6,r):this.text(n,t+o/2,e+(s-a)/2+1,a,r,"center"),o}chip(t,e,n,s,r,a,o=8,l=1710650){this.box(t,e,n,s,l,a,2);const c=Es.ARROWS[r];c?this.arrow(t+n/2-.5,e+s/2,c,Math.min(n,s)-8,a):this.text(r,t+n/2,e+(s-o)/2+1,o,a,"center")}grad(t,e,n,s,r){const a=this.g,o=a.createLinearGradient(0,e,0,e+s);r.forEach((l,c)=>o.addColorStop(c/Math.max(1,r.length-1),_n(l))),a.fillStyle=o,a.fillRect(t,e,n,s)}poly(t,e){const n=this.g;n.fillStyle=_n(e),n.beginPath(),t.forEach(([s,r],a)=>a?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fill()}circle(t,e,n,s){const r=this.g;r.fillStyle=_n(s),r.beginPath(),r.arc(t,e,n,0,Math.PI*2),r.fill()}palm(t,e,n,s){for(let o=0;o<n;o+=2)this.rect(t+Math.round(Math.sin(o/n*1.4)*4),e-o,3,2,s);const r=t+Math.round(Math.sin(1.4)*4)+1,a=e-n;for(const[o,l]of[[-12,4],[-9,-3],[0,-6],[9,-3],[12,4],[6,6],[-6,6]])this.poly([[r,a-1],[r+o,a+l],[r+o*.9,a+l+2],[r,a+2]],s)}postcard(t,e,n,s,r,a=0){const o=this.g;o.save(),o.beginPath(),o.rect(e,n,s,r),o.clip();let l=7;const c=()=>(l=l*16807%2147483647)/2147483647,h=n+Math.round(r*.62);switch(t){case"miami":{this.grad(e,n,s,h-n,[5909130,16734874,16756848,16769168]);const d=e+s*.5,u=h;this.circle(d,u,r*.34,16764992);for(let f=0;f<5;f++)this.rect(d-r*.4,u-3-f*5,r*.8,1+f*.4,16747120);this.grad(e,h,s,n+r-h,[2783952,1327242]);for(let f=0;f<8;f++)this.rect(d-30+c()*60,h+3+f*3,10+c()*30,1,16760960);this.palm(e+26,n+r,r*.75,2756672),this.palm(e+48,n+r,r*.55,2756672),this.palm(e+s-34,n+r,r*.8,2756672);break}case"tokyo":{this.grad(e,n,s,r,[328986,2756186,8006282]),this.circle(e+s-40,n+16,9,15790335),this.circle(e+s-36,n+13,8,1706560);for(let d=e;d<e+s;){const u=12+Math.floor(c()*22),f=r*(.3+c()*.55);this.rect(d,n+r-f,u-2,f,1181732);for(let m=n+r-f+4;m<n+r-6;m+=5)for(let _=d+2;_<d+u-4;_+=4)c()<.45&&this.rect(_,m,2,2,c()<.7?16769152:16738992);c()<.4&&this.rect(d+2,n+r-f-6,2,6,16724032),d+=u}this.rect(e,n+r-5,s,2,16734880),this.rect(e,n+r-2,s,2,4255999);break}case"canyon":{this.grad(e,n,s,h-n+6,[16756832,16769184]),this.circle(e+s*.4,h-22,10,16773312);const d=(u,f,m,_)=>this.poly([[u,h+6],[u+8,m],[f-8,m],[f,h+6]],_);d(e-10,e+80,h-18,12077098),d(e+150,e+205,h-24,10500642),d(e+200,e+s+10,h-12,13129774),this.grad(e,h+6,s,n+r-h-6,[14186554,10504740]),this.poly([[e+s*.42,n+r],[e+s*.49,h+6],[e+s*.51,h+6],[e+s*.58,n+r]],5263448);for(const u of[e+30,e+s-50])this.rect(u,n+r-22,4,18,2779690),this.rect(u-5,n+r-16,4,8,2779690),this.rect(u+5,n+r-19,4,8,2779690);break}case"alps":{this.grad(e,n,s,h-n,[8038655,13154544,16761040]);const d=(u,f,m,_)=>{this.poly([[u-m,h+4],[u,h-f],[u+m,h+4]],_),this.poly([[u-m*.32,h-f*.68],[u,h-f],[u+m*.32,h-f*.68],[u+m*.1,h-f*.6],[u-m*.08,h-f*.66]],16777215)};d(e+50,44,60,6977712),d(e+160,52,70,5925032),d(e+230,36,50,8030400),this.rect(e,h+4,s,n+r-h-4,16054527);for(let u=0;u<9;u++){const f=e+8+u*28+c()*10,m=14+c()*10,_=n+r-2-c()*6;this.poly([[f-6,_],[f,_-m],[f+6,_]],1985074),this.rect(f-1,_-m+2,2,3,16777215)}break}case"vegas":{this.grad(e,n,s,r,[131594,1705520,4853840]);for(let u=0;u<30;u++)this.rect(e+c()*s,n+c()*r*.5,1,1,16777215);const d=[16730784,4255999,16769088,6356832];for(let u=0,f=e+6;f<e+s;u++){const m=18+Math.floor(c()*20),_=r*(.35+c()*.5),g=d[u%4],p=Math.floor(a*3+u)%5!==0;this.rect(f,n+r-_,m,_,1312798),this.rect(f,n+r-_,m,2,p?g:3811914),this.rect(f,n+r-_,2,_,p?g:3811914);for(let x=n+r-_+6;x<n+r-4;x+=6)this.rect(f+4,x,m-8,2,Xg(g,.45));f+=m+6}this.text("VEGAS",e+s/2,n+10,16,Math.floor(a*2)%2?16730784:16769088,"center");break}case"monaco":{this.grad(e,n,s,h-n,[4892927,13167359]),this.grad(e,h,s,n+r-h,[1739480,674448]);for(let m=0;m<10;m++)this.rect(e+c()*s*.6,h+3+c()*(n+r-h-6),8+c()*14,1,10541311);this.poly([[e+s*.55,n+r],[e+s*.62,h-6],[e+s*.74,h-26],[e+s+2,h-34],[e+s+2,n+r]],12099696);const d=[16769216,16763040,16774360,16306384];for(let m=0;m<6;m++){const _=e+s*.64+m*14,g=h-22-m%3*8+m*2;this.rect(_,g,12,9,d[m%4]),this.rect(_-1,g-3,14,3,12603434)}for(const m of[e+s*.6,e+s*.9])this.poly([[m-3,h+4],[m,h-22],[m+3,h+4]],1985066);const u=e+50,f=h+14;this.poly([[u-26,f],[u+26,f],[u+18,f+7],[u-22,f+7]],16777215),this.rect(u-10,f-6,22,6,15790320),this.rect(u-6,f-5,14,2,2109512),this.rect(u,f-22,2,16,14737632),this.poly([[u+3,f-20],[u+3,f-7],[u+16,f-7]],16777215);break}default:this.grad(e,n,s,r,[3816042,1052720])}o.restore()}icon(t,e,n,s){const r=this.g;if(r.strokeStyle=_n(s),r.lineWidth=2,(t==="clock"||t==="globe")&&(r.beginPath(),r.arc(e,n,8,0,Math.PI*2),r.stroke()),t==="clock")this.rect(e-1,n-6,2,7,s),this.rect(e,n-1,5,2,s);else if(t==="globe")r.beginPath(),r.ellipse(e,n,3.5,8,0,0,Math.PI*2),r.moveTo(e-8,n),r.lineTo(e+8,n),r.stroke();else{this.rect(e-7,n-9,2,18,s);for(let a=0;a<4;a++)for(let o=0;o<3;o++)this.rect(e-5+a*3,n-9+o*3,3,3,(a+o)%2?1052688:s)}}sky(t,e,n){if(t)this.circle(e,n,7,15790335),this.circle(e+3,n-2,6,1052720);else{for(let s=0;s<8;s++){const r=s/8*Math.PI*2;this.rect(e+Math.cos(r)*9-1,n+Math.sin(r)*9-1,2,2,16764992)}this.circle(e,n,5,16764992)}}note(t,e,n){this.circle(t-2,e+4,3,n),this.rect(t,e-6,2,10,n),this.rect(t,e-6,5,2,n)}box(t,e,n,s,r,a,o=4){const l=this.g;l.fillStyle=_n(a),l.fillRect(t,e,n,s),l.fillStyle=_n(r),l.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=_n(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const l=this.g;l.font=`${s}px ${Sr}`,l.textAlign="center",l.textBaseline="top";for(let c=s/6;c>0;c-=2)l.fillStyle=_n(o),l.fillText(t,e+c*.5,n+c);l.fillStyle="#000";for(const[c,h]of[[-3,0],[3,0],[0,-3],[0,3]])l.fillText(t,e+c,n+h);l.save(),l.beginPath(),l.rect(0,n-4,pt,s*.5+4),l.clip(),l.fillStyle=_n(r),l.fillText(t,e,n),l.restore(),l.save(),l.beginPath(),l.rect(0,n+s*.5,pt,s),l.clip(),l.fillStyle=_n(a),l.fillText(t,e,n),l.restore()}flare(t,e,n){const s=this.g,r=pt/2,a=Ne/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const l=s.createLinearGradient(t-260,e,t+260,e);l.addColorStop(0,"rgba(255,220,180,0)"),l.addColorStop(.5,`rgba(255,230,190,${.35*n})`),l.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=l,s.fillRect(t-260,e-2,520,4);const c=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,d,u,f]of c){const m=t+(r-t)*h,_=e+(a-e)*h;s.fillStyle=`rgba(${u},${f*n})`,s.beginPath();for(let g=0;g<6;g++){const p=g/6*Math.PI*2+Math.PI/6,x=m+Math.cos(p)*d,M=_+Math.sin(p)*d;g===0?s.moveTo(x,M):s.lineTo(x,M)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?yn:a<20?zt:ae,l=8+Math.floor(a*.9);this.rect(t+a*12,e-l,10,l,a<r?o:2109472)}}};Es.ARROWS={"↑":"up","↓":"down","←":"left","→":"right"};let Gc=Es;const Qt=6,qg=3,j=11,Bi=4,Er=j*2/Bi;class Yg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*Qt:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*Qt}}const Kg=(i,t,e)=>i+(t-i)*e*e,$g=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),No=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Gs{constructor(t,e=0){this.profileOf=t,this.track=new Yg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*Qt}section(t,e,n,s,r){const a=t+e+n,o=this.y;let l=0;for(let c=0;c<t;c++,l++)this.push(Kg(0,s,c/t),No(o,o+r,l/a));for(let c=0;c<e;c++,l++)this.push(s,No(o,o+r,l/a));for(let c=0;c<n;c++,l++)this.push($g(s,0,c/n),No(o,o+r,l/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const l=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let c=e.sign();this.heading>.7&&(c=-1),this.heading<-.7&&(c=1);const h=e.range(9e-4,.0032)*t.curvy;let d=0;e.chance(.25+t.hilly*.6)&&(d=e.range(10,45)*t.hilly*e.sign(),this.y+d>t.yMax&&(d=t.yMax-this.y),this.y+d<t.yMin&&(d=t.yMin-this.y));const u=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*c,Math.min(d,0));else if(u<.18)this.straight(e.int(25,60),d);else if(u<.42){const f=e.int(15,35);this.section(15,f,15,h*c,d*.5),this.section(15,f,15,-h*c,d*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*c,d);this.tunnel=!1,this.zone=l}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const yr=6,iu=200,ms=yr+iu+1;class jg{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(ms),this.by=new Float32Array(ms),this.bz=new Float32Array(ms),this.bh=new Float32Array(ms),this.yRef=0,this.heading=0,this.count=yr+iu}update(t){const e=this.track,n=Math.floor(t/Qt),s=t/Qt-n,r=e.H(n)+e.seg(n).curve*s*Qt;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-yr;const{bx:a,bz:o,bh:l,by:c}=this,h=yr,d=yr+1;let u=e.H(n+1)-r,f=(1-s)*Qt;l[d]=u,a[d]=Math.sin(u/2)*f,o[d]=-Math.cos(u/2)*f;for(let m=d+1;m<ms;m++){u=e.H(this.start+m)-r;const _=(l[m-1]+u)/2;l[m]=u,a[m]=a[m-1]+Math.sin(_)*Qt,o[m]=o[m-1]-Math.cos(_)*Qt}u=e.H(n)-r,f=s*Qt,l[h]=u,a[h]=-Math.sin(u/2)*f,o[h]=Math.cos(u/2)*f;for(let m=h-1;m>=0;m--){u=e.H(this.start+m)-r;const _=(l[m+1]+u)/2;l[m]=u,a[m]=a[m+1]-Math.sin(_)*Qt,o[m]=o[m+1]+Math.cos(_)*Qt}for(let m=0;m<ms;m++)c[m]=e.Y(this.start+m)-this.yRef}sample(t,e,n){const s=t/Qt,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const l=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=l,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(l)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(l)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const Rt=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),gs=657932,Ge=12063760,ca=16747040,Mn=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],Ke=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",nose:"bar",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[Rt(-2.24,.88,.3,.5,.56,.8,"p"),Rt(-1.7,.93,.24,.62,.68,.86,"p"),Rt(-.85,.96,.22,.74,.8,.8,"ws"),Rt(-.05,.97,.22,.8,1.12,.62,"rf"),Rt(.55,.98,.22,.84,1.12,.62,"rw"),Rt(1,.99,.22,.87,.98,.8,"p"),Rt(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:gs}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Ge,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:ca}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[...Mn(.55,.33,.05),...Mn(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",nose:"lip",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[Rt(-2.07,.86,.28,.4,.44,.76,"p"),Rt(-1.3,.92,.24,.56,.62,.84,"p"),Rt(-.75,.95,.22,.66,.72,.84,"ws"),Rt(.15,.97,.22,.74,1.06,.6,"rf"),Rt(.65,.99,.22,.78,1.06,.62,"rw"),Rt(1.05,1,.22,.84,.94,.88,"p"),Rt(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:gs}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Ge,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:ca}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[...Mn(.32,.32,.055),...Mn(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",nose:"slots",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[Rt(-2.18,.9,.27,.46,.5,.8,"p"),Rt(-1.5,.95,.22,.6,.66,.88,"p"),Rt(-.8,.97,.22,.7,.76,.82,"ws"),Rt(-.05,.98,.22,.76,1.1,.62,"rf"),Rt(.5,.99,.22,.8,1.1,.62,"lv"),Rt(1.6,.99,.22,.86,.92,.86,"p"),Rt(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:gs}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Ge,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Ge,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},...Mn(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",nose:"twin",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[Rt(-2.13,.84,.3,.5,.56,.74,"p"),Rt(-1.6,.9,.26,.62,.7,.8,"p"),Rt(-.75,.92,.25,.76,.84,.72,"ws"),Rt(-.1,.92,.25,.8,1.26,.6,"rf"),Rt(.35,.92,.25,.82,1.26,.6,"rw"),Rt(1.45,.94,.25,.86,.96,.8,"p"),Rt(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Ge,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Ge,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:Mn(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",nose:"grille",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[Rt(-2.27,.83,.32,.72,.77,.79,"p"),Rt(-2.05,.87,.3,.78,.83,.82,"p"),Rt(-1.2,.88,.3,.82,.87,.82,"p"),Rt(-.62,.88,.3,.84,.89,.8,"ws"),Rt(.05,.88,.3,.86,1.33,.7,"rf"),Rt(.85,.88,.3,.87,1.33,.7,"rw"),Rt(1.45,.88,.3,.9,.99,.82,"p"),Rt(2.1,.87,.3,.91,1,.82,"p"),Rt(2.27,.85,.32,.89,.97,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Ge,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Ge,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",nose:"mouth",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[Rt(-2.26,.72,.3,.52,.58,.6,"p"),Rt(-2.05,.84,.28,.6,.67,.74,"p"),Rt(-1.5,.9,.27,.68,.77,.74,"p"),Rt(-.5,.9,.27,.76,.83,.74,"ws"),Rt(.2,.89,.27,.8,1.25,.6,"rf"),Rt(.62,.89,.27,.82,1.23,.6,"rw"),Rt(1.35,.93,.27,.86,.95,.8,"p"),Rt(1.95,.9,.28,.9,.99,.78,"p"),Rt(2.26,.78,.3,.88,.96,.66,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[],lights:[{x:.56,y:.8,w:.24,h:.22,c:Ge,round:!0,brake:!0},{x:.3,y:.8,w:.2,h:.19,c:Ge,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",nose:"mouth",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[Rt(-2.15,.7,.3,.5,.5,.5,"p"),Rt(-1.95,.84,.27,.6,.57,.56,"p"),Rt(-1.25,.88,.26,.68,.63,.54,"p"),Rt(-.45,.88,.26,.72,.74,.62,"ws"),Rt(.2,.86,.26,.76,1.17,.56,"rf"),Rt(.62,.86,.26,.78,1.14,.56,"rw"),Rt(1.4,.9,.26,.82,.9,.7,"p"),Rt(1.92,.84,.28,.84,.9,.66,"p"),Rt(2.15,.72,.3,.8,.86,.56,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.72,w:1.24,h:.16,c:2759196}],lights:[{x:.52,y:.72,w:.13,h:.12,c:Ge,round:!0,brake:!0},{x:.36,y:.72,w:.13,h:.12,c:Ge,round:!0,brake:!0},{x:.2,y:.72,w:.13,h:.12,c:ca,round:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:Mn(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",nose:"slim",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[Rt(-2.21,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.89,.26,.62,.68,.84,"p"),Rt(-.95,.9,.26,.72,.78,.8,"ws"),Rt(-.15,.9,.26,.78,1.15,.62,"rf"),Rt(.5,.9,.26,.82,1.13,.62,"rw"),Rt(1,.9,.26,.86,.96,.8,"p"),Rt(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Ge,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:Mn(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",nose:"twin",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[Rt(-2.23,.88,.28,.42,.46,.78,"p"),Rt(-1.4,.95,.24,.58,.64,.88,"p"),Rt(-.8,.98,.22,.66,.72,.86,"ws"),Rt(.2,1,.22,.74,1.1,.6,"rf"),Rt(.65,1.02,.22,.78,1.08,.64,"rw"),Rt(1.2,1.03,.22,.86,.96,.9,"p"),Rt(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:gs}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Ge,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:ca,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[...Mn(.12,.42,.055),...Mn(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",nose:"mouth",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[Rt(-2.15,.82,.3,.48,.52,.72,"p"),Rt(-1.5,.88,.26,.6,.66,.82,"p"),Rt(-1,.9,.25,.68,.74,.78,"ws"),Rt(-.15,.91,.25,.74,1.13,.56,"rf"),Rt(.35,.91,.25,.78,1.1,.58,"rw"),Rt(1,.91,.25,.84,.94,.82,"p"),Rt(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:gs}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Ge,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Ge,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",nose:"mouth",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[Rt(-2.12,.86,.3,.5,.56,.78,"p"),Rt(-1.5,.92,.26,.62,.68,.86,"p"),Rt(-.8,.94,.24,.72,.78,.82,"ws"),Rt(-.05,.95,.24,.78,1.15,.6,"rf"),Rt(.5,.95,.24,.82,1.12,.62,"rw"),Rt(1.1,.95,.24,.86,.96,.84,"p"),Rt(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:gs}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Ge,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Ge,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[...Mn(.55,.38,.05),...Mn(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}],Hc=5,Fh=1.18,xs=5,Zg=.06,kh=150,Jg=400,Qg=1.5,t2=2.5,e2=.08,ar=[100,150,200,300,400,500],_s=200,Uo=5,n2=75,i2=3,s2=20,or=3,la=5,zh=70,r2=900,a2=1.5,o2=40,Bh=1,Gh=10,Hh=2.5,Oo=1.3,Fo=90;class ai{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const Vh=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],c2=3.6;function l2(i,t,e,n=3,s=0){const r=new ai(e),a=Ke.filter(o=>o!==i);for(let o=a.length-1;o>0;o--){const l=r.int(0,o);[a[o],a[l]]=[a[l],a[o]]}return Vh.map((o,l)=>{const c=a[l%a.length],h=Math.floor((Vh.length-l)/2),d=l%2===0?-1:1;return{name:o.name,spec:c,paint:r.pick(c.paints),d:t+9+h*9,x:d*Er*.55,v:0,vmax:c.stats.vmax/c2*o.skill,corner:o.corner,aggro:o.aggro,lane:d*r.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:n,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:s,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-2,rocketT:0}})}const Gi=()=>performance.now()/1e3;function h2(i,t,e,n,s,r,a,o){const l=e.goalDist;for(const c of i){if(c.remote){const M=c.remote;Gi()-M.at>3&&(M.v=0);const v=Math.min(1,Gi()-M.at),E=M.d+M.v*v;c.v=M.v,c.d+=c.v*t,c.d+=(E-c.d)*Math.min(1,t*6),Math.abs(E-c.d)>30&&(c.d=E),c.x+=(M.x-c.x)*Math.min(1,t*8),c.spin-=c.v*t/.37;continue}if(!o){c.v=0;continue}if(c.wrecked){c.wreckT+=t,c.v=Math.max(0,c.v-22*t),c.d+=c.v*t,c.spin-=c.v*t/.37,c.braking=!0,c.steer*=1-t*3;continue}const h=e.seg(Math.floor(c.d/Qt)),d=e.seg(Math.floor((c.d+70)/Qt)),u=Math.max(Math.abs(h.curve),Math.abs(d.curve));let f=c.vmax*(1-Math.min(.3,u*70*(1.15-c.corner)));const m=c.d-r.pos;m>450?f*=.9:m>250?f*=.96:m<-300?f*=1.15:m<-120&&(f*=1.08),c.turboT>0?(c.turboT-=t,f*=1.18):c.turbos>0&&u<9e-4&&c.d<l-300&&m>-200&&m<120&&Math.random()<t*(.05+c.aggro*.1)&&(c.turbos--,c.turboT=Hc),c.d>l+250&&(f=0),c.bumpT>0&&(c.bumpT-=t,f*=.6),c.hp<35&&(f*=.8+.2*(c.hp/35));const _=n.map(M=>({d:M.d,x:M.x,v:M.v,len:s(M)}));for(const M of i)M!==c&&_.push({d:M.d,x:M.x,v:M.v,len:4.4});_.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let g=null;for(const M of _){const v=M.d-c.d;v>0&&v<22+c.v*.5&&Math.abs(M.x-c.x)<2.6&&M.v<c.v+2&&(!g||v<g.d-c.d)&&(g=M)}let p=Math.max(-6,Math.min(6,d.curve*2200))+c.lane*.5;if(g){const M=g.x-3.4,v=g.x+3.4,E=M>-j+1.2,w=v<j-1.2;p=E&&(!w||Math.abs(M-c.x)<Math.abs(v-c.x))?M:w?v:c.x,!E&&!w&&(f=Math.min(f,g.v*(.98-(1-c.aggro)*.05)))}p=Math.max(-j+1.4,Math.min(j-1.4,p));const x=Math.sign(p-c.x)*Math.min(Math.abs(p-c.x),(6+c.aggro*4)*t);c.x+=x,c.steer+=(x/Math.max(t,.001)/10-c.steer)*Math.min(1,t*8),c.braking=f<c.v-3,c.v+=Math.sign(f-c.v)*Math.min(Math.abs(f-c.v),(c.braking||c.turboT>0?40:22)*t);for(const M of n)Math.abs(M.d-c.d)<s(M)&&Math.abs(M.x-c.x)<2&&(c.v=Math.min(c.v,M.v*.9),c.x+=Math.sign(c.x-M.x||1)*.6);for(const M of i)if(M!==c&&Math.abs(M.d-c.d)<4.2&&Math.abs(M.x-c.x)<1.9){const v=Math.sign(c.x-M.x||1)*.4;c.x+=v,c.d<M.d&&(c.v=Math.min(c.v,M.v))}c.d+=c.v*t,c.spin-=c.v*t/.37,c.finished<0&&c.d>=l&&(c.finished=a)}}function ko(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const ha=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function ua(i,t,e,n,s,r){const a=t.goalDist,o=i.map(l=>({name:l.name,car:l.spec.name,time:l.finished>=0?l.finished:l.wrecked?1/0:r+Math.max(0,a-l.d)/Math.max(20,l.v||l.vmax),player:!1,estimated:l.finished<0&&!l.wrecked}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((l,c)=>l.time-c.time),o.map((l,c)=>({...l,pos:c+1}))}const Wh=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},u2="modulepreload",d2=function(i,t){return new URL(i,t).href},Xh={},f2=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=d2(c,n),c in Xh)return;Xh[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let m=a.length-1;m>=0;m--){const _=a[m];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":u2,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},vn=1,p2="turbo-horizon-86";function m2(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}const da="staticauth.openrelay.metered.ca",g2="openrelayprojectsecret",x2="turbo-horizon",_2="f5f40d32a05e4a316475df2cc0979d044f8b";let su=!1;async function M2(){const i=new AbortController,t=window.setTimeout(()=>i.abort(),5e3);try{const n=await(await fetch(`https://${x2}.metered.live/api/v1/turn/credentials?apiKey=${encodeURIComponent(_2)}`,{signal:i.signal})).json(),s=Array.isArray(n)?n.filter(r=>r&&r.username&&r.credential&&JSON.stringify(r.urls).includes("turn")):[];return su=s.length>0,s}catch{return[]}finally{window.clearTimeout(t)}}async function v2(){return[...await M2(),...await y2()]}async function y2(){try{const i=`${Math.floor(Date.now()/1e3)+86400}:th86`,t=new TextEncoder,e=await crypto.subtle.importKey("raw",t.encode(g2),{name:"HMAC",hash:"SHA-1"},!1,["sign"]),n=new Uint8Array(await crypto.subtle.sign("HMAC",e,t.encode(i))),s=btoa(String.fromCharCode(...n));return[{urls:[`turn:${da}:80`,`turn:${da}:80?transport=tcp`,`turn:${da}:443`,`turns:${da}:443?transport=tcp`],username:i,credential:s}]}catch{return[]}}async function b2(i){const[t,e]=await Promise.all([f2(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),v2()]),n=new URLSearchParams(location.search).get("relay"),s=n&&/^wss?:\/\/[\w.:-]+\/?$/.test(n)?{urls:[n]}:void 0,r=new Set;let a=0,o=0;const l=new Set;class c extends RTCPeerConnection{constructor(m){super(m),r.add(this);let _=!1,g=!1;const p=()=>{!_&&this.remoteDescription&&(_=!0,a++),!g&&this.connectionState==="failed"&&(g=!0,o++),this.connectionState==="closed"&&r.delete(this)};this.addEventListener("signalingstatechange",p),this.addEventListener("connectionstatechange",p)}}const h=t.joinRoom({appId:p2,turnConfig:e,rtcPolyfill:c,relayConfig:s??{redundancy:8}},i,{onJoinError:f=>{const m=f.peerId??"";l.has(m)||(l.add(m),o++),console.warn("join error",f)}}),d=new Map,u=f=>{let m=d.get(f);return m||(m=h.makeAction(f),d.set(f,m)),m};return{selfId:t.selfId,send:(f,m,_)=>{u(f).send(m,_?{target:_}:void 0).catch(()=>{})},on:(f,m)=>{u(f).onMessage=(_,g)=>m(_,g.peerId)},onLeave:f=>{h.onPeerLeave=f},onJoin:f=>{h.onPeerJoin=f},leave:()=>{h.leave().catch(()=>{})},links:()=>({found:a,linked:[...r].filter(f=>f.connectionState==="connected").length,failed:o}),servers:()=>{const f=Object.values(t.getRelaySockets()??{});return[f.filter(m=>m.readyState===1).length,f.length]}}}const Ce=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,zn=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Vc(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class S2{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.created=performance.now(),this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:"",since:Date.now(),set:null},this.onGo=null,this.onSt=null,this.onHit=null,this.onRk=null,this.onKicked=null,this.banned=new Set,this.onPeer=null,(e?Promise.resolve(m2(t)):b2(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.on("hit",(s,r)=>this.gotHit(s,r)),n.on("rk",(s,r)=>this.gotRk(s,r)),n.on("kick",(s,r)=>this.gotKick(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:vn,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:vn,...t})}sendHit(t){var e;(e=this.tr)==null||e.send("hit",{p:vn,...t})}kick(t){var e;this.isHost()&&(this.banned.add(t),this.peers.delete(t),(e=this.tr)==null||e.send("kick",{p:vn,to:t}))}gotKick(t,e){var s;const n=t;!n||n.p!==vn||n.to!==this.selfId||this.host().id!==e||(s=this.onKicked)==null||s.call(this)}sendRk(t){var e;(e=this.tr)==null||e.send("rk",{p:vn,...t})}gotRk(t,e){var s;const n=t;!n||n.p!==vn||(s=this.onRk)==null||s.call(this,{r:zn(n.r,24),d:Ce(n.d,-1e3,1e6),x:Ce(n.x,-50,50),v:Ce(n.v,0,400)},e)}gotHit(t,e){var s;const n=t;!n||n.p!==vn||(s=this.onHit)==null||s.call(this,{r:zn(n.r,24),to:zn(n.to,64),n:Math.round(Ce(n.n,0,10)),rk:n.rk===!0},e)}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}host(){let t={id:this.selfId,name:this.me.name,set:this.me.set,since:this.me.since};for(const e of this.peers.values())(e.since<t.since||e.since===t.since&&e.id<t.id)&&(t={id:e.id,name:e.name,set:e.set,since:e.since});return t}isHost(){return this.host().id===this.selfId}servers(){var t,e;return((e=(t=this.tr)==null?void 0:t.servers)==null?void 0:e.call(t))??null}relay(){return su}links(){var t,e;return((e=(t=this.tr)==null?void 0:t.links)==null?void 0:e.call(t))??null}serversDown(){const t=this.servers();return!!t&&t[1]>0&&t[0]===0&&performance.now()-this.created>8e3}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:vn,...this.me},t)}gotHi(t,e){var a;const n=t;if(!n||n.p!==vn||this.banned.has(e))return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Vc(zn(n.name,40))||"PLAYER",car:Math.round(Ce(n.car,0,63)),paint:Math.round(Ce(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:zn(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r,since:Ce(n.since,0,1e14,Date.now()),set:w2(n.set)}),s||(a=this.onPeer)==null||a.call(this,this.peers.get(e))}gotGo(t,e){var a;const n=t;if(!n||n.p!==vn||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:zn(o==null?void 0:o.id,64),name:Vc(zn(o==null?void 0:o.name,40))||"PLAYER",car:Math.round(Ce(o==null?void 0:o.car,0,63)),paint:Math.round(Ce(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:zn(n.raceId,24),route:Math.round(Ce(n.route,0,5)),seed:Math.round(Ce(n.seed,0,1e9)),turbos:Math.round(Ce(n.turbos,1,9,5)),weapons:n.weapons===!0,ammo:Math.round(Ce(n.ammo,10,999,300)),rockets:Math.round(Ce(n.rockets,0,5,1)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==vn||(s=this.onSt)==null||s.call(this,{r:zn(n.r,24),d:Ce(n.d,-1e3,1e6),x:Ce(n.x,-50,50),v:Ce(n.v,0,200),steer:Ce(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:Ce(n.hp,0,100,100),fin:Ce(n.fin,-1,1e5,-1),gun:zn(n.gun,64)},e)}}function w2(i){const t=i;return!t||typeof t!="object"?null:{route:Math.round(Ce(t.route,0,5)),turbos:Math.round(Ce(t.turbos,1,9,5)),weapons:t.weapons===!0,ammo:Math.round(Ce(t.ammo,10,999,300)),rockets:Math.round(Ce(t.rockets,0,5,1))}}function qh(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}function E2(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,M=o.length;x<M;x++){const v=o[x],E=i.attributes[v];l[v]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const w=i.morphAttributes[v];w&&(c[v]||(c[v]=[]),w.forEach((T,R)=>{const S=new T.array.constructor(T.count*T.itemSize);c[v][R]=new T.constructor(S,T.itemSize,T.normalized)}))}const f=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),g=f*_;for(let x=0;x<r;x++){const M=n?n.getX(x):x;let v="";for(let E=0,w=o.length;E<w;E++){const T=o[E],R=i.getAttribute(T),S=R.itemSize;for(let b=0;b<S;b++)v+=`${~~(R[d[b]](M)*_+g)},`}if(v in e)h.push(e[v]);else{for(let E=0,w=o.length;E<w;E++){const T=o[E],R=i.getAttribute(T),S=i.morphAttributes[T],b=R.itemSize,P=l[T],z=c[T];for(let H=0;H<b;H++){const W=d[H],tt=u[H];if(P[tt](a,R[W](M)),S)for(let O=0,it=S.length;O<it;O++)z[O][tt](a,S[O][W](M))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const M=l[x];if(p.setAttribute(x,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),x in c)for(let v=0;v<c[x].length;v++){const E=c[x][v];p.morphAttributes[x][v]=new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(h),p}class dt{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new K,this.c=new Ot,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,l,c,h]=a;this.tri(t,e,n,r,[[o,l],[c,l],[c,h]]),this.tri(t,n,s,r,[[o,l],[c,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,l,c,h,d,u=0){const[f,m]=Array.isArray(h)?h:[h,h],_=t-s/2,g=t+s/2,p=e-r/2,x=e+r/2,M=n-a/2,v=n+a/2,E=r/c,w=s/l,T=a/l;return this.quadT([g,p,v],[_,p,v],[_,x,v],[g,x,v],f,[u,0,u+w,E],o),this.quadT([_,p,M],[g,p,M],[g,x,M],[_,x,M],f,[u+.5,0,u+.5+w,E],o),this.quadT([_,p,v],[_,p,M],[_,x,M],[_,x,v],m,[u+.25,0,u+.25+T,E],o),this.quadT([g,p,M],[g,p,v],[g,x,v],[g,x,M],m,[u+.75,0,u+.75+T,E],o),this.quad([_,x,M],[g,x,M],[g,x,v],[_,x,v],d),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const l=Array.isArray(o)?o:[o],c=l[0],h=l[1]??c,d=l[2]??c,u=l[3]??c,f=t-s/2,m=t+s/2,_=e-r/2,g=e+r/2,p=n-a/2,x=n+a/2;return this.quad([f,g,p],[m,g,p],[m,g,x],[f,g,x],h),this.quad([f,_,p],[f,_,x],[m,_,x],[m,_,p],c),this.quad([f,_,p],[m,_,p],[m,g,p],[f,g,p],d),this.quad([m,_,x],[f,_,x],[f,g,x],[m,g,x],u),this.quad([f,_,x],[f,_,p],[f,g,p],[f,g,x],c),this.quad([m,_,p],[m,_,x],[m,g,x],[m,g,p],c),this}prism(t,e,n,s,r,a,o,l,c=null,h=0){const d=Array.isArray(l)?l:[l];for(let u=0;u<o;u++){const f=h+u/o*Math.PI*2,m=h+(u+1)/o*Math.PI*2,_=[t+Math.cos(f)*r,n,e+Math.sin(f)*r],g=[t+Math.cos(m)*r,n,e+Math.sin(m)*r],p=[t+Math.cos(m)*a,s,e+Math.sin(m)*a],x=[t+Math.cos(f)*a,s,e+Math.sin(f)*a];a<=1e-4?this.tri(_,g,x,d[u%d.length]):this.quad(_,g,p,x,d[u%d.length])}if(c!==null&&a>1e-4){const u=[];for(let f=0;f<o;f++){const m=h+f/o*Math.PI*2;u.push([t+Math.cos(m)*a,s,e+Math.sin(m)*a])}this.poly(u,c)}return this}blob(t,e,n,s,r,a,o){const l=new hl(1,0),c=l.attributes.position,h=Array.isArray(o)?o:[o];for(let d=0;d<c.count;d+=3){const u=_=>[t+c.getX(_)*s,e+c.getY(_)*r,n+c.getZ(_)*a],f=c.getY(d)+c.getY(d+1)+c.getY(d+2),m=h.length>1?f>.3?h[0]:h[1]:h[0];this.tri(u(d),u(d+1),u(d+2),m)}return l.dispose(),this}build(t=!1){const e=new We;if(e.setAttribute("position",new we(this.pos,3)),e.setAttribute("color",new we(this.col,3)),this.hasUv&&e.setAttribute("uv",new we(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new we(this.tiles,3)),t){const n=E2(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function T2(i){return new kt().makeRotationY(i)}function Yh(i,t,e){return new kt().makeTranslation(i,t,e)}const ut={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14,PLAIN:15},A2={[ut.SEA]:.04,[ut.BAY]:.03,[ut.SHALLOW]:.06,[ut.FOAM]:.09},q=128,Fn=4;class dl{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(q,q);for(let o=0;o<q*q;o++){const l=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*l*r[0],a.data[o*4+1]=255*l*r[1],a.data[o*4+2]=255*l*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const l=this.g;l.fillStyle=o;for(const c of[0,-q])for(const h of[0,-q]){const d=n+c,u=s+h;d+r<=0||u+a<=0||d>=q||u>=q||l.fillRect(t+Math.max(0,d),e+Math.max(0,u),Math.min(q,d+r)-Math.max(0,d),Math.min(q,u+a)-Math.max(0,u))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*q),Math.floor(this.rnd()*q),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function R2(i,t){const e=t%Fn*q,n=Math.floor(t/Fn)*q,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case ut.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*q,o=n+i.rnd()*q;s.moveTo(a,o);for(let l=0;l<7;l++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,q,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,q,"rgba(0,0,0,0.05)");break}case ut.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case ut.KERB:{for(let r=0;r<q;r++){const a=.78+.22*Math.sin(r/q*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,q)}for(let r=0;r<q;r+=32)i.wrapRect(e,n,0,r,q,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case ut.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*q,o=i.rnd()*q,l=4+i.rnd()*8;i.wrapRect(e,n,a,o,l,l*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*q),o=Math.floor(i.rnd()*q),l=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),l?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case ut.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case ut.SAND:{for(let r=0;r<q;r++)for(let a=0;a<q;a++){const l=.9+Math.sin(a/q*Math.PI*8+Math.sin(r/q*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(l),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case ut.SEA:case ut.BAY:case ut.SHALLOW:{const r=t===ut.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===ut.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*q,l=n+i.rnd()*q;s.moveTo(o,l),s.quadraticCurveTo(o+(i.rnd()-.5)*30,l+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,l+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*q,l=i.rnd()*q,c=6+i.rnd()*16;i.wrapRect(e,n,o,l+1,c,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,l,c-3,1,i.grey(1,t===ut.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case ut.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case ut.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,q,i.grey(.6)),i.wrapRect(e,n,64,0,1,q,i.grey(.72)),i.wrapRect(e,n,0,0,q,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case ut.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<q;r+=16)i.wrapRect(e,n,0,r,q,1,i.grey(.72));for(let r=0;r<q;r+=16)for(let a=r/16%2?8:0;a<q;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,10,6,"rgba(0,0,0,0.08)");break}case ut.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<q;r+=32)i.wrapRect(e,n,r,0,2,q,i.grey(.6));i.wrapRect(e,n,0,60,q,6,i.grey(.7));break}case ut.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<q;r+=16){i.wrapRect(e,n,0,r,q,1,i.grey(.68));for(let a=r/16%2?16:0;a<q;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case ut.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,q,q);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,q,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,q,"#3a3a50");for(let o=2;o<q;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*q,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,q,q)}s.restore()}function C2(){const i=document.createElement("canvas");i.width=i.height=q*Fn;const t=new dl(i);for(let e=0;e<16;e++)R2(t,e);return fl(i)}function fl(i){const t=i.getContext("2d"),e=new Uint8Array(q*q*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%Fn*q,Math.floor(s/Fn)*q,q,q).data;for(let a=0;a<q;a++)e.set(r.subarray((q-1-a)*q*4,(q-a)*q*4),(s*q*q+a*q)*4)}const n=new il(e,q,q,16);return n.wrapS=n.wrapT=za,n.magFilter=pn,n.minFilter=_i,n.generateMipmaps=!0,n.colorSpace=He,n.needsUpdate=!0,n}function Pr(i){return[i,0]}const ru=new Z0(new Uint8Array([255,255,255,255]),1,1);ru.needsUpdate=!0;function Wa(i,t,e){const n=e??{value:0};return i.map=ru,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const Ae={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function P2(i,t){const e=t%Fn*q,n=Math.floor(t/Fn)*q,s=i.g;i.seed(t*104729+7);const r=(a,o,l,c,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,l,c)};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case Ae.HOTEL:{r(0,0,q,q,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,q,2,"#d8d4cc");for(let l=0;l<4;l++){const c=l*32+5;r(c-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+c,n+o+6,22,18),r(c+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+c+2,n+o+22),s.lineTo(e+c+9,n+o+7),s.lineTo(e+c+12,n+o+7),s.lineTo(e+c+5,n+o+22),s.fill(),r(c-3,o+21,28,2,"#ffffff");for(let d=0;d<7;d++)r(c-2+d*4,o+23,1,5,"#ffffff");r(c-3,o+28,28,2,"#bdbab2")}}break}case Ae.DECO:{r(0,0,q,q,"#f6f0e4");for(let a=0;a<q;a+=32)r(a,0,4,q,"#e2dacb"),r(a+4,0,1,q,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,q,3,"#e8e0d0");for(let l=0;l<4;l++){const c=l*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+c+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(c+2,o+22,10,6,"#3a78a8"),r(c+1,o+21,12,1,"#ffffff")}}break}case Ae.SHOP:{r(0,0,q,q,"#f2eee6"),r(0,0,q,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,q,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case Ae.MOTEL:{r(0,0,q,q,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,q,6,"#d6d0c4"),r(0,o+54,q,2,"#ffffff");for(let l=0;l<16;l++)r(l*8,o+54,1,6,"#ffffff");for(let l=0;l<2;l++){const c=l*64;r(c+6,o+14,16,38,["#2a8a8a","#c85a4a"][l]),r(c+18,o+32,2,3,"#e0c060"),r(c+30,o+18,26,18,"#4a7aa8"),r(c+30,o+18,26,2,"#ffffff"),r(c+34,o+38,14,8,"#c8c8c8"),r(c+35,o+39,12,1,"#9a9a9a")}}break}case Ae.OFFICE_WARM:case Ae.OFFICE_COOL:case Ae.OFFICE_DARK:{r(0,0,q,q,"#1a1e36");const a=t===Ae.OFFICE_WARM?.42:t===Ae.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],l=["#e8f6ff","#c8ecff","#ffffff"];for(let c=0;c<8;c++){const h=c*16,d=t===Ae.OFFICE_COOL&&i.rnd()<.5;for(let u=0;u<8;u++){const f=u*16,m=d||i.rnd()<a,_=m?i.rnd()<.15?"#8adfff":(t===Ae.OFFICE_COOL?l:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(f+2,h+3,12,10,_),m&&i.rnd()<.4)for(let g=0;g<4;g++)r(f+2,h+4+g*3,12,1,"rgba(0,0,0,0.25)");m&&i.rnd()<.2&&r(f+5,h+8,3,5,"rgba(20,20,40,0.6)"),m||r(f+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,q,2,"#2a3054")}for(let c=0;c<q;c+=16)r(c,0,2,q,"#2c3258");break}case Ae.APARTMENT:{r(0,0,q,q,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let l=0;l<4;l++){const c=l*32,h=i.rnd()<.5;r(c+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(c+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(c+2,o+15,28,2,"#8a86a0");for(let d=0;d<7;d++)r(c+3+d*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(c+24,o+9,4,6,"#b0b0c0")}}break}case Ae.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<q;a+=16)r(0,a,q,1,"rgba(0,0,0,0.18)");break}default:r(0,0,q,q,"#ffffff")}s.restore()}function I2(){const i=document.createElement("canvas");i.width=i.height=q*Fn;const t=new dl(i);for(let e=0;e<16;e++)P2(t,e);return fl(i)}const Kt={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},L2={star:Kt.RIM_STAR,six:Kt.RIM_SIX,multi:Kt.RIM_MULTI,mesh:Kt.RIM_MESH,dial:Kt.RIM_DIAL,steel:Kt.RIM_STEEL};function D2(i,t){const e=t%Fn*q,n=Math.floor(t/Fn)*q,s=i.g;i.seed(t*15485863+3);const r=(d,u,f,m,_)=>{s.fillStyle=_,s.fillRect(e+d,n+u,f,m)},a=q/2,o=(d,u,f=a,m=a)=>{s.fillStyle=u,s.beginPath(),s.arc(e+f,n+m,d,0,Math.PI*2),s.fill()},l=(d,u,f)=>{s.strokeStyle=f,s.lineWidth=u,s.beginPath(),s.arc(e+a,n+a,d,0,Math.PI*2),s.stroke()},c=(d,u=14)=>{o(u+3,i.grey(.55)),o(u,i.grey(.92));for(let f=0;f<d;f++){const m=f/d*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(m)*u*.62,a+Math.sin(m)*u*.62)}o(4,i.grey(.7))},h=()=>{l(61,6,i.grey(1)),l(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),s.clearRect(e,n,q,q),t){case Kt.LENS:{r(0,0,q,q,i.grey(.55)),r(6,8,q-12,q-16,i.grey(.88));for(let u=10;u<q-10;u+=9)r(6,u,q-12,2,i.grey(.62));for(let u=10;u<q-8;u+=14)r(u,8,1,q-16,i.grey(.7));const d=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);d.addColorStop(0,"rgba(255,255,255,0.75)"),d.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=d,s.fillRect(e,n,q,q);break}case Kt.LENS_ROUND:{r(0,0,q,q,i.grey(.5)),o(62,i.grey(.6));for(let d=58;d>8;d-=7)o(d,i.grey(.72+(58-d)/200)),l(d,1.5,i.grey(.55+(58-d)/250));o(12,i.grey(1));break}case Kt.LENS_BAR:{r(0,0,q,q,i.grey(.7));for(let d=0;d<q;d+=4)r(d,0,2,q,i.grey(.9));r(0,0,q,10,i.grey(.5)),r(0,q-10,q,10,i.grey(.5)),r(0,a-3,q,6,i.grey(1));break}case Kt.MESH:{r(0,0,q,q,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let d=-q;d<q*2;d+=10)s.beginPath(),s.moveTo(e+d,n),s.lineTo(e+d+q,n+q),s.stroke(),s.beginPath(),s.moveTo(e+d,n+q),s.lineTo(e+d+q,n),s.stroke();break}case Kt.LOUVRE:{for(let d=0;d<q;d+=16){const u=s.createLinearGradient(0,n+d,0,n+d+16);u.addColorStop(0,i.grey(1)),u.addColorStop(.55,i.grey(.7)),u.addColorStop(.6,i.grey(.08)),u.addColorStop(1,i.grey(.15)),s.fillStyle=u,s.fillRect(e,n+d,q,16)}break}case Kt.TREAD:{i.noise(e,n,.85,.05);for(const d of[30,62,94])r(d,0,5,q,i.grey(.25));for(let d=0;d<q;d+=16)for(const[u,f]of[[0,30],[35,62],[67,94],[99,q]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+u,n+d+(u<64?0:6)),s.lineTo(e+f,n+d+(u<64?6:0)),s.stroke();break}case Kt.SIDEWALL:{r(0,0,q,q,i.grey(.16)),r(0,q-10,q,10,i.grey(.1)),r(0,0,q,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case Kt.HEADLAMP:{r(0,0,q,q,i.grey(.55));const d=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);d.addColorStop(0,i.grey(1)),d.addColorStop(.3,i.grey(.95)),d.addColorStop(.75,i.grey(.72)),d.addColorStop(1,i.grey(.5)),s.fillStyle=d,s.fillRect(e+4,n+4,q-8,q-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let u=8;u<q;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u,n+q),s.stroke(),s.beginPath(),s.moveTo(e,n+u),s.lineTo(e+q,n+u),s.stroke();break}case Kt.SEAT:{r(0,0,q,q,i.grey(.8));for(let d=24;d<q-24;d+=10)r(d,0,2,q,i.grey(.55));r(0,0,20,q,i.grey(.65)),r(q-20,0,20,q,i.grey(.65));break}case Kt.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let d=0;d<5;d++){const u=d/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}c(5);break}case Kt.RIM_SIX:{h();for(let d=0;d<6;d++){const u=d/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}c(5,16);break}case Kt.RIM_MULTI:{h();for(let d=0;d<7;d++){const u=d/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}c(5);break}case Kt.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let d=0;d<20;d++){const u=d/20*Math.PI*2;for(const f of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(u)*14,n+a+Math.sin(u)*14),s.lineTo(e+a+Math.cos(u+f)*60,n+a+Math.sin(u+f)*60),s.stroke()}s.restore(),h(),c(5,16);break}case Kt.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let d=0;d<5;d++){const u=d/5*Math.PI*2;o(15,"#000",a+Math.cos(u)*36,a+Math.sin(u)*36)}s.globalCompositeOperation="source-over";for(let d=0;d<5;d++){const u=d/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(u)*36,n+a+Math.sin(u)*36,16,0,Math.PI*2),s.stroke()}h(),c(5);break}case Kt.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),l(40,2,i.grey(.6));for(let d=0;d<8;d++){const u=d/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(u)*46,a+Math.sin(u)*46)}o(14,i.grey(.7));break}default:r(0,0,q,q,"#ffffff")}s.restore()}let fa=null;function N2(){if(fa)return fa;const i=document.createElement("canvas");i.width=i.height=q*Fn;const t=new dl(i);for(let e=0;e<16;e++)D2(t,e);return fa=fl(i),fa}function si(i,t,e,n,s=10,r=7){const a=typeof n=="number"?()=>n:n,o=(l,c)=>{const h=c/r*Math.PI,d=l/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(d)*e[0],t[1]+Math.cos(h)*e[1],t[2]+Math.sin(h)*Math.sin(d)*e[2]]};for(let l=0;l<r;l++)for(let c=0;c<s;c++){const h=(l+.5)/r*Math.PI,d=(c+.5)/s*Math.PI*2,u=[Math.sin(h)*Math.cos(d),Math.cos(h),Math.sin(h)*Math.sin(d)];i.quad(o(c,l),o(c+1,l),o(c+1,l+1),o(c,l+1),a(u[0],u[1],u[2]))}}function au(i,t,e,n,s=12,r=8){si(i,t,[e*.92,e,e*1.04],(a,o,l)=>l<-.42&&o>-.3&&o<.38?o>.2?2768472:1055270:l<-.5&&o<=-.3?14211284:Math.abs(a)<.2&&o>-.1?n:o<-.55?1710620:o>.3?16777215:15132386,s,r)}function ou(i,t,e,n,s){const r=new Ot(n).multiplyScalar(.7).getHex();si(i,t,e,(a,o)=>o>.15&&o<.45?s:o<-.3?r:n,10,6)}function U2(i,t,e){const n=new Ot(t).multiplyScalar(.8).getHex();si(i,[0,0,-.12],[.062,.062,.15],(a,o)=>o>.5?e:t,8,5),si(i,[0,-.012,-.33],[.052,.052,.13],n,8,5),si(i,[0,-.018,-.465],[.05,.055,.05],1315862,8,5);const s=2763824,r=4869718;return i.box(0,.035,-.56,.06,.075,.26,[s,r,s,s]),i.box(0,.077,-.56,.04,.01,.22,r),i.box(0,.02,-.4,.05,.03,.12,1973792),i.with(new kt().makeTranslation(0,-.03,-.47).multiply(new kt().makeRotationX(.25)),()=>i.box(0,0,0,.04,.1,.045,1710620)),i.with(new kt().makeTranslation(0,-.07,-.6).multiply(new kt().makeRotationX(-.18)),()=>i.box(0,0,0,.032,.16,.05,[2105380,3158068])),i.with(new kt().makeRotationX(-Math.PI/2),()=>{i.prism(0,.04,.69,.8,.024,.024,8,[s,1052690],s),i.prism(0,.04,.8,.9,.013,.013,6,r,328965)}),i.box(0,.08,-.66,.012,.025,.012,r),[0,.04,-.92]}const O2=3428460,F2=3954804,In=1447448,Oe=657932,Ms=13949152,Kh=723725,pa=5921376,en=(i,t)=>new Ot(i).multiplyScalar(t).getHex(),k2=(i,t,e)=>new Ot(i).lerp(new Ot(t),e).getHex();function cr(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const l=(r[o-1]+r[o])/2;a.push(Math.sign(l)*Math.min(Math.abs(l),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let l=0;for(;l<e-2&&o>n[l+1];)l++;const c=n[l+1]-n[l];if(c<1e-4)return s[l+1];const h=(o-n[l])/c,d=h*h,u=d*h;return(2*u-3*d+1)*s[l]+(u-2*d+h)*c*a[l]+(-2*u+3*d)*s[l+1]+(u-d)*c*a[l+1]}}const ma=i=>i==="ws"||i==="rf"||i==="rw";function Xa(i,t,e,n,s,r,a,o,l,c){i.tri(t,e,n,r,[a,o,l]),i.tri(t,n,s,r,[a,l,c])}function $h(i,t,e,n,s,r,a,o,l,c=o){i.layer(l,()=>{const h=t-s/2,d=t+s/2,u=e-r/2,f=e+r/2,m=n-a/2,_=n+a/2;i.quad([h,f,m],[d,f,m],[d,f,_],[h,f,_],o,[0,0,1,.3]),i.quad([h,u,m],[d,u,m],[d,f,m],[h,f,m],o,[0,0,1,1]),i.quad([d,u,_],[h,u,_],[h,f,_],[d,f,_],c,[0,0,1,1]),i.quad([h,u,_],[h,u,m],[h,f,m],[h,f,_],en(o,.8),[0,0,.2,1]),i.quad([d,u,m],[d,u,_],[d,f,_],[d,f,m],en(o,.8),[0,0,.2,1]),i.quad([h,u,m],[h,u,_],[d,u,_],[d,u,m],en(o,.6),[0,0,1,.3])})}function jh(i,t,e,n,s){const r=new K(...t),a=new K(...e),o=r.distanceTo(a),l=new kt().lookAt(r,a,new K(0,1,0));l.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(l,()=>i.box(0,0,0,n,n,o,s))}function Zh(i,t,e,n,s=8,r=5,a=n){const o=(l,c)=>{const h=c/r*Math.PI,d=l/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(d)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(d)*e]};for(let l=0;l<r;l++)for(let c=0;c<s;c++){const h=l===1?a:n;i.quad(o(c,l),o(c+1,l),o(c+1,l+1),o(c,l+1),h)}}function Vi(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Wc(i,t,e,n,s,r,a,o,l){i.layer(l,()=>{for(let c=0;c<a;c++){const h=c/a*Math.PI*2,d=(c+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(d)*s,e+Math.sin(d)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(d)*.5,.5+Math.sin(d)*.5]])}})}function cu(i,t,e=!1){var gt;const n=new dt(!0),s=new dt(!0),r=new dt(!0),a=new dt,o=new dt(!0),l=new dt(!0),c=i.stations,h=c[0],d=c[c.length-1],u=h.z,f=d.z,m=cr(c,"w"),_=cr(c,"yb"),g=cr(c,"belt"),p=cr(c,"top"),x=cr(c,"wt"),M=y=>{let L=c[0].seg;for(const N of c)y>=N.z-1e-6&&(L=N.seg);return L},v=en(t,.42),E=en(t,.82),w=i.group==="80s EXOTIC",T=i.wheels,R=e?.11:T.hw??.18,S=[{z:T.fz,x:e?m(T.fz)-.12:T.fx,r:T.r,hw:R,R:0,flare:0},{z:T.rz,x:e?m(T.rz)-.12:T.rx,r:e?T.r:T.r*1.03,hw:e?R:R*1.15,R:0,flare:0}];for(const y of S){y.R=y.r+(e?.06:.07);const L=y.x+y.hw+.02-m(y.z);y.flare=Math.max(i.arch??(e?.012:.035),L)}const b=y=>{let L=0;for(const N of S){const k=(y-N.z)/(N.R+.5);Math.abs(k)<1&&(L+=N.flare*Math.cos(k*Math.PI/2)**2)}return L},P=y=>{let L=-1;for(const N of S){const k=y-N.z;Math.abs(k)<=N.R&&(L=Math.max(L,N.r+Math.sqrt(N.R*N.R-k*k)))}return L},z=y=>{const L=m(y),N=_(y),k=g(y),F=p(y),D=Math.min(x(y),L-.02),ht=M(y),J=b(y),lt=P(y),Et=k-N,St=ma(ht)?.03:.022,wt=[[L-.05,N],[L+J,N+.12*Et],[L+J+.014,N+.5*Et],[L+J*.85,N+.82*Et],[L-.02+J*.5,k],ma(ht)?[L-.03-(L-.03-D)*.42,k+(F-k)*.52]:[D+(L-D)*.55,k+(F-k)*.8],[D,F],[D*.5,F+St*.75],[0,F+St]];if(lt>0){for(let U=0;U<4;U++)wt[U][1]=Math.max(wt[U][1],lt+(U===3?.03:0));wt[4][1]=Math.max(wt[4][1],lt+.07),wt[5][1]=Math.max(wt[5][1],wt[4][1]-.015),wt[6][1]=Math.max(wt[6][1],lt+.03)}return{z:y,seg:ht,pts:wt}},H=e?.6:.17,W=[];for(let y=0;y<c.length-1;y++){const L=Math.max(1,Math.ceil((c[y+1].z-c[y].z)/H));for(let N=0;N<L;N++)W.push(c[y].z+(c[y+1].z-c[y].z)*N/L)}W.push(f);const tt=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const y of S)for(const L of tt)W.push(y.z+y.R*L);W.sort((y,L)=>y-L);const O=[];for(const y of W)y<u||y>f||O.length&&y-O[O.length-1]<.006||O.push(y);const it=O.map(z),B=(y,L,N,k=0,F=0)=>[N*(y.pts[L][0]+k),y.pts[L][1]+F,y.z],nt=((gt=c.find(y=>y.seg==="lv"))==null?void 0:gt.z)??0;for(let y=0;y<it.length-1;y++){const L=it[y],N=it[y+1],k=L.seg;for(const F of[-1,1])for(let D=0;D<8;D++){let ht=B(L,D,F),J=B(N,D,F),lt=B(N,D+1,F),Et=B(L,D+1,F);F>0&&([J,Et]=[Et,J]);const St=(D===4||D===5)&&ma(k),wt=(D===6||D===7)&&(k==="ws"||k==="rw");if(St)a.quad(ht,J,lt,Et,F2);else if(wt)a.quad(ht,J,lt,Et,O2);else if(D>=6&&k==="bed")s.quad(ht,J,lt,Et,In);else{if(D>=6&&k==="lv")continue;n.quad(ht,J,lt,Et,D===0?v:t)}}}c.some(y=>y.seg==="lv")&&s.layer(Kt.LOUVRE,()=>{for(let y=0;y<it.length-1;y++){const L=it[y],N=it[y+1];if(L.seg==="lv")for(const k of[-1,1])for(let F=6;F<8;F++){const D=B(L,F,k),ht=B(N,F,k),J=B(N,F+1,k),lt=B(L,F+1,k),Et=wt=>(wt-nt)/.13,St=wt=>Math.abs(wt[0])*2;Xa(s,D,ht,J,lt,t,[St(D),Et(D[2])],[St(ht),Et(ht[2])],[St(J),Et(J[2])],[St(lt),Et(lt[2])])}}});const et=(y,L,N)=>{const k=[];for(let D=0;D<=8;D++)k.push(B(y,D,1));for(let D=7;D>=0;D--)k.push(B(y,D,-1));const F=(y.pts[0][1]+y.pts[8][1])/2;for(let D=0;D<k.length;D++)N.tri([0,F,y.z],k[D],k[(D+1)%k.length],L)},ot=it[0],Q=it[it.length-1];et(ot,E,s),et(Q,en(t,.9),s);const Ct=(y,L,N,k,F,D,ht,J)=>{const lt=yt=>{const V=yt.pts[N],st=yt.pts[F],vt=st[0]-V[0],bt=st[1]-V[1],Ut=Math.hypot(vt,bt)||1,$t=[k*(V[0]+.006),V[1]+.004,yt.z],le=[k*(V[0]+.006+vt/Ut*D),V[1]+.004+bt/Ut*D,yt.z];return[$t,le]},[Et,St]=lt(y),[wt,U]=lt(L);J.quad(Et,wt,U,St,ht)};for(let y=0;y<it.length-1;y++){const L=it[y],N=it[y+1];if(ma(L.seg))for(const k of[-1,1])Ct(L,N,4,k,5,.03,Oe,s),L.seg==="rf"?Ct(L,N,6,k,5,.025,Oe,s):Ct(L,N,6,k,5,.06,t,s)}const $=(y,L,N,k)=>{const F=[];for(let D=L;D<=8;D++)F.push(B(y,D,1,.004,.006));for(let D=7;D>=L;D--)F.push(B(y,D,-1,.004,.006));for(let D=0;D<F.length-1;D++){const ht=F[D],J=F[D+1];s.quad(ht,J,[J[0],J[1],J[2]+k],[ht[0],ht[1],ht[2]+k],N)}},xt=it.find(y=>y.seg==="ws"),Tt=it.find(y=>y.seg==="rf");xt&&$(xt,4,Oe,.06),Tt&&$(Tt,6,t,-.05);const ft=(y,L)=>{const N=z(y);for(let k=0;k<4;k++){const F=N.pts[k],D=N.pts[k+1];if(L>=F[1]&&L<=D[1])return F[0]+(D[0]-F[0])*(L-F[1])/Math.max(1e-4,D[1]-F[1])}return L<N.pts[0][1]?N.pts[0][0]:N.pts[4][0]},Ft=(y,L)=>{const N=z(y);for(let k=4;k<8;k++){const F=N.pts[k],D=N.pts[k+1];if(L<=F[0]&&L>=D[0])return F[1]+(D[1]-F[1])*(F[0]-L)/Math.max(1e-4,F[0]-D[0])}return N.pts[8][1]};for(const y of S){const L=e?6:14;for(const N of[-1,1])for(let k=0;k<L;k++){const F=k/L*Math.PI,D=(k+1)/L*Math.PI,ht=(V,st)=>y.z+Math.cos(V)*st,J=(V,st)=>y.r+Math.sin(V)*st,lt=ft(ht(F,y.R),J(F,y.R))+.002,Et=ft(ht(D,y.R),J(D,y.R))+.002,St=y.x-y.hw-.06,wt=Math.min(J(F,y.R),Ft(ht(F,y.R),St)-.02),U=Math.min(J(D,y.R),Ft(ht(D,y.R),St)-.02);s.quad([N*lt,J(F,y.R),ht(F,y.R)],[N*Et,J(D,y.R),ht(D,y.R)],[N*St,U,ht(D,y.R)],[N*St,wt,ht(F,y.R)],Kh);const yt=y.R+(e?.03:.045);s.quad([N*(lt+.02),J(F,y.R),ht(F,y.R)],[N*(Et+.02),J(D,y.R),ht(D,y.R)],[N*(Et+.004),J(D,yt),ht(D,yt)],[N*(lt+.004),J(F,yt),ht(F,yt)],w||e?t:E),s.quad([N*(lt+.02),J(F,y.R),ht(F,y.R)],[N*(Et+.02),J(D,y.R),ht(D,y.R)],[N*(Et-.01),J(D,y.R-.01),ht(D,y.R-.01)],[N*(lt-.01),J(F,y.R-.01),ht(F,y.R-.01)],v)}}const Bt=ot.pts,ct=Bt[0][1],Dt=Bt[2][0],mt=u-.006,Zt=i.front??"popup",G=(y,L,N,k,F=0)=>{const D=Math.min(F,(N-L)/2,k/2);s.poly([[y-k+D,L,mt+.002],[y+k-D,L,mt+.002],[y+k,L+D,mt+.002],[y+k,N-D,mt+.002],[y+k-D,N,mt+.002],[y-k+D,N,mt+.002],[y-k,N-D,mt+.002],[y-k,L+D,mt+.002]],Oe);const ht=k-.025-D*.5,J=L+.02+D*.4,lt=N-.02-D*.4;ht>.02&&lt>J&&s.layer(Kt.MESH,()=>s.quad([y-ht,J,mt],[y+ht,J,mt],[y+ht,lt,mt],[y-ht,lt,mt],pa,[0,0,ht*12,(lt-J)*7]))},De=e?"bar":i.nose??"bar",se=(Bt[4][1]+Bt[6][1])/2;if((De==="bar"||De==="grille")&&G(0,ct+.02,ct+.19,Dt*.74),De==="grille"&&G(0,se-.035,se+.035,Dt*.3),De==="slim"&&G(0,ct+.03,ct+.1,Dt*.7,.02),De==="lip"&&G(0,ct+.025,ct+.065,Dt*.6),De==="mouth"){G(0,ct+.03,ct+.2,Dt*.36,.06);for(const y of[-1,1])G(y*Dt*.68,ct+.04,ct+.11,Dt*.14,.02)}if(De==="slots"){G(0,ct+.03,ct+.12,Dt*.3,.02);for(const y of[-1,1])G(y*Dt*.6,ct+.05,ct+.12,Dt*.2,.02)}if(De==="twin"){for(const y of[-1,1])G(y*Dt*.52,ct+.03,ct+.16,Dt*.24,.03);G(0,ct+.04,ct+.09,Dt*.18,.015)}if(e){const y=ct+.24;for(const L of[-1,1])o.layer(Kt.HEADLAMP,()=>o.quad([L*Dt*.82,y-.06,mt-.002],[L*Dt*.5,y-.06,mt-.002],[L*Dt*.5,y+.06,mt-.002],[L*Dt*.82,y+.06,mt-.002],15262924,[0,0,1,1]))}else{s.box(0,ct-.008,u+.1,Dt*1.62,.022,.24,[In,Oe]);const y=(Bt[4][1]+Bt[6][1])/2;for(const L of[-1,1]){const N=L*Dt*.62;if(Zt==="popup"){const k=u+.26,F=u+.62,D=lt=>p(lt)+.012,ht=(lt,Et,St,wt)=>s.quad([lt,D(Et),Et],[St,D(wt),wt],[St,D(wt)+.001,wt+.018],[lt,D(Et)+.001,Et+.018],Oe);ht(N-.2,k,N+.2,k),ht(N-.2,F,N+.2,F);for(const lt of[N-.2,N+.2])s.quad([lt-.008,D(k),k],[lt+.008,D(k),k],[lt+.008,D(F),F],[lt-.008,D(F),F],Oe);const J=ct+.25;s.quad([N-.17,J-.05,mt+.001],[N+.17,J-.05,mt+.001],[N+.17,J+.05,mt+.001],[N-.17,J+.05,mt+.001],In),o.layer(Kt.HEADLAMP,()=>o.quad([N-.15+L*.06,J-.035,mt-.002],[N+.15+L*.06,J-.035,mt-.002],[N+.15+L*.06,J+.035,mt-.002],[N-.15+L*.06,J+.035,mt-.002],16052440,[0,0,1,1])),o.layer(Kt.LENS,()=>o.quad([N-.16,J-.035,mt-.002],[N-.04,J-.035,mt-.002],[N-.04,J+.035,mt-.002],[N-.16,J+.035,mt-.002],16752688,[0,0,1,1]))}else if(Zt==="round")z2(s,N,y,mt+.001,.125,.15,Ms),Wc(o,N,y,mt-.002,.125,.11,16,16052440,Kt.HEADLAMP);else{const k=Zt==="slim"?.06:.12;s.quad([N-.23,y-k/2-.02,mt+.001],[N+.23,y-k/2-.02,mt+.001],[N+.23,y+k/2+.02,mt+.001],[N-.23,y+k/2+.02,mt+.001],In),o.layer(Kt.HEADLAMP,()=>o.quad([N-.2,y-k/2,mt-.002],[N+.12,y-k/2,mt-.002],[N+.12,y+k/2,mt-.002],[N-.2,y+k/2,mt-.002],16052440,[0,0,1,1])),o.layer(Kt.LENS,()=>o.quad([N+.13,y-k/2,mt-.002],[N+.21,y-k/2,mt-.002],[N+.21,y+k/2,mt-.002],[N+.13,y+k/2,mt-.002],16752688,[0,0,1,1]))}}}const Pt=f;for(const y of i.rear??[])for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x]){const N=[L-y.w/2,y.y-y.h/2,Pt+.006],k=[L+y.w/2,y.y-y.h/2,Pt+.006],F=[L+y.w/2,y.y+y.h/2,Pt+.006],D=[L-y.w/2,y.y+y.h/2,Pt+.006];y.c===Oe?s.layer(Kt.MESH,()=>s.quad(N,k,F,D,pa,[0,0,y.w*7,y.h*7])):s.quad(N,k,F,D,y.c)}const qt=(y,L,N,k,F,D=0,ht)=>{const J=L.w+D,lt=L.h+D,Et=ht??(L.round?Kt.LENS_ROUND:L.w>.7?Kt.LENS_BAR:Kt.LENS);L.round?Wc(y,N,L.y,k,J/2,lt/2,16,F,Et):y.layer(Et,()=>y.quad([N-J/2,L.y-lt/2,k],[N+J/2,L.y-lt/2,k],[N+J/2,L.y+lt/2,k],[N-J/2,L.y+lt/2,k],F,[0,0,L.w>.7?J*6:1,1]))};for(const y of i.lights)for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x])qt(o,y,L,Pt+.012,y.c),y.brake&&!e&&qt(l,y,L,Pt+.016,16730678),e||(qt(s,y,L,Pt+.008,1710622,.05,Kt.PLAIN),y.round&&s.with(new kt().makeTranslation(L,y.y,Pt+.01).multiply(new kt().makeScale(1,y.h/y.w,1)),()=>Vi(s,y.w/2,y.w/2+.022,16,Ms)));if(i.slats){const y=i.slats;for(let L=0;L<=y.n;L++){const N=y.y0+(y.y1-y.y0)*L/y.n;s.box(0,N,Pt+.03,y.w*2,.03,.035,[Oe,In])}}const re=Q.pts[0][1],Gt=Q.pts[2][0],I=Math.min(re+.15,i.plateY-.12);if(I-(re-.04)>.06){const y=re-.04,L=I,N=Pt+.075,k=.09,F=Math.max(0,m(Pt-.4)-Gt),D=Math.min(.32,.07+F*2.2),ht=Gt*.98-D,J=N-D,lt=w||e?2763310:E,Et=w||e?3684412:t,St=[[0,N]];for(let wt=0;wt<=5;wt++){const U=wt/5*(Math.PI/2);St.push([ht+D*Math.sin(U),J+D*Math.cos(U)])}for(const wt of[-1,1])for(let U=0;U<St.length-1;U++){const[yt,V]=St[U],[st,vt]=St[U+1],bt=U===0?[yt,V-k]:[yt-Math.sin((U-1)/5*(Math.PI/2))*k,V-Math.cos((U-1)/5*(Math.PI/2))*k],Ut=[st-Math.sin(U/5*(Math.PI/2))*k,vt-Math.cos(U/5*(Math.PI/2))*k];s.quad([wt*yt,y,V],[wt*st,y,vt],[wt*st,L,vt],[wt*yt,L,V],lt),s.quad([wt*yt,L,V],[wt*st,L,vt],[wt*Ut[0],L,Ut[1]],[wt*bt[0],L,bt[1]],Et)}}if(e)s.quad([-.26,i.plateY-.08,Pt+.008],[.26,i.plateY-.08,Pt+.008],[.26,i.plateY+.08,Pt+.008],[-.26,i.plateY+.08,Pt+.008],15263960),s.quad([-.29,i.plateY-.1,Pt+.007],[.29,i.plateY-.1,Pt+.007],[.29,i.plateY+.1,Pt+.007],[-.29,i.plateY+.1,Pt+.007],3158068);else{for(const N of i.exhaust)s.with(new kt().makeTranslation(N.x,N.y,Pt-.1).multiply(new kt().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,N.r,N.r,12,[Ms,11054260],null),s.prism(0,0,.2,.222,N.r*1.04,N.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,N.r*.8,N.r*.8,12,Oe,Oe)});const y=i.plateY,L=Pt+.006;s.quad([-.3,y-.1,Pt+.004],[.3,y-.1,Pt+.004],[.3,y+.1,Pt+.004],[-.3,y+.1,Pt+.004],In),s.quad([-.31,y-.105,L],[.31,y-.105,L],[.31,y-.085,L],[-.31,y-.085,L],Ms),s.quad([-.31,y+.085,L],[.31,y+.085,L],[.31,y+.105,L],[-.31,y+.105,L],Ms);for(const N of[-1,1]){o.layer(Kt.LENS,()=>o.quad([N*.36,y-.04,Pt+.012],[N*.49,y-.04,Pt+.012],[N*.49,y+.04,Pt+.012],[N*.36,y+.04,Pt+.012],15790312,[0,0,1,1]));const k=Math.max(re+.02,(I+re)/2-.025);N<0&&o.layer(Kt.LENS,()=>o.quad([-.62,k,Pt+.08],[-.48,k,Pt+.08],[-.48,k+.05,Pt+.08],[-.62,k+.05,Pt+.08],13639704,[0,0,1,1]))}s.quad([-Gt*.8,re-.05,Pt+.06],[Gt*.8,re-.05,Pt+.06],[Gt*.8,re+.03,Pt-.5],[-Gt*.8,re+.03,Pt-.5],1842208);for(let N=-3;N<=3;N++)s.box(N*Gt*.24,re+0,Pt-.15,.025,.06,.4,In)}const A=(y,L,N,k,F,D,ht,J,lt,Et,St)=>{const wt=[L*(ft(N,F)+Et),F,N],U=[L*(ft(k,ht)+Et),ht,k],yt=[L*(ft(k,J)+Et),J,k],V=[L*(ft(N,D)+Et),D,N];y.quad(wt,U,yt,V,lt,St)};for(const y of i.side??[])for(const L of[-1,1])if(y.kind==="intake"){const k=D=>Math.max(y.y0+(y.y1-y.y0)*.5*(1-(D-y.z0)/(y.z1-y.z0)),P(D)+.1),F=(D,ht)=>Math.max(k(Math.min(y.z1,Math.max(y.z0,D)))+.04,Math.min(y.y1+ht,g(D)-.03));for(let D=0;D<10;D++){const ht=y.z0+(y.z1-y.z0)*D/10,J=y.z0+(y.z1-y.z0)*(D+1)/10,lt=D===0?ht-.03:ht,Et=D===9?J+.03:J,St=.006+Math.min(.02,(b(ht)+b(J))*.25);A(s,L,lt,Et,k(ht)-.03,F(lt,.03),k(J)-.03,F(Et,.03),Oe,St);const wt=(ht-y.z0)*7,U=(J-y.z0)*7;s.layer(Kt.MESH,()=>A(s,L,ht,J,k(ht),F(ht,0),k(J),F(J,0),pa,St+.003,[wt,0,U-wt,(y.y1-y.y0)*7]))}}else if(y.kind==="naca")A(s,L,y.z0,y.z1,y.y1-.02,y.y1,y.y0,y.y1,Oe,.007),A(s,L,y.z0+(y.z1-y.z0)*.6,y.z1,y.y1-(y.y1-y.y0)*.6,y.y1,y.y0+.02,y.y1-.02,2236966,.009);else if(y.kind==="stripe")A(s,L,y.z0,y.z1,y.y0,y.y1,y.y0,y.y1,y.c??16777215,.008);else if(y.kind==="strakes")for(let k=0;k<6;k++){const F=y.z0+(y.z1-y.z0)*k/6,D=y.z0+(y.z1-y.z0)*(k+1)/6;A(s,L,F,D,y.y0,y.y1,y.y0,y.y1,Oe,.006);const ht=y.n??5;for(let J=0;J<ht;J++){const lt=y.y0+(y.y1-y.y0)*(J+.6)/(ht+.2);for(const[Et,St,wt,U]of[[lt,lt+.035,.035,.035],[lt,lt,.006,.035],[lt+.035,lt+.035,.006,.035]]){const yt=[L*(ft(F,Et)+wt),Et,F],V=[L*(ft(D,Et)+wt),Et,D],st=[L*(ft(D,St)+U),St,D],vt=[L*(ft(F,St)+U),St,F];s.quad(yt,V,st,vt,Et===St?Et===lt?v:E:t)}}}const Z=c.find(y=>y.seg==="ws"),_t=c.find(y=>y.seg==="rw")??c.find(y=>y.seg==="lv"),Mt=c.findIndex(y=>y.seg==="rf");for(const y of[-1,1]){const L=S[0].z+S[0].R+.04,N=S[1].z-S[1].R-.04;if(N>L){const V=e?1:4;for(let st=0;st<V;st++){const vt=L+(N-L)*st/V,bt=L+(N-L)*(st+1)/V,Ut=_(vt),$t=_(bt);s.quad([y*(ft(vt,Ut+.02)+.02),Ut-.02,vt],[y*(ft(bt,$t+.02)+.02),$t-.02,bt],[y*(ft(bt,$t+.1)+.006),$t+.1,bt],[y*(ft(vt,Ut+.1)+.006),Ut+.1,vt],e?2763310:w?v:E)}}const k=u+.3,F=_(k)+(g(k)-_(k))*.55;if(o.layer(Kt.LENS,()=>{o.quad([y*(ft(k,F)+.01),F-.025,k],[y*(ft(k+.14,F)+.01),F-.025,k+.14],[y*(ft(k+.14,F)+.01),F+.025,k+.14],[y*(ft(k,F)+.01),F+.025,k],16751136,[0,0,1,1]);const V=f-.4,st=_(V)+(g(V)-_(V))*.6;o.quad([y*(ft(V,st)+.01),st-.025,V],[y*(ft(V+.14,st)+.01),st-.025,V+.14],[y*(ft(V+.14,st)+.01),st+.025,V+.14],[y*(ft(V,st)+.01),st+.025,V],13113360,[0,0,1,1])}),!Z)continue;const D=Z.z+.22,ht=g(D)+.07,J=ft(D,g(D)-.01);e?s.box(y*(J+.08),ht,D,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(y*(J+.035),ht-.04,D,.08,.03,.04,Oe),s.box(y*(J+.11),ht,D,.14,.08,.075,[t,t,E,Oe]),s.quad([y*(J+.05),ht-.032,D+.039],[y*(J+.17),ht-.032,D+.039],[y*(J+.17),ht+.032,D+.039],[y*(J+.05),ht+.032,D+.039],10135736));const lt=(i.side??[]).find(V=>V.kind==="intake"),Et=Z.z+.06;let St=_t?_t.z+.05:Z.z+1.15;lt&&(St=Math.min(St,lt.z0-.06));for(const V of[Et,St]){const st=z(V);for(let vt=0;vt<4;vt++){const bt=st.pts[vt],Ut=st.pts[vt+1];Ut[1]<_(V)+.08||s.quad([y*(bt[0]+.006),bt[1],V],[y*(bt[0]+.006),bt[1],V+.016],[y*(Ut[0]+.006),Ut[1],V+.016],[y*(Ut[0]+.006),Ut[1],V],In)}}if(e)continue;const wt=St-.22,U=g(wt)-.1;if((i.side??[]).some(V=>(V.kind==="naca"||V.kind==="intake")&&wt+.14>V.z0&&wt-.14<V.z1&&U+.05>V.y0&&U-.05<V.y1)||s.quad([y*(ft(wt-.1,U)+.009),U-.018,wt-.1],[y*(ft(wt+.1,U)+.009),U-.018,wt+.1],[y*(ft(wt+.1,U)+.009),U+.018,wt+.1],[y*(ft(wt-.1,U)+.009),U+.018,wt-.1],Ms),y>0&&Mt>=0){const V=Math.max(St,lt?lt.z1:St)+.04,st=S[1].z-S[1].R-.04;let vt=0,bt=0,Ut=!1;if(st-V>=.2)vt=(V+st)/2,bt=_(vt)+(g(vt)-_(vt))*.62,Ut=!0;else{const $t=S[1],le=$t.r+$t.R+.06;vt=$t.z,bt=(le+g(vt)-.05)/2,Ut=g(vt)-.05-le>=.14}if(Ut){const $t=ft(vt,bt)+.008;s.with(new kt().makeTranslation($t,bt,vt).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Vi(s,0,.058,12,E),Vi(s,.058,.07,12,In)})}}}if(Z&&xt){const y=xt.z+.07,L=p(y)+.035;for(const N of[-.62,0]){const k=x(y)*.62;s.quad([N*x(y),L,y],[N*x(y)+k,L+.004,y+.035],[N*x(y)+k,L+.016,y+.035],[N*x(y),L+.012,y],Oe)}}if(i.louvres){const y=i.louvres,L=N=>p(N)+.024;s.layer(Kt.LOUVRE,()=>{for(let k=0;k<4;k++){const F=y.z0+(y.z1-y.z0)*k/4,D=y.z0+(y.z1-y.z0)*(k+1)/4,ht=y.n*k/4,J=y.n*(k+1)/4;Xa(s,[-y.w,L(F),F],[y.w,L(F),F],[y.w,L(D),D],[-y.w,L(D),D],en(t,.9),[0,ht],[4,ht],[4,J],[0,J])}})}if(i.scoop&&Mt>=0){const y=c[Mt],L=y.z+.12,N=y.z+.75,k=y.top+.02,F=.085,D=.14;s.poly([[-D,k,L],[-D,k+F,L+.06],[-D,k+F*.6,N],[-D,k,N]],E),s.poly([[D,k,N],[D,k+F*.6,N],[D,k+F,L+.06],[D,k,L]],E),s.quad([-D,k+F,L+.06],[D,k+F,L+.06],[D,k+F*.6,N],[-D,k+F*.6,N],t),s.layer(Kt.MESH,()=>s.quad([D-.02,k+.01,L],[-D+.02,k+.01,L],[-D+.02,k+F-.01,L+.05],[D-.02,k+F-.01,L+.05],pa,[0,0,2,1]))}if(i.wing){const y=i.wing,L=p(y.z)+.02,N=k=>{const F=k;s.quad([-F,y.y+.03,y.z-y.d/2],[F,y.y+.03,y.z-y.d/2],[F,y.y+.02,y.z+y.d/2],[-F,y.y+.02,y.z+y.d/2],t),s.quad([-F,y.y-.03,y.z-y.d/2],[F,y.y-.03,y.z-y.d/2],[F,y.y-.005,y.z+y.d/2],[-F,y.y-.005,y.z+y.d/2],v),s.quad([-F,y.y-.03,y.z-y.d/2],[F,y.y-.03,y.z-y.d/2],[F,y.y+.03,y.z-y.d/2],[-F,y.y+.03,y.z-y.d/2],E),s.quad([-F,y.y-.005,y.z+y.d/2],[F,y.y-.005,y.z+y.d/2],[F,y.y+.045,y.z+y.d/2+.01],[-F,y.y+.045,y.z+y.d/2+.01],Oe)};if(y.kind==="duck")s.box(0,y.y,y.z,y.w*2,.06,y.d,[t,t,E,E]),s.quad([-y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.05,y.z+y.d/2+.02],[-y.w,y.y+.05,y.z+y.d/2+.02],Oe);else if(N(y.w),y.kind==="big")for(const k of[-1,1])s.box(k*.32,(L+y.y)/2,y.z,.06,y.y-L,.2,[In,In,2500136]),s.box(k*y.w,y.y+.02,y.z,.02,.2,y.d+.1,[t,t,E,E]);else if(y.kind==="hoop"){for(const k of[-1,1])s.box(k*(y.w-.08),(L+y.y)/2,y.z,.1,y.y-L,y.d*.7,[t,t,E,E]);l.layer(Kt.LENS_BAR,()=>l.quad([-.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.04,y.z+y.d/2+.016],[-.2,y.y+.04,y.z+y.d/2+.016],16728112,[0,0,3,1])),o.layer(Kt.LENS_BAR,()=>o.quad([-.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.04,y.z+y.d/2+.012],[-.2,y.y+.04,y.z+y.d/2+.012],7344144,[0,0,3,1]))}else for(const k of[-1,1])s.poly([[k*y.w,L,y.z-y.d/2-.2],[k*y.w,L,y.z+y.d/2],[k*y.w,y.y+.07,y.z+y.d/2],[k*y.w,y.y+.07,y.z-y.d/2]],t)}if(!e&&Mt>=0){c[Mt];const y=c[Mt+1];i.group==="90s JAPAN"&&jh(s,[.35,p(y.z)-.02,y.z+.05],[.38,p(y.z)+.26,y.z+.22],.008,Oe)}if(Mt>=0&&Z){const y=c[Mt],L=c[Mt+1],N=i.trim??2894898,k=y.z+Math.min(.45,(L.z-y.z)*.55),F=p(k),D=g(k),ht=F-(e?.24:.22),J=m(k)-.09,lt=D-.26,Et=Z.z+.25,St=L.z+.15;r.quad([-J,lt,Et],[J,lt,Et],[J,lt,St],[-J,lt,St],Kh);for(const $t of[-1,1])r.quad([$t*J,lt,Et],[$t*J,lt,St],[$t*J,D-.02,St],[$t*J,D-.02,Et],en(N,.7));r.quad([-J,lt,St],[J,lt,St],[J,D+.02,St],[-J,D+.02,St],1315864);const wt=c[Mt+2]??L;r.quad([-J,D+.02,St],[J,D+.02,St],[J,Math.min(g(wt.z),p(wt.z))-.02,wt.z],[-J,Math.min(g(wt.z),p(wt.z))-.02,wt.z],1842208);const U=i.drive??(i.group==="90s JAPAN"?"R":"L"),yt=U==="C"?0:(U==="R"?1:-1)*Math.min(.38,J*.48),V=U==="C"?[{x:0,z:k-.12,driver:!0},{x:-.44,z:k+.12,driver:!1},{x:.44,z:k+.12,driver:!1}]:[{x:yt,z:k,driver:!0},{x:-yt,z:k,driver:!1}],st=e?4868690:k2(t,2105392,.55),vt=k-(e?.5:.48),bt=ht-.24,Ut=Math.max(Z.z+.3,vt-.22);r.box(0,D-.03,Ut,J*2,.12,.32,[1710622,2236968]);for(const $t of V){const le=$t.x,ie=$t.z;if(e){r.box(le,D-.02,ie+.2,.42,.5,.1,en(N,.9)),$t.driver&&(Zh(r,[le,ht,ie],.11,2760728,6,4,2760728),r.box(le,ht-.25,ie+.03,.36,.26,.2,st));continue}const ln=Math.min(D-.04,F-.52);if(r.with(new kt().makeTranslation(le,ln,ie+.22).multiply(new kt().makeRotationX(.22)),()=>{$h(r,0,0,0,.44,.56,.1,N,Kt.SEAT,en(N,.75)),$h(r,0,.36,.02,.26,.17,.09,N,Kt.SEAT,en(N,.75));for(const Je of[-1,1])r.box(Je*.2,.02,-.06,.06,.48,.1,en(N,.85))}),$t.driver){au(r,[le,ht,ie],.125,t),si(r,[le,ht-.16,ie+.02],[.05,.06,.05],1710620,6,4),ou(r,[le,ht-.33,ie+.04],[.21,.17,.12],st,t);for(const Je of[-1,1])jh(r,[le+Je*.18,ht-.26,ie+.02],[le+Je*.16,bt-.02,vt+.05],.075,st),Zh(r,[le+Je*.16,bt-.02,vt+.04],.04,1710618,5,3);r.with(new kt().makeTranslation(le,bt,vt).multiply(new kt().makeRotationX(-.45)),()=>{Vi(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(le,D+.05,Ut+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(y.z+.05)-.07,y.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:l,plate:{y:i.plateY,z:Pt+.012},tailZ:Pt,wheels:[{x:S[0].x,z:S[0].z,r:S[0].r,hw:S[0].hw},{x:S[1].x,z:S[1].z,r:S[1].r,hw:S[1].hw}]}}function z2(i,t,e,n,s,r,a){i.with(new kt().makeTranslation(t,e,n),()=>Vi(i,s,r,16,a))}function lu(i,t,e,n,s,r,a=16,o=!0){const l=(m,_,g)=>[_,Math.cos(m)*g,Math.sin(m)*g],c=t*.66,h=t*.93,d=e*.8,u=n*e,f=n*(e-.035);for(let m=0;m<a;m++){const _=m/a*Math.PI*2,g=(m+1)/a*Math.PI*2,p=m/a*8,x=(m+1)/a*8;i.layer(Kt.TREAD,()=>Xa(i,l(_,-d,t),l(_,d,t),l(g,d,t),l(g,-d,t),3815996,[0,p],[1,p],[1,x],[0,x]));for(const E of[-1,1])i.quad(l(_,E*d,t),l(g,E*d,t),l(g,E*e,h),l(_,E*e,h),2500138);const M=m/a*2,v=(m+1)/a*2;i.layer(Kt.SIDEWALL,()=>Xa(i,l(_,u,c),l(g,u,c),l(g,u,h),l(_,u,h),16777215,[M,0],[v,0],[v,1],[M,1])),i.quad(l(_,-u,c),l(g,-u,c),l(g,-u,h),l(_,-u,h),1447448),i.tri([-u,0,0],l(_,-u,c),l(g,-u,c),1052690),i.quad(l(_,u,c),l(g,u,c),l(g,f,c),l(_,f,c),en(r,.85)),o&&i.quad(l(_,f,c*.98),l(g,f,c*.98),l(g,-f*.6,c*.98),l(_,-f*.6,c*.98),en(r,.4))}i.with(new kt().makeTranslation(f,0,0).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Wc(i,0,0,0,c,c,a,r,L2[s])})}function B2(i,t,e,n,s){const r=new dt(!0);return lu(r,i,t,e,n,s),r.build()}function G2(i,t,e,n=13113360){const s=new dt(!0),r=i*.66,a=e*(t-.09);s.with(new kt().makeTranslation(a,0,0).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Vi(s,r*.42,r*.86,14,10132128),Vi(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new kt().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new kt().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,en(n,1.15)])}),s.build()}let ga=null;function hu(){if(ga)return ga;const i=N2(),t=new Bc({vertexColors:!0,side:_e,shininess:60,specular:11053224}),e=new ii({vertexColors:!0,side:_e,alphaTest:.5}),n=new Ve({vertexColors:!0,side:_e});for(const r of[t,e,n])Wa(r,i);const s=new Bc({vertexColors:!0,side:_e,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return ga={paint:t,lit:e,glow:n,glass:s},ga}let lr=null;function H2(){if(lr)return lr;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(c,h,d)=>{const u=Math.max(0,Math.min(1,(d-c)/(h-c)));return u*u*(3-2*u)},a=.36,o=.4,l=.12;for(let c=0;c<t;c++)for(let h=0;h<i;h++){const d=(h+.5)/i-.5,u=(c+.5)/t-.5,f=Math.abs(d)-(a-l),m=Math.abs(u)-(o-l),_=Math.hypot(Math.max(f,0),Math.max(m,0))+Math.min(Math.max(f,m),0)-l;let g=.55*(1-r(-.08,.13,_));for(const x of[-.28,.28])for(const M of[-.3,.3]){const v=Math.hypot((d-M)/.09,(u-x)/.12);g=Math.max(g,.9*(1-r(.4,1.2,v)))}const p=(c*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,g))}return n.putImageData(s,0,0),lr=new Cr(e),lr.colorSpace=Qn,lr}const Jh=new Map;function uu(i){const t=Jh.get(i);if(t)return t;const e=new Ve({color:0,map:H2(),transparent:!0,side:_e,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return Jh.set(i,e),e}function du(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,l=(e+n)/2,c=new dt;return c.quad([-a,.025,l-o],[a,.025,l-o],[a,.025,l+o],[-a,.025,l+o],16777215,[0,0,1,1]),c.build()}const V2=1583164,W2=2242124,vs=1315862,Qe=657932,xa=13159636,Xc=(i,t)=>new Ot(i).multiplyScalar(t).getHex();function fn(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function fu(i,t,e=!1){const n=new dt,s=new dt,r=new dt,a=i.stations,o=Xc(t,.72),l=Xc(t,.5),c=a[a.length-1],h=c.z;for(let x=0;x<a.length-1;x++){const M=a[x],v=a[x+1],E=M.seg==="ws"||M.seg==="rf"||M.seg==="rw"||M.seg==="lv";for(const T of[-1,1])n.quad([T*M.w,M.yb,M.z],[T*v.w,v.yb,v.z],[T*v.w,v.belt,v.z],[T*M.w,M.belt,M.z],t),n.quad([T*M.w,M.belt,M.z],[T*v.w,v.belt,v.z],[T*v.wt,v.top,v.z],[T*M.wt,M.top,M.z],E&&M.seg!=="lv"?W2:t),n.quad([T*(M.w+.004),M.yb,M.z],[T*(v.w+.004),v.yb,v.z],[T*(v.w+.004),v.yb+.09,v.z],[T*(M.w+.004),M.yb+.09,M.z],l);const w=M.seg==="ws"||M.seg==="rw"?V2:M.seg==="lv"||M.seg==="bed"?vs:M.seg==="rf"?o:t;if(n.quad([-M.wt,M.top,M.z],[M.wt,M.top,M.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],w),M.seg==="lv")for(let T=1;T<6;T++){const R=T/6,S=M.z+(v.z-M.z)*R,b=M.top+(v.top-M.top)*R+.01,P=M.wt+(v.wt-M.wt)*R;n.quad([-P,b,S-.03],[P,b,S-.03],[P,b+.01,S+.03],[-P,b+.01,S+.03],t)}}const d=(x,M,v)=>n.poly([[-x.w,x.yb,x.z+v],[-x.w,x.belt,x.z+v],[-x.wt,x.top,x.z+v],[x.wt,x.top,x.z+v],[x.w,x.belt,x.z+v],[x.w,x.yb,x.z+v]],M);d(a[0],o,0),d(c,o,0);const u=a[0],f=u.z-.006;if(n.quad([-u.w*.7,u.yb+.04,f],[u.w*.7,u.yb+.04,f],[u.w*.7,u.yb+.14,f],[-u.w*.7,u.yb+.14,f],Qe),!e){const x=i.front??"popup",M=(u.belt+u.top)/2;for(const v of[-1,1]){const E=v*u.w*.62;if(x==="popup"){const w=fn(a,u.z+.45,"top");n.quad([E-.2,w+.004,u.z+.3],[E+.2,w+.004,u.z+.3],[E+.2,w+.004,u.z+.33],[E-.2,w+.004,u.z+.33],Qe),s.quad([E-.14,u.yb+.17,f],[E+.14,u.yb+.17,f],[E+.14,u.yb+.24,f],[E-.14,u.yb+.24,f],16756800)}else if(x==="round"){const w=[];for(let T=0;T<8;T++){const R=T/8*Math.PI*2;w.push([E+Math.cos(R)*.11,M+Math.sin(R)*.09,f-.002])}s.poly(w,16052440)}else{const w=x==="slim"?.05:.1;s.quad([E-.2,M-w/2,f],[E+.2,M-w/2,f],[E+.2,M+w/2,f],[E-.2,M+w/2,f],16052440)}}}n.quad([-c.w,c.yb-.06,h+.02],[c.w,c.yb-.06,h+.02],[c.w,c.yb+.08,h+.02],[-c.w,c.yb+.08,h+.02],e?3815994:Qe);for(const x of i.rear??[])for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])n.quad([M-x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y+x.h/2,h+.006],[M-x.w/2,x.y+x.h/2,h+.006],x.c);const m=(x,M,v,E,w)=>{if(M.round){const T=[];for(let R=0;R<8;R++){const S=R/8*Math.PI*2+Math.PI/8;T.push([v+Math.cos(S)*M.w/2,M.y+Math.sin(S)*M.h/2,E])}x.poly(T,w)}else x.quad([v-M.w/2,M.y-M.h/2,E],[v+M.w/2,M.y-M.h/2,E],[v+M.w/2,M.y+M.h/2,E],[v-M.w/2,M.y+M.h/2,E],w)},_=ue.modern&&!e;for(const x of i.lights)for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])m(s,x,M,h+.012,x.c),x.brake&&!e&&m(r,x,M,h+.016,16726570),_&&(m(n,{...x,w:x.w+.05,h:x.h+.05},M,h+.008,1710622),m(s,{...x,w:x.w*.5,h:x.h*.45},M,h+.014,new Ot(x.c).lerp(new Ot(16777215),.45).getHex()));if(i.slats){const x=i.slats;for(let M=0;M<=x.n;M++){const v=x.y0+(x.y1-x.y0)*M/x.n;n.box(0,v,h+.03,x.w*2,.035,.03,Qe)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const x of i.exhaust)n.with(new kt().makeTranslation(x.x,x.y,h-.1).multiply(new kt().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,x.r,x.r,8,xa,null),n.prism(0,0,.169,.17,x.r*.78,x.r*.78,8,Qe,Qe)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],vs),_){const x=i.plateY,M=h+.006;n.quad([-.31,x-.105,M],[.31,x-.105,M],[.31,x-.085,M],[-.31,x-.085,M],xa),n.quad([-.31,x+.085,M],[.31,x+.085,M],[.31,x+.105,M],[-.31,x+.105,M],xa);for(const v of[-1,1])s.quad([v*.36,x-.04,h+.012],[v*.48,x-.04,h+.012],[v*.48,x+.04,h+.012],[v*.36,x+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,c.yb-.03,h-.12,.03,.1,.26,vs)}}const g=(x,M,v,E,w,T,R,S,b)=>{const P=fn(a,M,"w")+b,z=fn(a,v,"w")+b;n.quad([x*P,E,M],[x*z,T,v],[x*z,R,v],[x*P,w,M],S)};for(const x of i.side??[])for(const M of[-1,1])if(x.kind==="intake")g(M,x.z0,x.z1,x.y0+(x.y1-x.y0)*.5,x.y1,x.y0,x.y1,Qe,.006);else if(x.kind==="naca")g(M,x.z0,x.z1,x.y1-.02,x.y1,x.y0,x.y1,Qe,.006);else if(x.kind==="stripe")g(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,x.c??16777215,.008);else if(x.kind==="strakes"){g(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,Qe,.006);const v=x.n??5;for(let E=0;E<v;E++){const w=x.y0+(x.y1-x.y0)*(E+.6)/(v+.2);g(M,x.z0,x.z1,w,w+.035,w,w+.035,t,.03)}}if(!e){const x=a.find(M=>M.seg==="ws");if(x)for(const M of[-1,1])n.box(M*(x.w+.06),x.belt+.12,x.z+.25,.18,.12,.12,[t,t,o,Qe]);if(_&&x){const M=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(x.w+.02),x.belt+.08,x.z+.25,.08,.04,.05,Qe);const E=x.z+.05,w=M?M.z+.05:x.z+1.1;for(const S of[E,w]){const b=fn(a,S,"w")+.007,P=fn(a,S,"yb")+.1,z=fn(a,S,"belt")-.02;n.quad([v*b,P,S],[v*b,P,S+.02],[v*b,z,S+.02],[v*b,z,S],vs)}const T=fn(a,w-.25,"w")+.012,R=fn(a,w-.25,"belt")-.1;n.quad([v*T,R,w-.38],[v*T,R,w-.18],[v*T,R+.04,w-.18],[v*T,R+.04,w-.38],xa)}for(const v of["ws","rw"]){const E=a.findIndex(R=>R.seg===v);if(E<0||E+1>=a.length)continue;const w=a[E],T=a[E+1];for(const R of[-1,1])n.quad([R*w.wt,w.top+.004,w.z],[R*T.wt,T.top+.004,T.z],[R*(T.wt-.04),T.top+.006,T.z],[R*(w.wt-.04),w.top+.006,w.z],Qe)}}}if(e&&ue.modern){const x=a[0],M=a.find(E=>E.seg==="ws"),v=a.find(E=>E.seg==="rw");if(n.box(0,c.yb+.05,h+.08,c.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,x.yb+.05,x.z-.08,x.w*2+.06,.16,.16,[3815998,4868686]),M)for(const E of[-1,1])n.box(E*(M.w+.08),M.belt+.1,M.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const E=a.find(T=>T.seg==="rf"),w=a[a.indexOf(E)+1];for(const T of[-1,1])n.box(T*(E.wt-.08),E.top+.06,(E.z+w.z)/2,.06,.08,w.z-E.z,2763306)}}if(i.louvres){const x=i.louvres;for(let M=0;M<x.n;M++){const v=x.z0+(x.z1-x.z0)*M/x.n,E=fn(a,v,"top")+.006;n.quad([-x.w,E,v],[x.w,E,v],[x.w,E+.004,v+.06],[-x.w,E+.004,v+.06],Qe)}}if(i.scoop){const x=a.find(M=>M.seg==="rf");n.box(0,x.top+.07,x.z+.25,.32,.14,.5,[t,t,Qe,o])}if(i.wing){const x=i.wing,M=fn(a,x.z,"top");if(x.kind==="duck")n.box(0,x.y,x.z,x.w*2,.06,x.d,[t,t,o,o]);else if(n.box(0,x.y,x.z,x.w*2,.055,x.d,[t,t,o,o]),n.box(0,x.y-.03,x.z+x.d/2,x.w*2,.04,.03,l),x.kind==="big")for(const v of[-1,1])n.box(v*.32,(M+x.y)/2,x.z,.07,x.y-M,.16,vs);else if(x.kind==="hoop")for(const v of[-1,1])n.box(v*(x.w-.08),(M+x.y)/2,x.z,.12,x.y-M,x.d*.7,t);else for(const v of[-1,1])n.poly([[v*x.w,M,x.z-x.d/2-.15],[v*x.w,M,x.z+x.d/2],[v*x.w,x.y+.06,x.z+x.d/2],[v*x.w,x.y+.06,x.z-x.d/2]],t)}const p=i.wheels;for(const[x,M]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const E=[];for(let w=0;w<=6;w++){const T=w/6*Math.PI;E.push([v*(fn(a,x,"w")+.003),p.r+Math.sin(T)*(p.r+.07),x+Math.cos(T)*(p.r+.07)])}n.poly(E,Qe)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function X2(i,t,e,n,s){const r=new dt,a=Math.max(10,s*2),o=(c,h,d=i)=>[h,Math.cos(c)*d,Math.sin(c)*d],l=Xc(n,.3);for(let c=0;c<a;c++){const h=c/a*Math.PI*2,d=(c+1)/a*Math.PI*2;r.quad(o(h,-t),o(d,-t),o(d,t),o(h,t),c%2?1710618:2368548),r.quad(o(h,e*t),o(d,e*t),o(d,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(d,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(d,e*(t+.005),i*.7),c%2===0?n:l)}return r.with(new kt().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function pl(i,t=1,e=.8){const n=new dt,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Ot(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function q2(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new kt().makeTranslation(n,e.r,s).multiply(new kt().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class zo{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new nn,this.body=new nn,this.wheels=[],this.geos=[],this.hubs=[],this.gunners=[],this.gunSide=1,this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,E,w)=>{this.geos.push(v);const T=new Jt(v,E);return w.add(T),T},l=ue.modern,c=l?hu():null;let h,d,u;if(c){const v=cu(t,e);this.paintwork.push(o(v.skin.build(!0),c.paint,this.body),o(v.body.build(),c.paint,this.body)),this.detail.push(o(v.cabin.build(),c.lit,this.body));const E=o(v.glass.build(),c.glass,this.body);E.renderOrder=1,this.glowMesh=o(v.glow.build(),c.glow,this.body),this.dentable.push(E,this.glowMesh),this.brake=o(v.brake.empty?new dt().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),c.glow,this.body),h=v.plate,d=v.tailZ,u=v.wheels}else{const v=fu(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new dt().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,d=v.tailZ;const E=t.wheels,w=E.hw??.18;u=[{x:E.fx,z:E.fz,r:E.r,hw:w},{x:E.rx,z:E.rz,r:E.r*1.03,hw:w*1.15}]}const f=new dt,{y:m,z:_}=h;f.quad([-.27,m-.08,_],[.27,m-.08,_],[.27,m+.08,_],[-.27,m+.08,_],16777215,s),this.dentable.push(o(f.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(pl(t,.45,.45).build(),n.halo,this.body);const g=new dt;for(const v of t.exhaust)g.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),g.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=g.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,d+(l?.12:.05)),this.tailZ=d,this.flames.visible=!1,l){const v=o(du(t),uu(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,E=v[v.length-1].z-v[0].z,w=Math.max(...v.map(S=>S.w)),T=new dt,R=[];for(let S=0;S<8;S++){const b=S/8*Math.PI*2+Math.PI/8;R.push([Math.cos(b)*w*.92,.02,v[0].z+E/2+Math.sin(b)*(E/2-.05)])}T.poly(R,16777215),o(T.build(),new Ve({color:r,side:_e}),this.root)}const x=t.wheels,M=t.rimStyle??"star";for(const[v,E]of[[0,-1],[0,1],[1,-1],[1,1]]){const w=u[v],T=c?B2(w.r,w.hw,E,M,x.rim):X2(w.r,w.hw,E,x.rim,x.spokes),R=o(T,c?c.lit:n.lit,this.root);if(R.position.set(E*w.x,w.r,w.z),this.wheels.push(R),c){const S=o(G2(w.r,w.hw,E,t.id==="959"||t.id==="nsx"?2763310:13113360),c.lit,this.root);S.position.copy(R.position),this.hubs.push(S),this.detail.push(S)}}this.buildGunners(e,c?c.lit:n.lit,c?c.glow:n.glow,!!c),this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,l=new K,c=new K;if(e==="front"||e==="rear"){const p=e==="front";l.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),c.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;l.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),c.set(-p,-.1,(o()-.5)*.3)}c.normalize();const h=.55+t*.5,d=.04+t*.16,u=new Ot(6974064),f=new Ot(1841688),m=new Ot,_=(p,x,M)=>Math.sin(p*41.3+x*17.1)*Math.cos(M*29.7+p*7.3),g=(p,x)=>{const M=p.geometry,v=M.getAttribute("position"),E=x?M.getAttribute("color"):void 0;let w=!1;for(let T=0;T<v.count;T++){const R=v.getX(T),S=v.getY(T),b=v.getZ(T),P=Math.hypot(R-l.x,(S-l.y)*1.3,b-l.z);if(P>=h)continue;const z=(1-P/h)**2,H=d*z*(.8+.4*_(R,S,b));if(v.setXYZ(T,R+c.x*H,S+c.y*H,b+c.z*H),w=!0,E){m.setRGB(E.getX(T),E.getY(T),E.getZ(T));const W=Math.min(1,z*(.4+t));m.lerp(_(b,R,S)>.2?u:f,W*.75),E.setXYZ(T,m.r,m.g,m.b)}}w&&(v.needsUpdate=!0,E&&(E.needsUpdate=!0),M.computeVertexNormals())};for(const p of this.paintwork)g(p,!0);for(const p of this.dentable)g(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(u=>u.seg==="rw");if(e<0&&(e=t.findIndex(u=>u.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(u,f)=>{const m=n.wt+(s.wt-n.wt)*f;return[u*m*.95,n.top+(s.top-n.top)*f+.03*(1-u*u)+.025,n.z+(s.z-n.z)*f]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,l=.25+Math.random()*.5,c=7+Math.floor(Math.random()*4),h=[];for(let u=0;u<c;u++){const f=u/c*Math.PI*2+Math.random()*.5,m=.35+Math.random()*.45;let _=o,g=l;for(let p=1;p<=4;p++){const x=m*p/4,M=Math.max(-1,Math.min(1,o+Math.cos(f)*x+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,l+Math.sin(f)*x*.8+(Math.random()-.5)*.06));a.push(...r(_,g),...r(M,v)),p===1&&h.push([M,v]),_=M,g=v}}for(let u=0;u<h.length;u++)a.push(...r(...h[u]),...r(...h[(u+1)%h.length]));const d=new We;d.setAttribute("position",new we(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=d):(this.cracks=new Q0(d,new cl({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}buildGunners(t,e,n,s){const r=this.spec.stations,a=r.findIndex(f=>f.seg==="rf"),o=r.find(f=>f.seg==="ws")??r[1],c=(a>=0?r[a]:o).z+.15,h=fn(r,c,"belt"),d=fn(r,c,"w"),u=new Ot(t).lerp(new Ot(2105392),.55).getHex();for(const f of[-1,1]){const m=new dt(s),_=new dt(s),g=new dt(s);ou(m,[f*.1,.16,.02],[.2,.2,.14],u,t),si(m,[f*.16,.36,0],[.05,.06,.05],1710620,6,4),au(m,[f*.2,.5,-.01],.135,t),si(m,[f*.02,.12,-.2],[.05,.05,.13],u,8,5),si(m,[f*0,.08,-.33],[.045,.045,.045],1315862,6,4);const p=U2(_,u,t);for(let z=0;z<4;z++){const H=z/4*Math.PI,W=Math.cos(H)*.12,tt=Math.sin(H)*.12;g.quad([-W,-tt,0],[W,tt,0],[W*.3,tt*.3,-.36],[-W*.3,-tt*.3,-.36],z%2?16760896:16771216)}g.quad([-.08,-.08,.001],[.08,-.08,.001],[.08,.08,.001],[-.08,.08,.001],16776160);const x=new nn,M=new nn;M.rotation.z=-f*.32,x.add(M);const v=(z,H,W)=>{const tt=z.build();this.geos.push(tt);const O=new Jt(tt,H);return W.add(O),O};v(m,e,M);const E=new nn;E.position.set(f*.26,.28,0),v(_,e,E);const w=v(g,n,E);w.position.set(...p),w.visible=!1,M.add(E);const T=new nn,R=new ii({color:4872746}),S=new ii({color:1973792});T.add(new Jt(new yi(.075,.075,1.15,10).rotateX(Math.PI/2),R)),T.add(new Jt(new yi(.095,.095,.08,10).rotateX(Math.PI/2).translate(0,0,-.58),S)),T.add(new Jt(new yi(.1,.085,.12,10).rotateX(Math.PI/2).translate(0,0,.6),S)),T.add(new Jt(new Yi(.04,.16,.06).translate(0,-.12,-.12),S)),T.add(new Jt(new Yi(.03,.08,.08).translate(0,.1,-.2),S)),T.add(new Jt(new Os(.05,6,4).translate(0,-.2,-.12),S)),T.add(new Jt(new Os(.05,6,4).translate(0,-.09,-.36),S));const b=new Ve({color:16756800,transparent:!0,opacity:.9,blending:Wi,depthWrite:!1}),P=new nn;P.add(new Jt(new Us(.2,.9,8).rotateX(Math.PI/2).translate(0,0,1.1),b)),P.add(new Jt(new Us(.14,.5,8).rotateX(-Math.PI/2).translate(0,0,-.85),b)),T.add(P),T.position.set(f*.3,.46,.05),T.visible=!1,M.add(T),x.position.set(f*(d-.14),h-.06,c),x.visible=!1,this.body.add(x),this.gunners.push({group:x,arm:E,flash:w,tube:T,blast:P})}}aim(t,e=0,n=!1,s=0){t&&(this.gunSide=t),this.gunners.forEach((r,a)=>{const o=t!==0&&(a===0?-1:1)===this.gunSide;r.group.visible=o,o&&(r.arm.visible=s<=0,r.tube.visible=s>0,r.blast.visible=s>.75,s>.75&&r.blast.scale.setScalar(.7+Math.random()*.6),r.arm.rotation.set(0,e,0),r.flash.visible=n&&s<=0,n&&(r.flash.rotation.z=Math.random()*Math.PI))})}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((l,c)=>l.rotation.set(n,c<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((l,c)=>l.rotation.set(0,c<2?-t*.35:0,0))}}const Qh=160,_a={x:0,y:0,z:0,h:0};class Y2{constructor(t){this.pool=[],this.m=new kt,this.s=new K,this.p=new K;const e=new dt,n=(r,a,o,l,c)=>{const h=[];for(let d=0;d<8;d++){const u=d/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(u)*r,o+Math.sin(u)*r,l])}e.poly(h,c)};let s;if(ue.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);l.addColorStop(0,"rgba(255,255,255,0.85)"),l.addColorStop(.55,"rgba(235,235,235,0.45)"),l.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new Cr(a);c.colorSpace=He,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new Ve({map:c,vertexColors:!0,transparent:!0,depthWrite:!1,side:_e})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new Ve({vertexColors:!0,side:_e});this.mesh=new J0(e.build(),s,Qh),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Ot(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,l,c,h){this.pool.length>=Qh&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:l,grow:c,color:new Ot(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,_a))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(_a.x,_a.y+s.y,_a.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let hr=null;function K2(i){ue.modern&&!hr&&(hr=I2());const t=new ii({vertexColors:!0,flatShading:!0,side:_e}),e=new Ve({vertexColors:!0,side:_e});ue.modern&&hr&&(Wa(t,hr),Wa(e,hr));const n=ue.modern?hu():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:uu(.75),lit:new ii({vertexColors:!0,flatShading:!0,side:_e}),glow:new Ve({vertexColors:!0,side:_e}),sign:new Ve({map:i,side:_e}),halo:new Ve({map:Hg(),vertexColors:!0,transparent:!0,blending:Wi,depthWrite:!1,fog:!1,side:_e,visible:ue.modern}),paint:ue.modern?new Bc({vertexColors:!0,flatShading:!0,side:_e,shininess:45,specular:10132122}):new ii({vertexColors:!0,flatShading:!0,side:_e})}}class $2{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new kt,this.q=new zs,this.e=new Sn,this.p=new K,this.sc=new K,this.c=new Ot,this.white=new Ot(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new J0(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(xr),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,l,c=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,c,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),l!==void 0&&this.c.setHex(l);for(const{mesh:d,tint:u}of this.meshes[t])d.setMatrixAt(h,this.m),d.setColorAt(h,u&&l!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const j2=(i,t)=>new Ot(i).multiplyScalar(t).getHex(),Ie=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function ml(){const i=new dt;return qc(i),{parts:Ie(i),radius:.8,max:260}}function Z2(){const i=new dt;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(Yh(-4,1.5,1),()=>qc(i)),i.with(Yh(5,1.2,-2).multiply(T2(1.3)).multiply(new kt().makeScale(.8,.8,.8)),()=>qc(i)),{parts:Ie(i),radius:0,max:20}}function qc(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,l=(r+1)*2,c=.48-r*.04,h=.44-r*.04,d=r%2?9067051:11038778;for(let u=0;u<6;u++){const f=u/6*Math.PI*2,m=(u+1)/6*Math.PI*2;i.quad([e+Math.cos(f)*c,o,Math.sin(f)*c],[e+Math.cos(m)*c,o,Math.sin(m)*c],[a+Math.cos(m)*h,l,Math.sin(m)*h],[a+Math.cos(f)*h,l,Math.sin(f)*h],u%2?d:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),l=Math.sin(a),c=-l,h=o,d=(x,M,v)=>[[n[0]+o*x+c*v,n[1]+M,n[2]+l*x+h*v],[n[0]+o*x-c*v,n[1]+M,n[2]+l*x-h*v]],[u,f]=d(1.5,.7,.75),[m,_]=d(3,.3,.6),g=[n[0]+o*4.4,n[1]-1.6,n[2]+l*4.4],p=r%2?3124810:2067002;i.tri(n,u,f,p),i.quad(f,u,m,_,r%2?2529343:1733682),i.tri(_,m,g,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function J2(){const i=new dt;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:Ie(i),radius:1.2,max:220}}function pu(){const i=new dt;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:Ie(i),radius:0,max:160}}function gl(){const i=new dt;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:Ie(i),radius:2.2,max:120}}function Bo(i){const t=new dt;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:Ie(t),radius:0,max:120}}function Q2(){const i=new dt;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:Ie(i),radius:1.4,max:30}}function t0(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),l=r.range(-s/4,s/4);for(const[c,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+c,e+1,l+h,.2,2,.2,6974064);i.prism(o,l,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function xl(i,t){const e=new dt,n=3836600;if(ue.modern){const s=new dt,r=new dt,a=o=>Pr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(Ae.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),t0(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let l=0;for(const[c,h,d]of o)s.facadeBox(0,l+h/2,0,c,h,d,a(Ae.DECO),8,8,[16777215,15790320],15788248),e.box(0,l+h-.4,0,c+.6,.8,d+.6,[16769162,16771232]),e.box(0,l+h-1.4,0,c+.3,.25,d+.3,4243632),l+=h;e.prism(0,0,l,l+7,1.2,.05,4,[16777215,14737632]),r.box(0,l+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(Ae.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);t0(e,r,12,26,9,t,!1)}return{parts:[...Ie(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,l]of s){e.box(0,r+o/2,0,a,o,l,[16777215,16053492]);for(let c=r+2.5;c<r+o-1;c+=3)e.box(0,c,0,a*.7,1.3,l+.3,n);e.box(0,r+o-.4,0,a+.6,.8,l+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:Ie(e),radius:0,max:40}}function mu(i){const t=new dt,e=new dt,n=new dt;ue.modern?n.facadeBox(0,3.5,0,12,7,9,Pr(Ae.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function Ir(i,t=9,e=4.5,n=9079434,s=15790320){const r=new dt,a=new dt;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function ja(i,t=4,e=2){const n=new dt,s=new dt;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function Hs(i,t,e=10133672,n=3,s=!1){const r=new dt,a=new dt;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=Ie(r,a);if(s){const l=new dt,c=4.2,h=i-.5;l.quad([-n-c,h-c,0],[-n+c,h-c,0],[-n+c,h+c,0],[-n-c,h+c,0],t,[0,0,1,1]),l.quad([-n,h-c,-c],[-n,h-c,c],[-n,h+c,c],[-n,h+c,-c],t,[0,0,1,1]),l.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],j2(t,.35),[0,0,1,1]),o.push({geo:l.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function Za(i=15921906,t=10132122){const e=new dt;return e.box(0,.85,-Qt/2,.15,.45,Qt+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-Qt/2,.18,.8,.18,t),{parts:Ie(e),radius:0,max:420}}function Pe(i,t=15790320,e=14690858,n=16769088){const s=new dt,r=new dt,a=new dt,o=j+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let l=0;l<6;l++)a.box(-o+2+l*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function Lr(i=9079446,t=14204992,e=9){const n=new dt,s=j+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:Ie(n),radius:0,max:6}}function tx(i=9){const t=new dt,e=j+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,l=(d,u,f)=>t.poly(d.map(([m,_])=>[m,_,f]),u),c=d=>d.map(([u,f])=>[-u,f]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];l(h,s,-.4),l(c([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),l([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),l([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),l([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),l([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let d=0;d<10;d++){const u=-e+d*e*2/10;t.quad([u,i+.2,.82],[u+e*2/10,i+.2,.82],[u+e*2/10,i+.9,.82],[u,i+.9,.82],d%2?1710618:16764992)}return{parts:Ie(t),radius:0,max:6}}function wn(i,t=0){const e=new dt,n=new dt,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function gu(){const i=new dt;i.box(0,.65,-Qt/2,1.5,1.3,Qt,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:Ie(i),radius:0,max:360}}function _l(){const i=new dt,t=new dt;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function xu(){const i=new dt;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:Ie(i),radius:1,max:200}}function ex(){const i=new dt;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const l=o/10*Math.PI*2;a.push([r+Math.cos(l)*.32,1.25+Math.sin(l)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:Ie(i),radius:0,max:40}}function _u(){const i=new dt;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:Ie(i),radius:0,max:40}}function nx(i){const t=new dt,e=new dt,n=j+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,j+5,-47,j+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-j;r<=j;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:Ie(t,e),radius:0,max:6}}function ix(i){const t=new dt,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function wi(i){const t=new dt,e=new dt;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:Ie(t,e),radius:0,max:10,len:6.5}}function Ki(i){const t=new dt,e=new dt;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:Ie(t,e),radius:0,max:8,len:7.5}}function Ei(i){const t=new dt,e=new dt;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:Ie(t,e),radius:0,max:400}}function Ml(i){const t=new dt,e=new dt;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function $i(i){const t=new dt,e=new dt,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function Mu(i){const t=new dt;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:Ie(t),radius:0,max:30}}function sx(){const i=new dt,t=new dt;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function vu(i){const t=new dt;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function rx(i){const t=new dt,e=new dt,n=new dt;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function ax(i){const t=new dt,e=new dt;for(const n of[-4.5,4.5])t.with(new kt().makeTranslation(n,i-1.1,0).multiply(new kt().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:Ie(t,e),radius:0,max:12}}const e0=i=>new Ot().setHex(i);function ve(i,t,e,n){const s=[],r=(h,d,u,f,m,_,g,p)=>s.push({xa:h,ya:d,absA:u,xb:f,yb:m,absB:_,c0:e0(g[0]),c1:e0(g[1]),tex:p});let o=-j;const l=i.edge!==void 0?.45:0;l&&(r(o,0,!1,o+l,0,!1,[i.edge,i.edge],ut.PAINT),o+=l);for(let h=1;h<Bi;h++){const d=-j+h*Er;r(o,0,!1,d-.35/2,0,!1,i.road,ut.ASPHALT),r(d-.35/2,0,!1,d+.35/2,0,!1,[i.line,i.road[1]],ut.PAINT),o=d+.35/2}r(o,0,!1,j-l,0,!1,i.road,ut.ASPHALT),l&&r(j-l,0,!1,j,0,!1,[i.edge,i.edge],ut.PAINT);const c=[];for(const h of[-1,1]){let d=j,u=0,f=!1;if(i.rumble){const m=i.rumbleW??1.6;r(h*d,0,!1,h*(d+m),0,!1,i.rumble,ut.KERB),d+=m}for(const m of h<0?t:e){const _=d+m.w;let g=u,p=f;m.abs!==void 0?(g=m.abs,p=!0):m.dy!==void 0&&(g=u+m.dy),r(h*d,u,f,h*_,g,p,m.c,m.tex),d=_,u=g,f=p}c.push({x:h*d,y:u,abs:f})}return n&&r(c[0].x,c[0].y,c[0].abs,c[1].x,c[1].y,c[1].abs,n,ut.CEILING),{spans:s}}function ox(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?ut.TUNNEL:ut.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,He);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?ut.FOAM:n>165&&n<260&&s>.5?r<.25?ut.BAY:r>.52?ut.SHALLOW:ut.SEA:r<.22?ut.CITY:n>60&&n<170&&s>.25?ut.GRASS:n>25&&n<60&&s>.55?ut.SAND:n>25&&n<60&&s>.3&&r<.8?ut.DIRT:s<.2&&r>.6?ut.CONCRETE:ut.PAVING}const cx={[ut.ASPHALT]:[5.5,9],[ut.PAINT]:[2,6],[ut.KERB]:[1.6,6],[ut.GRASS]:[7,7],[ut.SAND]:[9,9],[ut.SEA]:[16,16],[ut.BAY]:[20,20],[ut.SHALLOW]:[10,10],[ut.FOAM]:[3,8],[ut.CONCRETE]:[4,6],[ut.TUNNEL]:[3,3],[ut.CEILING]:[6,12],[ut.PAVING]:[3,3],[ut.CITY]:[40,40],[ut.DIRT]:[5,5]},n0=220,lx=32;class hx{constructor(t){this.profiles=t,this.time={value:0};const e=n0*lx;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),ue.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=ox(a)),a.tex===ut.CITY&&(a.c0=new Ot(13158624),a.c1=new Ot(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new We,this.geo.setAttribute("position",new $e(this.pos,3).setUsage(xr)),this.geo.setAttribute("color",new $e(this.colr,3).setUsage(xr)),this.geo.setAttribute("uv",new $e(this.uv,2).setUsage(xr)),this.geo.setAttribute("tile",new $e(this.tile,3).setUsage(xr)),this.geo.setIndex(new $e(n,1));const s=new Ve({vertexColors:!0,side:_e});ue.modern&&(s.color.setScalar(1.1),Wa(s,C2(),this.time)),this.mesh=new Jt(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,l=this.colr,c=this.uv,h=this.tile;let d=0;const u=Math.min(t.count,n0);for(let f=0;f<u;f++){const m=t.start+f,_=t.track.seg(m),g=this.profiles[_.profile],p=Math.floor(m/qg)%2===0,x=Math.cos(r[f]),M=Math.sin(r[f]),v=Math.cos(r[f+1]),E=Math.sin(r[f+1]);for(const w of g.spans){const T=p?w.c0:w.c1,R=d*12;o[R]=e[f]+x*w.xa,o[R+1]=w.absA?w.ya-a:n[f]+w.ya,o[R+2]=s[f]+M*w.xa,o[R+3]=e[f]+x*w.xb,o[R+4]=w.absB?w.yb-a:n[f]+w.yb,o[R+5]=s[f]+M*w.xb,o[R+6]=e[f+1]+v*w.xb,o[R+7]=w.absB?w.yb-a:n[f+1]+w.yb,o[R+8]=s[f+1]+E*w.xb,o[R+9]=e[f+1]+v*w.xa,o[R+10]=w.absA?w.ya-a:n[f+1]+w.ya,o[R+11]=s[f+1]+E*w.xa;for(let B=0;B<4;B++)l[R+B*3]=T.r,l[R+B*3+1]=T.g,l[R+B*3+2]=T.b;const S=cx[w.tex??0]??[6,8],b=(w.xa+w.ya)/S[0],P=(w.xb+w.yb)/S[0],z=m*Qt/S[1],H=(m+1)*Qt/S[1],W=d*8,[tt,O]=Pr(w.tex??0),it=A2[w.tex??0]??0;for(let B=0;B<4;B++)h[d*12+B*3]=tt,h[d*12+B*3+1]=O,h[d*12+B*3+2]=it;c[W]=b,c[W+1]=z,c[W+2]=P,c[W+3]=z,c[W+4]=P,c[W+5]=H,c[W+6]=b,c[W+7]=H,d++}}this.geo.setDrawRange(0,d*6),this.geo.attributes.position.addUpdateRange(0,d*12),this.geo.attributes.color.addUpdateRange(0,d*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,ue.modern&&(this.geo.attributes.uv.addUpdateRange(0,d*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,d*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}const oe={x:0,y:0,z:0,h:0},Ma={x:0,y:0,z:0,h:0},i0=48;function ux(){const i=new nn,t=new Jt(new yi(.09,.09,.9,10).rotateX(Math.PI/2),new ii({color:4872746})),e=new Jt(new Us(.09,.28,10).rotateX(-Math.PI/2).translate(0,0,-.59),new ii({color:13113360}));i.add(t,e);const n=new ii({color:2763306,side:_e});for(const a of[0,Math.PI/2]){const o=new Jt(new Rr(.38,.22).rotateY(Math.PI/2).translate(0,0,.38),n);o.rotation.z=a,i.add(o)}const s=new Jt(new Us(.11,.7,8).rotateX(Math.PI/2).translate(0,0,.8),new Ve({color:16752688,transparent:!0,opacity:.9,blending:Wi,depthWrite:!1}));s.name="flame",i.add(s);const r=new Jt(new Os(.22,8,6).translate(0,0,.5),new Ve({color:16769152,transparent:!0,opacity:.85,blending:Wi,depthWrite:!1}));return i.add(r),i.scale.setScalar(1.8),i}class dx{constructor(t){this.route=t,this.scene=new Ig,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new ai(7),this.carPaint=-1,this.net=null,this.tracers=[],this.rockets=[],this.rocketPool=[],this.playerGun={firing:!1,flash:!1,rocket:0},this.netTime=0;const e=new Wg;if(this.data=t.build(e),this.track=this.data.track,this.view=new jg(this.track),this.scene.fog=new ol(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Ot(t.fog.color),ue.modern){this.scene.add(new Oh(t.ambient.color,t.ambient.intensity*.55));const[a,o]=t.hemi;this.scene.add(new Ug(a,o,t.ambient.intensity*.75))}else this.scene.add(new Oh(t.ambient.color,t.ambient.intensity));const n=new kg(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=K2(e.texture);this.road=new hx(this.data.profiles),this.scene.add(this.road.mesh),this.props=new $2(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.plate,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new zo(Ke[0],Ke[0].paints[0],s,this.plate,this.route.shadow,this.route.night),this.scene.add(this.car.root),this.particles=new Y2(this.scene);const r=new We;r.setAttribute("position",new we(new Float32Array(i0*6),3)),this.tracerMesh=new Q0(r,new cl({color:16771216,transparent:!0,opacity:.9,blending:Wi,depthWrite:!1,fog:!1})),this.tracerMesh.frustumCulled=!1,this.scene.add(this.tracerMesh)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new zo(t,e,this.mats,this.plate,this.route.shadow,this.route.night),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new zo(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.night);return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-Bi*Er/2+Er*(t+.5)}spawnCar(t){const e=this.rng.int(0,Bi-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}shoot(t,e,n,s,r){const a=Math.sign(s-e)||1,o=e+a*1,l=1.25;let c=s,h=n,d=.8;r||(c+=(Math.random()-.5)*6,h+=(n-t)*.3+(Math.random()-.5)*6,d=Math.random()<.5?.05:1.6+Math.random()),this.tracers.length>=i0&&this.tracers.shift(),this.tracers.push({d0:t+Math.sign(n-t)*.5,x0:o,y0:l,d1:h,x1:c,y1:d,life:.07});const u=this.particles;if(r)for(let f=0;f<4;f++)u.spawn(n+(Math.random()-.5)*2,s+(Math.random()-.5)*1.6,.6+Math.random()*.6,0,(Math.random()-.5)*5,2+Math.random()*3,.3,.12,-1,Math.random()<.5?16769088:16777215);else d<.1&&u.spawn(h,c,.1,0,0,.6,.5,.35,1.5,13156520)}setNetTraffic(t,e){const n=new ai(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let l=0;l<a;l++){const c=[n.int(0,Bi-1)];for(let h=1;h<32;h++)c.push(Math.max(0,Math.min(Bi-1,c[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(l+n.next()*.6)/a*r,v:n.range(28,50),lanes:c,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[l].d0,x:this.laneX(c[0]),laneTarget:c[0],v:o.cars[l].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],l=o.d0+o.v*s,c=Math.floor(l/n.len);c!==r.wrap&&(r.wrap=c,r.passed=!1),r.d=n.start+l-c*n.len;const h=Math.floor(s/o.period),d=o.lanes[h%o.lanes.length],u=o.lanes[Math.max(0,h-1)%o.lanes.length],f=Math.min(1,(s-h*o.period)/1.5),m=f*f*(3-2*f);r.x=this.laneX(u)+(this.laneX(d)-this.laneX(u))*m,r.laneTarget=d,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalBreakLamp(t){var e;(e=this.rivalCars[t])==null||e.breakLamp(Math.random()<.5?-1:1)}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}roadScreenPos(t,e,n,s,r,a){if(!this.view.sample(t,e,oe))return null;const o=new K(oe.x,oe.y+n,oe.z),l=o.distanceTo(s.position);return o.project(s),o.z>1||Math.abs(o.x)>1.1||Math.abs(o.y)>1.1?null:{x:(o.x+1)/2*r,y:(1-o.y)/2*a,dist:l}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(Bi-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/Qt);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*Qt-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const l=this.data.props[o.t].radius;if(l>0&&Math.abs(o.x-e)<l*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:l,by:c,bz:h,bh:d,yRef:u}=a;for(let M=0;M<a.count;M++){const v=this.track.seg(a.start+M);if(!v.props.length)continue;const E=Math.cos(d[M]),w=Math.sin(d[M]);for(const T of v.props){const R=T.abs?(T.y??0)-u:c[M]+(T.y??0);o.add(T.t,l[M]+E*T.x,R,h[M]+w*T.x,-d[M]+(T.r??0),T.s??1,T.sy??1,T.tint)}}for(const M of this.traffic)a.sample(M.d,M.x,oe)&&o.add(M.t,oe.x,oe.y,oe.z,-oe.h,1,1,M.tint);o.end(),a.sample(t+2,e,oe);const f=oe.y;a.sample(t-2,e,oe);const m=oe.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(f-m,4),r.brake,r.flame);const _=this.playerGun,g=e>0?-1:1;_.rocket>0?this.car.aim(g,0,!1,_.rocket):_.firing?this.car.aim(g,0,_.flash):this.car.aim(0),this.rivals.forEach((M,v)=>{const E=this.rivalCars[v];if(!a.sample(M.d+2,M.x,oe)){E.root.visible=!1;return}const w=oe.y;a.sample(M.d-2,M.x,oe);const T=oe.y;a.sample(M.d,M.x,oe),E.root.visible=!0,E.setNear(Math.abs(M.d-t)<28),E.root.position.set(oe.x,oe.y,oe.z),E.pose(M.steer,-oe.h-M.steer*.08,M.spin,0,Math.atan2(w-T,4),M.braking,M.turboT>0?1:0);const R=M.x>0?-1:1;M.rocketT>0?E.aim(R,0,!1,M.rocketT):M.gunT>0?E.aim(R,0,Math.random()<.5):E.aim(0)}),a.sample(t-8.8,e*.9,oe);const p=Math.max(oe.y,-.5)+3.3;a.sample(t+40,0,oe);const x=oe.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,p+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,x,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n),this.renderTracers(a),this.renderRockets(a)}renderTracers(t){const e=this.tracerMesh.geometry.getAttribute("position");let n=0;for(const s of this.tracers)!t.sample(s.d0,s.x0,oe)||!t.sample(s.d1,s.x1,Ma)||(e.setXYZ(n*2,oe.x,oe.y+s.y0,oe.z),e.setXYZ(n*2+1,Ma.x,Ma.y+s.y1,Ma.z),n++);e.needsUpdate=!0,this.tracerMesh.geometry.setDrawRange(0,n*2)}launchRocket(t,e,n,s,r){const a=this.rocketPool.pop()??ux();a.visible=!1,this.scene.add(a),this.rockets.push({d:t+2.5,x:e,v:n,travelled:0,mine:s,from:r,mesh:a,smokeT:0});const o=this.particles;for(let l=0;l<6;l++)o.spawn(t+2,e+(Math.random()-.5),1,-6+Math.random()*4,(Math.random()-.5)*3,1+Math.random(),.6,.6,1.8,14209216)}moveRockets(t,e,n){const s=[];for(const r of this.rockets)r.d+=r.v*t,r.travelled+=r.v*t,r.smokeT-=t,r.smokeT<=0&&Math.abs(r.d-n)<250&&(r.smokeT=.035,this.particles.spawn(r.d-1.8,r.x+(Math.random()-.5)*.3,1+(Math.random()-.5)*.3,0,(Math.random()-.5)*.8,.5,1.1,.6,1.8,15789284)),r.travelled>e&&s.push(r);return s}explodeRocket(t){this.removeRocket(t);const e=this.particles;for(let n=0;n<16;n++){const s=Math.random()*Math.PI*2,r=3+Math.random()*7;e.spawn(t.d,t.x,1,Math.cos(s)*r,Math.sin(s)*r,2+Math.random()*4,.35+Math.random()*.25,.9,2.5,n%3?16752672:16769120)}for(let n=0;n<10;n++)e.spawn(t.d+(Math.random()-.5)*3,t.x+(Math.random()-.5)*3,.8+Math.random(),0,(Math.random()-.5)*2,1.5+Math.random()*2,1.4+Math.random(),1.4,2.2,4867136)}removeRocket(t){this.rockets=this.rockets.filter(e=>e!==t),this.scene.remove(t.mesh),this.rocketPool.push(t.mesh)}clearRockets(){for(const t of[...this.rockets])this.removeRocket(t)}renderRockets(t){for(const e of this.rockets){if(!t.sample(e.d,e.x,oe)){e.mesh.visible=!1;continue}e.mesh.visible=!0,e.mesh.position.set(oe.x,oe.y+1,oe.z),e.mesh.rotation.set(0,-oe.h,0);const n=e.mesh.getObjectByName("flame");n&&n.scale.set(1,1,.7+Math.random()*.6)}}tickTracers(t){for(const e of this.tracers)e.life-=t;this.tracers=this.tracers.filter(e=>e.life>0)}}const Go=["arcade","rivals","online"],Ye=39,va=52,ur=262,ya=106,s0=39,r0=262,fx=250,ys=330,Ho=46,Ln=396,ba={x0:28,x1:378,mid:203,carY:72,carH:46,paintY:122,turbY:140,weapY:162,ammoY:184,rockY:206,chipH:20,minusX:190,plusX:284},me=9079464,a0={arrowX:14,arrowY:170,arrowW:46,arrowH:84,lx:20,py:274,ph:124,paintY:284,swX:106,turbY:308,weapY:330,ammoY:352,rockY:374,minusX:146,plusX:234,goY:410},o0=82,Sa=3.6,px=8,dr=[0,18,34,50,66,84],c0=25,l0=.82,mx=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},h0=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(Ke.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},u0=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},gx=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<vr.length?i:-1}catch{return-1}},xx=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},wa=i=>i<.4?4251712:i<.7?zt:ae,jn=(i,t)=>{try{const e=localStorage.getItem(i);return e===null?t:parseInt(e,10)}catch{return t}},Ea=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}},_x=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},Mx=i=>{try{localStorage.setItem("th86-name",i)}catch{}},vx=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class yx{constructor(t,e,n,s,r){this.routes=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=mx(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=gx(),this.mode="arcade",this.testPvp=new URLSearchParams(location.search).get("test")==="pvp",this.testLog=[],this.testDealt=new Map,this.testScrape=0,this.testTaken=new Map,this.net=null,this.nameBox=null,this.playerName=_x(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=xs,this.turboT=0,this.turboCount=Math.max(1,Math.min(9,jn("th86-turbos",xs)||xs)),this.weaponsSetting=jn("th86-weapons",1)===1,this.ammoCount=ar.includes(jn("th86-ammo",_s))?jn("th86-ammo",_s):_s,this.raceAmmo=_s,this.rocketCount=Math.max(1,Math.min(la,jn("th86-rockets",or)||or)),this.raceRockets=or,this.rockets=0,this.raceTurbos=xs,this.weapons=!1,this.ammo=0,this.fireCool=0,this.firingT=0,this.lastGunTarget=null,this.noTargetT=0,this.rocketMsgT=0,this.catchUp=0,this.tow=0,this.slipT=0,this.bazookaT=0,this.lastHitT=0,this.muteToast=-1,this.notice="",this.noticeUntil=-1,this.hitFlash=0,this.gunFrom=new Map,this.pendingHits=new Map,this.hitSendT=0,this.onlineGo=null,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=h0()[0],this.paintIdx=h0()[1],this.touch=!1,this.titleTimer=0,this.worlds=t.map(()=>null),this.world=this.getWorld(0),this.resetPlayer(!0)}testNote(t,e){const n=this.testLog[this.testLog.length-1];if(n&&n.text===t){n.n++;return}this.testLog.push({text:t,col:e,n:1}),this.testLog.length>8&&this.testLog.shift()}get spec(){return Ke[this.carIdx]}get vmax(){return this.spec.stats.vmax/Sa}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}getWorld(t){var e;return(e=this.worlds)[t]??(e[t]=new dx(this.routes[t]))}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.getWorld(t),this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*Qt,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.music:vr[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":vr[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=vr.length?-1:this.musicIdx+1,xx(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar();const t=this.mode==="online"?this.onlineGo:null;if(this.raceTurbos=t?t.turbos:this.turboCount,this.turbos=this.raceTurbos,this.turboT=0,this.weapons=t?t.weapons:this.mode==="rivals"&&this.weaponsSetting,this.raceAmmo=t?t.ammo:this.ammoCount,this.ammo=this.weapons?this.raceAmmo:0,this.testPvp&&this.mode==="rivals"&&(this.weapons=!0),this.raceRockets=t?t.rockets:this.rocketCount,this.rockets=this.weapons?this.raceRockets:0,this.world.clearRockets(),this.catchUp=this.tow=this.slipT=0,this.testLog=[],this.testDealt.clear(),this.testScrape=0,this.testTaken.clear(),this.fireCool=0,this.firingT=0,this.lastGunTarget=null,this.lastHitT=0,this.bazookaT=0,this.hitFlash=0,this.gunFrom.clear(),this.pendingHits.clear(),this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"){if(this.world.setRivals(l2(this.spec,this.pos,Date.now()&65535,this.raceTurbos,this.weapons?this.raceAmmo:0)),this.testPvp)for(const e of this.world.rivals)e.rockets=this.raceRockets;this.world.resetTraffic(this.pos,10,520),this.place=8}else this.world.setRivals([]);this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&(this.audio.toggleMute(),this.muteToast=this.clock+1.5),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=(this.attractRoute+1)%this.routes.length,this.setWorld(this.attractRoute);const s=Ke[Math.floor(Math.random()*Ke.length)];this.world.setPlayerCar(s,s.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0),(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;const a=this.routes.length;e.hit("ArrowLeft","KeyA")&&(s=(this.routeIdx+a-1)%a),e.hit("ArrowRight","KeyD")&&(s=(this.routeIdx+1)%a);let o=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const l of e.taps)if(l.y>va-4&&l.y<va+2*ya-8&&l.x>Ye&&l.x<Ye+3*ur-12){const c=Math.floor((l.y-va+4)/ya)*3+Math.floor((l.x-Ye)/ur);c===this.routeIdx?r=!0:c<a&&(s=c)}else if(l.y>=ys-4&&l.y<ys+Ho+6){const c=Go[Math.max(0,Math.min(2,Math.floor((l.x-s0)/r0)))];c!==this.mode&&(this.mode=c,this.audio.blip())}else l.y>=Ln-6&&(r=!0);if(o){const l=e.hit("ArrowDown","KeyS")?1:2;this.mode=Go[(Go.indexOf(this.mode)+l)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25,o=!1;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyT")&&this.cycleTurbos(),e.hit("KeyV")&&this.mode==="rivals"&&this.toggleWeapons(),e.hit("KeyB")&&this.mode==="rivals"&&this.cycleAmmo(),e.hit("KeyK")&&this.mode==="rivals"&&this.cycleRockets();let l=-1;const c=a0,h=pt-c.lx-300;for(const d of e.taps){const u=m=>d.y>=m-3&&d.y<m+ba.chipH+3,f=(m,_)=>d.x>=h+m-4&&d.x<h+m+_+4;if(d.y<44&&d.x<150)o=!0;else if(d.y>=c.goY-4&&Math.abs(d.x-pt/2)<134)a=!0;else if(d.y>=c.goY-4&&d.x<pt/2-134)this.nextTrack();else if(d.y>=c.goY-4)s=1;else if(d.x>=h&&d.y>=c.py&&d.y<c.py+c.ph){const m=this.spec.paints.length;u(c.paintY)&&d.x>=h+c.swX-3&&d.x<h+c.swX+m*24?l=Math.floor((d.x-h-c.swX+3)/24):u(c.turbY)&&f(c.minusX,28)?this.cycleTurbos(-1):u(c.turbY)&&f(c.plusX,28)?this.cycleTurbos(1):this.mode==="rivals"&&u(c.weapY)&&f(c.minusX,c.plusX+28-c.minusX)?this.toggleWeapons():this.mode==="rivals"&&u(c.ammoY)&&f(c.minusX,28)?this.cycleAmmo(-1):this.mode==="rivals"&&u(c.ammoY)&&f(c.plusX,28)?this.cycleAmmo(1):this.mode==="rivals"&&u(c.rockY)&&f(c.minusX,28)?this.cycleRockets(-1):this.mode==="rivals"&&u(c.rockY)&&f(c.plusX,28)&&this.cycleRockets(1)}else d.y>=c.py||(d.x<c.arrowX+c.arrowW+50?s=-1:d.x>pt-c.arrowX-c.arrowW-50?s=1:d.y>150&&(r=1))}l>=0&&l<this.spec.paints.length&&l!==this.paintIdx&&(this.paintIdx=l,this.audio.blip(),this.applyCar()),s&&(this.carIdx=(this.carIdx+s+Ke.length)%Ke.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")||o?this.toSelect():a&&(u0(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Hc,this.audio.turbo(),this.flash("TURBO!","",1)),this.assists(t),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*Sa*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/Qt));if(s.stage>this.stage){this.stage=s.stage,this.timeLeft+=this.world.route.extendTime;const r=this.world.rivals.length+1,a=r>1?ko(this.world.rivals,this.pos,-1):1;this.mode!=="arcade"&&r>1&&a>Math.ceil(r/2)?(this.turbos++,this.weapons&&(this.rockets++,this.raceRockets=Math.max(this.raceRockets,this.rockets)),this.flash("CHECKPOINT!",this.weapons?"BONUS TURBO + ROCKET":"BONUS TURBO",2.5)):this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()}this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=ko(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=ua(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=ua(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}["race","goal","over"].includes(this.state)&&this.guns(t);const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),h2(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=ko(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,vx(this.hi))}cycleTurbos(t=1){this.turboCount=(this.turboCount-1+t+9)%9+1,Ea("th86-turbos",this.turboCount),this.audio.blip()}toggleWeapons(){this.weaponsSetting=!this.weaponsSetting,Ea("th86-weapons",this.weaponsSetting?1:0),this.audio.blip()}cycleAmmo(t=1){const e=ar.length;this.ammoCount=ar[(Math.max(0,ar.indexOf(this.ammoCount))+t+e)%e],Ea("th86-ammo",this.ammoCount),this.audio.blip()}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){this.testPvp&&(this.mode="rivals"),qh()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,Mx(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new S2(qh()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r),this.net.onHit=(s,r)=>this.gotHit(s,r),this.net.onRk=(s,r)=>this.gotRk(s,r),this.net.onPeer=s=>this.playerJoined(s.name),this.net.onKicked=()=>{this.leaveOnline(),this.notice="THE HOST REMOVED YOU FROM THE LOBBY",this.noticeUntil=this.clock+4},!this.touch&&"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{})}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}adoptSettings(t){t&&(t.route!==this.routeIdx&&t.route<this.routes.length&&(this.setWorld(t.route),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),this.turboCount=t.turbos,this.weaponsSetting=t.weapons,this.ammoCount=t.ammo,this.rocketCount=t.rockets)}cycleRockets(t=1){this.rocketCount=(this.rocketCount-1+t+la)%la+1,Ea("th86-rockets",this.rocketCount),this.audio.blip()}loadSettings(){this.turboCount=Math.max(1,Math.min(9,jn("th86-turbos",xs)||xs)),this.weaponsSetting=jn("th86-weapons",1)===1;const t=jn("th86-ammo",_s);this.ammoCount=ar.includes(t)?t:_s,this.rocketCount=Math.max(1,Math.min(la,jn("th86-rockets",or)||or))}playerJoined(t){if(!(this.state!=="lobby"||!(document.hidden||!document.hasFocus()))){this.audio.chime();try{if("Notification"in window&&Notification.permission==="granted"){const n=new Notification(`${t} joined the lobby`,{body:"Turbo Horizon '86 - click to race",tag:"th86-join"});n.onclick=()=>{window.focus(),n.close()}}}catch{}this.flashTitle(`${t} JOINED!`)}}flashTitle(t){const e="Turbo Horizon '86";window.clearInterval(this.titleTimer);let n=!1;this.titleTimer=window.setInterval(()=>{if(!document.hidden&&document.hasFocus()){window.clearInterval(this.titleTimer),document.title=e;return}n=!n,document.title=n?`>> ${t}`:e},900)}leaveOnline(){var t;this.net&&!this.net.isHost()&&this.loadSettings(),(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let l=e.hit("KeyT")?1:0,c=e.hit("KeyV"),h=e.hit("KeyB")?1:0,d=e.hit("KeyK")?1:0,u=-1,f=e.hit("Escape","KeyQ");const m=ba;for(const p of e.taps){const x=(R,S)=>p.x>=R-4&&p.x<R+S+4,M=R=>p.y>=R-3&&p.y<R+m.chipH+3,v=pt-320,E=70,w=Math.floor((p.y-E-40)/34),T=(n==null?void 0:n.list())??[];if((n==null?void 0:n.status)==="online"&&n.isHost()&&p.x>=v+226&&p.x<v+294&&w>=1&&w<=Math.min(7,T.length)&&p.y-(E+40+w*34)>=13){const R=T[w-1];n==null||n.kick(R.id),this.audio.blip();continue}if(p.y>405&&Math.abs(p.x-pt/2)<150)o=!0;else if(p.y>405&&p.x<pt/2-160)a=!0;else if(p.y<50&&p.x<150)f=!0;else if(p.y>=m.carY&&p.y<m.carY+m.carH&&p.x<m.x1)s=p.x<m.x0+40?-1:1;else if(p.y>=m.paintY-4&&p.y<m.paintY+16&&p.x<m.x1){const R=this.spec.paints.length,S=m.mid-(R*22-6)/2,b=Math.floor((p.x-S+3)/22);u=b>=0&&b<R?b:-1,u<0&&(r=1)}else M(m.turbY)&&x(m.minusX,28)?l=-1:M(m.turbY)&&x(m.plusX,28)?l=1:M(m.weapY)&&x(m.minusX,m.plusX+28-m.minusX)?c=!0:M(m.ammoY)&&x(m.minusX,28)?h=-1:M(m.ammoY)&&x(m.plusX,28)?h=1:M(m.rockY)&&x(m.minusX,28)?d=-1:M(m.rockY)&&x(m.plusX,28)?d=1:p.y>=135&&p.y<400&&p.x>m.x1&&p.x<pt-330&&(r=1)}if(f)return this.leaveOnline();const _=!n||n.status!=="online"||n.isHost();if(_||(a=!1,l=0,c=!1,h=0,d=0),(n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+Ke.length)%Ke.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),u>=0&&u!==this.paintIdx&&(this.paintIdx=u,r=1),(s||r)&&(this.audio.blip(),this.applyCar(),u0(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld((this.routeIdx+1)%this.routes.length),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),l&&this.cycleTurbos(l),c&&this.toggleWeapons(),h&&this.cycleAmmo(h),d&&this.cycleRockets(d),(n==null?void 0:n.status)==="online"&&(_?n.setMe({set:{route:this.routeIdx,turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,rockets:this.rocketCount}}):this.adoptSettings(n.host().set)),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&Gi()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,rockets:this.rocketCount,players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.onlineGo=t,this.pending={go:t,at:Gi()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.onlineGo=t,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*Qt+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*Er*.55}),a=[];t.players.forEach((o,l)=>{const c=r(l);if(o.id===e.selfId){this.pos=c.d,this.px=c.x;return}const h=Ke[o.car%Ke.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:c.d,x:c.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:0,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-2,rocketT:0,remote:{id:o.id,d:c.d,x:c.x,v:0,at:Gi(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*Qt),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(a=>{var o;return((o=a.remote)==null?void 0:o.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;r.d=t.d,r.x=t.x,r.v=t.v,r.at=Gi(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp>=55&&t.hp<55&&this.world.rivalBreakLamp(n),r.hp=t.hp),s.hp=t.hp,t.hp<=0&&!s.wrecked&&(s.wrecked=!0,s.wreckT=0),t.fin>=0&&s.finished<0&&(s.finished=t.fin),t.gun&&(s.gunTo=-2,s.gunT=.3)}gotHit(t,e){var n;!this.raceId||t.r!==this.raceId||t.to!==((n=this.net)==null?void 0:n.selfId)||(t.rk?this.takeRocketHit(e):t.n>0&&this.takeGunHit(e,t.n))}gotRk(t,e){if(!this.raceId||t.r!==this.raceId||this.state!=="race")return;this.world.launchRocket(t.d,t.x,t.v,!1,e);const n=this.world.rivals.find(s=>{var r;return((r=s.remote)==null?void 0:r.id)===e});n&&(n.rocketT=1.1),this.audio.rocket(.45)}takeRocketHit(t){if(this.state!=="race"||this.wrecked)return;const e=this.gunFrom.get(t)??0,n=Gh;if(this.speed*=.55,this.shakeKick=Math.max(this.shakeKick,.7),this.hitFlash=.5,this.world.car.hit(.6,Math.random()<.5?"left":"rear"),this.audio.boom(),this.flash("ROCKET HIT!","",1.2),this.testPvp&&t.startsWith("p:")){const s=t.slice(2);this.testTaken.set(s,(this.testTaken.get(s)??0)+Math.max(0,n)),this.testNote(`${s} > YOU ROCKET ${Math.max(0,n).toFixed(1)}`,he)}this.gunFrom.set(t,e+n),this.hp=Math.max(0,this.hp-n),this.afterDamage(n)}netTick(t){var n;const e=this.net;if(e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state)))){if(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime,gun:this.firingT>0?"fwd":""})),this.hitSendT-=t,this.hitSendT<=0&&this.pendingHits.size){this.hitSendT=.2;for(const[s,r]of this.pendingHits)e.sendHit({r:this.raceId,to:s,n:r});this.pendingHits.clear()}this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=ua(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((n=this.table.find(s=>s.player))==null?void 0:n.pos)??this.place))}}toSelect(){this.go("select");for(const t of this.worlds)t==null||t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+j)/(j*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const l=o.d-this.pos;l>0&&l<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(l=>l.d-this.pos>-8&&l.d-this.pos<90&&Math.abs(l.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/Qt)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*l0,a=Math.max(-1,Math.min(1,r/c0));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/Qt));let l=0,c=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const x=Math.max(-j+3,Math.min(j-3,this.px));this.px+=(x-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,l=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const x=this.speed,M=this.spec.stats,v=this.turboT>0,E=this.slipT>0?e2:0,w=this.vmax*(v?Fh:1)*this.limp()*(1+this.catchUp+E),T=1+this.catchUp*3+(E?.4:0);e.accel?this.speed+=30*M.accel*(v?1.9:1)*T*(1-Math.pow(Math.min(1,x/w),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+x*.035)*t;const R=e.steer,S=R===0?9:7;this.steer+=Math.sign(R-this.steer)*Math.min(Math.abs(R-this.steer),S*t);let b=this.steer*c0*M.grip*Math.min(1,x/22),P=o.curve*x*x*l0/M.grip;this.drifting=e.drift&&x>30&&Math.abs(e.steer)>0,this.drifting?(b*=1.45,P*=.45,this.speed-=5*t,l=1):Math.abs(this.steer)>.8&&x>62&&Math.abs(o.curve)>.0014&&(l=.6);const z=x/this.vmax;this.speed-=px*Math.abs(this.steer)*z*z/M.grip*t;const H=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(H-this.driftYaw)*Math.min(1,t*6),this.px+=(b-P)*t;const W=a.walls||o.tunnel,tt=W?j+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>tt&&(this.px=Math.sign(this.px)*tt,W&&x>15&&(h=Math.sign(this.px),this.speed-=x*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.testPvp&&(this.testScrape+=3*t),this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),c=Math.abs(this.px)>j+1,c?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,x/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&c&&x>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+x*.12,.6+Math.min(.4,x/200),this.px>0?"right":"left"),this.crash(!0));const O=s.hitTraffic(this.pos,this.px);O&&(n?this.speed=Math.min(this.speed,O.v*.9):x-O.v>36?(this.damage(10+(x-O.v)*.14,.5+Math.min(.5,(x-O.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,O.x>this.px?"right":"left"),this.speed=O.v*.75,this.px+=Math.sign(this.px-O.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const it of s.rivals){if(Math.abs(it.d-this.pos)>4.3||Math.abs(it.x-this.px)>1.95)continue;const B=Math.sign(this.px-it.x||1);this.px+=B*.9,it.x-=B*.9,it.d>this.pos?x-it.v>45&&!n?(this.damage(9+(x-it.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,it.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(it.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(it.d-this.pos)<2?B>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const d=this.vmax*(this.turboT>0?Fh:1);this.speed>d&&(this.speed=Math.max(d,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let u=1;const f=this.vmax/o0;for(;u<dr.length-1&&this.speed>dr[u]*f;)u++;const m=.25+.75*Math.min(1,(this.speed-dr[u-1]*f)/((dr[u]-dr[u-1])*f)),_=this.state!=="attract"&&this.state!=="select";this.audio.engine(_&&!this.wrecked,m,e.accel?1:0),this.audio.skid(_?l*Math.min(1,this.speed/20):0),u>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,_&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,_&&this.audio.pop()),this.gear=u,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const g=s.particles,p=Math.random()<t*45?1:0;if(p&&l>0&&this.speed>12){const x=a.smoke;for(const M of[-.9,.9])g.spawn(this.pos-1.4,this.px+M,.35,this.speed*.6,M,.8,.8,.45,2.6,x)}if(p&&c&&this.speed>15){const M=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])g.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,M)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let x=0;x<2;x++)g.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);g.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){this.state!=="race"||this.wrecked||(this.testPvp&&this.testNote(`CRASH ${n.toUpperCase()} ${t.toFixed(1)}`,Se),this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.afterDamage(t))}afterDamage(t){const e=this.hp+t;e>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&e>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}takeGunHit(t,e){if(this.state!=="race"||this.wrecked)return;const n=this.gunFrom.get(t)??0;let s=t.startsWith("ai:")?Math.min(e*Hh,n2-n):e*Bh;if(t.startsWith("ai:")){let a=0;for(const[o,l]of this.gunFrom)o.startsWith("ai:")&&(a+=l);s=Math.min(s,s2-a)}if(this.testPvp&&t.startsWith("p:")){const a=t.slice(2);this.testTaken.set(a,(this.testTaken.get(a)??0)+Math.max(0,s)),this.testNote(`${a} > YOU GUN ${Math.max(0,s).toFixed(1)}${s<=0?" (CAPPED)":""}`,s<=0?me:ae)}if(s<=0)return;this.gunFrom.set(t,n+s),this.hp=Math.max(0,this.hp-s);const r=["left","right","rear"];this.world.car.hit(.1,r[Math.floor(Math.random()*3)]),this.hitFlash=.25,this.shakeKick=Math.max(this.shakeKick,.15),this.audio.ping(),this.afterDamage(s)}hitRival(t,e=!1){var a;const n=this.world.rivals[t];if(n.remote){e?(a=this.net)==null||a.sendHit({r:this.raceId,to:n.remote.id,n:1,rk:!0}):this.pendingHits.set(n.remote.id,(this.pendingHits.get(n.remote.id)??0)+1);return}if(n.wrecked)return;let s=(e?o2:Hh)*i2;if(this.testPvp&&(s=e?Gh:Bh,this.testDealt.set(n.name,(this.testDealt.get(n.name)??0)+s),this.testNote(`YOU > ${n.name} ${e?"ROCKET":"GUN"} ${s.toFixed(1)}${s===0?" (CAPPED)":""}`,s===0?me:zt),s<=0))return;const r=n.hp;n.hp=Math.max(0,n.hp-s),n.gunTaken+=s,n.bumpT=Math.max(n.bumpT,e?1.2:.25+(1-n.hp/100)*.35),this.world.rivalHit(t,e?1:.16),r>=55&&n.hp<55&&this.world.rivalBreakLamp(t),n.hp<=0&&(n.wrecked=!0,n.gunT=0,n.burst=0,this.score+=5e4,this.flash(`${n.name} WRECKED!`,"+50000",2),this.audio.crash(!0),this.audio.pop())}lineOfFire(t,e,n){let s=null,r=Fo,a=e;if(this.world.rivals.forEach((o,l)=>{if(l===n||o.wrecked)return;const c=o.d-t;c>.5&&c<r&&Math.abs(o.x-e)<Oo&&(s=l,r=c,a=o.x)}),n!=="player"){const o=this.pos-t;o>.5&&o<r&&Math.abs(this.px-e)<Oo&&(s=-1,r=o,a=this.px)}for(const o of this.world.traffic){const l=o.d-t;l>.5&&l<r&&Math.abs(o.x-e)<Oo+.4&&(s=-3,r=l,a=o.x)}return{hit:s,d:t+r,x:a}}guns(t){const e=this.world,n=e.rivals,s=this.input;this.hitFlash=Math.max(0,this.hitFlash-t),this.firingT=Math.max(0,this.firingT-t),this.noTargetT=Math.max(0,this.noTargetT-t),this.fireCool=Math.max(0,this.fireCool-t),this.bazookaT=Math.max(0,this.bazookaT-t),e.playerGun.flash=!1;const r=this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&s.held("KeyF");if(r&&this.ammo<=0&&(this.noTargetT=.3),r&&this.ammo>0&&(this.firingT=.35,this.fireCool<=0)){this.fireCool=1/Uo,this.ammo--;const a=this.lineOfFire(this.pos,this.px,"player");e.shoot(this.pos,this.px,a.hit===null?this.pos+Fo:a.d,a.x,a.hit!==null),e.playerGun.flash=!0,this.audio.gun(),a.hit!==null&&a.hit>=0&&(this.hitRival(a.hit),this.lastGunTarget=a.hit,this.lastHitT=1.2)}this.lastHitT=Math.max(0,this.lastHitT-t),e.playerGun.firing=this.firingT>0,e.playerGun.rocket=this.bazookaT,n.forEach((a,o)=>{if(a.gunT=Math.max(0,a.gunT-t),a.rocketT=Math.max(0,a.rocketT-t),a.remote){if(a.gunT<=0||(a.fireCool-=t,a.fireCool>0))return;a.fireCool=1/Uo;const c=this.lineOfFire(a.d,a.x,o);e.shoot(a.d,a.x,c.hit===null?a.d+Fo:c.d,c.x,c.hit!==null),this.audio.gun(.4);return}if(!this.weapons||this.state!=="race"||this.wrecked||a.wrecked||a.ammo<=0||a.finished>=0)return;const l=this.lineOfFire(a.d,a.x,o);if(l.hit!==-1){a.burst=0;return}if(this.testPvp&&((a.rockets??0)>0&&l.d-a.d<120&&Math.random()<t*.6&&(a.rockets=(a.rockets??0)-1,a.rocketT=1.1,e.launchRocket(a.d,a.x,Math.max(a.v,15)+zh,!1,`p:${a.name}`),this.audio.rocket(.5)),a.burst=Math.max(a.burst,1)),a.burst<=0){Math.random()<t*(.06+a.aggro*.14)&&(a.burst=3+Math.floor(Math.random()*4));return}a.gunT=.35,a.fireCool-=t,!(a.fireCool>0)&&(a.fireCool=1/Uo,this.testPvp||a.burst--,a.ammo--,e.shoot(a.d,a.x,this.pos,this.px,!0),this.audio.gun(.5),this.takeGunHit(this.testPvp?`p:${a.name}`:`ai:${a.name}`,1))}),this.rocketsTick(t),e.tickTracers(t)}assists(t){const e=this.world;if(this.slipT=Math.max(0,this.slipT-t),this.mode==="arcade"&&!e.traffic.length)return;let n=-1/0;for(const o of e.rivals)o.wrecked||(n=Math.max(n,o.d));const s=n-this.pos,r=this.mode==="arcade"||!Number.isFinite(s)?0:Zg*Math.max(0,Math.min(1,(s-kh)/(Jg-kh)));this.catchUp+=(r-this.catchUp)*Math.min(1,t*2);let a=!1;if(this.speed*Sa>100&&this.crashT<=0){const o=(l,c)=>l-this.pos>4&&l-this.pos<30&&Math.abs(c-this.px)<1.6;a=e.rivals.some(l=>!l.wrecked&&o(l.d,l.x))||e.traffic.some(l=>o(l.d,l.x))}a&&this.slipT<=0?(this.tow=Math.min(1,this.tow+t/Qg),this.tow>=1&&(this.tow=0,this.slipT=t2,this.flash("SLIPSTREAM!","",1.2),this.audio.turbo())):a||(this.tow=Math.max(0,this.tow-t*1.2))}rocketsTick(t){var s;const e=this.world,n=this.input;if(this.rocketMsgT=Math.max(0,this.rocketMsgT-t),this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&n.hit("KeyE"))if(this.rockets>0){this.rockets--;const r=Math.max(this.speed,15)+zh;e.launchRocket(this.pos,this.px,r,!0,"me"),this.bazookaT=1.1,this.audio.rocket(),this.shakeKick=Math.max(this.shakeKick,.2),this.mode==="online"&&this.raceId&&((s=this.net)==null||s.sendRk({r:this.raceId,d:this.pos,x:this.px,v:r}))}else this.rocketMsgT=1;for(const r of e.moveRockets(t,r2,this.pos))e.explodeRocket(r);for(const r of[...e.rockets]){const a=r.d-r.v*t-2.3,o=r.d+2.3,l=(d,u)=>d>=a&&d<=o&&Math.abs(u-r.x)<a2;let c=-2;e.rivals.forEach((d,u)=>{var f;c!==-2||d.wrecked||((f=d.remote)==null?void 0:f.id)===r.from||`p:${d.name}`===r.from||l(d.d,d.x)&&(c=u)}),c===-2&&!r.mine&&l(this.pos,this.px)&&(c=-1);const h=c===-2&&e.traffic.some(d=>l(d.d,d.x));c===-2&&!h||(e.explodeRocket(r),this.audio.boom(Math.max(.25,Math.min(1,60/(Math.abs(r.d-this.pos)+20)))),r.mine&&c>=0&&(this.hitRival(c,!0),this.score+=5e3),this.testPvp&&c===-1&&r.from.startsWith("p:")&&this.takeRocketHit(r.from))}}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=ua(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(["race","over","goal"].includes(this.state)){const e={t:this.smokeT};this.smokeFrom(e,t,this.spec,this.pos,this.px,this.speed,this.hp,this.wrecked,this.t),this.smokeT=e.t}for(const e of this.world.rivals){e.remote&&e.wrecked&&(e.wreckT+=t);const n={t:e.smokeT};this.smokeFrom(n,t,e.spec,e.d,e.x,e.v,e.hp,e.wrecked,e.wreckT),e.smokeT=n.t}}smokeFrom(t,e,n,s,r,a,o,l,c){if(o>=50||(t.t+=e*(l?30:o<25?14:5),t.t<1))return;t.t-=1;const h=n.stations,d=["r32","supra","rx7"].includes(n.id),u=d?h[0].z+.9:h[h.length-1].z-.9,f=d?h[1].top:h[h.length-2].top,m=s-u,_=r+(Math.random()-.5)*.6,g=l?Math.random()<.5?2236962:3815994:o<25?6974058:12105912,p=this.world.particles;p.spawn(m,_,f+.1,a*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,g),l&&c<6&&Math.random()<.5&&p.spawn(m,_,f+.05,a*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/o0,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){var s;const t=this.hud;if(t.clear(),ue.modern&&this.state!=="carselect"){const r=this.world.sunOnHud(this.camera,pt,Ne);if(r){const a=Math.max(Math.abs(r.x/pt-.5),Math.abs(r.y/Ne-.5))*2;t.flare(r.x,r.y,Math.max(0,Math.min(1,1.25-a)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",pt/2,70,64,zt,he,11540504),t.logo("HORIZON",pt/2,150,56,8452351,2789631,1714832),t.text("'86",pt/2+230,210,24,Pn,"left"),t.text("ARCADE  ROAD  RACING",pt/2,236,16,Nt,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",pt/2,320,24,zt,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,pt/2,20,16,Se,"center"),t.text("FREE PLAY",pt-20,Ne-30,16,Nt,"right"),t.text("©1986 HORIZON SOFT",20,Ne-30,16,Nt,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",pt/2,12,24,zt,"center"),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,pt-30,12,24,he,"right");const r=ur-12,a=ya-8,o=68;this.routes.forEach((_,g)=>{const p=g===this.routeIdx,x=Ye+g%3*ur,M=va+Math.floor(g/3)*ya-(p?3:0);p&&t.rect(x+5,M+6,r,a,0),t.postcard(_.id,x,M,r,o,this.clock),t.rect(x,M+o,r,a-o,p?2759248:1052712);const v=`${_.lines[0]} ${_.lines[1]}`,E=v.length<=15?16:12;t.text(v,x+r/2,M+o+(a-o-E)/2+1,E,p?zt:_.card[1],"center"),p||t.shade(x,M,r,a,.35);const w=p?e?zt:Nt:3816026,T=p?4:2;t.rect(x-T,M-T,r+T*2,T,w),t.rect(x-T,M+a,r+T*2,T,w),t.rect(x-T,M,T,a,w),t.rect(x+r,M,T,a,w)});const l=this.world.route,c=262;t.shade(Ye-4,c,3*ur-4,58,.72),t.sky(l.night,Ye+12,c+13),t.text(`${l.lines[0]} ${l.lines[1]}`,Ye+30,c+6,16,Nt);const h=((s=vr.find(_=>_.id===l.music))==null?void 0:s.name)??"";t.note(pt-Ye-8-h.length*8-14,c+12,Pn),t.text(h,pt-Ye-8,c+9,8,Pn,"right");const d=Ye+70,u=pt-Ye-70,f=c+34;if(t.rect(d,f-1,u-d,2,5921418),l.stageNames.forEach((_,g)=>{const p=d+(u-d)*g/(l.stageNames.length-1);t.rect(p-4,f-4,8,8,g===0?yn:g===l.stageNames.length-1?zt:Se),t.text(_,p,f+9,8,g===0?yn:Nt,"center")}),[["arcade","ARCADE","BEAT THE CLOCK","clock"],["rivals","VS RIVALS","8-CAR RACE","flag"],["online","ONLINE","RACE REAL PLAYERS","globe"]].forEach(([_,g,p,x],M)=>{const v=s0+M*r0,E=_===this.mode;t.box(v,ys,fx,Ho,E?2759248:1315880,E?e?Pn:Nt:3816026,E?4:2),t.icon(x,v+26,ys+Ho/2,E?zt:me),t.text(g,v+48,ys+9,16,E?zt:me),t.text(p,v+48,ys+29,8,E?Nt:me)}),t.box(pt/2-120,Ln,240,46,1739322,e?zt:Nt),t.text(this.touch?"TAP TO GO":"ENTER  GO",pt/2,Ln+15,16,Nt,"center"),this.touch)t.text("TAP A ROUTE",Ye,Ln+12,8,me),t.text("TAP IT AGAIN TO GO",Ye,Ln+26,8,me);else{let _=Ye;_+=t.keycap(_,Ln+13,"←",18)+3,_+=t.keycap(_,Ln+13,"→",18)+3,t.text("ROUTE",_+5,Ln+18,8,Nt),t.text("MODE",pt-Ye,Ln+18,8,Nt,"right"),_=pt-Ye-38-5*8-6,_+=t.keycap(_,Ln+13,"↑",18)+3,t.keycap(_,Ln+13,"↓",18)}break}case"carselect":{const r=this.spec,a=a0,o=!this.touch;t.text(this.touch?"< BACK":"ESC BACK",20,14,16,me),t.text("SELECT  YOUR  CAR",pt/2,12,24,zt,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,pt-30,12,24,he,"right"),t.text(r.make,pt/2,46,16,Se,"center"),t.text(r.name,pt/2,66,r.name.length>14?24:32,Nt,"center");const l=`${r.year}  ${r.group}`,c=l.length*8+20;t.box(pt/2-c/2,104,c,18,2759248,Pn,1),t.text(l,pt/2,109,8,Pn,"center");const h=Ke.length,d=pt/2-h*16/2;for(let g=0;g<h;g++)t.rect(d+g*16+(g===this.carIdx?0:3),130+(g===this.carIdx?0:3),g===this.carIdx?12:6,g===this.carIdx?12:6,g===this.carIdx?zt:5921418);t.chip(a.arrowX,a.arrowY,a.arrowW,a.arrowH,"←",e?zt:Nt,8,1315880),t.chip(pt-a.arrowX-a.arrowW,a.arrowY,a.arrowW,a.arrowH,"→",e?zt:Nt,8,1315880),o&&(t.text("PREV",a.arrowX+a.arrowW/2,a.arrowY+a.arrowH+6,8,me,"center"),t.text("NEXT",pt-a.arrowX-a.arrowW/2,a.arrowY+a.arrowH+6,8,me,"center")),t.shade(a.lx,a.py,300,a.ph,.68),t.text("PERFORMANCE",a.lx+12,a.py+8,8,zt),[["SPEED",(r.stats.vmax-260)/90,ae,`${r.stats.vmax}KM/H`],["ACCEL",(r.stats.accel-.85)/.3,he,""],["GRIP",(r.stats.grip-.82)/.38,yn,""]].forEach(([g,p,x,M],v)=>{const E=a.py+26+v*22;t.text(g,a.lx+12,E+2,8,Nt);const w=Math.round(Math.max(.1,Math.min(1,p))*12);for(let T=0;T<12;T++)t.rect(a.lx+64+T*12,E,10,12,T<w?x:2105408);M&&t.text(M,a.lx+288,E+2,8,Nt,"right")});const f=pt-a.lx-300;t.shade(f,a.py,300,a.ph,.68),t.text("PAINT",f+12,a.paintY+3,16,Nt);const m=r.paints.length;r.paints.forEach((g,p)=>{const x=p===this.paintIdx%m,M=f+a.swX+p*24;t.rect(M-2,a.paintY-2,22,20,x?zt:3816026),t.rect(M,a.paintY,18,16,g)}),o&&(t.keycap(f+300-46,a.paintY,"↑"),t.keycap(f+300-28,a.paintY,"↓"));const _=(g,p,x,M,v,E)=>this.settingRow(f+12,g,f+a.minusX,f+a.plusX,o?f+300-34:-1,p,x,M,v,E);_(a.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),this.mode==="rivals"&&(_(a.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),_(a.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1),_(a.rockY,"ROCKETS",String(this.rocketCount),this.weaponsSetting,"K",!1)),t.note(a.lx+10,a.goY+21,Pn),t.text(this.musicLabel(),a.lx+24,a.goY+12,8,Pn),o?(t.keycap(a.lx+24,a.goY+26,"N"),t.text("CHANGE SONG",a.lx+46,a.goY+30,8,me)):t.text("TAP TO CHANGE",a.lx+24,a.goY+28,8,me),t.box(pt/2-130,a.goY,260,48,1739322,e?zt:Nt),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",pt/2,a.goY+16,16,Nt,"center"),t.text(this.touch?"TAP THE CAR: NEXT PAINT":"CAR",pt-a.lx,a.goY+18,8,me,"right"),o&&(t.keycap(pt-a.lx-70,a.goY+14,"←",18),t.keycap(pt-a.lx-49,a.goY+14,"→",18));break}case"name":{t.text("ONLINE  RACE",pt/2,20,24,zt,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const r=3-Math.floor(this.t);r>0&&t.text(String(r),pt/2,180,64,r===1?ae:zt,"center"),t.text(n.stageNames[0],pt/2,280,16,Nt,"center"),this.countdownHelp()}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${ha(this.place)} PLACE`,pt/2,150,64,this.place===1?zt:Se,"center"),t.text(Wh(this.finishTime),pt/2,240,24,Nt,"center")):this.state==="goal"&&(t.text("GOAL!",pt/2,140,64,zt,"center"),t.text("CONGRATULATIONS",pt/2,230,24,Se,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,pt/2,280,16,Nt,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",pt/2,330,24,zt,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",pt/2,180,48,ae,"center"),this.wrecked&&t.text("ENGINE BLOWN",pt/2,240,24,he,"center")):(t.text("GAME OVER",pt/2,170,48,ae,"center"),t.text(`SCORE ${this.score}`,pt/2,250,24,Nt,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",pt/2,310,24,zt,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(pt/2-200,146,400,34,1052720,Pn,3),t.text(`MUSIC  ${this.musicLabel()}`,pt/2,156,16,Nt,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,pt/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?zt:Se,"center"),this.msg2&&t.text(this.msg2,pt/2,200,24,zt,"center")),this.paused&&(t.box(pt/2-220,150,440,170,1052720,Nt),t.text("PAUSE",pt/2,180,32,zt,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",pt/2,230,16,Nt,"center"),t.text(this.touch?"RESTART":"R  RESTART",pt/2,260,16,Nt,"center"),t.text(this.touch?"QUIT":"Q  QUIT",pt/2,290,16,Nt,"center"))}}if(this.clock<this.noticeUntil){const r=this.notice.length*8+40;t.box(pt/2-r/2,244,r,34,1052720,he,3),t.text(this.notice,pt/2,257,8,Nt,"center")}this.clock<this.muteToast&&(t.box(pt/2-110,196,220,40,1052720,this.audio.muted?ae:yn,3),t.text(this.audio.muted?"SOUND OFF":"SOUND ON",pt/2,208,16,Nt,"center")),this.audio.muted&&(t.box(8,Ne-19,62,15,1052720,ae,1),t.text("MUTED",39,Ne-15,8,ae,"center"))}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",pt/2,14,24,zt,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...",o=(n==null?void 0:n.status)==="online"?n.servers():null,l=(n==null?void 0:n.status)==="online"&&n.serversDown(),c=(n==null?void 0:n.status)==="online"?n.links():null,h=!!c&&!r.length&&c.failed>0&&c.linked===0,d=l?"CAN'T REACH THE MATCHMAKING SERVERS":h?"FOUND A PLAYER BUT COULD NOT CONNECT":a;if(e.text(d,pt/2,46,16,(n==null?void 0:n.status)==="error"||l?ae:h?he:Se,"center"),(n==null?void 0:n.status)==="online"){const b=[`ROOM ${n.room.toUpperCase()}`];o&&b.push(`SERVERS ${o[0]}/${o[1]}`),c&&b.push(`FOUND ${c.found}`,`LINKED ${c.linked}`,`FAILED ${c.failed}`,`RELAY ${n.relay()?"ON":"OFF"}`),e.text(b.join("   "),pt/2,467,8,c&&c.failed&&!c.linked?he:me,"center")}const u=ba,f=!this.touch;e.shade(u.x0,68,u.x1-u.x0,322),e.chip(u.x0+6,u.carY+4,30,u.carH-8,"←",zt),e.chip(u.x1-36,u.carY+4,30,u.carH-8,"→",zt),e.text(s.make,u.mid,u.carY+2,16,Se,"center");const m=s.name.length<=11;e.text(s.name,u.mid,u.carY+(m?20:24),m?24:16,Nt,"center");const _=s.paints.length,g=u.mid-(_*22-6)/2;s.paints.forEach((b,P)=>{const z=P===this.paintIdx%_;e.rect(g+P*22-2,u.paintY-2,20,16,z?zt:3816026),e.rect(g+P*22,u.paintY,16,12,b)}),f&&(e.keycap(u.x0+12,u.paintY-2,"←"),e.keycap(u.x0+30,u.paintY-2,"→"),e.text("CAR",u.x0+52,u.paintY+2,8,me),e.text("PAINT",u.x1-48,u.paintY+2,8,me,"right"),e.keycap(u.x1-44,u.paintY-2,"↑"),e.keycap(u.x1-26,u.paintY-2,"↓"));const p=(n==null?void 0:n.status)==="online"?n.host():null,x=!p||p.id===(n==null?void 0:n.selfId),M=(b,P,z,H,W,tt)=>this.settingRow(u.x0+12,b,u.minusX,u.plusX,f&&x?u.x1-34:-1,P,z,H,W,tt,!x);M(u.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),M(u.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),M(u.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1),M(u.rockY,"ROCKETS",String(this.rocketCount),this.weaponsSetting,"K",!1),x?e.text(r.length?"YOU ARE THE HOST: YOU SET THE RACE":"FIRST IN IS THE HOST: YOU SET THE RACE",u.mid,230,8,he,"center"):e.text(`SET BY THE HOST, ${(p==null?void 0:p.name)??""}`,u.mid,230,8,he,"center"),[["SPEED",(s.stats.vmax-260)/90,ae],["ACCEL",(s.stats.accel-.85)/.3,he],["GRIP",(s.stats.grip-.82)/.38,yn]].forEach(([b,P,z],H)=>{const W=244+H*11;e.text(b,40,W+1,8,zt);const tt=Math.round(Math.max(.1,Math.min(1,P))*12);for(let O=0;O<12;O++)e.rect(96+O*11,W,9,8,O<tt?z:2105408)}),e.text(`${s.stats.vmax} KM/H`,236,245,8,Nt),e.rect(u.x0+8,280,u.x1-u.x0-16,1,3816026),e.text(f?"DRIVING KEYS":"DRIVING BUTTONS",u.mid,285,8,zt,"center"),f?this.keyGuide(40,298):this.buttonGuide(u.x0+10,297);const E=pt-320,w=70;e.box(E,w,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",E+14,w+12,16,zt);const T=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0,host:x},...r.map(b=>({name:b.name,car:Ke[b.car%Ke.length].name,st:b.status==="race"?"RACING":"READY",me:!1,host:b.id===(p==null?void 0:p.id)}))];T.slice(0,8).forEach((b,P)=>{const z=w+40+P*34;e.text(b.name,E+14,z,16,b.me?zt:Nt),b.host&&(e.box(E+190,z+1,44,14,3810320,he,1),e.text("HOST",E+212,z+4,8,he,"center")),x&&!b.me&&e.chip(E+230,z+15,60,15,"REMOVE",ae,8,2756628),e.text(b.st,E+286,z+4,8,b.st==="RACING"?he:b.me?zt:4251712,"right"),e.text(b.car,E+14,z+19,8,9079464)}),T.length>8&&e.text(`+${T.length-8} MORE`,E+14,w+40+8*34,8,Nt);const R=this.world.route;if(e.box(20,410,250,50,1315880,Nt,3),e.text(x?`${this.touch?"TAP":"R"}  ROUTE`:"HOST'S ROUTE",145,418,8,9079464,"center"),e.text(`${R.lines[0]} ${R.lines[1]}`.slice(0,15),145,434,16,zt,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",pt/2,320,8,Nt,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",pt/2,340,16,Se,"center"),e.box(pt/2-150,410,300,50,1727160,t?zt:Nt),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",pt/2,427,16,Nt,"center");return}if(this.pending){const b=Math.max(1,Math.ceil(this.pending.at-Gi()));e.text("STARTING IN",pt/2,170,24,Se,"center"),e.text(String(b),pt/2,206,64,zt,"center");const P=this.routes[this.pending.go.route]??this.world.route;e.text(`${P.lines[0]} ${P.lines[1]}`,pt/2,284,16,Nt,"center");const z=this.pending.go;e.text(`TURBOS ${z.turbos}   WEAPONS ${z.weapons?`ON  AMMO ${z.ammo}  ROCKETS ${z.rockets}`:"OFF"}`,pt/2,308,16,z.weapons?he:zt,"center");return}r.some(b=>b.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",pt/2,395,8,he,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",pt/2,395,8,Nt,"center");const S=(n==null?void 0:n.status)==="online";e.box(pt/2-150,410,300,50,S?1739322:2105392,S&&t?zt:Nt),e.text(this.touch?"TAP TO START":"ENTER  START",pt/2,427,16,S?Nt:9079464,"center")}settingRow(t,e,n,s,r,a,o,l,c,h,d=!1){const u=this.hud,f=ba.chipH;if(u.text(a,t,e+3,16,l?zt:me),d){u.text(o,(n+s+28)/2,e+3,16,h?l?he:me:l?Nt:me,"center");return}h?u.chip(n,e,s+28-n,f,o,l?he:me,16,l?5909008:1710650):(u.chip(n,e,28,f,"←",l?Se:me),u.text(o,(n+s+28)/2,e+3,16,l?Nt:me,"center"),u.chip(s,e,28,f,"→",l?Se:me)),r>=0&&u.keycap(r,e+1,c,18)}keyGuide(t,e){const n=this.hud,s=this.weaponsSetting;[[[["↑"],"GAS",yn],[["SPACE"],"DRIFT",Se]],[[["↓"],"BRAKE",ae],[["SHIFT"],"TURBO",he]],[[["←","→"],"STEER",Nt],[["F"],s?"GUN":"GUN (OFF)",s?ae:me]],[[["ESC"],"PAUSE",me],[["E"],s?"ROCKET":"ROCKET (OFF)",s?he:me]],[[["M"],"MUTE",me],[["N"],"MUSIC",Pn]]].forEach((a,o)=>a.forEach(([l,c,h],d)=>{let u=t+d*168;for(const f of l)u+=n.keycap(u,e+o*17,f,15)+3;n.text(c,u+5,e+o*17+4,8,h)}))}buttonGuide(t,e){const n=this.hud,s=330,r=88,a=this.weaponsSetting;n.box(t,e,s,r,657946,3816026,1),n.text("STEER",t+45,e+r-50,8,Nt,"center"),n.chip(t+8,e+r-38,34,30,"←",Nt),n.chip(t+48,e+r-38,34,30,"→",Nt);const o=t+s-66,l=t+s-128;a&&n.chip(l,e+6,56,18,"FIRE",ae),n.chip(l,e+28,56,18,"DRIFT",Se),n.chip(l,e+50,56,30,"BRAKE",ae),a&&n.chip(o,e+4,58,16,"ROCKET",he),n.chip(o,e+24,58,20,"TURBO",he),n.chip(o,e+48,58,32,"GAS",yn),n.text("MUSIC AUTO II",t+140,e+8,8,me,"center"),n.text("AUTO GAS",t+140,e+30,8,yn,"center"),n.text("IS ON",t+140,e+42,8,yn,"center"),n.text("TAP AUTO",t+140,e+58,8,me,"center"),n.text("TO TURN OFF",t+140,e+70,8,me,"center")}crosshair(){const t=this.hud,e=this.lineOfFire(this.pos,this.px,"player"),n=e.hit!==null&&e.hit!==-3,s=n||e.hit===-3?this.world.roadScreenPos(e.d,e.x,.9,this.camera,pt,Ne):this.world.roadScreenPos(this.pos+45,this.px,.9,this.camera,pt,Ne);if(!s)return;const r=n?ae:Nt,a=Math.round(Math.max(16,Math.min(34,(n?900:1100)/s.dist))),o=Math.round(s.x),l=Math.round(s.y),c=(h,d)=>{const u=3+h*2,f=9+h*2;for(const[m,_]of[[-1,-1],[1,-1],[-1,1],[1,1]])t.rect(o+m*a-(m>0?f-h:h),l+_*a-(_>0?u-h:h),f,u,d),t.rect(o+m*a-(m>0?u-h:h),l+_*a-(_>0?f-h:h),u,f,d);t.rect(o-a-12-h,l-1-h,8+h*2,u,d),t.rect(o+a+4-h,l-1-h,8+h*2,u,d),t.rect(o-1-h,l-a-12-h,u,8+h*2,d),t.rect(o-1-h,l+a+4-h,u,8+h*2,d),t.rect(o-1-h,l-1-h,u,u,d)};c(1,0),c(0,r)}testPanel(){const t=this.hud,e=14,n=118,s=270,r=this.world.rivals;t.shade(e-6,n-6,s,36+(r.length+1)*10+this.testLog.length*10+16,.7),t.text("TEST: PLAYER RULES",e,n,8,he),t.text(`YOU ${(100-this.hp).toFixed(1)}% DAMAGE`,e,n+11,8,wa(1-this.hp/100)),this.testScrape>.05&&t.text(`WALLS ${this.testScrape.toFixed(1)}`,e+s-12,n+11,8,Se,"right"),t.text("CAR       DMG   YOU>  >YOU",e,n+25,8,me),r.forEach((o,l)=>{const c=n+35+l*10,h=100-o.hp,d=this.testDealt.get(o.name)??0,u=this.testTaken.get(o.name)??0,f=o.wrecked?ae:Nt;t.text(o.name.slice(0,8),e,c,8,f),t.text(o.wrecked?"WRECK":`${h.toFixed(0)}%`,e+112,c,8,f,"right"),t.text(d.toFixed(1),e+168,c,8,zt,"right"),t.text(u.toFixed(1),e+224,c,8,ae,"right"),t.text(`R${o.rockets??0}`,e+252,c,8,he,"right")});const a=n+41+r.length*10;this.testLog.forEach((o,l)=>t.text(o.n>1?`${o.text} x${o.n}`:o.text,e,a+l*10,8,o.col))}countdownHelp(){const t=this.hud,e=this.weapons,n=318;if(this.touch){const l=[["STEER LEFT THUMB",Nt],["GAS",yn],["BRAKE",ae],["DRIFT",Se],["TURBO",he]];e&&l.push(["FIRE",ae],["ROCKET",he]);const c=l.map(([u])=>u.length*8+16),h=c.reduce((u,f)=>u+f,0)+(l.length-1)*8;let d=pt/2-h/2;t.shade(d-8,n-6,h+16,34,.5),l.forEach(([u,f],m)=>{t.chip(d,n,c[m],22,u,f),d+=c[m]+8});return}const s=[[["↑"],"GAS",yn],[["↓"],"BRAKE",ae],[["←","→"],"STEER",Nt],[["SPACE"],"DRIFT",Se],[["SHIFT"],"TURBO",he]];e&&s.push([["F"],"GUN",ae],[["E"],"ROCKET",he]);const r=l=>l[0].reduce((c,h)=>c+t.keyW(h,18)+3,0)+5+l[1].length*8,a=s.reduce((l,c)=>l+r(c),0)+(s.length-1)*18;let o=pt/2-a/2;t.shade(o-10,n-6,a+20,32,.5);for(const l of s){let c=o;for(const h of l[0])c+=t.keycap(c,n,h,18)+3;t.text(l[1],c+5,n+5,8,l[2]),o+=r(l)+18}}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,pt,Ne);if(!s||s.dist>140)return;const r=Math.max(0,Math.min(1,(75-s.dist)/60)),a=Math.round(5+11*r);t.text(e.wrecked?`${e.name} WRECKED`:e.name,s.x,s.y-a,a,e.wrecked?ae:e.finished>=0?zt:Nt,"center");const o=Math.round(14+50*r),l=Math.round(2+4*r),c=Math.min(1,1-e.hp/100),h=s.x-o/2,d=s.y+1+Math.round(3*r);t.rect(h-1,d-1,o+2,l+2,0),t.rect(h,d,o*c,l,wa(c))})}resultsTable(t){const e=this.hud,n=pt/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?zt:Nt,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${ha(this.place)}`;e.text(a,pt/2,r+16,16,this.finishTime<0?ae:zt,"center"),this.table.forEach((o,l)=>{const c=r+52+l*30;o.player&&e.rect(n+10,c-6,s-20,28,3811952);const h=o.player?zt:Nt;e.text(ha(o.pos),n+24,c,16,o.pos===1?he:h),e.text(o.name,n+110,c,16,h),e.text(o.car,n+230,c,16,o.player?zt:Se);const d=Number.isFinite(o.time)?(o.estimated?"~":" ")+Wh(o.time):"DNF";e.text(d,n+s-24,c,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",pt/2,r+340,16,zt,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,zt),e.text(String(this.score).padStart(8,"0"),20,38,16,Nt),e.text("TIME",pt/2,12,16,zt,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),pt/2,34,48,r?ae:he,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,pt-20,16,16,zt,"right");const a=Math.max(0,(this.pos-3*Qt)/1e3);if(e.text(`${a.toFixed(1)}KM`,pt-20,38,16,Nt,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const E=ha(this.place),w=this.touch?84:pt/2-52,T=this.touch?222:90;e.text("POS",w-12,T+8,16,zt,"right"),e.text(E,w,T,32,this.place===1?zt:Nt),e.text(`/${this.world.rivals.length+1}`,w+E.length*32+4,T+16,16,Nt)}if(this.state==="race"){const E=Math.round(this.catchUp*100);if(E>=1){const w=`CATCH-UP +${E}%`,T=w.length*8+16;e.box(pt/2-T/2,128,T,16,666170,Se,1),e.text(w,pt/2,132,8,Se,"center")}this.slipT>0?e.text("SLIPSTREAM",pt/2,150,16,Math.floor(this.clock*8)%2?Nt:Se,"center"):this.tow>.05&&(e.text("SLIPSTREAM",pt/2-54,151,8,Se,"right"),e.rect(pt/2-46,150,92,10,0),e.rect(pt/2-45,151,90*this.tow,8,Se))}{const T=this.touch?20:pt-20-170,R=this.touch?this.mode!=="arcade"?270:236:64,S=Math.min(1,1-this.hp/100),b=wa(S),P=this.hp<25&&this.state==="race";e.text("DAMAGE",T,R,16,P&&t?ae:zt);const z=this.hp>=100?0:Math.max(1,Math.ceil(S*10));for(let H=0;H<10;H++)e.rect(T+H*17,R+22,15,12,H<z&&(!P||t)?b:2105408)}const o=Math.round(this.speed*Sa),l=this.touch,c=l?70:Ne-92;e.text("SPEED",20,c,16,zt),e.text(String(o).padStart(3," "),20,c+26,32,Nt),e.text("KM/H",130,c+42,16,Se),l?e.tach(20,c+100,this.speed/this.vmax):e.tach(220,Ne-24,this.speed/this.vmax);const h=l?20:220,d=l?c+112:Ne-80;e.text("TURBO",h,d,16,this.turboT>0&&t?Nt:he);const u=this.raceTurbos,f=u>5?13:20,m=f+(u>5?4:6);for(let E=0;E<u;E++)e.box(h+92+E*m,d-2+(20-f)/2,f,f,E<this.turbos?he:2105392,E<this.turbos?zt:4210776,u>5?2:3);if(this.turboT>0&&e.rect(h+92,d+22,this.turboT/Hc*(u*m-6),5,zt),this.weapons){const E=l?20:pt-190,w=l?314:106;e.text("AMMO",E,w,16,this.ammo?Se:ae),e.text(String(this.ammo).padStart(3,"0"),E+120,w,16,Nt);const T=Math.ceil(this.ammo/Math.max(1,this.raceAmmo)*30);for(let R=0;R<30;R++)e.rect(E+R*5.6,w+22,3,10,R<T?zt:3158080);e.text(this.touch?"ROCKET":"E ROCKET",E,w+40,8,this.rockets?he:6974074);for(let R=0;R<this.raceRockets;R++){const S=E+80+R*18,b=R<this.rockets;e.rect(S,w+41,10,5,b?6978106:3158080),e.rect(S+10,w+41,4,5,b?ae:3158080),e.rect(S-3,w+39,3,9,b?2763306:3158080)}if(this.rocketMsgT>0&&e.text("NO ROCKETS LEFT",pt/2,150,16,ae,"center"),this.lastHitT>0&&this.lastGunTarget!==null&&this.state==="race"){const R=this.world.rivals[this.lastGunTarget],S=R&&!R.remote?this.world.rivalScreenPos(this.lastGunTarget,this.camera,pt,Ne):null;if(S){const P=S.x-22,z=S.y-14,H=Math.min(1,1-R.hp/100);e.rect(P-1,z-1,46,7,0),e.rect(P,z,44*H,5,wa(H))}}this.firingT>0&&this.state==="race"&&!this.wrecked&&this.crosshair(),this.noTargetT>0&&e.text("OUT OF AMMO",pt/2,124,16,ae,"center"),this.testPvp&&this.testPanel(),this.hitFlash>0&&(e.rect(0,0,pt,6,ae),e.rect(0,Ne-6,pt,6,ae),e.rect(0,0,6,Ne,ae),e.rect(pt-6,0,6,Ne,ae))}const _=l?pt/2-120:pt-250,g=l?pt/2+120:pt-24,p=l?118:Ne-34;e.text("COURSE",_,p-26,16,zt),e.rect(_,p,g-_,8,2105408);const x=this.world.track.goalDist,M=this.world.track.stageStarts;for(const E of M)e.rect(_+E*Qt/x*(g-_)-1,p-4,4,16,Nt);const v=Math.min(1,this.pos/x);e.rect(_,p,v*(g-_),8,Pn),e.rect(_+v*(g-_)-4,p-6,8,20,zt),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],g,p+14,8,Nt,"right")}}class bx{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class Sx{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const l of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(l,c=>c.stopPropagation());r.addEventListener("input",()=>{const l=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");l!==r.value&&(r.value=l)}),n.addEventListener("submit",l=>{var h;l.preventDefault();const c=Vc(r.value);if(!c){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,c)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}class Vs{constructor(){this.group=new nn,this.layers=[],this.sun=null,this.tmp=new K}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const mn=(i={})=>new Ve({vertexColors:!0,fog:!1,side:_e,...i}),d0=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},wx=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},Ex=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function Ws(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=f=>"#"+f.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=f=>{if(f<=i[0][0])return i[0][1];for(let m=1;m<i.length;m++)if(f<=i[m][0])return Ex(i[m-1][1],i[m][1],(f-i[m-1][0])/(i[m][0]-i[m-1][0]));return i[i.length-1][1]},l=ue.modern,c=l?.09:e;for(let f=0;f<90;f+=c*(f<20||l?1:3)){const _=2048*(90-Math.min(90,f+c*(f<20||l?1:3)))/180,g=2048*(90-f)/180;r.fillStyle=a(l?o(f):wx(o(f))),r.fillRect(0,Math.floor(_),2,Math.ceil(g-_)+1)}const h=new Cr(s);h.magFilter=l?pn:je,h.minFilter=l?pn:je,h.generateMipmaps=!1,h.colorSpace=He;const d=new Os(2800,24,90),u=new Jt(d,new Ve({map:h,fog:!1,side:sn,depthWrite:!1}));return u.renderOrder=-10,u}const Yt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function Hn(i,t,e,n,s,r,a=40,o=[6,18]){const l=new dt,c=240,h=new Float32Array(c+1);for(let d=0;d<a;d++){const u=i.next()*c,f=i.range(.3,1)*n,m=i.range(o[0],o[1]);for(let _=0;_<=c;_++){let g=Math.abs(_-u);g=Math.min(g,c-g),h[_]=Math.max(h[_],f*Math.max(0,1-g/m))}}for(let d=0;d<c;d++){const u=d/c*Math.PI*2,f=(d+1)/c*Math.PI*2,m=h[d]*s(u),_=h[d+1]*s(f);if(!(m<1&&_<1)){if(ue.modern){const g=x=>d0(e,.86+.26*Math.min(1,x/n)),p=d0(e,.78);l.quadC(Yt(t,u,0,-60),Yt(t,f,0,-60),Yt(t,f,0,_),Yt(t,u,0,m),[p,p,g(_),g(m)])}else l.quad(Yt(t,u,0,-60),Yt(t,f,0,-60),Yt(t,f,0,_),Yt(t,u,0,m),e);if(r!==void 0){const g=n*.72;m>g&&_>g&&l.quad(Yt(t-1,u,0,m-(m-g)*.6),Yt(t-1,f,0,_-(_-g)*.6),Yt(t-1,f,0,_),Yt(t-1,u,0,m),r)}}}return new Jt(l.build(),mn())}function Tx(i,t,e,n,s,r=22){const a=new dt,o=360,l=new Float32Array(o+1);for(let c=0;c<r;c++){const h=i.next()*o,d=i.range(.35,1)*n,u=i.range(2,9),f=i.range(1.2,2.6);for(let m=0;m<=o;m++){let _=Math.abs(m-h);_=Math.min(_,o-_);const g=_<u?d:d*Math.max(0,1-(_-u)/f);l[m]=Math.max(l[m],g)}}for(let c=0;c<o;c++){const h=c/o*Math.PI*2,d=(c+1)/o*Math.PI*2,u=l[c]*s(h),f=l[c+1]*s(d);if(u<1&&f<1)continue;const m=e.length;let _=-60,g=-60;for(let p=0;p<m;p++){const x=(p+1)/m,M=p===m-1?u:u*x,v=p===m-1?f:f*x;a.quad(Yt(t,h,0,_),Yt(t,d,0,g),Yt(t,d,0,v),Yt(t,h,0,M),e[p]),_=M,g=v}}return new Jt(a.build(),mn())}function Xs(i,t,e=500){const n=new yi(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new Jt(n,new Ve({color:t,fog:!1,side:_e}))}function Ja(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=Yt(i,t,0,n);return new K(s,r,a)}function qs(i,t,e,n,s,r=20){const a=new dt,o=Math.tan(e*Math.PI/180)*i;if(ue.modern){const l=Math.max(r,40),c=[...s].sort((d,u)=>u[0]-d[0]),h=(d,u)=>Yt(i,t,Math.cos(u)*n*d,o+Math.sin(u)*n*d);for(let d=0;d<c.length;d++){const[u,f]=c[d],[m,_]=d+1<c.length?c[d+1]:[0,c[d][1]];for(let g=0;g<l;g++){const p=g/l*Math.PI*2,x=(g+1)/l*Math.PI*2;a.quadC(h(u,p),h(u,x),h(m,x),h(m,p),[f,f,_,_])}}return new Jt(a.build(),mn())}for(const[l,c]of s){const h=[];for(let d=0;d<r;d++){const u=d/r*Math.PI*2;h.push(Yt(i,t,Math.cos(u)*n*l,o+Math.sin(u)*n*l))}a.poly(h,c),i-=2}return new Jt(a.build(),mn())}function ji(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new dt,[l,c,h]=n,d=(u,f,m,_,g,p,x,M=0,v=Math.PI*2)=>{const E=[],w=ue.modern?24:12;for(let T=0;T<=w;T++){const R=M+(v-M)*T/w;E.push(Yt(u,f,m+Math.cos(R)*g,_+Math.sin(R)*p))}o.poly(E,x)};for(let u=0;u<e;u++){const f=i.range(s,r),m=i.range(a[0],a[1]),_=Math.tan(m*Math.PI/180)*t,g=i.range(140,340),p=i.int(4,8),x=t-u*6;d(x,f,0,_,g*.9,16,h,Math.PI,Math.PI*2);for(let M=0;M<p;M++){const v=i.range(-g,g)*.65,E=i.range(0,34)*(1-Math.abs(v)/g),w=i.range(45,100),T=w*i.range(.5,.7),R=x-1-M*.3;d(R,f,v,_+E,w,T,c,0,Math.PI),d(R-.1,f,v-w*.15,_+E+T*.2,w*.7,T*.65,l,.2,Math.PI)}}return new Jt(o.build(),mn())}function Qa(i,t,e,n,s,r,a=.6,o=.25){const l=new dt,c=new dt,h=420;for(let u=0;u<h;u++){const f=u/h*Math.PI*2+i.range(-.004,.004),m=r(f);if(m<=0||!i.chance(a))continue;const _=i.range(14,40),g=i.range(.15,1)*s*m*(i.chance(.1)?1.4:1),p=t-i.range(0,60),x=i.pick(e);if(l.quad(Yt(p,f,-_/2,-40),Yt(p,f,_/2,-40),Yt(p,f,_/2,g),Yt(p,f,-_/2,g),x),i.chance(.25)){const M=_*.5;l.quad(Yt(p,f,-M/2,g),Yt(p,f,M/2,g),Yt(p,f,M/2,g+g*.2),Yt(p,f,-M/2,g+g*.2),x)}if(n.length){for(let M=6;M<g-4;M+=7)for(let v=-_/2+3;v<_/2-3;v+=5){if(!i.chance(o))continue;const E=i.pick(n);c.quad(Yt(p-1,f,v,M),Yt(p-1,f,v+2.6,M),Yt(p-1,f,v+2.6,M+3.4),Yt(p-1,f,v,M+3.4),E)}g>s*.6&&i.chance(.6)&&c.quad(Yt(p-1,f,-1.5,g+1),Yt(p-1,f,1.5,g+1),Yt(p-1,f,1.5,g+4),Yt(p-1,f,-1.5,g+4),16719904)}}const d=new nn;return d.add(new Jt(l.build(),mn())),c.empty||d.add(new Jt(c.build(),mn())),d}function yu(i,t){const e=[],n=[],s=new Ot;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,l=i.range(12,75)*(Math.PI/180),c=2600;e.push(Math.sin(o)*Math.cos(l)*c,Math.sin(l)*c,-Math.cos(o)*Math.cos(l)*c),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new We;return r.setAttribute("position",new we(e,3)),r.setAttribute("color",new we(n,3)),new Ng(r,new tu({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function Ax(i,t,e,n,s,r){const a=new dt,o=(l,c)=>Yt(i,t,l,c);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(l=>[l[0],l[1],l[2]]).reverse(),r),new Jt(a.build(),mn())}function bu(i,t,e,n,s){const r=new dt;for(let a=0;a<s;a++){const o=i.range(e,n),l=i.range(.8,1.4),c=t-a*4,h=(d,u)=>Yt(c,o,d*l,u*l-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new Jt(r.build(),mn())}function Rx(i,t){const e=new dt,n=new dt,s=(a,o)=>Yt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,l=o+9,c=7-a*.6,h=7-(a+1)*.6;e.poly([s(-c,o),s(c,o),s(h,l),s(-h,l)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new nn;return r.add(new Jt(e.build(),mn()),new Jt(n.build(),mn())),r}function Su(i,t,e,n){const s=new dt;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),l=i.range(-o,o),c=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(Yt(t,e,l-c,a),Yt(t,e,l+c,a),Yt(t,e,l+c,a+.9),Yt(t,e,l-c,a+.9),h)}return new Jt(s.build(),mn())}function Cx(i,t,e){const n=new dt;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,l]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(Yt(t,r,o-1.2,a-1.2),Yt(t,r,o+1.2,a-1.2),Yt(t,r,o+1.2,a+1.2),Yt(t,r,o-1.2,a+1.2),l)}return new Jt(n.build(),mn())}function Zn(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const Dn=12589072,Nn=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(l=>l.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},Ys={golf:Nn("golf","VW GOLF MK2",Zn({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:Dn}],.55),volvo240:Nn("volvo240","VOLVO 240 ESTATE",Zn({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:Dn}],.6),ae86:Nn("ae86","TOYOTA AE86",Zn({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:Dn}],.52),cherokee:Nn("cherokee","JEEP CHEROKEE XJ",Zn({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:Dn}],.7,.36),caprice:Nn("caprice","CHEVROLET CAPRICE",Zn({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:Dn}],.6),w124:Nn("w124","MERCEDES W124",Zn({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:Dn}],.62),f150:Nn("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:Dn}],.65,.38),crown:Nn("crown","TOYOTA CROWN",Zn({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:Dn}],.62),cedric:Nn("cedric","NISSAN CEDRIC",Zn({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:Dn}],.6),every:Nn("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:Dn}],.6,.27),civic:Nn("civic","HONDA CIVIC EF",Zn({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:Dn}],.5)};function Vn(i,t={}){if(ue.modern)return Px(i,t);const e=fu(i,16777215,!0);q2(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(l=>l.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:pl(i,.8).build(),mat:"halo",tint:!1}),a}function Px(i,t){const e=cu(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const l of[-1,1])n.with(new kt().makeTranslation(l*o.x,o.r,o.z),()=>lu(n,o.r,o.hw,l,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(l=>l.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:du(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:pl(i,.8).build(),mat:"halo",tint:!1}),a}class Ks{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const ti=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],f0=[16047256,15519880],Vo=[1616092,1351892],Ix=[6605900,5815364],p0=[5026876,4367414],fr=[14734532,13945016],Wo=12576482,pr={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},Lx=[16777215,14743807],Dx=[5430488,4641490],Nx={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],night:!1,hemi:[10542335,14205072],plate:16769088,smoke:16777215,card:[1727160,16771232],music:"miami",stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Wo,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:j+26,build(i){const t=new ai(1986),e=[ve(pr,[{w:4,c:fr},{w:600,c:Ix}],[{w:6,c:f0},{w:28,abs:.4,c:f0},{w:3,abs:.12,c:Lx},{w:16,abs:0,c:Dx},{w:600,abs:0,c:Vo}]),ve(pr,[{w:6,c:fr},{w:600,c:[7393880,6735440]}],[{w:6,c:fr},{w:600,c:[7393880,6735440]}]),ve(pr,[{w:1,c:fr},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Vo}],[{w:1,c:fr},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Vo}]),ve(pr,[{w:3,c:[14207120,13417604]},{w:600,c:p0}],[{w:3,c:[14207120,13417604]},{w:600,c:p0}]),ve(pr,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(ct,Dt)=>Dt?4:ct==="city"?1:ct==="causeway"?2:ct==="hills"?3:0,s=new Gs(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new Ks,o=a.add(ml()),l=a.add(J2()),c=a.add(pu()),h=a.add(gl()),d=[a.add(Bo([16724032,16777215])),a.add(Bo([2781439,16769088])),a.add(Bo([2146464,16744624]))],u=a.add(Q2()),f=[0,1,2].map(ct=>a.add(xl(ct,t))),m=a.add(Hs(8,16774336)),_=a.add(Za()),g=a.add(Z2()),p=a.add(tx()),x=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(ct=>a.add(Ir(i.add(ct,2,2),9,4.5))),M=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(ct=>a.add(mu(i.add(ct,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(ct=>a.add(ja(i.add(ct,1,1)))),E=a.add(Pe(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),w=a.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),T=a.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),R=Ys,S=[R.golf,R.volvo240,R.ae86,R.cherokee,R.caprice,R.w124,R.f150].map(ct=>a.add(Vn(ct))).concat([a.add(wi(2788095)),a.add(Ki(16734858))]),b=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),P=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),z=a.add(gu()),H=a.add(_l()),W=a.add(xu()),tt=a.add(ex()),O=a.add(_u()),it=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((ct,Dt)=>a.add(Pe(i.add(ct,4,1),16777215,Dt?16747040:2146480,16777215))),B=a.add(Ei(!0)),nt=a.add(Ei(!1)),et=Array.from({length:16},(ct,Dt)=>a.add(Ml(i.add({bg:1735226,fg:16777215,text:String(Dt+1),border:16777215},1,1)))),ot=[a.add($i(0)),a.add($i(1))],Q=a.add(Mu(t)),Ct=a.add(sx()),$=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],xt=[16726618,16769088,2789631,4251808,16777215,16747040],Tt=r.segs;for(let ct=10;ct<Tt.length;ct++){const Dt=Tt[ct],mt=Dt.props;if(Dt.tunnel){Tt[ct-1].tunnel||mt.push({t:p,x:0});continue}const Zt=Dt.zone;if(ue.modern){const G=Zt==="beach"||Zt==="beach2";ct%3===0&&(Zt==="hills"||G)&&mt.push({t:B,x:j+2.1},{t:nt,x:-13.1}),ct%167===100&&mt.push({t:et[Math.min(et.length-1,Math.floor(ct*6/1e3))],x:j+3.4,r:-.3}),G&&(ct%5===0&&t.chance(.55)&&mt.push({t:ot[1],x:j+t.range(9,26),r:t.range(0,6),tint:t.pick($)}),ct%4===1&&t.chance(.35)&&mt.push({t:ot[0],x:-(j+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick($)}),ct%40===10&&mt.push({t:Q,x:j+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),Zt==="beach2"&&ct%26===13&&t.chance(.7)&&mt.push({t:Ct,x:j+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick($)})),Zt==="city"&&ct%5===2&&t.chance(.45)&&mt.push({t:ot[0],x:t.sign()*(j+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick($)})}Math.abs(Dt.curve)>.0016&&ct%5===0&&Zt!=="causeway"&&mt.push(Dt.curve>0?{t:b,x:-16.5,r:.15}:{t:P,x:j+5.5,r:-.15}),(Zt==="beach"||Zt==="beach2"||Zt==="causeway")&&ct%23===0&&t.chance(.6)&&mt.push({t:O,x:(Zt==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Zt==="beach"||Zt==="beach2"?(ct%19===4&&t.chance(.5)&&mt.push({t:tt,x:j+t.range(10,18),r:t.range(-.5,.5)}),ct%7===0&&t.chance(.85)&&mt.push({t:o,x:j+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),ct%7===3&&t.chance(.5)&&mt.push({t:o,x:-(j+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),ct%9===0&&t.chance(Zt==="beach2"?.75:.45)&&(mt.push({t:t.pick(d),x:j+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&mt.push({t:t.pick(d),x:j+t.range(14,26),r:t.range(0,6)})),Zt==="beach2"&&ct%70===35&&mt.push({t:u,x:j+22,r:-.6}),ct%55===20&&mt.push({t:t.pick(f),x:-(j+t.range(40,70)),tint:t.pick(ti),r:t.range(-.3,.3)}),ct%80===50&&mt.push({t:t.pick(x),x:-23,r:.35}),ct%37===0&&t.chance(.5)&&mt.push({t:h,x:j+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),ct%120===60&&mt.push({t:t.pick(v),x:j+3,r:-.2})):Zt==="city"?(ct%30>3&&mt.push({t:z,x:j+9.5},{t:z,x:-20.5}),ct%16===12&&mt.push({t:H,x:j+4.5,tint:t.pick(xt)},{t:H,x:-15.5,r:Math.PI,tint:t.pick(xt)}),ct%14===0&&t.chance(.75)&&mt.push({t:t.pick(M),x:-(j+t.range(15,18)),tint:t.pick(ti),r:.5}),ct%14===7&&t.chance(.75)&&mt.push({t:t.pick(M),x:j+t.range(15,18),tint:t.pick(ti),r:-.5}),ct%8===0&&mt.push({t:m,x:j+3,r:0},{t:m,x:-14,r:Math.PI}),ct%8===4&&(mt.push({t:o,x:j+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),mt.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),ct%40===20&&mt.push({t:t.pick(x),x:(ct%80===20?-1:1)*(j+11),r:ct%80===20?.35:-.35}),ct%30===15&&mt.push({t:t.pick(f),x:t.sign()*(j+t.range(50,80)),tint:t.pick(ti),r:t.range(-.3,.3)})):Zt==="causeway"?(ct%10===0&&mt.push({t:m,x:j+2.4,r:0}),ct%10===5&&mt.push({t:m,x:-13.4,r:Math.PI}),ct%45===0&&t.chance(.8)&&mt.push({t:g,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),ct%150===75&&mt.push({t:t.pick(v),x:j+4,r:-.2})):Zt==="hills"&&(Math.abs(Dt.curve)>.0012&&(mt.push({t:_,x:j+2.4}),mt.push({t:_,x:-13.4})),ct%4===2&&t.chance(.5)&&mt.push({t:W,x:t.sign()*(j+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),ct%5===0&&t.chance(.6)&&mt.push({t:l,x:t.sign()*(j+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),ct%11===0&&t.chance(.5)&&mt.push({t:c,x:t.sign()*(j+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),ct%23===0&&t.chance(.6)&&mt.push({t:h,x:t.sign()*(j+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),ct%90===45&&mt.push({t:t.pick(x),x:j+12,r:-.35}))}for(let ct=1;ct<r.stageStarts.length;ct++)Tt[r.stageStarts[ct]+4].props.push({t:w,x:0});Tt[8].props.push({t:E,x:0}),Tt[r.stageStarts[1]+160].props.push({t:it[0],x:0}),Tt[r.stageStarts[4]+200].props.push({t:it[1],x:0}),Tt[r.goalSeg].props.push({t:T,x:0});const ft=new Vs;ft.addLayer(Ws([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Wo),0);const Ft=ct=>Math.atan2(Math.sin(ct),Math.cos(ct)),Bt=qs(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return ft.addLayer(Bt,1),ft.sun={obj:Bt,local:Ja(2500,.25,2.6)},ft.addLayer(ji(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),ft.addLayer(ji(t,2350,14,[16777215,16771312,16033992]),.8),ft.addLayer(Hn(t,2200,8030928,230,ct=>{const Dt=Ft(ct);return Dt<-.25?1:Dt>1.6?.8:0},15265535,46),1),ft.addLayer(Hn(t,2050,5939360,110,ct=>{const Dt=Ft(ct);return Dt<-.15||Dt>1.9?1:0},void 0,50),1),ft.addLayer(Hn(t,1980,3050072,55,ct=>{const Dt=Ft(ct);return Dt<-.35||Dt>2.1?1:0},void 0,260,[1.2,3.5]),1),ft.addLayer(Qa(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,ct=>{const Dt=Ft(ct);return Dt>.7&&Dt<1.3?1:0},.9,.35),1),ue.modern&&(ft.addLayer(bu(t,1880,.35,1.5,5),1),ft.addLayer(Rx(1860,1.55),1),ft.addLayer(Su(t,1880,.25,140),1)),ft.addLayer(Xs(1900,Wo),0),{track:r,profiles:e,props:a.defs,backdrop:ft,trafficTypes:S,gateType:T}}},Xo=2890832,Yc=[16771232,16774872,16765040,10547455,16777215],qo={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},Ta=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function Ux(i,t,e,n){const s=new dt,r=new dt,a=i.pick([1843780,2235456,1583680,2500160]);if(ue.modern){const h=new dt,d=Pr(n<30?Ae.APARTMENT:i.pick([Ae.OFFICE_WARM,Ae.OFFICE_COOL,Ae.OFFICE_DARK,Ae.OFFICE_WARM])),u=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,d,u[0],u[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const f=t*.65,m=e*.65,_=i.range(6,14);h.facadeBox(0,n+_/2,0,f,_,m,d,u[0],u[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+_+.3,0,f+.2,.5,m+.2,i.pick([4255999,16726666,16777215])),n+=_}for(let f=0;f<3;f++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),l=i.range(.12,.35),c=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,d,u,f]of c)for(let m=4;m<n-3;m+=3.6){if(o===1&&i.chance(.15)){const _=i.pick(Yc),g=f+.06;h===0?r.quad([-u/2+1,m,d*g],[u/2-1,m,d*g],[u/2-1,m+1.8,d*g],[-u/2+1,m+1.8,d*g],_):r.quad([d*g,m,-u/2+1],[d*g,m,u/2-1],[d*g,m+1.8,u/2-1],[d*g,m+1.8,-u/2+1],_);continue}for(let _=-u/2+1.5;_<u/2-1.5;_+=3){if(!i.chance(l))continue;const g=i.pick(Yc),p=f+.06;h===0?r.quad([_,m,d*p],[_+1.5,m,d*p],[_+1.5,m+1.8,d*p],[_,m+1.8,d*p],g):r.quad([d*p,m,_],[d*p,m,_+1.5],[d*p,m+1.8,_+1.5],[d*p,m+1.8,_],g)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function Ox(i,t,e){const n=new dt,s=new dt,r=new dt;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function Fx(i,t){const e=new dt,n=new dt,s=new dt;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function kx(i,t){const e=new dt,n=new dt,s=j+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function zx(){const i=new dt,t=new dt,e=56,n=-70;for(const s of[-j-3,j+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(j+3)*2,2.2,2,14212328);for(const s of[-j-3,j+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,l=r*o*64,c=e-(e-4)*(1-(1-o)*(1-o));t.box(s,c,l,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const Bx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],night:!0,hemi:[9072864,2760768],plate:15790312,smoke:12105936,card:[2363466,16738992],music:"tokyo",stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:Xo,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:j+1,build(i){var nt,et;const t=new ai(1985),e=[ve(qo,Ta([1711160,1447983]),Ta([1711160,1447983])),ve(qo,Ta([924744,792638]),Ta([924744,792638])),ve(qo,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(ot,Q)=>Q?2:ot==="bay"?1:0,s=new Gs(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new Ks,o=[],c=(ue.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([ot,Q,Ct])=>{const $=[];for(let xt=0;xt<ot;xt++){const Tt=t.range(18,34),ft=t.range(18,30),Ft=t.range(Q,Ct),Bt={t:a.add(Ux(t,Tt,ft,Ft)),h:Ft,w:Math.max(Tt,ft)};$.push(Bt),o.push(Bt)}return $}),h=a.add(Hs(10,16760928,9079448,4,!0)),d=[16726666,4255999,16769088,16732208,8453984,12607743],f=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((ot,Q)=>{const Ct=d[Q%d.length],$={bg:1052700,fg:Ct,text:ot,vertical:!0,jp:!0,border:Ct};return a.add(Ox(i.add($,1,4),Ct,t.range(26,36)))}),_=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((ot,Q)=>a.add(Fx(i.add(ot,2,1),d[Q%d.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([ot,Q])=>a.add(kx(i.add(ot,2,1),i.add(Q,2,1)))),x=a.add(zx()),M=a.add(Lr(6974072,16752688,7.9)),v=a.add(Pe(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),E=a.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),w=a.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),T=Ys,R=[T.cedric,T.every,T.civic,T.ae86,T.crown].map(ot=>a.add(Vn(ot,{night:!0}))).concat([a.add(Vn(T.crown,{taxi:!0,night:!0})),a.add(Vn(T.crown,{taxi:!0,night:!0})),a.add(wi(14690858)),a.add(wi(1739322)),a.add(Ki(2787930))]),S=a.add(vu(16756784)),b=a.add(rx(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),P=a.add(ax(8.2)),z=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),H=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),W=a.add(nx(2788e3)),tt=[0,1,2].map(()=>a.add(ix(t))),O=r.segs,it=(ot,Q,Ct)=>{const $=O[ot].props;for(const xt of[-1,1]){if(!t.chance(Q))continue;const Tt=t.range(0,240),ft=ue.modern?t.pick(c[Tt<70?0:Tt<140?1:2]):t.pick(o),Ft=ue.modern?t.range(.9,1.15):t.range(.85,1.25),Bt=xt*(j+Ct+ft.w*Ft*.5+Tt),ct=ue.modern?t.range(.92,1.1):Tt<70?t.range(.25,.45):Tt<140?t.range(.5,.9):t.range(.8,1.5);$.push({t:ft.t,x:Bt,y:0,abs:!0,s:Ft,sy:ct,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),Tt<140&&t.chance(.4)&&$.push({t:t.pick(_),x:Bt-xt*ft.w*Ft*.2,y:ft.h*Ft*ct,abs:!0,r:xt*-.4})}};for(let ot=10;ot<O.length;ot++){const Q=O[ot],Ct=Q.props;if(Q.tunnel){O[ot-1].tunnel||Ct.push({t:M,x:0}),ue.modern&&ot%22===0&&Ct.push({t:P,x:0});continue}const $=Q.zone;if(ue.modern&&(ot%2===0&&Ct.push({t:S,x:j+1.65,y:1.3},{t:S,x:-12.65,y:1.3}),ot%140===70&&Ct.push({t:b,x:j+.9,r:-Math.PI/2})),Math.abs(Q.curve)>.0016&&ot%4===0&&Ct.push(Q.curve>0?{t:z,x:-12.95,r:.1}:{t:H,x:j+1.95,r:-.1}),$!=="bay"&&ot%3===0&&Ct.push({t:t.pick(tt),x:t.sign()*(j+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),$!=="bay"&&ot%130===90&&!((nt=O[ot+2])!=null&&nt.tunnel)&&!((et=O[ot-2])!=null&&et.tunnel)&&Ct.push({t:W,x:0,y:-0}),ot%7===0&&Ct.push({t:h,x:j+2.6,y:1.3,r:0}),ot%7===3&&Ct.push({t:h,x:-13.6,y:1.3,r:Math.PI}),$==="bay"){ot%75===30&&Ct.push({t:x,x:0}),ot%9===0&&it(ot,.08,260);continue}it(ot,$==="wangan"?.12:$==="under"?.22:.3,18),($==="neon"||$==="city")&&ot%4===0&&t.chance($==="neon"?.55:.2)&&Ct.push({t:t.pick(f),x:t.sign()*(j+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),ot%110===55&&Ct.push({t:t.pick(p),x:0})}for(let ot=1;ot<r.stageStarts.length;ot++)O[r.stageStarts[ot]+4].props.push({t:E,x:0});O[8].props.push({t:v,x:0}),O[r.goalSeg].props.push({t:w,x:0});const B=new Vs;return B.addLayer(Ws([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],Xo),0),B.addLayer(ji(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),B.addLayer(yu(t,260),.3),B.addLayer(qs(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),B.addLayer(Ax(2300,.55,190,520,3811946,14209264),1),B.addLayer(Qa(t,2100,[1710136,2103872,1316410],Yc,170,()=>1,.75,.22),1),ue.modern&&B.addLayer(Cx(t,2300,6),.4),B.addLayer(Xs(1950,Xo),0),{track:r,profiles:e,props:a.defs,backdrop:B,trafficTypes:R,gateType:w}}},rn=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),e&&!e.empty&&n.push({geo:e.build(),mat:"sign"}),n},br=(i,t)=>new Ot(i).multiplyScalar(t).getHex();function wu(){const i=new dt,t=[4099130,3042860];i.prism(0,0,0,6.2,.5,.42,8,t,5939274);for(const[e,n,s]of[[1,2.6,2.4],[-1,3.4,1.8]])i.box(e*.75,n,0,1.1,.6,.6,t[0]),i.prism(e*1.15,0,n-.2,n+s,.34,.3,7,t,5939274);return{parts:rn(i),radius:.7,max:220}}function Eu(){const i=new dt,t=[8022610,6180928];i.prism(0,0,0,2.6,.38,.3,6,t);const e=[[-1.6,4.4,.3],[1.4,4.8,-.4],[.2,5.4,.9],[-.4,4,-1.3]];for(const n of e){for(let r=0;r<5;r++){const a=r/5,o=(r+1)/5,l=d=>[n[0]*d,2.6+(n[1]-2.6)*d,n[2]*d],c=l(a),h=l(o);i.quad([c[0]-.18,c[1],c[2]],[c[0]+.18,c[1],c[2]],[h[0]+.15,h[1],h[2]],[h[0]-.15,h[1],h[2]],t[r%2])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2;i.tri([n[0],n[1]-.2,n[2]],[n[0]+Math.cos(a)*.25,n[1],n[2]+Math.sin(a)*.25],[n[0]+Math.cos(a)*.9,n[1]+.5,n[2]+Math.sin(a)*.9],r%2?4880954:6986314)}}return{parts:rn(i),radius:.6,max:160}}function Gx(i){const t=new dt,e=[12607546,14186570,11555892,14717020,11029552],n=9,s=i.range(26,46),r=i.range(26,40),a=r*i.range(.55,.75),o=5;for(let l=0;l<o;l++){const c=s*l/o,h=s*(l+1)/o,d=r+(a-r)*(l/o),u=r+(a-r)*((l+1)/o);t.prism(0,0,c,h,d,u,n,[e[l],br(e[l],.82)],l===o-1?14191192:null,.3)}return t.prism(0,0,-2,4,r*1.35,r,n,[13139024,11561540],null,.3),{parts:rn(t),radius:0,max:30}}function Hx(){const i=new dt,t=j+5,e=18,n=4,s=[13134400,11557430,14188622];for(const a of[-1,1])i.box(a*(t+3),e/2-2,0,7,e+4,9,[s[0],s[2]]);const r=10;for(let a=0;a<r;a++){const o=a/r*Math.PI,l=(a+1)/r*Math.PI,c=(h,d,u)=>[-Math.cos(h)*d,e-4+Math.sin(h)*(d*.45),u];for(const h of[-4,4])i.quad(c(o,t,h),c(l,t,h),c(l,t+n,h),c(o,t+n,h),s[a%2]);i.quad(c(o,t,-4),c(l,t,-4),c(l,t,4),c(o,t,4),9061416),i.quad(c(o,t+n,-4),c(l,t+n,-4),c(l,t+n,4),c(o,t+n,4),s[2])}return{parts:rn(i),radius:0,max:4}}function Tu(){const i=new dt,t=new dt;i.prism(0,0,-30,26,6,5,12,[15261904,13682872]),i.prism(0,0,26,32,6.6,6.6,12,[14209216,12630184],12103840),i.prism(0,0,32,36,3,.4,12,[12630184,11051152]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;t.box(Math.cos(n)*5.4,28,Math.sin(n)*5.4,.8,1.6,.8,16771232)}return{parts:rn(i,t),radius:0,max:6}}function Vx(){const i=new dt;i.prism(0,0,0,1.4,.3,.25,5,5914150);const t=[[1,4.6,2.6],[3.2,7,2],[5.4,9.4,1.4]];for(const[e,n,s]of t){i.prism(0,0,e,n,s,0,8,[1989174,1526316]);const r=e+(n-e)*.45;i.prism(0,0,r,n+.05,s*.58,0,8,[16777215,14739700])}return{parts:rn(i),radius:1,max:300}}function Wx(i){const t=new dt,e=i.range(10,13),n=9,s=3.4,r=3.2,a=i.pick([9065522,8014380,10117176]);t.box(0,s/2,0,e,s,n,[16052456,16777215]),t.box(0,s+r/2,0,e,r,n,[a,br(a,1.15)]);for(let h=-e/2+1.6;h<e/2-1;h+=2.6)for(const[d,u]of[[1.8,3820122],[s+1.6,3820122]])t.box(h,d,n/2+.02,1,1.1,.06,u),t.box(h-.75,d,n/2+.04,.4,1.1,.06,12593706),t.box(h+.75,d,n/2+.04,.4,1.1,.06,12593706);t.box(0,s+.2,n/2+.8,e*.8,.2,1.6,a);for(let h=-e*.4;h<=e*.4;h+=.6)t.box(h,s+.75,n/2+1.55,.12,1,.12,br(a,.8));t.box(0,s+1.25,n/2+1.55,e*.8,.12,.12,br(a,.8));const o=s+r,l=o+3.6,c=1.2;for(const h of[-1,1])t.quad([h*(e/2+c),o-.4,-n/2-c],[h*(e/2+c),o-.4,n/2+c],[0,l,n/2+c],[0,l,-n/2-c],br(a,.7)),t.quad([h*(e/2+c-.1),o-.15,-n/2-c],[h*(e/2+c-.1),o-.15,n/2+c],[0,l+.25,n/2+c],[0,l+.25,-n/2-c],16317439);for(const h of[-n/2,n/2])t.tri([-e/2,o,h],[e/2,o,h],[0,l,h],[a,a][0]);return t.box(e*.25,l,0,.9,2.4,.9,14209224),{parts:rn(t),radius:0,max:30}}function Xx(){const i=new dt;return i.quad([-1.2,0,0],[1.4,0,0],[.6,1.1,0],[-.8,.9,0],16777215),i.quad([-.8,.9,0],[.6,1.1,0],[.6,1.1,-Qt],[-.8,.9,-Qt],16054527),i.quad([1.4,0,0],[.6,1.1,0],[.6,1.1,-Qt],[1.4,0,-Qt],14477044),i.quad([-1.2,0,0],[-.8,.9,0],[-.8,.9,-Qt],[-1.2,0,-Qt],15265528),{parts:rn(i),radius:0,max:400}}function qx(){const i=new dt;return i.box(0,0,0,3.2,2.6,2.4,[13642282,14694970]),i.box(0,.3,1.21,2.8,1.2,.02,9091288),i.box(0,.3,-1.21,2.8,1.2,.02,9091288),i.box(0,2.6,0,.2,2.6,.2,3815994),i.box(0,3.9,0,300,.12,.12,2763306),{parts:rn(i),radius:0,max:6}}function Yx(i,t,e){const n=new dt,s=new dt,r=new dt,a=new dt,o=i.range(26,40),l=i.range(16,22),c=i.range(60,110);if(ue.modern)a.facadeBox(0,c/2,0,o,c,l,Pr(i.pick([Ae.OFFICE_WARM,Ae.APARTMENT,Ae.OFFICE_COOL])),14,14,[16777215,14207144],3813440,i.range(0,1));else{n.box(0,c/2,0,o,c,l,[3812928,4865616]);for(let d=6;d<c-4;d+=6)for(let u=-o/2+2;u<o/2-2;u+=3)i.chance(.55)&&s.box(u,d,l/2+.05,1.6,2,.05,i.pick([16771232,16774872,16765040]))}for(const d of[c*.33,c*.66,c])s.box(0,d,0,o+.4,.9,l+.4,16762954);n.box(0,5,0,o+14,10,l+10,[2760752,3812928]),s.box(0,10.4,0,o+14.4,.8,l+10.4,e),s.box(0,c+2,0,o*.7,.6,l*.7,e),n.box(0,c+7,l*.25,o*.8,9,.6,1052700),r.quad([-o*.38,c+3,l*.25+.32],[o*.38,c+3,l*.25+.32],[o*.38,c+11,l*.25+.32],[-o*.38,c+11,l*.25+.32],16777215,t),s.box(0,c+11.4,l*.25,o*.8,.5,.7,e);const h=rn(n,s,r);return a.empty||h.push({geo:a.build(),mat:"facadeLit"}),{parts:h,radius:0,max:40}}function Kx(i,t,e,n){const s=new dt,r=new dt,a=new dt;s.box(0,n/2,-.4,1.4,n,1.4,2105392),s.box(0,n+5,-.3,12.6,10.6,.6,1052700),a.quad([-6,n,.05],[6,n,.05],[6,n+10,.05],[-6,n+10,.05],16777215,i);for(let o=0;o<=12;o++){const l=-6.3+o*1.05;r.box(l,n-.3,.1,.35,.35,.35,o%2?16777215:16769120),r.box(l,n+10.3,.1,.35,.35,.35,o%2?16769120:16777215)}for(let o=0;o<=10;o++)for(const l of[-6.3,6.3])r.box(l,n+o,.1,.35,.35,.35,o%2?16777215:16769120);return r.box(0,n-3,.1,9,1.2,.3,e),r.poly([[4.4,n-1.4,.1],[7.4,n-3,.1],[4.4,n-4.6,.1]],e),r.box(0,n+10.9,0,12.8,.4,.8,t),{parts:rn(s,r,a),radius:.9,max:40}}function $x(i,t){const e=new dt,n=new dt,s=i.range(30,46),r=i.range(10,16),a=18;e.box(0,r/2,0,s,r,a,[2761270,3813446]),n.box(0,r*.55,a/2+.05,s-2,r*.3,.1,i.pick([16726666,4255999,16764992,16740400])),n.box(0,r+.3,0,s+.4,.6,a+.4,t),e.box(0,4,a/2+4,16,.6,8,16777215);for(let o=0;o<16;o++)n.box(-7.5+o,3.6,a/2+8,.3,.3,.3,o%2?16769120:16777215);return{parts:rn(e,n),radius:0,max:40}}function jx(i){const t=new dt,e=i.range(10,16),n=i.range(8,11),s=i.int(2,4),r=3.2,a=s*r;t.box(0,a/2,0,e,a,n,[16777215,16052458]);for(let h=0;h<s;h++){for(let d=-e/2+1.6;d<e/2-1;d+=2.8){const u=h*r+1.7;t.box(d,u,n/2+.03,1.1,1.6,.06,2767434),t.box(d-.8,u,n/2+.06,.45,1.6,.06,2783818),t.box(d+.8,u,n/2+.06,.45,1.6,.06,2783818)}h>0&&t.box(0,h*r+.2,n/2+.6,e*.5,.18,1.2,15788252)}const o=a+2.4,l=.6,c=[13130294,11554352];return t.quad([-e/2-l,a,n/2+l],[e/2+l,a,n/2+l],[e*.25,o,0],[-e*.25,o,0],c[0]),t.quad([e/2+l,a,-n/2-l],[-e/2-l,a,-n/2-l],[-e*.25,o,0],[e*.25,o,0],c[1]),t.tri([e/2+l,a,n/2+l],[e/2+l,a,-n/2-l],[e*.25,o,0],c[1]),t.tri([-e/2-l,a,-n/2-l],[-e/2-l,a,n/2+l],[-e*.25,o,0],c[0]),{parts:[{geo:t.build(),mat:"lit",tint:!0}],radius:0,max:60}}function Zx(){const i=new dt;return i.prism(0,0,0,1,.25,.2,5,5914150),i.prism(0,0,.6,5,.6,1.1,8,[2379820,1851428]),i.prism(0,0,5,10.5,1.1,0,8,[2775602,1984040]),{parts:rn(i),radius:.8,max:260}}function Jx(i){const t=new dt,e=i.range(18,34),n=e*.24,s=[[-n/2,0,e/2],[n/2,0,e/2],[n/2,0,-e*.25],[0,0,-e/2],[-n/2,0,-e*.25]],r=s.map(([a,,o])=>[a*1.08,2.4,o]);for(let a=0;a<s.length;a++){const o=(a+1)%s.length;t.quad(s[a],s[o],r[o],r[a],a===3||a===2?16053492:16777215)}return t.poly(r,14200968),t.box(0,3.6,e*.08,n*.75,2.4,e*.45,[16777215,15790320]),t.box(0,3.6,e*.08,n*.77,.8,e*.42,1714746),t.box(0,5.4,e*.12,n*.55,1.4,e*.25,[16777215,15790320]),t.box(0,.6,0,n*1.1,.4,e*.9,1718906),t.box(0,7.4,e*.1,.25,3,.25,13684944),{parts:rn(t),radius:0,max:40}}function Qx(){const i=new dt;i.box(0,.75,-Qt/2,.8,1.5,Qt,[14207144,14997176]),i.box(0,1.6,-Qt/2,1,.2,Qt,[13154456,15787208]);for(let t=0;t<4;t++)i.box(.41,.4+t%2*.6,-.8-t*1.4,.02,.06,1.2,12101768);return{parts:rn(i),radius:0,max:360}}const Yo=15912868,mi=[13137994,12348994],Aa=[14457438,13668438],m0=[15251584,14462068],g0=[11557430,10505774],t_=[1731240,1598112],Ra=[14998732,14209216],bs={road:[9077384,8287868],line:16764992,edge:16777215,rumble:[16777215,13652016]},e_={id:"canyon",name:"GRAND CANYON",lines:["GRAND","CANYON"],night:!1,hemi:[11063551,14191184],plate:16777215,smoke:15255712,card:[12605482,16771232],music:"desert",stageNames:["ROUTE 66 DINER","PAINTED DESERT","CANYON RIM","HOOVER DAM","MONUMENT VALLEY"],fog:{color:Yo,near:180,far:1200},ambient:{color:16773344,intensity:1.85},sun:{color:16769720,intensity:2.5,dir:[.6,.9,-.6]},startTime:60,extendTime:40,shadow:6965818,trafficColors:[14209216,9054752,2771594,16777215,4876858,13146688,6974066],trafficCount:14,walls:!1,offroadLimit:j+26,build(i){const t=new ai(1966),e=et=>et,n=[ve(bs,[{w:4,c:mi,tex:ut.DIRT},{w:600,c:Aa,tex:ut.SAND}],[{w:4,c:mi,tex:ut.DIRT},{w:600,c:Aa,tex:ut.SAND}]),ve(bs,[{w:2,c:mi,tex:ut.DIRT},{w:24,c:[12101776,11312260],tex:ut.PAVING},{w:600,c:Aa,tex:ut.SAND}],[{w:2,c:mi,tex:ut.DIRT},{w:24,c:[12101776,11312260],tex:ut.PAVING},{w:600,c:Aa,tex:ut.SAND}]),ve(bs,[{w:2.5,c:mi,tex:ut.DIRT},{w:1.5,dy:16,c:g0,tex:ut.DIRT},{w:600,dy:4,c:[13135934,12347448],tex:ut.DIRT}],[{w:3,c:mi,tex:ut.DIRT},{w:6,abs:0,c:g0,tex:ut.DIRT},{w:600,abs:0,c:[11031604,10243118],tex:ut.DIRT}]),ve(bs,[{w:1,c:Ra,tex:ut.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:Ra},{w:40,abs:-30,c:[13682872,12893356],tex:ut.CONCRETE},{w:600,abs:-30,c:[2783850,2519134],tex:e(ut.BAY)}],[{w:1,c:Ra,tex:ut.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:Ra},{w:0,abs:34,c:[13156528,12367012]},{w:600,abs:34,c:t_,tex:ut.BAY}]),ve(bs,[{w:4,c:mi,tex:ut.DIRT},{w:600,c:m0,tex:ut.SAND}],[{w:4,c:mi,tex:ut.DIRT},{w:600,c:m0,tex:ut.SAND}]),ve(bs,[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[5911590,5385762])],s=(et,ot)=>ot?5:et==="diner"?1:et==="rim"?2:et==="dam"?3:et==="valley"?4:0,r=new Gs(s,6);r.zone="diner",r.straight(30),r.stageFrom({zone:"diner",length:380,curvy:.55,hilly:.2,yMin:5,yMax:12},t),r.stageFrom({zone:"painted",length:400,curvy:.7,hilly:.6,yMin:5,yMax:34},t),r.stageFrom({zone:"rim",length:420,curvy:1,hilly:.5,yMin:60,yMax:90,tunnels:.14},t),r.stageFrom({zone:"dam",length:300,curvy:.3,hilly:.02,yMin:40,yMax:40},t),r.stageFrom({zone:"valley",length:440,curvy:.6,hilly:.35,yMin:5,yMax:22},t);const a=r.finish(260),o=new Ks,l=o.add(wu()),c=o.add(Eu()),h=[0,1,2].map(()=>o.add(Gx(t))),d=o.add(Hx()),u=o.add(Tu()),f=o.add(gl()),m=o.add(pu()),_=o.add(Za()),g=o.add(Hs(9,16773312)),p=o.add(xl(2,t)),x=o.add(Lr(10508346,16764992,7.9)),M=[{bg:16777215,fg:14690858,text:"DINER"},{bg:1718922,fg:16769088,text:"GAS"},{bg:16777215,fg:1735226,text:"MOTEL"},{bg:14690858,fg:16777215,text:"CAFE"},{bg:16769088,fg:1710618,text:"TRADING POST"}].map(et=>o.add(mu(i.add(et,2,1)))),v=[{bg:16777215,fg:1710618,text:"ROUTE 66",sub:"HISTORIC HIGHWAY",border:1710618},{bg:14690858,fg:16777215,text:"LAST GAS",sub:"80 MILES",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1731256,fg:16777215,text:"CANYON",sub:"VIEWPOINT 5 MI",border:16769088},{bg:16747040,fg:16777215,text:"COLD",sub:"ROOT BEER",border:16777215}].map(et=>o.add(Ir(i.add(et,2,2),9,4.5,9071178,15788248))),E=[{bg:1735226,fg:16777215,text:"FLAGSTAFF",sub:"62",border:16777215},{bg:1735226,fg:16777215,text:"LAS VEGAS",sub:"104",border:16777215},{bg:16777215,fg:1710618,text:"US",sub:"66",border:1710618}].map(et=>o.add(ja(i.add(et,1,1)))),w=o.add(Pe(i.add({bg:16777215,fg:12597274,text:"START",stripes:1710618},4,1),14207152,12597274)),T=o.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),14207152,1727200)),R=o.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),14207152,1710618)),S=o.add(Pe(i.add({bg:9058842,fg:16771232,text:"GRAND CANYON",border:16771232},4,1),6965802,9058842,16771232)),b=o.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),P=o.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),z=o.add(Ei(!0)),H=o.add(Ei(!1)),W=Array.from({length:16},(et,ot)=>o.add(Ml(i.add({bg:1735226,fg:16777215,text:String(ot+1),border:16777215},1,1)))),tt=Ys,O=[tt.f150,tt.cherokee,tt.caprice,tt.volvo240,tt.golf,tt.w124].map(et=>o.add(Vn(et))).concat([o.add(wi(12597274)),o.add(wi(1727160)),o.add(Ki(3836506))]),it=a.segs;for(let et=10;et<it.length;et++){const ot=it[et],Q=ot.props;if(ot.tunnel){it[et-1].tunnel||Q.push({t:x,x:0});continue}const Ct=ot.zone;et%3===0&&Ct!=="dam"&&Q.push({t:z,x:j+2.6},{t:H,x:-13.6}),et%167===100&&Q.push({t:W[Math.min(W.length-1,Math.floor(et*6/1e3))],x:j+3.6,r:-.3}),Math.abs(ot.curve)>.0016&&et%5===0&&Ct!=="dam"&&Q.push(ot.curve>0?{t:b,x:-16.5,r:.15}:{t:P,x:j+5.5,r:-.15});const $=(xt,Tt)=>{et%4===0&&t.chance(xt)&&Q.push({t:l,x:t.sign()*(j+t.range(Tt,Tt+30)),s:t.range(.8,1.3),r:t.range(0,6)}),et%6===1&&t.chance(xt*.7)&&Q.push({t:c,x:t.sign()*(j+t.range(Tt,Tt+40)),s:t.range(.8,1.4),r:t.range(0,6)}),et%7===3&&t.chance(xt)&&Q.push({t:m,x:t.sign()*(j+t.range(5,30)),s:t.range(.3,.6),sy:.6,r:t.range(0,6),tint:12099680}),et%19===0&&t.chance(.5)&&Q.push({t:f,x:t.sign()*(j+t.range(10,40)),s:t.range(.8,2),r:t.range(0,6),tint:16756880})};if(Ct==="diner")et%18===6&&t.chance(.8)&&Q.push({t:t.pick(M),x:-(j+t.range(14,18)),tint:t.pick([16777215,16771272,14217471]),r:.4}),et%18===15&&t.chance(.8)&&Q.push({t:t.pick(M),x:j+t.range(14,18),tint:t.pick([16777215,16771272,14217471]),r:-.4}),et%60===30&&Q.push({t:p,x:t.sign()*(j+t.range(40,60)),tint:t.pick([16777215,16773336]),r:t.range(-.3,.3)}),et%9===0&&Q.push({t:g,x:j+3,r:0}),et%45===20&&Q.push({t:t.pick(v),x:(et%90===20?-1:1)*(j+12),r:et%90===20?.35:-.35}),$(.25,30);else if(Ct==="painted"||Ct==="valley"){if($(Ct==="valley"?.45:.6,6),et%30===10&&t.chance(.85)){const xt=Ct==="valley"?t.range(60,180):t.range(140,320);Q.push({t:t.pick(h),x:t.sign()*(j+xt),s:t.range(.8,1.4),sy:t.range(.8,1.3),r:t.range(0,6)})}et%70===35&&Q.push({t:t.pick(v),x:(et%140===35?-1:1)*(j+12),r:et%140===35?.35:-.35}),et%120===60&&Q.push({t:t.pick(E),x:j+3.4,r:-.2})}else Ct==="rim"?(et%2===0&&Q.push({t:_,x:j+2.4}),et%5===0&&t.chance(.5)&&Q.push({t:f,x:-(j+t.range(6,18)),y:t.range(14,18),s:t.range(.6,1.4),r:t.range(0,6),tint:16752768}),et%8===2&&t.chance(.4)&&Q.push({t:l,x:-(j+t.range(8,30)),y:16,s:t.range(.8,1.2),r:t.range(0,6)}),et%26===13&&t.chance(.7)&&Q.push({t:t.pick(h),x:j+t.range(80,260),y:0,abs:!0,s:t.range(.9,1.6),sy:t.range(1.2,2),r:t.range(0,6)})):Ct==="dam"&&(et%8===0&&Q.push({t:g,x:j+2.6,r:0}),et%8===4&&Q.push({t:g,x:-13.6,r:Math.PI}),et%70===25&&Q.push({t:u,x:j+t.range(40,70),y:34,abs:!0}))}for(let et=1;et<a.stageStarts.length;et++)it[a.stageStarts[et]+4].props.push({t:T,x:0});it[8].props.push({t:w,x:0}),it[a.stageStarts[2]+30].props.push({t:S,x:0}),it[a.stageStarts[4]+180].props.push({t:d,x:0}),it[a.goalSeg].props.push({t:R,x:0});const B=new Vs;B.addLayer(Ws([[0,16769712],[1.5,16764044],[3.5,16298106],[6,14203056],[9,11061476],[14,7910632],[22,5019872],[35,2916052],[90,1727672]],Yo),0);const nt=qs(2500,-.7,9,150,[[1.5,16771264],[1.2,16767136],[1,16773312],[.7,16776168]],20);return B.addLayer(nt,1),B.sun={obj:nt,local:Ja(2500,-.7,9)},B.addLayer(ji(t,2350,8,[16777215,16771280,14723216]),.8),B.addLayer(Hn(t,2250,10127032,220,()=>1,void 0,30),1),B.addLayer(Tx(t,2100,[10109992,12081210,13661258,11557434,14715992],170,et=>Math.sin(et*3)>-.6?1:.4,26),1),B.addLayer(Xs(1900,Yo),0),{track:a,profiles:n,props:o.defs,backdrop:B,trafficTypes:O,gateType:R}}},Ko=14673652,Ss=[16185855,15265528],gi=[14212840,13423326],n_=[13624562,12770542],i_=[9079960,8158858],mr={road:[7764095,6974580],line:16777215,edge:16777215,rumble:[13642282,16777215]},s_={id:"alps",name:"SWISS ALPS",lines:["SWISS","ALPS"],night:!1,hemi:[13162751,15265528],plate:16777215,smoke:16777215,card:[3828408,16777215],music:"alps",stageNames:["LAKESIDE VILLAGE","PINE FOREST","MOUNTAIN PASS","AVALANCHE GALLERY","GLACIER SUMMIT"],fog:{color:Ko,near:160,far:1150},ambient:{color:15791359,intensity:1.8},sun:{color:16769256,intensity:2.2,dir:[.5,.8,-.7]},startTime:62,extendTime:42,shadow:8029856,trafficColors:[12593706,2771594,16777215,2779722,14196784,5921378,1710622],trafficCount:14,walls:!1,offroadLimit:j+22,build(i){var B;const t=new ai(1991),e=[ve(mr,[{w:3,c:gi,tex:ut.SAND},{w:600,c:Ss,tex:ut.SAND}],[{w:3,c:gi,tex:ut.SAND},{w:10,dy:-1.2,c:Ss,tex:ut.SAND},{w:600,dy:0,c:n_,tex:ut.PLAIN}]),ve(mr,[{w:3,c:gi,tex:ut.SAND},{w:600,c:Ss,tex:ut.SAND}],[{w:3,c:gi,tex:ut.SAND},{w:600,c:Ss,tex:ut.SAND}]),ve(mr,[{w:2,c:gi,tex:ut.SAND},{w:3,dy:14,c:i_,tex:ut.CONCRETE},{w:600,dy:10,c:Ss,tex:ut.SAND}],[{w:3,c:gi,tex:ut.SAND},{w:30,abs:0,c:[15002356,14213356],tex:ut.SAND},{w:600,abs:0,c:Ss,tex:ut.SAND}]),ve(mr,[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[13159120,12369604]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[15266047,9079956]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[8027268,7500924]),ve(mr,[{w:3,c:gi,tex:ut.SAND},{w:600,dy:3,c:[14872828,13953272],tex:ut.SAND}],[{w:3,c:gi,tex:ut.SAND},{w:600,dy:-6,c:[14872828,13953272],tex:ut.SAND}])],n=(nt,et)=>et?3:nt==="lake"?0:nt==="pass"?2:nt==="summit"?4:1,s=new Gs(n,10);s.zone="lake",s.straight(30),s.stageFrom({zone:"lake",length:380,curvy:.6,hilly:.1,yMin:8,yMax:12},t),s.stageFrom({zone:"forest",length:400,curvy:.8,hilly:.6,yMin:10,yMax:45},t),s.stageFrom({zone:"pass",length:420,curvy:1,hilly:1,yMin:45,yMax:110},t),s.stageFrom({zone:"gallery",length:380,curvy:.8,hilly:.4,yMin:85,yMax:115,tunnels:.45},t),s.stageFrom({zone:"summit",length:420,curvy:.7,hilly:.5,yMin:100,yMax:140},t);const r=s.finish(260),a=new Ks,o=a.add(Vx()),l=[0,1,2].map(()=>a.add(Wx(t))),c=a.add(Xx()),h=a.add(qx()),d=a.add(gl()),u=a.add(Za(15263976,6974066)),f=a.add(Hs(8,16774352)),m=a.add(Lr(10132644,16764992,8)),_=a.add(_l()),g=[{bg:13642282,fg:16777215,text:"ALPEN",sub:"CHOCOLAT",border:16777215},{bg:16777215,fg:13642282,text:"SKI",sub:"SCHOOL",border:13642282},{bg:1727160,fg:16777215,text:"FONDUE",sub:"STUBE",border:16769088},{bg:16769088,fg:13642282,text:"TURBO",sub:"MOTOR OIL",border:13642282},{bg:2783818,fg:16777215,text:"HOTEL",sub:"EDELWEISS",border:16777215}].map(nt=>a.add(Ir(i.add(nt,2,2),9,4.5,6965802,15788248))),p=[{bg:1727160,fg:16777215,text:"ZERMATT",sub:"24",border:16777215},{bg:1727160,fg:16777215,text:"ST. MORITZ",sub:"58",border:16777215},{bg:1735226,fg:16777215,text:"PASS",sub:"2106 M",border:16777215}].map(nt=>a.add(ja(i.add(nt,1,1)))),x=a.add(Pe(i.add({bg:13642282,fg:16777215,text:"START",border:16777215},4,1),9067058,13642282)),M=a.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),9067058,1727200)),v=a.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),9067058,1710618)),E=a.add(Pe(i.add({bg:13642282,fg:16777215,text:"WILLKOMMEN",border:16777215},4,1),9067058,13642282,16777215)),w=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),T=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),R=a.add(Ei(!0)),S=a.add(Ei(!1)),b=Array.from({length:16},(nt,et)=>a.add(Ml(i.add({bg:1727160,fg:16777215,text:String(et+1),border:16777215},1,1)))),P=a.add($i(0)),z=Ys,H=[z.golf,z.volvo240,z.w124,z.civic,z.cherokee].map(nt=>a.add(Vn(nt))).concat([a.add(wi(13642282)),a.add(Ki(16764992)),a.add(Ki(16764992))]),W=[13642282,1727160,16769088,2787930,16743088,16777215],tt=r.segs;for(let nt=10;nt<tt.length;nt++){const et=tt[nt],ot=et.props;if(et.tunnel){(!tt[nt-1].tunnel||!((B=tt[nt+1])!=null&&B.tunnel))&&ot.push({t:m,x:0,r:tt[nt-1].tunnel?Math.PI:0});continue}const Q=et.zone;nt%3===0&&ot.push({t:R,x:j+2.6},{t:S,x:-13.6}),nt%2===0&&Q!=="lake"&&ot.push({t:c,x:j+3.8},{t:c,x:-14.8,r:Math.PI}),nt%167===100&&ot.push({t:b[Math.min(b.length-1,Math.floor(nt*6/1e3))],x:j+3.6,r:-.3}),Math.abs(et.curve)>.0016&&nt%5===0&&ot.push(et.curve>0?{t:w,x:-16.5,r:.15}:{t:T,x:j+5.5,r:-.15});const Ct=($,xt)=>{for(const Tt of xt)nt%2===0&&t.chance($)&&ot.push({t:o,x:Tt*(j+t.range(7,60)),s:t.range(.8,1.6),r:t.range(0,6)})};Q==="lake"?(Ct(.35,[-1]),nt%14===3&&t.chance(.8)&&ot.push({t:t.pick(l),x:-(j+t.range(16,40)),r:t.range(.2,.6)}),nt%9===0&&ot.push({t:f,x:-14,r:Math.PI}),nt%16===8&&ot.push({t:_,x:j+4.5,tint:t.pick([13642282,16777215])}),nt%5===2&&t.chance(.4)&&ot.push({t:P,x:-(j+t.range(2,4)),r:t.range(0,6),tint:t.pick(W)}),nt%50===25&&ot.push({t:t.pick(g),x:-23,r:.35})):Q==="forest"?(Ct(.75,[-1,1]),nt%30===12&&t.chance(.6)&&ot.push({t:t.pick(l),x:t.sign()*(j+t.range(20,50)),r:t.range(-.6,.6)}),nt%60===30&&ot.push({t:t.pick(g),x:(nt%120===30?-1:1)*(j+12),r:nt%120===30?.35:-.35}),nt%120===60&&ot.push({t:t.pick(p),x:j+3.4,r:-.2})):Q==="pass"||Q==="gallery"?(nt%2===0&&ot.push({t:u,x:j+2.4}),nt%6===0&&t.chance(.5)&&ot.push({t:o,x:-(j+t.range(8,40)),y:Q==="pass"?14:0,s:t.range(.7,1.2),r:t.range(0,6)}),nt%7===3&&t.chance(.5)&&ot.push({t:d,x:-(j+t.range(5,9)),s:t.range(.6,1.4),r:t.range(0,6),tint:11580616}),nt%9===0&&t.chance(.6)&&ot.push({t:o,x:j+t.range(30,160),y:0,abs:!0,s:t.range(1,1.8),r:t.range(0,6)}),nt%90===45&&ot.push({t:h,x:t.range(-40,40),y:t.range(40,60)}),nt%120===60&&ot.push({t:t.pick(p),x:j+3.4,r:-.2})):Q==="summit"&&(nt%2===0&&Math.abs(et.curve)>.001&&ot.push({t:u,x:j+2.4},{t:u,x:-13.4}),nt%11===0&&t.chance(.5)&&ot.push({t:d,x:t.sign()*(j+t.range(8,40)),s:t.range(.8,2.2),r:t.range(0,6),tint:13160676}),nt%80===40&&ot.push({t:h,x:t.range(-40,40),y:t.range(30,50)}),nt%16===8&&ot.push({t:_,x:t.sign()*(j+5),tint:t.pick([13642282,16777215])}))}for(let nt=1;nt<r.stageStarts.length;nt++)tt[r.stageStarts[nt]+4].props.push({t:M,x:0});tt[8].props.push({t:x,x:0}),tt[60].props.push({t:E,x:0}),tt[r.goalSeg].props.push({t:v,x:0});const O=new Vs;O.addLayer(Ws([[0,16769248],[1.5,16763088],[3.5,15778008],[6,13682924],[10,11060464],[16,8696044],[26,6067424],[40,3832016],[90,2119864]],Ko),0);const it=qs(2500,.9,4,150,[[1.5,16767192],[1.2,16763064],[1,16773336],[.7,16776432]],20);return O.addLayer(it,1),O.sun={obj:it,local:Ja(2500,.9,4)},O.addLayer(ji(t,2350,10,[16777215,16773364,14207200]),.8),O.addLayer(Hn(t,2250,9083588,480,()=>1,16777215,34,[8,20]),1),O.addLayer(Hn(t,2100,6978216,300,nt=>Math.cos(nt*2)>-.3?1:.5,16054527,30),1),O.addLayer(Hn(t,1990,2775624,70,()=>1,void 0,240,[1.2,3.5]),1),O.addLayer(Xs(1900,Ko),0),{track:r,profiles:e,props:a.defs,backdrop:O,trafficTypes:H,gateType:v}}},$o=2366522,x0=[6972536,6183532],_0=[3814472,3419714],M0=[4864584,4338751],Ca=[9078422,8288906],Pa={road:[4079178,3552834],line:15790320,edge:15790320,rumble:[5921384,5263452]},xi=[16726666,4255999,16769088,16740400,8453984,12607743],r_={id:"vegas",name:"LAS VEGAS STRIP",lines:["LAS VEGAS","STRIP"],night:!0,hemi:[10121440,3809344],plate:16777215,smoke:13154520,card:[1706538,16769088],music:"vegas",stageNames:["FREMONT STREET","THE STRIP","CASINO ROW","DESERT HIGHWAY","HOOVER LIGHTS"],fog:{color:$o,near:150,far:1150},ambient:{color:13681919,intensity:1.75},sun:{color:16763104,intensity:1.5,dir:[.4,1,.8]},startTime:60,extendTime:40,shadow:2236460,trafficColors:[16777215,14692400,2763312,16769088,4235519,13656319,10132136],trafficCount:18,walls:!1,offroadLimit:j+18,build(i){const t=new ai(1955),e=[ve(Pa,[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:x0,tex:ut.PAVING},{w:600,c:_0,tex:ut.PAVING}],[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:x0,tex:ut.PAVING},{w:600,c:_0,tex:ut.PAVING}]),ve(Pa,[{w:3,c:[5917264,5391432],tex:ut.DIRT},{w:600,c:M0,tex:ut.SAND}],[{w:3,c:[5917264,5391432],tex:ut.DIRT},{w:600,c:M0,tex:ut.SAND}]),ve(Pa,[{w:1,c:Ca,tex:ut.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:Ca},{w:40,abs:-20,c:[6973046,6446702],tex:ut.CONCRETE},{w:600,abs:-20,c:[1055280,923692],tex:ut.BAY}],[{w:1,c:Ca,tex:ut.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:Ca},{w:0,abs:18,c:[5920358,5394014]},{w:600,abs:18,c:[924736,792634],tex:ut.BAY}]),ve(Pa,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(O,it)=>it?3:O==="desert"?1:O==="hoover"?2:0,s=new Gs(n,6);s.zone="fremont",s.straight(30),s.stageFrom({zone:"fremont",length:360,curvy:.5,hilly:.05,yMin:5,yMax:7},t),s.stageFrom({zone:"strip",length:440,curvy:.45,hilly:.05,yMin:5,yMax:8},t),s.stageFrom({zone:"casino",length:400,curvy:.7,hilly:.1,yMin:5,yMax:10},t),s.stageFrom({zone:"desert",length:420,curvy:.8,hilly:.6,yMin:5,yMax:40},t),s.stageFrom({zone:"hoover",length:380,curvy:.6,hilly:.2,yMin:26,yMax:40,tunnels:.12},t);const r=s.finish(260),a=new Ks,l=[{bg:1052700,fg:16769088,text:"LUCKY 7",border:16726666},{bg:1052700,fg:4255999,text:"NEON",sub:"PALACE",border:4255999},{bg:1052700,fg:16726666,text:"DESERT",sub:"ROSE",border:16769088},{bg:1052700,fg:16769088,text:"GOLDEN",sub:"STAR",border:16769088},{bg:1052700,fg:8453984,text:"JACKPOT",border:8453984},{bg:1052700,fg:16777215,text:"SILVER",sub:"SPUR",border:12607743}].map((O,it)=>a.add(Yx(t,i.add(O,2,1),xi[it%xi.length]))),h=[{bg:1052700,fg:16726666,text:"CASINO",border:16726666},{bg:1052700,fg:16769088,text:"SLOTS",sub:"24 HOURS",border:16769088},{bg:1052700,fg:4255999,text:"BUFFET",sub:"$4.99",border:4255999},{bg:1052700,fg:16777215,text:"SHOWS",sub:"TONIGHT",border:16740400},{bg:1052700,fg:16743088,text:"WEDDING",sub:"CHAPEL",border:16743088},{bg:1052700,fg:8453984,text:"MOTEL",sub:"VACANCY",border:8453984}].map((O,it)=>a.add(Kx(i.add(O,2,2),xi[it%xi.length],xi[(it+2)%xi.length],t.range(10,18)))),d=[0,1,2].map(O=>a.add($x(t,xi[O*2%xi.length]))),u=a.add(ml()),f=a.add(Hs(10,16765056,9079448,4,!0)),m=a.add(wu()),_=a.add(Eu()),g=a.add(Tu()),p=[a.add($i(0)),a.add($i(1))],x=a.add(Lr(6974072,16752688,7.9)),M=a.add(vu(16756784)),v=[{bg:1052700,fg:16769088,text:"WIN BIG",sub:"LOOSE SLOTS",border:16769088},{bg:14690858,fg:16777215,text:"LIVE",sub:"ELVIS SHOW",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1727160,fg:16777215,text:"HOOVER DAM",sub:"TOURS",border:16769088}].map(O=>a.add(Ir(i.add(O,2,2),9,4.5))),E=a.add(Pe(i.add({bg:16777215,fg:14690858,text:"WELCOME TO LAS VEGAS",border:16769088},4,1),14211296,16726666,16769088)),w=a.add(Pe(i.add({bg:1052700,fg:16769088,text:"START",border:16769088},4,1),10132136,16726666,16769088)),T=a.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),R=a.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),S=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),b=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),P=Ys,z=[P.caprice,P.crown,P.cherokee,P.w124,P.f150].map(O=>a.add(Vn(O,{night:!0}))).concat([a.add(Vn(P.caprice,{taxi:!0,night:!0})),a.add(Vn(P.caprice,{taxi:!0,night:!0})),a.add(Ki(16726666)),a.add(wi(2763312))]),H=[16730730,2789631,16769088,16777215,4247712,12607743],W=r.segs;for(let O=10;O<W.length;O++){const it=W[O],B=it.props;if(it.tunnel){W[O-1].tunnel||B.push({t:x,x:0});continue}const nt=it.zone;if(Math.abs(it.curve)>.0016&&O%5===0&&nt!=="strip"&&B.push(it.curve>0?{t:S,x:-16.5,r:.15}:{t:b,x:j+5.5,r:-.15}),nt==="fremont"||nt==="strip"||nt==="casino"){O%7===0&&B.push({t:f,x:j+2.4,r:0}),O%7===3&&B.push({t:f,x:-13.4,r:Math.PI}),O%6===1&&B.push({t:u,x:t.sign()*(j+t.range(4,6)),s:t.range(1,1.3),r:t.range(0,6)}),O%4===2&&t.chance(nt==="fremont"?.6:.35)&&B.push({t:t.pick(p),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(H)});const et=nt==="strip"?.7:nt==="casino"?.55:.3;O%24===0&&t.chance(et)&&B.push({t:t.pick(l),x:-(j+t.range(45,90)),r:t.range(.1,.4)}),O%24===12&&t.chance(et)&&B.push({t:t.pick(l),x:j+t.range(45,90),r:-t.range(.1,.4)}),O%10===4&&t.chance(.75)&&B.push({t:t.pick(h),x:-(j+t.range(9,14)),r:.45}),O%10===9&&t.chance(.75)&&B.push({t:t.pick(h),x:j+t.range(9,14),r:-.45}),O%16===6&&t.chance(.7)&&B.push({t:t.pick(d),x:t.sign()*(j+t.range(26,34)),r:t.range(-.3,.3)})}else nt==="desert"?(O%2===0&&B.push({t:M,x:j+2.6,y:.4},{t:M,x:-13.6,y:.4}),O%4===0&&t.chance(.5)&&B.push({t:m,x:t.sign()*(j+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),O%6===3&&t.chance(.4)&&B.push({t:_,x:t.sign()*(j+t.range(8,50)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),O%60===30&&B.push({t:t.pick(v),x:(O%120===30?-1:1)*(j+12),r:O%120===30?.35:-.35}),O%90===45&&B.push({t:t.pick(h),x:j+14,r:-.4})):nt==="hoover"&&(O%6===0&&B.push({t:f,x:j+2.4,r:0}),O%6===3&&B.push({t:f,x:-13.4,r:Math.PI}),O%70===25&&B.push({t:g,x:j+t.range(40,70),y:18,abs:!0}))}for(let O=1;O<r.stageStarts.length;O++)W[r.stageStarts[O]+4].props.push({t:T,x:0});W[8].props.push({t:w,x:0}),W[r.stageStarts[1]+20].props.push({t:E,x:0}),W[r.goalSeg].props.push({t:R,x:0});const tt=new Vs;return tt.addLayer(Ws([[0,12606106],[1.5,10111638],[3.5,6961802],[6,4599930],[10,3023466],[18,1841240],[30,1052224],[90,328990]],$o),0),tt.addLayer(yu(t,340),.3),tt.addLayer(qs(2500,.8,22,60,[[1.6,4864634],[1.3,9075370],[1,16774872],[.8,16777198]],16),1),tt.addLayer(ji(t,2380,6,[6961792,4860518,13654680],-Math.PI,Math.PI,[5,14]),.7),tt.addLayer(Hn(t,2250,2761284,200,()=>1,void 0,34),1),tt.addLayer(Qa(t,2050,[1709616,2235450,2761284],[16769120,16726666,4255999,16777215],170,O=>{const it=Math.atan2(Math.sin(O),Math.cos(O));return Math.abs(it)<1.2?1:0},.9,.5),1),tt.addLayer(Xs(1900,$o),0),{track:r,profiles:e,props:a.defs,backdrop:tt,trafficTypes:z,gateType:R}}},jo=13493490,Zo=[1341640,1208512],Ui=[15260868,14471352],v0=[5941322,5282882],Jo=[14207136,13417620],y0=[9083482,8293970],gr={road:[9342616,8553100],line:16777215,edge:16777215,rumble:[14690858,16777215]},a_={id:"monaco",name:"MONACO RIVIERA",lines:["MONACO","RIVIERA"],night:!1,hemi:[11065599,14207136],plate:16777215,smoke:16777215,card:[1735368,16777215],music:"riviera",stageNames:["HARBOUR FRONT","CASINO SQUARE","HARBOUR TUNNEL","CORNICHE CLIFFS","CAP MARTIN"],fog:{color:jo,near:170,far:1180},ambient:{color:16777215,intensity:1.9},sun:{color:16774368,intensity:2.4,dir:[-.6,1,.5]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16777215,14161944,1718922,16769088,2763310,12632264,2783818],trafficCount:16,walls:!1,offroadLimit:j+14,build(i){const t=new ai(1929),e=[ve(gr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:7,c:Ui,tex:ut.PAVING},{w:600,c:[14207152,13417636],tex:ut.PAVING}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:10,c:Ui,tex:ut.PAVING},{w:0,abs:0,c:[13155492,12365976]},{w:600,abs:0,c:Zo,tex:ut.SEA}]),ve(gr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Ui,tex:ut.PAVING},{w:600,c:v0,tex:ut.GRASS}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Ui,tex:ut.PAVING},{w:600,c:v0,tex:ut.GRASS}]),ve(gr,[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[6974066,6447722]),ve(gr,[{w:2,c:Jo,tex:ut.DIRT},{w:2,dy:13,c:Jo,tex:ut.DIRT},{w:600,dy:8,c:y0,tex:ut.GRASS}],[{w:2,c:Ui,tex:ut.PAVING},{w:8,abs:0,c:Jo,tex:ut.DIRT},{w:4,abs:0,c:[16777215,14742783],tex:ut.FOAM},{w:600,abs:0,c:Zo,tex:ut.SEA}]),ve(gr,[{w:2,c:Ui,tex:ut.PAVING},{w:600,dy:6,c:y0,tex:ut.GRASS}],[{w:2,c:Ui,tex:ut.PAVING},{w:14,abs:0,c:[13285514,12496e3],tex:ut.SAND},{w:600,abs:0,c:Zo,tex:ut.SEA}])],n=(Q,Ct)=>Ct?2:Q==="harbour"?0:Q==="square"?1:Q==="corniche"?3:4,s=new Gs(n,3);s.zone="harbour",s.straight(30),s.stageFrom({zone:"harbour",length:380,curvy:.75,hilly:.05,yMin:3,yMax:4},t),s.stageFrom({zone:"square",length:380,curvy:.9,hilly:.5,yMin:4,yMax:22},t),s.stageFrom({zone:"tunnel",length:300,curvy:.6,hilly:.1,yMin:4,yMax:8,tunnels:.9,tunnelZone:"tunnel"},t),s.stageFrom({zone:"corniche",length:440,curvy:1,hilly:.6,yMin:40,yMax:80},t),s.stageFrom({zone:"cap",length:420,curvy:.75,hilly:.3,yMin:18,yMax:34},t);const r=s.finish(260),a=new Ks,o=[0,1,2,3].map(()=>a.add(jx(t))),l=a.add(Zx()),c=[0,1,2].map(()=>a.add(Jx(t))),h=a.add(Qx()),d=a.add(ml()),u=a.add(xu()),f=a.add(_u()),m=[0,1].map(Q=>a.add(xl(Q,t))),_=a.add(Hs(7,16774336,2767402,2)),g=a.add(Za()),p=a.add(_l()),x=a.add(gu()),M=a.add(Mu(t)),v=[a.add($i(0)),a.add($i(1))],E=a.add(Lr(14735556,14690858,7.9)),w=[{bg:16777215,fg:14690858,text:"GELATO",sub:"ARTIGIANALE",border:14690858},{bg:1735368,fg:16777215,text:"RIVIERA",sub:"YACHT CLUB",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:14690858,fg:16777215,text:"GRAND",sub:"PRIX 86",border:16777215},{bg:2783818,fg:16777215,text:"HOTEL",sub:"DE PARIS",border:16769088}].map(Q=>a.add(Ir(i.add(Q,2,2),9,4.5))),T=[{bg:1727160,fg:16777215,text:"NICE",sub:"18",border:16777215},{bg:1727160,fg:16777215,text:"MENTON",sub:"9",border:16777215},{bg:16777215,fg:1710618,text:"ITALIA",sub:"12",border:14690858}].map(Q=>a.add(ja(i.add(Q,1,1)))),R=a.add(Pe(i.add({bg:16777215,fg:14690858,text:"START",stripes:14690858},4,1),15790320,14690858)),S=a.add(Pe(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),b=a.add(Pe(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),P=a.add(Pe(i.add({bg:14690858,fg:16777215,text:"BIENVENUE A MONACO",border:16777215},4,1),16777215,14690858,16777215)),z=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),H=a.add(wn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=a.add(Ei(!0)),tt=a.add(Ei(!1)),O=Ys,it=[O.golf,O.civic,O.w124,O.ae86,O.volvo240].map(Q=>a.add(Vn(Q))).concat([a.add(Ki(1735368)),a.add(wi(14690858))]),B=[16777215,1718922,14690858,16771272,4235472,16747184],nt=r.segs;for(let Q=10;Q<nt.length;Q++){const Ct=nt[Q],$=Ct.props;if(Ct.tunnel){nt[Q-1].tunnel||$.push({t:E,x:0});continue}const xt=Ct.zone;Math.abs(Ct.curve)>.0016&&Q%5===0&&xt!=="harbour"&&$.push(Ct.curve>0?{t:z,x:-16.2,r:.15}:{t:H,x:j+5.2,r:-.15}),xt==="harbour"?(Q%8===0&&$.push({t:_,x:j+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),Q%6===3&&$.push({t:d,x:-(j+t.range(4,6)),s:t.range(.9,1.2),r:t.range(0,6)}),Q%7===0&&t.chance(.8)&&$.push({t:t.pick(c),x:j+t.range(18,60),y:0,abs:!0,r:t.range(-.3,.3)+Math.PI/2}),Q%13===5&&t.chance(.6)&&$.push({t:f,x:j+t.range(70,200),y:0,abs:!0,s:t.range(.9,1.3),r:t.range(-.6,.6)}),Q%9===4&&t.chance(.85)&&$.push({t:t.pick(o),x:-(j+t.range(14,24)),tint:t.pick(ti),r:t.range(.1,.4)}),Q%16===8&&$.push({t:p,x:j+4.5,tint:t.pick([14690858,16777215])}),Q%4===1&&t.chance(.4)&&$.push({t:t.pick(v),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)}),Q%40===10&&$.push({t:M,x:j+t.range(15,50),y:t.range(14,24),r:t.range(0,6)}),Q%50===25&&$.push({t:t.pick(w),x:-22,r:.35})):xt==="square"||xt==="tunnel"?(Q%30>3&&$.push({t:x,x:j+9},{t:x,x:-20}),Q%8===0&&$.push({t:_,x:j+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),Q%8===4&&$.push({t:d,x:t.sign()*(j+6),s:t.range(.9,1.2),r:t.range(0,6)}),Q%22===11&&t.chance(.8)&&$.push({t:t.pick(m),x:t.sign()*(j+t.range(30,60)),tint:t.pick(ti),r:t.range(-.3,.3)}),Q%7===2&&t.chance(.8)&&$.push({t:t.pick(o),x:t.sign()*(j+t.range(14,22)),tint:t.pick(ti),r:t.range(-.4,.4)}),Q%5===1&&t.chance(.4)&&$.push({t:t.pick(v),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)}),Q%40===20&&$.push({t:t.pick(w),x:(Q%80===20?-1:1)*(j+11),r:Q%80===20?.35:-.35})):xt==="corniche"?(Q%1===0&&$.push({t:h,x:j+2.6}),Q%5===0&&t.chance(.6)&&$.push({t:l,x:-(j+t.range(6,20)),y:13,s:t.range(.8,1.2),r:t.range(0,6)}),Q%9===0&&t.chance(.5)&&$.push({t:t.pick(o),x:-(j+t.range(14,30)),y:14,tint:t.pick(ti),r:t.range(-.4,.4)}),Q%17===0&&t.chance(.6)&&$.push({t:f,x:j+t.range(90,260),y:0,abs:!0,s:t.range(1,1.5),r:t.range(-.6,.6)}),Q%120===60&&$.push({t:t.pick(T),x:-14.2,r:.2})):(Q%3===0&&$.push({t:W,x:j+2.6},{t:tt,x:-13.6}),Q%2===0&&Math.abs(Ct.curve)>.0012&&$.push({t:g,x:j+2.4}),Q%4===1&&t.chance(.55)&&$.push({t:t.chance(.5)?u:l,x:-(j+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6)}),Q%12===6&&t.chance(.6)&&$.push({t:t.pick(o),x:-(j+t.range(18,40)),tint:t.pick(ti),r:t.range(-.4,.4)}),Q%10===5&&t.chance(.5)&&$.push({t:d,x:j+t.range(5,9),s:t.range(.9,1.2),r:t.range(0,6)}),Q%19===0&&t.chance(.6)&&$.push({t:f,x:j+t.range(60,220),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Q%120===60&&$.push({t:t.pick(T),x:j+3.4,r:-.2}))}for(let Q=1;Q<r.stageStarts.length;Q++)nt[r.stageStarts[Q]+4].props.push({t:S,x:0});nt[8].props.push({t:R,x:0}),nt[r.stageStarts[1]+40].props.push({t:P,x:0}),nt[r.goalSeg].props.push({t:b,x:0});const et=new Vs;et.addLayer(Ws([[0,16774360],[1.4,15790304],[3,14216436],[6,11590902],[10,8440052],[16,5943534],[26,3839204],[40,2259160],[90,1333440]],jo),0);const ot=qs(2500,1.1,16,120,[[1.6,16775392],[1.2,16773320],[1,16776168],[.6,16777215]],20);return et.addLayer(ot,1),et.sun={obj:ot,local:Ja(2500,1.1,16)},et.addLayer(ji(t,2350,12,[16777215,16054527,13162728]),.8),et.addLayer(Hn(t,2250,9083568,260,Q=>Math.atan2(Math.sin(Q),Math.cos(Q))<.2?1:.15,void 0,30),1),et.addLayer(Hn(t,2050,4880976,120,Q=>Math.atan2(Math.sin(Q),Math.cos(Q))<0?1:0,void 0,200,[1.2,3.5]),1),et.addLayer(Qa(t,2e3,[15786184,15257776,16313560,14731432],[9085112,13148288],60,Q=>{const Ct=Math.atan2(Math.sin(Q),Math.cos(Q));return Ct<-.3&&Ct>-1.4?1:0},.6,.2),1),et.addLayer(bu(t,1880,.4,2.2,7),1),et.addLayer(Su(t,1880,1.1,160),1),et.addLayer(Xs(1900,jo),0),{track:r,profiles:e,props:a.defs,backdrop:et,trafficTypes:it,gateType:b}}};class o_{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,l)=>{const c=document.createElement("div");return c.className=`tbtn ${a}`,c.textContent=o,this.root.appendChild(c),l&&this.btns.push({el:c,code:l}),c};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
5`,"ShiftLeft"),this.fireBtn=s("fire hidden","FIRE","KeyF"),this.rocketBtn=s("rocket hidden",`ROCKET
1`,"KeyE"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){if(n.el.classList.contains("hidden"))continue;const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*pt,(t.clientY-s.top)/s.height*Ne)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="ShiftLeft"&&e!=="KeyE"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setFire(t,e=0){this.fireBtn.classList.contains("hidden")===t&&this.fireBtn.classList.toggle("hidden",!t),this.rocketBtn.classList.contains("hidden")===t&&this.rocketBtn.classList.toggle("hidden",!t);const n=`ROCKET
${e}`;this.rocketBtn.textContent!==n&&(this.rocketBtn.textContent=n),this.rocketBtn.classList.toggle("empty",e===0)}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const Ia=ue.width,La=ue.height;async function c_(){var f;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new Pg({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Ia,La,!1);const n=new bn(54,Ia/La,.5,4e3),s=[Nx,Bx,e_,s_,r_,a_],r=new bx,a=new Bg,o=new Gc(document.getElementById("hud")),l=new yx(s,n,r,a,o);r.onFirstInput(()=>{a.init(),a.music("title")});const c=new o_(r,i,()=>l.touch=!0);window.addEventListener("mousedown",m=>{if(c.enabled)return;const _=i.getBoundingClientRect();r.tap((m.clientX-_.left)/_.width*852,(m.clientY-_.top)/_.height*480)}),window.game=l,(f=window.matchMedia)!=null&&f.call(window,"(pointer: coarse)").matches&&(l.touch=!0),l.nameBox=new Sx(i),l.boot();const h=()=>{const m=Math.min(window.innerWidth/Ia,window.innerHeight/La)||1,_=m>=3?Math.floor(m):m;i.style.width=`${Math.floor(Ia*_)}px`,i.style.height=`${Math.floor(La*_)}px`};window.addEventListener("resize",h),h();let d=performance.now();const u=m=>{const _=Math.max(0,Math.min(.03333333333333333,(m-d)/1e3));d=m;const g=(l.state==="race"||l.state==="countdown")&&!l.paused;c.update(g)&&g&&(l.paused=!0),c.enabled&&(c.setTurbo(l.turbos,l.turboT>0),c.setFire(l.weapons,l.rockets)),l.update(_),l.draw(),r.endFrame(),e.render(l.world.scene,n),requestAnimationFrame(u)};requestAnimationFrame(u)}c_();
