(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="170",Su=0,Sl=1,Eu=2,m0=1,wu=2,jn=3,Mi=0,nn=1,me=2,xi=0,bs=1,Ca=2,El=3,wl=4,Tu=5,Oi=100,Au=101,Ru=102,Cu=103,Iu=104,Pu=200,Lu=201,Du=202,Nu=203,qo=204,Yo=205,Uu=206,Ou=207,Fu=208,ku=209,zu=210,Bu=211,Gu=212,Hu=213,Vu=214,$o=0,Ko=1,jo=2,ws=3,Zo=4,Jo=5,Qo=6,tc=7,Fa=0,Wu=1,Xu=2,_i=0,qu=1,Yu=2,$u=3,Ku=4,ju=5,Zu=6,Ju=7,g0=300,Ts=301,As=302,ec=303,nc=304,ka=306,Ia=1e3,Bi=1001,ic=1002,Ke=1003,x0=1004,Rr=1005,fn=1006,Ya=1007,gi=1008,ni=1009,_0=1010,M0=1011,xr=1012,Hc=1013,Hi=1014,zn=1015,Mr=1016,Vc=1017,Wc=1018,Rs=1020,v0=35902,y0=1021,b0=1022,Un=1023,S0=1024,E0=1025,Ss=1026,Cs=1027,Xc=1028,qc=1029,w0=1030,Yc=1031,$c=1033,ba=33776,Sa=33777,Ea=33778,wa=33779,sc=35840,rc=35841,ac=35842,oc=35843,cc=36196,lc=37492,hc=37496,uc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,Mc=37816,vc=37817,yc=37818,bc=37819,Sc=37820,Ec=37821,Ta=36492,wc=36494,Tc=36495,T0=36283,Ac=36284,Rc=36285,Cc=36286,Qu=3200,td=3201,Kc=0,ed=1,Zn="",Ge="srgb",Ps="srgb-linear",za="linear",pe="srgb",ji=7680,Tl=519,nd=512,id=513,sd=514,A0=515,rd=516,ad=517,od=518,cd=519,Al=35044,hr=35048,Rl="300 es",Qn=2e3,Pa=2001;class Ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Ic=180/Math.PI;function vr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function on(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function Ka(i,t,e){return(1-e)*i+e*t}function Xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],M=s[4],v=s[7],w=s[2],E=s[5],T=s[8];return r[0]=a*_+o*x+c*w,r[3]=a*m+o*M+c*E,r[6]=a*p+o*v+c*T,r[1]=l*_+h*x+d*w,r[4]=l*m+h*M+d*E,r[7]=l*p+h*v+d*T,r[2]=u*_+f*x+g*w,r[5]=u*m+f*M+g*E,r[8]=u*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new te;function R0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=La("canvas");return i.style.display="block",i}const Cl={};function ur(i){i in Cl||(Cl[i]=!0,console.warn(i))}function ud(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function dd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Il=[.64,.33,.3,.6,.15,.06],Pl=[.2126,.7152,.0722],Ll=[.3127,.329],Dl=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Ps]:{primaries:Il,whitePoint:Ll,transfer:za,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Pl,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Il,whitePoint:Ll,transfer:pe,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Pl,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let Zi;class pd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=La("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let md=0;class C0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=vr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Za(s[a].image)):r.push(Za(s[a]))}else r=Za(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class je extends Ls{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Bi,s=Bi,r=fn,a=gi,o=Un,c=ni,l=je.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=vr(),this.name="",this.source=new C0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==g0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ia:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case ic:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ia:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case ic:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=g0;je.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(f+1)/2,w=(p+1)/2,E=(h+u)/4,T=(d+_)/4,C=(g+m)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=T/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends Ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new C0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends xd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jc extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const w=Math.sqrt(M),E=Math.atan2(w,p*x);m=Math.sin(m*E)/w,o=Math.sin(o*E)/w}const v=o*x;if(c=c*m+u*v,l=l*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new $,Ul=new Ds;class Yi{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Ir.subVectors(this.max,qs),Ji.subVectors(t.a,qs),Qi.subVectors(t.b,qs),ts.subVectors(t.c,qs),ai.subVectors(Qi,Ji),oi.subVectors(ts,Qi),wi.subVectors(Ji,ts);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!Qa(e,Ji,Qi,ts,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Ji,Qi,ts,Ir))?!1:(Pr.crossVectors(ai,oi),e=[Pr.x,Pr.y,Pr.z],Qa(e,Ji,Qi,ts,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new $,new $,new $,new $,new $,new $,new $,new $],En=new $,Cr=new Yi,Ji=new $,Qi=new $,ts=new $,ai=new $,oi=new $,wi=new $,qs=new $,Ir=new $,Pr=new $,Ti=new $;function Qa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Md=new Yi,Ys=new $,to=new $;class $i{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(to)),this.expandByPoint(Ys.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new $,eo=new $,Lr=new $,ci=new $,no=new $,Dr=new $,io=new $;class Zc{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=ci.dot(this.direction),c=-ci.dot(Lr),l=ci.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(eo).addScaledVector(Lr,u),f}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Dr.subVectors(n,t),io.crossVectors(no,Dr);let a=this.direction.dot(io),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,t);const c=o*this.direction.dot(Dr.crossVectors(ci,Dr));if(c<0)return null;const l=o*this.direction.dot(no.cross(ci));if(l<0||c+l>a)return null;const h=-o*ci.dot(io);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,g,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,yd)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),Nr.crossVectors(hn,li),s[0]=li.x,s[4]=Nr.x,s[8]=hn.x,s[1]=li.y,s[5]=Nr.y,s[9]=hn.y,s[2]=li.z,s[6]=Nr.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],M=n[7],v=n[11],w=n[15],E=s[0],T=s[4],C=s[8],S=s[12],b=s[1],P=s[5],z=s[9],H=s[13],W=s[2],J=s[6],F=s[10],at=s[14],B=s[3],nt=s[7],et=s[11],ot=s[15];return r[0]=a*E+o*b+c*W+l*B,r[4]=a*T+o*P+c*J+l*nt,r[8]=a*C+o*z+c*F+l*et,r[12]=a*S+o*H+c*at+l*ot,r[1]=h*E+d*b+u*W+f*B,r[5]=h*T+d*P+u*J+f*nt,r[9]=h*C+d*z+u*F+f*et,r[13]=h*S+d*H+u*at+f*ot,r[2]=g*E+_*b+m*W+p*B,r[6]=g*T+_*P+m*J+p*nt,r[10]=g*C+_*z+m*F+p*et,r[14]=g*S+_*H+m*at+p*ot,r[3]=x*E+M*b+v*W+w*B,r[7]=x*T+M*P+v*J+w*nt,r[11]=x*C+M*z+v*F+w*et,r[15]=x*S+M*H+v*at+w*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*f-n*c*f)+_*(+e*c*f-e*l*u+r*a*u-s*a*f+s*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*l-_*u*l+_*c*f-o*m*f-d*c*p+o*u*p,M=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,v=h*_*l-g*d*l+g*o*f-a*_*f-h*o*p+a*d*p,w=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,E=e*x+n*M+s*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(_*u*r-d*m*r-_*s*f+n*m*f+d*s*p-n*u*p)*T,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*f-n*c*f)*T,t[4]=M*T,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*T,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*f+e*c*f)*T,t[8]=v*T,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*T,t[12]=w*T,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,x=c*l,M=c*h,v=c*d,w=n.x,E=n.y,T=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+M)*T,s[9]=(m-x)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const l=1/r,h=1/a,d=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,e.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===Qn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,f=(n+s)*h;let g,_;if(o===Qn)g=(a+r)*d,_=-2*d;else if(o===Pa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const es=new $,wn=new kt,vd=new $(0,0,0),yd=new $(1,1,1),li=new $,Nr=new $,hn=new $,Ol=new kt,Fl=new Ds;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const kl=new $,ns=new Ds,Xn=new kt,Ur=new $,$s=new $,Sd=new $,Ed=new Ds,zl=new $(1,0,0),Bl=new $(0,1,0),Gl=new $(0,0,1),Hl={type:"added"},wd={type:"removed"},is={type:"childadded",child:null},so={type:"childremoved",child:null};class Oe extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new $,e=new yn,n=new Ds,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new te}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(zl,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zl,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt($s,Ur,this.up):Xn.lookAt(Ur,$s,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Xn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new $(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new $,qn=new $,ro=new $,Yn=new $,ss=new $,rs=new $,Vl=new $,ao=new $,oo=new $,co=new $,lo=new Ie,ho=new Ie,uo=new Ie;class Nn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),qn.subVectors(n,e),ro.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(qn),c=Tn.dot(ro),l=qn.dot(qn),h=qn.dot(ro),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return lo.setScalar(0),ho.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lo,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),qn.subVectors(t,e),Tn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ss.subVectors(s,n),rs.subVectors(r,n),ao.subVectors(t,n);const c=ss.dot(ao),l=rs.dot(ao);if(c<=0&&l<=0)return e.copy(n);oo.subVectors(t,s);const h=ss.dot(oo),d=rs.dot(oo);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ss,a);co.subVectors(t,r);const f=ss.dot(co),g=rs.dot(co);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(rs,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Vl.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Vl,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=ld(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=fo(a,r,t+1/3),this.g=fo(a,r,t),this.b=fo(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=P0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ce.fromWorkingColorSpace(Xe.copy(this),t),Math.round(on(Xe.r*255,0,255))*65536+Math.round(on(Xe.g*255,0,255))*256+Math.round(on(Xe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Ge){ce.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Or);const n=Ka(hi.h,Or.h,e),s=Ka(hi.s,Or.s,e),r=Ka(hi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Ut;Ut.NAMES=P0;let Td=0;class Si extends Ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=vr(),this.name="",this.blending=bs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new $,Fr=new re;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}}class L0 extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class D0 extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ad=0;const gn=new kt,po=new Oe,as=new $,un=new Yi,Ks=new Yi,ze=new $;class Ve extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(R0(t)?D0:L0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(un.min,Ks.min),un.expandByPoint(ze),ze.addVectors(un.max,Ks.max),un.expandByPoint(ze)):(un.expandByPoint(Ks.min),un.expandByPoint(Ks.max))}un.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ze.fromBufferAttribute(o,l),c&&(as.fromBufferAttribute(t,l),ze.add(as)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new $,c[C]=new $;const l=new $,h=new $,d=new $,u=new re,f=new re,g=new re,_=new $,m=new $;function p(C,S,b){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[S].add(_),o[b].add(_),c[C].add(m),c[S].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,S=x.length;C<S;++C){const b=x[C],P=b.start,z=b.count;for(let H=P,W=P+z;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new $,v=new $,w=new $,E=new $;function T(C){w.fromBufferAttribute(s,C),E.copy(w);const S=o[C];M.copy(S),M.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,S=x.length;C<S;++C){const b=x[C],P=b.start,z=b.count;for(let H=P,W=P+z;H<W;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new $,r=new $,a=new $,o=new $,c=new $,l=new $,h=new $,d=new $;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new $e(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new kt,Ai=new Zc,kr=new $i,Xl=new $,zr=new $,Br=new $,Gr=new $,mo=new $,Hr=new $,ql=new $,Vr=new $;class fe extends Oe{constructor(t=new Ve,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(mo.fromBufferAttribute(d,t),a?Hr.addScaledVector(mo,h):Hr.addScaledVector(mo.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(kr,Xl)===null||Ai.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const E=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);s=Wr(this,p,t,n,l,h,d,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Wr(this,a,t,n,l,h,d,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){const E=v,T=v+1,C=v+2;s=Wr(this,p,t,n,l,h,d,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,v=m+2;s=Wr(this,a,t,n,l,h,d,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Rd(i,t,e,n,s,r,a,o){let c;if(t.side===nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Mi,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,zr),i.getVertexPosition(c,Br),i.getVertexPosition(l,Gr);const h=Rd(i,t,e,n,zr,Br,Gr,ql);if(h){const d=new $;Nn.getBarycoord(ql,zr,Br,Gr,d),s&&(h.uv=Nn.getInterpolatedAttribute(s,o,c,l,d,new re)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,c,l,d,new re)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,c,l,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new $,materialIndex:0};Nn.getNormal(zr,Br,Gr,u.normal),h.face=u,h.barycoord=d}return h}class yr extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function g(_,m,p,x,M,v,w,E,T,C,S){const b=v/T,P=w/C,z=v/2,H=w/2,W=E/2,J=T+1,F=C+1;let at=0,B=0;const nt=new $;for(let et=0;et<F;et++){const ot=et*P-H;for(let tt=0;tt<J;tt++){const Ct=tt*b-z;nt[_]=Ct*x,nt[m]=ot*M,nt[p]=W,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(tt/T),d.push(1-et/C),at+=1}}for(let et=0;et<C;et++)for(let ot=0;ot<T;ot++){const tt=u+ot+J*et,Ct=u+ot+J*(et+1),K=u+(ot+1)+J*(et+1),gt=u+(ot+1)+J*et;c.push(tt,Ct,gt),c.push(Ct,K,gt),B+=6}o.addGroup(f,B,S),f+=B,u+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Is(i[e]);for(const s in n)t[s]=n[s]}return t}function Cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function N0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Id={clone:Is,merge:Qe};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class U0 extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new $,Yl=new re,$l=new re;class Mn extends U0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,$l),e.subVectors($l,Yl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const os=-90,cs=1;class Dd extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(os,cs,t,e);s.layers=this.layers,this.add(s);const r=new Mn(os,cs,t,e);r.layers=this.layers,this.add(r);const a=new Mn(os,cs,t,e);a.layers=this.layers,this.add(a);const o=new Mn(os,cs,t,e);o.layers=this.layers,this.add(o);const c=new Mn(os,cs,t,e);c.layers=this.layers,this.add(c);const l=new Mn(os,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class O0 extends je{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new O0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:xi});r.uniforms.tEquirect.value=e;const a=new fe(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=fn),new Dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const go=new $,Ud=new $,Od=new te;class Ni{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new $i,Xr=new $;class Jc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+a,u+h,m+g,v+x).normalize(),n[3].setComponents(c-a,u-h,m-g,v-x).normalize(),n[4].setComponents(c-o,u-d,m-_,v-M).normalize(),e===Qn)n[5].setComponents(c+o,u+d,m+_,v+M).normalize();else if(e===Pa)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function F0(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ba extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<l;M++){const v=M*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const M=x+l*p,v=x+l*(p+1),w=x+1+l*(p+1),E=x+1+l*p;f.push(M,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.width,t.height,t.widthSegments,t.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
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
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,kf=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,s1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,a1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,c1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,h1=`#define TOON
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
}`,u1=`#define TOON
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
}`,d1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,x1=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:kd,alphahash_pars_fragment:zd,alphamap_fragment:Bd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:jd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:ef,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:af,color_vertex:of,common:cf,cube_uv_reflection_fragment:lf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:xf,envmap_common_pars_fragment:_f,envmap_pars_fragment:Mf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:bf,fog_pars_vertex:Sf,fog_fragment:Ef,fog_pars_fragment:wf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:If,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:Nf,lights_phong_pars_fragment:Uf,lights_physical_fragment:Of,lights_physical_pars_fragment:Ff,lights_fragment_begin:kf,lights_fragment_maps:zf,lights_fragment_end:Bf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:$f,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:jf,morphinstance_vertex:Zf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:xp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:yp,shadowmap_vertex:bp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ep,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Pp,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Np,uv_pars_vertex:Up,uv_vertex:Op,worldpos_vertex:Fp,background_vert:kp,background_frag:zp,backgroundCube_vert:Bp,backgroundCube_frag:Gp,cube_vert:Hp,cube_frag:Vp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:$p,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:t1,meshlambert_frag:e1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:s1,meshnormal_frag:r1,meshphong_vert:a1,meshphong_frag:o1,meshphysical_vert:c1,meshphysical_frag:l1,meshtoon_vert:h1,meshtoon_frag:u1,points_vert:d1,points_frag:f1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:x1},Pt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},kn={basic:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Qe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Qe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Qe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Qe([Pt.points,Pt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Qe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Qe([Pt.common,Pt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Qe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Qe([Pt.sprite,Pt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Qe([Pt.common,Pt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Qe([Pt.lights,Pt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};kn.physical={uniforms:Qe([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const qr={r:0,b:0,g:0},Ci=new yn,_1=new kt;function M1(i,t,e,n,s,r,a){const o=new Ut(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===ka)?(h===void 0&&(h=new fe(new yr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Is(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(Ci)),h.material.toneMapped=ce.getTransfer(v.colorSpace)!==pe,(d!==v||u!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new fe(new Ba(2,2),new vi({name:"BackgroundMaterial",uniforms:Is(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,M){x.getRGB(qr,N0(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m}}function v1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,P,z,H,W){let J=!1;const F=d(H,z,P);r!==F&&(r=F,l(r.object)),J=f(b,H,z,W),J&&g(b,H,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(b,P,z,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,P,z){const H=z.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let J=W[P.id];J===void 0&&(J={},W[P.id]=J);let F=J[H];return F===void 0&&(F=u(c()),J[H]=F),F}function u(b){const P=[],z=[],H=[];for(let W=0;W<e;W++)P[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,P,z,H){const W=r.attributes,J=P.attributes;let F=0;const at=z.getAttributes();for(const B in at)if(at[B].location>=0){const et=W[B];let ot=J[B];if(ot===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;F++}return r.attributesNum!==F||r.index!==H}function g(b,P,z,H){const W={},J=P.attributes;let F=0;const at=z.getAttributes();for(const B in at)if(at[B].location>=0){let et=J[B];et===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),W[B]=ot,F++}r.attributes=W,r.attributesNum=F,r.index=H}function _(){const b=r.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),W[b]!==P&&(i.vertexAttribDivisor(b,P),W[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==b[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function M(b,P,z,H,W,J,F){F===!0?i.vertexAttribIPointer(b,P,z,W,J):i.vertexAttribPointer(b,P,z,H,W,J)}function v(b,P,z,H){_();const W=H.attributes,J=z.getAttributes(),F=P.defaultAttributeValues;for(const at in J){const B=J[at];if(B.location>=0){let nt=W[at];if(nt===void 0&&(at==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),at==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const et=nt.normalized,ot=nt.itemSize,tt=t.get(nt);if(tt===void 0)continue;const Ct=tt.buffer,K=tt.type,gt=tt.bytesPerElement,Tt=K===i.INT||K===i.UNSIGNED_INT||nt.gpuType===Hc;if(nt.isInterleavedBufferAttribute){const ft=nt.data,Ot=ft.stride,Bt=nt.offset;if(ft.isInstancedInterleavedBuffer){for(let ct=0;ct<B.locationSize;ct++)p(B.location+ct,ft.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ct=0;ct<B.locationSize;ct++)m(B.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ct=0;ct<B.locationSize;ct++)M(B.location+ct,ot/B.locationSize,K,et,Ot*gt,(Bt+ot/B.locationSize*ct)*gt,Tt)}else{if(nt.isInstancedBufferAttribute){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,nt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<B.locationSize;ft++)m(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ft=0;ft<B.locationSize;ft++)M(B.location+ft,ot/B.locationSize,K,et,ot*gt,ot/B.locationSize*ft*gt,Tt)}}else if(F!==void 0){const et=F[at];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(B.location,et);break;case 3:i.vertexAttrib3fv(B.location,et);break;case 4:i.vertexAttrib4fv(B.location,et);break;default:i.vertexAttrib1fv(B.location,et)}}}}x()}function w(){C();for(const b in n){const P=n[b];for(const z in P){const H=P[z];for(const W in H)h(H[W].object),delete H[W];delete P[z]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const z in P){const H=P[z];for(const W in H)h(H[W].object),delete H[W];delete P[z]}delete n[b.id]}function T(b){for(const P in n){const z=n[P];if(z[b.id]===void 0)continue;const H=z[b.id];for(const W in H)h(H[W].object),delete H[W];delete z[b.id]}}function C(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function y1(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function b1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function S1(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ni,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,M=x*4;let v=p.clippingState||null;c.value=v,v=h(g,u,M,f);for(let w=0;w!==M;++w)v[w]=e[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function E1(i){let t=new WeakMap;function e(a,o){return o===ec?a.mapping=Ts:o===nc&&(a.mapping=As),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ec||o===nc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Nd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class k0 extends U0{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Kl=[.125,.215,.35,.446,.526,.582],Fi=20,xo=new k0,jl=new Ut;let _o=null,Mo=0,vo=0,yo=!1;const Ui=(1+Math.sqrt(5))/2,ls=1/Ui,Zl=[new $(-Ui,ls,0),new $(Ui,ls,0),new $(-ls,0,Ui),new $(ls,0,Ui),new $(0,Ui,-ls),new $(0,Ui,ls),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_o=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,Mo,vo),this._renderer.xr.enabled=yo,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Mr,format:Un,colorSpace:Ps,depthBuffer:!1},s=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(r)),this._blurMaterial=T1(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s){const o=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(jl),h.toneMapping=_i,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new fe(new yr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(jl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const M=this._cubeSize;Yr(s,x*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=th());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zl[(s-r-1)%Zl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new fe(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let x=0;for(let T=0;T<Fi;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const v=this._sizeLods[s],w=3*v*(s>M-vs?s-M+vs:0),E=4*(this._cubeSize-v);Yr(e,w,E,3*v,2*v),c.setRenderTarget(e),c.render(d,xo)}}function w1(i){const t=[],e=[],n=[];let s=i;const r=i-vs+1+Kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-vs?c=Kl[a-i+vs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(S,_*g*E),M.set(u,m*g*E);const b=[E,E,E,E,E,E];v.set(b,p*g*E)}const w=new Ve;w.setAttribute("position",new $e(x,_)),w.setAttribute("uv",new $e(M,m)),w.setAttribute("faceIndex",new $e(v,p)),t.push(w),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T1(i,t,e){const n=new Float32Array(Fi),s=new $(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function th(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function eh(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function A1(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ec||c===nc,h=c===Ts||c===As;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Jl(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Jl(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function R1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function C1(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){const w=x[M+0],E=x[M+1],T=x[M+2];u.push(w,E,E,T,T,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const w=M+0,E=M+1,T=M+2;u.push(w,E,E,T,T,w)}}else return;const m=new(R0(u)?D0:L0)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function I1(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function P1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function L1(i,t,e){const n=new WeakMap,s=new Ie;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*w*4*d),T=new jc(E,v,w,d);T.type=zn,T.needsUpdate=!0;const C=M*4;for(let b=0;b<d;b++){const P=m[b],z=p[b],H=x[b],W=v*w*4*b;for(let J=0;J<P.count;J++){const F=J*C;f===!0&&(s.fromBufferAttribute(P,J),E[W+F+0]=s.x,E[W+F+1]=s.y,E[W+F+2]=s.z,E[W+F+3]=0),g===!0&&(s.fromBufferAttribute(z,J),E[W+F+4]=s.x,E[W+F+5]=s.y,E[W+F+6]=s.z,E[W+F+7]=0),_===!0&&(s.fromBufferAttribute(H,J),E[W+F+8]=s.x,E[W+F+9]=s.y,E[W+F+10]=s.z,E[W+F+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new re(v,w)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function D1(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class z0 extends je{constructor(t,e,n,s,r,a,o,c,l,h=Ss){if(h!==Ss&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Hi),n===void 0&&h===Cs&&(n=Rs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const B0=new je,nh=new z0(1,1),G0=new jc,H0=new _d,V0=new O0,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ga(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function U1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function O1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function F1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function k1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),ke(e,n)}}function z1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),ke(e,n)}}function B1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),ke(e,n)}}function G1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function H1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function V1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function W1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function X1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function q1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Y1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function K1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=A0,r=nh):r=B0,e.setTexture2D(t||r,s)}function j1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||H0,s)}function Z1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||V0,s)}function J1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||G0,s)}function Q1(i){switch(i){case 5126:return N1;case 35664:return U1;case 35665:return O1;case 35666:return F1;case 35674:return k1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return G1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return q1;case 36295:return Y1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}function tm(i,t){i.uniform1fv(this.addr,t)}function em(i,t){const e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function nm(i,t){const e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function im(i,t){const e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function sm(i,t){const e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rm(i,t){const e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function am(i,t){const e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function om(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function lm(i,t){i.uniform3iv(this.addr,t)}function hm(i,t){i.uniform4iv(this.addr,t)}function um(i,t){i.uniform1uiv(this.addr,t)}function dm(i,t){i.uniform2uiv(this.addr,t)}function fm(i,t){i.uniform3uiv(this.addr,t)}function pm(i,t){i.uniform4uiv(this.addr,t)}function mm(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||B0,r[a])}function gm(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||H0,r[a])}function xm(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||V0,r[a])}function _m(i,t,e){const n=this.cache,s=t.length,r=Ga(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||G0,r[a])}function Mm(i){switch(i){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return cm;case 35668:case 35672:return lm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return _m}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q1(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function ch(i,t){i.seq.push(t),i.map[t.id]=t}function Sm(i,t,e){const n=i.name,s=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),a=bo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ch(e,l===void 0?new vm(o,i,t):new ym(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new bm(o),ch(e,d)),e=d}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Em=37297;let wm=0;function Tm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hh=new te;function Am(i){ce._getMatrix(hh,ce.workingColorSpace,i);const t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(t),a)}else return s}function Rm(i,t){const e=Am(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cm(i,t){let e;switch(t){case qu:e="Linear";break;case Yu:e="Reinhard";break;case $u:e="Cineon";break;case Ku:e="ACESFilmic";break;case Zu:e="AgX";break;case Ju:e="Neutral";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $r=new $;function Im(){ce.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Lm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function dr(i){return i!==""}function dh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(i){return i.replace(Nm,Om)}const Um=new Map;function Om(i,t){let e=ee[t];if(e===void 0){const n=Um.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pc(e)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(Fm,km)}function km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===m0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fa:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function Vm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=zm(e),l=Bm(e),h=Gm(e),d=Hm(e),u=Vm(e),f=Pm(e),g=Lm(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?ee.tonemapping_pars_fragment:"",e.toneMapping!==_i?Cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),a=Pc(a),a=dh(a,e),a=fh(a,e),o=Pc(o),o=dh(o,e),o=fh(o,e),a=ph(a),o=ph(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,v=x+p+o,w=lh(s,s.VERTEX_SHADER,M),E=lh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(w).trim(),W=s.getShaderInfoLog(E).trim();let J=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const at=uh(s,w,"vertex"),B=uh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+at+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||W==="")&&(F=!1);F&&(P.diagnostics={runnable:J,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(E),C=new Aa(s,_),S=Dm(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Em)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ym(t),e.set(t,n)),n}}class Ym{constructor(t){this.id=Xm++,this.code=t,this.usedTimes=0}}function $m(i,t,e,n,s,r,a){const o=new I0,c=new qm,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,z,H){const W=z.fog,J=H.geometry,F=S.isMeshStandardMaterial?z.environment:null,at=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),B=at&&at.mapping===ka?at.image.height:null,nt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=et!==void 0?et.length:0;let tt=0;J.morphAttributes.position!==void 0&&(tt=1),J.morphAttributes.normal!==void 0&&(tt=2),J.morphAttributes.color!==void 0&&(tt=3);let Ct,K,gt,Tt;if(nt){const ne=kn[nt];Ct=ne.vertexShader,K=ne.fragmentShader}else Ct=S.vertexShader,K=S.fragmentShader,c.update(S),gt=c.getVertexShaderID(S),Tt=c.getFragmentShaderID(S);const ft=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Bt=H.isInstancedMesh===!0,ct=H.isBatchedMesh===!0,Dt=!!S.map,pt=!!S.matcap,Zt=!!at,G=!!S.aoMap,Pe=!!S.lightMap,ie=!!S.bumpMap,It=!!S.normalMap,qt=!!S.displacementMap,se=!!S.emissiveMap,Gt=!!S.metalnessMap,I=!!S.roughnessMap,A=S.anisotropy>0,Z=S.clearcoat>0,xt=S.dispersion>0,_t=S.iridescence>0,mt=S.sheen>0,y=S.transmission>0,L=A&&!!S.anisotropyMap,N=Z&&!!S.clearcoatMap,k=Z&&!!S.clearcoatNormalMap,O=Z&&!!S.clearcoatRoughnessMap,D=_t&&!!S.iridescenceMap,ht=_t&&!!S.iridescenceThicknessMap,Q=mt&&!!S.sheenColorMap,lt=mt&&!!S.sheenRoughnessMap,wt=!!S.specularMap,St=!!S.specularColorMap,Et=!!S.specularIntensityMap,U=y&&!!S.transmissionMap,yt=y&&!!S.thicknessMap,V=!!S.gradientMap,it=!!S.alphaMap,vt=S.alphaTest>0,bt=!!S.alphaHash,Nt=!!S.extensions;let Kt=_i;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Kt=i.toneMapping);const ae={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:K,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ct,batchingColor:ct&&H._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,instancingMorph:Bt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ps,alphaToCoverage:!!S.alphaToCoverage,map:Dt,matcap:pt,envMap:Zt,envMapMode:Zt&&at.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:Pe,bumpMap:ie,normalMap:It,displacementMap:u&&qt,emissiveMap:se,normalMapObjectSpace:It&&S.normalMapType===ed,normalMapTangentSpace:It&&S.normalMapType===Kc,metalnessMap:Gt,roughnessMap:I,anisotropy:A,anisotropyMap:L,clearcoat:Z,clearcoatMap:N,clearcoatNormalMap:k,clearcoatRoughnessMap:O,dispersion:xt,iridescence:_t,iridescenceMap:D,iridescenceThicknessMap:ht,sheen:mt,sheenColorMap:Q,sheenRoughnessMap:lt,specularMap:wt,specularColorMap:St,specularIntensityMap:Et,transmission:y,transmissionMap:U,thicknessMap:yt,gradientMap:V,opaque:S.transparent===!1&&S.blending===bs&&S.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:bt,combine:S.combine,mapUv:Dt&&_(S.map.channel),aoMapUv:G&&_(S.aoMap.channel),lightMapUv:Pe&&_(S.lightMap.channel),bumpMapUv:ie&&_(S.bumpMap.channel),normalMapUv:It&&_(S.normalMap.channel),displacementMapUv:qt&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:Gt&&_(S.metalnessMap.channel),roughnessMapUv:I&&_(S.roughnessMap.channel),anisotropyMapUv:L&&_(S.anisotropyMap.channel),clearcoatMapUv:N&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:k&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(S.sheenRoughnessMap.channel),specularMapUv:wt&&_(S.specularMap.channel),specularColorMapUv:St&&_(S.specularColorMap.channel),specularIntensityMapUv:Et&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:yt&&_(S.thicknessMap.channel),alphaMapUv:it&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(It||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Dt||it),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ot,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Dt&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===me,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const b=g[S.type];let P;if(b){const z=kn[b];P=Id.clone(z.uniforms)}else P=S.uniforms;return P}function w(S,b){let P;for(let z=0,H=h.length;z<H;z++){const W=h[z];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Wm(i,b,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:C}}function Km(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||jm),n.length>1&&n.sort(u||gh),s.length>1&&s.sort(u||gh)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Zm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new xh,i.set(n,[a])):s>=r.length?(a=new xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Ut};break;case"SpotLight":e={position:new $,direction:new $,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let tg=0;function eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ng(i){const t=new Jm,e=Qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new $);const s=new $,r=new kt,a=new kt;function o(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,M=0,v=0,w=0,E=0,T=0;l.sort(eg);for(let S=0,b=l.length;S<b;S++){const P=l[S],z=P.color,H=P.intensity,W=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],H);T++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const at=P.shadow,B=e.get(P);B.shadowIntensity=at.intensity,B.shadowBias=at.bias,B.shadowNormalBias=at.normalBias,B.shadowRadius=at.radius,B.shadowMapSize=at.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=F,f++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(z).multiplyScalar(H),F.distance=W,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[_]=F;const at=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,at.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=at.matrix,P.castShadow){const B=e.get(P);B.shadowIntensity=at.intensity,B.shadowBias=at.bias,B.shadowNormalBias=at.normalBias,B.shadowRadius=at.radius,B.shadowMapSize=at.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=J,v++}_++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(z).multiplyScalar(H),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const at=P.shadow,B=e.get(P);B.shadowIntensity=at.intensity,B.shadowBias=at.bias,B.shadowNormalBias=at.normalBias,B.shadowRadius=at.radius,B.shadowMapSize=at.mapSize,B.shadowCameraNear=at.camera.near,B.shadowCameraFar=at.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(H),F.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==w||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=w,C.numLightProbes=T,n.version=tg++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function _h(i){const t=new ng(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ig(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new _h(i),t.set(s,[o])):r>=a.length?(o=new _h(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class sg extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function cg(i,t,e){let n=new Jc;const s=new re,r=new re,a=new Ie,o=new sg({depthPacking:td}),c=new rg,l={},h=e.maxTextureSize,d={[Mi]:nn,[nn]:Mi,[me]:me},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ag,fragmentShader:og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==jn&&this.type===jn,W=p===jn&&this.type!==jn;for(let J=0,F=E.length;J<F;J++){const at=E[J],B=at.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const nt=B.getFrameExtents();if(s.multiply(nt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,B.mapSize.y=r.y)),B.map===null||H===!0||W===!0){const ot=this.type!==jn?{minFilter:Ke,magFilter:Ke}:{};B.map!==null&&B.map.dispose(),B.map=new Vi(s.x,s.y,ot),B.map.texture.name=at.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const et=B.getViewportCount();for(let ot=0;ot<et;ot++){const tt=B.getViewport(ot);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),z.viewport(a),B.updateMatrices(at,ot),n=B.getFrustum(),v(T,C,B.camera,at,this.type)}B.isPointLightShadow!==!0&&this.type===jn&&x(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)};function x(E,T){const C=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vi(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,f,_,null)}function M(E,T,C,S){let b=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=b.uuid,H=T.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let J=W[H];J===void 0&&(J=b.clone(),W[H]=J,T.addEventListener("dispose",w)),b=J}if(b.visible=T.visible,b.wireframe=T.wireframe,S===jn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=C}return b}function v(E,T,C,S,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===jn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const H=t.update(E),W=E.material;if(Array.isArray(W)){const J=H.groups;for(let F=0,at=J.length;F<at;F++){const B=J[F],nt=W[B.materialIndex];if(nt&&nt.visible){const et=M(E,nt,S,b);E.onBeforeShadow(i,E,T,C,H,et,B),i.renderBufferDirect(C,null,H,et,E,B),E.onAfterShadow(i,E,T,C,H,et,B)}}}else if(W.visible){const J=M(E,W,S,b);E.onBeforeShadow(i,E,T,C,H,J,null),i.renderBufferDirect(C,null,H,J,E,null),E.onAfterShadow(i,E,T,C,H,J,null)}}const z=E.children;for(let H=0,W=z.length;H<W;H++)v(z[H],T,C,S,b)}function w(E){E.target.removeEventListener("dispose",w);for(const C in l){const S=l[C],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const lg={[$o]:Ko,[jo]:Qo,[Zo]:tc,[ws]:Jo,[Ko]:$o,[Qo]:jo,[tc]:Zo,[Jo]:ws};function hg(i,t){function e(){let U=!1;const yt=new Ie;let V=null;const it=new Ie(0,0,0,0);return{setMask:function(vt){V!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),V=vt)},setLocked:function(vt){U=vt},setClear:function(vt,bt,Nt,Kt,ae){ae===!0&&(vt*=Kt,bt*=Kt,Nt*=Kt),yt.set(vt,bt,Nt,Kt),it.equals(yt)===!1&&(i.clearColor(vt,bt,Nt,Kt),it.copy(yt))},reset:function(){U=!1,V=null,it.set(-1,0,0,0)}}}function n(){let U=!1,yt=!1,V=null,it=null,vt=null;return{setReversed:function(bt){if(yt!==bt){const Nt=t.get("EXT_clip_control");yt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const Kt=vt;vt=null,this.setClear(Kt)}yt=bt},getReversed:function(){return yt},setTest:function(bt){bt?ft(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(bt){V!==bt&&!U&&(i.depthMask(bt),V=bt)},setFunc:function(bt){if(yt&&(bt=lg[bt]),it!==bt){switch(bt){case $o:i.depthFunc(i.NEVER);break;case Ko:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=bt}},setLocked:function(bt){U=bt},setClear:function(bt){vt!==bt&&(yt&&(bt=1-bt),i.clearDepth(bt),vt=bt)},reset:function(){U=!1,V=null,it=null,vt=null,yt=!1}}}function s(){let U=!1,yt=null,V=null,it=null,vt=null,bt=null,Nt=null,Kt=null,ae=null;return{setTest:function(ne){U||(ne?ft(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ne){yt!==ne&&!U&&(i.stencilMask(ne),yt=ne)},setFunc:function(ne,cn,Ze){(V!==ne||it!==cn||vt!==Ze)&&(i.stencilFunc(ne,cn,Ze),V=ne,it=cn,vt=Ze)},setOp:function(ne,cn,Ze){(bt!==ne||Nt!==cn||Kt!==Ze)&&(i.stencilOp(ne,cn,Ze),bt=ne,Nt=cn,Kt=Ze)},setLocked:function(ne){U=ne},setClear:function(ne){ae!==ne&&(i.clearStencil(ne),ae=ne)},reset:function(){U=!1,yt=null,V=null,it=null,vt=null,bt=null,Nt=null,Kt=null,ae=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,w=null,E=null,T=new Ut(0,0,0),C=0,S=!1,b=null,P=null,z=null,H=null,W=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,at=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=at>=1):B.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=at>=2);let nt=null,et={};const ot=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),Ct=new Ie().fromArray(ot),K=new Ie().fromArray(tt);function gt(U,yt,V,it){const vt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(U,bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<V;Nt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(yt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return bt}const Tt={};Tt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(ws),ie(!1),It(Sl),ft(i.CULL_FACE),G(xi);function ft(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ot(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Bt(U,yt){return d[U]!==yt?(i.bindFramebuffer(U,yt),d[U]=yt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=yt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ct(U,yt){let V=f,it=!1;if(U){V=u.get(yt),V===void 0&&(V=[],u.set(yt,V));const vt=U.textures;if(V.length!==vt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Nt=vt.length;bt<Nt;bt++)V[bt]=i.COLOR_ATTACHMENT0+bt;V.length=vt.length,it=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,it=!0);it&&i.drawBuffers(V)}function Dt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const pt={[Oi]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};pt[Cu]=i.MIN,pt[Iu]=i.MAX;const Zt={[Pu]:i.ZERO,[Lu]:i.ONE,[Du]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function G(U,yt,V,it,vt,bt,Nt,Kt,ae,ne){if(U===xi){_===!0&&(Ot(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),U!==Tu){if(U!==m||ne!==S){if((p!==Oi||v!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,v=Oi),ne)switch(U){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,M=null,w=null,E=null,T.set(0,0,0),C=0,m=U,S=ne}return}vt=vt||yt,bt=bt||V,Nt=Nt||it,(yt!==p||vt!==v)&&(i.blendEquationSeparate(pt[yt],pt[vt]),p=yt,v=vt),(V!==x||it!==M||bt!==w||Nt!==E)&&(i.blendFuncSeparate(Zt[V],Zt[it],Zt[bt],Zt[Nt]),x=V,M=it,w=bt,E=Nt),(Kt.equals(T)===!1||ae!==C)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ae),T.copy(Kt),C=ae),m=U,S=!1}function Pe(U,yt){U.side===me?Ot(i.CULL_FACE):ft(i.CULL_FACE);let V=U.side===nn;yt&&(V=!V),ie(V),U.blending===bs&&U.transparent===!1?G(xi):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const it=U.stencilWrite;o.setTest(it),it&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function It(U){U!==Su?(ft(i.CULL_FACE),U!==P&&(U===Sl?i.cullFace(i.BACK):U===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),P=U}function qt(U){U!==z&&(F&&i.lineWidth(U),z=U)}function se(U,yt,V){U?(ft(i.POLYGON_OFFSET_FILL),(H!==yt||W!==V)&&(i.polygonOffset(yt,V),H=yt,W=V)):Ot(i.POLYGON_OFFSET_FILL)}function Gt(U){U?ft(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function I(U){U===void 0&&(U=i.TEXTURE0+J-1),nt!==U&&(i.activeTexture(U),nt=U)}function A(U,yt,V){V===void 0&&(nt===null?V=i.TEXTURE0+J-1:V=nt);let it=et[V];it===void 0&&(it={type:void 0,texture:void 0},et[V]=it),(it.type!==U||it.texture!==yt)&&(nt!==V&&(i.activeTexture(V),nt=V),i.bindTexture(U,yt||Tt[U]),it.type=U,it.texture=yt)}function Z(){const U=et[nt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function y(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(U){Ct.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ct.copy(U))}function lt(U){K.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function wt(U,yt){let V=l.get(yt);V===void 0&&(V=new WeakMap,l.set(yt,V));let it=V.get(U);it===void 0&&(it=i.getUniformBlockIndex(yt,U.name),V.set(U,it))}function St(U,yt){const it=l.get(yt).get(U);c.get(yt)!==it&&(i.uniformBlockBinding(yt,it,U.__bindingPointIndex),c.set(yt,it))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,et={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,M=null,v=null,w=null,E=null,T=new Ut(0,0,0),C=0,S=!1,b=null,P=null,z=null,H=null,W=null,Ct.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Ot,bindFramebuffer:Bt,drawBuffers:ct,useProgram:Dt,setBlending:G,setMaterial:Pe,setFlipSided:ie,setCullFace:It,setLineWidth:qt,setPolygonOffset:se,setScissorTest:Gt,activeTexture:I,bindTexture:A,unbindTexture:Z,compressedTexImage2D:xt,compressedTexImage3D:_t,texImage2D:D,texImage3D:ht,updateUBOMapping:wt,uniformBlockBinding:St,texStorage2D:k,texStorage3D:O,texSubImage2D:mt,texSubImage3D:y,compressedTexSubImage2D:L,compressedTexSubImage3D:N,scissor:Q,viewport:lt,reset:Et}}function Mh(i,t,e,n){const s=ug(n);switch(e){case y0:return i*t;case S0:return i*t;case E0:return i*t*2;case Xc:return i*t/s.components*s.byteLength;case qc:return i*t/s.components*s.byteLength;case w0:return i*t*2/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case b0:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:case oc:return Math.max(i,16)*Math.max(t,8)/4;case sc:case ac:return Math.max(i,8)*Math.max(t,8)/2;case cc:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ta:case wc:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case T0:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(i){switch(i){case ni:case _0:return{byteLength:1,components:1};case xr:case M0:case Mr:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case Hi:case Hc:case zn:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function dg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return f?new OffscreenCanvas(I,A):La("canvas")}function _(I,A,Z){let xt=1;const _t=Gt(I);if((_t.width>Z||_t.height>Z)&&(xt=Z/Math.max(_t.width,_t.height)),xt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const mt=Math.floor(xt*_t.width),y=Math.floor(xt*_t.height);d===void 0&&(d=g(mt,y));const L=A?g(mt,y):d;return L.width=mt,L.height=y,L.getContext("2d").drawImage(I,0,0,mt,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+mt+"x"+y+")."),L}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,A,Z,xt,_t=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let mt=A;if(A===i.RED&&(Z===i.FLOAT&&(mt=i.R32F),Z===i.HALF_FLOAT&&(mt=i.R16F),Z===i.UNSIGNED_BYTE&&(mt=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(mt=i.R8UI),Z===i.UNSIGNED_SHORT&&(mt=i.R16UI),Z===i.UNSIGNED_INT&&(mt=i.R32UI),Z===i.BYTE&&(mt=i.R8I),Z===i.SHORT&&(mt=i.R16I),Z===i.INT&&(mt=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(mt=i.RG32F),Z===i.HALF_FLOAT&&(mt=i.RG16F),Z===i.UNSIGNED_BYTE&&(mt=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(mt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(mt=i.RG16UI),Z===i.UNSIGNED_INT&&(mt=i.RG32UI),Z===i.BYTE&&(mt=i.RG8I),Z===i.SHORT&&(mt=i.RG16I),Z===i.INT&&(mt=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),Z===i.UNSIGNED_INT&&(mt=i.RGB32UI),Z===i.BYTE&&(mt=i.RGB8I),Z===i.SHORT&&(mt=i.RGB16I),Z===i.INT&&(mt=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(mt=i.RGBA32UI),Z===i.BYTE&&(mt=i.RGBA8I),Z===i.SHORT&&(mt=i.RGBA16I),Z===i.INT&&(mt=i.RGBA32I)),A===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),A===i.RGBA){const y=_t?za:ce.getTransfer(xt);Z===i.FLOAT&&(mt=i.RGBA32F),Z===i.HALF_FLOAT&&(mt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(mt=y===pe?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function v(I,A){let Z;return I?A===null||A===Hi||A===Rs?Z=i.DEPTH24_STENCIL8:A===zn?Z=i.DEPTH32F_STENCIL8:A===xr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Hi||A===Rs?Z=i.DEPTH_COMPONENT24:A===zn?Z=i.DEPTH_COMPONENT32F:A===xr&&(Z=i.DEPTH_COMPONENT16),Z}function w(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ke&&I.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function E(I){const A=I.target;A.removeEventListener("dispose",E),C(A),A.isVideoTexture&&h.delete(A)}function T(I){const A=I.target;A.removeEventListener("dispose",T),b(A)}function C(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Z=I.source,xt=u.get(Z);if(xt){const _t=xt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&S(I),Object.keys(xt).length===0&&u.delete(Z)}n.remove(I)}function S(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const Z=I.source,xt=u.get(Z);delete xt[A.__cacheKey],a.memory.textures--}function b(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(A.__webglFramebuffer[xt]))for(let _t=0;_t<A.__webglFramebuffer[xt].length;_t++)i.deleteFramebuffer(A.__webglFramebuffer[xt][_t]);else i.deleteFramebuffer(A.__webglFramebuffer[xt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[xt])}else{if(Array.isArray(A.__webglFramebuffer))for(let xt=0;xt<A.__webglFramebuffer.length;xt++)i.deleteFramebuffer(A.__webglFramebuffer[xt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xt=0;xt<A.__webglColorRenderbuffer.length;xt++)A.__webglColorRenderbuffer[xt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[xt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=I.textures;for(let xt=0,_t=Z.length;xt<_t;xt++){const mt=n.get(Z[xt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(Z[xt])}n.remove(I)}let P=0;function z(){P=0}function H(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function W(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function J(I,A){const Z=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const xt=I.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Z,I,A);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function F(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){K(Z,I,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function at(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){K(Z,I,A);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function B(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){gt(Z,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const nt={[Ia]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[ic]:i.MIRRORED_REPEAT},et={[Ke]:i.NEAREST,[x0]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},ot={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[A0]:i.LEQUAL,[sd]:i.EQUAL,[od]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function tt(I,A){if(A.type===zn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===fn||A.magFilter===Ya||A.magFilter===Rr||A.magFilter===gi||A.minFilter===fn||A.minFilter===Ya||A.minFilter===Rr||A.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,nt[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,nt[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,nt[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,et[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,et[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ot[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ke||A.minFilter!==Rr&&A.minFilter!==gi||A.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ct(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",E));const xt=A.source;let _t=u.get(xt);_t===void 0&&(_t={},u.set(xt,_t));const mt=W(A);if(mt!==I.__cacheKey){_t[mt]===void 0&&(_t[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),_t[mt].usedTimes++;const y=_t[I.__cacheKey];y!==void 0&&(_t[I.__cacheKey].usedTimes--,y.usedTimes===0&&S(A)),I.__cacheKey=mt,I.__webglTexture=_t[mt].texture}return Z}function K(I,A,Z){let xt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xt=i.TEXTURE_3D);const _t=Ct(I,A),mt=A.source;e.bindTexture(xt,I.__webglTexture,i.TEXTURE0+Z);const y=n.get(mt);if(mt.version!==y.__version||_t===!0){e.activeTexture(i.TEXTURE0+Z);const L=ce.getPrimaries(ce.workingColorSpace),N=A.colorSpace===Zn?null:ce.getPrimaries(A.colorSpace),k=A.colorSpace===Zn||L===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let O=_(A.image,!1,s.maxTextureSize);O=se(A,O);const D=r.convert(A.format,A.colorSpace),ht=r.convert(A.type);let Q=M(A.internalFormat,D,ht,A.colorSpace,A.isVideoTexture);tt(xt,A);let lt;const wt=A.mipmaps,St=A.isVideoTexture!==!0,Et=y.__version===void 0||_t===!0,U=mt.dataReady,yt=w(A,O);if(A.isDepthTexture)Q=v(A.format===Cs,A.type),Et&&(St?e.texStorage2D(i.TEXTURE_2D,1,Q,O.width,O.height):e.texImage2D(i.TEXTURE_2D,0,Q,O.width,O.height,0,D,ht,null));else if(A.isDataTexture)if(wt.length>0){St&&Et&&e.texStorage2D(i.TEXTURE_2D,yt,Q,wt[0].width,wt[0].height);for(let V=0,it=wt.length;V<it;V++)lt=wt[V],St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,ht,lt.data):e.texImage2D(i.TEXTURE_2D,V,Q,lt.width,lt.height,0,D,ht,lt.data);A.generateMipmaps=!1}else St?(Et&&e.texStorage2D(i.TEXTURE_2D,yt,Q,O.width,O.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,D,ht,O.data)):e.texImage2D(i.TEXTURE_2D,0,Q,O.width,O.height,0,D,ht,O.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){St&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Q,wt[0].width,wt[0].height,O.depth);for(let V=0,it=wt.length;V<it;V++)if(lt=wt[V],A.format!==Un)if(D!==null)if(St){if(U)if(A.layerUpdates.size>0){const vt=Mh(lt.width,lt.height,A.format,A.type);for(const bt of A.layerUpdates){const Nt=lt.data.subarray(bt*vt/lt.data.BYTES_PER_ELEMENT,(bt+1)*vt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,bt,lt.width,lt.height,1,D,Nt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,O.depth,D,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Q,lt.width,lt.height,O.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,O.depth,D,ht,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Q,lt.width,lt.height,O.depth,0,D,ht,lt.data)}else{St&&Et&&e.texStorage2D(i.TEXTURE_2D,yt,Q,wt[0].width,wt[0].height);for(let V=0,it=wt.length;V<it;V++)lt=wt[V],A.format!==Un?D!==null?St?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Q,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,D,ht,lt.data):e.texImage2D(i.TEXTURE_2D,V,Q,lt.width,lt.height,0,D,ht,lt.data)}else if(A.isDataArrayTexture)if(St){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Q,O.width,O.height,O.depth),U)if(A.layerUpdates.size>0){const V=Mh(O.width,O.height,A.format,A.type);for(const it of A.layerUpdates){const vt=O.data.subarray(it*V/O.data.BYTES_PER_ELEMENT,(it+1)*V/O.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,O.width,O.height,1,D,ht,vt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,D,ht,O.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,O.width,O.height,O.depth,0,D,ht,O.data);else if(A.isData3DTexture)St?(Et&&e.texStorage3D(i.TEXTURE_3D,yt,Q,O.width,O.height,O.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,D,ht,O.data)):e.texImage3D(i.TEXTURE_3D,0,Q,O.width,O.height,O.depth,0,D,ht,O.data);else if(A.isFramebufferTexture){if(Et)if(St)e.texStorage2D(i.TEXTURE_2D,yt,Q,O.width,O.height);else{let V=O.width,it=O.height;for(let vt=0;vt<yt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Q,V,it,0,D,ht,null),V>>=1,it>>=1}}else if(wt.length>0){if(St&&Et){const V=Gt(wt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Q,V.width,V.height)}for(let V=0,it=wt.length;V<it;V++)lt=wt[V],St?U&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,D,ht,lt):e.texImage2D(i.TEXTURE_2D,V,Q,D,ht,lt);A.generateMipmaps=!1}else if(St){if(Et){const V=Gt(O);e.texStorage2D(i.TEXTURE_2D,yt,Q,V.width,V.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,ht,O)}else e.texImage2D(i.TEXTURE_2D,0,Q,D,ht,O);m(A)&&p(xt),y.__version=mt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function gt(I,A,Z){if(A.image.length!==6)return;const xt=Ct(I,A),_t=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Z);const mt=n.get(_t);if(_t.version!==mt.__version||xt===!0){e.activeTexture(i.TEXTURE0+Z);const y=ce.getPrimaries(ce.workingColorSpace),L=A.colorSpace===Zn?null:ce.getPrimaries(A.colorSpace),N=A.colorSpace===Zn||y===L?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const k=A.isCompressedTexture||A.image[0].isCompressedTexture,O=A.image[0]&&A.image[0].isDataTexture,D=[];for(let it=0;it<6;it++)!k&&!O?D[it]=_(A.image[it],!0,s.maxCubemapSize):D[it]=O?A.image[it].image:A.image[it],D[it]=se(A,D[it]);const ht=D[0],Q=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),wt=M(A.internalFormat,Q,lt,A.colorSpace),St=A.isVideoTexture!==!0,Et=mt.__version===void 0||xt===!0,U=_t.dataReady;let yt=w(A,ht);tt(i.TEXTURE_CUBE_MAP,A);let V;if(k){St&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,wt,ht.width,ht.height);for(let it=0;it<6;it++){V=D[it].mipmaps;for(let vt=0;vt<V.length;vt++){const bt=V[vt];A.format!==Un?Q!==null?St?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,bt.width,bt.height,Q,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,bt.width,bt.height,Q,lt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,wt,bt.width,bt.height,0,Q,lt,bt.data)}}}else{if(V=A.mipmaps,St&&Et){V.length>0&&yt++;const it=Gt(D[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,wt,it.width,it.height)}for(let it=0;it<6;it++)if(O){St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,D[it].width,D[it].height,Q,lt,D[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,wt,D[it].width,D[it].height,0,Q,lt,D[it].data);for(let vt=0;vt<V.length;vt++){const Nt=V[vt].image[it].image;St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Nt.width,Nt.height,Q,lt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,wt,Nt.width,Nt.height,0,Q,lt,Nt.data)}}else{St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q,lt,D[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,wt,Q,lt,D[it]);for(let vt=0;vt<V.length;vt++){const bt=V[vt];St?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Q,lt,bt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,wt,Q,lt,bt.image[it])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),mt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Tt(I,A,Z,xt,_t,mt){const y=r.convert(Z.format,Z.colorSpace),L=r.convert(Z.type),N=M(Z.internalFormat,y,L,Z.colorSpace),k=n.get(A),O=n.get(Z);if(O.__renderTarget=A,!k.__hasExternalTextures){const D=Math.max(1,A.width>>mt),ht=Math.max(1,A.height>>mt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,mt,N,D,ht,A.depth,0,y,L,null):e.texImage2D(_t,mt,N,D,ht,0,y,L,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),It(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,_t,O.__webglTexture,0,ie(A)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xt,_t,O.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(I,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const xt=A.depthTexture,_t=xt&&xt.isDepthTexture?xt.type:null,mt=v(A.stencilBuffer,_t),y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=ie(A);It(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L,mt,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,L,mt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,I)}else{const xt=A.textures;for(let _t=0;_t<xt.length;_t++){const mt=xt[_t],y=r.convert(mt.format,mt.colorSpace),L=r.convert(mt.type),N=M(mt.internalFormat,y,L,mt.colorSpace),k=ie(A);Z&&It(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,N,A.width,A.height):It(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,N,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,N,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=n.get(A.depthTexture);xt.__renderTarget=A,(!xt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const _t=xt.__webglTexture,mt=ie(A);if(A.depthTexture.format===Ss)It(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(A.depthTexture.format===Cs)It(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Bt(I){const A=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const xt=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),xt){const _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,xt.removeEventListener("dispose",_t)};xt.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=xt}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ot(A.__webglFramebuffer,I)}else if(Z){A.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[xt]),A.__webglDepthbuffer[xt]===void 0)A.__webglDepthbuffer[xt]=i.createRenderbuffer(),ft(A.__webglDepthbuffer[xt],I,!1);else{const _t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[xt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ft(A.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,A,Z){const xt=n.get(I);A!==void 0&&Tt(xt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Bt(I)}function Dt(I){const A=I.texture,Z=n.get(I),xt=n.get(A);I.addEventListener("dispose",T);const _t=I.textures,mt=I.isWebGLCubeRenderTarget===!0,y=_t.length>1;if(y||(xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture()),xt.__version=A.version,a.memory.textures++),mt){Z.__webglFramebuffer=[];for(let L=0;L<6;L++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[L]=[];for(let N=0;N<A.mipmaps.length;N++)Z.__webglFramebuffer[L][N]=i.createFramebuffer()}else Z.__webglFramebuffer[L]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let L=0;L<A.mipmaps.length;L++)Z.__webglFramebuffer[L]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(y)for(let L=0,N=_t.length;L<N;L++){const k=n.get(_t[L]);k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&It(I)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let L=0;L<_t.length;L++){const N=_t[L];Z.__webglColorRenderbuffer[L]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[L]);const k=r.convert(N.format,N.colorSpace),O=r.convert(N.type),D=M(N.internalFormat,k,O,N.colorSpace,I.isXRRenderTarget===!0),ht=ie(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,D,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,Z.__webglColorRenderbuffer[L])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(Z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,A);for(let L=0;L<6;L++)if(A.mipmaps&&A.mipmaps.length>0)for(let N=0;N<A.mipmaps.length;N++)Tt(Z.__webglFramebuffer[L][N],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,N);else Tt(Z.__webglFramebuffer[L],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(y){for(let L=0,N=_t.length;L<N;L++){const k=_t[L],O=n.get(k);e.bindTexture(i.TEXTURE_2D,O.__webglTexture),tt(i.TEXTURE_2D,k),Tt(Z.__webglFramebuffer,I,k,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,0),m(k)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let L=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(L=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(L,xt.__webglTexture),tt(L,A),A.mipmaps&&A.mipmaps.length>0)for(let N=0;N<A.mipmaps.length;N++)Tt(Z.__webglFramebuffer[N],I,A,i.COLOR_ATTACHMENT0,L,N);else Tt(Z.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,L,0);m(A)&&p(L),e.unbindTexture()}I.depthBuffer&&Bt(I)}function pt(I){const A=I.textures;for(let Z=0,xt=A.length;Z<xt;Z++){const _t=A[Z];if(m(_t)){const mt=x(I),y=n.get(_t).__webglTexture;e.bindTexture(mt,y),p(mt),e.unbindTexture()}}}const Zt=[],G=[];function Pe(I){if(I.samples>0){if(It(I)===!1){const A=I.textures,Z=I.width,xt=I.height;let _t=i.COLOR_BUFFER_BIT;const mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,y=n.get(I),L=A.length>1;if(L)for(let N=0;N<A.length;N++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,y.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let N=0;N<A.length;N++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),L){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,y.__webglColorRenderbuffer[N]);const k=n.get(A[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,Z,xt,0,0,Z,xt,_t,i.NEAREST),c===!0&&(Zt.length=0,G.length=0,Zt.push(i.COLOR_ATTACHMENT0+N),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Zt.push(mt),G.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),L)for(let N=0;N<A.length;N++){e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,y.__webglColorRenderbuffer[N]);const k=n.get(A[N]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ie(I){return Math.min(s.maxSamples,I.samples)}function It(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function se(I,A){const Z=I.colorSpace,xt=I.format,_t=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Ps&&Z!==Zn&&(ce.getTransfer(Z)===pe?(xt!==Un||_t!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Gt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=at,this.setTextureCube=B,this.rebindTextures=ct,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=It}function fg(i,t){function e(n,s=Zn){let r;const a=ce.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===v0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_0)return i.BYTE;if(n===M0)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===b0)return i.RGB;if(n===Un)return i.RGBA;if(n===S0)return i.LUMINANCE;if(n===E0)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===w0)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===ba||n===Sa||n===Ea||n===wa)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===ac||n===oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===lc||n===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===lc)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===Mc||n===vc||n===yc||n===bc||n===Sc||n===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===wc||n===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===T0||n===Ac||n===Rc||n===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class pg extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vn extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vi({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends Ls{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new _g,m=e.getContextAttributes();let p=null,x=null;const M=[],v=[],w=new re;let E=null;const T=new Mn;T.viewport=new Ie;const C=new Mn;C.viewport=new Ie;const S=[T,C],b=new pg;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=M[K];return gt===void 0&&(gt=new So,M[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=M[K];return gt===void 0&&(gt=new So,M[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=M[K];return gt===void 0&&(gt=new So,M[K]=gt),gt.getHandSpace()};function H(K){const gt=v.indexOf(K.inputSource);if(gt===-1)return;const Tt=M[gt];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,l||a),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){const gt=v[K];gt!==null&&(v[K]=null,M[K].disconnect(gt))}P=null,z=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,Tt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Cs:Ss,Tt=m.stencil?Rs:Hi);const Ot={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Vi(u.textureWidth,u.textureHeight,{format:Un,type:ni,depthTexture:new z0(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(K){for(let gt=0;gt<K.removed.length;gt++){const Tt=K.removed[gt],ft=v.indexOf(Tt);ft>=0&&(v[ft]=null,M[ft].disconnect(Tt))}for(let gt=0;gt<K.added.length;gt++){const Tt=K.added[gt];let ft=v.indexOf(Tt);if(ft===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=v.length){v.push(Tt),ft=Bt;break}else if(v[Bt]===null){v[Bt]=Tt,ft=Bt;break}if(ft===-1)break}const Ot=M[ft];Ot&&Ot.connect(Tt)}}const F=new $,at=new $;function B(K,gt,Tt){F.setFromMatrixPosition(gt.matrixWorld),at.setFromMatrixPosition(Tt.matrixWorld);const ft=F.distanceTo(at),Ot=gt.projectionMatrix.elements,Bt=Tt.projectionMatrix.elements,ct=Ot[14]/(Ot[10]-1),Dt=Ot[14]/(Ot[10]+1),pt=(Ot[9]+1)/Ot[5],Zt=(Ot[9]-1)/Ot[5],G=(Ot[8]-1)/Ot[0],Pe=(Bt[8]+1)/Bt[0],ie=ct*G,It=ct*Pe,qt=ft/(-G+Pe),se=qt*-G;if(gt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(se),K.translateZ(qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ot[10]===-1)K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Gt=ct+qt,I=Dt+qt,A=ie-se,Z=It+(ft-se),xt=pt*Dt/I*Gt,_t=Zt*Dt/I*Gt;K.projectionMatrix.makePerspective(A,Z,xt,_t,Gt,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let gt=K.near,Tt=K.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),b.near=C.near=T.near=gt,b.far=C.far=T.far=Tt,(P!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far),T.layers.mask=K.layers.mask|2,C.layers.mask=K.layers.mask|4,b.layers.mask=T.layers.mask|C.layers.mask;const ft=K.parent,Ot=b.cameras;nt(b,ft);for(let Bt=0;Bt<Ot.length;Bt++)nt(Ot[Bt],ft);Ot.length===2?B(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),et(K,b,ft)};function et(K,gt,Tt){Tt===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ic*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ot=null;function tt(K,gt){if(h=gt.getViewerPose(l||a),g=gt,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ft=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let Bt=0;Bt<Tt.length;Bt++){const ct=Tt[Bt];let Dt=null;if(f!==null)Dt=f.getViewport(ct);else{const Zt=d.getViewSubImage(u,ct);Dt=Zt.viewport,Bt===0&&(t.setRenderTargetTextures(x,Zt.colorTexture,u.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(x))}let pt=S[Bt];pt===void 0&&(pt=new Mn,pt.layers.enable(Bt),pt.viewport=new Ie,S[Bt]=pt),pt.matrix.fromArray(ct.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ct.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Bt===0&&(b.matrix.copy(pt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(pt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Bt=d.getDepthInformation(Tt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let Tt=0;Tt<M.length;Tt++){const ft=v[Tt],Ot=M[Tt];ft!==null&&Ot!==void 0&&Ot.update(ft,gt,l||a)}ot&&ot(K,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}const Ct=new F0;Ct.setAnimationLoop(tt),this.setAnimationLoop=function(K){ot=K},this.dispose=function(){}}}const Ii=new yn,vg=new kt;function yg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,N0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ii)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const v=M.program;n.uniformBlockBinding(x,v)}function l(x,M){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(x,w);const E=t.render.frame;r[x.id]!==E&&(u(x),r[x.id]=E)}function h(x){const M=d();x.__bindingPointIndex=M;const v=i.createBuffer(),w=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=s[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,b=C.length;S<b;S++){const P=C[S];if(f(P,E,S,w)===!0){const z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let J=0;J<H.length;J++){const F=H[J],at=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,z+W,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,W),W+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,v,w){const E=x.value,T=M+"_"+v;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{const C=w[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return w[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const M=x.uniforms;let v=0;const w=16;for(let T=0,C=M.length;T<C;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,P=S.length;b<P;b++){const z=S[b],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,J=H.length;W<J;W++){const F=H[W],at=_(F),B=v%w,nt=B%at.boundary,et=B+nt;v+=nt,et!==0&&w-et<at.storage&&(v+=w-et),z.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=at.storage}}}const E=v%w;return E>0&&(v+=w-E),x.__size=v,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Sg{constructor(t={}){const{canvas:e=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let w=!1,E=0,T=0,C=null,S=-1,b=null;const P=new Ie,z=new Ie;let H=null;const W=new Ut(0);let J=0,F=e.width,at=e.height,B=1,nt=null,et=null;const ot=new Ie(0,0,F,at),tt=new Ie(0,0,F,at);let Ct=!1;const K=new Jc;let gt=!1,Tt=!1;const ft=new kt,Ot=new kt,Bt=new $,ct=new Ie,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Zt(){return C===null?B:1}let G=n;function Pe(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),G===null){const X="webgl2";if(G=Pe(X,R),G===null)throw Pe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,It,qt,se,Gt,I,A,Z,xt,_t,mt,y,L,N,k,O,D,ht,Q,lt,wt,St,Et,U;function yt(){ie=new R1(G),ie.init(),St=new fg(G,ie),It=new b1(G,ie,t,St),qt=new hg(G,ie),It.reverseDepthBuffer&&u&&qt.buffers.depth.setReversed(!0),se=new P1(G),Gt=new Km,I=new dg(G,ie,qt,Gt,It,St,se),A=new E1(v),Z=new A1(v),xt=new Fd(G),Et=new v1(G,xt),_t=new C1(G,xt,se,Et),mt=new D1(G,_t,xt,se),Q=new L1(G,It,I),O=new S1(Gt),y=new $m(v,A,Z,ie,It,Et,O),L=new yg(v,Gt),N=new Zm,k=new ig(ie),ht=new M1(v,A,Z,qt,mt,f,c),D=new cg(v,mt,It),U=new bg(G,se,It,qt),lt=new y1(G,ie,se),wt=new I1(G,ie,se),se.programs=y.programs,v.capabilities=It,v.extensions=ie,v.properties=Gt,v.renderLists=N,v.shadowMap=D,v.state=qt,v.info=se}yt();const V=new Mg(v,G);this.xr=V,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(F,at,!1))},this.getSize=function(R){return R.set(F,at)},this.setSize=function(R,X,st=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,at=X,e.width=Math.floor(R*B),e.height=Math.floor(X*B),st===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(F*B,at*B).floor()},this.setDrawingBufferSize=function(R,X,st){F=R,at=X,B=st,e.width=Math.floor(R*st),e.height=Math.floor(X*st),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,X,st,rt){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,X,st,rt),qt.viewport(P.copy(ot).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(tt)},this.setScissor=function(R,X,st,rt){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,X,st,rt),qt.scissor(z.copy(tt).multiplyScalar(B).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){qt.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){nt=R},this.setTransparentSort=function(R){et=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(R=!0,X=!0,st=!0){let rt=0;if(R){let Y=!1;if(C!==null){const At=C.texture.format;Y=At===$c||At===Yc||At===qc}if(Y){const At=C.texture.type,Lt=At===ni||At===Hi||At===xr||At===Rs||At===Vc||At===Wc,Ht=ht.getClearColor(),Vt=ht.getClearAlpha(),jt=Ht.r,Qt=Ht.g,Wt=Ht.b;Lt?(g[0]=jt,g[1]=Qt,g[2]=Wt,g[3]=Vt,G.clearBufferuiv(G.COLOR,0,g)):(_[0]=jt,_[1]=Qt,_[2]=Wt,_[3]=Vt,G.clearBufferiv(G.COLOR,0,_))}else rt|=G.COLOR_BUFFER_BIT}X&&(rt|=G.DEPTH_BUFFER_BIT),st&&(rt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),N.dispose(),k.dispose(),Gt.dispose(),A.dispose(),Z.dispose(),mt.dispose(),Et.dispose(),U.dispose(),y.dispose(),V.dispose(),V.removeEventListener("sessionstart",ml),V.removeEventListener("sessionend",gl),Ei.stop()};function it(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=se.autoReset,X=D.enabled,st=D.autoUpdate,rt=D.needsUpdate,Y=D.type;yt(),se.autoReset=R,D.enabled=X,D.autoUpdate=st,D.needsUpdate=rt,D.type=Y}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nt(R){const X=R.target;X.removeEventListener("dispose",Nt),Kt(X)}function Kt(R){ae(R),Gt.remove(R)}function ae(R){const X=Gt.get(R).programs;X!==void 0&&(X.forEach(function(st){y.releaseProgram(st)}),R.isShaderMaterial&&y.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,st,rt,Y,At){X===null&&(X=Dt);const Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=vu(R,X,st,rt,Y);qt.setMaterial(rt,Lt);let Vt=st.index,jt=1;if(rt.wireframe===!0){if(Vt=_t.getWireframeAttribute(st),Vt===void 0)return;jt=2}const Qt=st.drawRange,Wt=st.attributes.position;let le=Qt.start*jt,Me=(Qt.start+Qt.count)*jt;At!==null&&(le=Math.max(le,At.start*jt),Me=Math.min(Me,(At.start+At.count)*jt)),Vt!==null?(le=Math.max(le,0),Me=Math.min(Me,Vt.count)):Wt!=null&&(le=Math.max(le,0),Me=Math.min(Me,Wt.count));const Se=Me-le;if(Se<0||Se===1/0)return;Et.setup(Y,rt,Ht,st,Vt);let rn,ue=lt;if(Vt!==null&&(rn=xt.get(Vt),ue=wt,ue.setIndex(rn)),Y.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*Zt()),ue.setMode(G.LINES)):ue.setMode(G.TRIANGLES);else if(Y.isLine){let Xt=rt.linewidth;Xt===void 0&&(Xt=1),qt.setLineWidth(Xt*Zt()),Y.isLineSegments?ue.setMode(G.LINES):Y.isLineLoop?ue.setMode(G.LINE_LOOP):ue.setMode(G.LINE_STRIP)}else Y.isPoints?ue.setMode(G.POINTS):Y.isSprite&&ue.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ue.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ue.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,Hn=Y._multiDrawCounts,de=Y._multiDrawCount,Sn=Vt?xt.get(Vt).bytesPerElement:1,Ki=Gt.get(rt).currentProgram.getUniforms();for(let ln=0;ln<de;ln++)Ki.setValue(G,"_gl_DrawID",ln),ue.render(Xt[ln]/Sn,Hn[ln])}else if(Y.isInstancedMesh)ue.renderInstances(le,Se,Y.count);else if(st.isInstancedBufferGeometry){const Xt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Hn=Math.min(st.instanceCount,Xt);ue.renderInstances(le,Se,Hn)}else ue.render(le,Se)};function ne(R,X,st){R.transparent===!0&&R.side===me&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,Ar(R,X,st),R.side=Mi,R.needsUpdate=!0,Ar(R,X,st),R.side=me):Ar(R,X,st)}this.compile=function(R,X,st=null){st===null&&(st=R),p=k.get(st),p.init(X),M.push(p),st.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==st&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const rt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ht=At[Lt];ne(Ht,st,Y),rt.add(Ht)}else ne(At,st,Y),rt.add(At)}),M.pop(),p=null,rt},this.compileAsync=function(R,X,st=null){const rt=this.compile(R,X,st);return new Promise(Y=>{function At(){if(rt.forEach(function(Lt){Gt.get(Lt).currentProgram.isReady()&&rt.delete(Lt)}),rt.size===0){Y(R);return}setTimeout(At,10)}ie.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let cn=null;function Ze(R){cn&&cn(R)}function ml(){Ei.stop()}function gl(){Ei.start()}const Ei=new F0;Ei.setAnimationLoop(Ze),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){cn=R,V.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},V.addEventListener("sessionstart",ml),V.addEventListener("sessionend",gl),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(X),X=V.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,C),p=k.get(R,M.length),p.init(X),M.push(p),Ot.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Ot),Tt=this.localClippingEnabled,gt=O.init(this.clippingPlanes,Tt),m=N.get(R,x.length),m.init(),x.push(m),V.enabled===!0&&V.isPresenting===!0){const At=v.xr.getDepthSensingMesh();At!==null&&qa(At,X,-1/0,v.sortObjects)}qa(R,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,et),pt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,pt&&ht.addToRenderList(m,R),this.info.render.frame++,gt===!0&&O.beginShadows();const st=p.state.shadowsArray;D.render(st,R,X),gt===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=m.opaque,Y=m.transmissive;if(p.setupLights(),X.isArrayCamera){const At=X.cameras;if(Y.length>0)for(let Lt=0,Ht=At.length;Lt<Ht;Lt++){const Vt=At[Lt];_l(rt,Y,R,Vt)}pt&&ht.render(R);for(let Lt=0,Ht=At.length;Lt<Ht;Lt++){const Vt=At[Lt];xl(m,R,Vt,Vt.viewport)}}else Y.length>0&&_l(rt,Y,R,X),pt&&ht.render(R),xl(m,R,X);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,X),Et.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],gt===!0&&O.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function qa(R,X,st,rt){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){rt&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ot);const Lt=mt.update(R),Ht=R.material;Ht.visible&&m.push(R,Lt,Ht,st,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Lt=mt.update(R),Ht=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ct.copy(Lt.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Ot)),Array.isArray(Ht)){const Vt=Lt.groups;for(let jt=0,Qt=Vt.length;jt<Qt;jt++){const Wt=Vt[jt],le=Ht[Wt.materialIndex];le&&le.visible&&m.push(R,Lt,le,st,ct.z,Wt)}}else Ht.visible&&m.push(R,Lt,Ht,st,ct.z,null)}}const At=R.children;for(let Lt=0,Ht=At.length;Lt<Ht;Lt++)qa(At[Lt],X,st,rt)}function xl(R,X,st,rt){const Y=R.opaque,At=R.transmissive,Lt=R.transparent;p.setupLightsView(st),gt===!0&&O.setGlobalState(v.clippingPlanes,st),rt&&qt.viewport(P.copy(rt)),Y.length>0&&Tr(Y,X,st),At.length>0&&Tr(At,X,st),Lt.length>0&&Tr(Lt,X,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function _l(R,X,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[rt.id]===void 0&&(p.state.transmissionRenderTarget[rt.id]=new Vi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Mr:ni,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const At=p.state.transmissionRenderTarget[rt.id],Lt=rt.viewport||P;At.setSize(Lt.z,Lt.w);const Ht=v.getRenderTarget();v.setRenderTarget(At),v.getClearColor(W),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),pt&&ht.render(st);const Vt=v.toneMapping;v.toneMapping=_i;const jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),p.setupLightsView(rt),gt===!0&&O.setGlobalState(v.clippingPlanes,rt),Tr(R,st,rt),I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,le=X.length;Wt<le;Wt++){const Me=X[Wt],Se=Me.object,rn=Me.geometry,ue=Me.material,Xt=Me.group;if(ue.side===me&&Se.layers.test(rt.layers)){const Hn=ue.side;ue.side=nn,ue.needsUpdate=!0,Ml(Se,st,rt,rn,ue,Xt),ue.side=Hn,ue.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(At),I.updateRenderTargetMipmap(At))}v.setRenderTarget(Ht),v.setClearColor(W,J),jt!==void 0&&(rt.viewport=jt),v.toneMapping=Vt}function Tr(R,X,st){const rt=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,At=R.length;Y<At;Y++){const Lt=R[Y],Ht=Lt.object,Vt=Lt.geometry,jt=rt===null?Lt.material:rt,Qt=Lt.group;Ht.layers.test(st.layers)&&Ml(Ht,X,st,Vt,jt,Qt)}}function Ml(R,X,st,rt,Y,At){R.onBeforeRender(v,X,st,rt,Y,At),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,X,st,rt,R,At),Y.transparent===!0&&Y.side===me&&Y.forceSinglePass===!1?(Y.side=nn,Y.needsUpdate=!0,v.renderBufferDirect(st,X,rt,Y,R,At),Y.side=Mi,Y.needsUpdate=!0,v.renderBufferDirect(st,X,rt,Y,R,At),Y.side=me):v.renderBufferDirect(st,X,rt,Y,R,At),R.onAfterRender(v,X,st,rt,Y,At)}function Ar(R,X,st){X.isScene!==!0&&(X=Dt);const rt=Gt.get(R),Y=p.state.lights,At=p.state.shadowsArray,Lt=Y.state.version,Ht=y.getParameters(R,Y.state,At,X,st),Vt=y.getProgramCacheKey(Ht);let jt=rt.programs;rt.environment=R.isMeshStandardMaterial?X.environment:null,rt.fog=X.fog,rt.envMap=(R.isMeshStandardMaterial?Z:A).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Nt),jt=new Map,rt.programs=jt);let Qt=jt.get(Vt);if(Qt!==void 0){if(rt.currentProgram===Qt&&rt.lightsStateVersion===Lt)return yl(R,Ht),Qt}else Ht.uniforms=y.getUniforms(R),R.onBeforeCompile(Ht,v),Qt=y.acquireProgram(Ht,Vt),jt.set(Vt,Qt),rt.uniforms=Ht.uniforms;const Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=O.uniform),yl(R,Ht),rt.needsLights=bu(R),rt.lightsStateVersion=Lt,rt.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=Qt,rt.uniformsList=null,Qt}function vl(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Aa.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function yl(R,X){const st=Gt.get(R);st.outputColorSpace=X.outputColorSpace,st.batching=X.batching,st.batchingColor=X.batchingColor,st.instancing=X.instancing,st.instancingColor=X.instancingColor,st.instancingMorph=X.instancingMorph,st.skinning=X.skinning,st.morphTargets=X.morphTargets,st.morphNormals=X.morphNormals,st.morphColors=X.morphColors,st.morphTargetsCount=X.morphTargetsCount,st.numClippingPlanes=X.numClippingPlanes,st.numIntersection=X.numClipIntersection,st.vertexAlphas=X.vertexAlphas,st.vertexTangents=X.vertexTangents,st.toneMapping=X.toneMapping}function vu(R,X,st,rt,Y){X.isScene!==!0&&(X=Dt),I.resetTextureUnits();const At=X.fog,Lt=rt.isMeshStandardMaterial?X.environment:null,Ht=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ps,Vt=(rt.isMeshStandardMaterial?Z:A).get(rt.envMap||Lt),jt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!st.morphAttributes.position,le=!!st.morphAttributes.normal,Me=!!st.morphAttributes.color;let Se=_i;rt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);const rn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ue=rn!==void 0?rn.length:0,Xt=Gt.get(rt),Hn=p.state.lights;if(gt===!0&&(Tt===!0||R!==b)){const mn=R===b&&rt.id===S;O.setState(rt,R,mn)}let de=!1;rt.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Hn.state.version||Xt.outputColorSpace!==Ht||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==Vt||rt.fog===!0&&Xt.fog!==At||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==O.numPlanes||Xt.numIntersection!==O.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Wt||Xt.morphNormals!==le||Xt.morphColors!==Me||Xt.toneMapping!==Se||Xt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Xt.__version=rt.version);let Sn=Xt.currentProgram;de===!0&&(Sn=Ar(rt,X,Y));let Ki=!1,ln=!1,Vs=!1;const Ee=Sn.getUniforms(),Fn=Xt.uniforms;if(qt.useProgram(Sn.program)&&(Ki=!0,ln=!0,Vs=!0),rt.id!==S&&(S=rt.id,ln=!0),Ki||b!==R){qt.buffers.depth.getReversed()?(ft.copy(R.projectionMatrix),dd(ft),fd(ft),Ee.setValue(G,"projectionMatrix",ft)):Ee.setValue(G,"projectionMatrix",R.projectionMatrix),Ee.setValue(G,"viewMatrix",R.matrixWorldInverse);const si=Ee.map.cameraPosition;si!==void 0&&si.setValue(G,Bt.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Ee.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ee.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,ln=!0,Vs=!0)}if(Y.isSkinnedMesh){Ee.setOptional(G,Y,"bindMatrix"),Ee.setOptional(G,Y,"bindMatrixInverse");const mn=Y.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ee.setValue(G,"boneTexture",mn.boneTexture,I))}Y.isBatchedMesh&&(Ee.setOptional(G,Y,"batchingTexture"),Ee.setValue(G,"batchingTexture",Y._matricesTexture,I),Ee.setOptional(G,Y,"batchingIdTexture"),Ee.setValue(G,"batchingIdTexture",Y._indirectTexture,I),Ee.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ee.setValue(G,"batchingColorTexture",Y._colorsTexture,I));const Ws=st.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Q.update(Y,st,Sn),(ln||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,Ee.setValue(G,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Fn.envMap.value=Vt,Fn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&X.environment!==null&&(Fn.envMapIntensity.value=X.environmentIntensity),ln&&(Ee.setValue(G,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&yu(Fn,Vs),At&&rt.fog===!0&&L.refreshFogUniforms(Fn,At),L.refreshMaterialUniforms(Fn,rt,B,at,p.state.transmissionRenderTarget[R.id]),Aa.upload(G,vl(Xt),Fn,I)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Aa.upload(G,vl(Xt),Fn,I),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ee.setValue(G,"center",Y.center),Ee.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Ee.setValue(G,"normalMatrix",Y.normalMatrix),Ee.setValue(G,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const mn=rt.uniformsGroups;for(let si=0,ri=mn.length;si<ri;si++){const bl=mn[si];U.update(bl,Sn),U.bind(bl,Sn)}}return Sn}function yu(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function bu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,st){Gt.get(R.texture).__webglTexture=X,Gt.get(R.depthTexture).__webglTexture=st;const rt=Gt.get(R);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const st=Gt.get(R);st.__webglFramebuffer=X,st.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,st=0){C=R,E=X,T=st;let rt=!0,Y=null,At=!1,Lt=!1;if(R){const Vt=Gt.get(R);if(Vt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(G.FRAMEBUFFER,null),rt=!1;else if(Vt.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Vt.__hasExternalTextures)I.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Vt.__boundDepthTexture!==Wt){if(Wt!==null&&Gt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const Qt=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?Y=Qt[X][st]:Y=Qt[X],At=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?Y=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Y=Qt[st]:Y=Qt,P.copy(R.viewport),z.copy(R.scissor),H=R.scissorTest}else P.copy(ot).multiplyScalar(B).floor(),z.copy(tt).multiplyScalar(B).floor(),H=Ct;if(qt.bindFramebuffer(G.FRAMEBUFFER,Y)&&rt&&qt.drawBuffers(R,Y),qt.viewport(P),qt.scissor(z),qt.setScissorTest(H),At){const Vt=Gt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Vt.__webglTexture,st)}else if(Lt){const Vt=Gt.get(R.texture),jt=X||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.__webglTexture,st||0,jt)}S=-1},this.readRenderTargetPixels=function(R,X,st,rt,Y,At,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const Vt=R.texture,jt=Vt.format,Qt=Vt.type;if(!It.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-rt&&st>=0&&st<=R.height-Y&&G.readPixels(X,st,rt,Y,St.convert(jt),St.convert(Qt),At)}finally{const Vt=C!==null?Gt.get(C).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,X,st,rt,Y,At,Lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){const Vt=R.texture,jt=Vt.format,Qt=Vt.type;if(!It.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-rt&&st>=0&&st<=R.height-Y){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const Wt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.bufferData(G.PIXEL_PACK_BUFFER,At.byteLength,G.STREAM_READ),G.readPixels(X,st,rt,Y,St.convert(jt),St.convert(Qt),0);const le=C!==null?Gt.get(C).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,le);const Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ud(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Wt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,At),G.deleteBuffer(Wt),G.deleteSync(Me),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,st=0){R.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const rt=Math.pow(2,-st),Y=Math.floor(R.image.width*rt),At=Math.floor(R.image.height*rt),Lt=X!==null?X.x:0,Ht=X!==null?X.y:0;I.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Lt,Ht,Y,At),qt.unbindTexture()},this.copyTextureToTexture=function(R,X,st=null,rt=null,Y=0){R.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,R=arguments[1],X=arguments[2],Y=arguments[3]||0,st=null);let At,Lt,Ht,Vt,jt,Qt,Wt,le,Me;const Se=R.isCompressedTexture?R.mipmaps[Y]:R.image;st!==null?(At=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,Vt=st.min.x,jt=st.min.y,Qt=st.isBox3?st.min.z:0):(At=Se.width,Lt=Se.height,Ht=Se.depth||1,Vt=0,jt=0,Qt=0),rt!==null?(Wt=rt.x,le=rt.y,Me=rt.z):(Wt=0,le=0,Me=0);const rn=St.convert(X.format),ue=St.convert(X.type);let Xt;X.isData3DTexture?(I.setTexture3D(X,0),Xt=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Xt=G.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Xt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Hn=G.getParameter(G.UNPACK_ROW_LENGTH),de=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Sn=G.getParameter(G.UNPACK_SKIP_PIXELS),Ki=G.getParameter(G.UNPACK_SKIP_ROWS),ln=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Se.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt);const Vs=R.isDataArrayTexture||R.isData3DTexture,Ee=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Fn=Gt.get(R),Ws=Gt.get(X),mn=Gt.get(Fn.__renderTarget),si=Gt.get(Ws.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,mn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Ht;ri++)Vs&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,Y,Qt+ri),R.isDepthTexture?(Ee&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(X).__webglTexture,Y,Me+ri),G.blitFramebuffer(Vt,jt,At,Lt,Wt,le,At,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST)):Ee?G.copyTexSubImage3D(Xt,Y,Wt,le,Me+ri,Vt,jt,At,Lt):G.copyTexSubImage2D(Xt,Y,Wt,le,Me+ri,Vt,jt,At,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Xt,Y,Wt,le,Me,At,Lt,Ht,rn,ue,Se.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Xt,Y,Wt,le,Me,At,Lt,Ht,rn,Se.data):G.texSubImage3D(Xt,Y,Wt,le,Me,At,Lt,Ht,rn,ue,Se):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,Wt,le,At,Lt,rn,ue,Se.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,Wt,le,Se.width,Se.height,rn,Se.data):G.texSubImage2D(G.TEXTURE_2D,Y,Wt,le,At,Lt,rn,ue,Se);G.pixelStorei(G.UNPACK_ROW_LENGTH,Hn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,de),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Sn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ki),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ln),Y===0&&X.generateMipmaps&&G.generateMipmap(Xt),qt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,st=null,rt=null,Y=0){return R.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,rt=arguments[1]||null,R=arguments[2],X=arguments[3],Y=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,st,rt,Y)},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,qt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eg extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class W0 extends je{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ke,h=Ke,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new kt,yh=new kt,Kr=[],bh=new Yi,wg=new kt,js=new fe,Zs=new $i;class X0 extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),bh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Zs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),yh.multiplyMatrices(n,hs),js.matrixWorld=yh,js.raycast(t,Kr);for(let a=0,o=Kr.length;a<o;a++){const c=Kr[a];c.instanceId=r,c.object=this,e.push(c)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new W0(new Float32Array(s*this.count),s,this.count,Xc,zn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class el extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new $,Na=new $,Sh=new kt,Js=new Zc,jr=new $i,Eo=new $,Eh=new $;class Tg extends Oe{constructor(t=new Ve,e=new el){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Da.fromBufferAttribute(e,s-1),Na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Da.distanceTo(Na);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;Sh.copy(s).invert(),Js.copy(t.ray).applyMatrix4(Sh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),M=Zr(this,t,Js,c,p,x);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Zr(this,t,Js,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Zr(this,t,Js,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Zr(this,t,Js,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Da.fromBufferAttribute(a,s),Na.fromBufferAttribute(a,r),e.distanceSqToSegment(Da,Na,Eo,Eh)>n)return;Eo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Eo);if(!(c<t.near||c>t.far))return{distance:c,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const wh=new $,Th=new $;class q0 extends Tg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Th);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ah=new kt,Lc=new Zc,Jr=new $i,Qr=new $;class Ag extends Oe{constructor(t=new Ve,e=new Y0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Ah.copy(s).invert(),Lc.copy(t.ray).applyMatrix4(Ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);Qr.fromBufferAttribute(d,m),Rh(Qr,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Qr.fromBufferAttribute(d,g),Rh(Qr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rh(i,t,e,n,s,r,a){const o=Lc.distanceSqToPoint(i);if(o<e){const c=new $;Lc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class br extends je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nl extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function x(){const v=new $,w=new $;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const S=[],b=C/r,P=b*(e-t)+t;for(let z=0;z<=s;z++){const H=z/s,W=H*c+o,J=Math.sin(W),F=Math.cos(W);w.x=P*J,w.y=-b*n+m,w.z=P*F,d.push(w.x,w.y,w.z),v.set(J,T,F).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-b),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const b=_[S][C],P=_[S+1][C],z=_[S+1][C+1],H=_[S][C+1];(t>0||S!==0)&&(h.push(b,P,H),E+=3),(e>0||S!==r-1)&&(h.push(P,z,H),E+=3)}l.addGroup(p,E,0),p+=E}function M(v){const w=g,E=new re,T=new $;let C=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const W=z/s*c+o,J=Math.cos(W),F=Math.sin(W);T.x=S*F,T.y=m*b,T.z=S*J,d.push(T.x,T.y,T.z),u.push(0,b,0),E.x=J*.5+.5,E.y=F*.5*b+.5,f.push(E.x,E.y),g++}for(let z=0;z<s;z++){const H=w+z,W=P+z;v===!0?h.push(W,W+1,H):h.push(W+1,W,H),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class il extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new $,v=new $,w=new $;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],v),f(e[E+2],w),c(M,v,w,x)}function c(x,M,v,w){const E=w+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const S=x.clone().lerp(v,C/E),b=M.clone().lerp(v,C/E),P=E-C;for(let z=0;z<=P;z++)z===0&&C===E?T[C][z]=S:T[C][z]=S.clone().lerp(b,z/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const b=Math.floor(S/2);S%2===0?(u(T[C][b+1]),u(T[C+1][b]),u(T[C][b])):(u(T[C][b+1]),u(T[C+1][b+1]),u(T[C+1][b]))}}function l(x){const M=new $;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const x=new $;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const M=a[x+0],v=a[x+2],w=a[x+4],E=Math.max(M,v,w),T=Math.min(M,v,w);E>.9&&T<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const x=new $,M=new $,v=new $,w=new $,E=new re,T=new re,C=new re;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(a[b+0],a[b+1]),T.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),w.copy(x).add(M).add(v).divideScalar(3);const P=m(w);_(E,b+0,x,P),_(T,b+2,M,P),_(C,b+4,v,P)}}function _(x,M,v,w){w<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.vertices,t.indices,t.radius,t.details)}}class sl extends il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class rl extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new $,u=new $,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const E=w/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(E+v,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&f.push(M,v,E),(p!==n-1||c<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dc extends Si{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ra extends Si{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class al extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rg extends al{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wo=new kt,Ch=new $,Ih=new $;class Cg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ig extends Cg{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Ig}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ph extends al{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const xe=[0,4,7,11],he=[0,3,7,10],Ae=[0,4,7],Pi=[0,3,7],An=[0,4,7,10],$0={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",xe],["G",xe],["E",he],["A",Ae],["D",xe],["B",he],["G",xe],["A",Ae],["B",he],["F#",he],["G",xe],["D",Ae],["E",he],["A",Ae],["G",xe],["A",An]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",xe],["G",Ae],["E",he],["A",Pi],["F",xe],["G",Ae],["E",An],["A",Pi],["D",he],["G",Ae],["C",xe],["A",he],["D",he],["E",he],["F",xe],["E",An]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",xe],["A",he],["F",xe],["G",Ae]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",xe],["F#",he],["D",xe],["E",Ae],["A",xe],["C#",he],["D",xe],["E",Ae]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",Pi],["A#",Ae],["C",Ae],["A",Pi],["D",he],["A#",xe],["G",he],["A",Ae]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",Pi],["C",Ae],["D",Ae],["B",Ae],["E",Pi],["C",Ae],["A",Pi],["B",An]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",xe],["E",he],["D",he],["C",xe],["A#",xe],["A",he],["G",he],["C",Ae]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1},desert:{name:"MESA HIGHWAY",bpm:128,chords:[["A",he],["D",Ae],["G",Ae],["E",he],["A",he],["F",xe],["G",Ae],["E",An]],lead:["A4 . . C5 . . E5 . G5 . . . E5 . D5 .","F#5 . . . . . A5 . F#5 . E5 . D5 . . .","G5 . . B5 . . D6 . B5 . . . A5 . G5 .","E5 . . . . . . . - - G5 . A5 . B5 .","C6 . . B5 . . A5 . E5 . . . G5 . A5 .","A5 . . . C6 . . . E6 . . . C6 . A5 .","B5 . . . D6 . . . G5 . . . B5 . D6 .","G#5 . . . . . B5 . . . E5 . . . - -"],bass:[0,null,null,0,null,7,null,0,null,0,null,7,12,null,7,null],kick:[0,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"fm"},alps:{name:"GLACIER RUN",bpm:150,chords:[["E",Ae],["B",Ae],["C#",he],["A",xe],["E",Ae],["G#",he],["A",xe],["B",An]],lead:["B5 . G#5 . E5 . G#5 . B5 . E6 . . . D#6 .","F#6 . . . D#6 . . . B5 . . . F#5 . . .","E6 . . D#6 . . C#6 . . . B5 . G#5 . . .","C#6 . . . . . B5 . A5 . . . G#5 . A5 .","B5 . . E6 . . G#6 . . . F#6 . E6 . . .","D#6 . . . B5 . . . F#6 . . . D#6 . . .","E6 . . C#6 . . A5 . . . G#6 . . . E6 .","F#6 . . . . . . . D#6 . . . A5 . . ."],bass:[0,null,12,null,0,null,12,null,0,null,12,null,7,null,12,null],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"square",pad:!0,arp:{pattern:[0,1,2,3,2,1,0,1],wave:"triangle",oct:5}},vegas:{name:"JACKPOT BOULEVARD",bpm:116,chords:[["D",he],["G",An],["D",he],["G",An],["A#",xe],["A",An],["D",he],["A",An]],lead:["D5 . F5 . A5 . C6 . - A5 . . F5 . D5 .","B5 . . . . . G5 . F5 . . . D5 . F5 .","A5 . . C6 . . D6 . . . C6 . A5 . . .","G5 . . . . . . . - - F5 . G5 . B5 .","D6 . . . A5 . . . F5 . . . A5 . D6 .","C#6 . . . . . E6 . . . C#6 . A5 . . .","F6 . . E6 . . D6 . . . C6 . A5 . . .","A5 . . . . . . . E5 . G5 . A5 . C#6 ."],bass:[0,null,0,12,null,0,null,10,0,null,7,null,12,10,7,null],kick:[0,7,10],snare:[4,12],hat:[0,2,3,4,6,8,10,11,12,14],leadWave:"saw2",gated:!0},riviera:{name:"COTE D'AZUR",bpm:112,chords:[["F",xe],["E",he],["D",he],["C",xe],["A#",xe],["A",he],["G",he],["C",An]],lead:["E6 . . . C6 . A5 . . . G5 . A5 . C6 .","B5 . . . . . G5 . E5 . . . D5 . E5 .","F5 . A5 . C6 . . . E6 . . . D6 . C6 .","B5 . . . . . . . G5 . . . - - - -","D6 . . F6 . . A6 . . . F6 . D6 . . .","C6 . . . E6 . . . G6 . . . E6 . C6 .","A#5 . . . D6 . . . F6 . . . D6 . A#5 .","E6 . . . . . . . . . . . - - - -"],bass:[0,null,null,7,null,null,12,null,0,null,null,7,null,10,null,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,1,0,2],wave:"sine",oct:5},stabs:!1}},fr=["miami","tokyo","desert","alps","vegas","riviera","palm","signal","rival","sunset"].map(i=>({id:i,name:$0[i].name})),K0={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},Lg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?K0[t[1]]+(parseInt(t[2],10)+1)*12:69},Qs=i=>440*Math.pow(2,(i-69)/12);class Dg{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,c.connect(l).connect(this.skidG).connect(this.sfx),c.start()}toggleMute(){this.muted=!this.muted,this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const c=this.ctx,l=c.currentTime+r,h=c.createOscillator();h.type=n,h.frequency.setValueAtTime(t,l),a&&h.frequency.exponentialRampToValueAtTime(a,l+e);const d=c.createGain();d.gain.setValueAtTime(s,l),d.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(d).connect(o??this.sfx),h.start(l),h.stop(l+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const c=this.ctx,l=o??c.currentTime+s,h=c.createBufferSource();h.buffer=this.noise;const d=c.createBiquadFilter();d.type=r,d.frequency.setValueAtTime(n,l),r==="lowpass"&&d.frequency.exponentialRampToValueAtTime(80,l+t);const u=c.createGain();u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(.001,l+t),h.connect(d).connect(u).connect(a??this.sfx),h.start(l,Math.random()*.5),h.stop(l+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}gun(t=1){if(this.ctx)for(const[e,n]of[[0,1],[.048,.8]]){const s=.9+Math.random()*.2,r=t*n;this.burst(.045,.5*r,1900*s,e,"bandpass"),this.burst(.11,.42*r,650*s,e),this.tone(125*s,.07,"sine",.38*r,e,42),this.burst(.014,.22*r,5200,e+.004,"highpass")}}ping(){this.ctx&&(this.tone(1800+Math.random()*900,.12,"triangle",.22,0,900),this.burst(.04,.25,6e3,0,"highpass"))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?$0[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,c]=t.chords[r],l=K0[o],h=t.bass[a];if(h!=null&&this.voice(Qs(36+l+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const f of c)this.voice(Qs(60+l+f),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const f of c)this.padNote(Qs(48+l+f),s*16,n);if(t.arp){const f=t.arp.pattern[a%t.arp.pattern.length],g=c[f%c.length]+12*Math.floor(f/c.length);this.voice(Qs((t.arp.oct+1)*12+l+g),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const d=t.lead[r].split(/\s+/),u=d[a];if(u&&u!=="."&&u!=="-"){let f=1;for(;a+f<16&&d[a+f]===".";)f++;this.voice(Qs(Lg(u)),s*f*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const f=this.ctx,g=f.createOscillator(),_=f.createGain();g.frequency.setValueAtTime(150,n),g.frequency.exponentialRampToValueAtTime(40,n+.12),_.gain.setValueAtTime(.7,n),_.gain.exponentialRampToValueAtTime(.001,n+.18),g.connect(_).connect(this.musicBus),g.start(n),g.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const c=s.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(t,n),c.detune.value=o,c.connect(r),c.start(n),c.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,c=!1){const l=this.ctx;if(n==="fm"){const g=l.createOscillator(),_=l.createOscillator(),m=l.createGain();g.frequency.setValueAtTime(t,r),_.frequency.setValueAtTime(t*2,r),m.gain.setValueAtTime(t*3,r),m.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),_.connect(m).connect(g.frequency);const p=l.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),g.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const x of[g,_])x.start(r),x.stop(r+e+.08);return}const h=l.createOscillator(),d=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const g=l.createOscillator();g.type="sawtooth",g.detune.value=8,g.frequency.setValueAtTime(t,r),d.push(g)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const g=l.createOscillator(),_=l.createGain();g.frequency.value=6,_.gain.setValueAtTime(0,r),_.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),g.connect(_).connect(h.frequency);for(const m of d)_.connect(m.frequency);g.start(r),g.stop(r+e+.05)}const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=a;const f=l.createGain();f.gain.setValueAtTime(0,r),f.gain.linearRampToValueAtTime(s,r+.005),f.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),f.gain.linearRampToValueAtTime(0,r+e),h.connect(u).connect(f).connect(this.musicBus),(o||c)&&f.connect(this.delay);for(const g of[h,...d])g!==h&&g.connect(u),g.start(r),g.stop(r+e+.02)}}const Ng=()=>"92",oe={mode:Ng(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function Ug(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new br(t);return s.colorSpace=Ge,s}const gr='"Press Start 2P", monospace',Og='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',ta=i=>"#"+i.toString(16).padStart(6,"0");class Fg{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new br(this.canvas),this.texture.magFilter=Ke,this.texture.minFilter=x0,this.texture.colorSpace=Ge}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,c=this.cw*e,l=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,c,l),h.clip(),h.fillStyle=ta(t.bg),h.fillRect(a,o,c,l),t.stripes===-1)for(let _=0;_<l;_+=8)for(let m=0;m<c;m+=8)(m+_)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+m,o+_,8,8));else t.stripes!==void 0&&(h.fillStyle=ta(t.stripes),h.fillRect(a,o+l-6,c,3),h.fillRect(a,o+3,c,3));if(t.border!==void 0&&(h.strokeStyle=ta(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,c-3,l-3)),h.fillStyle=ta(t.fg),t.arrows){const _=c/3,m=_*.38;for(let M=0;M<3;M++){const v=a+M*_+_*.12,w=v+_*.62,[E,T]=t.arrows==="R"?[v,w]:[w,v],C=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(E,o+3),h.lineTo(E+C*m,o+3),h.lineTo(T,o+l/2),h.lineTo(E+C*m,o+l-3),h.lineTo(E,o+l-3),h.lineTo(T-C*m,o+l/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,x=this.canvas.height;return[a/p,1-(o+l)/x,(a+c)/p,1-o/x]}h.textAlign="center",h.textBaseline="middle";const d=t.jp?Og:gr;if(t.vertical){const g=[...t.text],_=Math.min(c-6,Math.floor((l-6)/g.length));h.font=`bold ${_}px ${d}`,g.forEach((m,p)=>h.fillText(m,a+c/2,o+4+_*(p+.5)))}else{const g=t.sub?2:1,_=t.jp?(l-6)/g:8*Math.max(1,Math.floor((l-8)/g/10));let m=Math.floor(_);for(h.font=`bold ${m}px ${d}`;m>6&&h.measureText(t.text).width>c-6;){if(m-=t.jp?1:8,m<8&&!t.jp){m=8;break}h.font=`bold ${m}px ${d}`}const p=t.sub?o+l*.34:o+l/2+1;h.fillText(t.text,a+c/2,p),t.sub&&(h.font=`8px ${gr}`,h.fillText(t.sub,a+c/2,o+l*.74))}h.restore(),this.texture.needsUpdate=!0;const u=this.canvas.width,f=this.canvas.height;return[a/u,1-(o+l)/f,(a+c)/u,1-o/f]}}const Mt=852,He=480,xn=i=>"#"+i.toString(16).padStart(6,"0"),kg=(i,t)=>Math.round((i>>16&255)*t)<<16|Math.round((i>>8&255)*t)<<8|Math.round((i&255)*t),zt=16769088,Ft=16777215,we=16751136,_e=16724016,Ne=4255999,Rn=16734880,Dn=4251712,ys=class ys{constructor(t){this.canvas=t,t.width=Mt,t.height=He,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,Mt,He)}text(t,e,n,s,r,a="left",o=0){const c=this.g;c.font=`${s}px ${gr}`,c.textAlign=a,c.textBaseline="top";const l=s<8?1:Math.max(2,s/8);c.fillStyle=xn(o),c.fillText(t,e+l,n+l),c.fillStyle=xn(r),c.fillText(t,e,n)}shade(t,e,n,s,r=.6){this.g.fillStyle=`rgba(10,10,32,${r})`,this.g.fillRect(t,e,n,s)}arrow(t,e,n,s,r){const a=Math.max(2,Math.round(s/2));for(let o=0;o<a;o++){const c=(o+1)*2-1;n==="up"?this.rect(t-o,e-a/2+o,c,1,r):n==="down"?this.rect(t-o,e+a/2-o,c,1,r):n==="left"?this.rect(t-a/2+o,e-o,1,c,r):this.rect(t+a/2-o,e-o,1,c,r)}}keyW(t,e=16){return ys.ARROWS[t]?e:(this.g.font=`${e>=20?16:8}px ${gr}`,Math.max(e,Math.ceil(this.g.measureText(t).width)+10))}keycap(t,e,n,s=16,r=Ft){const a=s>=20?16:8,o=this.keyW(n,s),c=ys.ARROWS[n];return this.rect(t+1,e+2,o,s,328975),this.box(t,e,o,s,2763338,r,1),this.rect(t+1,e+1,o-2,1,5263482),c?this.arrow(t+o/2-.5,e+s/2,c,s-6,r):this.text(n,t+o/2,e+(s-a)/2+1,a,r,"center"),o}chip(t,e,n,s,r,a,o=8,c=1710650){this.box(t,e,n,s,c,a,2);const l=ys.ARROWS[r];l?this.arrow(t+n/2-.5,e+s/2,l,Math.min(n,s)-8,a):this.text(r,t+n/2,e+(s-o)/2+1,o,a,"center")}grad(t,e,n,s,r){const a=this.g,o=a.createLinearGradient(0,e,0,e+s);r.forEach((c,l)=>o.addColorStop(l/Math.max(1,r.length-1),xn(c))),a.fillStyle=o,a.fillRect(t,e,n,s)}poly(t,e){const n=this.g;n.fillStyle=xn(e),n.beginPath(),t.forEach(([s,r],a)=>a?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fill()}circle(t,e,n,s){const r=this.g;r.fillStyle=xn(s),r.beginPath(),r.arc(t,e,n,0,Math.PI*2),r.fill()}palm(t,e,n,s){for(let o=0;o<n;o+=2)this.rect(t+Math.round(Math.sin(o/n*1.4)*4),e-o,3,2,s);const r=t+Math.round(Math.sin(1.4)*4)+1,a=e-n;for(const[o,c]of[[-12,4],[-9,-3],[0,-6],[9,-3],[12,4],[6,6],[-6,6]])this.poly([[r,a-1],[r+o,a+c],[r+o*.9,a+c+2],[r,a+2]],s)}postcard(t,e,n,s,r,a=0){const o=this.g;o.save(),o.beginPath(),o.rect(e,n,s,r),o.clip();let c=7;const l=()=>(c=c*16807%2147483647)/2147483647,h=n+Math.round(r*.62);switch(t){case"miami":{this.grad(e,n,s,h-n,[5909130,16734874,16756848,16769168]);const d=e+s*.5,u=h;this.circle(d,u,r*.34,16764992);for(let f=0;f<5;f++)this.rect(d-r*.4,u-3-f*5,r*.8,1+f*.4,16747120);this.grad(e,h,s,n+r-h,[2783952,1327242]);for(let f=0;f<8;f++)this.rect(d-30+l()*60,h+3+f*3,10+l()*30,1,16760960);this.palm(e+26,n+r,r*.75,2756672),this.palm(e+48,n+r,r*.55,2756672),this.palm(e+s-34,n+r,r*.8,2756672);break}case"tokyo":{this.grad(e,n,s,r,[328986,2756186,8006282]),this.circle(e+s-40,n+16,9,15790335),this.circle(e+s-36,n+13,8,1706560);for(let d=e;d<e+s;){const u=12+Math.floor(l()*22),f=r*(.3+l()*.55);this.rect(d,n+r-f,u-2,f,1181732);for(let g=n+r-f+4;g<n+r-6;g+=5)for(let _=d+2;_<d+u-4;_+=4)l()<.45&&this.rect(_,g,2,2,l()<.7?16769152:16738992);l()<.4&&this.rect(d+2,n+r-f-6,2,6,16724032),d+=u}this.rect(e,n+r-5,s,2,16734880),this.rect(e,n+r-2,s,2,4255999);break}case"canyon":{this.grad(e,n,s,h-n+6,[16756832,16769184]),this.circle(e+s*.4,h-22,10,16773312);const d=(u,f,g,_)=>this.poly([[u,h+6],[u+8,g],[f-8,g],[f,h+6]],_);d(e-10,e+80,h-18,12077098),d(e+150,e+205,h-24,10500642),d(e+200,e+s+10,h-12,13129774),this.grad(e,h+6,s,n+r-h-6,[14186554,10504740]),this.poly([[e+s*.42,n+r],[e+s*.49,h+6],[e+s*.51,h+6],[e+s*.58,n+r]],5263448);for(const u of[e+30,e+s-50])this.rect(u,n+r-22,4,18,2779690),this.rect(u-5,n+r-16,4,8,2779690),this.rect(u+5,n+r-19,4,8,2779690);break}case"alps":{this.grad(e,n,s,h-n,[8038655,13154544,16761040]);const d=(u,f,g,_)=>{this.poly([[u-g,h+4],[u,h-f],[u+g,h+4]],_),this.poly([[u-g*.32,h-f*.68],[u,h-f],[u+g*.32,h-f*.68],[u+g*.1,h-f*.6],[u-g*.08,h-f*.66]],16777215)};d(e+50,44,60,6977712),d(e+160,52,70,5925032),d(e+230,36,50,8030400),this.rect(e,h+4,s,n+r-h-4,16054527);for(let u=0;u<9;u++){const f=e+8+u*28+l()*10,g=14+l()*10,_=n+r-2-l()*6;this.poly([[f-6,_],[f,_-g],[f+6,_]],1985074),this.rect(f-1,_-g+2,2,3,16777215)}break}case"vegas":{this.grad(e,n,s,r,[131594,1705520,4853840]);for(let u=0;u<30;u++)this.rect(e+l()*s,n+l()*r*.5,1,1,16777215);const d=[16730784,4255999,16769088,6356832];for(let u=0,f=e+6;f<e+s;u++){const g=18+Math.floor(l()*20),_=r*(.35+l()*.5),m=d[u%4],p=Math.floor(a*3+u)%5!==0;this.rect(f,n+r-_,g,_,1312798),this.rect(f,n+r-_,g,2,p?m:3811914),this.rect(f,n+r-_,2,_,p?m:3811914);for(let x=n+r-_+6;x<n+r-4;x+=6)this.rect(f+4,x,g-8,2,kg(m,.45));f+=g+6}this.text("VEGAS",e+s/2,n+10,16,Math.floor(a*2)%2?16730784:16769088,"center");break}case"monaco":{this.grad(e,n,s,h-n,[4892927,13167359]),this.grad(e,h,s,n+r-h,[1739480,674448]);for(let g=0;g<10;g++)this.rect(e+l()*s*.6,h+3+l()*(n+r-h-6),8+l()*14,1,10541311);this.poly([[e+s*.55,n+r],[e+s*.62,h-6],[e+s*.74,h-26],[e+s+2,h-34],[e+s+2,n+r]],12099696);const d=[16769216,16763040,16774360,16306384];for(let g=0;g<6;g++){const _=e+s*.64+g*14,m=h-22-g%3*8+g*2;this.rect(_,m,12,9,d[g%4]),this.rect(_-1,m-3,14,3,12603434)}for(const g of[e+s*.6,e+s*.9])this.poly([[g-3,h+4],[g,h-22],[g+3,h+4]],1985066);const u=e+50,f=h+14;this.poly([[u-26,f],[u+26,f],[u+18,f+7],[u-22,f+7]],16777215),this.rect(u-10,f-6,22,6,15790320),this.rect(u-6,f-5,14,2,2109512),this.rect(u,f-22,2,16,14737632),this.poly([[u+3,f-20],[u+3,f-7],[u+16,f-7]],16777215);break}default:this.grad(e,n,s,r,[3816042,1052720])}o.restore()}icon(t,e,n,s){const r=this.g;if(r.strokeStyle=xn(s),r.lineWidth=2,(t==="clock"||t==="globe")&&(r.beginPath(),r.arc(e,n,8,0,Math.PI*2),r.stroke()),t==="clock")this.rect(e-1,n-6,2,7,s),this.rect(e,n-1,5,2,s);else if(t==="globe")r.beginPath(),r.ellipse(e,n,3.5,8,0,0,Math.PI*2),r.moveTo(e-8,n),r.lineTo(e+8,n),r.stroke();else{this.rect(e-7,n-9,2,18,s);for(let a=0;a<4;a++)for(let o=0;o<3;o++)this.rect(e-5+a*3,n-9+o*3,3,3,(a+o)%2?1052688:s)}}sky(t,e,n){if(t)this.circle(e,n,7,15790335),this.circle(e+3,n-2,6,1052720);else{for(let s=0;s<8;s++){const r=s/8*Math.PI*2;this.rect(e+Math.cos(r)*9-1,n+Math.sin(r)*9-1,2,2,16764992)}this.circle(e,n,5,16764992)}}note(t,e,n){this.circle(t-2,e+4,3,n),this.rect(t,e-6,2,10,n),this.rect(t,e-6,5,2,n)}box(t,e,n,s,r,a,o=4){const c=this.g;c.fillStyle=xn(a),c.fillRect(t,e,n,s),c.fillStyle=xn(r),c.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=xn(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const c=this.g;c.font=`${s}px ${gr}`,c.textAlign="center",c.textBaseline="top";for(let l=s/6;l>0;l-=2)c.fillStyle=xn(o),c.fillText(t,e+l*.5,n+l);c.fillStyle="#000";for(const[l,h]of[[-3,0],[3,0],[0,-3],[0,3]])c.fillText(t,e+l,n+h);c.save(),c.beginPath(),c.rect(0,n-4,Mt,s*.5+4),c.clip(),c.fillStyle=xn(r),c.fillText(t,e,n),c.restore(),c.save(),c.beginPath(),c.rect(0,n+s*.5,Mt,s),c.clip(),c.fillStyle=xn(a),c.fillText(t,e,n),c.restore()}flare(t,e,n){const s=this.g,r=Mt/2,a=He/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const c=s.createLinearGradient(t-260,e,t+260,e);c.addColorStop(0,"rgba(255,220,180,0)"),c.addColorStop(.5,`rgba(255,230,190,${.35*n})`),c.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=c,s.fillRect(t-260,e-2,520,4);const l=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,d,u,f]of l){const g=t+(r-t)*h,_=e+(a-e)*h;s.fillStyle=`rgba(${u},${f*n})`,s.beginPath();for(let m=0;m<6;m++){const p=m/6*Math.PI*2+Math.PI/6,x=g+Math.cos(p)*d,M=_+Math.sin(p)*d;m===0?s.moveTo(x,M):s.lineTo(x,M)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?Dn:a<20?zt:_e,c=8+Math.floor(a*.9);this.rect(t+a*12,e-c,10,c,a<r?o:2109472)}}};ys.ARROWS={"↑":"up","↓":"down","←":"left","→":"right"};let Nc=ys;const Jt=6,zg=3,j=11,ki=4,_r=j*2/ki;class Bg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*Jt:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*Jt}}const Gg=(i,t,e)=>i+(t-i)*e*e,Hg=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),To=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Us{constructor(t,e=0){this.profileOf=t,this.track=new Bg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*Jt}section(t,e,n,s,r){const a=t+e+n,o=this.y;let c=0;for(let l=0;l<t;l++,c++)this.push(Gg(0,s,l/t),To(o,o+r,c/a));for(let l=0;l<e;l++,c++)this.push(s,To(o,o+r,c/a));for(let l=0;l<n;l++,c++)this.push(Hg(s,0,l/n),To(o,o+r,c/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const c=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let l=e.sign();this.heading>.7&&(l=-1),this.heading<-.7&&(l=1);const h=e.range(9e-4,.0032)*t.curvy;let d=0;e.chance(.25+t.hilly*.6)&&(d=e.range(10,45)*t.hilly*e.sign(),this.y+d>t.yMax&&(d=t.yMax-this.y),this.y+d<t.yMin&&(d=t.yMin-this.y));const u=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*l,Math.min(d,0));else if(u<.18)this.straight(e.int(25,60),d);else if(u<.42){const f=e.int(15,35);this.section(15,f,15,h*l,d*.5),this.section(15,f,15,-h*l,d*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*l,d);this.tunnel=!1,this.zone=c}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const pr=6,j0=200,us=pr+j0+1;class Vg{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(us),this.by=new Float32Array(us),this.bz=new Float32Array(us),this.bh=new Float32Array(us),this.yRef=0,this.heading=0,this.count=pr+j0}update(t){const e=this.track,n=Math.floor(t/Jt),s=t/Jt-n,r=e.H(n)+e.seg(n).curve*s*Jt;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-pr;const{bx:a,bz:o,bh:c,by:l}=this,h=pr,d=pr+1;let u=e.H(n+1)-r,f=(1-s)*Jt;c[d]=u,a[d]=Math.sin(u/2)*f,o[d]=-Math.cos(u/2)*f;for(let g=d+1;g<us;g++){u=e.H(this.start+g)-r;const _=(c[g-1]+u)/2;c[g]=u,a[g]=a[g-1]+Math.sin(_)*Jt,o[g]=o[g-1]-Math.cos(_)*Jt}u=e.H(n)-r,f=s*Jt,c[h]=u,a[h]=-Math.sin(u/2)*f,o[h]=Math.cos(u/2)*f;for(let g=h-1;g>=0;g--){u=e.H(this.start+g)-r;const _=(c[g+1]+u)/2;c[g]=u,a[g]=a[g+1]-Math.sin(_)*Jt,o[g]=o[g+1]+Math.cos(_)*Jt}for(let g=0;g<us;g++)l[g]=e.Y(this.start+g)-this.yRef}sample(t,e,n){const s=t/Jt,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const c=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=c,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(c)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(c)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const Rt=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),ds=657932,Be=12063760,ea=16747040,_n=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],Ye=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",nose:"bar",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[Rt(-2.24,.88,.3,.5,.56,.8,"p"),Rt(-1.7,.93,.24,.62,.68,.86,"p"),Rt(-.85,.96,.22,.74,.8,.8,"ws"),Rt(-.05,.97,.22,.8,1.12,.62,"rf"),Rt(.55,.98,.22,.84,1.12,.62,"rw"),Rt(1,.99,.22,.87,.98,.8,"p"),Rt(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:ds}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Be,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:ea}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[..._n(.55,.33,.05),..._n(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",nose:"lip",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[Rt(-2.07,.86,.28,.4,.44,.76,"p"),Rt(-1.3,.92,.24,.56,.62,.84,"p"),Rt(-.75,.95,.22,.66,.72,.84,"ws"),Rt(.15,.97,.22,.74,1.06,.6,"rf"),Rt(.65,.99,.22,.78,1.06,.62,"rw"),Rt(1.05,1,.22,.84,.94,.88,"p"),Rt(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:ds}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Be,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:ea}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[..._n(.32,.32,.055),..._n(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",nose:"slots",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[Rt(-2.18,.9,.27,.46,.5,.8,"p"),Rt(-1.5,.95,.22,.6,.66,.88,"p"),Rt(-.8,.97,.22,.7,.76,.82,"ws"),Rt(-.05,.98,.22,.76,1.1,.62,"rf"),Rt(.5,.99,.22,.8,1.1,.62,"lv"),Rt(1.6,.99,.22,.86,.92,.86,"p"),Rt(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:ds}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Be,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Be,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},..._n(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",nose:"twin",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[Rt(-2.13,.84,.3,.5,.56,.74,"p"),Rt(-1.6,.9,.26,.62,.7,.8,"p"),Rt(-.75,.92,.25,.76,.84,.72,"ws"),Rt(-.1,.92,.25,.8,1.26,.6,"rf"),Rt(.35,.92,.25,.82,1.26,.6,"rw"),Rt(1.45,.94,.25,.86,.96,.8,"p"),Rt(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Be,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Be,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:_n(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",nose:"grille",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[Rt(-2.27,.83,.32,.72,.77,.79,"p"),Rt(-2.05,.87,.3,.78,.83,.82,"p"),Rt(-1.2,.88,.3,.82,.87,.82,"p"),Rt(-.62,.88,.3,.84,.89,.8,"ws"),Rt(.05,.88,.3,.86,1.33,.7,"rf"),Rt(.85,.88,.3,.87,1.33,.7,"rw"),Rt(1.45,.88,.3,.9,.99,.82,"p"),Rt(2.1,.87,.3,.91,1,.82,"p"),Rt(2.27,.85,.32,.89,.97,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Be,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Be,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",nose:"mouth",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[Rt(-2.26,.72,.3,.52,.58,.6,"p"),Rt(-2.05,.84,.28,.6,.67,.74,"p"),Rt(-1.5,.9,.27,.68,.77,.74,"p"),Rt(-.5,.9,.27,.76,.83,.74,"ws"),Rt(.2,.89,.27,.8,1.25,.6,"rf"),Rt(.62,.89,.27,.82,1.23,.6,"rw"),Rt(1.35,.93,.27,.86,.95,.8,"p"),Rt(1.95,.9,.28,.9,.99,.78,"p"),Rt(2.26,.78,.3,.88,.96,.66,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[],lights:[{x:.56,y:.8,w:.24,h:.22,c:Be,round:!0,brake:!0},{x:.3,y:.8,w:.2,h:.19,c:Be,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",nose:"mouth",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[Rt(-2.15,.7,.3,.5,.5,.5,"p"),Rt(-1.95,.84,.27,.6,.57,.56,"p"),Rt(-1.25,.88,.26,.68,.63,.54,"p"),Rt(-.45,.88,.26,.72,.74,.62,"ws"),Rt(.2,.86,.26,.76,1.17,.56,"rf"),Rt(.62,.86,.26,.78,1.14,.56,"rw"),Rt(1.4,.9,.26,.82,.9,.7,"p"),Rt(1.92,.84,.28,.84,.9,.66,"p"),Rt(2.15,.72,.3,.8,.86,.56,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.72,w:1.24,h:.16,c:2759196}],lights:[{x:.52,y:.72,w:.13,h:.12,c:Be,round:!0,brake:!0},{x:.36,y:.72,w:.13,h:.12,c:Be,round:!0,brake:!0},{x:.2,y:.72,w:.13,h:.12,c:ea,round:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:_n(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",nose:"slim",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[Rt(-2.21,.84,.3,.5,.56,.76,"p"),Rt(-1.6,.89,.26,.62,.68,.84,"p"),Rt(-.95,.9,.26,.72,.78,.8,"ws"),Rt(-.15,.9,.26,.78,1.15,.62,"rf"),Rt(.5,.9,.26,.82,1.13,.62,"rw"),Rt(1,.9,.26,.86,.96,.8,"p"),Rt(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Be,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:_n(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",nose:"twin",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[Rt(-2.23,.88,.28,.42,.46,.78,"p"),Rt(-1.4,.95,.24,.58,.64,.88,"p"),Rt(-.8,.98,.22,.66,.72,.86,"ws"),Rt(.2,1,.22,.74,1.1,.6,"rf"),Rt(.65,1.02,.22,.78,1.08,.64,"rw"),Rt(1.2,1.03,.22,.86,.96,.9,"p"),Rt(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:ds}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Be,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:ea,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[..._n(.12,.42,.055),..._n(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",nose:"mouth",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[Rt(-2.15,.82,.3,.48,.52,.72,"p"),Rt(-1.5,.88,.26,.6,.66,.82,"p"),Rt(-1,.9,.25,.68,.74,.78,"ws"),Rt(-.15,.91,.25,.74,1.13,.56,"rf"),Rt(.35,.91,.25,.78,1.1,.58,"rw"),Rt(1,.91,.25,.84,.94,.82,"p"),Rt(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:ds}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Be,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Be,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",nose:"mouth",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[Rt(-2.12,.86,.3,.5,.56,.78,"p"),Rt(-1.5,.92,.26,.62,.68,.86,"p"),Rt(-.8,.94,.24,.72,.78,.82,"ws"),Rt(-.05,.95,.24,.78,1.15,.6,"rf"),Rt(.5,.95,.24,.82,1.12,.62,"rw"),Rt(1.1,.95,.24,.86,.96,.84,"p"),Rt(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:ds}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Be,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Be,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[..._n(.55,.38,.05),..._n(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}];class ii{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const Uc=5,Lh=1.18,fs=5,tr=[100,150,200,300,400,500],ps=300,Ao=5,Wg=75,Xg=3,qg=20,Dh=50/30,Yg=90,$g=6;function Ro(i){return Math.max(.12,Math.min(.95,1.05-i/70))}function Nh(i,t){return i<=Yg&&i>=-35&&Math.abs(t)<=$g}const Uh=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],Kg=3.6;function jg(i,t,e,n=3,s=0){const r=new ii(e),a=Ye.filter(o=>o!==i);for(let o=a.length-1;o>0;o--){const c=r.int(0,o);[a[o],a[c]]=[a[c],a[o]]}return Uh.map((o,c)=>{const l=a[c%a.length],h=Math.floor((Uh.length-c)/2),d=c%2===0?-1:1;return{name:o.name,spec:l,paint:r.pick(l.paints),d:t+9+h*9,x:d*_r*.55,v:0,vmax:l.stats.vmax/Kg*o.skill,corner:o.corner,aggro:o.aggro,lane:d*r.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:n,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:s,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1}})}const zi=()=>performance.now()/1e3;function Zg(i,t,e,n,s,r,a,o){const c=e.goalDist;for(const l of i){if(l.remote){const M=l.remote;zi()-M.at>3&&(M.v=0);const v=Math.min(1,zi()-M.at),w=M.d+M.v*v;l.v=M.v,l.d+=l.v*t,l.d+=(w-l.d)*Math.min(1,t*6),Math.abs(w-l.d)>30&&(l.d=w),l.x+=(M.x-l.x)*Math.min(1,t*8),l.spin-=l.v*t/.37;continue}if(!o){l.v=0;continue}if(l.wrecked){l.wreckT+=t,l.v=Math.max(0,l.v-22*t),l.d+=l.v*t,l.spin-=l.v*t/.37,l.braking=!0,l.steer*=1-t*3;continue}const h=e.seg(Math.floor(l.d/Jt)),d=e.seg(Math.floor((l.d+70)/Jt)),u=Math.max(Math.abs(h.curve),Math.abs(d.curve));let f=l.vmax*(1-Math.min(.3,u*70*(1.15-l.corner)));const g=l.d-r.pos;g>450?f*=.9:g>250?f*=.96:g<-300?f*=1.15:g<-120&&(f*=1.08),l.turboT>0?(l.turboT-=t,f*=1.18):l.turbos>0&&u<9e-4&&l.d<c-300&&g>-200&&g<120&&Math.random()<t*(.05+l.aggro*.1)&&(l.turbos--,l.turboT=Uc),l.d>c+250&&(f=0),l.bumpT>0&&(l.bumpT-=t,f*=.6),l.hp<35&&(f*=.8+.2*(l.hp/35));const _=n.map(M=>({d:M.d,x:M.x,v:M.v,len:s(M)}));for(const M of i)M!==l&&_.push({d:M.d,x:M.x,v:M.v,len:4.4});_.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let m=null;for(const M of _){const v=M.d-l.d;v>0&&v<22+l.v*.5&&Math.abs(M.x-l.x)<2.6&&M.v<l.v+2&&(!m||v<m.d-l.d)&&(m=M)}let p=Math.max(-6,Math.min(6,d.curve*2200))+l.lane*.5;if(m){const M=m.x-3.4,v=m.x+3.4,w=M>-j+1.2,E=v<j-1.2;p=w&&(!E||Math.abs(M-l.x)<Math.abs(v-l.x))?M:E?v:l.x,!w&&!E&&(f=Math.min(f,m.v*(.98-(1-l.aggro)*.05)))}p=Math.max(-j+1.4,Math.min(j-1.4,p));const x=Math.sign(p-l.x)*Math.min(Math.abs(p-l.x),(6+l.aggro*4)*t);l.x+=x,l.steer+=(x/Math.max(t,.001)/10-l.steer)*Math.min(1,t*8),l.braking=f<l.v-3,l.v+=Math.sign(f-l.v)*Math.min(Math.abs(f-l.v),(l.braking||l.turboT>0?40:22)*t);for(const M of n)Math.abs(M.d-l.d)<s(M)&&Math.abs(M.x-l.x)<2&&(l.v=Math.min(l.v,M.v*.9),l.x+=Math.sign(l.x-M.x||1)*.6);for(const M of i)if(M!==l&&Math.abs(M.d-l.d)<4.2&&Math.abs(M.x-l.x)<1.9){const v=Math.sign(l.x-M.x||1)*.4;l.x+=v,l.d<M.d&&(l.v=Math.min(l.v,M.v))}l.d+=l.v*t,l.spin-=l.v*t/.37,l.finished<0&&l.d>=c&&(l.finished=a)}}function Oh(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const na=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function ia(i,t,e,n,s,r){const a=t.goalDist,o=i.map(c=>({name:c.name,car:c.spec.name,time:c.finished>=0?c.finished:c.wrecked?1/0:r+Math.max(0,a-c.d)/Math.max(20,c.v||c.vmax),player:!1,estimated:c.finished<0&&!c.wrecked}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((c,l)=>c.time-l.time),o.map((c,l)=>({...c,pos:l+1}))}const Fh=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},Jg="modulepreload",Qg=function(i,t){return new URL(i,t).href},kh={},t2=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Qg(l,n),l in kh)return;kh[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Jg,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},di=1,e2="turbo-horizon-86";function n2(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}const sa="staticauth.openrelay.metered.ca",i2="openrelayprojectsecret",s2="turbo-horizon",r2="f5f40d32a05e4a316475df2cc0979d044f8b";let Z0=!1;async function a2(){const i=new AbortController,t=window.setTimeout(()=>i.abort(),5e3);try{const n=await(await fetch(`https://${s2}.metered.live/api/v1/turn/credentials?apiKey=${encodeURIComponent(r2)}`,{signal:i.signal})).json(),s=Array.isArray(n)?n.filter(r=>r&&r.username&&r.credential&&JSON.stringify(r.urls).includes("turn")):[];return Z0=s.length>0,s}catch{return[]}finally{window.clearTimeout(t)}}async function o2(){return[...await a2(),...await c2()]}async function c2(){try{const i=`${Math.floor(Date.now()/1e3)+86400}:th86`,t=new TextEncoder,e=await crypto.subtle.importKey("raw",t.encode(i2),{name:"HMAC",hash:"SHA-1"},!1,["sign"]),n=new Uint8Array(await crypto.subtle.sign("HMAC",e,t.encode(i))),s=btoa(String.fromCharCode(...n));return[{urls:[`turn:${sa}:80`,`turn:${sa}:80?transport=tcp`,`turn:${sa}:443`,`turns:${sa}:443?transport=tcp`],username:i,credential:s}]}catch{return[]}}async function l2(i){const[t,e]=await Promise.all([t2(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),o2()]),n=new URLSearchParams(location.search).get("relay"),s=n&&/^wss?:\/\/[\w.:-]+\/?$/.test(n)?{urls:[n]}:void 0,r=new Set;let a=0,o=0;const c=new Set;class l extends RTCPeerConnection{constructor(g){super(g),r.add(this);let _=!1,m=!1;const p=()=>{!_&&this.remoteDescription&&(_=!0,a++),!m&&this.connectionState==="failed"&&(m=!0,o++),this.connectionState==="closed"&&r.delete(this)};this.addEventListener("signalingstatechange",p),this.addEventListener("connectionstatechange",p)}}const h=t.joinRoom({appId:e2,turnConfig:e,rtcPolyfill:l,relayConfig:s??{redundancy:8}},i,{onJoinError:f=>{const g=f.peerId??"";c.has(g)||(c.add(g),o++),console.warn("join error",f)}}),d=new Map,u=f=>{let g=d.get(f);return g||(g=h.makeAction(f),d.set(f,g)),g};return{selfId:t.selfId,send:(f,g,_)=>{u(f).send(g,_?{target:_}:void 0).catch(()=>{})},on:(f,g)=>{u(f).onMessage=(_,m)=>g(_,m.peerId)},onLeave:f=>{h.onPeerLeave=f},onJoin:f=>{h.onPeerJoin=f},leave:()=>{h.leave().catch(()=>{})},links:()=>({found:a,linked:[...r].filter(f=>f.connectionState==="connected").length,failed:o}),servers:()=>{const f=Object.values(t.getRelaySockets()??{});return[f.filter(g=>g.readyState===1).length,f.length]}}}const Ue=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,$n=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Oc(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class h2{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.created=performance.now(),this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:"",since:Date.now(),set:null},this.onGo=null,this.onSt=null,this.onHit=null,(e?Promise.resolve(n2(t)):l2(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.on("hit",(s,r)=>this.gotHit(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:di,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:di,...t})}sendHit(t){var e;(e=this.tr)==null||e.send("hit",{p:di,...t})}gotHit(t,e){var s;const n=t;!n||n.p!==di||(s=this.onHit)==null||s.call(this,{r:$n(n.r,24),to:$n(n.to,64),n:Math.round(Ue(n.n,0,10))},e)}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}host(){let t={id:this.selfId,name:this.me.name,set:this.me.set,since:this.me.since};for(const e of this.peers.values())(e.since<t.since||e.since===t.since&&e.id<t.id)&&(t={id:e.id,name:e.name,set:e.set,since:e.since});return t}isHost(){return this.host().id===this.selfId}servers(){var t,e;return((e=(t=this.tr)==null?void 0:t.servers)==null?void 0:e.call(t))??null}relay(){return Z0}links(){var t,e;return((e=(t=this.tr)==null?void 0:t.links)==null?void 0:e.call(t))??null}serversDown(){const t=this.servers();return!!t&&t[1]>0&&t[0]===0&&performance.now()-this.created>8e3}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:di,...this.me},t)}gotHi(t,e){const n=t;if(!n||n.p!==di)return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Oc($n(n.name,40))||"PLAYER",car:Math.round(Ue(n.car,0,63)),paint:Math.round(Ue(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:$n(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r,since:Ue(n.since,0,1e14,Date.now()),set:u2(n.set)})}gotGo(t,e){var a;const n=t;if(!n||n.p!==di||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:$n(o==null?void 0:o.id,64),name:Oc($n(o==null?void 0:o.name,40))||"PLAYER",car:Math.round(Ue(o==null?void 0:o.car,0,63)),paint:Math.round(Ue(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:$n(n.raceId,24),route:Math.round(Ue(n.route,0,5)),seed:Math.round(Ue(n.seed,0,1e9)),turbos:Math.round(Ue(n.turbos,1,9,5)),weapons:n.weapons===!0,ammo:Math.round(Ue(n.ammo,10,999,300)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==di||(s=this.onSt)==null||s.call(this,{r:$n(n.r,24),d:Ue(n.d,-1e3,1e6),x:Ue(n.x,-50,50),v:Ue(n.v,0,200),steer:Ue(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:Ue(n.hp,0,100,100),fin:Ue(n.fin,-1,1e5,-1),gun:$n(n.gun,64)},e)}}function u2(i){const t=i;return!t||typeof t!="object"?null:{route:Math.round(Ue(t.route,0,5)),turbos:Math.round(Ue(t.turbos,1,9,5)),weapons:t.weapons===!0,ammo:Math.round(Ue(t.ammo,10,999,300))}}function zh(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}function d2(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c={},l={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let x=0,M=o.length;x<M;x++){const v=o[x],w=i.attributes[v];c[v]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const E=i.morphAttributes[v];E&&(l[v]||(l[v]=[]),E.forEach((T,C)=>{const S=new T.array.constructor(T.count*T.itemSize);l[v][C]=new T.constructor(S,T.itemSize,T.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let x=0;x<r;x++){const M=n?n.getX(x):x;let v="";for(let w=0,E=o.length;w<E;w++){const T=o[w],C=i.getAttribute(T),S=C.itemSize;for(let b=0;b<S;b++)v+=`${~~(C[d[b]](M)*_+m)},`}if(v in e)h.push(e[v]);else{for(let w=0,E=o.length;w<E;w++){const T=o[w],C=i.getAttribute(T),S=i.morphAttributes[T],b=C.itemSize,P=c[T],z=l[T];for(let H=0;H<b;H++){const W=d[H],J=u[H];if(P[J](a,C[W](M)),S)for(let F=0,at=S.length;F<at;F++)z[F][J](a,S[F][W](M))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const x in i.attributes){const M=c[x];if(p.setAttribute(x,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),x in l)for(let v=0;v<l[x].length;v++){const w=l[x][v];p.morphAttributes[x][v]=new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)}}return p.setIndex(h),p}class dt{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new $,this.c=new Ut,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,c,l,h]=a;this.tri(t,e,n,r,[[o,c],[l,c],[l,h]]),this.tri(t,n,s,r,[[o,c],[l,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,c,l,h,d,u=0){const[f,g]=Array.isArray(h)?h:[h,h],_=t-s/2,m=t+s/2,p=e-r/2,x=e+r/2,M=n-a/2,v=n+a/2,w=r/l,E=s/c,T=a/c;return this.quadT([m,p,v],[_,p,v],[_,x,v],[m,x,v],f,[u,0,u+E,w],o),this.quadT([_,p,M],[m,p,M],[m,x,M],[_,x,M],f,[u+.5,0,u+.5+E,w],o),this.quadT([_,p,v],[_,p,M],[_,x,M],[_,x,v],g,[u+.25,0,u+.25+T,w],o),this.quadT([m,p,M],[m,p,v],[m,x,v],[m,x,M],g,[u+.75,0,u+.75+T,w],o),this.quad([_,x,M],[m,x,M],[m,x,v],[_,x,v],d),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const c=Array.isArray(o)?o:[o],l=c[0],h=c[1]??l,d=c[2]??l,u=c[3]??l,f=t-s/2,g=t+s/2,_=e-r/2,m=e+r/2,p=n-a/2,x=n+a/2;return this.quad([f,m,p],[g,m,p],[g,m,x],[f,m,x],h),this.quad([f,_,p],[f,_,x],[g,_,x],[g,_,p],l),this.quad([f,_,p],[g,_,p],[g,m,p],[f,m,p],d),this.quad([g,_,x],[f,_,x],[f,m,x],[g,m,x],u),this.quad([f,_,x],[f,_,p],[f,m,p],[f,m,x],l),this.quad([g,_,p],[g,_,x],[g,m,x],[g,m,p],l),this}prism(t,e,n,s,r,a,o,c,l=null,h=0){const d=Array.isArray(c)?c:[c];for(let u=0;u<o;u++){const f=h+u/o*Math.PI*2,g=h+(u+1)/o*Math.PI*2,_=[t+Math.cos(f)*r,n,e+Math.sin(f)*r],m=[t+Math.cos(g)*r,n,e+Math.sin(g)*r],p=[t+Math.cos(g)*a,s,e+Math.sin(g)*a],x=[t+Math.cos(f)*a,s,e+Math.sin(f)*a];a<=1e-4?this.tri(_,m,x,d[u%d.length]):this.quad(_,m,p,x,d[u%d.length])}if(l!==null&&a>1e-4){const u=[];for(let f=0;f<o;f++){const g=h+f/o*Math.PI*2;u.push([t+Math.cos(g)*a,s,e+Math.sin(g)*a])}this.poly(u,l)}return this}blob(t,e,n,s,r,a,o){const c=new sl(1,0),l=c.attributes.position,h=Array.isArray(o)?o:[o];for(let d=0;d<l.count;d+=3){const u=_=>[t+l.getX(_)*s,e+l.getY(_)*r,n+l.getZ(_)*a],f=l.getY(d)+l.getY(d+1)+l.getY(d+2),g=h.length>1?f>.3?h[0]:h[1]:h[0];this.tri(u(d),u(d+1),u(d+2),g)}return c.dispose(),this}build(t=!1){const e=new Ve;if(e.setAttribute("position",new be(this.pos,3)),e.setAttribute("color",new be(this.col,3)),this.hasUv&&e.setAttribute("uv",new be(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new be(this.tiles,3)),t){const n=d2(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function f2(i){return new kt().makeRotationY(i)}function Bh(i,t,e){return new kt().makeTranslation(i,t,e)}const ut={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14,PLAIN:15},p2={[ut.SEA]:.04,[ut.BAY]:.03,[ut.SHALLOW]:.06,[ut.FOAM]:.09},q=128,On=4;class ol{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(q,q);for(let o=0;o<q*q;o++){const c=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*c*r[0],a.data[o*4+1]=255*c*r[1],a.data[o*4+2]=255*c*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const c=this.g;c.fillStyle=o;for(const l of[0,-q])for(const h of[0,-q]){const d=n+l,u=s+h;d+r<=0||u+a<=0||d>=q||u>=q||c.fillRect(t+Math.max(0,d),e+Math.max(0,u),Math.min(q,d+r)-Math.max(0,d),Math.min(q,u+a)-Math.max(0,u))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*q),Math.floor(this.rnd()*q),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function m2(i,t){const e=t%On*q,n=Math.floor(t/On)*q,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case ut.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*q,o=n+i.rnd()*q;s.moveTo(a,o);for(let c=0;c<7;c++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,q,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,q,"rgba(0,0,0,0.05)");break}case ut.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case ut.KERB:{for(let r=0;r<q;r++){const a=.78+.22*Math.sin(r/q*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,q)}for(let r=0;r<q;r+=32)i.wrapRect(e,n,0,r,q,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case ut.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*q,o=i.rnd()*q,c=4+i.rnd()*8;i.wrapRect(e,n,a,o,c,c*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*q),o=Math.floor(i.rnd()*q),c=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),c?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case ut.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case ut.SAND:{for(let r=0;r<q;r++)for(let a=0;a<q;a++){const c=.9+Math.sin(a/q*Math.PI*8+Math.sin(r/q*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(c),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case ut.SEA:case ut.BAY:case ut.SHALLOW:{const r=t===ut.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===ut.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*q,c=n+i.rnd()*q;s.moveTo(o,c),s.quadraticCurveTo(o+(i.rnd()-.5)*30,c+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,c+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*q,c=i.rnd()*q,l=6+i.rnd()*16;i.wrapRect(e,n,o,c+1,l,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,c,l-3,1,i.grey(1,t===ut.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case ut.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case ut.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,q,i.grey(.6)),i.wrapRect(e,n,64,0,1,q,i.grey(.72)),i.wrapRect(e,n,0,0,q,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case ut.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<q;r+=16)i.wrapRect(e,n,0,r,q,1,i.grey(.72));for(let r=0;r<q;r+=16)for(let a=r/16%2?8:0;a<q;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*q,i.rnd()*q,10,6,"rgba(0,0,0,0.08)");break}case ut.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<q;r+=32)i.wrapRect(e,n,r,0,2,q,i.grey(.6));i.wrapRect(e,n,0,60,q,6,i.grey(.7));break}case ut.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<q;r+=16){i.wrapRect(e,n,0,r,q,1,i.grey(.68));for(let a=r/16%2?16:0;a<q;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case ut.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,q,q);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,q,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,q,"#3a3a50");for(let o=2;o<q;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*q,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,q,q)}s.restore()}function g2(){const i=document.createElement("canvas");i.width=i.height=q*On;const t=new ol(i);for(let e=0;e<16;e++)m2(t,e);return cl(i)}function cl(i){const t=i.getContext("2d"),e=new Uint8Array(q*q*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%On*q,Math.floor(s/On)*q,q,q).data;for(let a=0;a<q;a++)e.set(r.subarray((q-1-a)*q*4,(q-a)*q*4),(s*q*q+a*q)*4)}const n=new jc(e,q,q,16);return n.wrapS=n.wrapT=Ia,n.magFilter=fn,n.minFilter=gi,n.generateMipmaps=!0,n.colorSpace=Ge,n.needsUpdate=!0,n}function Sr(i){return[i,0]}const J0=new W0(new Uint8Array([255,255,255,255]),1,1);J0.needsUpdate=!0;function Ua(i,t,e){const n=e??{value:0};return i.map=J0,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const Te={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function x2(i,t){const e=t%On*q,n=Math.floor(t/On)*q,s=i.g;i.seed(t*104729+7);const r=(a,o,c,l,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,c,l)};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),t){case Te.HOTEL:{r(0,0,q,q,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,q,2,"#d8d4cc");for(let c=0;c<4;c++){const l=c*32+5;r(l-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+l,n+o+6,22,18),r(l+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+l+2,n+o+22),s.lineTo(e+l+9,n+o+7),s.lineTo(e+l+12,n+o+7),s.lineTo(e+l+5,n+o+22),s.fill(),r(l-3,o+21,28,2,"#ffffff");for(let d=0;d<7;d++)r(l-2+d*4,o+23,1,5,"#ffffff");r(l-3,o+28,28,2,"#bdbab2")}}break}case Te.DECO:{r(0,0,q,q,"#f6f0e4");for(let a=0;a<q;a+=32)r(a,0,4,q,"#e2dacb"),r(a+4,0,1,q,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,q,3,"#e8e0d0");for(let c=0;c<4;c++){const l=c*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+l+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(l+2,o+22,10,6,"#3a78a8"),r(l+1,o+21,12,1,"#ffffff")}}break}case Te.SHOP:{r(0,0,q,q,"#f2eee6"),r(0,0,q,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,q,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case Te.MOTEL:{r(0,0,q,q,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,q,6,"#d6d0c4"),r(0,o+54,q,2,"#ffffff");for(let c=0;c<16;c++)r(c*8,o+54,1,6,"#ffffff");for(let c=0;c<2;c++){const l=c*64;r(l+6,o+14,16,38,["#2a8a8a","#c85a4a"][c]),r(l+18,o+32,2,3,"#e0c060"),r(l+30,o+18,26,18,"#4a7aa8"),r(l+30,o+18,26,2,"#ffffff"),r(l+34,o+38,14,8,"#c8c8c8"),r(l+35,o+39,12,1,"#9a9a9a")}}break}case Te.OFFICE_WARM:case Te.OFFICE_COOL:case Te.OFFICE_DARK:{r(0,0,q,q,"#1a1e36");const a=t===Te.OFFICE_WARM?.42:t===Te.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],c=["#e8f6ff","#c8ecff","#ffffff"];for(let l=0;l<8;l++){const h=l*16,d=t===Te.OFFICE_COOL&&i.rnd()<.5;for(let u=0;u<8;u++){const f=u*16,g=d||i.rnd()<a,_=g?i.rnd()<.15?"#8adfff":(t===Te.OFFICE_COOL?c:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(f+2,h+3,12,10,_),g&&i.rnd()<.4)for(let m=0;m<4;m++)r(f+2,h+4+m*3,12,1,"rgba(0,0,0,0.25)");g&&i.rnd()<.2&&r(f+5,h+8,3,5,"rgba(20,20,40,0.6)"),g||r(f+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,q,2,"#2a3054")}for(let l=0;l<q;l+=16)r(l,0,2,q,"#2c3258");break}case Te.APARTMENT:{r(0,0,q,q,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let c=0;c<4;c++){const l=c*32,h=i.rnd()<.5;r(l+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(l+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(l+2,o+15,28,2,"#8a86a0");for(let d=0;d<7;d++)r(l+3+d*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(l+24,o+9,4,6,"#b0b0c0")}}break}case Te.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<q;a+=16)r(0,a,q,1,"rgba(0,0,0,0.18)");break}default:r(0,0,q,q,"#ffffff")}s.restore()}function _2(){const i=document.createElement("canvas");i.width=i.height=q*On;const t=new ol(i);for(let e=0;e<16;e++)x2(t,e);return cl(i)}const $t={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},M2={star:$t.RIM_STAR,six:$t.RIM_SIX,multi:$t.RIM_MULTI,mesh:$t.RIM_MESH,dial:$t.RIM_DIAL,steel:$t.RIM_STEEL};function v2(i,t){const e=t%On*q,n=Math.floor(t/On)*q,s=i.g;i.seed(t*15485863+3);const r=(d,u,f,g,_)=>{s.fillStyle=_,s.fillRect(e+d,n+u,f,g)},a=q/2,o=(d,u,f=a,g=a)=>{s.fillStyle=u,s.beginPath(),s.arc(e+f,n+g,d,0,Math.PI*2),s.fill()},c=(d,u,f)=>{s.strokeStyle=f,s.lineWidth=u,s.beginPath(),s.arc(e+a,n+a,d,0,Math.PI*2),s.stroke()},l=(d,u=14)=>{o(u+3,i.grey(.55)),o(u,i.grey(.92));for(let f=0;f<d;f++){const g=f/d*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(g)*u*.62,a+Math.sin(g)*u*.62)}o(4,i.grey(.7))},h=()=>{c(61,6,i.grey(1)),c(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,q,q),s.clip(),s.clearRect(e,n,q,q),t){case $t.LENS:{r(0,0,q,q,i.grey(.55)),r(6,8,q-12,q-16,i.grey(.88));for(let u=10;u<q-10;u+=9)r(6,u,q-12,2,i.grey(.62));for(let u=10;u<q-8;u+=14)r(u,8,1,q-16,i.grey(.7));const d=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);d.addColorStop(0,"rgba(255,255,255,0.75)"),d.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=d,s.fillRect(e,n,q,q);break}case $t.LENS_ROUND:{r(0,0,q,q,i.grey(.5)),o(62,i.grey(.6));for(let d=58;d>8;d-=7)o(d,i.grey(.72+(58-d)/200)),c(d,1.5,i.grey(.55+(58-d)/250));o(12,i.grey(1));break}case $t.LENS_BAR:{r(0,0,q,q,i.grey(.7));for(let d=0;d<q;d+=4)r(d,0,2,q,i.grey(.9));r(0,0,q,10,i.grey(.5)),r(0,q-10,q,10,i.grey(.5)),r(0,a-3,q,6,i.grey(1));break}case $t.MESH:{r(0,0,q,q,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let d=-q;d<q*2;d+=10)s.beginPath(),s.moveTo(e+d,n),s.lineTo(e+d+q,n+q),s.stroke(),s.beginPath(),s.moveTo(e+d,n+q),s.lineTo(e+d+q,n),s.stroke();break}case $t.LOUVRE:{for(let d=0;d<q;d+=16){const u=s.createLinearGradient(0,n+d,0,n+d+16);u.addColorStop(0,i.grey(1)),u.addColorStop(.55,i.grey(.7)),u.addColorStop(.6,i.grey(.08)),u.addColorStop(1,i.grey(.15)),s.fillStyle=u,s.fillRect(e,n+d,q,16)}break}case $t.TREAD:{i.noise(e,n,.85,.05);for(const d of[30,62,94])r(d,0,5,q,i.grey(.25));for(let d=0;d<q;d+=16)for(const[u,f]of[[0,30],[35,62],[67,94],[99,q]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+u,n+d+(u<64?0:6)),s.lineTo(e+f,n+d+(u<64?6:0)),s.stroke();break}case $t.SIDEWALL:{r(0,0,q,q,i.grey(.16)),r(0,q-10,q,10,i.grey(.1)),r(0,0,q,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case $t.HEADLAMP:{r(0,0,q,q,i.grey(.55));const d=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);d.addColorStop(0,i.grey(1)),d.addColorStop(.3,i.grey(.95)),d.addColorStop(.75,i.grey(.72)),d.addColorStop(1,i.grey(.5)),s.fillStyle=d,s.fillRect(e+4,n+4,q-8,q-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let u=8;u<q;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u,n+q),s.stroke(),s.beginPath(),s.moveTo(e,n+u),s.lineTo(e+q,n+u),s.stroke();break}case $t.SEAT:{r(0,0,q,q,i.grey(.8));for(let d=24;d<q-24;d+=10)r(d,0,2,q,i.grey(.55));r(0,0,20,q,i.grey(.65)),r(q-20,0,20,q,i.grey(.65));break}case $t.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let d=0;d<5;d++){const u=d/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}l(5);break}case $t.RIM_SIX:{h();for(let d=0;d<6;d++){const u=d/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}l(5,16);break}case $t.RIM_MULTI:{h();for(let d=0;d<7;d++){const u=d/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(u),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}l(5);break}case $t.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let d=0;d<20;d++){const u=d/20*Math.PI*2;for(const f of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(u)*14,n+a+Math.sin(u)*14),s.lineTo(e+a+Math.cos(u+f)*60,n+a+Math.sin(u+f)*60),s.stroke()}s.restore(),h(),l(5,16);break}case $t.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let d=0;d<5;d++){const u=d/5*Math.PI*2;o(15,"#000",a+Math.cos(u)*36,a+Math.sin(u)*36)}s.globalCompositeOperation="source-over";for(let d=0;d<5;d++){const u=d/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(u)*36,n+a+Math.sin(u)*36,16,0,Math.PI*2),s.stroke()}h(),l(5);break}case $t.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),c(40,2,i.grey(.6));for(let d=0;d<8;d++){const u=d/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(u)*46,a+Math.sin(u)*46)}o(14,i.grey(.7));break}default:r(0,0,q,q,"#ffffff")}s.restore()}let ra=null;function y2(){if(ra)return ra;const i=document.createElement("canvas");i.width=i.height=q*On;const t=new ol(i);for(let e=0;e<16;e++)v2(t,e);return ra=cl(i),ra}function ei(i,t,e,n,s=10,r=7){const a=typeof n=="number"?()=>n:n,o=(c,l)=>{const h=l/r*Math.PI,d=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(d)*e[0],t[1]+Math.cos(h)*e[1],t[2]+Math.sin(h)*Math.sin(d)*e[2]]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=(c+.5)/r*Math.PI,d=(l+.5)/s*Math.PI*2,u=[Math.sin(h)*Math.cos(d),Math.cos(h),Math.sin(h)*Math.sin(d)];i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),a(u[0],u[1],u[2]))}}function Q0(i,t,e,n,s=12,r=8){ei(i,t,[e*.92,e,e*1.04],(a,o,c)=>c<-.42&&o>-.3&&o<.38?o>.2?2768472:1055270:c<-.5&&o<=-.3?14211284:Math.abs(a)<.2&&o>-.1?n:o<-.55?1710620:o>.3?16777215:15132386,s,r)}function tu(i,t,e,n,s){const r=new Ut(n).multiplyScalar(.7).getHex();ei(i,t,e,(a,o)=>o>.15&&o<.45?s:o<-.3?r:n,10,6)}function b2(i,t,e){const n=new Ut(t).multiplyScalar(.8).getHex();ei(i,[0,0,-.12],[.062,.062,.15],(a,o)=>o>.5?e:t,8,5),ei(i,[0,-.012,-.33],[.052,.052,.13],n,8,5),ei(i,[0,-.018,-.465],[.05,.055,.05],1315862,8,5);const s=2763824,r=4869718;return i.box(0,.035,-.56,.06,.075,.26,[s,r,s,s]),i.box(0,.077,-.56,.04,.01,.22,r),i.box(0,.02,-.4,.05,.03,.12,1973792),i.with(new kt().makeTranslation(0,-.03,-.47).multiply(new kt().makeRotationX(.25)),()=>i.box(0,0,0,.04,.1,.045,1710620)),i.with(new kt().makeTranslation(0,-.07,-.6).multiply(new kt().makeRotationX(-.18)),()=>i.box(0,0,0,.032,.16,.05,[2105380,3158068])),i.with(new kt().makeRotationX(-Math.PI/2),()=>{i.prism(0,.04,.69,.8,.024,.024,8,[s,1052690],s),i.prism(0,.04,.8,.9,.013,.013,6,r,328965)}),i.box(0,.08,-.66,.012,.025,.012,r),[0,.04,-.92]}const S2=3428460,E2=3954804,Cn=1447448,De=657932,ms=13949152,Gh=723725,aa=5921376,tn=(i,t)=>new Ut(i).multiplyScalar(t).getHex(),w2=(i,t,e)=>new Ut(i).lerp(new Ut(t),e).getHex();function er(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const c=(r[o-1]+r[o])/2;a.push(Math.sign(c)*Math.min(Math.abs(c),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let c=0;for(;c<e-2&&o>n[c+1];)c++;const l=n[c+1]-n[c];if(l<1e-4)return s[c+1];const h=(o-n[c])/l,d=h*h,u=d*h;return(2*u-3*d+1)*s[c]+(u-2*d+h)*l*a[c]+(-2*u+3*d)*s[c+1]+(u-d)*l*a[c+1]}}const oa=i=>i==="ws"||i==="rf"||i==="rw";function Oa(i,t,e,n,s,r,a,o,c,l){i.tri(t,e,n,r,[a,o,c]),i.tri(t,n,s,r,[a,c,l])}function Hh(i,t,e,n,s,r,a,o,c,l=o){i.layer(c,()=>{const h=t-s/2,d=t+s/2,u=e-r/2,f=e+r/2,g=n-a/2,_=n+a/2;i.quad([h,f,g],[d,f,g],[d,f,_],[h,f,_],o,[0,0,1,.3]),i.quad([h,u,g],[d,u,g],[d,f,g],[h,f,g],o,[0,0,1,1]),i.quad([d,u,_],[h,u,_],[h,f,_],[d,f,_],l,[0,0,1,1]),i.quad([h,u,_],[h,u,g],[h,f,g],[h,f,_],tn(o,.8),[0,0,.2,1]),i.quad([d,u,g],[d,u,_],[d,f,_],[d,f,g],tn(o,.8),[0,0,.2,1]),i.quad([h,u,g],[h,u,_],[d,u,_],[d,u,g],tn(o,.6),[0,0,1,.3])})}function Vh(i,t,e,n,s){const r=new $(...t),a=new $(...e),o=r.distanceTo(a),c=new kt().lookAt(r,a,new $(0,1,0));c.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(c,()=>i.box(0,0,0,n,n,o,s))}function Wh(i,t,e,n,s=8,r=5,a=n){const o=(c,l)=>{const h=l/r*Math.PI,d=c/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(d)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(d)*e]};for(let c=0;c<r;c++)for(let l=0;l<s;l++){const h=c===1?a:n;i.quad(o(l,c),o(l+1,c),o(l+1,c+1),o(l,c+1),h)}}function Gi(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Fc(i,t,e,n,s,r,a,o,c){i.layer(c,()=>{for(let l=0;l<a;l++){const h=l/a*Math.PI*2,d=(l+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(d)*s,e+Math.sin(d)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(d)*.5,.5+Math.sin(d)*.5]])}})}function eu(i,t,e=!1){var mt;const n=new dt(!0),s=new dt(!0),r=new dt(!0),a=new dt,o=new dt(!0),c=new dt(!0),l=i.stations,h=l[0],d=l[l.length-1],u=h.z,f=d.z,g=er(l,"w"),_=er(l,"yb"),m=er(l,"belt"),p=er(l,"top"),x=er(l,"wt"),M=y=>{let L=l[0].seg;for(const N of l)y>=N.z-1e-6&&(L=N.seg);return L},v=tn(t,.42),w=tn(t,.82),E=i.group==="80s EXOTIC",T=i.wheels,C=e?.11:T.hw??.18,S=[{z:T.fz,x:e?g(T.fz)-.12:T.fx,r:T.r,hw:C,R:0,flare:0},{z:T.rz,x:e?g(T.rz)-.12:T.rx,r:e?T.r:T.r*1.03,hw:e?C:C*1.15,R:0,flare:0}];for(const y of S){y.R=y.r+(e?.06:.07);const L=y.x+y.hw+.02-g(y.z);y.flare=Math.max(i.arch??(e?.012:.035),L)}const b=y=>{let L=0;for(const N of S){const k=(y-N.z)/(N.R+.5);Math.abs(k)<1&&(L+=N.flare*Math.cos(k*Math.PI/2)**2)}return L},P=y=>{let L=-1;for(const N of S){const k=y-N.z;Math.abs(k)<=N.R&&(L=Math.max(L,N.r+Math.sqrt(N.R*N.R-k*k)))}return L},z=y=>{const L=g(y),N=_(y),k=m(y),O=p(y),D=Math.min(x(y),L-.02),ht=M(y),Q=b(y),lt=P(y),wt=k-N,St=oa(ht)?.03:.022,Et=[[L-.05,N],[L+Q,N+.12*wt],[L+Q+.014,N+.5*wt],[L+Q*.85,N+.82*wt],[L-.02+Q*.5,k],oa(ht)?[L-.03-(L-.03-D)*.42,k+(O-k)*.52]:[D+(L-D)*.55,k+(O-k)*.8],[D,O],[D*.5,O+St*.75],[0,O+St]];if(lt>0){for(let U=0;U<4;U++)Et[U][1]=Math.max(Et[U][1],lt+(U===3?.03:0));Et[4][1]=Math.max(Et[4][1],lt+.07),Et[5][1]=Math.max(Et[5][1],Et[4][1]-.015),Et[6][1]=Math.max(Et[6][1],lt+.03)}return{z:y,seg:ht,pts:Et}},H=e?.6:.17,W=[];for(let y=0;y<l.length-1;y++){const L=Math.max(1,Math.ceil((l[y+1].z-l[y].z)/H));for(let N=0;N<L;N++)W.push(l[y].z+(l[y+1].z-l[y].z)*N/L)}W.push(f);const J=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const y of S)for(const L of J)W.push(y.z+y.R*L);W.sort((y,L)=>y-L);const F=[];for(const y of W)y<u||y>f||F.length&&y-F[F.length-1]<.006||F.push(y);const at=F.map(z),B=(y,L,N,k=0,O=0)=>[N*(y.pts[L][0]+k),y.pts[L][1]+O,y.z],nt=((mt=l.find(y=>y.seg==="lv"))==null?void 0:mt.z)??0;for(let y=0;y<at.length-1;y++){const L=at[y],N=at[y+1],k=L.seg;for(const O of[-1,1])for(let D=0;D<8;D++){let ht=B(L,D,O),Q=B(N,D,O),lt=B(N,D+1,O),wt=B(L,D+1,O);O>0&&([Q,wt]=[wt,Q]);const St=(D===4||D===5)&&oa(k),Et=(D===6||D===7)&&(k==="ws"||k==="rw");if(St)a.quad(ht,Q,lt,wt,E2);else if(Et)a.quad(ht,Q,lt,wt,S2);else if(D>=6&&k==="bed")s.quad(ht,Q,lt,wt,Cn);else{if(D>=6&&k==="lv")continue;n.quad(ht,Q,lt,wt,D===0?v:t)}}}l.some(y=>y.seg==="lv")&&s.layer($t.LOUVRE,()=>{for(let y=0;y<at.length-1;y++){const L=at[y],N=at[y+1];if(L.seg==="lv")for(const k of[-1,1])for(let O=6;O<8;O++){const D=B(L,O,k),ht=B(N,O,k),Q=B(N,O+1,k),lt=B(L,O+1,k),wt=Et=>(Et-nt)/.13,St=Et=>Math.abs(Et[0])*2;Oa(s,D,ht,Q,lt,t,[St(D),wt(D[2])],[St(ht),wt(ht[2])],[St(Q),wt(Q[2])],[St(lt),wt(lt[2])])}}});const et=(y,L,N)=>{const k=[];for(let D=0;D<=8;D++)k.push(B(y,D,1));for(let D=7;D>=0;D--)k.push(B(y,D,-1));const O=(y.pts[0][1]+y.pts[8][1])/2;for(let D=0;D<k.length;D++)N.tri([0,O,y.z],k[D],k[(D+1)%k.length],L)},ot=at[0],tt=at[at.length-1];et(ot,w,s),et(tt,tn(t,.9),s);const Ct=(y,L,N,k,O,D,ht,Q)=>{const lt=yt=>{const V=yt.pts[N],it=yt.pts[O],vt=it[0]-V[0],bt=it[1]-V[1],Nt=Math.hypot(vt,bt)||1,Kt=[k*(V[0]+.006),V[1]+.004,yt.z],ae=[k*(V[0]+.006+vt/Nt*D),V[1]+.004+bt/Nt*D,yt.z];return[Kt,ae]},[wt,St]=lt(y),[Et,U]=lt(L);Q.quad(wt,Et,U,St,ht)};for(let y=0;y<at.length-1;y++){const L=at[y],N=at[y+1];if(oa(L.seg))for(const k of[-1,1])Ct(L,N,4,k,5,.03,De,s),L.seg==="rf"?Ct(L,N,6,k,5,.025,De,s):Ct(L,N,6,k,5,.06,t,s)}const K=(y,L,N,k)=>{const O=[];for(let D=L;D<=8;D++)O.push(B(y,D,1,.004,.006));for(let D=7;D>=L;D--)O.push(B(y,D,-1,.004,.006));for(let D=0;D<O.length-1;D++){const ht=O[D],Q=O[D+1];s.quad(ht,Q,[Q[0],Q[1],Q[2]+k],[ht[0],ht[1],ht[2]+k],N)}},gt=at.find(y=>y.seg==="ws"),Tt=at.find(y=>y.seg==="rf");gt&&K(gt,4,De,.06),Tt&&K(Tt,6,t,-.05);const ft=(y,L)=>{const N=z(y);for(let k=0;k<4;k++){const O=N.pts[k],D=N.pts[k+1];if(L>=O[1]&&L<=D[1])return O[0]+(D[0]-O[0])*(L-O[1])/Math.max(1e-4,D[1]-O[1])}return L<N.pts[0][1]?N.pts[0][0]:N.pts[4][0]},Ot=(y,L)=>{const N=z(y);for(let k=4;k<8;k++){const O=N.pts[k],D=N.pts[k+1];if(L<=O[0]&&L>=D[0])return O[1]+(D[1]-O[1])*(O[0]-L)/Math.max(1e-4,O[0]-D[0])}return N.pts[8][1]};for(const y of S){const L=e?6:14;for(const N of[-1,1])for(let k=0;k<L;k++){const O=k/L*Math.PI,D=(k+1)/L*Math.PI,ht=(V,it)=>y.z+Math.cos(V)*it,Q=(V,it)=>y.r+Math.sin(V)*it,lt=ft(ht(O,y.R),Q(O,y.R))+.002,wt=ft(ht(D,y.R),Q(D,y.R))+.002,St=y.x-y.hw-.06,Et=Math.min(Q(O,y.R),Ot(ht(O,y.R),St)-.02),U=Math.min(Q(D,y.R),Ot(ht(D,y.R),St)-.02);s.quad([N*lt,Q(O,y.R),ht(O,y.R)],[N*wt,Q(D,y.R),ht(D,y.R)],[N*St,U,ht(D,y.R)],[N*St,Et,ht(O,y.R)],Gh);const yt=y.R+(e?.03:.045);s.quad([N*(lt+.02),Q(O,y.R),ht(O,y.R)],[N*(wt+.02),Q(D,y.R),ht(D,y.R)],[N*(wt+.004),Q(D,yt),ht(D,yt)],[N*(lt+.004),Q(O,yt),ht(O,yt)],E||e?t:w),s.quad([N*(lt+.02),Q(O,y.R),ht(O,y.R)],[N*(wt+.02),Q(D,y.R),ht(D,y.R)],[N*(wt-.01),Q(D,y.R-.01),ht(D,y.R-.01)],[N*(lt-.01),Q(O,y.R-.01),ht(O,y.R-.01)],v)}}const Bt=ot.pts,ct=Bt[0][1],Dt=Bt[2][0],pt=u-.006,Zt=i.front??"popup",G=(y,L,N,k,O=0)=>{const D=Math.min(O,(N-L)/2,k/2);s.poly([[y-k+D,L,pt+.002],[y+k-D,L,pt+.002],[y+k,L+D,pt+.002],[y+k,N-D,pt+.002],[y+k-D,N,pt+.002],[y-k+D,N,pt+.002],[y-k,N-D,pt+.002],[y-k,L+D,pt+.002]],De);const ht=k-.025-D*.5,Q=L+.02+D*.4,lt=N-.02-D*.4;ht>.02&&lt>Q&&s.layer($t.MESH,()=>s.quad([y-ht,Q,pt],[y+ht,Q,pt],[y+ht,lt,pt],[y-ht,lt,pt],aa,[0,0,ht*12,(lt-Q)*7]))},Pe=e?"bar":i.nose??"bar",ie=(Bt[4][1]+Bt[6][1])/2;if((Pe==="bar"||Pe==="grille")&&G(0,ct+.02,ct+.19,Dt*.74),Pe==="grille"&&G(0,ie-.035,ie+.035,Dt*.3),Pe==="slim"&&G(0,ct+.03,ct+.1,Dt*.7,.02),Pe==="lip"&&G(0,ct+.025,ct+.065,Dt*.6),Pe==="mouth"){G(0,ct+.03,ct+.2,Dt*.36,.06);for(const y of[-1,1])G(y*Dt*.68,ct+.04,ct+.11,Dt*.14,.02)}if(Pe==="slots"){G(0,ct+.03,ct+.12,Dt*.3,.02);for(const y of[-1,1])G(y*Dt*.6,ct+.05,ct+.12,Dt*.2,.02)}if(Pe==="twin"){for(const y of[-1,1])G(y*Dt*.52,ct+.03,ct+.16,Dt*.24,.03);G(0,ct+.04,ct+.09,Dt*.18,.015)}if(e){const y=ct+.24;for(const L of[-1,1])o.layer($t.HEADLAMP,()=>o.quad([L*Dt*.82,y-.06,pt-.002],[L*Dt*.5,y-.06,pt-.002],[L*Dt*.5,y+.06,pt-.002],[L*Dt*.82,y+.06,pt-.002],15262924,[0,0,1,1]))}else{s.box(0,ct-.008,u+.1,Dt*1.62,.022,.24,[Cn,De]);const y=(Bt[4][1]+Bt[6][1])/2;for(const L of[-1,1]){const N=L*Dt*.62;if(Zt==="popup"){const k=u+.26,O=u+.62,D=lt=>p(lt)+.012,ht=(lt,wt,St,Et)=>s.quad([lt,D(wt),wt],[St,D(Et),Et],[St,D(Et)+.001,Et+.018],[lt,D(wt)+.001,wt+.018],De);ht(N-.2,k,N+.2,k),ht(N-.2,O,N+.2,O);for(const lt of[N-.2,N+.2])s.quad([lt-.008,D(k),k],[lt+.008,D(k),k],[lt+.008,D(O),O],[lt-.008,D(O),O],De);const Q=ct+.25;s.quad([N-.17,Q-.05,pt+.001],[N+.17,Q-.05,pt+.001],[N+.17,Q+.05,pt+.001],[N-.17,Q+.05,pt+.001],Cn),o.layer($t.HEADLAMP,()=>o.quad([N-.15+L*.06,Q-.035,pt-.002],[N+.15+L*.06,Q-.035,pt-.002],[N+.15+L*.06,Q+.035,pt-.002],[N-.15+L*.06,Q+.035,pt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([N-.16,Q-.035,pt-.002],[N-.04,Q-.035,pt-.002],[N-.04,Q+.035,pt-.002],[N-.16,Q+.035,pt-.002],16752688,[0,0,1,1]))}else if(Zt==="round")T2(s,N,y,pt+.001,.125,.15,ms),Fc(o,N,y,pt-.002,.125,.11,16,16052440,$t.HEADLAMP);else{const k=Zt==="slim"?.06:.12;s.quad([N-.23,y-k/2-.02,pt+.001],[N+.23,y-k/2-.02,pt+.001],[N+.23,y+k/2+.02,pt+.001],[N-.23,y+k/2+.02,pt+.001],Cn),o.layer($t.HEADLAMP,()=>o.quad([N-.2,y-k/2,pt-.002],[N+.12,y-k/2,pt-.002],[N+.12,y+k/2,pt-.002],[N-.2,y+k/2,pt-.002],16052440,[0,0,1,1])),o.layer($t.LENS,()=>o.quad([N+.13,y-k/2,pt-.002],[N+.21,y-k/2,pt-.002],[N+.21,y+k/2,pt-.002],[N+.13,y+k/2,pt-.002],16752688,[0,0,1,1]))}}}const It=f;for(const y of i.rear??[])for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x]){const N=[L-y.w/2,y.y-y.h/2,It+.006],k=[L+y.w/2,y.y-y.h/2,It+.006],O=[L+y.w/2,y.y+y.h/2,It+.006],D=[L-y.w/2,y.y+y.h/2,It+.006];y.c===De?s.layer($t.MESH,()=>s.quad(N,k,O,D,aa,[0,0,y.w*7,y.h*7])):s.quad(N,k,O,D,y.c)}const qt=(y,L,N,k,O,D=0,ht)=>{const Q=L.w+D,lt=L.h+D,wt=ht??(L.round?$t.LENS_ROUND:L.w>.7?$t.LENS_BAR:$t.LENS);L.round?Fc(y,N,L.y,k,Q/2,lt/2,16,O,wt):y.layer(wt,()=>y.quad([N-Q/2,L.y-lt/2,k],[N+Q/2,L.y-lt/2,k],[N+Q/2,L.y+lt/2,k],[N-Q/2,L.y+lt/2,k],O,[0,0,L.w>.7?Q*6:1,1]))};for(const y of i.lights)for(const L of y.mirror===!1||y.x===0?[y.x]:[y.x,-y.x])qt(o,y,L,It+.012,y.c),y.brake&&!e&&qt(c,y,L,It+.016,16730678),e||(qt(s,y,L,It+.008,1710622,.05,$t.PLAIN),y.round&&s.with(new kt().makeTranslation(L,y.y,It+.01).multiply(new kt().makeScale(1,y.h/y.w,1)),()=>Gi(s,y.w/2,y.w/2+.022,16,ms)));if(i.slats){const y=i.slats;for(let L=0;L<=y.n;L++){const N=y.y0+(y.y1-y.y0)*L/y.n;s.box(0,N,It+.03,y.w*2,.03,.035,[De,Cn])}}const se=tt.pts[0][1],Gt=tt.pts[2][0],I=Math.min(se+.15,i.plateY-.12);if(I-(se-.04)>.06){const y=se-.04,L=I,N=It+.075,k=.09,O=Math.max(0,g(It-.4)-Gt),D=Math.min(.32,.07+O*2.2),ht=Gt*.98-D,Q=N-D,lt=E||e?2763310:w,wt=E||e?3684412:t,St=[[0,N]];for(let Et=0;Et<=5;Et++){const U=Et/5*(Math.PI/2);St.push([ht+D*Math.sin(U),Q+D*Math.cos(U)])}for(const Et of[-1,1])for(let U=0;U<St.length-1;U++){const[yt,V]=St[U],[it,vt]=St[U+1],bt=U===0?[yt,V-k]:[yt-Math.sin((U-1)/5*(Math.PI/2))*k,V-Math.cos((U-1)/5*(Math.PI/2))*k],Nt=[it-Math.sin(U/5*(Math.PI/2))*k,vt-Math.cos(U/5*(Math.PI/2))*k];s.quad([Et*yt,y,V],[Et*it,y,vt],[Et*it,L,vt],[Et*yt,L,V],lt),s.quad([Et*yt,L,V],[Et*it,L,vt],[Et*Nt[0],L,Nt[1]],[Et*bt[0],L,bt[1]],wt)}}if(e)s.quad([-.26,i.plateY-.08,It+.008],[.26,i.plateY-.08,It+.008],[.26,i.plateY+.08,It+.008],[-.26,i.plateY+.08,It+.008],15263960),s.quad([-.29,i.plateY-.1,It+.007],[.29,i.plateY-.1,It+.007],[.29,i.plateY+.1,It+.007],[-.29,i.plateY+.1,It+.007],3158068);else{for(const N of i.exhaust)s.with(new kt().makeTranslation(N.x,N.y,It-.1).multiply(new kt().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,N.r,N.r,12,[ms,11054260],null),s.prism(0,0,.2,.222,N.r*1.04,N.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,N.r*.8,N.r*.8,12,De,De)});const y=i.plateY,L=It+.006;s.quad([-.3,y-.1,It+.004],[.3,y-.1,It+.004],[.3,y+.1,It+.004],[-.3,y+.1,It+.004],Cn),s.quad([-.31,y-.105,L],[.31,y-.105,L],[.31,y-.085,L],[-.31,y-.085,L],ms),s.quad([-.31,y+.085,L],[.31,y+.085,L],[.31,y+.105,L],[-.31,y+.105,L],ms);for(const N of[-1,1]){o.layer($t.LENS,()=>o.quad([N*.36,y-.04,It+.012],[N*.49,y-.04,It+.012],[N*.49,y+.04,It+.012],[N*.36,y+.04,It+.012],15790312,[0,0,1,1]));const k=Math.max(se+.02,(I+se)/2-.025);N<0&&o.layer($t.LENS,()=>o.quad([-.62,k,It+.08],[-.48,k,It+.08],[-.48,k+.05,It+.08],[-.62,k+.05,It+.08],13639704,[0,0,1,1]))}s.quad([-Gt*.8,se-.05,It+.06],[Gt*.8,se-.05,It+.06],[Gt*.8,se+.03,It-.5],[-Gt*.8,se+.03,It-.5],1842208);for(let N=-3;N<=3;N++)s.box(N*Gt*.24,se+0,It-.15,.025,.06,.4,Cn)}const A=(y,L,N,k,O,D,ht,Q,lt,wt,St)=>{const Et=[L*(ft(N,O)+wt),O,N],U=[L*(ft(k,ht)+wt),ht,k],yt=[L*(ft(k,Q)+wt),Q,k],V=[L*(ft(N,D)+wt),D,N];y.quad(Et,U,yt,V,lt,St)};for(const y of i.side??[])for(const L of[-1,1])if(y.kind==="intake"){const k=D=>Math.max(y.y0+(y.y1-y.y0)*.5*(1-(D-y.z0)/(y.z1-y.z0)),P(D)+.1),O=(D,ht)=>Math.max(k(Math.min(y.z1,Math.max(y.z0,D)))+.04,Math.min(y.y1+ht,m(D)-.03));for(let D=0;D<10;D++){const ht=y.z0+(y.z1-y.z0)*D/10,Q=y.z0+(y.z1-y.z0)*(D+1)/10,lt=D===0?ht-.03:ht,wt=D===9?Q+.03:Q,St=.006+Math.min(.02,(b(ht)+b(Q))*.25);A(s,L,lt,wt,k(ht)-.03,O(lt,.03),k(Q)-.03,O(wt,.03),De,St);const Et=(ht-y.z0)*7,U=(Q-y.z0)*7;s.layer($t.MESH,()=>A(s,L,ht,Q,k(ht),O(ht,0),k(Q),O(Q,0),aa,St+.003,[Et,0,U-Et,(y.y1-y.y0)*7]))}}else if(y.kind==="naca")A(s,L,y.z0,y.z1,y.y1-.02,y.y1,y.y0,y.y1,De,.007),A(s,L,y.z0+(y.z1-y.z0)*.6,y.z1,y.y1-(y.y1-y.y0)*.6,y.y1,y.y0+.02,y.y1-.02,2236966,.009);else if(y.kind==="stripe")A(s,L,y.z0,y.z1,y.y0,y.y1,y.y0,y.y1,y.c??16777215,.008);else if(y.kind==="strakes")for(let k=0;k<6;k++){const O=y.z0+(y.z1-y.z0)*k/6,D=y.z0+(y.z1-y.z0)*(k+1)/6;A(s,L,O,D,y.y0,y.y1,y.y0,y.y1,De,.006);const ht=y.n??5;for(let Q=0;Q<ht;Q++){const lt=y.y0+(y.y1-y.y0)*(Q+.6)/(ht+.2);for(const[wt,St,Et,U]of[[lt,lt+.035,.035,.035],[lt,lt,.006,.035],[lt+.035,lt+.035,.006,.035]]){const yt=[L*(ft(O,wt)+Et),wt,O],V=[L*(ft(D,wt)+Et),wt,D],it=[L*(ft(D,St)+U),St,D],vt=[L*(ft(O,St)+U),St,O];s.quad(yt,V,it,vt,wt===St?wt===lt?v:w:t)}}}const Z=l.find(y=>y.seg==="ws"),xt=l.find(y=>y.seg==="rw")??l.find(y=>y.seg==="lv"),_t=l.findIndex(y=>y.seg==="rf");for(const y of[-1,1]){const L=S[0].z+S[0].R+.04,N=S[1].z-S[1].R-.04;if(N>L){const V=e?1:4;for(let it=0;it<V;it++){const vt=L+(N-L)*it/V,bt=L+(N-L)*(it+1)/V,Nt=_(vt),Kt=_(bt);s.quad([y*(ft(vt,Nt+.02)+.02),Nt-.02,vt],[y*(ft(bt,Kt+.02)+.02),Kt-.02,bt],[y*(ft(bt,Kt+.1)+.006),Kt+.1,bt],[y*(ft(vt,Nt+.1)+.006),Nt+.1,vt],e?2763310:E?v:w)}}const k=u+.3,O=_(k)+(m(k)-_(k))*.55;if(o.layer($t.LENS,()=>{o.quad([y*(ft(k,O)+.01),O-.025,k],[y*(ft(k+.14,O)+.01),O-.025,k+.14],[y*(ft(k+.14,O)+.01),O+.025,k+.14],[y*(ft(k,O)+.01),O+.025,k],16751136,[0,0,1,1]);const V=f-.4,it=_(V)+(m(V)-_(V))*.6;o.quad([y*(ft(V,it)+.01),it-.025,V],[y*(ft(V+.14,it)+.01),it-.025,V+.14],[y*(ft(V+.14,it)+.01),it+.025,V+.14],[y*(ft(V,it)+.01),it+.025,V],13113360,[0,0,1,1])}),!Z)continue;const D=Z.z+.22,ht=m(D)+.07,Q=ft(D,m(D)-.01);e?s.box(y*(Q+.08),ht,D,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(y*(Q+.035),ht-.04,D,.08,.03,.04,De),s.box(y*(Q+.11),ht,D,.14,.08,.075,[t,t,w,De]),s.quad([y*(Q+.05),ht-.032,D+.039],[y*(Q+.17),ht-.032,D+.039],[y*(Q+.17),ht+.032,D+.039],[y*(Q+.05),ht+.032,D+.039],10135736));const lt=(i.side??[]).find(V=>V.kind==="intake"),wt=Z.z+.06;let St=xt?xt.z+.05:Z.z+1.15;lt&&(St=Math.min(St,lt.z0-.06));for(const V of[wt,St]){const it=z(V);for(let vt=0;vt<4;vt++){const bt=it.pts[vt],Nt=it.pts[vt+1];Nt[1]<_(V)+.08||s.quad([y*(bt[0]+.006),bt[1],V],[y*(bt[0]+.006),bt[1],V+.016],[y*(Nt[0]+.006),Nt[1],V+.016],[y*(Nt[0]+.006),Nt[1],V],Cn)}}if(e)continue;const Et=St-.22,U=m(Et)-.1;if((i.side??[]).some(V=>(V.kind==="naca"||V.kind==="intake")&&Et+.14>V.z0&&Et-.14<V.z1&&U+.05>V.y0&&U-.05<V.y1)||s.quad([y*(ft(Et-.1,U)+.009),U-.018,Et-.1],[y*(ft(Et+.1,U)+.009),U-.018,Et+.1],[y*(ft(Et+.1,U)+.009),U+.018,Et+.1],[y*(ft(Et-.1,U)+.009),U+.018,Et-.1],ms),y>0&&_t>=0){const V=Math.max(St,lt?lt.z1:St)+.04,it=S[1].z-S[1].R-.04;let vt=0,bt=0,Nt=!1;if(it-V>=.2)vt=(V+it)/2,bt=_(vt)+(m(vt)-_(vt))*.62,Nt=!0;else{const Kt=S[1],ae=Kt.r+Kt.R+.06;vt=Kt.z,bt=(ae+m(vt)-.05)/2,Nt=m(vt)-.05-ae>=.14}if(Nt){const Kt=ft(vt,bt)+.008;s.with(new kt().makeTranslation(Kt,bt,vt).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Gi(s,0,.058,12,w),Gi(s,.058,.07,12,Cn)})}}}if(Z&&gt){const y=gt.z+.07,L=p(y)+.035;for(const N of[-.62,0]){const k=x(y)*.62;s.quad([N*x(y),L,y],[N*x(y)+k,L+.004,y+.035],[N*x(y)+k,L+.016,y+.035],[N*x(y),L+.012,y],De)}}if(i.louvres){const y=i.louvres,L=N=>p(N)+.024;s.layer($t.LOUVRE,()=>{for(let k=0;k<4;k++){const O=y.z0+(y.z1-y.z0)*k/4,D=y.z0+(y.z1-y.z0)*(k+1)/4,ht=y.n*k/4,Q=y.n*(k+1)/4;Oa(s,[-y.w,L(O),O],[y.w,L(O),O],[y.w,L(D),D],[-y.w,L(D),D],tn(t,.9),[0,ht],[4,ht],[4,Q],[0,Q])}})}if(i.scoop&&_t>=0){const y=l[_t],L=y.z+.12,N=y.z+.75,k=y.top+.02,O=.085,D=.14;s.poly([[-D,k,L],[-D,k+O,L+.06],[-D,k+O*.6,N],[-D,k,N]],w),s.poly([[D,k,N],[D,k+O*.6,N],[D,k+O,L+.06],[D,k,L]],w),s.quad([-D,k+O,L+.06],[D,k+O,L+.06],[D,k+O*.6,N],[-D,k+O*.6,N],t),s.layer($t.MESH,()=>s.quad([D-.02,k+.01,L],[-D+.02,k+.01,L],[-D+.02,k+O-.01,L+.05],[D-.02,k+O-.01,L+.05],aa,[0,0,2,1]))}if(i.wing){const y=i.wing,L=p(y.z)+.02,N=k=>{const O=k;s.quad([-O,y.y+.03,y.z-y.d/2],[O,y.y+.03,y.z-y.d/2],[O,y.y+.02,y.z+y.d/2],[-O,y.y+.02,y.z+y.d/2],t),s.quad([-O,y.y-.03,y.z-y.d/2],[O,y.y-.03,y.z-y.d/2],[O,y.y-.005,y.z+y.d/2],[-O,y.y-.005,y.z+y.d/2],v),s.quad([-O,y.y-.03,y.z-y.d/2],[O,y.y-.03,y.z-y.d/2],[O,y.y+.03,y.z-y.d/2],[-O,y.y+.03,y.z-y.d/2],w),s.quad([-O,y.y-.005,y.z+y.d/2],[O,y.y-.005,y.z+y.d/2],[O,y.y+.045,y.z+y.d/2+.01],[-O,y.y+.045,y.z+y.d/2+.01],De)};if(y.kind==="duck")s.box(0,y.y,y.z,y.w*2,.06,y.d,[t,t,w,w]),s.quad([-y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.03,y.z+y.d/2],[y.w,y.y+.05,y.z+y.d/2+.02],[-y.w,y.y+.05,y.z+y.d/2+.02],De);else if(N(y.w),y.kind==="big")for(const k of[-1,1])s.box(k*.32,(L+y.y)/2,y.z,.06,y.y-L,.2,[Cn,Cn,2500136]),s.box(k*y.w,y.y+.02,y.z,.02,.2,y.d+.1,[t,t,w,w]);else if(y.kind==="hoop"){for(const k of[-1,1])s.box(k*(y.w-.08),(L+y.y)/2,y.z,.1,y.y-L,y.d*.7,[t,t,w,w]);c.layer($t.LENS_BAR,()=>c.quad([-.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.012,y.z+y.d/2+.012],[.2,y.y+.04,y.z+y.d/2+.016],[-.2,y.y+.04,y.z+y.d/2+.016],16728112,[0,0,3,1])),o.layer($t.LENS_BAR,()=>o.quad([-.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.012,y.z+y.d/2+.008],[.2,y.y+.04,y.z+y.d/2+.012],[-.2,y.y+.04,y.z+y.d/2+.012],7344144,[0,0,3,1]))}else for(const k of[-1,1])s.poly([[k*y.w,L,y.z-y.d/2-.2],[k*y.w,L,y.z+y.d/2],[k*y.w,y.y+.07,y.z+y.d/2],[k*y.w,y.y+.07,y.z-y.d/2]],t)}if(!e&&_t>=0){l[_t];const y=l[_t+1];i.group==="90s JAPAN"&&Vh(s,[.35,p(y.z)-.02,y.z+.05],[.38,p(y.z)+.26,y.z+.22],.008,De)}if(_t>=0&&Z){const y=l[_t],L=l[_t+1],N=i.trim??2894898,k=y.z+Math.min(.45,(L.z-y.z)*.55),O=p(k),D=m(k),ht=O-(e?.24:.22),Q=g(k)-.09,lt=D-.26,wt=Z.z+.25,St=L.z+.15;r.quad([-Q,lt,wt],[Q,lt,wt],[Q,lt,St],[-Q,lt,St],Gh);for(const Kt of[-1,1])r.quad([Kt*Q,lt,wt],[Kt*Q,lt,St],[Kt*Q,D-.02,St],[Kt*Q,D-.02,wt],tn(N,.7));r.quad([-Q,lt,St],[Q,lt,St],[Q,D+.02,St],[-Q,D+.02,St],1315864);const Et=l[_t+2]??L;r.quad([-Q,D+.02,St],[Q,D+.02,St],[Q,Math.min(m(Et.z),p(Et.z))-.02,Et.z],[-Q,Math.min(m(Et.z),p(Et.z))-.02,Et.z],1842208);const U=i.drive??(i.group==="90s JAPAN"?"R":"L"),yt=U==="C"?0:(U==="R"?1:-1)*Math.min(.38,Q*.48),V=U==="C"?[{x:0,z:k-.12,driver:!0},{x:-.44,z:k+.12,driver:!1},{x:.44,z:k+.12,driver:!1}]:[{x:yt,z:k,driver:!0},{x:-yt,z:k,driver:!1}],it=e?4868690:w2(t,2105392,.55),vt=k-(e?.5:.48),bt=ht-.24,Nt=Math.max(Z.z+.3,vt-.22);r.box(0,D-.03,Nt,Q*2,.12,.32,[1710622,2236968]);for(const Kt of V){const ae=Kt.x,ne=Kt.z;if(e){r.box(ae,D-.02,ne+.2,.42,.5,.1,tn(N,.9)),Kt.driver&&(Wh(r,[ae,ht,ne],.11,2760728,6,4,2760728),r.box(ae,ht-.25,ne+.03,.36,.26,.2,it));continue}const cn=Math.min(D-.04,O-.52);if(r.with(new kt().makeTranslation(ae,cn,ne+.22).multiply(new kt().makeRotationX(.22)),()=>{Hh(r,0,0,0,.44,.56,.1,N,$t.SEAT,tn(N,.75)),Hh(r,0,.36,.02,.26,.17,.09,N,$t.SEAT,tn(N,.75));for(const Ze of[-1,1])r.box(Ze*.2,.02,-.06,.06,.48,.1,tn(N,.85))}),Kt.driver){Q0(r,[ae,ht,ne],.125,t),ei(r,[ae,ht-.16,ne+.02],[.05,.06,.05],1710620,6,4),tu(r,[ae,ht-.33,ne+.04],[.21,.17,.12],it,t);for(const Ze of[-1,1])Vh(r,[ae+Ze*.18,ht-.26,ne+.02],[ae+Ze*.16,bt-.02,vt+.05],.075,it),Wh(r,[ae+Ze*.16,bt-.02,vt+.04],.04,1710618,5,3);r.with(new kt().makeTranslation(ae,bt,vt).multiply(new kt().makeRotationX(-.45)),()=>{Gi(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(ae,D+.05,Nt+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(y.z+.05)-.07,y.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:c,plate:{y:i.plateY,z:It+.012},tailZ:It,wheels:[{x:S[0].x,z:S[0].z,r:S[0].r,hw:S[0].hw},{x:S[1].x,z:S[1].z,r:S[1].r,hw:S[1].hw}]}}function T2(i,t,e,n,s,r,a){i.with(new kt().makeTranslation(t,e,n),()=>Gi(i,s,r,16,a))}function nu(i,t,e,n,s,r,a=16,o=!0){const c=(g,_,m)=>[_,Math.cos(g)*m,Math.sin(g)*m],l=t*.66,h=t*.93,d=e*.8,u=n*e,f=n*(e-.035);for(let g=0;g<a;g++){const _=g/a*Math.PI*2,m=(g+1)/a*Math.PI*2,p=g/a*8,x=(g+1)/a*8;i.layer($t.TREAD,()=>Oa(i,c(_,-d,t),c(_,d,t),c(m,d,t),c(m,-d,t),3815996,[0,p],[1,p],[1,x],[0,x]));for(const w of[-1,1])i.quad(c(_,w*d,t),c(m,w*d,t),c(m,w*e,h),c(_,w*e,h),2500138);const M=g/a*2,v=(g+1)/a*2;i.layer($t.SIDEWALL,()=>Oa(i,c(_,u,l),c(m,u,l),c(m,u,h),c(_,u,h),16777215,[M,0],[v,0],[v,1],[M,1])),i.quad(c(_,-u,l),c(m,-u,l),c(m,-u,h),c(_,-u,h),1447448),i.tri([-u,0,0],c(_,-u,l),c(m,-u,l),1052690),i.quad(c(_,u,l),c(m,u,l),c(m,f,l),c(_,f,l),tn(r,.85)),o&&i.quad(c(_,f,l*.98),c(m,f,l*.98),c(m,-f*.6,l*.98),c(_,-f*.6,l*.98),tn(r,.4))}i.with(new kt().makeTranslation(f,0,0).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Fc(i,0,0,0,l,l,a,r,M2[s])})}function A2(i,t,e,n,s){const r=new dt(!0);return nu(r,i,t,e,n,s),r.build()}function R2(i,t,e,n=13113360){const s=new dt(!0),r=i*.66,a=e*(t-.09);s.with(new kt().makeTranslation(a,0,0).multiply(new kt().makeRotationY(Math.PI/2)),()=>{Gi(s,r*.42,r*.86,14,10132128),Gi(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new kt().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new kt().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,tn(n,1.15)])}),s.build()}let ca=null;function iu(){if(ca)return ca;const i=y2(),t=new Dc({vertexColors:!0,side:me,shininess:60,specular:11053224}),e=new Ra({vertexColors:!0,side:me,alphaTest:.5}),n=new en({vertexColors:!0,side:me});for(const r of[t,e,n])Ua(r,i);const s=new Dc({vertexColors:!0,side:me,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return ca={paint:t,lit:e,glow:n,glass:s},ca}let nr=null;function C2(){if(nr)return nr;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(l,h,d)=>{const u=Math.max(0,Math.min(1,(d-l)/(h-l)));return u*u*(3-2*u)},a=.36,o=.4,c=.12;for(let l=0;l<t;l++)for(let h=0;h<i;h++){const d=(h+.5)/i-.5,u=(l+.5)/t-.5,f=Math.abs(d)-(a-c),g=Math.abs(u)-(o-c),_=Math.hypot(Math.max(f,0),Math.max(g,0))+Math.min(Math.max(f,g),0)-c;let m=.55*(1-r(-.08,.13,_));for(const x of[-.28,.28])for(const M of[-.3,.3]){const v=Math.hypot((d-M)/.09,(u-x)/.12);m=Math.max(m,.9*(1-r(.4,1.2,v)))}const p=(l*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,m))}return n.putImageData(s,0,0),nr=new br(e),nr.colorSpace=Zn,nr}const Xh=new Map;function su(i){const t=Xh.get(i);if(t)return t;const e=new en({color:0,map:C2(),transparent:!0,side:me,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return Xh.set(i,e),e}function ru(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,c=(e+n)/2,l=new dt;return l.quad([-a,.025,c-o],[a,.025,c-o],[a,.025,c+o],[-a,.025,c+o],16777215,[0,0,1,1]),l.build()}const I2=1583164,P2=2242124,gs=1315862,Je=657932,la=13159636,kc=(i,t)=>new Ut(i).multiplyScalar(t).getHex();function dn(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function au(i,t,e=!1){const n=new dt,s=new dt,r=new dt,a=i.stations,o=kc(t,.72),c=kc(t,.5),l=a[a.length-1],h=l.z;for(let x=0;x<a.length-1;x++){const M=a[x],v=a[x+1],w=M.seg==="ws"||M.seg==="rf"||M.seg==="rw"||M.seg==="lv";for(const T of[-1,1])n.quad([T*M.w,M.yb,M.z],[T*v.w,v.yb,v.z],[T*v.w,v.belt,v.z],[T*M.w,M.belt,M.z],t),n.quad([T*M.w,M.belt,M.z],[T*v.w,v.belt,v.z],[T*v.wt,v.top,v.z],[T*M.wt,M.top,M.z],w&&M.seg!=="lv"?P2:t),n.quad([T*(M.w+.004),M.yb,M.z],[T*(v.w+.004),v.yb,v.z],[T*(v.w+.004),v.yb+.09,v.z],[T*(M.w+.004),M.yb+.09,M.z],c);const E=M.seg==="ws"||M.seg==="rw"?I2:M.seg==="lv"||M.seg==="bed"?gs:M.seg==="rf"?o:t;if(n.quad([-M.wt,M.top,M.z],[M.wt,M.top,M.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],E),M.seg==="lv")for(let T=1;T<6;T++){const C=T/6,S=M.z+(v.z-M.z)*C,b=M.top+(v.top-M.top)*C+.01,P=M.wt+(v.wt-M.wt)*C;n.quad([-P,b,S-.03],[P,b,S-.03],[P,b+.01,S+.03],[-P,b+.01,S+.03],t)}}const d=(x,M,v)=>n.poly([[-x.w,x.yb,x.z+v],[-x.w,x.belt,x.z+v],[-x.wt,x.top,x.z+v],[x.wt,x.top,x.z+v],[x.w,x.belt,x.z+v],[x.w,x.yb,x.z+v]],M);d(a[0],o,0),d(l,o,0);const u=a[0],f=u.z-.006;if(n.quad([-u.w*.7,u.yb+.04,f],[u.w*.7,u.yb+.04,f],[u.w*.7,u.yb+.14,f],[-u.w*.7,u.yb+.14,f],Je),!e){const x=i.front??"popup",M=(u.belt+u.top)/2;for(const v of[-1,1]){const w=v*u.w*.62;if(x==="popup"){const E=dn(a,u.z+.45,"top");n.quad([w-.2,E+.004,u.z+.3],[w+.2,E+.004,u.z+.3],[w+.2,E+.004,u.z+.33],[w-.2,E+.004,u.z+.33],Je),s.quad([w-.14,u.yb+.17,f],[w+.14,u.yb+.17,f],[w+.14,u.yb+.24,f],[w-.14,u.yb+.24,f],16756800)}else if(x==="round"){const E=[];for(let T=0;T<8;T++){const C=T/8*Math.PI*2;E.push([w+Math.cos(C)*.11,M+Math.sin(C)*.09,f-.002])}s.poly(E,16052440)}else{const E=x==="slim"?.05:.1;s.quad([w-.2,M-E/2,f],[w+.2,M-E/2,f],[w+.2,M+E/2,f],[w-.2,M+E/2,f],16052440)}}}n.quad([-l.w,l.yb-.06,h+.02],[l.w,l.yb-.06,h+.02],[l.w,l.yb+.08,h+.02],[-l.w,l.yb+.08,h+.02],e?3815994:Je);for(const x of i.rear??[])for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])n.quad([M-x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y-x.h/2,h+.006],[M+x.w/2,x.y+x.h/2,h+.006],[M-x.w/2,x.y+x.h/2,h+.006],x.c);const g=(x,M,v,w,E)=>{if(M.round){const T=[];for(let C=0;C<8;C++){const S=C/8*Math.PI*2+Math.PI/8;T.push([v+Math.cos(S)*M.w/2,M.y+Math.sin(S)*M.h/2,w])}x.poly(T,E)}else x.quad([v-M.w/2,M.y-M.h/2,w],[v+M.w/2,M.y-M.h/2,w],[v+M.w/2,M.y+M.h/2,w],[v-M.w/2,M.y+M.h/2,w],E)},_=oe.modern&&!e;for(const x of i.lights)for(const M of x.mirror===!1||x.x===0?[x.x]:[x.x,-x.x])g(s,x,M,h+.012,x.c),x.brake&&!e&&g(r,x,M,h+.016,16726570),_&&(g(n,{...x,w:x.w+.05,h:x.h+.05},M,h+.008,1710622),g(s,{...x,w:x.w*.5,h:x.h*.45},M,h+.014,new Ut(x.c).lerp(new Ut(16777215),.45).getHex()));if(i.slats){const x=i.slats;for(let M=0;M<=x.n;M++){const v=x.y0+(x.y1-x.y0)*M/x.n;n.box(0,v,h+.03,x.w*2,.035,.03,Je)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const x of i.exhaust)n.with(new kt().makeTranslation(x.x,x.y,h-.1).multiply(new kt().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,x.r,x.r,8,la,null),n.prism(0,0,.169,.17,x.r*.78,x.r*.78,8,Je,Je)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],gs),_){const x=i.plateY,M=h+.006;n.quad([-.31,x-.105,M],[.31,x-.105,M],[.31,x-.085,M],[-.31,x-.085,M],la),n.quad([-.31,x+.085,M],[.31,x+.085,M],[.31,x+.105,M],[-.31,x+.105,M],la);for(const v of[-1,1])s.quad([v*.36,x-.04,h+.012],[v*.48,x-.04,h+.012],[v*.48,x+.04,h+.012],[v*.36,x+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,l.yb-.03,h-.12,.03,.1,.26,gs)}}const m=(x,M,v,w,E,T,C,S,b)=>{const P=dn(a,M,"w")+b,z=dn(a,v,"w")+b;n.quad([x*P,w,M],[x*z,T,v],[x*z,C,v],[x*P,E,M],S)};for(const x of i.side??[])for(const M of[-1,1])if(x.kind==="intake")m(M,x.z0,x.z1,x.y0+(x.y1-x.y0)*.5,x.y1,x.y0,x.y1,Je,.006);else if(x.kind==="naca")m(M,x.z0,x.z1,x.y1-.02,x.y1,x.y0,x.y1,Je,.006);else if(x.kind==="stripe")m(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,x.c??16777215,.008);else if(x.kind==="strakes"){m(M,x.z0,x.z1,x.y0,x.y1,x.y0,x.y1,Je,.006);const v=x.n??5;for(let w=0;w<v;w++){const E=x.y0+(x.y1-x.y0)*(w+.6)/(v+.2);m(M,x.z0,x.z1,E,E+.035,E,E+.035,t,.03)}}if(!e){const x=a.find(M=>M.seg==="ws");if(x)for(const M of[-1,1])n.box(M*(x.w+.06),x.belt+.12,x.z+.25,.18,.12,.12,[t,t,o,Je]);if(_&&x){const M=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(x.w+.02),x.belt+.08,x.z+.25,.08,.04,.05,Je);const w=x.z+.05,E=M?M.z+.05:x.z+1.1;for(const S of[w,E]){const b=dn(a,S,"w")+.007,P=dn(a,S,"yb")+.1,z=dn(a,S,"belt")-.02;n.quad([v*b,P,S],[v*b,P,S+.02],[v*b,z,S+.02],[v*b,z,S],gs)}const T=dn(a,E-.25,"w")+.012,C=dn(a,E-.25,"belt")-.1;n.quad([v*T,C,E-.38],[v*T,C,E-.18],[v*T,C+.04,E-.18],[v*T,C+.04,E-.38],la)}for(const v of["ws","rw"]){const w=a.findIndex(C=>C.seg===v);if(w<0||w+1>=a.length)continue;const E=a[w],T=a[w+1];for(const C of[-1,1])n.quad([C*E.wt,E.top+.004,E.z],[C*T.wt,T.top+.004,T.z],[C*(T.wt-.04),T.top+.006,T.z],[C*(E.wt-.04),E.top+.006,E.z],Je)}}}if(e&&oe.modern){const x=a[0],M=a.find(w=>w.seg==="ws"),v=a.find(w=>w.seg==="rw");if(n.box(0,l.yb+.05,h+.08,l.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,x.yb+.05,x.z-.08,x.w*2+.06,.16,.16,[3815998,4868686]),M)for(const w of[-1,1])n.box(w*(M.w+.08),M.belt+.1,M.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const w=a.find(T=>T.seg==="rf"),E=a[a.indexOf(w)+1];for(const T of[-1,1])n.box(T*(w.wt-.08),w.top+.06,(w.z+E.z)/2,.06,.08,E.z-w.z,2763306)}}if(i.louvres){const x=i.louvres;for(let M=0;M<x.n;M++){const v=x.z0+(x.z1-x.z0)*M/x.n,w=dn(a,v,"top")+.006;n.quad([-x.w,w,v],[x.w,w,v],[x.w,w+.004,v+.06],[-x.w,w+.004,v+.06],Je)}}if(i.scoop){const x=a.find(M=>M.seg==="rf");n.box(0,x.top+.07,x.z+.25,.32,.14,.5,[t,t,Je,o])}if(i.wing){const x=i.wing,M=dn(a,x.z,"top");if(x.kind==="duck")n.box(0,x.y,x.z,x.w*2,.06,x.d,[t,t,o,o]);else if(n.box(0,x.y,x.z,x.w*2,.055,x.d,[t,t,o,o]),n.box(0,x.y-.03,x.z+x.d/2,x.w*2,.04,.03,c),x.kind==="big")for(const v of[-1,1])n.box(v*.32,(M+x.y)/2,x.z,.07,x.y-M,.16,gs);else if(x.kind==="hoop")for(const v of[-1,1])n.box(v*(x.w-.08),(M+x.y)/2,x.z,.12,x.y-M,x.d*.7,t);else for(const v of[-1,1])n.poly([[v*x.w,M,x.z-x.d/2-.15],[v*x.w,M,x.z+x.d/2],[v*x.w,x.y+.06,x.z+x.d/2],[v*x.w,x.y+.06,x.z-x.d/2]],t)}const p=i.wheels;for(const[x,M]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const w=[];for(let E=0;E<=6;E++){const T=E/6*Math.PI;w.push([v*(dn(a,x,"w")+.003),p.r+Math.sin(T)*(p.r+.07),x+Math.cos(T)*(p.r+.07)])}n.poly(w,Je)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function L2(i,t,e,n,s){const r=new dt,a=Math.max(10,s*2),o=(l,h,d=i)=>[h,Math.cos(l)*d,Math.sin(l)*d],c=kc(n,.3);for(let l=0;l<a;l++){const h=l/a*Math.PI*2,d=(l+1)/a*Math.PI*2;r.quad(o(h,-t),o(d,-t),o(d,t),o(h,t),l%2?1710618:2368548),r.quad(o(h,e*t),o(d,e*t),o(d,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(d,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(d,e*(t+.005),i*.7),l%2===0?n:c)}return r.with(new kt().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function ll(i,t=1,e=.8){const n=new dt,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Ut(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function D2(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new kt().makeTranslation(n,e.r,s).multiply(new kt().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class Co{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new vn,this.body=new vn,this.wheels=[],this.geos=[],this.hubs=[],this.gunners=[],this.gunSide=1,this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,w,E)=>{this.geos.push(v);const T=new fe(v,w);return E.add(T),T},c=oe.modern,l=c?iu():null;let h,d,u;if(l){const v=eu(t,e);this.paintwork.push(o(v.skin.build(!0),l.paint,this.body),o(v.body.build(),l.paint,this.body)),this.detail.push(o(v.cabin.build(),l.lit,this.body));const w=o(v.glass.build(),l.glass,this.body);w.renderOrder=1,this.glowMesh=o(v.glow.build(),l.glow,this.body),this.dentable.push(w,this.glowMesh),this.brake=o(v.brake.empty?new dt().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),l.glow,this.body),h=v.plate,d=v.tailZ,u=v.wheels}else{const v=au(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new dt().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,d=v.tailZ;const w=t.wheels,E=w.hw??.18;u=[{x:w.fx,z:w.fz,r:w.r,hw:E},{x:w.rx,z:w.rz,r:w.r*1.03,hw:E*1.15}]}const f=new dt,{y:g,z:_}=h;f.quad([-.27,g-.08,_],[.27,g-.08,_],[.27,g+.08,_],[-.27,g+.08,_],16777215,s),this.dentable.push(o(f.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(ll(t,.45,.45).build(),n.halo,this.body);const m=new dt;for(const v of t.exhaust)m.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),m.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=m.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,d+(c?.12:.05)),this.tailZ=d,this.flames.visible=!1,c){const v=o(ru(t),su(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,w=v[v.length-1].z-v[0].z,E=Math.max(...v.map(S=>S.w)),T=new dt,C=[];for(let S=0;S<8;S++){const b=S/8*Math.PI*2+Math.PI/8;C.push([Math.cos(b)*E*.92,.02,v[0].z+w/2+Math.sin(b)*(w/2-.05)])}T.poly(C,16777215),o(T.build(),new en({color:r,side:me}),this.root)}const x=t.wheels,M=t.rimStyle??"star";for(const[v,w]of[[0,-1],[0,1],[1,-1],[1,1]]){const E=u[v],T=l?A2(E.r,E.hw,w,M,x.rim):L2(E.r,E.hw,w,x.rim,x.spokes),C=o(T,l?l.lit:n.lit,this.root);if(C.position.set(w*E.x,E.r,E.z),this.wheels.push(C),l){const S=o(R2(E.r,E.hw,w,t.id==="959"||t.id==="nsx"?2763310:13113360),l.lit,this.root);S.position.copy(C.position),this.hubs.push(S),this.detail.push(S)}}this.buildGunners(e,l?l.lit:n.lit,l?l.glow:n.glow,!!l),this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,c=new $,l=new $;if(e==="front"||e==="rear"){const p=e==="front";c.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),l.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;c.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),l.set(-p,-.1,(o()-.5)*.3)}l.normalize();const h=.55+t*.5,d=.04+t*.16,u=new Ut(6974064),f=new Ut(1841688),g=new Ut,_=(p,x,M)=>Math.sin(p*41.3+x*17.1)*Math.cos(M*29.7+p*7.3),m=(p,x)=>{const M=p.geometry,v=M.getAttribute("position"),w=x?M.getAttribute("color"):void 0;let E=!1;for(let T=0;T<v.count;T++){const C=v.getX(T),S=v.getY(T),b=v.getZ(T),P=Math.hypot(C-c.x,(S-c.y)*1.3,b-c.z);if(P>=h)continue;const z=(1-P/h)**2,H=d*z*(.8+.4*_(C,S,b));if(v.setXYZ(T,C+l.x*H,S+l.y*H,b+l.z*H),E=!0,w){g.setRGB(w.getX(T),w.getY(T),w.getZ(T));const W=Math.min(1,z*(.4+t));g.lerp(_(b,C,S)>.2?u:f,W*.75),w.setXYZ(T,g.r,g.g,g.b)}}E&&(v.needsUpdate=!0,w&&(w.needsUpdate=!0),M.computeVertexNormals())};for(const p of this.paintwork)m(p,!0);for(const p of this.dentable)m(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(u=>u.seg==="rw");if(e<0&&(e=t.findIndex(u=>u.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(u,f)=>{const g=n.wt+(s.wt-n.wt)*f;return[u*g*.95,n.top+(s.top-n.top)*f+.03*(1-u*u)+.025,n.z+(s.z-n.z)*f]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,c=.25+Math.random()*.5,l=7+Math.floor(Math.random()*4),h=[];for(let u=0;u<l;u++){const f=u/l*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.45;let _=o,m=c;for(let p=1;p<=4;p++){const x=g*p/4,M=Math.max(-1,Math.min(1,o+Math.cos(f)*x+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,c+Math.sin(f)*x*.8+(Math.random()-.5)*.06));a.push(...r(_,m),...r(M,v)),p===1&&h.push([M,v]),_=M,m=v}}for(let u=0;u<h.length;u++)a.push(...r(...h[u]),...r(...h[(u+1)%h.length]));const d=new Ve;d.setAttribute("position",new be(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=d):(this.cracks=new q0(d,new el({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}buildGunners(t,e,n,s){const r=this.spec.stations,a=r.findIndex(f=>f.seg==="rf"),o=r.find(f=>f.seg==="ws")??r[1],l=(a>=0?r[a]:o).z+.15,h=dn(r,l,"belt"),d=dn(r,l,"w"),u=new Ut(t).lerp(new Ut(2105392),.55).getHex();for(const f of[-1,1]){const g=new dt(s),_=new dt(s),m=new dt(s);tu(g,[f*.1,.16,.02],[.2,.2,.14],u,t),ei(g,[f*.16,.36,0],[.05,.06,.05],1710620,6,4),Q0(g,[f*.2,.5,-.01],.135,t),ei(g,[f*.02,.12,-.2],[.05,.05,.13],u,8,5),ei(g,[f*0,.08,-.33],[.045,.045,.045],1315862,6,4);const p=b2(_,u,t);for(let T=0;T<4;T++){const C=T/4*Math.PI,S=Math.cos(C)*.12,b=Math.sin(C)*.12;m.quad([-S,-b,0],[S,b,0],[S*.3,b*.3,-.36],[-S*.3,-b*.3,-.36],T%2?16760896:16771216)}m.quad([-.08,-.08,.001],[.08,-.08,.001],[.08,.08,.001],[-.08,.08,.001],16776160);const x=new vn,M=new vn;M.rotation.z=-f*.32,x.add(M);const v=(T,C,S)=>{const b=T.build();this.geos.push(b);const P=new fe(b,C);return S.add(P),P};v(g,e,M);const w=new vn;w.position.set(f*.26,.28,0),v(_,e,w);const E=v(m,n,w);E.position.set(...p),E.visible=!1,M.add(w),x.position.set(f*(d-.14),h-.06,l),x.visible=!1,this.body.add(x),this.gunners.push({group:x,arm:w,flash:E})}}aim(t,e=0,n=!1){t&&(this.gunSide=t),this.gunners.forEach((s,r)=>{const a=t!==0&&(r===0?-1:1)===this.gunSide;s.group.visible=a,a&&(s.arm.rotation.set(0,e,0),s.flash.visible=n,n&&(s.flash.rotation.z=Math.random()*Math.PI))})}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((c,l)=>c.rotation.set(n,l<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((c,l)=>c.rotation.set(0,l<2?-t*.35:0,0))}}const qh=96,ha={x:0,y:0,z:0,h:0};class N2{constructor(t){this.pool=[],this.m=new kt,this.s=new $,this.p=new $;const e=new dt,n=(r,a,o,c,l)=>{const h=[];for(let d=0;d<8;d++){const u=d/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(u)*r,o+Math.sin(u)*r,c])}e.poly(h,l)};let s;if(oe.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),c=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);c.addColorStop(0,"rgba(255,255,255,0.85)"),c.addColorStop(.55,"rgba(235,235,235,0.45)"),c.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=c,o.fillRect(0,0,64,64);const l=new br(a);l.colorSpace=Ge,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new en({map:l,vertexColors:!0,transparent:!0,depthWrite:!1,side:me})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new en({vertexColors:!0,side:me});this.mesh=new X0(e.build(),s,qh),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Ut(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,c,l,h){this.pool.length>=qh&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:c,grow:l,color:new Ut(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,ha))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(ha.x,ha.y+s.y,ha.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}let ir=null;function U2(i){oe.modern&&!ir&&(ir=_2());const t=new Ra({vertexColors:!0,flatShading:!0,side:me}),e=new en({vertexColors:!0,side:me});oe.modern&&ir&&(Ua(t,ir),Ua(e,ir));const n=oe.modern?iu():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:su(.75),lit:new Ra({vertexColors:!0,flatShading:!0,side:me}),glow:new en({vertexColors:!0,side:me}),sign:new en({map:i,side:me}),halo:new en({map:Ug(),vertexColors:!0,transparent:!0,blending:Ca,depthWrite:!1,fog:!1,side:me,visible:oe.modern}),paint:oe.modern?new Dc({vertexColors:!0,flatShading:!0,side:me,shininess:45,specular:10132122}):new Ra({vertexColors:!0,flatShading:!0,side:me})}}class O2{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new kt,this.q=new Ds,this.e=new yn,this.p=new $,this.sc=new $,this.c=new Ut,this.white=new Ut(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new X0(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(hr),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,c,l=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,l,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),c!==void 0&&this.c.setHex(c);for(const{mesh:d,tint:u}of this.meshes[t])d.setMatrixAt(h,this.m),d.setColorAt(h,u&&c!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const F2=(i,t)=>new Ut(i).multiplyScalar(t).getHex(),Ce=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function hl(){const i=new dt;return zc(i),{parts:Ce(i),radius:.8,max:260}}function k2(){const i=new dt;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(Bh(-4,1.5,1),()=>zc(i)),i.with(Bh(5,1.2,-2).multiply(f2(1.3)).multiply(new kt().makeScale(.8,.8,.8)),()=>zc(i)),{parts:Ce(i),radius:0,max:20}}function zc(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,c=(r+1)*2,l=.48-r*.04,h=.44-r*.04,d=r%2?9067051:11038778;for(let u=0;u<6;u++){const f=u/6*Math.PI*2,g=(u+1)/6*Math.PI*2;i.quad([e+Math.cos(f)*l,o,Math.sin(f)*l],[e+Math.cos(g)*l,o,Math.sin(g)*l],[a+Math.cos(g)*h,c,Math.sin(g)*h],[a+Math.cos(f)*h,c,Math.sin(f)*h],u%2?d:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),c=Math.sin(a),l=-c,h=o,d=(x,M,v)=>[[n[0]+o*x+l*v,n[1]+M,n[2]+c*x+h*v],[n[0]+o*x-l*v,n[1]+M,n[2]+c*x-h*v]],[u,f]=d(1.5,.7,.75),[g,_]=d(3,.3,.6),m=[n[0]+o*4.4,n[1]-1.6,n[2]+c*4.4],p=r%2?3124810:2067002;i.tri(n,u,f,p),i.quad(f,u,g,_,r%2?2529343:1733682),i.tri(_,g,m,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function z2(){const i=new dt;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:Ce(i),radius:1.2,max:220}}function ou(){const i=new dt;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:Ce(i),radius:0,max:160}}function ul(){const i=new dt;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:Ce(i),radius:2.2,max:120}}function Io(i){const t=new dt;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:Ce(t),radius:0,max:120}}function B2(){const i=new dt;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:Ce(i),radius:1.4,max:30}}function Yh(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),c=r.range(-s/4,s/4);for(const[l,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+l,e+1,c+h,.2,2,.2,6974064);i.prism(o,c,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function dl(i,t){const e=new dt,n=3836600;if(oe.modern){const s=new dt,r=new dt,a=o=>Sr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(Te.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),Yh(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let c=0;for(const[l,h,d]of o)s.facadeBox(0,c+h/2,0,l,h,d,a(Te.DECO),8,8,[16777215,15790320],15788248),e.box(0,c+h-.4,0,l+.6,.8,d+.6,[16769162,16771232]),e.box(0,c+h-1.4,0,l+.3,.25,d+.3,4243632),c+=h;e.prism(0,0,c,c+7,1.2,.05,4,[16777215,14737632]),r.box(0,c+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(Te.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);Yh(e,r,12,26,9,t,!1)}return{parts:[...Ce(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,c]of s){e.box(0,r+o/2,0,a,o,c,[16777215,16053492]);for(let l=r+2.5;l<r+o-1;l+=3)e.box(0,l,0,a*.7,1.3,c+.3,n);e.box(0,r+o-.4,0,a+.6,.8,c+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:Ce(e),radius:0,max:40}}function cu(i){const t=new dt,e=new dt,n=new dt;oe.modern?n.facadeBox(0,3.5,0,12,7,9,Sr(Te.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function Er(i,t=9,e=4.5,n=9079434,s=15790320){const r=new dt,a=new dt;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function Ha(i,t=4,e=2){const n=new dt,s=new dt;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function Os(i,t,e=10133672,n=3,s=!1){const r=new dt,a=new dt;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=Ce(r,a);if(s){const c=new dt,l=4.2,h=i-.5;c.quad([-n-l,h-l,0],[-n+l,h-l,0],[-n+l,h+l,0],[-n-l,h+l,0],t,[0,0,1,1]),c.quad([-n,h-l,-l],[-n,h-l,l],[-n,h+l,l],[-n,h+l,-l],t,[0,0,1,1]),c.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],F2(t,.35),[0,0,1,1]),o.push({geo:c.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function Va(i=15921906,t=10132122){const e=new dt;return e.box(0,.85,-Jt/2,.15,.45,Jt+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-Jt/2,.18,.8,.18,t),{parts:Ce(e),radius:0,max:420}}function Re(i,t=15790320,e=14690858,n=16769088){const s=new dt,r=new dt,a=new dt,o=j+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let c=0;c<6;c++)a.box(-o+2+c*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function wr(i=9079446,t=14204992,e=9){const n=new dt,s=j+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:Ce(n),radius:0,max:6}}function G2(i=9){const t=new dt,e=j+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,c=(d,u,f)=>t.poly(d.map(([g,_])=>[g,_,f]),u),l=d=>d.map(([u,f])=>[-u,f]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];c(h,s,-.4),c(l([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),c([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),c([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),c([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),c([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let d=0;d<10;d++){const u=-e+d*e*2/10;t.quad([u,i+.2,.82],[u+e*2/10,i+.2,.82],[u+e*2/10,i+.9,.82],[u,i+.9,.82],d%2?1710618:16764992)}return{parts:Ce(t),radius:0,max:6}}function bn(i,t=0){const e=new dt,n=new dt,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function lu(){const i=new dt;i.box(0,.65,-Jt/2,1.5,1.3,Jt,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:Ce(i),radius:0,max:360}}function fl(){const i=new dt,t=new dt;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function hu(){const i=new dt;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:Ce(i),radius:1,max:200}}function H2(){const i=new dt;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const c=o/10*Math.PI*2;a.push([r+Math.cos(c)*.32,1.25+Math.sin(c)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:Ce(i),radius:0,max:40}}function uu(){const i=new dt;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:Ce(i),radius:0,max:40}}function V2(i){const t=new dt,e=new dt,n=j+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,j+5,-47,j+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-j;r<=j;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:Ce(t,e),radius:0,max:6}}function W2(i){const t=new dt,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function yi(i){const t=new dt,e=new dt;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:Ce(t,e),radius:0,max:10,len:6.5}}function Wi(i){const t=new dt,e=new dt;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:Ce(t,e),radius:0,max:8,len:7.5}}function bi(i){const t=new dt,e=new dt;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:Ce(t,e),radius:0,max:400}}function pl(i){const t=new dt,e=new dt;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function Xi(i){const t=new dt,e=new dt,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function du(i){const t=new dt;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:Ce(t),radius:0,max:30}}function X2(){const i=new dt,t=new dt;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function fu(i){const t=new dt;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function q2(i){const t=new dt,e=new dt,n=new dt;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function Y2(i){const t=new dt,e=new dt;for(const n of[-4.5,4.5])t.with(new kt().makeTranslation(n,i-1.1,0).multiply(new kt().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:Ce(t,e),radius:0,max:12}}const $h=i=>new Ut().setHex(i);function ge(i,t,e,n){const s=[],r=(h,d,u,f,g,_,m,p)=>s.push({xa:h,ya:d,absA:u,xb:f,yb:g,absB:_,c0:$h(m[0]),c1:$h(m[1]),tex:p});let o=-j;const c=i.edge!==void 0?.45:0;c&&(r(o,0,!1,o+c,0,!1,[i.edge,i.edge],ut.PAINT),o+=c);for(let h=1;h<ki;h++){const d=-j+h*_r;r(o,0,!1,d-.35/2,0,!1,i.road,ut.ASPHALT),r(d-.35/2,0,!1,d+.35/2,0,!1,[i.line,i.road[1]],ut.PAINT),o=d+.35/2}r(o,0,!1,j-c,0,!1,i.road,ut.ASPHALT),c&&r(j-c,0,!1,j,0,!1,[i.edge,i.edge],ut.PAINT);const l=[];for(const h of[-1,1]){let d=j,u=0,f=!1;if(i.rumble){const g=i.rumbleW??1.6;r(h*d,0,!1,h*(d+g),0,!1,i.rumble,ut.KERB),d+=g}for(const g of h<0?t:e){const _=d+g.w;let m=u,p=f;g.abs!==void 0?(m=g.abs,p=!0):g.dy!==void 0&&(m=u+g.dy),r(h*d,u,f,h*_,m,p,g.c,g.tex),d=_,u=m,f=p}l.push({x:h*d,y:u,abs:f})}return n&&r(l[0].x,l[0].y,l[0].abs,l[1].x,l[1].y,l[1].abs,n,ut.CEILING),{spans:s}}function $2(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?ut.TUNNEL:ut.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,Ge);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?ut.FOAM:n>165&&n<260&&s>.5?r<.25?ut.BAY:r>.52?ut.SHALLOW:ut.SEA:r<.22?ut.CITY:n>60&&n<170&&s>.25?ut.GRASS:n>25&&n<60&&s>.55?ut.SAND:n>25&&n<60&&s>.3&&r<.8?ut.DIRT:s<.2&&r>.6?ut.CONCRETE:ut.PAVING}const K2={[ut.ASPHALT]:[5.5,9],[ut.PAINT]:[2,6],[ut.KERB]:[1.6,6],[ut.GRASS]:[7,7],[ut.SAND]:[9,9],[ut.SEA]:[16,16],[ut.BAY]:[20,20],[ut.SHALLOW]:[10,10],[ut.FOAM]:[3,8],[ut.CONCRETE]:[4,6],[ut.TUNNEL]:[3,3],[ut.CEILING]:[6,12],[ut.PAVING]:[3,3],[ut.CITY]:[40,40],[ut.DIRT]:[5,5]},Kh=220,j2=32;class Z2{constructor(t){this.profiles=t,this.time={value:0};const e=Kh*j2;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),oe.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=$2(a)),a.tex===ut.CITY&&(a.c0=new Ut(13158624),a.c1=new Ut(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new Ve,this.geo.setAttribute("position",new $e(this.pos,3).setUsage(hr)),this.geo.setAttribute("color",new $e(this.colr,3).setUsage(hr)),this.geo.setAttribute("uv",new $e(this.uv,2).setUsage(hr)),this.geo.setAttribute("tile",new $e(this.tile,3).setUsage(hr)),this.geo.setIndex(new $e(n,1));const s=new en({vertexColors:!0,side:me});oe.modern&&(s.color.setScalar(1.1),Ua(s,g2(),this.time)),this.mesh=new fe(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,c=this.colr,l=this.uv,h=this.tile;let d=0;const u=Math.min(t.count,Kh);for(let f=0;f<u;f++){const g=t.start+f,_=t.track.seg(g),m=this.profiles[_.profile],p=Math.floor(g/zg)%2===0,x=Math.cos(r[f]),M=Math.sin(r[f]),v=Math.cos(r[f+1]),w=Math.sin(r[f+1]);for(const E of m.spans){const T=p?E.c0:E.c1,C=d*12;o[C]=e[f]+x*E.xa,o[C+1]=E.absA?E.ya-a:n[f]+E.ya,o[C+2]=s[f]+M*E.xa,o[C+3]=e[f]+x*E.xb,o[C+4]=E.absB?E.yb-a:n[f]+E.yb,o[C+5]=s[f]+M*E.xb,o[C+6]=e[f+1]+v*E.xb,o[C+7]=E.absB?E.yb-a:n[f+1]+E.yb,o[C+8]=s[f+1]+w*E.xb,o[C+9]=e[f+1]+v*E.xa,o[C+10]=E.absA?E.ya-a:n[f+1]+E.ya,o[C+11]=s[f+1]+w*E.xa;for(let B=0;B<4;B++)c[C+B*3]=T.r,c[C+B*3+1]=T.g,c[C+B*3+2]=T.b;const S=K2[E.tex??0]??[6,8],b=(E.xa+E.ya)/S[0],P=(E.xb+E.yb)/S[0],z=g*Jt/S[1],H=(g+1)*Jt/S[1],W=d*8,[J,F]=Sr(E.tex??0),at=p2[E.tex??0]??0;for(let B=0;B<4;B++)h[d*12+B*3]=J,h[d*12+B*3+1]=F,h[d*12+B*3+2]=at;l[W]=b,l[W+1]=z,l[W+2]=P,l[W+3]=z,l[W+4]=P,l[W+5]=H,l[W+6]=b,l[W+7]=H,d++}}this.geo.setDrawRange(0,d*6),this.geo.attributes.position.addUpdateRange(0,d*12),this.geo.attributes.color.addUpdateRange(0,d*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,oe.modern&&(this.geo.attributes.uv.addUpdateRange(0,d*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,d*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}const ve={x:0,y:0,z:0,h:0},ua={x:0,y:0,z:0,h:0},jh=48;class J2{constructor(t){this.route=t,this.scene=new Eg,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new ii(7),this.carPaint=-1,this.net=null,this.tracers=[],this.playerGun={target:null,flash:!1},this.netTime=0;const e=new Fg;if(this.data=t.build(e),this.track=this.data.track,this.view=new Vg(this.track),this.scene.fog=new tl(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Ut(t.fog.color),oe.modern){this.scene.add(new Ph(t.ambient.color,t.ambient.intensity*.55));const[a,o]=t.hemi;this.scene.add(new Rg(a,o,t.ambient.intensity*.75))}else this.scene.add(new Ph(t.ambient.color,t.ambient.intensity));const n=new Pg(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=U2(e.texture);this.road=new Z2(this.data.profiles),this.scene.add(this.road.mesh),this.props=new O2(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.plate,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new Co(Ye[0],Ye[0].paints[0],s,this.plate,this.route.shadow,this.route.night),this.scene.add(this.car.root),this.particles=new N2(this.scene);const r=new Ve;r.setAttribute("position",new be(new Float32Array(jh*6),3)),this.tracerMesh=new q0(r,new el({color:16771216,transparent:!0,opacity:.9,blending:Ca,depthWrite:!1,fog:!1})),this.tracerMesh.frustumCulled=!1,this.scene.add(this.tracerMesh)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new Co(t,e,this.mats,this.plate,this.route.shadow,this.route.night),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new Co(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.night);return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-ki*_r/2+_r*(t+.5)}spawnCar(t){const e=this.rng.int(0,ki-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}shoot(t,e,n,s,r){const a=Math.sign(s-e)||1,o=e+a*1,c=1.25;let l=s,h=n,d=.8;r||(l+=(Math.random()-.5)*6,h+=(n-t)*.3+(Math.random()-.5)*6,d=Math.random()<.5?.05:1.6+Math.random()),this.tracers.length>=jh&&this.tracers.shift(),this.tracers.push({d0:t+Math.sign(n-t)*.5,x0:o,y0:c,d1:h,x1:l,y1:d,life:.07});const u=this.particles;if(r)for(let f=0;f<4;f++)u.spawn(n+(Math.random()-.5)*2,s+(Math.random()-.5)*1.6,.6+Math.random()*.6,0,(Math.random()-.5)*5,2+Math.random()*3,.3,.12,-1,Math.random()<.5?16769088:16777215);else d<.1&&u.spawn(h,l,.1,0,0,.6,.5,.35,1.5,13156520)}aimCar(t,e,n,s,r,a){const o=r-n,c=s-e,l=Math.abs(o)>.4?Math.sign(o):1,h=o-l*1.1;t.aim(l,Math.atan2(-h,Math.max(-60,Math.min(60,c))),a)}setNetTraffic(t,e){const n=new ii(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let c=0;c<a;c++){const l=[n.int(0,ki-1)];for(let h=1;h<32;h++)l.push(Math.max(0,Math.min(ki-1,l[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(c+n.next()*.6)/a*r,v:n.range(28,50),lanes:l,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[c].d0,x:this.laneX(l[0]),laneTarget:l[0],v:o.cars[c].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],c=o.d0+o.v*s,l=Math.floor(c/n.len);l!==r.wrap&&(r.wrap=l,r.passed=!1),r.d=n.start+c-l*n.len;const h=Math.floor(s/o.period),d=o.lanes[h%o.lanes.length],u=o.lanes[Math.max(0,h-1)%o.lanes.length],f=Math.min(1,(s-h*o.period)/1.5),g=f*f*(3-2*f);r.x=this.laneX(u)+(this.laneX(d)-this.laneX(u))*g,r.laneTarget=d,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalBreakLamp(t){var e;(e=this.rivalCars[t])==null||e.breakLamp(Math.random()<.5?-1:1)}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(ki-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/Jt);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*Jt-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const c=this.data.props[o.t].radius;if(c>0&&Math.abs(o.x-e)<c*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:c,by:l,bz:h,bh:d,yRef:u}=a;for(let M=0;M<a.count;M++){const v=this.track.seg(a.start+M);if(!v.props.length)continue;const w=Math.cos(d[M]),E=Math.sin(d[M]);for(const T of v.props){const C=T.abs?(T.y??0)-u:l[M]+(T.y??0);o.add(T.t,c[M]+w*T.x,C,h[M]+E*T.x,-d[M]+(T.r??0),T.s??1,T.sy??1,T.tint)}}for(const M of this.traffic)a.sample(M.d,M.x,ve)&&o.add(M.t,ve.x,ve.y,ve.z,-ve.h,1,1,M.tint);o.end(),a.sample(t+2,e,ve);const f=ve.y;a.sample(t-2,e,ve);const g=ve.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(f-g,4),r.brake,r.flame);const _=this.playerGun,m=_.target!==null?this.rivals[_.target]:null;m?this.aimCar(this.car,t,e,m.d,m.x,_.flash):this.car.aim(0),this.rivals.forEach((M,v)=>{const w=this.rivalCars[v];if(!a.sample(M.d+2,M.x,ve)){w.root.visible=!1;return}const E=ve.y;a.sample(M.d-2,M.x,ve);const T=ve.y;if(a.sample(M.d,M.x,ve),w.root.visible=!0,w.setNear(Math.abs(M.d-t)<28),w.root.position.set(ve.x,ve.y,ve.z),w.pose(M.steer,-ve.h-M.steer*.08,M.spin,0,Math.atan2(E-T,4),M.braking,M.turboT>0?1:0),M.gunT>0){const C=M.gunTo===-1?{d:t,x:e}:this.rivals[M.gunTo];C?this.aimCar(w,M.d,M.x,C.d,C.x,Math.random()<.5):w.aim(0)}else w.aim(0)}),a.sample(t-8.8,e*.9,ve);const p=Math.max(ve.y,-.5)+3.3;a.sample(t+40,0,ve);const x=ve.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,p+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,x,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n),this.renderTracers(a)}renderTracers(t){const e=this.tracerMesh.geometry.getAttribute("position");let n=0;for(const s of this.tracers)!t.sample(s.d0,s.x0,ve)||!t.sample(s.d1,s.x1,ua)||(e.setXYZ(n*2,ve.x,ve.y+s.y0,ve.z),e.setXYZ(n*2+1,ua.x,ua.y+s.y1,ua.z),n++);e.needsUpdate=!0,this.tracerMesh.geometry.setDrawRange(0,n*2)}tickTracers(t){for(const e of this.tracers)e.life-=t;this.tracers=this.tracers.filter(e=>e.life>0)}}const Po=["arcade","rivals","online"],qe=39,da=52,sr=262,fa=106,Zh=39,Jh=262,Q2=250,xs=330,Lo=46,In=396,pa={x0:28,x1:378,mid:203,carY:72,carH:46,paintY:122,turbY:142,weapY:166,ammoY:190,chipH:20,minusX:190,plusX:284},ye=9079464,Qh={arrowX:14,arrowY:170,arrowW:46,arrowH:84,lx:20,py:296,ph:98,paintY:306,swX:106,turbY:330,weapY:352,ammoY:374,minusX:146,plusX:234,goY:410},t0=82,Do=3.6,tx=8,rr=[0,18,34,50,66,84],e0=25,n0=.82,ex=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},i0=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(Ye.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},s0=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},nx=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<fr.length?i:-1}catch{return-1}},ix=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},No=i=>i<.4?4251712:i<.7?zt:_e,Li=(i,t)=>{try{const e=localStorage.getItem(i);return e===null?t:parseInt(e,10)}catch{return t}},Uo=(i,t)=>{try{localStorage.setItem(i,String(t))}catch{}},sx=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},rx=i=>{try{localStorage.setItem("th86-name",i)}catch{}},ax=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class ox{constructor(t,e,n,s,r){this.routes=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=ex(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=nx(),this.mode="arcade",this.net=null,this.nameBox=null,this.playerName=sx(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=fs,this.turboT=0,this.turboCount=Math.max(1,Math.min(9,Li("th86-turbos",fs)||fs)),this.weaponsSetting=Li("th86-weapons",1)===1,this.ammoCount=tr.includes(Li("th86-ammo",ps))?Li("th86-ammo",ps):ps,this.raceAmmo=ps,this.raceTurbos=fs,this.weapons=!1,this.ammo=0,this.fireCool=0,this.firingT=0,this.gunTarget=null,this.lastGunTarget=null,this.gunP=0,this.noTargetT=0,this.hitFlash=0,this.gunFrom=new Map,this.pendingHits=new Map,this.hitSendT=0,this.onlineGo=null,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=i0()[0],this.paintIdx=i0()[1],this.touch=!1,this.worlds=t.map(()=>null),this.world=this.getWorld(0),this.resetPlayer(!0)}get spec(){return Ye[this.carIdx]}get vmax(){return this.spec.stats.vmax/Do}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}getWorld(t){var e;return(e=this.worlds)[t]??(e[t]=new J2(this.routes[t]))}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.getWorld(t),this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*Jt,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.music:fr[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":fr[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=fr.length?-1:this.musicIdx+1,ix(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar();const t=this.mode==="online"?this.onlineGo:null;this.raceTurbos=t?t.turbos:this.turboCount,this.turbos=this.raceTurbos,this.turboT=0,this.weapons=t?t.weapons:this.mode==="rivals"&&this.weaponsSetting,this.raceAmmo=t?t.ammo:this.ammoCount,this.ammo=this.weapons?this.raceAmmo:0,this.fireCool=0,this.firingT=0,this.gunTarget=this.lastGunTarget=null,this.hitFlash=0,this.gunFrom.clear(),this.pendingHits.clear(),this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"?(this.world.setRivals(jg(this.spec,this.pos,Date.now()&65535,this.raceTurbos,this.weapons?this.raceAmmo:0)),this.world.resetTraffic(this.pos,10,520),this.place=8):this.world.setRivals([]),this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&this.audio.toggleMute(),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=(this.attractRoute+1)%this.routes.length,this.setWorld(this.attractRoute);const s=Ye[Math.floor(Math.random()*Ye.length)];this.world.setPlayerCar(s,s.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0),(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;const a=this.routes.length;e.hit("ArrowLeft","KeyA")&&(s=(this.routeIdx+a-1)%a),e.hit("ArrowRight","KeyD")&&(s=(this.routeIdx+1)%a);let o=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const c of e.taps)if(c.y>da-4&&c.y<da+2*fa-8&&c.x>qe&&c.x<qe+3*sr-12){const l=Math.floor((c.y-da+4)/fa)*3+Math.floor((c.x-qe)/sr);l===this.routeIdx?r=!0:l<a&&(s=l)}else if(c.y>=xs-4&&c.y<xs+Lo+6){const l=Po[Math.max(0,Math.min(2,Math.floor((c.x-Zh)/Jh)))];l!==this.mode&&(this.mode=l,this.audio.blip())}else c.y>=In-6&&(r=!0);if(o){const c=e.hit("ArrowDown","KeyS")?1:2;this.mode=Po[(Po.indexOf(this.mode)+c)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25,o=!1;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyT")&&this.cycleTurbos(),e.hit("KeyV")&&this.mode==="rivals"&&this.toggleWeapons(),e.hit("KeyB")&&this.mode==="rivals"&&this.cycleAmmo();let c=-1;const l=Qh,h=Mt-l.lx-300;for(const d of e.taps){const u=g=>d.y>=g-3&&d.y<g+pa.chipH+3,f=(g,_)=>d.x>=h+g-4&&d.x<h+g+_+4;if(d.y<44&&d.x<150)o=!0;else if(d.y>=l.goY-4&&Math.abs(d.x-Mt/2)<134)a=!0;else if(d.y>=l.goY-4&&d.x<Mt/2-134)this.nextTrack();else if(d.y>=l.goY-4)s=1;else if(d.x>=h&&d.y>=l.py&&d.y<l.py+l.ph){const g=this.spec.paints.length;u(l.paintY)&&d.x>=h+l.swX-3&&d.x<h+l.swX+g*24?c=Math.floor((d.x-h-l.swX+3)/24):u(l.turbY)&&f(l.minusX,28)?this.cycleTurbos(-1):u(l.turbY)&&f(l.plusX,28)?this.cycleTurbos(1):this.mode==="rivals"&&u(l.weapY)&&f(l.minusX,l.plusX+28-l.minusX)?this.toggleWeapons():this.mode==="rivals"&&u(l.ammoY)&&f(l.minusX,28)?this.cycleAmmo(-1):this.mode==="rivals"&&u(l.ammoY)&&f(l.plusX,28)&&this.cycleAmmo(1)}else d.y>=l.py||(d.x<l.arrowX+l.arrowW+50?s=-1:d.x>Mt-l.arrowX-l.arrowW-50?s=1:d.y>150&&(r=1))}c>=0&&c<this.spec.paints.length&&c!==this.paintIdx&&(this.paintIdx=c,this.audio.blip(),this.applyCar()),s&&(this.carIdx=(this.carIdx+s+Ye.length)%Ye.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")||o?this.toSelect():a&&(s0(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Uc,this.audio.turbo(),this.flash("TURBO!","",1)),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*Do*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/Jt));s.stage>this.stage&&(this.stage=s.stage,this.timeLeft+=this.world.route.extendTime,this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()),this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=Oh(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=ia(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=ia(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}["race","goal","over"].includes(this.state)&&this.guns(t);const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),Zg(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=Oh(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,ax(this.hi))}cycleTurbos(t=1){this.turboCount=(this.turboCount-1+t+9)%9+1,Uo("th86-turbos",this.turboCount),this.audio.blip()}toggleWeapons(){this.weaponsSetting=!this.weaponsSetting,Uo("th86-weapons",this.weaponsSetting?1:0),this.audio.blip()}cycleAmmo(t=1){const e=tr.length;this.ammoCount=tr[(Math.max(0,tr.indexOf(this.ammoCount))+t+e)%e],Uo("th86-ammo",this.ammoCount),this.audio.blip()}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){zh()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,rx(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new h2(zh()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r),this.net.onHit=(s,r)=>this.gotHit(s,r)}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}adoptSettings(t){t&&(t.route!==this.routeIdx&&t.route<this.routes.length&&(this.setWorld(t.route),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),this.turboCount=t.turbos,this.weaponsSetting=t.weapons,this.ammoCount=t.ammo)}loadSettings(){this.turboCount=Math.max(1,Math.min(9,Li("th86-turbos",fs)||fs)),this.weaponsSetting=Li("th86-weapons",1)===1;const t=Li("th86-ammo",ps);this.ammoCount=tr.includes(t)?t:ps}leaveOnline(){var t;this.net&&!this.net.isHost()&&this.loadSettings(),(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let c=e.hit("KeyT")?1:0,l=e.hit("KeyV"),h=e.hit("KeyB")?1:0,d=-1,u=e.hit("Escape","KeyQ");const f=pa;for(const m of e.taps){const p=(M,v)=>m.x>=M-4&&m.x<M+v+4,x=M=>m.y>=M-3&&m.y<M+f.chipH+3;if(m.y>405&&Math.abs(m.x-Mt/2)<150)o=!0;else if(m.y>405&&m.x<Mt/2-160)a=!0;else if(m.y<50&&m.x<150)u=!0;else if(m.y>=f.carY&&m.y<f.carY+f.carH&&m.x<f.x1)s=m.x<f.x0+40?-1:1;else if(m.y>=f.paintY-4&&m.y<f.paintY+16&&m.x<f.x1){const M=this.spec.paints.length,v=f.mid-(M*22-6)/2,w=Math.floor((m.x-v+3)/22);d=w>=0&&w<M?w:-1,d<0&&(r=1)}else x(f.turbY)&&p(f.minusX,28)?c=-1:x(f.turbY)&&p(f.plusX,28)?c=1:x(f.weapY)&&p(f.minusX,f.plusX+28-f.minusX)?l=!0:x(f.ammoY)&&p(f.minusX,28)?h=-1:x(f.ammoY)&&p(f.plusX,28)?h=1:m.y>=135&&m.y<400&&m.x>f.x1&&m.x<Mt-330&&(r=1)}if(u)return this.leaveOnline();const g=!n||n.status!=="online"||n.isHost();if(g||(a=!1,c=0,l=!1,h=0),(n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+Ye.length)%Ye.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),d>=0&&d!==this.paintIdx&&(this.paintIdx=d,r=1),(s||r)&&(this.audio.blip(),this.applyCar(),s0(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld((this.routeIdx+1)%this.routes.length),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),c&&this.cycleTurbos(c),l&&this.toggleWeapons(),h&&this.cycleAmmo(h),(n==null?void 0:n.status)==="online"&&(g?n.setMe({set:{route:this.routeIdx,turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount}}):this.adoptSettings(n.host().set)),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&zi()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),turbos:this.turboCount,weapons:this.weaponsSetting,ammo:this.ammoCount,players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.onlineGo=t,this.pending={go:t,at:zi()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.onlineGo=t,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*Jt+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*_r*.55}),a=[];t.players.forEach((o,c)=>{const l=r(c);if(o.id===e.selfId){this.pos=l.d,this.px=l.x;return}const h=Ye[o.car%Ye.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:l.d,x:l.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,hp:100,wrecked:!1,wreckT:0,smokeT:0,ammo:0,gunTaken:0,burst:0,fireCool:0,gunT:0,gunTo:-1,remote:{id:o.id,d:l.d,x:l.x,v:0,at:zi(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*Jt),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){var a;if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(o=>{var c;return((c=o.remote)==null?void 0:c.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;if(r.d=t.d,r.x=t.x,r.v=t.v,r.at=zi(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp>=55&&t.hp<55&&this.world.rivalBreakLamp(n),r.hp=t.hp),s.hp=t.hp,t.hp<=0&&!s.wrecked&&(s.wrecked=!0,s.wreckT=0),t.fin>=0&&s.finished<0&&(s.finished=t.fin),t.gun){const o=t.gun===((a=this.net)==null?void 0:a.selfId)?-1:this.world.rivals.findIndex(c=>{var l;return((l=c.remote)==null?void 0:l.id)===t.gun});o!==n&&(s.gunTo=o,s.gunT=.3)}}gotHit(t,e){var n;!this.raceId||t.r!==this.raceId||t.to!==((n=this.net)==null?void 0:n.selfId)||t.n>0&&this.takeGunHit(e,t.n)}netTick(t){var n,s,r;const e=this.net;if(e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state)))){if(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime,gun:this.firingT>0&&this.lastGunTarget!==null?((s=(n=this.world.rivals[this.lastGunTarget])==null?void 0:n.remote)==null?void 0:s.id)??"":""})),this.hitSendT-=t,this.hitSendT<=0&&this.pendingHits.size){this.hitSendT=.2;for(const[a,o]of this.pendingHits)e.sendHit({r:this.raceId,to:a,n:o});this.pendingHits.clear()}this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=ia(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((r=this.table.find(a=>a.player))==null?void 0:r.pos)??this.place))}}toSelect(){this.go("select");for(const t of this.worlds)t==null||t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+j)/(j*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const c=o.d-this.pos;c>0&&c<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(c=>c.d-this.pos>-8&&c.d-this.pos<90&&Math.abs(c.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/Jt)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*n0,a=Math.max(-1,Math.min(1,r/e0));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/Jt));let c=0,l=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const x=Math.max(-j+3,Math.min(j-3,this.px));this.px+=(x-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,c=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const x=this.speed,M=this.spec.stats,v=this.turboT>0,w=this.vmax*(v?Lh:1)*this.limp();e.accel?this.speed+=30*M.accel*(v?1.9:1)*(1-Math.pow(Math.min(1,x/w),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+x*.035)*t;const E=e.steer,T=E===0?9:7;this.steer+=Math.sign(E-this.steer)*Math.min(Math.abs(E-this.steer),T*t);let C=this.steer*e0*M.grip*Math.min(1,x/22),S=o.curve*x*x*n0/M.grip;this.drifting=e.drift&&x>30&&Math.abs(e.steer)>0,this.drifting?(C*=1.45,S*=.45,this.speed-=5*t,c=1):Math.abs(this.steer)>.8&&x>62&&Math.abs(o.curve)>.0014&&(c=.6);const b=x/this.vmax;this.speed-=tx*Math.abs(this.steer)*b*b/M.grip*t;const P=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(P-this.driftYaw)*Math.min(1,t*6),this.px+=(C-S)*t;const z=a.walls||o.tunnel,H=z?j+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>H&&(this.px=Math.sign(this.px)*H,z&&x>15&&(h=Math.sign(this.px),this.speed-=x*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),l=Math.abs(this.px)>j+1,l?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,x/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&l&&x>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+x*.12,.6+Math.min(.4,x/200),this.px>0?"right":"left"),this.crash(!0));const W=s.hitTraffic(this.pos,this.px);W&&(n?this.speed=Math.min(this.speed,W.v*.9):x-W.v>36?(this.damage(10+(x-W.v)*.14,.5+Math.min(.5,(x-W.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,W.x>this.px?"right":"left"),this.speed=W.v*.75,this.px+=Math.sign(this.px-W.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const J of s.rivals){if(Math.abs(J.d-this.pos)>4.3||Math.abs(J.x-this.px)>1.95)continue;const F=Math.sign(this.px-J.x||1);this.px+=F*.9,J.x-=F*.9,J.d>this.pos?x-J.v>45&&!n?(this.damage(9+(x-J.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,J.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(J.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(J.d-this.pos)<2?F>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const d=this.vmax*(this.turboT>0?Lh:1);this.speed>d&&(this.speed=Math.max(d,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let u=1;const f=this.vmax/t0;for(;u<rr.length-1&&this.speed>rr[u]*f;)u++;const g=.25+.75*Math.min(1,(this.speed-rr[u-1]*f)/((rr[u]-rr[u-1])*f)),_=this.state!=="attract"&&this.state!=="select";this.audio.engine(_&&!this.wrecked,g,e.accel?1:0),this.audio.skid(_?c*Math.min(1,this.speed/20):0),u>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,_&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,_&&this.audio.pop()),this.gear=u,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const m=s.particles,p=Math.random()<t*45?1:0;if(p&&c>0&&this.speed>12){const x=a.smoke;for(const M of[-.9,.9])m.spawn(this.pos-1.4,this.px+M,.35,this.speed*.6,M,.8,.8,.45,2.6,x)}if(p&&l&&this.speed>15){const M=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])m.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,M)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let x=0;x<2;x++)m.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);m.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){this.state!=="race"||this.wrecked||(this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.afterDamage(t))}afterDamage(t){const e=this.hp+t;e>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&e>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}takeGunHit(t,e){if(this.state!=="race"||this.wrecked)return;const n=this.gunFrom.get(t)??0;let s=Math.min(e*Dh,Wg-n);if(t.startsWith("ai:")){let a=0;for(const[o,c]of this.gunFrom)o.startsWith("ai:")&&(a+=c);s=Math.min(s,qg-a)}if(s<=0)return;this.gunFrom.set(t,n+s),this.hp=Math.max(0,this.hp-s);const r=["left","right","rear"];this.world.car.hit(.1,r[Math.floor(Math.random()*3)]),this.hitFlash=.25,this.shakeKick=Math.max(this.shakeKick,.15),this.audio.ping(),this.afterDamage(s)}hitRival(t){const e=this.world.rivals[t];if(e.remote){this.pendingHits.set(e.remote.id,(this.pendingHits.get(e.remote.id)??0)+1);return}if(e.wrecked)return;const n=Dh*Xg,s=e.hp;e.hp=Math.max(0,e.hp-n),e.gunTaken+=n,e.bumpT=Math.max(e.bumpT,.25+(1-e.hp/100)*.35),this.world.rivalHit(t,.16),s>=55&&e.hp<55&&this.world.rivalBreakLamp(t),e.hp<=0&&(e.wrecked=!0,e.gunT=0,e.burst=0,this.score+=5e4,this.flash(`${e.name} WRECKED!`,"+50000",2),this.audio.crash(!0),this.audio.pop())}guns(t){const e=this.world,n=e.rivals,s=this.input;this.hitFlash=Math.max(0,this.hitFlash-t),this.firingT=Math.max(0,this.firingT-t),this.noTargetT=Math.max(0,this.noTargetT-t),this.fireCool=Math.max(0,this.fireCool-t),e.playerGun.flash=!1;let r=null,a=1/0;this.weapons&&!this.wrecked&&n.forEach((c,l)=>{const h=c.d-this.pos,d=c.x-this.px;if(c.wrecked||!Nh(h,d))return;const u=Math.hypot(h,d);u<a&&(a=u,r=l)}),this.gunTarget=r,this.gunP=r!==null?Ro(a):0;const o=this.weapons&&this.state==="race"&&!this.wrecked&&this.crashT<=0&&s.held("KeyF");if(o&&(r===null||this.ammo<=0)&&(this.noTargetT=.3),o&&r!==null&&this.ammo>0&&(this.firingT=.35,this.lastGunTarget=r,this.fireCool<=0)){this.fireCool=1/Ao,this.ammo--;const c=n[r],l=Math.random()<this.gunP;e.shoot(this.pos,this.px,c.d,c.x,l),e.playerGun.flash=!0,this.audio.gun(),l&&this.hitRival(r)}e.playerGun.target=this.firingT>0?this.lastGunTarget:null,n.forEach(c=>{if(c.gunT=Math.max(0,c.gunT-t),c.remote){if(c.gunT<=0||(c.fireCool-=t,c.fireCool>0))return;c.fireCool=1/Ao;const u=c.gunTo===-1?{d:this.pos,x:this.px}:n[c.gunTo];if(!u)return;e.shoot(c.d,c.x,u.d,u.x,Math.random()<Ro(Math.hypot(u.d-c.d,u.x-c.x))),this.audio.gun(.4);return}if(!this.weapons||this.state!=="race"||this.wrecked||c.wrecked||c.ammo<=0||c.finished>=0)return;const l=this.pos-c.d,h=this.px-c.x;if(!Nh(l,h)){c.burst=0;return}if(c.burst<=0){Math.random()<t*(.06+c.aggro*.14)&&(c.burst=3+Math.floor(Math.random()*4));return}if(c.gunT=.35,c.gunTo=-1,c.fireCool-=t,c.fireCool>0)return;c.fireCool=1/Ao,c.burst--,c.ammo--;const d=Math.random()<Ro(Math.hypot(l,h));e.shoot(c.d,c.x,this.pos,this.px,d),this.audio.gun(.5),d&&this.takeGunHit(`ai:${c.name}`,1)}),e.tickTracers(t)}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=ia(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(["race","over","goal"].includes(this.state)){const e={t:this.smokeT};this.smokeFrom(e,t,this.spec,this.pos,this.px,this.speed,this.hp,this.wrecked,this.t),this.smokeT=e.t}for(const e of this.world.rivals){e.remote&&e.wrecked&&(e.wreckT+=t);const n={t:e.smokeT};this.smokeFrom(n,t,e.spec,e.d,e.x,e.v,e.hp,e.wrecked,e.wreckT),e.smokeT=n.t}}smokeFrom(t,e,n,s,r,a,o,c,l){if(o>=50||(t.t+=e*(c?30:o<25?14:5),t.t<1))return;t.t-=1;const h=n.stations,d=["r32","supra","rx7"].includes(n.id),u=d?h[0].z+.9:h[h.length-1].z-.9,f=d?h[1].top:h[h.length-2].top,g=s-u,_=r+(Math.random()-.5)*.6,m=c?Math.random()<.5?2236962:3815994:o<25?6974058:12105912,p=this.world.particles;p.spawn(g,_,f+.1,a*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,m),c&&l<6&&Math.random()<.5&&p.spawn(g,_,f+.05,a*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/t0,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){var s;const t=this.hud;if(t.clear(),oe.modern&&this.state!=="carselect"){const r=this.world.sunOnHud(this.camera,Mt,He);if(r){const a=Math.max(Math.abs(r.x/Mt-.5),Math.abs(r.y/He-.5))*2;t.flare(r.x,r.y,Math.max(0,Math.min(1,1.25-a)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",Mt/2,70,64,zt,we,11540504),t.logo("HORIZON",Mt/2,150,56,8452351,2789631,1714832),t.text("'86",Mt/2+230,210,24,Rn,"left"),t.text("ARCADE  ROAD  RACING",Mt/2,236,16,Ft,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",Mt/2,320,24,zt,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,Mt/2,20,16,Ne,"center"),t.text("FREE PLAY",Mt-20,He-30,16,Ft,"right"),t.text("©1986 HORIZON SOFT",20,He-30,16,Ft,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",Mt/2,12,24,zt,"center"),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,Mt-30,12,24,we,"right");const r=sr-12,a=fa-8,o=68;this.routes.forEach((_,m)=>{const p=m===this.routeIdx,x=qe+m%3*sr,M=da+Math.floor(m/3)*fa-(p?3:0);p&&t.rect(x+5,M+6,r,a,0),t.postcard(_.id,x,M,r,o,this.clock),t.rect(x,M+o,r,a-o,p?2759248:1052712);const v=`${_.lines[0]} ${_.lines[1]}`,w=v.length<=15?16:12;t.text(v,x+r/2,M+o+(a-o-w)/2+1,w,p?zt:_.card[1],"center"),p||t.shade(x,M,r,a,.35);const E=p?e?zt:Ft:3816026,T=p?4:2;t.rect(x-T,M-T,r+T*2,T,E),t.rect(x-T,M+a,r+T*2,T,E),t.rect(x-T,M,T,a,E),t.rect(x+r,M,T,a,E)});const c=this.world.route,l=262;t.shade(qe-4,l,3*sr-4,58,.72),t.sky(c.night,qe+12,l+13),t.text(`${c.lines[0]} ${c.lines[1]}`,qe+30,l+6,16,Ft);const h=((s=fr.find(_=>_.id===c.music))==null?void 0:s.name)??"";t.note(Mt-qe-8-h.length*8-14,l+12,Rn),t.text(h,Mt-qe-8,l+9,8,Rn,"right");const d=qe+70,u=Mt-qe-70,f=l+34;if(t.rect(d,f-1,u-d,2,5921418),c.stageNames.forEach((_,m)=>{const p=d+(u-d)*m/(c.stageNames.length-1);t.rect(p-4,f-4,8,8,m===0?Dn:m===c.stageNames.length-1?zt:Ne),t.text(_,p,f+9,8,m===0?Dn:Ft,"center")}),[["arcade","ARCADE","BEAT THE CLOCK","clock"],["rivals","VS RIVALS","8-CAR RACE","flag"],["online","ONLINE","RACE REAL PLAYERS","globe"]].forEach(([_,m,p,x],M)=>{const v=Zh+M*Jh,w=_===this.mode;t.box(v,xs,Q2,Lo,w?2759248:1315880,w?e?Rn:Ft:3816026,w?4:2),t.icon(x,v+26,xs+Lo/2,w?zt:ye),t.text(m,v+48,xs+9,16,w?zt:ye),t.text(p,v+48,xs+29,8,w?Ft:ye)}),t.box(Mt/2-120,In,240,46,1739322,e?zt:Ft),t.text(this.touch?"TAP TO GO":"ENTER  GO",Mt/2,In+15,16,Ft,"center"),this.touch)t.text("TAP A ROUTE",qe,In+12,8,ye),t.text("TAP IT AGAIN TO GO",qe,In+26,8,ye);else{let _=qe;_+=t.keycap(_,In+13,"←",18)+3,_+=t.keycap(_,In+13,"→",18)+3,t.text("ROUTE",_+5,In+18,8,Ft),t.text("MODE",Mt-qe,In+18,8,Ft,"right"),_=Mt-qe-38-5*8-6,_+=t.keycap(_,In+13,"↑",18)+3,t.keycap(_,In+13,"↓",18)}break}case"carselect":{const r=this.spec,a=Qh,o=!this.touch;t.text(this.touch?"< BACK":"ESC BACK",20,14,16,ye),t.text("SELECT  YOUR  CAR",Mt/2,12,24,zt,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,Mt-30,12,24,we,"right"),t.text(r.make,Mt/2,46,16,Ne,"center"),t.text(r.name,Mt/2,66,r.name.length>14?24:32,Ft,"center");const c=`${r.year}  ${r.group}`,l=c.length*8+20;t.box(Mt/2-l/2,104,l,18,2759248,Rn,1),t.text(c,Mt/2,109,8,Rn,"center");const h=Ye.length,d=Mt/2-h*16/2;for(let m=0;m<h;m++)t.rect(d+m*16+(m===this.carIdx?0:3),130+(m===this.carIdx?0:3),m===this.carIdx?12:6,m===this.carIdx?12:6,m===this.carIdx?zt:5921418);t.chip(a.arrowX,a.arrowY,a.arrowW,a.arrowH,"←",e?zt:Ft,8,1315880),t.chip(Mt-a.arrowX-a.arrowW,a.arrowY,a.arrowW,a.arrowH,"→",e?zt:Ft,8,1315880),o&&(t.text("PREV",a.arrowX+a.arrowW/2,a.arrowY+a.arrowH+6,8,ye,"center"),t.text("NEXT",Mt-a.arrowX-a.arrowW/2,a.arrowY+a.arrowH+6,8,ye,"center")),t.shade(a.lx,a.py,300,a.ph,.68),t.text("PERFORMANCE",a.lx+12,a.py+8,8,zt),[["SPEED",(r.stats.vmax-260)/90,_e,`${r.stats.vmax}KM/H`],["ACCEL",(r.stats.accel-.85)/.3,we,""],["GRIP",(r.stats.grip-.82)/.38,Dn,""]].forEach(([m,p,x,M],v)=>{const w=a.py+26+v*22;t.text(m,a.lx+12,w+2,8,Ft);const E=Math.round(Math.max(.1,Math.min(1,p))*12);for(let T=0;T<12;T++)t.rect(a.lx+64+T*12,w,10,12,T<E?x:2105408);M&&t.text(M,a.lx+288,w+2,8,Ft,"right")});const f=Mt-a.lx-300;t.shade(f,a.py,300,a.ph,.68),t.text("PAINT",f+12,a.paintY+3,16,Ft);const g=r.paints.length;r.paints.forEach((m,p)=>{const x=p===this.paintIdx%g,M=f+a.swX+p*24;t.rect(M-2,a.paintY-2,22,20,x?zt:3816026),t.rect(M,a.paintY,18,16,m)}),o&&(t.keycap(f+300-46,a.paintY,"↑"),t.keycap(f+300-28,a.paintY,"↓"));const _=(m,p,x,M,v,w)=>this.settingRow(f+12,m,f+a.minusX,f+a.plusX,o?f+300-34:-1,p,x,M,v,w);_(a.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),this.mode==="rivals"&&(_(a.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),_(a.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1)),t.note(a.lx+10,a.goY+21,Rn),t.text(this.musicLabel(),a.lx+24,a.goY+12,8,Rn),o?(t.keycap(a.lx+24,a.goY+26,"N"),t.text("CHANGE SONG",a.lx+46,a.goY+30,8,ye)):t.text("TAP TO CHANGE",a.lx+24,a.goY+28,8,ye),t.box(Mt/2-130,a.goY,260,48,1739322,e?zt:Ft),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",Mt/2,a.goY+16,16,Ft,"center"),t.text(this.touch?"TAP THE CAR: NEXT PAINT":"CAR",Mt-a.lx,a.goY+18,8,ye,"right"),o&&(t.keycap(Mt-a.lx-70,a.goY+14,"←",18),t.keycap(Mt-a.lx-49,a.goY+14,"→",18));break}case"name":{t.text("ONLINE  RACE",Mt/2,20,24,zt,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const r=3-Math.floor(this.t);r>0&&t.text(String(r),Mt/2,180,64,r===1?_e:zt,"center"),t.text(n.stageNames[0],Mt/2,280,16,Ft,"center"),this.countdownHelp()}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${na(this.place)} PLACE`,Mt/2,150,64,this.place===1?zt:Ne,"center"),t.text(Fh(this.finishTime),Mt/2,240,24,Ft,"center")):this.state==="goal"&&(t.text("GOAL!",Mt/2,140,64,zt,"center"),t.text("CONGRATULATIONS",Mt/2,230,24,Ne,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,Mt/2,280,16,Ft,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",Mt/2,330,24,zt,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",Mt/2,180,48,_e,"center"),this.wrecked&&t.text("ENGINE BLOWN",Mt/2,240,24,we,"center")):(t.text("GAME OVER",Mt/2,170,48,_e,"center"),t.text(`SCORE ${this.score}`,Mt/2,250,24,Ft,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",Mt/2,310,24,zt,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(Mt/2-200,146,400,34,1052720,Rn,3),t.text(`MUSIC  ${this.musicLabel()}`,Mt/2,156,16,Ft,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,Mt/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?zt:Ne,"center"),this.msg2&&t.text(this.msg2,Mt/2,200,24,zt,"center")),this.paused&&(t.box(Mt/2-220,150,440,170,1052720,Ft),t.text("PAUSE",Mt/2,180,32,zt,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",Mt/2,230,16,Ft,"center"),t.text(this.touch?"RESTART":"R  RESTART",Mt/2,260,16,Ft,"center"),t.text(this.touch?"QUIT":"Q  QUIT",Mt/2,290,16,Ft,"center"))}}}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",Mt/2,14,24,zt,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...",o=(n==null?void 0:n.status)==="online"?n.servers():null,c=(n==null?void 0:n.status)==="online"&&n.serversDown(),l=(n==null?void 0:n.status)==="online"?n.links():null,h=!!l&&!r.length&&l.failed>0&&l.linked===0,d=c?"CAN'T REACH THE MATCHMAKING SERVERS":h?"FOUND A PLAYER BUT COULD NOT CONNECT":a;if(e.text(d,Mt/2,46,16,(n==null?void 0:n.status)==="error"||c?_e:h?we:Ne,"center"),(n==null?void 0:n.status)==="online"){const b=[`ROOM ${n.room.toUpperCase()}`];o&&b.push(`SERVERS ${o[0]}/${o[1]}`),l&&b.push(`FOUND ${l.found}`,`LINKED ${l.linked}`,`FAILED ${l.failed}`,`RELAY ${n.relay()?"ON":"OFF"}`),e.text(b.join("   "),Mt/2,467,8,l&&l.failed&&!l.linked?we:ye,"center")}const u=pa,f=!this.touch;e.shade(u.x0,68,u.x1-u.x0,316),e.chip(u.x0+6,u.carY+4,30,u.carH-8,"←",zt),e.chip(u.x1-36,u.carY+4,30,u.carH-8,"→",zt),e.text(s.make,u.mid,u.carY+2,16,Ne,"center");const g=s.name.length<=11;e.text(s.name,u.mid,u.carY+(g?20:24),g?24:16,Ft,"center");const _=s.paints.length,m=u.mid-(_*22-6)/2;s.paints.forEach((b,P)=>{const z=P===this.paintIdx%_;e.rect(m+P*22-2,u.paintY-2,20,16,z?zt:3816026),e.rect(m+P*22,u.paintY,16,12,b)}),f&&(e.keycap(u.x0+12,u.paintY-2,"←"),e.keycap(u.x0+30,u.paintY-2,"→"),e.text("CAR",u.x0+52,u.paintY+2,8,ye),e.text("PAINT",u.x1-48,u.paintY+2,8,ye,"right"),e.keycap(u.x1-44,u.paintY-2,"↑"),e.keycap(u.x1-26,u.paintY-2,"↓"));const p=(n==null?void 0:n.status)==="online"?n.host():null,x=!p||p.id===(n==null?void 0:n.selfId),M=(b,P,z,H,W,J)=>this.settingRow(u.x0+12,b,u.minusX,u.plusX,f&&x?u.x1-34:-1,P,z,H,W,J,!x);M(u.turbY,"TURBOS",String(this.turboCount),!0,"T",!1),M(u.weapY,"WEAPONS",this.weaponsSetting?"ON":"OFF",this.weaponsSetting,"V",!0),M(u.ammoY,"AMMO",String(this.ammoCount),this.weaponsSetting,"B",!1),x?e.text(r.length?"YOU ARE THE HOST: YOU SET THE RACE":"FIRST IN IS THE HOST: YOU SET THE RACE",u.mid,216,8,we,"center"):e.text(`SET BY THE HOST, ${(p==null?void 0:p.name)??""}`,u.mid,216,8,we,"center"),[["SPEED",(s.stats.vmax-260)/90,_e],["ACCEL",(s.stats.accel-.85)/.3,we],["GRIP",(s.stats.grip-.82)/.38,Dn]].forEach(([b,P,z],H)=>{const W=232+H*12;e.text(b,40,W+1,8,zt);const J=Math.round(Math.max(.1,Math.min(1,P))*12);for(let F=0;F<12;F++)e.rect(96+F*11,W,9,8,F<J?z:2105408)}),e.text(`${s.stats.vmax} KM/H`,236,233,8,Ft),e.rect(u.x0+8,272,u.x1-u.x0-16,1,3816026),e.text(f?"DRIVING KEYS":"DRIVING BUTTONS",u.mid,278,8,zt,"center"),f?this.keyGuide(40,294):this.buttonGuide(u.x0+10,292);const w=Mt-320,E=70;e.box(w,E,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",w+14,E+12,16,zt);const T=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0,host:x},...r.map(b=>({name:b.name,car:Ye[b.car%Ye.length].name,st:b.status==="race"?"RACING":"READY",me:!1,host:b.id===(p==null?void 0:p.id)}))];T.slice(0,8).forEach((b,P)=>{const z=E+40+P*34;e.text(b.name,w+14,z,16,b.me?zt:Ft),b.host&&(e.box(w+190,z+1,44,14,3810320,we,1),e.text("HOST",w+212,z+4,8,we,"center")),e.text(b.st,w+286,z+4,8,b.st==="RACING"?we:b.me?zt:4251712,"right"),e.text(b.car,w+14,z+19,8,9079464)}),T.length>8&&e.text(`+${T.length-8} MORE`,w+14,E+40+8*34,8,Ft);const C=this.world.route;if(e.box(20,410,250,50,1315880,Ft,3),e.text(x?`${this.touch?"TAP":"R"}  ROUTE`:"HOST'S ROUTE",145,418,8,9079464,"center"),e.text(`${C.lines[0]} ${C.lines[1]}`.slice(0,15),145,434,16,zt,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",Mt/2,320,8,Ft,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",Mt/2,340,16,Ne,"center"),e.box(Mt/2-150,410,300,50,1727160,t?zt:Ft),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",Mt/2,427,16,Ft,"center");return}if(this.pending){const b=Math.max(1,Math.ceil(this.pending.at-zi()));e.text("STARTING IN",Mt/2,170,24,Ne,"center"),e.text(String(b),Mt/2,206,64,zt,"center");const P=this.routes[this.pending.go.route]??this.world.route;e.text(`${P.lines[0]} ${P.lines[1]}`,Mt/2,284,16,Ft,"center");const z=this.pending.go;e.text(`TURBOS ${z.turbos}   WEAPONS ${z.weapons?`ON  AMMO ${z.ammo}`:"OFF"}`,Mt/2,308,16,z.weapons?we:zt,"center");return}r.some(b=>b.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",Mt/2,386,8,we,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",Mt/2,386,8,Ft,"center");const S=(n==null?void 0:n.status)==="online";e.box(Mt/2-150,410,300,50,S?1739322:2105392,S&&t?zt:Ft),e.text(this.touch?"TAP TO START":"ENTER  START",Mt/2,427,16,S?Ft:9079464,"center")}settingRow(t,e,n,s,r,a,o,c,l,h,d=!1){const u=this.hud,f=pa.chipH;if(u.text(a,t,e+3,16,c?zt:ye),d){u.text(o,(n+s+28)/2,e+3,16,h?c?we:ye:c?Ft:ye,"center");return}h?u.chip(n,e,s+28-n,f,o,c?we:ye,16,c?5909008:1710650):(u.chip(n,e,28,f,"←",c?Ne:ye),u.text(o,(n+s+28)/2,e+3,16,c?Ft:ye,"center"),u.chip(s,e,28,f,"→",c?Ne:ye)),r>=0&&u.keycap(r,e+1,l,18)}keyGuide(t,e){const n=this.hud,s=this.weaponsSetting;[[[["↑"],"GAS",Dn],[["SPACE"],"DRIFT",Ne]],[[["↓"],"BRAKE",_e],[["SHIFT"],"TURBO",we]],[[["←","→"],"STEER",Ft],[["F"],s?"FIRE":"FIRE (OFF)",s?_e:ye]],[[["ESC"],"PAUSE",ye],[["N"],"MUSIC",Rn]]].forEach((a,o)=>a.forEach(([c,l,h],d)=>{let u=t+d*168;for(const f of c)u+=n.keycap(u,e+o*22,f,18)+3;n.text(l,u+5,e+o*22+5,8,h)}))}buttonGuide(t,e){const n=this.hud,s=330,r=88,a=this.weaponsSetting;n.box(t,e,s,r,657946,3816026,1),n.text("STEER",t+45,e+r-50,8,Ft,"center"),n.chip(t+8,e+r-38,34,30,"←",Ft),n.chip(t+48,e+r-38,34,30,"→",Ft);const o=t+s-66,c=t+s-128;a&&n.chip(c,e+6,56,18,"FIRE",_e),n.chip(c,e+28,56,18,"DRIFT",Ne),n.chip(c,e+50,56,30,"BRAKE",_e),n.chip(o,e+24,58,20,"TURBO",we),n.chip(o,e+48,58,32,"GAS",Dn),n.text("MUSIC AUTO II",t+s-8,e+8,8,ye,"right"),n.text("AUTO GAS",t+140,e+30,8,Dn,"center"),n.text("IS ON",t+140,e+42,8,Dn,"center"),n.text("TAP AUTO",t+140,e+58,8,ye,"center"),n.text("TO TURN OFF",t+140,e+70,8,ye,"center")}countdownHelp(){const t=this.hud,e=this.weapons,n=318;if(this.touch){const c=[["STEER LEFT THUMB",Ft],["GAS",Dn],["BRAKE",_e],["DRIFT",Ne],["TURBO",we]];e&&c.push(["FIRE",_e]);const l=c.map(([u])=>u.length*8+16),h=l.reduce((u,f)=>u+f,0)+(c.length-1)*8;let d=Mt/2-h/2;t.shade(d-8,n-6,h+16,34,.5),c.forEach(([u,f],g)=>{t.chip(d,n,l[g],22,u,f),d+=l[g]+8});return}const s=[[["↑"],"GAS",Dn],[["↓"],"BRAKE",_e],[["←","→"],"STEER",Ft],[["SPACE"],"DRIFT",Ne],[["SHIFT"],"TURBO",we]];e&&s.push([["F"],"FIRE",_e]);const r=c=>c[0].reduce((l,h)=>l+t.keyW(h,18)+3,0)+5+c[1].length*8,a=s.reduce((c,l)=>c+r(l),0)+(s.length-1)*18;let o=Mt/2-a/2;t.shade(o-10,n-6,a+20,32,.5);for(const c of s){let l=o;for(const h of c[0])l+=t.keycap(l,n,h,18)+3;t.text(c[1],l+5,n+5,8,c[2]),o+=r(c)+18}}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,Mt,He);if(!s||s.dist>140)return;const r=Math.max(0,Math.min(1,(75-s.dist)/60)),a=Math.round(5+11*r);t.text(e.wrecked?`${e.name} WRECKED`:e.name,s.x,s.y-a,a,e.wrecked?_e:e.finished>=0?zt:Ft,"center");const o=Math.round(14+50*r),c=Math.round(2+4*r),l=Math.min(1,1-e.hp/100),h=s.x-o/2,d=s.y+1+Math.round(3*r);t.rect(h-1,d-1,o+2,c+2,0),t.rect(h,d,o*l,c,No(l))})}resultsTable(t){const e=this.hud,n=Mt/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?zt:Ft,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${na(this.place)}`;e.text(a,Mt/2,r+16,16,this.finishTime<0?_e:zt,"center"),this.table.forEach((o,c)=>{const l=r+52+c*30;o.player&&e.rect(n+10,l-6,s-20,28,3811952);const h=o.player?zt:Ft;e.text(na(o.pos),n+24,l,16,o.pos===1?we:h),e.text(o.name,n+110,l,16,h),e.text(o.car,n+230,l,16,o.player?zt:Ne);const d=Number.isFinite(o.time)?(o.estimated?"~":" ")+Fh(o.time):"DNF";e.text(d,n+s-24,l,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",Mt/2,r+340,16,zt,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,zt),e.text(String(this.score).padStart(8,"0"),20,38,16,Ft),e.text("TIME",Mt/2,12,16,zt,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),Mt/2,34,48,r?_e:we,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,Mt-20,16,16,zt,"right");const a=Math.max(0,(this.pos-3*Jt)/1e3);if(e.text(`${a.toFixed(1)}KM`,Mt-20,38,16,Ft,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const w=na(this.place),E=this.touch?84:Mt/2-52,T=this.touch?222:90;e.text("POS",E-12,T+8,16,zt,"right"),e.text(w,E,T,32,this.place===1?zt:Ft),e.text(`/${this.world.rivals.length+1}`,E+w.length*32+4,T+16,16,Ft)}{const T=this.touch?20:Mt-20-170,C=this.touch?this.mode!=="arcade"?270:236:64,S=Math.min(1,1-this.hp/100),b=No(S),P=this.hp<25&&this.state==="race";e.text("DAMAGE",T,C,16,P&&t?_e:zt);const z=this.hp>=100?0:Math.max(1,Math.ceil(S*10));for(let H=0;H<10;H++)e.rect(T+H*17,C+22,15,12,H<z&&(!P||t)?b:2105408)}const o=Math.round(this.speed*Do),c=this.touch,l=c?70:He-92;e.text("SPEED",20,l,16,zt),e.text(String(o).padStart(3," "),20,l+26,32,Ft),e.text("KM/H",130,l+42,16,Ne),c?e.tach(20,l+100,this.speed/this.vmax):e.tach(220,He-24,this.speed/this.vmax);const h=c?20:220,d=c?l+112:He-80;e.text("TURBO",h,d,16,this.turboT>0&&t?Ft:we);const u=this.raceTurbos,f=u>5?13:20,g=f+(u>5?4:6);for(let w=0;w<u;w++)e.box(h+92+w*g,d-2+(20-f)/2,f,f,w<this.turbos?we:2105392,w<this.turbos?zt:4210776,u>5?2:3);if(this.turboT>0&&e.rect(h+92,d+22,this.turboT/Uc*(u*g-6),5,zt),this.weapons){const w=c?20:Mt-190,E=c?314:106;e.text("AMMO",w,E,16,this.ammo?Ne:_e),e.text(String(this.ammo).padStart(3,"0"),w+120,E,16,Ft);const T=Math.ceil(this.ammo/Math.max(1,this.raceAmmo)*30);for(let C=0;C<30;C++)e.rect(w+C*5.6,E+22,3,10,C<T?zt:3158080);if(this.gunTarget!==null&&this.state==="race"){const C=this.world.rivalScreenPos(this.gunTarget,this.camera,Mt,He);if(C){const S=this.gunP>.6?_e:zt,b=Math.max(10,Math.min(34,700/C.dist)),P=C.y+b*1.1;for(const[H,W]of[[-1,-1],[1,-1],[-1,1],[1,1]])e.rect(C.x+H*b-(H>0?10:0),P+W*b-(W>0?3:0),10,3,S),e.rect(C.x+H*b-(H>0?3:0),P+W*b-(W>0?10:0),3,10,S);const z=this.world.rivals[this.gunTarget];if(!z.remote){const W=C.x-22,J=P+b+6,F=Math.min(1,1-z.hp/100);e.rect(W-1,J-1,46,7,0),e.rect(W,J,44*F,5,No(F))}}}this.noTargetT>0&&e.text(this.ammo?"NO TARGET":"OUT OF AMMO",Mt/2,124,16,this.ammo?Ft:_e,"center"),this.hitFlash>0&&(e.rect(0,0,Mt,6,_e),e.rect(0,He-6,Mt,6,_e),e.rect(0,0,6,He,_e),e.rect(Mt-6,0,6,He,_e))}const _=c?Mt/2-120:Mt-250,m=c?Mt/2+120:Mt-24,p=c?118:He-34;e.text("COURSE",_,p-26,16,zt),e.rect(_,p,m-_,8,2105408);const x=this.world.track.goalDist,M=this.world.track.stageStarts;for(const w of M)e.rect(_+w*Jt/x*(m-_)-1,p-4,4,16,Ft);const v=Math.min(1,this.pos/x);e.rect(_,p,v*(m-_),8,Rn),e.rect(_+v*(m-_)-4,p-6,8,20,zt),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],m,p+14,8,Ft,"right")}}class cx{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class lx{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const c of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(c,l=>l.stopPropagation());r.addEventListener("input",()=>{const c=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");c!==r.value&&(r.value=c)}),n.addEventListener("submit",c=>{var h;c.preventDefault();const l=Oc(r.value);if(!l){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,l)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}class Fs{constructor(){this.group=new vn,this.layers=[],this.sun=null,this.tmp=new $}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const pn=(i={})=>new en({vertexColors:!0,fog:!1,side:me,...i}),r0=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},hx=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},ux=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function ks(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=f=>"#"+f.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=f=>{if(f<=i[0][0])return i[0][1];for(let g=1;g<i.length;g++)if(f<=i[g][0])return ux(i[g-1][1],i[g][1],(f-i[g-1][0])/(i[g][0]-i[g-1][0]));return i[i.length-1][1]},c=oe.modern,l=c?.09:e;for(let f=0;f<90;f+=l*(f<20||c?1:3)){const _=2048*(90-Math.min(90,f+l*(f<20||c?1:3)))/180,m=2048*(90-f)/180;r.fillStyle=a(c?o(f):hx(o(f))),r.fillRect(0,Math.floor(_),2,Math.ceil(m-_)+1)}const h=new br(s);h.magFilter=c?fn:Ke,h.minFilter=c?fn:Ke,h.generateMipmaps=!1,h.colorSpace=Ge;const d=new rl(2800,24,90),u=new fe(d,new en({map:h,fog:!1,side:nn,depthWrite:!1}));return u.renderOrder=-10,u}const Yt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function Bn(i,t,e,n,s,r,a=40,o=[6,18]){const c=new dt,l=240,h=new Float32Array(l+1);for(let d=0;d<a;d++){const u=i.next()*l,f=i.range(.3,1)*n,g=i.range(o[0],o[1]);for(let _=0;_<=l;_++){let m=Math.abs(_-u);m=Math.min(m,l-m),h[_]=Math.max(h[_],f*Math.max(0,1-m/g))}}for(let d=0;d<l;d++){const u=d/l*Math.PI*2,f=(d+1)/l*Math.PI*2,g=h[d]*s(u),_=h[d+1]*s(f);if(!(g<1&&_<1)){if(oe.modern){const m=x=>r0(e,.86+.26*Math.min(1,x/n)),p=r0(e,.78);c.quadC(Yt(t,u,0,-60),Yt(t,f,0,-60),Yt(t,f,0,_),Yt(t,u,0,g),[p,p,m(_),m(g)])}else c.quad(Yt(t,u,0,-60),Yt(t,f,0,-60),Yt(t,f,0,_),Yt(t,u,0,g),e);if(r!==void 0){const m=n*.72;g>m&&_>m&&c.quad(Yt(t-1,u,0,g-(g-m)*.6),Yt(t-1,f,0,_-(_-m)*.6),Yt(t-1,f,0,_),Yt(t-1,u,0,g),r)}}}return new fe(c.build(),pn())}function dx(i,t,e,n,s,r=22){const a=new dt,o=360,c=new Float32Array(o+1);for(let l=0;l<r;l++){const h=i.next()*o,d=i.range(.35,1)*n,u=i.range(2,9),f=i.range(1.2,2.6);for(let g=0;g<=o;g++){let _=Math.abs(g-h);_=Math.min(_,o-_);const m=_<u?d:d*Math.max(0,1-(_-u)/f);c[g]=Math.max(c[g],m)}}for(let l=0;l<o;l++){const h=l/o*Math.PI*2,d=(l+1)/o*Math.PI*2,u=c[l]*s(h),f=c[l+1]*s(d);if(u<1&&f<1)continue;const g=e.length;let _=-60,m=-60;for(let p=0;p<g;p++){const x=(p+1)/g,M=p===g-1?u:u*x,v=p===g-1?f:f*x;a.quad(Yt(t,h,0,_),Yt(t,d,0,m),Yt(t,d,0,v),Yt(t,h,0,M),e[p]),_=M,m=v}}return new fe(a.build(),pn())}function zs(i,t,e=500){const n=new nl(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new fe(n,new en({color:t,fog:!1,side:me}))}function Wa(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=Yt(i,t,0,n);return new $(s,r,a)}function Bs(i,t,e,n,s,r=20){const a=new dt,o=Math.tan(e*Math.PI/180)*i;if(oe.modern){const c=Math.max(r,40),l=[...s].sort((d,u)=>u[0]-d[0]),h=(d,u)=>Yt(i,t,Math.cos(u)*n*d,o+Math.sin(u)*n*d);for(let d=0;d<l.length;d++){const[u,f]=l[d],[g,_]=d+1<l.length?l[d+1]:[0,l[d][1]];for(let m=0;m<c;m++){const p=m/c*Math.PI*2,x=(m+1)/c*Math.PI*2;a.quadC(h(u,p),h(u,x),h(g,x),h(g,p),[f,f,_,_])}}return new fe(a.build(),pn())}for(const[c,l]of s){const h=[];for(let d=0;d<r;d++){const u=d/r*Math.PI*2;h.push(Yt(i,t,Math.cos(u)*n*c,o+Math.sin(u)*n*c))}a.poly(h,l),i-=2}return new fe(a.build(),pn())}function qi(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new dt,[c,l,h]=n,d=(u,f,g,_,m,p,x,M=0,v=Math.PI*2)=>{const w=[],E=oe.modern?24:12;for(let T=0;T<=E;T++){const C=M+(v-M)*T/E;w.push(Yt(u,f,g+Math.cos(C)*m,_+Math.sin(C)*p))}o.poly(w,x)};for(let u=0;u<e;u++){const f=i.range(s,r),g=i.range(a[0],a[1]),_=Math.tan(g*Math.PI/180)*t,m=i.range(140,340),p=i.int(4,8),x=t-u*6;d(x,f,0,_,m*.9,16,h,Math.PI,Math.PI*2);for(let M=0;M<p;M++){const v=i.range(-m,m)*.65,w=i.range(0,34)*(1-Math.abs(v)/m),E=i.range(45,100),T=E*i.range(.5,.7),C=x-1-M*.3;d(C,f,v,_+w,E,T,l,0,Math.PI),d(C-.1,f,v-E*.15,_+w+T*.2,E*.7,T*.65,c,.2,Math.PI)}}return new fe(o.build(),pn())}function Xa(i,t,e,n,s,r,a=.6,o=.25){const c=new dt,l=new dt,h=420;for(let u=0;u<h;u++){const f=u/h*Math.PI*2+i.range(-.004,.004),g=r(f);if(g<=0||!i.chance(a))continue;const _=i.range(14,40),m=i.range(.15,1)*s*g*(i.chance(.1)?1.4:1),p=t-i.range(0,60),x=i.pick(e);if(c.quad(Yt(p,f,-_/2,-40),Yt(p,f,_/2,-40),Yt(p,f,_/2,m),Yt(p,f,-_/2,m),x),i.chance(.25)){const M=_*.5;c.quad(Yt(p,f,-M/2,m),Yt(p,f,M/2,m),Yt(p,f,M/2,m+m*.2),Yt(p,f,-M/2,m+m*.2),x)}if(n.length){for(let M=6;M<m-4;M+=7)for(let v=-_/2+3;v<_/2-3;v+=5){if(!i.chance(o))continue;const w=i.pick(n);l.quad(Yt(p-1,f,v,M),Yt(p-1,f,v+2.6,M),Yt(p-1,f,v+2.6,M+3.4),Yt(p-1,f,v,M+3.4),w)}m>s*.6&&i.chance(.6)&&l.quad(Yt(p-1,f,-1.5,m+1),Yt(p-1,f,1.5,m+1),Yt(p-1,f,1.5,m+4),Yt(p-1,f,-1.5,m+4),16719904)}}const d=new vn;return d.add(new fe(c.build(),pn())),l.empty||d.add(new fe(l.build(),pn())),d}function pu(i,t){const e=[],n=[],s=new Ut;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,c=i.range(12,75)*(Math.PI/180),l=2600;e.push(Math.sin(o)*Math.cos(c)*l,Math.sin(c)*l,-Math.cos(o)*Math.cos(c)*l),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new Ve;return r.setAttribute("position",new be(e,3)),r.setAttribute("color",new be(n,3)),new Ag(r,new Y0({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function fx(i,t,e,n,s,r){const a=new dt,o=(c,l)=>Yt(i,t,c,l);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(c=>[c[0],c[1],c[2]]).reverse(),r),new fe(a.build(),pn())}function mu(i,t,e,n,s){const r=new dt;for(let a=0;a<s;a++){const o=i.range(e,n),c=i.range(.8,1.4),l=t-a*4,h=(d,u)=>Yt(l,o,d*c,u*c-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new fe(r.build(),pn())}function px(i,t){const e=new dt,n=new dt,s=(a,o)=>Yt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,c=o+9,l=7-a*.6,h=7-(a+1)*.6;e.poly([s(-l,o),s(l,o),s(h,c),s(-h,c)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new vn;return r.add(new fe(e.build(),pn()),new fe(n.build(),pn())),r}function gu(i,t,e,n){const s=new dt;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),c=i.range(-o,o),l=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(Yt(t,e,c-l,a),Yt(t,e,c+l,a),Yt(t,e,c+l,a+.9),Yt(t,e,c-l,a+.9),h)}return new fe(s.build(),pn())}function mx(i,t,e){const n=new dt;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,c]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(Yt(t,r,o-1.2,a-1.2),Yt(t,r,o+1.2,a-1.2),Yt(t,r,o+1.2,a+1.2),Yt(t,r,o-1.2,a+1.2),c)}return new fe(n.build(),pn())}function Kn(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const Pn=12589072,Ln=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(c=>c.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},Gs={golf:Ln("golf","VW GOLF MK2",Kn({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:Pn}],.55),volvo240:Ln("volvo240","VOLVO 240 ESTATE",Kn({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:Pn}],.6),ae86:Ln("ae86","TOYOTA AE86",Kn({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:Pn}],.52),cherokee:Ln("cherokee","JEEP CHEROKEE XJ",Kn({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:Pn}],.7,.36),caprice:Ln("caprice","CHEVROLET CAPRICE",Kn({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:Pn}],.6),w124:Ln("w124","MERCEDES W124",Kn({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:Pn}],.62),f150:Ln("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:Pn}],.65,.38),crown:Ln("crown","TOYOTA CROWN",Kn({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:Pn}],.62),cedric:Ln("cedric","NISSAN CEDRIC",Kn({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:Pn}],.6),every:Ln("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:Pn}],.6,.27),civic:Ln("civic","HONDA CIVIC EF",Kn({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:Pn}],.5)};function Gn(i,t={}){if(oe.modern)return gx(i,t);const e=au(i,16777215,!0);D2(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:ll(i,.8).build(),mat:"halo",tint:!1}),a}function gx(i,t){const e=eu(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const c of[-1,1])n.with(new kt().makeTranslation(c*o.x,o.r,o.z),()=>nu(n,o.r,o.hw,c,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(c=>c.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:ru(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:ll(i,.8).build(),mat:"halo",tint:!1}),a}class Hs{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const Jn=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],a0=[16047256,15519880],Oo=[1616092,1351892],xx=[6605900,5815364],o0=[5026876,4367414],ar=[14734532,13945016],Fo=12576482,or={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},_x=[16777215,14743807],Mx=[5430488,4641490],vx={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],night:!1,hemi:[10542335,14205072],plate:16769088,smoke:16777215,card:[1727160,16771232],music:"miami",stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Fo,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:j+26,build(i){const t=new ii(1986),e=[ge(or,[{w:4,c:ar},{w:600,c:xx}],[{w:6,c:a0},{w:28,abs:.4,c:a0},{w:3,abs:.12,c:_x},{w:16,abs:0,c:Mx},{w:600,abs:0,c:Oo}]),ge(or,[{w:6,c:ar},{w:600,c:[7393880,6735440]}],[{w:6,c:ar},{w:600,c:[7393880,6735440]}]),ge(or,[{w:1,c:ar},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Oo}],[{w:1,c:ar},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Oo}]),ge(or,[{w:3,c:[14207120,13417604]},{w:600,c:o0}],[{w:3,c:[14207120,13417604]},{w:600,c:o0}]),ge(or,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(ct,Dt)=>Dt?4:ct==="city"?1:ct==="causeway"?2:ct==="hills"?3:0,s=new Us(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new Hs,o=a.add(hl()),c=a.add(z2()),l=a.add(ou()),h=a.add(ul()),d=[a.add(Io([16724032,16777215])),a.add(Io([2781439,16769088])),a.add(Io([2146464,16744624]))],u=a.add(B2()),f=[0,1,2].map(ct=>a.add(dl(ct,t))),g=a.add(Os(8,16774336)),_=a.add(Va()),m=a.add(k2()),p=a.add(G2()),x=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(ct=>a.add(Er(i.add(ct,2,2),9,4.5))),M=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(ct=>a.add(cu(i.add(ct,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(ct=>a.add(Ha(i.add(ct,1,1)))),w=a.add(Re(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),E=a.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),T=a.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),C=Gs,S=[C.golf,C.volvo240,C.ae86,C.cherokee,C.caprice,C.w124,C.f150].map(ct=>a.add(Gn(ct))).concat([a.add(yi(2788095)),a.add(Wi(16734858))]),b=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),P=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),z=a.add(lu()),H=a.add(fl()),W=a.add(hu()),J=a.add(H2()),F=a.add(uu()),at=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((ct,Dt)=>a.add(Re(i.add(ct,4,1),16777215,Dt?16747040:2146480,16777215))),B=a.add(bi(!0)),nt=a.add(bi(!1)),et=Array.from({length:16},(ct,Dt)=>a.add(pl(i.add({bg:1735226,fg:16777215,text:String(Dt+1),border:16777215},1,1)))),ot=[a.add(Xi(0)),a.add(Xi(1))],tt=a.add(du(t)),Ct=a.add(X2()),K=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],gt=[16726618,16769088,2789631,4251808,16777215,16747040],Tt=r.segs;for(let ct=10;ct<Tt.length;ct++){const Dt=Tt[ct],pt=Dt.props;if(Dt.tunnel){Tt[ct-1].tunnel||pt.push({t:p,x:0});continue}const Zt=Dt.zone;if(oe.modern){const G=Zt==="beach"||Zt==="beach2";ct%3===0&&(Zt==="hills"||G)&&pt.push({t:B,x:j+2.1},{t:nt,x:-13.1}),ct%167===100&&pt.push({t:et[Math.min(et.length-1,Math.floor(ct*6/1e3))],x:j+3.4,r:-.3}),G&&(ct%5===0&&t.chance(.55)&&pt.push({t:ot[1],x:j+t.range(9,26),r:t.range(0,6),tint:t.pick(K)}),ct%4===1&&t.chance(.35)&&pt.push({t:ot[0],x:-(j+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick(K)}),ct%40===10&&pt.push({t:tt,x:j+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),Zt==="beach2"&&ct%26===13&&t.chance(.7)&&pt.push({t:Ct,x:j+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick(K)})),Zt==="city"&&ct%5===2&&t.chance(.45)&&pt.push({t:ot[0],x:t.sign()*(j+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick(K)})}Math.abs(Dt.curve)>.0016&&ct%5===0&&Zt!=="causeway"&&pt.push(Dt.curve>0?{t:b,x:-16.5,r:.15}:{t:P,x:j+5.5,r:-.15}),(Zt==="beach"||Zt==="beach2"||Zt==="causeway")&&ct%23===0&&t.chance(.6)&&pt.push({t:F,x:(Zt==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),Zt==="beach"||Zt==="beach2"?(ct%19===4&&t.chance(.5)&&pt.push({t:J,x:j+t.range(10,18),r:t.range(-.5,.5)}),ct%7===0&&t.chance(.85)&&pt.push({t:o,x:j+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),ct%7===3&&t.chance(.5)&&pt.push({t:o,x:-(j+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),ct%9===0&&t.chance(Zt==="beach2"?.75:.45)&&(pt.push({t:t.pick(d),x:j+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&pt.push({t:t.pick(d),x:j+t.range(14,26),r:t.range(0,6)})),Zt==="beach2"&&ct%70===35&&pt.push({t:u,x:j+22,r:-.6}),ct%55===20&&pt.push({t:t.pick(f),x:-(j+t.range(40,70)),tint:t.pick(Jn),r:t.range(-.3,.3)}),ct%80===50&&pt.push({t:t.pick(x),x:-23,r:.35}),ct%37===0&&t.chance(.5)&&pt.push({t:h,x:j+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),ct%120===60&&pt.push({t:t.pick(v),x:j+3,r:-.2})):Zt==="city"?(ct%30>3&&pt.push({t:z,x:j+9.5},{t:z,x:-20.5}),ct%16===12&&pt.push({t:H,x:j+4.5,tint:t.pick(gt)},{t:H,x:-15.5,r:Math.PI,tint:t.pick(gt)}),ct%14===0&&t.chance(.75)&&pt.push({t:t.pick(M),x:-(j+t.range(15,18)),tint:t.pick(Jn),r:.5}),ct%14===7&&t.chance(.75)&&pt.push({t:t.pick(M),x:j+t.range(15,18),tint:t.pick(Jn),r:-.5}),ct%8===0&&pt.push({t:g,x:j+3,r:0},{t:g,x:-14,r:Math.PI}),ct%8===4&&(pt.push({t:o,x:j+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),pt.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),ct%40===20&&pt.push({t:t.pick(x),x:(ct%80===20?-1:1)*(j+11),r:ct%80===20?.35:-.35}),ct%30===15&&pt.push({t:t.pick(f),x:t.sign()*(j+t.range(50,80)),tint:t.pick(Jn),r:t.range(-.3,.3)})):Zt==="causeway"?(ct%10===0&&pt.push({t:g,x:j+2.4,r:0}),ct%10===5&&pt.push({t:g,x:-13.4,r:Math.PI}),ct%45===0&&t.chance(.8)&&pt.push({t:m,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),ct%150===75&&pt.push({t:t.pick(v),x:j+4,r:-.2})):Zt==="hills"&&(Math.abs(Dt.curve)>.0012&&(pt.push({t:_,x:j+2.4}),pt.push({t:_,x:-13.4})),ct%4===2&&t.chance(.5)&&pt.push({t:W,x:t.sign()*(j+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),ct%5===0&&t.chance(.6)&&pt.push({t:c,x:t.sign()*(j+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),ct%11===0&&t.chance(.5)&&pt.push({t:l,x:t.sign()*(j+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),ct%23===0&&t.chance(.6)&&pt.push({t:h,x:t.sign()*(j+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),ct%90===45&&pt.push({t:t.pick(x),x:j+12,r:-.35}))}for(let ct=1;ct<r.stageStarts.length;ct++)Tt[r.stageStarts[ct]+4].props.push({t:E,x:0});Tt[8].props.push({t:w,x:0}),Tt[r.stageStarts[1]+160].props.push({t:at[0],x:0}),Tt[r.stageStarts[4]+200].props.push({t:at[1],x:0}),Tt[r.goalSeg].props.push({t:T,x:0});const ft=new Fs;ft.addLayer(ks([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Fo),0);const Ot=ct=>Math.atan2(Math.sin(ct),Math.cos(ct)),Bt=Bs(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return ft.addLayer(Bt,1),ft.sun={obj:Bt,local:Wa(2500,.25,2.6)},ft.addLayer(qi(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),ft.addLayer(qi(t,2350,14,[16777215,16771312,16033992]),.8),ft.addLayer(Bn(t,2200,8030928,230,ct=>{const Dt=Ot(ct);return Dt<-.25?1:Dt>1.6?.8:0},15265535,46),1),ft.addLayer(Bn(t,2050,5939360,110,ct=>{const Dt=Ot(ct);return Dt<-.15||Dt>1.9?1:0},void 0,50),1),ft.addLayer(Bn(t,1980,3050072,55,ct=>{const Dt=Ot(ct);return Dt<-.35||Dt>2.1?1:0},void 0,260,[1.2,3.5]),1),ft.addLayer(Xa(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,ct=>{const Dt=Ot(ct);return Dt>.7&&Dt<1.3?1:0},.9,.35),1),oe.modern&&(ft.addLayer(mu(t,1880,.35,1.5,5),1),ft.addLayer(px(1860,1.55),1),ft.addLayer(gu(t,1880,.25,140),1)),ft.addLayer(zs(1900,Fo),0),{track:r,profiles:e,props:a.defs,backdrop:ft,trafficTypes:S,gateType:T}}},ko=2890832,Bc=[16771232,16774872,16765040,10547455,16777215],zo={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},ma=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function yx(i,t,e,n){const s=new dt,r=new dt,a=i.pick([1843780,2235456,1583680,2500160]);if(oe.modern){const h=new dt,d=Sr(n<30?Te.APARTMENT:i.pick([Te.OFFICE_WARM,Te.OFFICE_COOL,Te.OFFICE_DARK,Te.OFFICE_WARM])),u=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,d,u[0],u[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const f=t*.65,g=e*.65,_=i.range(6,14);h.facadeBox(0,n+_/2,0,f,_,g,d,u[0],u[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+_+.3,0,f+.2,.5,g+.2,i.pick([4255999,16726666,16777215])),n+=_}for(let f=0;f<3;f++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),c=i.range(.12,.35),l=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,d,u,f]of l)for(let g=4;g<n-3;g+=3.6){if(o===1&&i.chance(.15)){const _=i.pick(Bc),m=f+.06;h===0?r.quad([-u/2+1,g,d*m],[u/2-1,g,d*m],[u/2-1,g+1.8,d*m],[-u/2+1,g+1.8,d*m],_):r.quad([d*m,g,-u/2+1],[d*m,g,u/2-1],[d*m,g+1.8,u/2-1],[d*m,g+1.8,-u/2+1],_);continue}for(let _=-u/2+1.5;_<u/2-1.5;_+=3){if(!i.chance(c))continue;const m=i.pick(Bc),p=f+.06;h===0?r.quad([_,g,d*p],[_+1.5,g,d*p],[_+1.5,g+1.8,d*p],[_,g+1.8,d*p],m):r.quad([d*p,g,_],[d*p,g,_+1.5],[d*p,g+1.8,_+1.5],[d*p,g+1.8,_],m)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function bx(i,t,e){const n=new dt,s=new dt,r=new dt;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function Sx(i,t){const e=new dt,n=new dt,s=new dt;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function Ex(i,t){const e=new dt,n=new dt,s=j+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function wx(){const i=new dt,t=new dt,e=56,n=-70;for(const s of[-j-3,j+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(j+3)*2,2.2,2,14212328);for(const s of[-j-3,j+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,c=r*o*64,l=e-(e-4)*(1-(1-o)*(1-o));t.box(s,l,c,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const Tx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],night:!0,hemi:[9072864,2760768],plate:15790312,smoke:12105936,card:[2363466,16738992],music:"tokyo",stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:ko,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:j+1,build(i){var nt,et;const t=new ii(1985),e=[ge(zo,ma([1711160,1447983]),ma([1711160,1447983])),ge(zo,ma([924744,792638]),ma([924744,792638])),ge(zo,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(ot,tt)=>tt?2:ot==="bay"?1:0,s=new Us(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new Hs,o=[],l=(oe.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([ot,tt,Ct])=>{const K=[];for(let gt=0;gt<ot;gt++){const Tt=t.range(18,34),ft=t.range(18,30),Ot=t.range(tt,Ct),Bt={t:a.add(yx(t,Tt,ft,Ot)),h:Ot,w:Math.max(Tt,ft)};K.push(Bt),o.push(Bt)}return K}),h=a.add(Os(10,16760928,9079448,4,!0)),d=[16726666,4255999,16769088,16732208,8453984,12607743],f=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((ot,tt)=>{const Ct=d[tt%d.length],K={bg:1052700,fg:Ct,text:ot,vertical:!0,jp:!0,border:Ct};return a.add(bx(i.add(K,1,4),Ct,t.range(26,36)))}),_=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((ot,tt)=>a.add(Sx(i.add(ot,2,1),d[tt%d.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([ot,tt])=>a.add(Ex(i.add(ot,2,1),i.add(tt,2,1)))),x=a.add(wx()),M=a.add(wr(6974072,16752688,7.9)),v=a.add(Re(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),w=a.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),E=a.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),T=Gs,C=[T.cedric,T.every,T.civic,T.ae86,T.crown].map(ot=>a.add(Gn(ot,{night:!0}))).concat([a.add(Gn(T.crown,{taxi:!0,night:!0})),a.add(Gn(T.crown,{taxi:!0,night:!0})),a.add(yi(14690858)),a.add(yi(1739322)),a.add(Wi(2787930))]),S=a.add(fu(16756784)),b=a.add(q2(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),P=a.add(Y2(8.2)),z=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),H=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),W=a.add(V2(2788e3)),J=[0,1,2].map(()=>a.add(W2(t))),F=r.segs,at=(ot,tt,Ct)=>{const K=F[ot].props;for(const gt of[-1,1]){if(!t.chance(tt))continue;const Tt=t.range(0,240),ft=oe.modern?t.pick(l[Tt<70?0:Tt<140?1:2]):t.pick(o),Ot=oe.modern?t.range(.9,1.15):t.range(.85,1.25),Bt=gt*(j+Ct+ft.w*Ot*.5+Tt),ct=oe.modern?t.range(.92,1.1):Tt<70?t.range(.25,.45):Tt<140?t.range(.5,.9):t.range(.8,1.5);K.push({t:ft.t,x:Bt,y:0,abs:!0,s:Ot,sy:ct,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),Tt<140&&t.chance(.4)&&K.push({t:t.pick(_),x:Bt-gt*ft.w*Ot*.2,y:ft.h*Ot*ct,abs:!0,r:gt*-.4})}};for(let ot=10;ot<F.length;ot++){const tt=F[ot],Ct=tt.props;if(tt.tunnel){F[ot-1].tunnel||Ct.push({t:M,x:0}),oe.modern&&ot%22===0&&Ct.push({t:P,x:0});continue}const K=tt.zone;if(oe.modern&&(ot%2===0&&Ct.push({t:S,x:j+1.65,y:1.3},{t:S,x:-12.65,y:1.3}),ot%140===70&&Ct.push({t:b,x:j+.9,r:-Math.PI/2})),Math.abs(tt.curve)>.0016&&ot%4===0&&Ct.push(tt.curve>0?{t:z,x:-12.95,r:.1}:{t:H,x:j+1.95,r:-.1}),K!=="bay"&&ot%3===0&&Ct.push({t:t.pick(J),x:t.sign()*(j+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),K!=="bay"&&ot%130===90&&!((nt=F[ot+2])!=null&&nt.tunnel)&&!((et=F[ot-2])!=null&&et.tunnel)&&Ct.push({t:W,x:0,y:-0}),ot%7===0&&Ct.push({t:h,x:j+2.6,y:1.3,r:0}),ot%7===3&&Ct.push({t:h,x:-13.6,y:1.3,r:Math.PI}),K==="bay"){ot%75===30&&Ct.push({t:x,x:0}),ot%9===0&&at(ot,.08,260);continue}at(ot,K==="wangan"?.12:K==="under"?.22:.3,18),(K==="neon"||K==="city")&&ot%4===0&&t.chance(K==="neon"?.55:.2)&&Ct.push({t:t.pick(f),x:t.sign()*(j+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),ot%110===55&&Ct.push({t:t.pick(p),x:0})}for(let ot=1;ot<r.stageStarts.length;ot++)F[r.stageStarts[ot]+4].props.push({t:w,x:0});F[8].props.push({t:v,x:0}),F[r.goalSeg].props.push({t:E,x:0});const B=new Fs;return B.addLayer(ks([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],ko),0),B.addLayer(qi(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),B.addLayer(pu(t,260),.3),B.addLayer(Bs(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),B.addLayer(fx(2300,.55,190,520,3811946,14209264),1),B.addLayer(Xa(t,2100,[1710136,2103872,1316410],Bc,170,()=>1,.75,.22),1),oe.modern&&B.addLayer(mx(t,2300,6),.4),B.addLayer(zs(1950,ko),0),{track:r,profiles:e,props:a.defs,backdrop:B,trafficTypes:C,gateType:E}}},sn=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),e&&!e.empty&&n.push({geo:e.build(),mat:"sign"}),n},mr=(i,t)=>new Ut(i).multiplyScalar(t).getHex();function xu(){const i=new dt,t=[4099130,3042860];i.prism(0,0,0,6.2,.5,.42,8,t,5939274);for(const[e,n,s]of[[1,2.6,2.4],[-1,3.4,1.8]])i.box(e*.75,n,0,1.1,.6,.6,t[0]),i.prism(e*1.15,0,n-.2,n+s,.34,.3,7,t,5939274);return{parts:sn(i),radius:.7,max:220}}function _u(){const i=new dt,t=[8022610,6180928];i.prism(0,0,0,2.6,.38,.3,6,t);const e=[[-1.6,4.4,.3],[1.4,4.8,-.4],[.2,5.4,.9],[-.4,4,-1.3]];for(const n of e){for(let r=0;r<5;r++){const a=r/5,o=(r+1)/5,c=d=>[n[0]*d,2.6+(n[1]-2.6)*d,n[2]*d],l=c(a),h=c(o);i.quad([l[0]-.18,l[1],l[2]],[l[0]+.18,l[1],l[2]],[h[0]+.15,h[1],h[2]],[h[0]-.15,h[1],h[2]],t[r%2])}for(let r=0;r<8;r++){const a=r/8*Math.PI*2;i.tri([n[0],n[1]-.2,n[2]],[n[0]+Math.cos(a)*.25,n[1],n[2]+Math.sin(a)*.25],[n[0]+Math.cos(a)*.9,n[1]+.5,n[2]+Math.sin(a)*.9],r%2?4880954:6986314)}}return{parts:sn(i),radius:.6,max:160}}function Ax(i){const t=new dt,e=[12607546,14186570,11555892,14717020,11029552],n=9,s=i.range(26,46),r=i.range(26,40),a=r*i.range(.55,.75),o=5;for(let c=0;c<o;c++){const l=s*c/o,h=s*(c+1)/o,d=r+(a-r)*(c/o),u=r+(a-r)*((c+1)/o);t.prism(0,0,l,h,d,u,n,[e[c],mr(e[c],.82)],c===o-1?14191192:null,.3)}return t.prism(0,0,-2,4,r*1.35,r,n,[13139024,11561540],null,.3),{parts:sn(t),radius:0,max:30}}function Rx(){const i=new dt,t=j+5,e=18,n=4,s=[13134400,11557430,14188622];for(const a of[-1,1])i.box(a*(t+3),e/2-2,0,7,e+4,9,[s[0],s[2]]);const r=10;for(let a=0;a<r;a++){const o=a/r*Math.PI,c=(a+1)/r*Math.PI,l=(h,d,u)=>[-Math.cos(h)*d,e-4+Math.sin(h)*(d*.45),u];for(const h of[-4,4])i.quad(l(o,t,h),l(c,t,h),l(c,t+n,h),l(o,t+n,h),s[a%2]);i.quad(l(o,t,-4),l(c,t,-4),l(c,t,4),l(o,t,4),9061416),i.quad(l(o,t+n,-4),l(c,t+n,-4),l(c,t+n,4),l(o,t+n,4),s[2])}return{parts:sn(i),radius:0,max:4}}function Mu(){const i=new dt,t=new dt;i.prism(0,0,-30,26,6,5,12,[15261904,13682872]),i.prism(0,0,26,32,6.6,6.6,12,[14209216,12630184],12103840),i.prism(0,0,32,36,3,.4,12,[12630184,11051152]);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;t.box(Math.cos(n)*5.4,28,Math.sin(n)*5.4,.8,1.6,.8,16771232)}return{parts:sn(i,t),radius:0,max:6}}function Cx(){const i=new dt;i.prism(0,0,0,1.4,.3,.25,5,5914150);const t=[[1,4.6,2.6],[3.2,7,2],[5.4,9.4,1.4]];for(const[e,n,s]of t){i.prism(0,0,e,n,s,0,8,[1989174,1526316]);const r=e+(n-e)*.45;i.prism(0,0,r,n+.05,s*.58,0,8,[16777215,14739700])}return{parts:sn(i),radius:1,max:300}}function Ix(i){const t=new dt,e=i.range(10,13),n=9,s=3.4,r=3.2,a=i.pick([9065522,8014380,10117176]);t.box(0,s/2,0,e,s,n,[16052456,16777215]),t.box(0,s+r/2,0,e,r,n,[a,mr(a,1.15)]);for(let h=-e/2+1.6;h<e/2-1;h+=2.6)for(const[d,u]of[[1.8,3820122],[s+1.6,3820122]])t.box(h,d,n/2+.02,1,1.1,.06,u),t.box(h-.75,d,n/2+.04,.4,1.1,.06,12593706),t.box(h+.75,d,n/2+.04,.4,1.1,.06,12593706);t.box(0,s+.2,n/2+.8,e*.8,.2,1.6,a);for(let h=-e*.4;h<=e*.4;h+=.6)t.box(h,s+.75,n/2+1.55,.12,1,.12,mr(a,.8));t.box(0,s+1.25,n/2+1.55,e*.8,.12,.12,mr(a,.8));const o=s+r,c=o+3.6,l=1.2;for(const h of[-1,1])t.quad([h*(e/2+l),o-.4,-n/2-l],[h*(e/2+l),o-.4,n/2+l],[0,c,n/2+l],[0,c,-n/2-l],mr(a,.7)),t.quad([h*(e/2+l-.1),o-.15,-n/2-l],[h*(e/2+l-.1),o-.15,n/2+l],[0,c+.25,n/2+l],[0,c+.25,-n/2-l],16317439);for(const h of[-n/2,n/2])t.tri([-e/2,o,h],[e/2,o,h],[0,c,h],[a,a][0]);return t.box(e*.25,c,0,.9,2.4,.9,14209224),{parts:sn(t),radius:0,max:30}}function Px(){const i=new dt;return i.quad([-1.2,0,0],[1.4,0,0],[.6,1.1,0],[-.8,.9,0],16777215),i.quad([-.8,.9,0],[.6,1.1,0],[.6,1.1,-Jt],[-.8,.9,-Jt],16054527),i.quad([1.4,0,0],[.6,1.1,0],[.6,1.1,-Jt],[1.4,0,-Jt],14477044),i.quad([-1.2,0,0],[-.8,.9,0],[-.8,.9,-Jt],[-1.2,0,-Jt],15265528),{parts:sn(i),radius:0,max:400}}function Lx(){const i=new dt;return i.box(0,0,0,3.2,2.6,2.4,[13642282,14694970]),i.box(0,.3,1.21,2.8,1.2,.02,9091288),i.box(0,.3,-1.21,2.8,1.2,.02,9091288),i.box(0,2.6,0,.2,2.6,.2,3815994),i.box(0,3.9,0,300,.12,.12,2763306),{parts:sn(i),radius:0,max:6}}function Dx(i,t,e){const n=new dt,s=new dt,r=new dt,a=new dt,o=i.range(26,40),c=i.range(16,22),l=i.range(60,110);if(oe.modern)a.facadeBox(0,l/2,0,o,l,c,Sr(i.pick([Te.OFFICE_WARM,Te.APARTMENT,Te.OFFICE_COOL])),14,14,[16777215,14207144],3813440,i.range(0,1));else{n.box(0,l/2,0,o,l,c,[3812928,4865616]);for(let d=6;d<l-4;d+=6)for(let u=-o/2+2;u<o/2-2;u+=3)i.chance(.55)&&s.box(u,d,c/2+.05,1.6,2,.05,i.pick([16771232,16774872,16765040]))}for(const d of[l*.33,l*.66,l])s.box(0,d,0,o+.4,.9,c+.4,16762954);n.box(0,5,0,o+14,10,c+10,[2760752,3812928]),s.box(0,10.4,0,o+14.4,.8,c+10.4,e),s.box(0,l+2,0,o*.7,.6,c*.7,e),n.box(0,l+7,c*.25,o*.8,9,.6,1052700),r.quad([-o*.38,l+3,c*.25+.32],[o*.38,l+3,c*.25+.32],[o*.38,l+11,c*.25+.32],[-o*.38,l+11,c*.25+.32],16777215,t),s.box(0,l+11.4,c*.25,o*.8,.5,.7,e);const h=sn(n,s,r);return a.empty||h.push({geo:a.build(),mat:"facadeLit"}),{parts:h,radius:0,max:40}}function Nx(i,t,e,n){const s=new dt,r=new dt,a=new dt;s.box(0,n/2,-.4,1.4,n,1.4,2105392),s.box(0,n+5,-.3,12.6,10.6,.6,1052700),a.quad([-6,n,.05],[6,n,.05],[6,n+10,.05],[-6,n+10,.05],16777215,i);for(let o=0;o<=12;o++){const c=-6.3+o*1.05;r.box(c,n-.3,.1,.35,.35,.35,o%2?16777215:16769120),r.box(c,n+10.3,.1,.35,.35,.35,o%2?16769120:16777215)}for(let o=0;o<=10;o++)for(const c of[-6.3,6.3])r.box(c,n+o,.1,.35,.35,.35,o%2?16777215:16769120);return r.box(0,n-3,.1,9,1.2,.3,e),r.poly([[4.4,n-1.4,.1],[7.4,n-3,.1],[4.4,n-4.6,.1]],e),r.box(0,n+10.9,0,12.8,.4,.8,t),{parts:sn(s,r,a),radius:.9,max:40}}function Ux(i,t){const e=new dt,n=new dt,s=i.range(30,46),r=i.range(10,16),a=18;e.box(0,r/2,0,s,r,a,[2761270,3813446]),n.box(0,r*.55,a/2+.05,s-2,r*.3,.1,i.pick([16726666,4255999,16764992,16740400])),n.box(0,r+.3,0,s+.4,.6,a+.4,t),e.box(0,4,a/2+4,16,.6,8,16777215);for(let o=0;o<16;o++)n.box(-7.5+o,3.6,a/2+8,.3,.3,.3,o%2?16769120:16777215);return{parts:sn(e,n),radius:0,max:40}}function Ox(i){const t=new dt,e=i.range(10,16),n=i.range(8,11),s=i.int(2,4),r=3.2,a=s*r;t.box(0,a/2,0,e,a,n,[16777215,16052458]);for(let h=0;h<s;h++){for(let d=-e/2+1.6;d<e/2-1;d+=2.8){const u=h*r+1.7;t.box(d,u,n/2+.03,1.1,1.6,.06,2767434),t.box(d-.8,u,n/2+.06,.45,1.6,.06,2783818),t.box(d+.8,u,n/2+.06,.45,1.6,.06,2783818)}h>0&&t.box(0,h*r+.2,n/2+.6,e*.5,.18,1.2,15788252)}const o=a+2.4,c=.6,l=[13130294,11554352];return t.quad([-e/2-c,a,n/2+c],[e/2+c,a,n/2+c],[e*.25,o,0],[-e*.25,o,0],l[0]),t.quad([e/2+c,a,-n/2-c],[-e/2-c,a,-n/2-c],[-e*.25,o,0],[e*.25,o,0],l[1]),t.tri([e/2+c,a,n/2+c],[e/2+c,a,-n/2-c],[e*.25,o,0],l[1]),t.tri([-e/2-c,a,-n/2-c],[-e/2-c,a,n/2+c],[-e*.25,o,0],l[0]),{parts:[{geo:t.build(),mat:"lit",tint:!0}],radius:0,max:60}}function Fx(){const i=new dt;return i.prism(0,0,0,1,.25,.2,5,5914150),i.prism(0,0,.6,5,.6,1.1,8,[2379820,1851428]),i.prism(0,0,5,10.5,1.1,0,8,[2775602,1984040]),{parts:sn(i),radius:.8,max:260}}function kx(i){const t=new dt,e=i.range(18,34),n=e*.24,s=[[-n/2,0,e/2],[n/2,0,e/2],[n/2,0,-e*.25],[0,0,-e/2],[-n/2,0,-e*.25]],r=s.map(([a,,o])=>[a*1.08,2.4,o]);for(let a=0;a<s.length;a++){const o=(a+1)%s.length;t.quad(s[a],s[o],r[o],r[a],a===3||a===2?16053492:16777215)}return t.poly(r,14200968),t.box(0,3.6,e*.08,n*.75,2.4,e*.45,[16777215,15790320]),t.box(0,3.6,e*.08,n*.77,.8,e*.42,1714746),t.box(0,5.4,e*.12,n*.55,1.4,e*.25,[16777215,15790320]),t.box(0,.6,0,n*1.1,.4,e*.9,1718906),t.box(0,7.4,e*.1,.25,3,.25,13684944),{parts:sn(t),radius:0,max:40}}function zx(){const i=new dt;i.box(0,.75,-Jt/2,.8,1.5,Jt,[14207144,14997176]),i.box(0,1.6,-Jt/2,1,.2,Jt,[13154456,15787208]);for(let t=0;t<4;t++)i.box(.41,.4+t%2*.6,-.8-t*1.4,.02,.06,1.2,12101768);return{parts:sn(i),radius:0,max:360}}const Bo=15912868,fi=[13137994,12348994],ga=[14457438,13668438],c0=[15251584,14462068],l0=[11557430,10505774],Bx=[1731240,1598112],xa=[14998732,14209216],_s={road:[9077384,8287868],line:16764992,edge:16777215,rumble:[16777215,13652016]},Gx={id:"canyon",name:"GRAND CANYON",lines:["GRAND","CANYON"],night:!1,hemi:[11063551,14191184],plate:16777215,smoke:15255712,card:[12605482,16771232],music:"desert",stageNames:["ROUTE 66 DINER","PAINTED DESERT","CANYON RIM","HOOVER DAM","MONUMENT VALLEY"],fog:{color:Bo,near:180,far:1200},ambient:{color:16773344,intensity:1.85},sun:{color:16769720,intensity:2.5,dir:[.6,.9,-.6]},startTime:60,extendTime:40,shadow:6965818,trafficColors:[14209216,9054752,2771594,16777215,4876858,13146688,6974066],trafficCount:14,walls:!1,offroadLimit:j+26,build(i){const t=new ii(1966),e=et=>et,n=[ge(_s,[{w:4,c:fi,tex:ut.DIRT},{w:600,c:ga,tex:ut.SAND}],[{w:4,c:fi,tex:ut.DIRT},{w:600,c:ga,tex:ut.SAND}]),ge(_s,[{w:2,c:fi,tex:ut.DIRT},{w:24,c:[12101776,11312260],tex:ut.PAVING},{w:600,c:ga,tex:ut.SAND}],[{w:2,c:fi,tex:ut.DIRT},{w:24,c:[12101776,11312260],tex:ut.PAVING},{w:600,c:ga,tex:ut.SAND}]),ge(_s,[{w:2.5,c:fi,tex:ut.DIRT},{w:1.5,dy:16,c:l0,tex:ut.DIRT},{w:600,dy:4,c:[13135934,12347448],tex:ut.DIRT}],[{w:3,c:fi,tex:ut.DIRT},{w:6,abs:0,c:l0,tex:ut.DIRT},{w:600,abs:0,c:[11031604,10243118],tex:ut.DIRT}]),ge(_s,[{w:1,c:xa,tex:ut.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:xa},{w:40,abs:-30,c:[13682872,12893356],tex:ut.CONCRETE},{w:600,abs:-30,c:[2783850,2519134],tex:e(ut.BAY)}],[{w:1,c:xa,tex:ut.CONCRETE},{w:0,dy:1.1,c:[15788248,15261904]},{w:.8,c:xa},{w:0,abs:34,c:[13156528,12367012]},{w:600,abs:34,c:Bx,tex:ut.BAY}]),ge(_s,[{w:4,c:fi,tex:ut.DIRT},{w:600,c:c0,tex:ut.SAND}],[{w:4,c:fi,tex:ut.DIRT},{w:600,c:c0,tex:ut.SAND}]),ge(_s,[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[{w:1.2,dy:.3,c:[10128002,9338486]},{w:0,dy:5,c:[10508346,9719348]},{w:0,dy:.8,c:[16765024,6967360]},{w:1.5,dy:2.8,c:[9062960,8406060]}],[5911590,5385762])],s=(et,ot)=>ot?5:et==="diner"?1:et==="rim"?2:et==="dam"?3:et==="valley"?4:0,r=new Us(s,6);r.zone="diner",r.straight(30),r.stageFrom({zone:"diner",length:380,curvy:.55,hilly:.2,yMin:5,yMax:12},t),r.stageFrom({zone:"painted",length:400,curvy:.7,hilly:.6,yMin:5,yMax:34},t),r.stageFrom({zone:"rim",length:420,curvy:1,hilly:.5,yMin:60,yMax:90,tunnels:.14},t),r.stageFrom({zone:"dam",length:300,curvy:.3,hilly:.02,yMin:40,yMax:40},t),r.stageFrom({zone:"valley",length:440,curvy:.6,hilly:.35,yMin:5,yMax:22},t);const a=r.finish(260),o=new Hs,c=o.add(xu()),l=o.add(_u()),h=[0,1,2].map(()=>o.add(Ax(t))),d=o.add(Rx()),u=o.add(Mu()),f=o.add(ul()),g=o.add(ou()),_=o.add(Va()),m=o.add(Os(9,16773312)),p=o.add(dl(2,t)),x=o.add(wr(10508346,16764992,7.9)),M=[{bg:16777215,fg:14690858,text:"DINER"},{bg:1718922,fg:16769088,text:"GAS"},{bg:16777215,fg:1735226,text:"MOTEL"},{bg:14690858,fg:16777215,text:"CAFE"},{bg:16769088,fg:1710618,text:"TRADING POST"}].map(et=>o.add(cu(i.add(et,2,1)))),v=[{bg:16777215,fg:1710618,text:"ROUTE 66",sub:"HISTORIC HIGHWAY",border:1710618},{bg:14690858,fg:16777215,text:"LAST GAS",sub:"80 MILES",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1731256,fg:16777215,text:"CANYON",sub:"VIEWPOINT 5 MI",border:16769088},{bg:16747040,fg:16777215,text:"COLD",sub:"ROOT BEER",border:16777215}].map(et=>o.add(Er(i.add(et,2,2),9,4.5,9071178,15788248))),w=[{bg:1735226,fg:16777215,text:"FLAGSTAFF",sub:"62",border:16777215},{bg:1735226,fg:16777215,text:"LAS VEGAS",sub:"104",border:16777215},{bg:16777215,fg:1710618,text:"US",sub:"66",border:1710618}].map(et=>o.add(Ha(i.add(et,1,1)))),E=o.add(Re(i.add({bg:16777215,fg:12597274,text:"START",stripes:1710618},4,1),14207152,12597274)),T=o.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),14207152,1727200)),C=o.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),14207152,1710618)),S=o.add(Re(i.add({bg:9058842,fg:16771232,text:"GRAND CANYON",border:16771232},4,1),6965802,9058842,16771232)),b=o.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),P=o.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),z=o.add(bi(!0)),H=o.add(bi(!1)),W=Array.from({length:16},(et,ot)=>o.add(pl(i.add({bg:1735226,fg:16777215,text:String(ot+1),border:16777215},1,1)))),J=Gs,F=[J.f150,J.cherokee,J.caprice,J.volvo240,J.golf,J.w124].map(et=>o.add(Gn(et))).concat([o.add(yi(12597274)),o.add(yi(1727160)),o.add(Wi(3836506))]),at=a.segs;for(let et=10;et<at.length;et++){const ot=at[et],tt=ot.props;if(ot.tunnel){at[et-1].tunnel||tt.push({t:x,x:0});continue}const Ct=ot.zone;et%3===0&&Ct!=="dam"&&tt.push({t:z,x:j+2.6},{t:H,x:-13.6}),et%167===100&&tt.push({t:W[Math.min(W.length-1,Math.floor(et*6/1e3))],x:j+3.6,r:-.3}),Math.abs(ot.curve)>.0016&&et%5===0&&Ct!=="dam"&&tt.push(ot.curve>0?{t:b,x:-16.5,r:.15}:{t:P,x:j+5.5,r:-.15});const K=(gt,Tt)=>{et%4===0&&t.chance(gt)&&tt.push({t:c,x:t.sign()*(j+t.range(Tt,Tt+30)),s:t.range(.8,1.3),r:t.range(0,6)}),et%6===1&&t.chance(gt*.7)&&tt.push({t:l,x:t.sign()*(j+t.range(Tt,Tt+40)),s:t.range(.8,1.4),r:t.range(0,6)}),et%7===3&&t.chance(gt)&&tt.push({t:g,x:t.sign()*(j+t.range(5,30)),s:t.range(.3,.6),sy:.6,r:t.range(0,6),tint:12099680}),et%19===0&&t.chance(.5)&&tt.push({t:f,x:t.sign()*(j+t.range(10,40)),s:t.range(.8,2),r:t.range(0,6),tint:16756880})};if(Ct==="diner")et%18===6&&t.chance(.8)&&tt.push({t:t.pick(M),x:-(j+t.range(14,18)),tint:t.pick([16777215,16771272,14217471]),r:.4}),et%18===15&&t.chance(.8)&&tt.push({t:t.pick(M),x:j+t.range(14,18),tint:t.pick([16777215,16771272,14217471]),r:-.4}),et%60===30&&tt.push({t:p,x:t.sign()*(j+t.range(40,60)),tint:t.pick([16777215,16773336]),r:t.range(-.3,.3)}),et%9===0&&tt.push({t:m,x:j+3,r:0}),et%45===20&&tt.push({t:t.pick(v),x:(et%90===20?-1:1)*(j+12),r:et%90===20?.35:-.35}),K(.25,30);else if(Ct==="painted"||Ct==="valley"){if(K(Ct==="valley"?.45:.6,6),et%30===10&&t.chance(.85)){const gt=Ct==="valley"?t.range(60,180):t.range(140,320);tt.push({t:t.pick(h),x:t.sign()*(j+gt),s:t.range(.8,1.4),sy:t.range(.8,1.3),r:t.range(0,6)})}et%70===35&&tt.push({t:t.pick(v),x:(et%140===35?-1:1)*(j+12),r:et%140===35?.35:-.35}),et%120===60&&tt.push({t:t.pick(w),x:j+3.4,r:-.2})}else Ct==="rim"?(et%2===0&&tt.push({t:_,x:j+2.4}),et%5===0&&t.chance(.5)&&tt.push({t:f,x:-(j+t.range(6,18)),y:t.range(14,18),s:t.range(.6,1.4),r:t.range(0,6),tint:16752768}),et%8===2&&t.chance(.4)&&tt.push({t:c,x:-(j+t.range(8,30)),y:16,s:t.range(.8,1.2),r:t.range(0,6)}),et%26===13&&t.chance(.7)&&tt.push({t:t.pick(h),x:j+t.range(80,260),y:0,abs:!0,s:t.range(.9,1.6),sy:t.range(1.2,2),r:t.range(0,6)})):Ct==="dam"&&(et%8===0&&tt.push({t:m,x:j+2.6,r:0}),et%8===4&&tt.push({t:m,x:-13.6,r:Math.PI}),et%70===25&&tt.push({t:u,x:j+t.range(40,70),y:34,abs:!0}))}for(let et=1;et<a.stageStarts.length;et++)at[a.stageStarts[et]+4].props.push({t:T,x:0});at[8].props.push({t:E,x:0}),at[a.stageStarts[2]+30].props.push({t:S,x:0}),at[a.stageStarts[4]+180].props.push({t:d,x:0}),at[a.goalSeg].props.push({t:C,x:0});const B=new Fs;B.addLayer(ks([[0,16769712],[1.5,16764044],[3.5,16298106],[6,14203056],[9,11061476],[14,7910632],[22,5019872],[35,2916052],[90,1727672]],Bo),0);const nt=Bs(2500,-.7,9,150,[[1.5,16771264],[1.2,16767136],[1,16773312],[.7,16776168]],20);return B.addLayer(nt,1),B.sun={obj:nt,local:Wa(2500,-.7,9)},B.addLayer(qi(t,2350,8,[16777215,16771280,14723216]),.8),B.addLayer(Bn(t,2250,10127032,220,()=>1,void 0,30),1),B.addLayer(dx(t,2100,[10109992,12081210,13661258,11557434,14715992],170,et=>Math.sin(et*3)>-.6?1:.4,26),1),B.addLayer(zs(1900,Bo),0),{track:a,profiles:n,props:o.defs,backdrop:B,trafficTypes:F,gateType:C}}},Go=14673652,Ms=[16185855,15265528],pi=[14212840,13423326],Hx=[13624562,12770542],Vx=[9079960,8158858],cr={road:[7764095,6974580],line:16777215,edge:16777215,rumble:[13642282,16777215]},Wx={id:"alps",name:"SWISS ALPS",lines:["SWISS","ALPS"],night:!1,hemi:[13162751,15265528],plate:16777215,smoke:16777215,card:[3828408,16777215],music:"alps",stageNames:["LAKESIDE VILLAGE","PINE FOREST","MOUNTAIN PASS","AVALANCHE GALLERY","GLACIER SUMMIT"],fog:{color:Go,near:160,far:1150},ambient:{color:15791359,intensity:1.8},sun:{color:16769256,intensity:2.2,dir:[.5,.8,-.7]},startTime:62,extendTime:42,shadow:8029856,trafficColors:[12593706,2771594,16777215,2779722,14196784,5921378,1710622],trafficCount:14,walls:!1,offroadLimit:j+22,build(i){var B;const t=new ii(1991),e=[ge(cr,[{w:3,c:pi,tex:ut.SAND},{w:600,c:Ms,tex:ut.SAND}],[{w:3,c:pi,tex:ut.SAND},{w:10,dy:-1.2,c:Ms,tex:ut.SAND},{w:600,dy:0,c:Hx,tex:ut.PLAIN}]),ge(cr,[{w:3,c:pi,tex:ut.SAND},{w:600,c:Ms,tex:ut.SAND}],[{w:3,c:pi,tex:ut.SAND},{w:600,c:Ms,tex:ut.SAND}]),ge(cr,[{w:2,c:pi,tex:ut.SAND},{w:3,dy:14,c:Vx,tex:ut.CONCRETE},{w:600,dy:10,c:Ms,tex:ut.SAND}],[{w:3,c:pi,tex:ut.SAND},{w:30,abs:0,c:[15002356,14213356],tex:ut.SAND},{w:600,abs:0,c:Ms,tex:ut.SAND}]),ge(cr,[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[13159120,12369604]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[{w:1,dy:.3,c:[10527402,10001058]},{w:0,dy:6.5,c:[15266047,9079956]},{w:1.2,dy:1.2,c:[11580088,11053744]}],[8027268,7500924]),ge(cr,[{w:3,c:pi,tex:ut.SAND},{w:600,dy:3,c:[14872828,13953272],tex:ut.SAND}],[{w:3,c:pi,tex:ut.SAND},{w:600,dy:-6,c:[14872828,13953272],tex:ut.SAND}])],n=(nt,et)=>et?3:nt==="lake"?0:nt==="pass"?2:nt==="summit"?4:1,s=new Us(n,10);s.zone="lake",s.straight(30),s.stageFrom({zone:"lake",length:380,curvy:.6,hilly:.1,yMin:8,yMax:12},t),s.stageFrom({zone:"forest",length:400,curvy:.8,hilly:.6,yMin:10,yMax:45},t),s.stageFrom({zone:"pass",length:420,curvy:1,hilly:1,yMin:45,yMax:110},t),s.stageFrom({zone:"gallery",length:380,curvy:.8,hilly:.4,yMin:85,yMax:115,tunnels:.45},t),s.stageFrom({zone:"summit",length:420,curvy:.7,hilly:.5,yMin:100,yMax:140},t);const r=s.finish(260),a=new Hs,o=a.add(Cx()),c=[0,1,2].map(()=>a.add(Ix(t))),l=a.add(Px()),h=a.add(Lx()),d=a.add(ul()),u=a.add(Va(15263976,6974066)),f=a.add(Os(8,16774352)),g=a.add(wr(10132644,16764992,8)),_=a.add(fl()),m=[{bg:13642282,fg:16777215,text:"ALPEN",sub:"CHOCOLAT",border:16777215},{bg:16777215,fg:13642282,text:"SKI",sub:"SCHOOL",border:13642282},{bg:1727160,fg:16777215,text:"FONDUE",sub:"STUBE",border:16769088},{bg:16769088,fg:13642282,text:"TURBO",sub:"MOTOR OIL",border:13642282},{bg:2783818,fg:16777215,text:"HOTEL",sub:"EDELWEISS",border:16777215}].map(nt=>a.add(Er(i.add(nt,2,2),9,4.5,6965802,15788248))),p=[{bg:1727160,fg:16777215,text:"ZERMATT",sub:"24",border:16777215},{bg:1727160,fg:16777215,text:"ST. MORITZ",sub:"58",border:16777215},{bg:1735226,fg:16777215,text:"PASS",sub:"2106 M",border:16777215}].map(nt=>a.add(Ha(i.add(nt,1,1)))),x=a.add(Re(i.add({bg:13642282,fg:16777215,text:"START",border:16777215},4,1),9067058,13642282)),M=a.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),9067058,1727200)),v=a.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),9067058,1710618)),w=a.add(Re(i.add({bg:13642282,fg:16777215,text:"WILLKOMMEN",border:16777215},4,1),9067058,13642282,16777215)),E=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),T=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),C=a.add(bi(!0)),S=a.add(bi(!1)),b=Array.from({length:16},(nt,et)=>a.add(pl(i.add({bg:1727160,fg:16777215,text:String(et+1),border:16777215},1,1)))),P=a.add(Xi(0)),z=Gs,H=[z.golf,z.volvo240,z.w124,z.civic,z.cherokee].map(nt=>a.add(Gn(nt))).concat([a.add(yi(13642282)),a.add(Wi(16764992)),a.add(Wi(16764992))]),W=[13642282,1727160,16769088,2787930,16743088,16777215],J=r.segs;for(let nt=10;nt<J.length;nt++){const et=J[nt],ot=et.props;if(et.tunnel){(!J[nt-1].tunnel||!((B=J[nt+1])!=null&&B.tunnel))&&ot.push({t:g,x:0,r:J[nt-1].tunnel?Math.PI:0});continue}const tt=et.zone;nt%3===0&&ot.push({t:C,x:j+2.6},{t:S,x:-13.6}),nt%2===0&&tt!=="lake"&&ot.push({t:l,x:j+3.8},{t:l,x:-14.8,r:Math.PI}),nt%167===100&&ot.push({t:b[Math.min(b.length-1,Math.floor(nt*6/1e3))],x:j+3.6,r:-.3}),Math.abs(et.curve)>.0016&&nt%5===0&&ot.push(et.curve>0?{t:E,x:-16.5,r:.15}:{t:T,x:j+5.5,r:-.15});const Ct=(K,gt)=>{for(const Tt of gt)nt%2===0&&t.chance(K)&&ot.push({t:o,x:Tt*(j+t.range(7,60)),s:t.range(.8,1.6),r:t.range(0,6)})};tt==="lake"?(Ct(.35,[-1]),nt%14===3&&t.chance(.8)&&ot.push({t:t.pick(c),x:-(j+t.range(16,40)),r:t.range(.2,.6)}),nt%9===0&&ot.push({t:f,x:-14,r:Math.PI}),nt%16===8&&ot.push({t:_,x:j+4.5,tint:t.pick([13642282,16777215])}),nt%5===2&&t.chance(.4)&&ot.push({t:P,x:-(j+t.range(2,4)),r:t.range(0,6),tint:t.pick(W)}),nt%50===25&&ot.push({t:t.pick(m),x:-23,r:.35})):tt==="forest"?(Ct(.75,[-1,1]),nt%30===12&&t.chance(.6)&&ot.push({t:t.pick(c),x:t.sign()*(j+t.range(20,50)),r:t.range(-.6,.6)}),nt%60===30&&ot.push({t:t.pick(m),x:(nt%120===30?-1:1)*(j+12),r:nt%120===30?.35:-.35}),nt%120===60&&ot.push({t:t.pick(p),x:j+3.4,r:-.2})):tt==="pass"||tt==="gallery"?(nt%2===0&&ot.push({t:u,x:j+2.4}),nt%6===0&&t.chance(.5)&&ot.push({t:o,x:-(j+t.range(8,40)),y:tt==="pass"?14:0,s:t.range(.7,1.2),r:t.range(0,6)}),nt%7===3&&t.chance(.5)&&ot.push({t:d,x:-(j+t.range(5,9)),s:t.range(.6,1.4),r:t.range(0,6),tint:11580616}),nt%9===0&&t.chance(.6)&&ot.push({t:o,x:j+t.range(30,160),y:0,abs:!0,s:t.range(1,1.8),r:t.range(0,6)}),nt%90===45&&ot.push({t:h,x:t.range(-40,40),y:t.range(40,60)}),nt%120===60&&ot.push({t:t.pick(p),x:j+3.4,r:-.2})):tt==="summit"&&(nt%2===0&&Math.abs(et.curve)>.001&&ot.push({t:u,x:j+2.4},{t:u,x:-13.4}),nt%11===0&&t.chance(.5)&&ot.push({t:d,x:t.sign()*(j+t.range(8,40)),s:t.range(.8,2.2),r:t.range(0,6),tint:13160676}),nt%80===40&&ot.push({t:h,x:t.range(-40,40),y:t.range(30,50)}),nt%16===8&&ot.push({t:_,x:t.sign()*(j+5),tint:t.pick([13642282,16777215])}))}for(let nt=1;nt<r.stageStarts.length;nt++)J[r.stageStarts[nt]+4].props.push({t:M,x:0});J[8].props.push({t:x,x:0}),J[60].props.push({t:w,x:0}),J[r.goalSeg].props.push({t:v,x:0});const F=new Fs;F.addLayer(ks([[0,16769248],[1.5,16763088],[3.5,15778008],[6,13682924],[10,11060464],[16,8696044],[26,6067424],[40,3832016],[90,2119864]],Go),0);const at=Bs(2500,.9,4,150,[[1.5,16767192],[1.2,16763064],[1,16773336],[.7,16776432]],20);return F.addLayer(at,1),F.sun={obj:at,local:Wa(2500,.9,4)},F.addLayer(qi(t,2350,10,[16777215,16773364,14207200]),.8),F.addLayer(Bn(t,2250,9083588,480,()=>1,16777215,34,[8,20]),1),F.addLayer(Bn(t,2100,6978216,300,nt=>Math.cos(nt*2)>-.3?1:.5,16054527,30),1),F.addLayer(Bn(t,1990,2775624,70,()=>1,void 0,240,[1.2,3.5]),1),F.addLayer(zs(1900,Go),0),{track:r,profiles:e,props:a.defs,backdrop:F,trafficTypes:H,gateType:v}}},Ho=2366522,h0=[6972536,6183532],u0=[3814472,3419714],d0=[4864584,4338751],_a=[9078422,8288906],Ma={road:[4079178,3552834],line:15790320,edge:15790320,rumble:[5921384,5263452]},mi=[16726666,4255999,16769088,16740400,8453984,12607743],Xx={id:"vegas",name:"LAS VEGAS STRIP",lines:["LAS VEGAS","STRIP"],night:!0,hemi:[10121440,3809344],plate:16777215,smoke:13154520,card:[1706538,16769088],music:"vegas",stageNames:["FREMONT STREET","THE STRIP","CASINO ROW","DESERT HIGHWAY","HOOVER LIGHTS"],fog:{color:Ho,near:150,far:1150},ambient:{color:13681919,intensity:1.75},sun:{color:16763104,intensity:1.5,dir:[.4,1,.8]},startTime:60,extendTime:40,shadow:2236460,trafficColors:[16777215,14692400,2763312,16769088,4235519,13656319,10132136],trafficCount:18,walls:!1,offroadLimit:j+18,build(i){const t=new ii(1955),e=[ge(Ma,[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:h0,tex:ut.PAVING},{w:600,c:u0,tex:ut.PAVING}],[{w:.3,dy:.2,c:[11579580,11053236]},{w:6,c:h0,tex:ut.PAVING},{w:600,c:u0,tex:ut.PAVING}]),ge(Ma,[{w:3,c:[5917264,5391432],tex:ut.DIRT},{w:600,c:d0,tex:ut.SAND}],[{w:3,c:[5917264,5391432],tex:ut.DIRT},{w:600,c:d0,tex:ut.SAND}]),ge(Ma,[{w:1,c:_a,tex:ut.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:_a},{w:40,abs:-20,c:[6973046,6446702],tex:ut.CONCRETE},{w:600,abs:-20,c:[1055280,923692],tex:ut.BAY}],[{w:1,c:_a,tex:ut.CONCRETE},{w:0,dy:1.1,c:[11052212,10262696]},{w:.8,c:_a},{w:0,abs:18,c:[5920358,5394014]},{w:600,abs:18,c:[924736,792634],tex:ut.BAY}]),ge(Ma,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(F,at)=>at?3:F==="desert"?1:F==="hoover"?2:0,s=new Us(n,6);s.zone="fremont",s.straight(30),s.stageFrom({zone:"fremont",length:360,curvy:.5,hilly:.05,yMin:5,yMax:7},t),s.stageFrom({zone:"strip",length:440,curvy:.45,hilly:.05,yMin:5,yMax:8},t),s.stageFrom({zone:"casino",length:400,curvy:.7,hilly:.1,yMin:5,yMax:10},t),s.stageFrom({zone:"desert",length:420,curvy:.8,hilly:.6,yMin:5,yMax:40},t),s.stageFrom({zone:"hoover",length:380,curvy:.6,hilly:.2,yMin:26,yMax:40,tunnels:.12},t);const r=s.finish(260),a=new Hs,c=[{bg:1052700,fg:16769088,text:"LUCKY 7",border:16726666},{bg:1052700,fg:4255999,text:"NEON",sub:"PALACE",border:4255999},{bg:1052700,fg:16726666,text:"DESERT",sub:"ROSE",border:16769088},{bg:1052700,fg:16769088,text:"GOLDEN",sub:"STAR",border:16769088},{bg:1052700,fg:8453984,text:"JACKPOT",border:8453984},{bg:1052700,fg:16777215,text:"SILVER",sub:"SPUR",border:12607743}].map((F,at)=>a.add(Dx(t,i.add(F,2,1),mi[at%mi.length]))),h=[{bg:1052700,fg:16726666,text:"CASINO",border:16726666},{bg:1052700,fg:16769088,text:"SLOTS",sub:"24 HOURS",border:16769088},{bg:1052700,fg:4255999,text:"BUFFET",sub:"$4.99",border:4255999},{bg:1052700,fg:16777215,text:"SHOWS",sub:"TONIGHT",border:16740400},{bg:1052700,fg:16743088,text:"WEDDING",sub:"CHAPEL",border:16743088},{bg:1052700,fg:8453984,text:"MOTEL",sub:"VACANCY",border:8453984}].map((F,at)=>a.add(Nx(i.add(F,2,2),mi[at%mi.length],mi[(at+2)%mi.length],t.range(10,18)))),d=[0,1,2].map(F=>a.add(Ux(t,mi[F*2%mi.length]))),u=a.add(hl()),f=a.add(Os(10,16765056,9079448,4,!0)),g=a.add(xu()),_=a.add(_u()),m=a.add(Mu()),p=[a.add(Xi(0)),a.add(Xi(1))],x=a.add(wr(6974072,16752688,7.9)),M=a.add(fu(16756784)),v=[{bg:1052700,fg:16769088,text:"WIN BIG",sub:"LOOSE SLOTS",border:16769088},{bg:14690858,fg:16777215,text:"LIVE",sub:"ELVIS SHOW",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:1727160,fg:16777215,text:"HOOVER DAM",sub:"TOURS",border:16769088}].map(F=>a.add(Er(i.add(F,2,2),9,4.5))),w=a.add(Re(i.add({bg:16777215,fg:14690858,text:"WELCOME TO LAS VEGAS",border:16769088},4,1),14211296,16726666,16769088)),E=a.add(Re(i.add({bg:1052700,fg:16769088,text:"START",border:16769088},4,1),10132136,16726666,16769088)),T=a.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),C=a.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),S=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),b=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),P=Gs,z=[P.caprice,P.crown,P.cherokee,P.w124,P.f150].map(F=>a.add(Gn(F,{night:!0}))).concat([a.add(Gn(P.caprice,{taxi:!0,night:!0})),a.add(Gn(P.caprice,{taxi:!0,night:!0})),a.add(Wi(16726666)),a.add(yi(2763312))]),H=[16730730,2789631,16769088,16777215,4247712,12607743],W=r.segs;for(let F=10;F<W.length;F++){const at=W[F],B=at.props;if(at.tunnel){W[F-1].tunnel||B.push({t:x,x:0});continue}const nt=at.zone;if(Math.abs(at.curve)>.0016&&F%5===0&&nt!=="strip"&&B.push(at.curve>0?{t:S,x:-16.5,r:.15}:{t:b,x:j+5.5,r:-.15}),nt==="fremont"||nt==="strip"||nt==="casino"){F%7===0&&B.push({t:f,x:j+2.4,r:0}),F%7===3&&B.push({t:f,x:-13.4,r:Math.PI}),F%6===1&&B.push({t:u,x:t.sign()*(j+t.range(4,6)),s:t.range(1,1.3),r:t.range(0,6)}),F%4===2&&t.chance(nt==="fremont"?.6:.35)&&B.push({t:t.pick(p),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(H)});const et=nt==="strip"?.7:nt==="casino"?.55:.3;F%24===0&&t.chance(et)&&B.push({t:t.pick(c),x:-(j+t.range(45,90)),r:t.range(.1,.4)}),F%24===12&&t.chance(et)&&B.push({t:t.pick(c),x:j+t.range(45,90),r:-t.range(.1,.4)}),F%10===4&&t.chance(.75)&&B.push({t:t.pick(h),x:-(j+t.range(9,14)),r:.45}),F%10===9&&t.chance(.75)&&B.push({t:t.pick(h),x:j+t.range(9,14),r:-.45}),F%16===6&&t.chance(.7)&&B.push({t:t.pick(d),x:t.sign()*(j+t.range(26,34)),r:t.range(-.3,.3)})}else nt==="desert"?(F%2===0&&B.push({t:M,x:j+2.6,y:.4},{t:M,x:-13.6,y:.4}),F%4===0&&t.chance(.5)&&B.push({t:g,x:t.sign()*(j+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),F%6===3&&t.chance(.4)&&B.push({t:_,x:t.sign()*(j+t.range(8,50)),s:t.range(.8,1.3),r:t.range(0,6),tint:10132152}),F%60===30&&B.push({t:t.pick(v),x:(F%120===30?-1:1)*(j+12),r:F%120===30?.35:-.35}),F%90===45&&B.push({t:t.pick(h),x:j+14,r:-.4})):nt==="hoover"&&(F%6===0&&B.push({t:f,x:j+2.4,r:0}),F%6===3&&B.push({t:f,x:-13.4,r:Math.PI}),F%70===25&&B.push({t:m,x:j+t.range(40,70),y:18,abs:!0}))}for(let F=1;F<r.stageStarts.length;F++)W[r.stageStarts[F]+4].props.push({t:T,x:0});W[8].props.push({t:E,x:0}),W[r.stageStarts[1]+20].props.push({t:w,x:0}),W[r.goalSeg].props.push({t:C,x:0});const J=new Fs;return J.addLayer(ks([[0,12606106],[1.5,10111638],[3.5,6961802],[6,4599930],[10,3023466],[18,1841240],[30,1052224],[90,328990]],Ho),0),J.addLayer(pu(t,340),.3),J.addLayer(Bs(2500,.8,22,60,[[1.6,4864634],[1.3,9075370],[1,16774872],[.8,16777198]],16),1),J.addLayer(qi(t,2380,6,[6961792,4860518,13654680],-Math.PI,Math.PI,[5,14]),.7),J.addLayer(Bn(t,2250,2761284,200,()=>1,void 0,34),1),J.addLayer(Xa(t,2050,[1709616,2235450,2761284],[16769120,16726666,4255999,16777215],170,F=>{const at=Math.atan2(Math.sin(F),Math.cos(F));return Math.abs(at)<1.2?1:0},.9,.5),1),J.addLayer(zs(1900,Ho),0),{track:r,profiles:e,props:a.defs,backdrop:J,trafficTypes:z,gateType:C}}},Vo=13493490,Wo=[1341640,1208512],Di=[15260868,14471352],f0=[5941322,5282882],Xo=[14207136,13417620],p0=[9083482,8293970],lr={road:[9342616,8553100],line:16777215,edge:16777215,rumble:[14690858,16777215]},qx={id:"monaco",name:"MONACO RIVIERA",lines:["MONACO","RIVIERA"],night:!1,hemi:[11065599,14207136],plate:16777215,smoke:16777215,card:[1735368,16777215],music:"riviera",stageNames:["HARBOUR FRONT","CASINO SQUARE","HARBOUR TUNNEL","CORNICHE CLIFFS","CAP MARTIN"],fog:{color:Vo,near:170,far:1180},ambient:{color:16777215,intensity:1.9},sun:{color:16774368,intensity:2.4,dir:[-.6,1,.5]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16777215,14161944,1718922,16769088,2763310,12632264,2783818],trafficCount:16,walls:!1,offroadLimit:j+14,build(i){const t=new ii(1929),e=[ge(lr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:7,c:Di,tex:ut.PAVING},{w:600,c:[14207152,13417636],tex:ut.PAVING}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:10,c:Di,tex:ut.PAVING},{w:0,abs:0,c:[13155492,12365976]},{w:600,abs:0,c:Wo,tex:ut.SEA}]),ge(lr,[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Di,tex:ut.PAVING},{w:600,c:f0,tex:ut.GRASS}],[{w:.3,dy:.2,c:[15790320,15263976]},{w:6,c:Di,tex:ut.PAVING},{w:600,c:f0,tex:ut.GRASS}]),ge(lr,[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[{w:1.2,dy:.3,c:[12105920,11579576]},{w:0,dy:5,c:[15790320,15000804]},{w:0,dy:.8,c:[16773312,9079440]},{w:1.5,dy:2.8,c:[14211292,13684948]}],[6974066,6447722]),ge(lr,[{w:2,c:Xo,tex:ut.DIRT},{w:2,dy:13,c:Xo,tex:ut.DIRT},{w:600,dy:8,c:p0,tex:ut.GRASS}],[{w:2,c:Di,tex:ut.PAVING},{w:8,abs:0,c:Xo,tex:ut.DIRT},{w:4,abs:0,c:[16777215,14742783],tex:ut.FOAM},{w:600,abs:0,c:Wo,tex:ut.SEA}]),ge(lr,[{w:2,c:Di,tex:ut.PAVING},{w:600,dy:6,c:p0,tex:ut.GRASS}],[{w:2,c:Di,tex:ut.PAVING},{w:14,abs:0,c:[13285514,12496e3],tex:ut.SAND},{w:600,abs:0,c:Wo,tex:ut.SEA}])],n=(tt,Ct)=>Ct?2:tt==="harbour"?0:tt==="square"?1:tt==="corniche"?3:4,s=new Us(n,3);s.zone="harbour",s.straight(30),s.stageFrom({zone:"harbour",length:380,curvy:.75,hilly:.05,yMin:3,yMax:4},t),s.stageFrom({zone:"square",length:380,curvy:.9,hilly:.5,yMin:4,yMax:22},t),s.stageFrom({zone:"tunnel",length:300,curvy:.6,hilly:.1,yMin:4,yMax:8,tunnels:.9,tunnelZone:"tunnel"},t),s.stageFrom({zone:"corniche",length:440,curvy:1,hilly:.6,yMin:40,yMax:80},t),s.stageFrom({zone:"cap",length:420,curvy:.75,hilly:.3,yMin:18,yMax:34},t);const r=s.finish(260),a=new Hs,o=[0,1,2,3].map(()=>a.add(Ox(t))),c=a.add(Fx()),l=[0,1,2].map(()=>a.add(kx(t))),h=a.add(zx()),d=a.add(hl()),u=a.add(hu()),f=a.add(uu()),g=[0,1].map(tt=>a.add(dl(tt,t))),_=a.add(Os(7,16774336,2767402,2)),m=a.add(Va()),p=a.add(fl()),x=a.add(lu()),M=a.add(du(t)),v=[a.add(Xi(0)),a.add(Xi(1))],w=a.add(wr(14735556,14690858,7.9)),E=[{bg:16777215,fg:14690858,text:"GELATO",sub:"ARTIGIANALE",border:14690858},{bg:1735368,fg:16777215,text:"RIVIERA",sub:"YACHT CLUB",border:16777215},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:14690858,fg:16777215,text:"GRAND",sub:"PRIX 86",border:16777215},{bg:2783818,fg:16777215,text:"HOTEL",sub:"DE PARIS",border:16769088}].map(tt=>a.add(Er(i.add(tt,2,2),9,4.5))),T=[{bg:1727160,fg:16777215,text:"NICE",sub:"18",border:16777215},{bg:1727160,fg:16777215,text:"MENTON",sub:"9",border:16777215},{bg:16777215,fg:1710618,text:"ITALIA",sub:"12",border:14690858}].map(tt=>a.add(Ha(i.add(tt,1,1)))),C=a.add(Re(i.add({bg:16777215,fg:14690858,text:"START",stripes:14690858},4,1),15790320,14690858)),S=a.add(Re(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),b=a.add(Re(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),P=a.add(Re(i.add({bg:14690858,fg:16777215,text:"BIENVENUE A MONACO",border:16777215},4,1),16777215,14690858,16777215)),z=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),H=a.add(bn(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),W=a.add(bi(!0)),J=a.add(bi(!1)),F=Gs,at=[F.golf,F.civic,F.w124,F.ae86,F.volvo240].map(tt=>a.add(Gn(tt))).concat([a.add(Wi(1735368)),a.add(yi(14690858))]),B=[16777215,1718922,14690858,16771272,4235472,16747184],nt=r.segs;for(let tt=10;tt<nt.length;tt++){const Ct=nt[tt],K=Ct.props;if(Ct.tunnel){nt[tt-1].tunnel||K.push({t:w,x:0});continue}const gt=Ct.zone;Math.abs(Ct.curve)>.0016&&tt%5===0&&gt!=="harbour"&&K.push(Ct.curve>0?{t:z,x:-16.2,r:.15}:{t:H,x:j+5.2,r:-.15}),gt==="harbour"?(tt%8===0&&K.push({t:_,x:j+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),tt%6===3&&K.push({t:d,x:-(j+t.range(4,6)),s:t.range(.9,1.2),r:t.range(0,6)}),tt%7===0&&t.chance(.8)&&K.push({t:t.pick(l),x:j+t.range(18,60),y:0,abs:!0,r:t.range(-.3,.3)+Math.PI/2}),tt%13===5&&t.chance(.6)&&K.push({t:f,x:j+t.range(70,200),y:0,abs:!0,s:t.range(.9,1.3),r:t.range(-.6,.6)}),tt%9===4&&t.chance(.85)&&K.push({t:t.pick(o),x:-(j+t.range(14,24)),tint:t.pick(Jn),r:t.range(.1,.4)}),tt%16===8&&K.push({t:p,x:j+4.5,tint:t.pick([14690858,16777215])}),tt%4===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)}),tt%40===10&&K.push({t:M,x:j+t.range(15,50),y:t.range(14,24),r:t.range(0,6)}),tt%50===25&&K.push({t:t.pick(E),x:-22,r:.35})):gt==="square"||gt==="tunnel"?(tt%30>3&&K.push({t:x,x:j+9},{t:x,x:-20}),tt%8===0&&K.push({t:_,x:j+2.6,r:0},{t:_,x:-13.6,r:Math.PI}),tt%8===4&&K.push({t:d,x:t.sign()*(j+6),s:t.range(.9,1.2),r:t.range(0,6)}),tt%22===11&&t.chance(.8)&&K.push({t:t.pick(g),x:t.sign()*(j+t.range(30,60)),tint:t.pick(Jn),r:t.range(-.3,.3)}),tt%7===2&&t.chance(.8)&&K.push({t:t.pick(o),x:t.sign()*(j+t.range(14,22)),tint:t.pick(Jn),r:t.range(-.4,.4)}),tt%5===1&&t.chance(.4)&&K.push({t:t.pick(v),x:t.sign()*(j+t.range(2,5)),r:t.range(0,6),tint:t.pick(B)}),tt%40===20&&K.push({t:t.pick(E),x:(tt%80===20?-1:1)*(j+11),r:tt%80===20?.35:-.35})):gt==="corniche"?(tt%1===0&&K.push({t:h,x:j+2.6}),tt%5===0&&t.chance(.6)&&K.push({t:c,x:-(j+t.range(6,20)),y:13,s:t.range(.8,1.2),r:t.range(0,6)}),tt%9===0&&t.chance(.5)&&K.push({t:t.pick(o),x:-(j+t.range(14,30)),y:14,tint:t.pick(Jn),r:t.range(-.4,.4)}),tt%17===0&&t.chance(.6)&&K.push({t:f,x:j+t.range(90,260),y:0,abs:!0,s:t.range(1,1.5),r:t.range(-.6,.6)}),tt%120===60&&K.push({t:t.pick(T),x:-14.2,r:.2})):(tt%3===0&&K.push({t:W,x:j+2.6},{t:J,x:-13.6}),tt%2===0&&Math.abs(Ct.curve)>.0012&&K.push({t:m,x:j+2.4}),tt%4===1&&t.chance(.55)&&K.push({t:t.chance(.5)?u:c,x:-(j+t.range(6,40)),s:t.range(.8,1.3),r:t.range(0,6)}),tt%12===6&&t.chance(.6)&&K.push({t:t.pick(o),x:-(j+t.range(18,40)),tint:t.pick(Jn),r:t.range(-.4,.4)}),tt%10===5&&t.chance(.5)&&K.push({t:d,x:j+t.range(5,9),s:t.range(.9,1.2),r:t.range(0,6)}),tt%19===0&&t.chance(.6)&&K.push({t:f,x:j+t.range(60,220),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),tt%120===60&&K.push({t:t.pick(T),x:j+3.4,r:-.2}))}for(let tt=1;tt<r.stageStarts.length;tt++)nt[r.stageStarts[tt]+4].props.push({t:S,x:0});nt[8].props.push({t:C,x:0}),nt[r.stageStarts[1]+40].props.push({t:P,x:0}),nt[r.goalSeg].props.push({t:b,x:0});const et=new Fs;et.addLayer(ks([[0,16774360],[1.4,15790304],[3,14216436],[6,11590902],[10,8440052],[16,5943534],[26,3839204],[40,2259160],[90,1333440]],Vo),0);const ot=Bs(2500,1.1,16,120,[[1.6,16775392],[1.2,16773320],[1,16776168],[.6,16777215]],20);return et.addLayer(ot,1),et.sun={obj:ot,local:Wa(2500,1.1,16)},et.addLayer(qi(t,2350,12,[16777215,16054527,13162728]),.8),et.addLayer(Bn(t,2250,9083568,260,tt=>Math.atan2(Math.sin(tt),Math.cos(tt))<.2?1:.15,void 0,30),1),et.addLayer(Bn(t,2050,4880976,120,tt=>Math.atan2(Math.sin(tt),Math.cos(tt))<0?1:0,void 0,200,[1.2,3.5]),1),et.addLayer(Xa(t,2e3,[15786184,15257776,16313560,14731432],[9085112,13148288],60,tt=>{const Ct=Math.atan2(Math.sin(tt),Math.cos(tt));return Ct<-.3&&Ct>-1.4?1:0},.6,.2),1),et.addLayer(mu(t,1880,.4,2.2,7),1),et.addLayer(gu(t,1880,1.1,160),1),et.addLayer(zs(1900,Vo),0),{track:r,profiles:e,props:a.defs,backdrop:et,trafficTypes:at,gateType:b}}};class Yx{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,c)=>{const l=document.createElement("div");return l.className=`tbtn ${a}`,l.textContent=o,this.root.appendChild(l),c&&this.btns.push({el:l,code:c}),l};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
5`,"ShiftLeft"),this.fireBtn=s("fire hidden","FIRE","KeyF"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){if(n.el.classList.contains("hidden"))continue;const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*Mt,(t.clientY-s.top)/s.height*He)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="ShiftLeft"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setFire(t){this.fireBtn.classList.contains("hidden")===t&&this.fireBtn.classList.toggle("hidden",!t)}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const va=oe.width,ya=oe.height;async function $x(){var f;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new Sg({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(va,ya,!1);const n=new Mn(54,va/ya,.5,4e3),s=[vx,Tx,Gx,Wx,Xx,qx],r=new cx,a=new Dg,o=new Nc(document.getElementById("hud")),c=new ox(s,n,r,a,o);r.onFirstInput(()=>{a.init(),a.music("title")});const l=new Yx(r,i,()=>c.touch=!0);window.addEventListener("mousedown",g=>{if(l.enabled)return;const _=i.getBoundingClientRect();r.tap((g.clientX-_.left)/_.width*852,(g.clientY-_.top)/_.height*480)}),window.game=c,(f=window.matchMedia)!=null&&f.call(window,"(pointer: coarse)").matches&&(c.touch=!0),c.nameBox=new lx(i),c.boot();const h=()=>{const g=Math.min(window.innerWidth/va,window.innerHeight/ya)||1,_=g>=3?Math.floor(g):g;i.style.width=`${Math.floor(va*_)}px`,i.style.height=`${Math.floor(ya*_)}px`};window.addEventListener("resize",h),h();let d=performance.now();const u=g=>{const _=Math.max(0,Math.min(.03333333333333333,(g-d)/1e3));d=g;const m=(c.state==="race"||c.state==="countdown")&&!c.paused;l.update(m)&&m&&(c.paused=!0),l.enabled&&(l.setTurbo(c.turbos,c.turboT>0),l.setFire(c.weapons)),c.update(_),c.draw(),r.endFrame(),e.render(c.world.scene,n),requestAnimationFrame(u)};requestAnimationFrame(u)}$x();
