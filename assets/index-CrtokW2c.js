(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="170",Zh=0,fc=1,jh=2,Kl=1,Jh=2,Nn=3,ti=0,qe=1,ue=2,Jn=0,Yi=1,Ba=2,dc=3,pc=4,Qh=5,pi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,au=202,ou=203,ka=204,Ga=205,cu=206,lu=207,hu=208,uu=209,fu=210,du=211,pu=212,mu=213,gu=214,Ha=0,Va=1,Wa=2,ji=3,Xa=4,qa=5,Ya=6,Ka=7,Gr=0,xu=1,_u=2,Qn=0,vu=1,Mu=2,yu=3,bu=4,Su=5,Eu=6,wu=7,$l=300,Ji=301,Qi=302,$a=303,Za=304,Hr=306,Lr=1e3,_i=1001,ja=1002,ke=1003,Zl=1004,Os=1005,en=1006,Kr=1007,jn=1008,kn=1009,jl=1010,Jl=1011,Rs=1012,Oo=1013,Mi=1014,Tn=1015,Is=1016,zo=1017,Bo=1018,ts=1020,Ql=35902,th=1021,eh=1022,yn=1023,nh=1024,ih=1025,Ki=1026,es=1027,ko=1028,Go=1029,sh=1030,Ho=1031,Vo=1033,Sr=33776,Er=33777,wr=33778,Tr=33779,Ja=35840,Qa=35841,to=35842,eo=35843,no=36196,io=37492,so=37496,ro=37808,ao=37809,oo=37810,co=37811,lo=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,xo=37819,_o=37820,vo=37821,Ar=36492,Mo=36494,yo=36495,rh=36283,bo=36284,So=36285,Eo=36286,Tu=3200,Au=3201,Wo=0,Ru=1,Fn="",De="srgb",is="srgb-linear",Vr="linear",he="srgb",wi=7680,mc=519,Cu=512,Pu=513,Iu=514,ah=515,Lu=516,Du=517,Uu=518,Nu=519,gc=35044,Es=35048,xc="300 es",On=2e3,Dr=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,wo=180/Math.PI;function Ls(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function Fu(i,t){return(i%t+t)%t}function Zr(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],M=s[0],m=s[3],p=s[6],g=s[1],y=s[4],v=s[7],T=s[2],E=s[5],A=s[8];return r[0]=a*M+o*g+l*T,r[3]=a*m+o*y+l*E,r[6]=a*p+o*v+l*A,r[1]=c*M+h*g+u*T,r[4]=c*m+h*y+u*E,r[7]=c*p+h*v+u*A,r[2]=f*M+d*g+x*T,r[5]=f*m+d*y+x*E,r[8]=f*p+d*v+x*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Qt;function oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){const i=Ur("canvas");return i.style.display="block",i}const _c={};function ws(i){i in _c||(_c[i]=!0,console.warn(i))}function zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ku(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?Vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],yc=[.3127,.329],bc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[is]:{primaries:vc,whitePoint:yc,transfer:Vr,toXYZ:bc,fromXYZ:Sc,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:vc,whitePoint:yc,transfer:he,toXYZ:bc,fromXYZ:Sc,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let Ti;class Gu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Ur("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hu=0;class ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jr(s[a].image)):r.push(Jr(s[a]))}else r=Jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vu=0;class Ge extends ss{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=_i,s=_i,r=en,a=jn,o=yn,l=kn,c=Ge.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ls(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=$l;Ge.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,T=(p+1)/2,E=(h+f)/4,A=(u+M)/4,C=(x+m)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=C/r),this.set(n,s,r,e),this}let g=Math.sqrt((m-x)*(m-x)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(u-M)/g,this.z=(f-h)/g,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wu extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ch(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Wu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xo extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xu extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],x=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=M;return}if(u!==M||l!==f||c!==d||h!==x){let m=1-o;const p=l*f+c*d+h*x+u*M,g=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),E=Math.atan2(T,p*g);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}const v=o*g;if(l=l*m+f*v,c=c*m+d*v,h=h*m+x*v,u=u*m+M*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-o*d,t[e+2]=c*x+h*d+o*f-l*u,t[e+3]=h*x-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qr.copy(this).projectOnVector(t),this.sub(Qr)}reflect(t){return this.sub(Qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new V,Ec=new rs;class bi{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Bs.subVectors(this.max,hs),Ai.subVectors(t.a,hs),Ri.subVectors(t.b,hs),Ci.subVectors(t.c,hs),Vn.subVectors(Ri,Ai),Wn.subVectors(Ci,Ri),si.subVectors(Ai,Ci);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!ta(e,Ai,Ri,Ci,Bs)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Ai,Ri,Ci,Bs))?!1:(ks.crossVectors(Vn,Wn),e=[ks.x,ks.y,ks.z],ta(e,Ai,Ri,Ci,Bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new V,new V,new V,new V,new V,new V,new V,new V],dn=new V,zs=new bi,Ai=new V,Ri=new V,Ci=new V,Vn=new V,Wn=new V,si=new V,hs=new V,Bs=new V,ks=new V,ri=new V;function ta(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qu=new bi,us=new V,ea=new V;class Si{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(ea)),this.expandByPoint(us.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new V,na=new V,Gs=new V,Xn=new V,ia=new V,Hs=new V,sa=new V;class qo{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){na.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=Xn.dot(this.direction),l=-Xn.dot(Gs),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){const M=1/h;u*=M,f*=M,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Gs,f),d}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){ia.subVectors(e,t),Hs.subVectors(n,t),sa.crossVectors(ia,Hs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(Hs.crossVectors(Xn,Hs));if(l<0)return null;const c=o*this.direction.dot(ia.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(sa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,x,M,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,M,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,x,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,x=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,x=c*h,M=c*u;e[0]=f+M*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,x=c*h,M=c*u;e[0]=f-M*o,e[4]=-a*u,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,x=o*h,M=o*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,x=o*l,M=o*c;e[0]=l*h,e[4]=M-f*u,e[8]=x*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-M*u}else if(t.order==="XZY"){const f=a*l,d=a*c,x=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=a*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=o*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yu,t,Ku)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),qn.crossVectors(n,je),qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),qn.crossVectors(n,je)),qn.normalize(),Vs.crossVectors(je,qn),s[0]=qn.x,s[4]=Vs.x,s[8]=je.x,s[1]=qn.y,s[5]=Vs.y,s[9]=je.y,s[2]=qn.z,s[6]=Vs.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],M=n[6],m=n[10],p=n[14],g=n[3],y=n[7],v=n[11],T=n[15],E=s[0],A=s[4],C=s[8],b=s[12],S=s[1],D=s[5],X=s[9],W=s[13],Y=s[2],it=s[6],$=s[10],ot=s[14],q=s[3],bt=s[7],wt=s[11],ut=s[15];return r[0]=a*E+o*S+l*Y+c*q,r[4]=a*A+o*D+l*it+c*bt,r[8]=a*C+o*X+l*$+c*wt,r[12]=a*b+o*W+l*ot+c*ut,r[1]=h*E+u*S+f*Y+d*q,r[5]=h*A+u*D+f*it+d*bt,r[9]=h*C+u*X+f*$+d*wt,r[13]=h*b+u*W+f*ot+d*ut,r[2]=x*E+M*S+m*Y+p*q,r[6]=x*A+M*D+m*it+p*bt,r[10]=x*C+M*X+m*$+p*wt,r[14]=x*b+M*W+m*ot+p*ut,r[3]=g*E+y*S+v*Y+T*q,r[7]=g*A+y*D+v*it+T*bt,r[11]=g*C+y*X+v*$+T*wt,r[15]=g*b+y*W+v*ot+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],M=t[7],m=t[11],p=t[15];return x*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+M*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],M=t[13],m=t[14],p=t[15],g=u*m*c-M*f*c+M*l*d-o*m*d-u*l*p+o*f*p,y=x*f*c-h*m*c-x*l*d+a*m*d+h*l*p-a*f*p,v=h*M*c-x*u*c+x*o*d-a*M*d-h*o*p+a*u*p,T=x*u*l-h*M*l-x*o*f+a*M*f+h*o*m-a*u*m,E=e*g+n*y+s*v+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(M*f*r-u*m*r-M*s*d+n*m*d+u*s*p-n*f*p)*A,t[2]=(o*m*r-M*l*r+M*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*A,t[4]=y*A,t[5]=(h*m*r-x*f*r+x*s*d-e*m*d-h*s*p+e*f*p)*A,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*A,t[8]=v*A,t[9]=(x*u*r-h*M*r-x*n*d+e*M*d+h*n*p-e*u*p)*A,t[10]=(a*M*r-x*o*r+x*n*c-e*M*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*A,t[12]=T*A,t[13]=(h*M*s-x*u*s+x*n*f-e*M*f-h*n*m+e*u*m)*A,t[14]=(x*o*s-a*M*s-x*n*l+e*M*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,x=r*u,M=a*h,m=a*u,p=o*u,g=l*c,y=l*h,v=l*u,T=n.x,E=n.y,A=n.z;return s[0]=(1-(M+p))*T,s[1]=(d+v)*T,s[2]=(x-y)*T,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(m+g)*E,s[7]=0,s[8]=(x+y)*A,s[9]=(m-g)*A,s[10]=(1-(f+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,x;if(o===On)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Dr)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let x,M;if(o===On)x=(a+r)*u,M=-2*u;else if(o===Dr)x=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new V,pn=new Ft,Yu=new V(0,0,0),Ku=new V(1,1,1),qn=new V,Vs=new V,je=new V,wc=new Ft,Tc=new rs;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $u=0;const Ac=new V,Ii=new rs,In=new Ft,Ws=new V,fs=new V,Zu=new V,ju=new rs,Rc=new V(1,0,0),Cc=new V(0,1,0),Pc=new V(0,0,1),Ic={type:"added"},Ju={type:"removed"},Li={type:"childadded",child:null},ra={type:"childremoved",child:null};class Ae extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new V,e=new ln,n=new rs,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Qt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(fs,Ws,this.up):In.lookAt(Ws,fs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(In),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ju),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new V(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new V,Ln=new V,aa=new V,Dn=new V,Di=new V,Ui=new V,Lc=new V,oa=new V,ca=new V,la=new V,ha=new be,ua=new be,fa=new be;class Mn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Ln.subVectors(n,e),aa.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Ln),l=mn.dot(aa),c=Ln.dot(Ln),h=Ln.dot(aa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ha.setScalar(0),ua.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(fa,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Ln.subVectors(t,e),mn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ui.subVectors(r,n),oa.subVectors(t,n);const l=Di.dot(oa),c=Ui.dot(oa);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,s);const h=Di.dot(ca),u=Ui.dot(ca);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Di,a);la.subVectors(t,r);const d=Di.dot(la),x=Ui.dot(la);if(x>=0&&d<=x)return e.copy(r);const M=d*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Ui,o);const m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return Lc.subVectors(r,s),o=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(Lc,o);const p=1/(m+M+f);return a=M*p,o=f*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Fu(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=da(a,r,t+1/3),this.g=da(a,r,t),this.b=da(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ie.fromWorkingColorSpace(Fe.copy(this),t),Math.round($e(Fe.r*255,0,255))*65536+Math.round($e(Fe.g*255,0,255))*256+Math.round($e(Fe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=De){ie.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Xs);const n=Zr(Yn.h,Xs.h,e),s=Zr(Yn.s,Xs.s,e),r=Zr(Yn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Lt;Lt.NAMES=hh;let Qu=0;class ni extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Ls(),this.name="",this.blending=Yi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ga,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new V,qs=new ne;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class uh extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fh extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let tf=0;const sn=new Ft,pa=new Ae,Ni=new V,Je=new bi,ds=new bi,Pe=new V;class He extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?fh:uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,ds.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,ds.max),Je.expandByPoint(Pe)):(Je.expandByPoint(ds.min),Je.expandByPoint(ds.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Pe.add(Ni)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new V,l[C]=new V;const c=new V,h=new V,u=new V,f=new ne,d=new ne,x=new ne,M=new V,m=new V;function p(C,b,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),x.sub(f);const D=1/(d.x*x.y-x.x*d.y);isFinite(D)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(D),o[C].add(M),o[b].add(M),o[S].add(M),l[C].add(m),l[b].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let C=0,b=g.length;C<b;++C){const S=g[C],D=S.start,X=S.count;for(let W=D,Y=D+X;W<Y;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const y=new V,v=new V,T=new V,E=new V;function A(C){T.fromBufferAttribute(s,C),E.copy(T);const b=o[C];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=g.length;C<b;++C){const S=g[C],D=S.start,X=S.count;for(let W=D,Y=D+X;W<Y;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){const x=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new Ft,ai=new qo,Ys=new Si,Uc=new V,Ks=new V,$s=new V,Zs=new V,ma=new V,js=new V,Nc=new V,Js=new V;class fe extends Ae{constructor(t=new He,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ma.fromBufferAttribute(u,t),a?js.addScaledVector(ma,h):js.addScaledVector(ma.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Ys.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ys,Uc)===null||ai.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Dc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){const E=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);s=Qs(this,p,t,n,c,h,u,E,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=x,p=M;m<p;m+=3){const g=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Qs(this,a,t,n,c,h,u,g,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const m=f[x],p=a[m.materialIndex],g=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=g,T=y;v<T;v+=3){const E=v,A=v+1,C=v+2;s=Qs(this,p,t,n,c,h,u,E,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=x,p=M;m<p;m+=3){const g=m,y=m+1,v=m+2;s=Qs(this,a,t,n,c,h,u,g,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ef(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,$s),i.getVertexPosition(c,Zs);const h=ef(i,t,e,n,Ks,$s,Zs,Nc);if(h){const u=new V;Mn.getBarycoord(Nc,Ks,$s,Zs,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,u,new ne)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,l,c,u,new ne)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Mn.getNormal(Ks,$s,Zs,f.normal),h.face=f,h.barycoord=u}return h}class Ds extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function x(M,m,p,g,y,v,T,E,A,C,b){const S=v/A,D=T/C,X=v/2,W=T/2,Y=E/2,it=A+1,$=C+1;let ot=0,q=0;const bt=new V;for(let wt=0;wt<$;wt++){const ut=wt*D-W;for(let Pt=0;Pt<it;Pt++){const Gt=Pt*S-X;bt[M]=Gt*g,bt[m]=ut*y,bt[p]=Y,c.push(bt.x,bt.y,bt.z),bt[M]=0,bt[m]=0,bt[p]=E>0?1:-1,h.push(bt.x,bt.y,bt.z),u.push(Pt/A),u.push(1-wt/C),ot+=1}}for(let wt=0;wt<C;wt++)for(let ut=0;ut<A;ut++){const Pt=f+ut+it*wt,Gt=f+ut+it*(wt+1),Q=f+(ut+1)+it*(wt+1),ft=f+(ut+1)+it*wt;l.push(Pt,Gt,ft),l.push(Gt,Q,ft),q+=6}o.addGroup(d,q,b),d+=q,f+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=ns(i[e]);for(const s in n)t[s]=n[s]}return t}function nf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const sf={clone:ns,merge:We};var rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ph extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new V,Fc=new ne,Oc=new ne;class cn extends ph{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Fc,Oc),e.subVectors(Oc,Fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Oi=1;class of extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Fi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new cn(Fi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new cn(Fi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new cn(Fi,Oi,t,e);o.layers=this.layers,this.add(o);const l=new cn(Fi,Oi,t,e);l.layers=this.layers,this.add(l);const c=new cn(Fi,Oi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class mh extends Ge{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cf extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ds(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Jn});r.uniforms.tEquirect.value=e;const a=new fe(s,r),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=en),new of(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ga=new V,lf=new V,hf=new Qt;class fi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ga.subVectors(n,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hf.getNormalMatrix(t),s=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Si,tr=new V;class Yo{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],M=s[10],m=s[11],p=s[12],g=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+a,f+h,m+x,v+g).normalize(),n[3].setComponents(l-a,f-h,m-x,v-g).normalize(),n[4].setComponents(l-o,f-u,m-M,v-y).normalize(),e===On)n[5].setComponents(l+o,f+u,m+M,v+y).normalize();else if(e===Dr)n[5].setComponents(o,u,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],M=u[d];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const M=u[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Wr extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],x=[],M=[],m=[];for(let p=0;p<h;p++){const g=p*f-a;for(let y=0;y<c;y++){const v=y*u-r;x.push(v,-g,0),M.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<o;g++){const y=g+c*p,v=g+c*(p+1),T=g+1+c*(p+1),E=g+1+c*p;d.push(y,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ge(x,3)),this.setAttribute("normal",new ge(M,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#endif`,hd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yd=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zd=`float getShadowMask() {
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
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,P0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,D0=`#define PHONG
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
}`,U0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,F0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,z0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,H0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,W0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ff,alphahash_pars_fragment:df,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:xf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:yf,begin_vertex:bf,beginnormal_vertex:Sf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:zf,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:Gf,colorspace_fragment:Hf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sd,envmap_vertex:Kf,fog_vertex:$f,fog_pars_vertex:Zf,fog_fragment:jf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:rd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:cd,lights_physical_fragment:ld,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:xd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:Md,map_particle_pars_fragment:yd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Ed,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:Ad,morphtarget_vertex:Rd,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Id,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:zd,opaque_fragment:Bd,packing:kd,premultiplied_alpha_fragment:Gd,project_vertex:Hd,dithering_fragment:Vd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Kd,shadowmap_vertex:$d,shadowmask_pars_fragment:Zd,skinbase_vertex:jd,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:t0,specularmap_fragment:e0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:a0,uv_pars_fragment:o0,uv_pars_vertex:c0,uv_vertex:l0,worldpos_vertex:h0,background_vert:u0,background_frag:f0,backgroundCube_vert:d0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:x0,depth_frag:_0,distanceRGBA_vert:v0,distanceRGBA_frag:M0,equirect_vert:y0,equirect_frag:b0,linedashed_vert:S0,linedashed_frag:E0,meshbasic_vert:w0,meshbasic_frag:T0,meshlambert_vert:A0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:P0,meshnormal_vert:I0,meshnormal_frag:L0,meshphong_vert:D0,meshphong_frag:U0,meshphysical_vert:N0,meshphysical_frag:F0,meshtoon_vert:O0,meshtoon_frag:z0,points_vert:B0,points_frag:k0,shadow_vert:G0,shadow_frag:H0,sprite_vert:V0,sprite_frag:W0},Et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},wn={basic:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:We([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:We([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:We([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:We([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:We([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:We([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:We([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:We([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:We([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:We([Et.common,Et.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:We([Et.lights,Et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};wn.physical={uniforms:We([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const er={r:0,b:0,g:0},ci=new ln,X0=new Ft;function q0(i,t,e,n,s,r,a){const o=new Lt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?e:t).get(y)),y}function M(g){let y=!1;const v=x(g);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(g,y){const v=x(y);v&&(v.isCubeTexture||v.mapping===Hr)?(h===void 0&&(h=new fe(new Ds(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ns(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ci.copy(y.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ci)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new fe(new Wr(2,2),new ei({name:"BackgroundMaterial",uniforms:ns(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,y){g.getRGB(er,dh(i)),n.buffers.color.setClear(er.r,er.g,er.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(o,l)},render:M,addToRenderList:m}}function Y0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,D,X,W,Y){let it=!1;const $=u(W,X,D);r!==$&&(r=$,c(r.object)),it=d(S,W,X,Y),it&&x(S,W,X,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,v(S,D,X,W),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,X){const W=X.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let it=Y[D.id];it===void 0&&(it={},Y[D.id]=it);let $=it[W];return $===void 0&&($=f(l()),it[W]=$),$}function f(S){const D=[],X=[],W=[];for(let Y=0;Y<e;Y++)D[Y]=0,X[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function d(S,D,X,W){const Y=r.attributes,it=D.attributes;let $=0;const ot=X.getAttributes();for(const q in ot)if(ot[q].location>=0){const wt=Y[q];let ut=it[q];if(ut===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),wt===void 0||wt.attribute!==ut||ut&&wt.data!==ut.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function x(S,D,X,W){const Y={},it=D.attributes;let $=0;const ot=X.getAttributes();for(const q in ot)if(ot[q].location>=0){let wt=it[q];wt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor));const ut={};ut.attribute=wt,wt&&wt.data&&(ut.data=wt.data),Y[q]=ut,$++}r.attributes=Y,r.attributesNum=$,r.index=W}function M(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const X=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;X[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),Y[S]!==D&&(i.vertexAttribDivisor(S,D),Y[S]=D)}function g(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,W=D.length;X<W;X++)D[X]!==S[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function y(S,D,X,W,Y,it,$){$===!0?i.vertexAttribIPointer(S,D,X,Y,it):i.vertexAttribPointer(S,D,X,W,Y,it)}function v(S,D,X,W){M();const Y=W.attributes,it=X.getAttributes(),$=D.defaultAttributeValues;for(const ot in it){const q=it[ot];if(q.location>=0){let bt=Y[ot];if(bt===void 0&&(ot==="instanceMatrix"&&S.instanceMatrix&&(bt=S.instanceMatrix),ot==="instanceColor"&&S.instanceColor&&(bt=S.instanceColor)),bt!==void 0){const wt=bt.normalized,ut=bt.itemSize,Pt=t.get(bt);if(Pt===void 0)continue;const Gt=Pt.buffer,Q=Pt.type,ft=Pt.bytesPerElement,yt=Q===i.INT||Q===i.UNSIGNED_INT||bt.gpuType===Oo;if(bt.isInterleavedBufferAttribute){const et=bt.data,Ct=et.stride,zt=bt.offset;if(et.isInstancedInterleavedBuffer){for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt,et.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let nt=0;nt<q.locationSize;nt++)y(q.location+nt,ut/q.locationSize,Q,wt,Ct*ft,(zt+ut/q.locationSize*nt)*ft,yt)}else{if(bt.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,bt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let et=0;et<q.locationSize;et++)y(q.location+et,ut/q.locationSize,Q,wt,ut*ft,ut/q.locationSize*et*ft,yt)}}else if($!==void 0){const wt=$[ot];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(q.location,wt);break;case 3:i.vertexAttrib3fv(q.location,wt);break;case 4:i.vertexAttrib4fv(q.location,wt);break;default:i.vertexAttrib1fv(q.location,wt)}}}}g()}function T(){C();for(const S in n){const D=n[S];for(const X in D){const W=D[X];for(const Y in W)h(W[Y].object),delete W[Y];delete D[X]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const X in D){const W=D[X];for(const Y in W)h(W[Y].object),delete W[Y];delete D[X]}delete n[S.id]}function A(S){for(const D in n){const X=n[D];if(X[S.id]===void 0)continue;const W=X[S.id];for(const Y in W)h(W[Y].object),delete W[Y];delete X[S.id]}}function C(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function K0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let M=0;M<u;M++)x+=h[M]*f[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:E}}function Z0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const g=r?0:n,y=g*4;let v=p.clippingState||null;l.value=v,v=h(x,f,y,d);for(let T=0;T!==y;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const p=d+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==M;++y,v+=4)a.copy(u[y]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function j0(i){let t=new WeakMap;function e(a,o){return o===$a?a.mapping=Ji:o===Za&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class xh extends ph{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,zc=[.125,.215,.35,.446,.526,.582],mi=20,xa=new xh,Bc=new Lt;let _a=null,va=0,Ma=0,ya=!1;const di=(1+Math.sqrt(5))/2,zi=1/di,kc=[new V(-di,zi,0),new V(di,zi,0),new V(-zi,0,di),new V(zi,0,di),new V(0,di,-zi),new V(0,di,zi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,va,Ma),this._renderer.xr.enabled=ya,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Is,format:yn,colorSpace:is,depthBuffer:!1},s=Hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J0(r)),this._blurMaterial=Q0(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s){const o=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bc),h.toneMapping=Qn,h.autoClear=!1;const d=new Xe({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),x=new fe(new Ds,d);let M=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,M=!0):(d.color.copy(Bc),M=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):g===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;nr(s,g*y,p>2?y:0,y,y),h.setRenderTarget(s),M&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kc[(s-r-1)%kc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new fe(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mi-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let g=0;for(let A=0;A<mi;++A){const C=A/M,b=Math.exp(-C*C/2);p.push(b),A===0?g+=b:A<m&&(g+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;const v=this._sizeLods[s],T=3*v*(s>y-qi?s-y+qi:0),E=4*(this._cubeSize-v);nr(e,T,E,3*v,2*v),l.setRenderTarget(e),l.render(u,xa)}}function J0(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+zc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-qi?l=zc[a-i+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,M=3,m=2,p=1,g=new Float32Array(M*x*d),y=new Float32Array(m*x*d),v=new Float32Array(p*x*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,C=E>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];g.set(b,M*x*E),y.set(f,m*x*E);const S=[E,E,E,E,E,E];v.set(S,p*x*E)}const T=new He;T.setAttribute("position",new Be(g,M)),T.setAttribute("uv",new Be(y,m)),T.setAttribute("faceIndex",new Be(v,p)),t.push(T),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hc(i,t,e){const n=new yi(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Q0(i,t,e){const n=new Float32Array(mi),s=new V(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Vc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Wc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ko(){return`

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
	`}function tp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$a||l===Za,h=l===Ji||l===Qi;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Gc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Gc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ep(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function np(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);for(const x in f.morphAttributes){const M=f.morphAttributes[x];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const x in f)t.update(f[x],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const x in d){const M=d[x];for(let m=0,p=M.length;m<p;m++)t.update(M[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,x=u.attributes.position;let M=0;if(d!==null){const g=d.array;M=d.version;for(let y=0,v=g.length;y<v;y+=3){const T=g[y+0],E=g[y+1],A=g[y+2];f.push(T,E,E,A,A,T)}}else if(x!==void 0){const g=x.array;M=x.version;for(let y=0,v=g.length/3-1;y<v;y+=3){const T=y+0,E=y+1,A=y+2;f.push(T,E,E,A,A,T)}}else return;const m=new(oh(f)?fh:uh)(f,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ip(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*a,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=d[p];e.update(m,n,1)}function u(f,d,x,M){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,M,0,x);let p=0;for(let g=0;g<x;g++)p+=d[g]*M[g];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,t,e){const n=new WeakMap,s=new be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),x===!0&&(y=2),M===!0&&(y=3);let v=o.attributes.position.count*y,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*T*4*u),A=new Xo(E,v,T,u);A.type=Tn,A.needsUpdate=!0;const C=y*4;for(let S=0;S<u;S++){const D=m[S],X=p[S],W=g[S],Y=v*T*4*S;for(let it=0;it<D.count;it++){const $=it*C;d===!0&&(s.fromBufferAttribute(D,it),E[Y+$+0]=s.x,E[Y+$+1]=s.y,E[Y+$+2]=s.z,E[Y+$+3]=0),x===!0&&(s.fromBufferAttribute(X,it),E[Y+$+4]=s.x,E[Y+$+5]=s.y,E[Y+$+6]=s.z,E[Y+$+7]=0),M===!0&&(s.fromBufferAttribute(W,it),E[Y+$+8]=s.x,E[Y+$+9]=s.y,E[Y+$+10]=s.z,E[Y+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new ne(v,T)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ap(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class _h extends Ge{constructor(t,e,n,s,r,a,o,l,c,h=Ki){if(h!==Ki&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=Mi),n===void 0&&h===es&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vh=new Ge,Xc=new _h(1,1),Mh=new Xo,yh=new Xu,bh=new mh,qc=[],Yc=[],Kc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function op(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),Ce(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),Ce(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Ce(e,n)}}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=ah,r=Xc):r=vh,e.setTexture2D(t||r,s)}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bh,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function Tp(i){switch(i){case 5126:return op;case 35664:return cp;case 35665:return lp;case 35666:return hp;case 35674:return up;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return xp;case 5125:return _p;case 36294:return vp;case 36295:return Mp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return wp}}function Ap(i,t){i.uniform1fv(this.addr,t)}function Rp(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function Cp(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function Pp(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function Ip(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lp(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dp(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Np(i,t){i.uniform2iv(this.addr,t)}function Fp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function Bp(i,t){i.uniform2uiv(this.addr,t)}function kp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Hp(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vh,r[a])}function Vp(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function Wp(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bh,r[a])}function Xp(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mh,r[a])}function qp(i){switch(i){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Ip;case 35675:return Lp;case 35676:return Dp;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Fp;case 35669:case 35673:return Op;case 5125:return zp;case 36294:return Bp;case 36295:return kp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class $p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function jc(i,t){i.seq.push(t),i.map[t.id]=t}function Zp(i,t,e){const n=i.name,s=n.length;for(ba.lastIndex=0;;){const r=ba.exec(n),a=ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jc(e,c===void 0?new Yp(o,i,t):new Kp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new $p(o),jc(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jp=37297;let Jp=0;function Qp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Qc=new Qt;function tm(i){ie._getMatrix(Qc,ie.workingColorSpace,i);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Vr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qp(i.getShaderSource(t),a)}else return s}function em(i,t){const e=tm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nm(i,t){let e;switch(t){case vu:e="Linear";break;case Mu:e="Reinhard";break;case yu:e="Cineon";break;case bu:e="ACESFilmic";break;case Eu:e="AgX";break;case wu:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new V;function im(){ie.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function rm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function el(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(i){return i.replace(om,lm)}const cm=new Map;function lm(i,t){let e=te[t];if(e===void 0){const n=cm.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return To(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(hm,um)}function um(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function fm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function dm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gr:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fm(e),c=dm(e),h=pm(e),u=mm(e),f=gm(e),d=sm(e),x=rm(r),M=s.createProgram();let m,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?te.tonemapping_pars_fragment:"",e.toneMapping!==Qn?nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,em("linearToOutputTexel",e.outputColorSpace),im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=To(a),a=el(a,e),a=nl(a,e),o=To(o),o=el(o,e),o=nl(o,e),a=il(a),o=il(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=g+m+a,v=g+p+o,T=Jc(s,s.VERTEX_SHADER,y),E=Jc(s,s.FRAGMENT_SHADER,v);s.attachShader(M,T),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(D){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),W=s.getShaderInfoLog(T).trim(),Y=s.getShaderInfoLog(E).trim();let it=!0,$=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,T,E);else{const ot=tl(s,T,"vertex"),q=tl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ot+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||Y==="")&&($=!1);$&&(D.diagnostics={runnable:it,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(T),s.deleteShader(E),C=new Rr(s,M),b=am(s,M)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(M,jp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}let _m=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mm(t),e.set(t,n)),n}}class Mm{constructor(t){this.id=_m++,this.code=t,this.usedTimes=0}}function ym(i,t,e,n,s,r,a){const o=new lh,l=new vm,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,W){const Y=X.fog,it=W.geometry,$=b.isMeshStandardMaterial?X.environment:null,ot=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),q=ot&&ot.mapping===Hr?ot.image.height:null,bt=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const wt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ut=wt!==void 0?wt.length:0;let Pt=0;it.morphAttributes.position!==void 0&&(Pt=1),it.morphAttributes.normal!==void 0&&(Pt=2),it.morphAttributes.color!==void 0&&(Pt=3);let Gt,Q,ft,yt;if(bt){const le=wn[bt];Gt=le.vertexShader,Q=le.fragmentShader}else Gt=b.vertexShader,Q=b.fragmentShader,l.update(b),ft=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);const et=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),zt=W.isInstancedMesh===!0,nt=W.isBatchedMesh===!0,Rt=!!b.map,st=!!b.matcap,$t=!!ot,U=!!b.aoMap,Ue=!!b.lightMap,Wt=!!b.bumpMap,jt=!!b.normalMap,Ht=!!b.displacementMap,se=!!b.emissiveMap,It=!!b.metalnessMap,I=!!b.roughnessMap,w=b.anisotropy>0,K=b.clearcoat>0,_=b.dispersion>0,L=b.iridescence>0,P=b.sheen>0,F=b.transmission>0,z=w&&!!b.anisotropyMap,O=K&&!!b.clearcoatMap,ct=K&&!!b.clearcoatNormalMap,B=K&&!!b.clearcoatRoughnessMap,tt=L&&!!b.iridescenceMap,lt=L&&!!b.iridescenceThicknessMap,pt=P&&!!b.sheenColorMap,at=P&&!!b.sheenRoughnessMap,xt=!!b.specularMap,vt=!!b.specularColorMap,Bt=!!b.specularIntensityMap,N=F&&!!b.transmissionMap,mt=F&&!!b.thicknessMap,J=!!b.gradientMap,rt=!!b.alphaMap,Mt=b.alphaTest>0,gt=!!b.alphaHash,Vt=!!b.extensions;let xe=Qn;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(xe=i.toneMapping);const ve={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:Gt,fragmentShader:Q,defines:b.defines,customVertexShaderID:ft,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:nt,batchingColor:nt&&W._colorsTexture!==null,instancing:zt,instancingColor:zt&&W.instanceColor!==null,instancingMorph:zt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:is,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:st,envMap:$t,envMapMode:$t&&ot.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:Ue,bumpMap:Wt,normalMap:jt,displacementMap:f&&Ht,emissiveMap:se,normalMapObjectSpace:jt&&b.normalMapType===Ru,normalMapTangentSpace:jt&&b.normalMapType===Wo,metalnessMap:It,roughnessMap:I,anisotropy:w,anisotropyMap:z,clearcoat:K,clearcoatMap:O,clearcoatNormalMap:ct,clearcoatRoughnessMap:B,dispersion:_,iridescence:L,iridescenceMap:tt,iridescenceThicknessMap:lt,sheen:P,sheenColorMap:pt,sheenRoughnessMap:at,specularMap:xt,specularColorMap:vt,specularIntensityMap:Bt,transmission:F,transmissionMap:N,thicknessMap:mt,gradientMap:J,opaque:b.transparent===!1&&b.blending===Yi&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:Mt,alphaHash:gt,combine:b.combine,mapUv:Rt&&M(b.map.channel),aoMapUv:U&&M(b.aoMap.channel),lightMapUv:Ue&&M(b.lightMap.channel),bumpMapUv:Wt&&M(b.bumpMap.channel),normalMapUv:jt&&M(b.normalMap.channel),displacementMapUv:Ht&&M(b.displacementMap.channel),emissiveMapUv:se&&M(b.emissiveMap.channel),metalnessMapUv:It&&M(b.metalnessMap.channel),roughnessMapUv:I&&M(b.roughnessMap.channel),anisotropyMapUv:z&&M(b.anisotropyMap.channel),clearcoatMapUv:O&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&M(b.sheenRoughnessMap.channel),specularMapUv:xt&&M(b.specularMap.channel),specularColorMapUv:vt&&M(b.specularColorMap.channel),specularIntensityMapUv:Bt&&M(b.specularIntensityMap.channel),transmissionMapUv:N&&M(b.transmissionMap.channel),thicknessMapUv:mt&&M(b.thicknessMap.channel),alphaMapUv:rt&&M(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(jt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!it.attributes.uv&&(Rt||rt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:W.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===he,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ue,flipSided:b.side===qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(g(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function g(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=x[b.type];let D;if(S){const X=wn[S];D=sf.clone(X.uniforms)}else D=b.uniforms;return D}function T(b,S){let D;for(let X=0,W=h.length;X<W;X++){const Y=h[X];if(Y.cacheKey===S){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new xm(i,S,b,r),h.push(D)),D}function E(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function bm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function al(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,x,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function o(u,f,d,x,M,m){const p=a(u,f,d,x,M,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,x,M,m){const p=a(u,f,d,x,M,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Sm),n.length>1&&n.sort(f||rl),s.length>1&&s.sort(f||rl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Em(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new al,i.set(n,[a])):s>=r.length?(a=new al,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Lt};break;case"SpotLight":e={position:new V,direction:new V,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Am=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i){const t=new wm,e=Tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);const s=new V,r=new Ft,a=new Ft;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,M=0,m=0,p=0,g=0,y=0,v=0,T=0,E=0,A=0;c.sort(Rm);for(let b=0,S=c.length;b<S;b++){const D=c[b],X=D.color,W=D.intensity,Y=D.distance,it=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=X.r*W,u+=X.g*W,f+=X.b*W;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],W);A++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ot=D.shadow,q=e.get(D);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=it,n.directionalShadowMatrix[d]=D.shadow.matrix,g++}n.directional[d]=$,d++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(X).multiplyScalar(W),$.distance=Y,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[M]=$;const ot=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,ot.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[M]=ot.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=it,v++}M++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(X).multiplyScalar(W),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const ot=D.shadow,q=e.get(D);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,q.shadowCameraNear=ot.camera.near,q.shadowCameraFar=ot.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=it,n.pointShadowMatrix[x]=D.shadow.matrix,y++}n.point[x]=$,x++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(W),$.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==g||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=d,C.pointLength=x,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=g,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=A,n.version=Am++)}function l(c,h){let u=0,f=0,d=0,x=0,M=0;const m=h.matrixWorldInverse;for(let p=0,g=c.length;p<g;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[M];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function ol(i){const t=new Cm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ol(i),t.set(s,[o])):r>=a.length?(o=new ol(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Im extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lm extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Nm(i,t,e){let n=new Yo;const s=new ne,r=new ne,a=new be,o=new Im({depthPacking:Au}),l=new Lm,c={},h=e.maxTextureSize,u={[ti]:qe,[qe]:ti,[ue]:ue},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Dm,fragmentShader:Um}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new He;x.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new fe(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Jn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=p!==Nn&&this.type===Nn,Y=p===Nn&&this.type!==Nn;for(let it=0,$=E.length;it<$;it++){const ot=E[it],q=ot.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const bt=q.getFrameExtents();if(s.multiply(bt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/bt.x),s.x=r.x*bt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/bt.y),s.y=r.y*bt.y,q.mapSize.y=r.y)),q.map===null||W===!0||Y===!0){const ut=this.type!==Nn?{minFilter:ke,magFilter:ke}:{};q.map!==null&&q.map.dispose(),q.map=new yi(s.x,s.y,ut),q.map.texture.name=ot.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const wt=q.getViewportCount();for(let ut=0;ut<wt;ut++){const Pt=q.getViewport(ut);a.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),X.viewport(a),q.updateMatrices(ot,ut),n=q.getFrustum(),v(A,C,q.camera,ot,this.type)}q.isPointLightShadow!==!0&&this.type===Nn&&g(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,D)};function g(E,A){const C=t.update(M);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,d,M,null)}function y(E,A,C,b){let S=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=S.uuid,W=A.uuid;let Y=c[X];Y===void 0&&(Y={},c[X]=Y);let it=Y[W];it===void 0&&(it=S.clone(),Y[W]=it,A.addEventListener("dispose",T)),S=it}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Nn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=C}return S}function v(E,A,C,b,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const W=t.update(E),Y=E.material;if(Array.isArray(Y)){const it=W.groups;for(let $=0,ot=it.length;$<ot;$++){const q=it[$],bt=Y[q.materialIndex];if(bt&&bt.visible){const wt=y(E,bt,b,S);E.onBeforeShadow(i,E,A,C,W,wt,q),i.renderBufferDirect(C,null,W,wt,E,q),E.onAfterShadow(i,E,A,C,W,wt,q)}}}else if(Y.visible){const it=y(E,Y,b,S);E.onBeforeShadow(i,E,A,C,W,it,null),i.renderBufferDirect(C,null,W,it,E,null),E.onAfterShadow(i,E,A,C,W,it,null)}}const X=E.children;for(let W=0,Y=X.length;W<Y;W++)v(X[W],A,C,b,S)}function T(E){E.target.removeEventListener("dispose",T);for(const C in c){const b=c[C],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Fm={[Ha]:Va,[Wa]:Ya,[Xa]:Ka,[ji]:qa,[Va]:Ha,[Ya]:Wa,[Ka]:Xa,[qa]:ji};function Om(i,t){function e(){let N=!1;const mt=new be;let J=null;const rt=new be(0,0,0,0);return{setMask:function(Mt){J!==Mt&&!N&&(i.colorMask(Mt,Mt,Mt,Mt),J=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,gt,Vt,xe,ve){ve===!0&&(Mt*=xe,gt*=xe,Vt*=xe),mt.set(Mt,gt,Vt,xe),rt.equals(mt)===!1&&(i.clearColor(Mt,gt,Vt,xe),rt.copy(mt))},reset:function(){N=!1,J=null,rt.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,J=null,rt=null,Mt=null;return{setReversed:function(gt){if(mt!==gt){const Vt=t.get("EXT_clip_control");mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const xe=Mt;Mt=null,this.setClear(xe)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?et(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(gt){J!==gt&&!N&&(i.depthMask(gt),J=gt)},setFunc:function(gt){if(mt&&(gt=Fm[gt]),rt!==gt){switch(gt){case Ha:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=gt}},setLocked:function(gt){N=gt},setClear:function(gt){Mt!==gt&&(mt&&(gt=1-gt),i.clearDepth(gt),Mt=gt)},reset:function(){N=!1,J=null,rt=null,Mt=null,mt=!1}}}function s(){let N=!1,mt=null,J=null,rt=null,Mt=null,gt=null,Vt=null,xe=null,ve=null;return{setTest:function(le){N||(le?et(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(le){mt!==le&&!N&&(i.stencilMask(le),mt=le)},setFunc:function(le,un,An){(J!==le||rt!==un||Mt!==An)&&(i.stencilFunc(le,un,An),J=le,rt=un,Mt=An)},setOp:function(le,un,An){(gt!==le||Vt!==un||xe!==An)&&(i.stencilOp(le,un,An),gt=le,Vt=un,xe=An)},setLocked:function(le){N=le},setClear:function(le){ve!==le&&(i.clearStencil(le),ve=le)},reset:function(){N=!1,mt=null,J=null,rt=null,Mt=null,gt=null,Vt=null,xe=null,ve=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,M=!1,m=null,p=null,g=null,y=null,v=null,T=null,E=null,A=new Lt(0,0,0),C=0,b=!1,S=null,D=null,X=null,W=null,Y=null;const it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ot=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=ot>=1):q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=ot>=2);let bt=null,wt={};const ut=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Gt=new be().fromArray(ut),Q=new be().fromArray(Pt);function ft(N,mt,J,rt){const Mt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<J;Vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return gt}const yt={};yt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(ji),Wt(!1),jt(fc),et(i.CULL_FACE),U(Jn);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function zt(N,mt){return u[N]!==mt?(i.bindFramebuffer(N,mt),u[N]=mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function nt(N,mt){let J=d,rt=!1;if(N){J=f.get(mt),J===void 0&&(J=[],f.set(mt,J));const Mt=N.textures;if(J.length!==Mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Vt=Mt.length;gt<Vt;gt++)J[gt]=i.COLOR_ATTACHMENT0+gt;J.length=Mt.length,rt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,rt=!0);rt&&i.drawBuffers(J)}function Rt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}const st={[pi]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};st[nu]=i.MIN,st[iu]=i.MAX;const $t={[su]:i.ZERO,[ru]:i.ONE,[au]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,mt,J,rt,Mt,gt,Vt,xe,ve,le){if(N===Jn){M===!0&&(Ct(i.BLEND),M=!1);return}if(M===!1&&(et(i.BLEND),M=!0),N!==Qh){if(N!==m||le!==b){if((p!==pi||v!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,v=pi),le)switch(N){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,y=null,T=null,E=null,A.set(0,0,0),C=0,m=N,b=le}return}Mt=Mt||mt,gt=gt||J,Vt=Vt||rt,(mt!==p||Mt!==v)&&(i.blendEquationSeparate(st[mt],st[Mt]),p=mt,v=Mt),(J!==g||rt!==y||gt!==T||Vt!==E)&&(i.blendFuncSeparate($t[J],$t[rt],$t[gt],$t[Vt]),g=J,y=rt,T=gt,E=Vt),(xe.equals(A)===!1||ve!==C)&&(i.blendColor(xe.r,xe.g,xe.b,ve),A.copy(xe),C=ve),m=N,b=!1}function Ue(N,mt){N.side===ue?Ct(i.CULL_FACE):et(i.CULL_FACE);let J=N.side===qe;mt&&(J=!J),Wt(J),N.blending===Yi&&N.transparent===!1?U(Jn):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const rt=N.stencilWrite;o.setTest(rt),rt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function jt(N){N!==Zh?(et(i.CULL_FACE),N!==D&&(N===fc?i.cullFace(i.BACK):N===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),D=N}function Ht(N){N!==X&&($&&i.lineWidth(N),X=N)}function se(N,mt,J){N?(et(i.POLYGON_OFFSET_FILL),(W!==mt||Y!==J)&&(i.polygonOffset(mt,J),W=mt,Y=J)):Ct(i.POLYGON_OFFSET_FILL)}function It(N){N?et(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function I(N){N===void 0&&(N=i.TEXTURE0+it-1),bt!==N&&(i.activeTexture(N),bt=N)}function w(N,mt,J){J===void 0&&(bt===null?J=i.TEXTURE0+it-1:J=bt);let rt=wt[J];rt===void 0&&(rt={type:void 0,texture:void 0},wt[J]=rt),(rt.type!==N||rt.texture!==mt)&&(bt!==J&&(i.activeTexture(J),bt=J),i.bindTexture(N,mt||yt[N]),rt.type=N,rt.texture=mt)}function K(){const N=wt[bt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(N){Gt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function at(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function xt(N,mt){let J=c.get(mt);J===void 0&&(J=new WeakMap,c.set(mt,J));let rt=J.get(N);rt===void 0&&(rt=i.getUniformBlockIndex(mt,N.name),J.set(N,rt))}function vt(N,mt){const rt=c.get(mt).get(N);l.get(mt)!==rt&&(i.uniformBlockBinding(mt,rt,N.__bindingPointIndex),l.set(mt,rt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},bt=null,wt={},u={},f=new WeakMap,d=[],x=null,M=!1,m=null,p=null,g=null,y=null,v=null,T=null,E=null,A=new Lt(0,0,0),C=0,b=!1,S=null,D=null,X=null,W=null,Y=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Ct,bindFramebuffer:zt,drawBuffers:nt,useProgram:Rt,setBlending:U,setMaterial:Ue,setFlipSided:Wt,setCullFace:jt,setLineWidth:Ht,setPolygonOffset:se,setScissorTest:It,activeTexture:I,bindTexture:w,unbindTexture:K,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:tt,texImage3D:lt,updateUBOMapping:xt,uniformBlockBinding:vt,texStorage2D:ct,texStorage3D:B,texSubImage2D:P,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:O,scissor:pt,viewport:at,reset:Bt}}function cl(i,t,e,n){const s=zm(n);switch(e){case th:return i*t;case nh:return i*t;case ih:return i*t*2;case ko:return i*t/s.components*s.byteLength;case Go:return i*t/s.components*s.byteLength;case sh:return i*t*2/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case eh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Vo:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:case eo:return Math.max(i,16)*Math.max(t,8)/4;case Ja:case to:return Math.max(i,8)*Math.max(t,8)/2;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case Mo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rh:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case kn:case jl:return{byteLength:1,components:1};case Rs:case Jl:case Is:return{byteLength:2,components:1};case zo:case Bo:return{byteLength:2,components:4};case Mi:case Oo:case Tn:return{byteLength:4,components:1};case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Bm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return d?new OffscreenCanvas(I,w):Ur("canvas")}function M(I,w,K){let _=1;const L=It(I);if((L.width>K||L.height>K)&&(_=K/Math.max(L.width,L.height)),_<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const P=Math.floor(_*L.width),F=Math.floor(_*L.height);u===void 0&&(u=x(P,F));const z=w?x(P,F):u;return z.width=P,z.height=F,z.getContext("2d").drawImage(I,0,0,P,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+P+"x"+F+")."),z}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function g(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,w,K,_,L=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let P=w;if(w===i.RED&&(K===i.FLOAT&&(P=i.R32F),K===i.HALF_FLOAT&&(P=i.R16F),K===i.UNSIGNED_BYTE&&(P=i.R8)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.R8UI),K===i.UNSIGNED_SHORT&&(P=i.R16UI),K===i.UNSIGNED_INT&&(P=i.R32UI),K===i.BYTE&&(P=i.R8I),K===i.SHORT&&(P=i.R16I),K===i.INT&&(P=i.R32I)),w===i.RG&&(K===i.FLOAT&&(P=i.RG32F),K===i.HALF_FLOAT&&(P=i.RG16F),K===i.UNSIGNED_BYTE&&(P=i.RG8)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RG8UI),K===i.UNSIGNED_SHORT&&(P=i.RG16UI),K===i.UNSIGNED_INT&&(P=i.RG32UI),K===i.BYTE&&(P=i.RG8I),K===i.SHORT&&(P=i.RG16I),K===i.INT&&(P=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RGB8UI),K===i.UNSIGNED_SHORT&&(P=i.RGB16UI),K===i.UNSIGNED_INT&&(P=i.RGB32UI),K===i.BYTE&&(P=i.RGB8I),K===i.SHORT&&(P=i.RGB16I),K===i.INT&&(P=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),K===i.UNSIGNED_INT&&(P=i.RGBA32UI),K===i.BYTE&&(P=i.RGBA8I),K===i.SHORT&&(P=i.RGBA16I),K===i.INT&&(P=i.RGBA32I)),w===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),w===i.RGBA){const F=L?Vr:ie.getTransfer(_);K===i.FLOAT&&(P=i.RGBA32F),K===i.HALF_FLOAT&&(P=i.RGBA16F),K===i.UNSIGNED_BYTE&&(P=F===he?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return(P===i.R16F||P===i.R32F||P===i.RG16F||P===i.RG32F||P===i.RGBA16F||P===i.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function v(I,w){let K;return I?w===null||w===Mi||w===ts?K=i.DEPTH24_STENCIL8:w===Tn?K=i.DEPTH32F_STENCIL8:w===Rs&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mi||w===ts?K=i.DEPTH_COMPONENT24:w===Tn?K=i.DEPTH_COMPONENT32F:w===Rs&&(K=i.DEPTH_COMPONENT16),K}function T(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ke&&I.minFilter!==en?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&h.delete(w)}function A(I){const w=I.target;w.removeEventListener("dispose",A),S(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const K=I.source,_=f.get(K);if(_){const L=_[w.__cacheKey];L.usedTimes--,L.usedTimes===0&&b(I),Object.keys(_).length===0&&f.delete(K)}n.remove(I)}function b(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const K=I.source,_=f.get(K);delete _[w.__cacheKey],a.memory.textures--}function S(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _=0;_<6;_++){if(Array.isArray(w.__webglFramebuffer[_]))for(let L=0;L<w.__webglFramebuffer[_].length;L++)i.deleteFramebuffer(w.__webglFramebuffer[_][L]);else i.deleteFramebuffer(w.__webglFramebuffer[_]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[_])}else{if(Array.isArray(w.__webglFramebuffer))for(let _=0;_<w.__webglFramebuffer.length;_++)i.deleteFramebuffer(w.__webglFramebuffer[_]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let _=0;_<w.__webglColorRenderbuffer.length;_++)w.__webglColorRenderbuffer[_]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[_]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=I.textures;for(let _=0,L=K.length;_<L;_++){const P=n.get(K[_]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(K[_])}n.remove(I)}let D=0;function X(){D=0}function W(){const I=D;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function Y(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function it(I,w){const K=n.get(I);if(I.isVideoTexture&&Ht(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const _=I.image;if(_===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(K,I,w);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function $(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){Q(K,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function ot(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){Q(K,I,w);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function q(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){ft(K,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}const bt={[Lr]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},wt={[ke]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ut={[Cu]:i.NEVER,[Nu]:i.ALWAYS,[Pu]:i.LESS,[ah]:i.LEQUAL,[Iu]:i.EQUAL,[Uu]:i.GEQUAL,[Lu]:i.GREATER,[Du]:i.NOTEQUAL};function Pt(I,w){if(w.type===Tn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===en||w.magFilter===Kr||w.magFilter===Os||w.magFilter===jn||w.minFilter===en||w.minFilter===Kr||w.minFilter===Os||w.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,bt[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,bt[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,bt[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,wt[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,wt[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ut[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ke||w.minFilter!==Os&&w.minFilter!==jn||w.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Gt(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const _=w.source;let L=f.get(_);L===void 0&&(L={},f.set(_,L));const P=Y(w);if(P!==I.__cacheKey){L[P]===void 0&&(L[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),L[P].usedTimes++;const F=L[I.__cacheKey];F!==void 0&&(L[I.__cacheKey].usedTimes--,F.usedTimes===0&&b(w)),I.__cacheKey=P,I.__webglTexture=L[P].texture}return K}function Q(I,w,K){let _=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_=i.TEXTURE_3D);const L=Gt(I,w),P=w.source;e.bindTexture(_,I.__webglTexture,i.TEXTURE0+K);const F=n.get(P);if(P.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+K);const z=ie.getPrimaries(ie.workingColorSpace),O=w.colorSpace===Fn?null:ie.getPrimaries(w.colorSpace),ct=w.colorSpace===Fn||z===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let B=M(w.image,!1,s.maxTextureSize);B=se(w,B);const tt=r.convert(w.format,w.colorSpace),lt=r.convert(w.type);let pt=y(w.internalFormat,tt,lt,w.colorSpace,w.isVideoTexture);Pt(_,w);let at;const xt=w.mipmaps,vt=w.isVideoTexture!==!0,Bt=F.__version===void 0||L===!0,N=P.dataReady,mt=T(w,B);if(w.isDepthTexture)pt=v(w.format===es,w.type),Bt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,pt,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,pt,B.width,B.height,0,tt,lt,null));else if(w.isDataTexture)if(xt.length>0){vt&&Bt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,xt[0].width,xt[0].height);for(let J=0,rt=xt.length;J<rt;J++)at=xt[J],vt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,tt,lt,at.data):e.texImage2D(i.TEXTURE_2D,J,pt,at.width,at.height,0,tt,lt,at.data);w.generateMipmaps=!1}else vt?(Bt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,B.width,B.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,tt,lt,B.data)):e.texImage2D(i.TEXTURE_2D,0,pt,B.width,B.height,0,tt,lt,B.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){vt&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,xt[0].width,xt[0].height,B.depth);for(let J=0,rt=xt.length;J<rt;J++)if(at=xt[J],w.format!==yn)if(tt!==null)if(vt){if(N)if(w.layerUpdates.size>0){const Mt=cl(at.width,at.height,w.format,w.type);for(const gt of w.layerUpdates){const Vt=at.data.subarray(gt*Mt/at.data.BYTES_PER_ELEMENT,(gt+1)*Mt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,gt,at.width,at.height,1,tt,Vt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,B.depth,tt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,pt,at.width,at.height,B.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,B.depth,tt,lt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,pt,at.width,at.height,B.depth,0,tt,lt,at.data)}else{vt&&Bt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,xt[0].width,xt[0].height);for(let J=0,rt=xt.length;J<rt;J++)at=xt[J],w.format!==yn?tt!==null?vt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,tt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,J,pt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at.width,at.height,tt,lt,at.data):e.texImage2D(i.TEXTURE_2D,J,pt,at.width,at.height,0,tt,lt,at.data)}else if(w.isDataArrayTexture)if(vt){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,B.width,B.height,B.depth),N)if(w.layerUpdates.size>0){const J=cl(B.width,B.height,w.format,w.type);for(const rt of w.layerUpdates){const Mt=B.data.subarray(rt*J/B.data.BYTES_PER_ELEMENT,(rt+1)*J/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,B.width,B.height,1,tt,lt,Mt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,tt,lt,B.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,B.width,B.height,B.depth,0,tt,lt,B.data);else if(w.isData3DTexture)vt?(Bt&&e.texStorage3D(i.TEXTURE_3D,mt,pt,B.width,B.height,B.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,tt,lt,B.data)):e.texImage3D(i.TEXTURE_3D,0,pt,B.width,B.height,B.depth,0,tt,lt,B.data);else if(w.isFramebufferTexture){if(Bt)if(vt)e.texStorage2D(i.TEXTURE_2D,mt,pt,B.width,B.height);else{let J=B.width,rt=B.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,pt,J,rt,0,tt,lt,null),J>>=1,rt>>=1}}else if(xt.length>0){if(vt&&Bt){const J=It(xt[0]);e.texStorage2D(i.TEXTURE_2D,mt,pt,J.width,J.height)}for(let J=0,rt=xt.length;J<rt;J++)at=xt[J],vt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,tt,lt,at):e.texImage2D(i.TEXTURE_2D,J,pt,tt,lt,at);w.generateMipmaps=!1}else if(vt){if(Bt){const J=It(B);e.texStorage2D(i.TEXTURE_2D,mt,pt,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,lt,B)}else e.texImage2D(i.TEXTURE_2D,0,pt,tt,lt,B);m(w)&&p(_),F.__version=P.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ft(I,w,K){if(w.image.length!==6)return;const _=Gt(I,w),L=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const P=n.get(L);if(L.version!==P.__version||_===!0){e.activeTexture(i.TEXTURE0+K);const F=ie.getPrimaries(ie.workingColorSpace),z=w.colorSpace===Fn?null:ie.getPrimaries(w.colorSpace),O=w.colorSpace===Fn||F===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,B=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!ct&&!B?tt[rt]=M(w.image[rt],!0,s.maxCubemapSize):tt[rt]=B?w.image[rt].image:w.image[rt],tt[rt]=se(w,tt[rt]);const lt=tt[0],pt=r.convert(w.format,w.colorSpace),at=r.convert(w.type),xt=y(w.internalFormat,pt,at,w.colorSpace),vt=w.isVideoTexture!==!0,Bt=P.__version===void 0||_===!0,N=L.dataReady;let mt=T(w,lt);Pt(i.TEXTURE_CUBE_MAP,w);let J;if(ct){vt&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,xt,lt.width,lt.height);for(let rt=0;rt<6;rt++){J=tt[rt].mipmaps;for(let Mt=0;Mt<J.length;Mt++){const gt=J[Mt];w.format!==yn?pt!==null?vt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,0,0,gt.width,gt.height,pt,at,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt,xt,gt.width,gt.height,0,pt,at,gt.data)}}}else{if(J=w.mipmaps,vt&&Bt){J.length>0&&mt++;const rt=It(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,xt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(B){vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,pt,at,tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,tt[rt].width,tt[rt].height,0,pt,at,tt[rt].data);for(let Mt=0;Mt<J.length;Mt++){const Vt=J[Mt].image[rt].image;vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,0,0,Vt.width,Vt.height,pt,at,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,xt,Vt.width,Vt.height,0,pt,at,Vt.data)}}else{vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt,at,tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,xt,pt,at,tt[rt]);for(let Mt=0;Mt<J.length;Mt++){const gt=J[Mt];vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,0,0,pt,at,gt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Mt+1,xt,pt,at,gt.image[rt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),P.__version=L.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function yt(I,w,K,_,L,P){const F=r.convert(K.format,K.colorSpace),z=r.convert(K.type),O=y(K.internalFormat,F,z,K.colorSpace),ct=n.get(w),B=n.get(K);if(B.__renderTarget=w,!ct.__hasExternalTextures){const tt=Math.max(1,w.width>>P),lt=Math.max(1,w.height>>P);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?e.texImage3D(L,P,O,tt,lt,w.depth,0,F,z,null):e.texImage2D(L,P,O,tt,lt,0,F,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),jt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_,L,B.__webglTexture,0,Wt(w)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_,L,B.__webglTexture,P),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const _=w.depthTexture,L=_&&_.isDepthTexture?_.type:null,P=v(w.stencilBuffer,L),F=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=Wt(w);jt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,P,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,P,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,P,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,I)}else{const _=w.textures;for(let L=0;L<_.length;L++){const P=_[L],F=r.convert(P.format,P.colorSpace),z=r.convert(P.type),O=y(P.internalFormat,F,z,P.colorSpace),ct=Wt(w);K&&jt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,O,w.width,w.height):jt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,O,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,O,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _=n.get(w.depthTexture);_.__renderTarget=w,(!_.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),it(w.depthTexture,0);const L=_.__webglTexture,P=Wt(w);if(w.depthTexture.format===Ki)jt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(w.depthTexture.format===es)jt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,P):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function zt(I){const w=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const _=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),_){const L=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,_.removeEventListener("dispose",L)};_.addEventListener("dispose",L),w.__depthDisposeCallback=L}w.__boundDepthTexture=_}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,I)}else if(K){w.__webglDepthbuffer=[];for(let _=0;_<6;_++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[_]),w.__webglDepthbuffer[_]===void 0)w.__webglDepthbuffer[_]=i.createRenderbuffer(),et(w.__webglDepthbuffer[_],I,!1);else{const L=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=w.__webglDepthbuffer[_];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,P)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),et(w.__webglDepthbuffer,I,!1);else{const _=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,_,i.RENDERBUFFER,L)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(I,w,K){const _=n.get(I);w!==void 0&&yt(_.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&zt(I)}function Rt(I){const w=I.texture,K=n.get(I),_=n.get(w);I.addEventListener("dispose",A);const L=I.textures,P=I.isWebGLCubeRenderTarget===!0,F=L.length>1;if(F||(_.__webglTexture===void 0&&(_.__webglTexture=i.createTexture()),_.__version=w.version,a.memory.textures++),P){K.__webglFramebuffer=[];for(let z=0;z<6;z++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[z]=[];for(let O=0;O<w.mipmaps.length;O++)K.__webglFramebuffer[z][O]=i.createFramebuffer()}else K.__webglFramebuffer[z]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let z=0;z<w.mipmaps.length;z++)K.__webglFramebuffer[z]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(F)for(let z=0,O=L.length;z<O;z++){const ct=n.get(L[z]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&jt(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let z=0;z<L.length;z++){const O=L[z];K.__webglColorRenderbuffer[z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[z]);const ct=r.convert(O.format,O.colorSpace),B=r.convert(O.type),tt=y(O.internalFormat,ct,B,O.colorSpace,I.isXRRenderTarget===!0),lt=Wt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,K.__webglColorRenderbuffer[z])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),et(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){e.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,w);for(let z=0;z<6;z++)if(w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)yt(K.__webglFramebuffer[z][O],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,O);else yt(K.__webglFramebuffer[z],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let z=0,O=L.length;z<O;z++){const ct=L[z],B=n.get(ct);e.bindTexture(i.TEXTURE_2D,B.__webglTexture),Pt(i.TEXTURE_2D,ct),yt(K.__webglFramebuffer,I,ct,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,0),m(ct)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(z=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(z,_.__webglTexture),Pt(z,w),w.mipmaps&&w.mipmaps.length>0)for(let O=0;O<w.mipmaps.length;O++)yt(K.__webglFramebuffer[O],I,w,i.COLOR_ATTACHMENT0,z,O);else yt(K.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,z,0);m(w)&&p(z),e.unbindTexture()}I.depthBuffer&&zt(I)}function st(I){const w=I.textures;for(let K=0,_=w.length;K<_;K++){const L=w[K];if(m(L)){const P=g(I),F=n.get(L).__webglTexture;e.bindTexture(P,F),p(P),e.unbindTexture()}}}const $t=[],U=[];function Ue(I){if(I.samples>0){if(jt(I)===!1){const w=I.textures,K=I.width,_=I.height;let L=i.COLOR_BUFFER_BIT;const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(I),z=w.length>1;if(z)for(let O=0;O<w.length;O++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let O=0;O<w.length;O++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const ct=n.get(w[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,K,_,0,0,K,_,L,i.NEAREST),l===!0&&($t.length=0,U.length=0,$t.push(i.COLOR_ATTACHMENT0+O),I.depthBuffer&&I.resolveDepthBuffer===!1&&($t.push(P),U.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),z)for(let O=0;O<w.length;O++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const ct=n.get(w[O]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Wt(I){return Math.min(s.maxSamples,I.samples)}function jt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(I){const w=a.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function se(I,w){const K=I.colorSpace,_=I.format,L=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==is&&K!==Fn&&(ie.getTransfer(K)===he?(_!==yn||L!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=it,this.setTexture2DArray=$,this.setTexture3D=ot,this.setTextureCube=q,this.rebindTextures=nt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=jt}function km(i,t){function e(n,s=Fn){let r;const a=ie.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===eh)return i.RGB;if(n===yn)return i.RGBA;if(n===nh)return i.LUMINANCE;if(n===ih)return i.LUMINANCE_ALPHA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===ko)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===sh)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Vo)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Tr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===io)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Mo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===bo||n===So||n===Eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gm extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
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

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:Vm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qm extends ss{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null;const M=new Xm,m=e.getContextAttributes();let p=null,g=null;const y=[],v=[],T=new ne;let E=null;const A=new cn;A.viewport=new be;const C=new cn;C.viewport=new be;const b=[A,C],S=new Gm;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Sa,y[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Sa,y[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=y[Q];return ft===void 0&&(ft=new Sa,y[Q]=ft),ft.getHandSpace()};function W(Q){const ft=v.indexOf(Q.inputSource);if(ft===-1)return;const yt=y[ft];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,c||a),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let Q=0;Q<y.length;Q++){const ft=v[Q];ft!==null&&(v[Q]=null,y[Q].disconnect(ft))}D=null,X=null,M.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,g=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const ft={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new yi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ft=null,yt=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=m.stencil?es:Ki,yt=m.stencil?ts:Mi);const Ct={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new yi(f.textureWidth,f.textureHeight,{format:yn,type:kn,depthTexture:new _h(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function it(Q){for(let ft=0;ft<Q.removed.length;ft++){const yt=Q.removed[ft],et=v.indexOf(yt);et>=0&&(v[et]=null,y[et].disconnect(yt))}for(let ft=0;ft<Q.added.length;ft++){const yt=Q.added[ft];let et=v.indexOf(yt);if(et===-1){for(let zt=0;zt<y.length;zt++)if(zt>=v.length){v.push(yt),et=zt;break}else if(v[zt]===null){v[zt]=yt,et=zt;break}if(et===-1)break}const Ct=y[et];Ct&&Ct.connect(yt)}}const $=new V,ot=new V;function q(Q,ft,yt){$.setFromMatrixPosition(ft.matrixWorld),ot.setFromMatrixPosition(yt.matrixWorld);const et=$.distanceTo(ot),Ct=ft.projectionMatrix.elements,zt=yt.projectionMatrix.elements,nt=Ct[14]/(Ct[10]-1),Rt=Ct[14]/(Ct[10]+1),st=(Ct[9]+1)/Ct[5],$t=(Ct[9]-1)/Ct[5],U=(Ct[8]-1)/Ct[0],Ue=(zt[8]+1)/zt[0],Wt=nt*U,jt=nt*Ue,Ht=et/(-U+Ue),se=Ht*-U;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(Ht),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ct[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const It=nt+Ht,I=Rt+Ht,w=Wt-se,K=jt+(et-se),_=st*Rt/I*It,L=$t*Rt/I*It;Q.projectionMatrix.makePerspective(w,K,_,L,It,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function bt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,yt=Q.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),S.near=C.near=A.near=ft,S.far=C.far=A.far=yt,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),A.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;const et=Q.parent,Ct=S.cameras;bt(S,et);for(let zt=0;zt<Ct.length;zt++)bt(Ct[zt],et);Ct.length===2?q(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),wt(Q,S,et)};function wt(Q,ft,yt){yt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=wo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let ut=null;function Pt(Q,ft){if(h=ft.getViewerPose(c||a),x=ft,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let et=!1;yt.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let zt=0;zt<yt.length;zt++){const nt=yt[zt];let Rt=null;if(d!==null)Rt=d.getViewport(nt);else{const $t=u.getViewSubImage(f,nt);Rt=$t.viewport,zt===0&&(t.setRenderTargetTextures(g,$t.colorTexture,f.ignoreDepthValues?void 0:$t.depthStencilTexture),t.setRenderTarget(g))}let st=b[zt];st===void 0&&(st=new cn,st.layers.enable(zt),st.viewport=new be,b[zt]=st),st.matrix.fromArray(nt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(nt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),zt===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(st)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const zt=u.getDepthInformation(yt[0]);zt&&zt.isValid&&zt.texture&&M.init(t,zt,s.renderState)}}for(let yt=0;yt<y.length;yt++){const et=v[yt],Ct=y[yt];et!==null&&Ct!==void 0&&Ct.update(et,ft,c||a)}ut&&ut(Q,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),x=null}const Gt=new gh;Gt.setAnimationLoop(Pt),this.setAnimationLoop=function(Q){ut=Q},this.dispose=function(){}}}const li=new ln,Ym=new Ft;function Km(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,g,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,g,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const g=t.get(p),y=g.envMap,v=g.envMapRotation;y&&(m.envMap.value=y,li.copy(v),li.x*=-1,li.y*=-1,li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(li)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,g,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*g,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,g){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const g=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const v=y.program;n.uniformBlockBinding(g,v)}function c(g,y){let v=s[g.id];v===void 0&&(x(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));const T=y.program;n.updateUBOMapping(g,T);const E=t.render.frame;r[g.id]!==E&&(f(g),r[g.id]=E)}function h(g){const y=u();g.__bindingPointIndex=y;const v=i.createBuffer(),T=g.__size,E=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const y=s[g.id],v=g.uniforms,T=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=v.length;E<A;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,S=C.length;b<S;b++){const D=C[b];if(d(D,E,b,T)===!0){const X=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let it=0;it<W.length;it++){const $=W[it],ot=M($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,Y),Y+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,y,v,T){const E=g.value,A=y+"_"+v;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{const C=T[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function x(g){const y=g.uniforms;let v=0;const T=16;for(let A=0,C=y.length;A<C;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,D=b.length;S<D;S++){const X=b[S],W=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,it=W.length;Y<it;Y++){const $=W[Y],ot=M($),q=v%T,bt=q%ot.boundary,wt=q+bt;v+=bt,wt!==0&&T-wt<ot.storage&&(v+=T-wt),X.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=ot.storage}}}const E=v%T;return E>0&&(v+=T-E),g.__size=v,g.__cache={},this}function M(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const g in s)i.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Zm{constructor(t={}){const{canvas:e=Ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const x=new Uint32Array(4),M=new Int32Array(4);let m=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Qn,this.toneMappingExposure=1;const v=this;let T=!1,E=0,A=0,C=null,b=-1,S=null;const D=new be,X=new be;let W=null;const Y=new Lt(0);let it=0,$=e.width,ot=e.height,q=1,bt=null,wt=null;const ut=new be(0,0,$,ot),Pt=new be(0,0,$,ot);let Gt=!1;const Q=new Yo;let ft=!1,yt=!1;const et=new Ft,Ct=new Ft,zt=new V,nt=new be,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function $t(){return C===null?q:1}let U=n;function Ue(R,k){return e.getContext(R,k)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){const k="webgl2";if(U=Ue(k,R),U===null)throw Ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Wt,jt,Ht,se,It,I,w,K,_,L,P,F,z,O,ct,B,tt,lt,pt,at,xt,vt,Bt,N;function mt(){Wt=new ep(U),Wt.init(),vt=new km(U,Wt),jt=new $0(U,Wt,t,vt),Ht=new Om(U,Wt),jt.reverseDepthBuffer&&f&&Ht.buffers.depth.setReversed(!0),se=new sp(U),It=new bm,I=new Bm(U,Wt,Ht,It,jt,vt,se),w=new j0(v),K=new tp(v),_=new uf(U),Bt=new Y0(U,_),L=new np(U,_,se,Bt),P=new ap(U,L,_,se),pt=new rp(U,jt,I),B=new Z0(It),F=new ym(v,w,K,Wt,jt,Bt,B),z=new Km(v,It),O=new Em,ct=new Pm(Wt),lt=new q0(v,w,K,Ht,P,d,l),tt=new Nm(v,P,jt),N=new $m(U,se,jt,Ht),at=new K0(U,Wt,se),xt=new ip(U,Wt,se),se.programs=F.programs,v.capabilities=jt,v.extensions=Wt,v.properties=It,v.renderLists=O,v.shadowMap=tt,v.state=Ht,v.info=se}mt();const J=new qm(v,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize($,ot,!1))},this.getSize=function(R){return R.set($,ot)},this.setSize=function(R,k,Z=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,ot=k,e.width=Math.floor(R*q),e.height=Math.floor(k*q),Z===!0&&(e.style.width=R+"px",e.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set($*q,ot*q).floor()},this.setDrawingBufferSize=function(R,k,Z){$=R,ot=k,q=Z,e.width=Math.floor(R*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ut)},this.setViewport=function(R,k,Z,j){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,k,Z,j),Ht.viewport(D.copy(ut).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Pt)},this.setScissor=function(R,k,Z,j){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,k,Z,j),Ht.scissor(X.copy(Pt).multiplyScalar(q).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(R){Ht.setScissorTest(Gt=R)},this.setOpaqueSort=function(R){bt=R},this.setTransparentSort=function(R){wt=R},this.getClearColor=function(R){return R.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(R=!0,k=!0,Z=!0){let j=0;if(R){let H=!1;if(C!==null){const _t=C.texture.format;H=_t===Vo||_t===Ho||_t===Go}if(H){const _t=C.texture.type,At=_t===kn||_t===Mi||_t===Rs||_t===ts||_t===zo||_t===Bo,Dt=lt.getClearColor(),Ut=lt.getClearAlpha(),Kt=Dt.r,Jt=Dt.g,Nt=Dt.b;At?(x[0]=Kt,x[1]=Jt,x[2]=Nt,x[3]=Ut,U.clearBufferuiv(U.COLOR,0,x)):(M[0]=Kt,M[1]=Jt,M[2]=Nt,M[3]=Ut,U.clearBufferiv(U.COLOR,0,M))}else j|=U.COLOR_BUFFER_BIT}k&&(j|=U.DEPTH_BUFFER_BIT),Z&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),O.dispose(),ct.dispose(),It.dispose(),w.dispose(),K.dispose(),P.dispose(),Bt.dispose(),N.dispose(),F.dispose(),J.dispose(),J.removeEventListener("sessionstart",sc),J.removeEventListener("sessionend",rc),ii.stop()};function rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=se.autoReset,k=tt.enabled,Z=tt.autoUpdate,j=tt.needsUpdate,H=tt.type;mt(),se.autoReset=R,tt.enabled=k,tt.autoUpdate=Z,tt.needsUpdate=j,tt.type=H}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Vt(R){const k=R.target;k.removeEventListener("dispose",Vt),xe(k)}function xe(R){ve(R),It.remove(R)}function ve(R){const k=It.get(R).programs;k!==void 0&&(k.forEach(function(Z){F.releaseProgram(Z)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,Z,j,H,_t){k===null&&(k=Rt);const At=H.isMesh&&H.matrixWorld.determinant()<0,Dt=Yh(R,k,Z,j,H);Ht.setMaterial(j,At);let Ut=Z.index,Kt=1;if(j.wireframe===!0){if(Ut=L.getWireframeAttribute(Z),Ut===void 0)return;Kt=2}const Jt=Z.drawRange,Nt=Z.attributes.position;let re=Jt.start*Kt,de=(Jt.start+Jt.count)*Kt;_t!==null&&(re=Math.max(re,_t.start*Kt),de=Math.min(de,(_t.start+_t.count)*Kt)),Ut!==null?(re=Math.max(re,0),de=Math.min(de,Ut.count)):Nt!=null&&(re=Math.max(re,0),de=Math.min(de,Nt.count));const pe=de-re;if(pe<0||pe===1/0)return;Bt.setup(H,j,Dt,Z,Ut);let Ye,oe=at;if(Ut!==null&&(Ye=_.get(Ut),oe=xt,oe.setIndex(Ye)),H.isMesh)j.wireframe===!0?(Ht.setLineWidth(j.wireframeLinewidth*$t()),oe.setMode(U.LINES)):oe.setMode(U.TRIANGLES);else if(H.isLine){let kt=j.linewidth;kt===void 0&&(kt=1),Ht.setLineWidth(kt*$t()),H.isLineSegments?oe.setMode(U.LINES):H.isLineLoop?oe.setMode(U.LINE_LOOP):oe.setMode(U.LINE_STRIP)}else H.isPoints?oe.setMode(U.POINTS):H.isSprite&&oe.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,Rn=H._multiDrawCounts,ce=H._multiDrawCount,fn=Ut?_.get(Ut).bytesPerElement:1,Ei=It.get(j).currentProgram.getUniforms();for(let Ze=0;Ze<ce;Ze++)Ei.setValue(U,"_gl_DrawID",Ze),oe.render(kt[Ze]/fn,Rn[Ze])}else if(H.isInstancedMesh)oe.renderInstances(re,pe,H.count);else if(Z.isInstancedBufferGeometry){const kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Rn=Math.min(Z.instanceCount,kt);oe.renderInstances(re,pe,Rn)}else oe.render(re,pe)};function le(R,k,Z){R.transparent===!0&&R.side===ue&&R.forceSinglePass===!1?(R.side=qe,R.needsUpdate=!0,Fs(R,k,Z),R.side=ti,R.needsUpdate=!0,Fs(R,k,Z),R.side=ue):Fs(R,k,Z)}this.compile=function(R,k,Z=null){Z===null&&(Z=R),p=ct.get(Z),p.init(k),y.push(p),Z.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),R!==Z&&R.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){const Dt=_t[At];le(Dt,Z,H),j.add(Dt)}else le(_t,Z,H),j.add(_t)}),y.pop(),p=null,j},this.compileAsync=function(R,k,Z=null){const j=this.compile(R,k,Z);return new Promise(H=>{function _t(){if(j.forEach(function(At){It.get(At).currentProgram.isReady()&&j.delete(At)}),j.size===0){H(R);return}setTimeout(_t,10)}Wt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let un=null;function An(R){un&&un(R)}function sc(){ii.stop()}function rc(){ii.start()}const ii=new gh;ii.setAnimationLoop(An),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(R){un=R,J.setAnimationLoop(R),R===null?ii.stop():ii.start()},J.addEventListener("sessionstart",sc),J.addEventListener("sessionend",rc),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,k,C),p=ct.get(R,y.length),p.init(k),y.push(p),Ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,ft=B.init(this.clippingPlanes,yt),m=O.get(R,g.length),m.init(),g.push(m),J.enabled===!0&&J.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&Yr(_t,k,-1/0,v.sortObjects)}Yr(R,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(bt,wt),st=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,st&&lt.addToRenderList(m,R),this.info.render.frame++,ft===!0&&B.beginShadows();const Z=p.state.shadowsArray;tt.render(Z,R,k),ft===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const _t=k.cameras;if(H.length>0)for(let At=0,Dt=_t.length;At<Dt;At++){const Ut=_t[At];oc(j,H,R,Ut)}st&&lt.render(R);for(let At=0,Dt=_t.length;At<Dt;At++){const Ut=_t[At];ac(m,R,Ut,Ut.viewport)}}else H.length>0&&oc(j,H,R,k),st&&lt.render(R),ac(m,R,k);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,k),Bt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ft===!0&&B.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Yr(R,k,Z,j){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){j&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const At=P.update(R),Dt=R.material;Dt.visible&&m.push(R,At,Dt,Z,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const At=P.update(R),Dt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),nt.copy(At.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const Ut=At.groups;for(let Kt=0,Jt=Ut.length;Kt<Jt;Kt++){const Nt=Ut[Kt],re=Dt[Nt.materialIndex];re&&re.visible&&m.push(R,At,re,Z,nt.z,Nt)}}else Dt.visible&&m.push(R,At,Dt,Z,nt.z,null)}}const _t=R.children;for(let At=0,Dt=_t.length;At<Dt;At++)Yr(_t[At],k,Z,j)}function ac(R,k,Z,j){const H=R.opaque,_t=R.transmissive,At=R.transparent;p.setupLightsView(Z),ft===!0&&B.setGlobalState(v.clippingPlanes,Z),j&&Ht.viewport(D.copy(j)),H.length>0&&Ns(H,k,Z),_t.length>0&&Ns(_t,k,Z),At.length>0&&Ns(At,k,Z),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function oc(R,k,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new yi(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Is:kn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const _t=p.state.transmissionRenderTarget[j.id],At=j.viewport||D;_t.setSize(At.z,At.w);const Dt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(Y),it=v.getClearAlpha(),it<1&&v.setClearColor(16777215,.5),v.clear(),st&&lt.render(Z);const Ut=v.toneMapping;v.toneMapping=Qn;const Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ft===!0&&B.setGlobalState(v.clippingPlanes,j),Ns(R,Z,j),I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Nt=0,re=k.length;Nt<re;Nt++){const de=k[Nt],pe=de.object,Ye=de.geometry,oe=de.material,kt=de.group;if(oe.side===ue&&pe.layers.test(j.layers)){const Rn=oe.side;oe.side=qe,oe.needsUpdate=!0,cc(pe,Z,j,Ye,oe,kt),oe.side=Rn,oe.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(_t),I.updateRenderTargetMipmap(_t))}v.setRenderTarget(Dt),v.setClearColor(Y,it),Kt!==void 0&&(j.viewport=Kt),v.toneMapping=Ut}function Ns(R,k,Z){const j=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_t=R.length;H<_t;H++){const At=R[H],Dt=At.object,Ut=At.geometry,Kt=j===null?At.material:j,Jt=At.group;Dt.layers.test(Z.layers)&&cc(Dt,k,Z,Ut,Kt,Jt)}}function cc(R,k,Z,j,H,_t){R.onBeforeRender(v,k,Z,j,H,_t),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(v,k,Z,j,R,_t),H.transparent===!0&&H.side===ue&&H.forceSinglePass===!1?(H.side=qe,H.needsUpdate=!0,v.renderBufferDirect(Z,k,j,H,R,_t),H.side=ti,H.needsUpdate=!0,v.renderBufferDirect(Z,k,j,H,R,_t),H.side=ue):v.renderBufferDirect(Z,k,j,H,R,_t),R.onAfterRender(v,k,Z,j,H,_t)}function Fs(R,k,Z){k.isScene!==!0&&(k=Rt);const j=It.get(R),H=p.state.lights,_t=p.state.shadowsArray,At=H.state.version,Dt=F.getParameters(R,H.state,_t,k,Z),Ut=F.getProgramCacheKey(Dt);let Kt=j.programs;j.environment=R.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(R.isMeshStandardMaterial?K:w).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",Vt),Kt=new Map,j.programs=Kt);let Jt=Kt.get(Ut);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===At)return hc(R,Dt),Jt}else Dt.uniforms=F.getUniforms(R),R.onBeforeCompile(Dt,v),Jt=F.acquireProgram(Dt,Ut),Kt.set(Ut,Jt),j.uniforms=Dt.uniforms;const Nt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=B.uniform),hc(R,Dt),j.needsLights=$h(R),j.lightsStateVersion=At,j.needsLights&&(Nt.ambientLightColor.value=H.state.ambient,Nt.lightProbe.value=H.state.probe,Nt.directionalLights.value=H.state.directional,Nt.directionalLightShadows.value=H.state.directionalShadow,Nt.spotLights.value=H.state.spot,Nt.spotLightShadows.value=H.state.spotShadow,Nt.rectAreaLights.value=H.state.rectArea,Nt.ltc_1.value=H.state.rectAreaLTC1,Nt.ltc_2.value=H.state.rectAreaLTC2,Nt.pointLights.value=H.state.point,Nt.pointLightShadows.value=H.state.pointShadow,Nt.hemisphereLights.value=H.state.hemi,Nt.directionalShadowMap.value=H.state.directionalShadowMap,Nt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Nt.spotShadowMap.value=H.state.spotShadowMap,Nt.spotLightMatrix.value=H.state.spotLightMatrix,Nt.spotLightMap.value=H.state.spotLightMap,Nt.pointShadowMap.value=H.state.pointShadowMap,Nt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function lc(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Rr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function hc(R,k){const Z=It.get(R);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Yh(R,k,Z,j,H){k.isScene!==!0&&(k=Rt),I.resetTextureUnits();const _t=k.fog,At=j.isMeshStandardMaterial?k.environment:null,Dt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:is,Ut=(j.isMeshStandardMaterial?K:w).get(j.envMap||At),Kt=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,de=!!Z.morphAttributes.color;let pe=Qn;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ye=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=Ye!==void 0?Ye.length:0,kt=It.get(j),Rn=p.state.lights;if(ft===!0&&(yt===!0||R!==S)){const nn=R===S&&j.id===b;B.setState(j,R,nn)}let ce=!1;j.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Rn.state.version||kt.outputColorSpace!==Dt||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Ut||j.fog===!0&&kt.fog!==_t||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==B.numPlanes||kt.numIntersection!==B.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==Jt||kt.morphTargets!==Nt||kt.morphNormals!==re||kt.morphColors!==de||kt.toneMapping!==pe||kt.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,kt.__version=j.version);let fn=kt.currentProgram;ce===!0&&(fn=Fs(j,k,H));let Ei=!1,Ze=!1,os=!1;const me=fn.getUniforms(),Sn=kt.uniforms;if(Ht.useProgram(fn.program)&&(Ei=!0,Ze=!0,os=!0),j.id!==b&&(b=j.id,Ze=!0),Ei||S!==R){Ht.buffers.depth.getReversed()?(et.copy(R.projectionMatrix),Bu(et),ku(et),me.setValue(U,"projectionMatrix",et)):me.setValue(U,"projectionMatrix",R.projectionMatrix),me.setValue(U,"viewMatrix",R.matrixWorldInverse);const Gn=me.map.cameraPosition;Gn!==void 0&&Gn.setValue(U,zt.setFromMatrixPosition(R.matrixWorld)),jt.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&me.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ze=!0,os=!0)}if(H.isSkinnedMesh){me.setOptional(U,H,"bindMatrix"),me.setOptional(U,H,"bindMatrixInverse");const nn=H.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),me.setValue(U,"boneTexture",nn.boneTexture,I))}H.isBatchedMesh&&(me.setOptional(U,H,"batchingTexture"),me.setValue(U,"batchingTexture",H._matricesTexture,I),me.setOptional(U,H,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",H._indirectTexture,I),me.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",H._colorsTexture,I));const cs=Z.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&pt.update(H,Z,fn),(Ze||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,me.setValue(U,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Sn.envMap.value=Ut,Sn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Sn.envMapIntensity.value=k.environmentIntensity),Ze&&(me.setValue(U,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Kh(Sn,os),_t&&j.fog===!0&&z.refreshFogUniforms(Sn,_t),z.refreshMaterialUniforms(Sn,j,q,ot,p.state.transmissionRenderTarget[R.id]),Rr.upload(U,lc(kt),Sn,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Rr.upload(U,lc(kt),Sn,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&me.setValue(U,"center",H.center),me.setValue(U,"modelViewMatrix",H.modelViewMatrix),me.setValue(U,"normalMatrix",H.normalMatrix),me.setValue(U,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const nn=j.uniformsGroups;for(let Gn=0,Hn=nn.length;Gn<Hn;Gn++){const uc=nn[Gn];N.update(uc,fn),N.bind(uc,fn)}}return fn}function Kh(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function $h(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,k,Z){It.get(R.texture).__webglTexture=k,It.get(R.depthTexture).__webglTexture=Z;const j=It.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){const Z=It.get(R);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,Z=0){C=R,E=k,A=Z;let j=!0,H=null,_t=!1,At=!1;if(R){const Ut=It.get(R);if(Ut.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ut.__hasExternalTextures)I.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Nt=R.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&It.has(Nt)&&(R.width!==Nt.image.width||R.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(At=!0);const Jt=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[k])?H=Jt[k][Z]:H=Jt[k],_t=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?H=It.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?H=Jt[Z]:H=Jt,D.copy(R.viewport),X.copy(R.scissor),W=R.scissorTest}else D.copy(ut).multiplyScalar(q).floor(),X.copy(Pt).multiplyScalar(q).floor(),W=Gt;if(Ht.bindFramebuffer(U.FRAMEBUFFER,H)&&j&&Ht.drawBuffers(R,H),Ht.viewport(D),Ht.scissor(X),Ht.setScissorTest(W),_t){const Ut=It.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ut.__webglTexture,Z)}else if(At){const Ut=It.get(R.texture),Kt=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,Z||0,Kt)}b=-1},this.readRenderTargetPixels=function(R,k,Z,j,H,_t,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){Ht.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const Ut=R.texture,Kt=Ut.format,Jt=Ut.type;if(!jt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-j&&Z>=0&&Z<=R.height-H&&U.readPixels(k,Z,j,H,vt.convert(Kt),vt.convert(Jt),_t)}finally{const Ut=C!==null?It.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,k,Z,j,H,_t,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){const Ut=R.texture,Kt=Ut.format,Jt=Ut.type;if(!jt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-j&&Z>=0&&Z<=R.height-H){Ht.bindFramebuffer(U.FRAMEBUFFER,Dt);const Nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(k,Z,j,H,vt.convert(Kt),vt.convert(Jt),0);const re=C!==null?It.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(U.FRAMEBUFFER,re);const de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zu(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(Nt),U.deleteSync(de),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,Z=0){R.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);const j=Math.pow(2,-Z),H=Math.floor(R.image.width*j),_t=Math.floor(R.image.height*j),At=k!==null?k.x:0,Dt=k!==null?k.y:0;I.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,At,Dt,H,_t),Ht.unbindTexture()},this.copyTextureToTexture=function(R,k,Z=null,j=null,H=0){R.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],k=arguments[2],H=arguments[3]||0,Z=null);let _t,At,Dt,Ut,Kt,Jt,Nt,re,de;const pe=R.isCompressedTexture?R.mipmaps[H]:R.image;Z!==null?(_t=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,Kt=Z.min.y,Jt=Z.isBox3?Z.min.z:0):(_t=pe.width,At=pe.height,Dt=pe.depth||1,Ut=0,Kt=0,Jt=0),j!==null?(Nt=j.x,re=j.y,de=j.z):(Nt=0,re=0,de=0);const Ye=vt.convert(k.format),oe=vt.convert(k.type);let kt;k.isData3DTexture?(I.setTexture3D(k,0),kt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(I.setTexture2DArray(k,0),kt=U.TEXTURE_2D_ARRAY):(I.setTexture2D(k,0),kt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Rn=U.getParameter(U.UNPACK_ROW_LENGTH),ce=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ei=U.getParameter(U.UNPACK_SKIP_ROWS),Ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jt);const os=R.isDataArrayTexture||R.isData3DTexture,me=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Sn=It.get(R),cs=It.get(k),nn=It.get(Sn.__renderTarget),Gn=It.get(cs.__renderTarget);Ht.bindFramebuffer(U.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Hn=0;Hn<Dt;Hn++)os&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(R).__webglTexture,H,Jt+Hn),R.isDepthTexture?(me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.get(k).__webglTexture,H,de+Hn),U.blitFramebuffer(Ut,Kt,_t,At,Nt,re,_t,At,U.DEPTH_BUFFER_BIT,U.NEAREST)):me?U.copyTexSubImage3D(kt,H,Nt,re,de+Hn,Ut,Kt,_t,At):U.copyTexSubImage2D(kt,H,Nt,re,de+Hn,Ut,Kt,_t,At);Ht.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(kt,H,Nt,re,de,_t,At,Dt,Ye,oe,pe.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(kt,H,Nt,re,de,_t,At,Dt,Ye,pe.data):U.texSubImage3D(kt,H,Nt,re,de,_t,At,Dt,Ye,oe,pe):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,Nt,re,_t,At,Ye,oe,pe.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,Nt,re,pe.width,pe.height,Ye,pe.data):U.texSubImage2D(U.TEXTURE_2D,H,Nt,re,_t,At,Ye,oe,pe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze),H===0&&k.generateMipmaps&&U.generateMipmap(kt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(R,k,Z=null,j=null,H=0){return R.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,j=arguments[1]||null,R=arguments[2],k=arguments[3],H=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,Z,j,H)},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Ht.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class $o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new $o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jm extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sh extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ke,h=ke,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new Ft,hl=new Ft,sr=[],ul=new bi,Jm=new Ft,ps=new fe,ms=new Si;class Eh extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),ul.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(ul)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),ms.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),hl.multiplyMatrices(n,Bi),ps.matrixWorld=hl,ps.raycast(t,sr);for(let a=0,o=sr.length;a<o;a++){const l=sr[a];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(s*this.count),s,this.count,ko,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class wh extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new V,Fr=new V,fl=new Ft,gs=new qo,rr=new Si,Ea=new V,dl=new V;class Qm extends Ae{constructor(t=new He,e=new wh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Nr.fromBufferAttribute(e,s-1),Fr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Nr.distanceTo(Fr);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;fl.copy(s).invert(),gs.copy(t.ray).applyMatrix4(fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=d,m=x-1;M<m;M+=c){const p=h.getX(M),g=h.getX(M+1),y=ar(this,t,gs,l,p,g);y&&e.push(y)}if(this.isLineLoop){const M=h.getX(x-1),m=h.getX(d),p=ar(this,t,gs,l,M,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let M=d,m=x-1;M<m;M+=c){const p=ar(this,t,gs,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){const M=ar(this,t,gs,l,x-1,d);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Nr.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),e.distanceSqToSegment(Nr,Fr,Ea,dl)>n)return;Ea.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ea);if(!(l<t.near||l>t.far))return{distance:l,point:dl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const pl=new V,ml=new V;class tg extends Qm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)pl.fromBufferAttribute(e,s),ml.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pl.distanceTo(ml);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Th extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gl=new Ft,Ao=new qo,or=new Si,cr=new V;class eg extends Ae{constructor(t=new He,e=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;gl.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=f,M=d;x<M;x++){const m=c.getX(x);cr.fromBufferAttribute(u,m),xl(cr,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let x=f,M=d;x<M;x++)cr.fromBufferAttribute(u,x),xl(cr,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xl(i,t,e,n,s,r,a){const o=Ao.distanceSqToPoint(i);if(o<e){const l=new V;Ao.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Us extends Ge{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zo extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let x=0;const M=[],m=n/2;let p=0;g(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function g(){const v=new V,T=new V;let E=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,D=S*(e-t)+t;for(let X=0;X<=s;X++){const W=X/s,Y=W*l+o,it=Math.sin(Y),$=Math.cos(Y);T.x=D*it,T.y=-S*n+m,T.z=D*$,u.push(T.x,T.y,T.z),v.set(it,A,$).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-S),b.push(x++)}M.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=M[b][C],D=M[b+1][C],X=M[b+1][C+1],W=M[b][C+1];(t>0||b!==0)&&(h.push(S,D,W),E+=3),(e>0||b!==r-1)&&(h.push(D,X,W),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){const T=x,E=new ne,A=new V;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),x++;const D=x;for(let X=0;X<=s;X++){const Y=X/s*l+o,it=Math.cos(Y),$=Math.sin(Y);A.x=b*$,A.y=m*S,A.z=b*it,u.push(A.x,A.y,A.z),f.push(0,S,0),E.x=it*.5+.5,E.y=$*.5*S+.5,d.push(E.x,E.y),x++}for(let X=0;X<s;X++){const W=T+X,Y=D+X;v===!0?h.push(Y,Y+1,W):h.push(Y+1,Y,W),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jo extends He{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const y=new V,v=new V,T=new V;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],v),d(e[E+2],T),l(y,v,T,g)}function l(g,y,v,T){const E=T+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const b=g.clone().lerp(v,C/E),S=y.clone().lerp(v,C/E),D=E-C;for(let X=0;X<=D;X++)X===0&&C===E?A[C][X]=b:A[C][X]=b.clone().lerp(S,X/D)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const S=Math.floor(b/2);b%2===0?(f(A[C][S+1]),f(A[C+1][S]),f(A[C][S])):(f(A[C][S+1]),f(A[C+1][S+1]),f(A[C+1][S]))}}function c(g){const y=new V;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(g),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const g=new V;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const v=m(g)/2/Math.PI+.5,T=p(g)/Math.PI+.5;a.push(v,1-T)}x(),u()}function u(){for(let g=0;g<a.length;g+=6){const y=a[g+0],v=a[g+2],T=a[g+4],E=Math.max(y,v,T),A=Math.min(y,v,T);E>.9&&A<.1&&(y<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),T<.2&&(a[g+4]+=1))}}function f(g){r.push(g.x,g.y,g.z)}function d(g,y){const v=g*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function x(){const g=new V,y=new V,v=new V,T=new V,E=new ne,A=new ne,C=new ne;for(let b=0,S=0;b<r.length;b+=9,S+=6){g.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),T.copy(g).add(y).add(v).divideScalar(3);const D=m(T);M(E,S+0,g,D),M(A,S+2,y,D),M(C,S+4,v,D)}}function M(g,y,v,T){T<0&&g.x===1&&(a[y]=g.x-1),v.x===0&&v.z===0&&(a[y]=T/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.vertices,t.indices,t.radius,t.details)}}class Jo extends jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class Qo extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new V,f=new V,d=[],x=[],M=[],m=[];for(let p=0;p<=n;p++){const g=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const E=T/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+y*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(E+v,1-y),g.push(c++)}h.push(g)}for(let p=0;p<n;p++)for(let g=0;g<e;g++){const y=h[p][g+1],v=h[p][g],T=h[p+1][g],E=h[p+1][g+1];(p!==0||a>0)&&d.push(y,v,E),(p!==n-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new ge(x,3)),this.setAttribute("normal",new ge(M,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ro extends ni{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cr extends ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tc extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ng extends tc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new Ft,_l=new V,vl=new V;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_l.setFromMatrixPosition(t.matrixWorld),e.position.copy(_l),vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vl),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sg extends ig{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new sg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ml extends tc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const Or='"Press Start 2P", monospace',ag='"Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans CJK JP", "Noto Sans JP", sans-serif',lr=i=>"#"+i.toString(16).padStart(6,"0");class og{constructor(){this.cw=64,this.ch=32,this.cols=8,this.rows=32,this.used=[],this.canvas=document.createElement("canvas"),this.canvas.width=this.cw*this.cols,this.canvas.height=this.ch*this.rows,this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.texture=new Us(this.canvas),this.texture.magFilter=ke,this.texture.minFilter=Zl,this.texture.colorSpace=De}alloc(t,e){for(let n=0;n+e<=this.rows;n++)for(let s=0;s+t<=this.cols;s++){let r=!0;for(let a=n;a<n+e&&r;a++)for(let o=s;o<s+t;o++)if(this.used[a*this.cols+o]){r=!1;break}if(r){for(let a=n;a<n+e;a++)for(let o=s;o<s+t;o++)this.used[a*this.cols+o]=!0;return[s,n]}}throw new Error("sign atlas full")}add(t,e=1,n=1){const[s,r]=this.alloc(e,n),a=s*this.cw,o=r*this.ch,l=this.cw*e,c=this.ch*n,h=this.ctx;if(h.save(),h.beginPath(),h.rect(a,o,l,c),h.clip(),h.fillStyle=lr(t.bg),h.fillRect(a,o,l,c),t.stripes===-1)for(let M=0;M<c;M+=8)for(let m=0;m<l;m+=8)(m+M)/8%2===0&&(h.fillStyle="#000",h.fillRect(a+m,o+M,8,8));else t.stripes!==void 0&&(h.fillStyle=lr(t.stripes),h.fillRect(a,o+c-6,l,3),h.fillRect(a,o+3,l,3));if(t.border!==void 0&&(h.strokeStyle=lr(t.border),h.lineWidth=3,h.strokeRect(a+1.5,o+1.5,l-3,c-3)),h.fillStyle=lr(t.fg),t.arrows){const M=l/3,m=M*.38;for(let y=0;y<3;y++){const v=a+y*M+M*.12,T=v+M*.62,[E,A]=t.arrows==="R"?[v,T]:[T,v],C=t.arrows==="R"?1:-1;h.beginPath(),h.moveTo(E,o+3),h.lineTo(E+C*m,o+3),h.lineTo(A,o+c/2),h.lineTo(E+C*m,o+c-3),h.lineTo(E,o+c-3),h.lineTo(A-C*m,o+c/2),h.closePath(),h.fill()}h.restore(),this.texture.needsUpdate=!0;const p=this.canvas.width,g=this.canvas.height;return[a/p,1-(o+c)/g,(a+l)/p,1-o/g]}h.textAlign="center",h.textBaseline="middle";const u=t.jp?ag:Or;if(t.vertical){const x=[...t.text],M=Math.min(l-6,Math.floor((c-6)/x.length));h.font=`bold ${M}px ${u}`,x.forEach((m,p)=>h.fillText(m,a+l/2,o+4+M*(p+.5)))}else{const x=t.sub?2:1,M=t.jp?(c-6)/x:8*Math.max(1,Math.floor((c-8)/x/10));let m=Math.floor(M);for(h.font=`bold ${m}px ${u}`;m>6&&h.measureText(t.text).width>l-6;){if(m-=t.jp?1:8,m<8&&!t.jp){m=8;break}h.font=`bold ${m}px ${u}`}const p=t.sub?o+c*.34:o+c/2+1;h.fillText(t.text,a+l/2,p),t.sub&&(h.font=`8px ${Or}`,h.fillText(t.sub,a+l/2,o+c*.74))}h.restore(),this.texture.needsUpdate=!0;const f=this.canvas.width,d=this.canvas.height;return[a/f,1-(o+c)/d,(a+l)/f,1-o/d]}}const we=[0,4,7,11],Te=[0,3,7,10],Ie=[0,4,7],hi=[0,3,7],hr=[0,4,7,10],Ah={miami:{name:"COASTLINE RUSH",bpm:138,chords:[["D",we],["G",we],["E",Te],["A",Ie],["D",we],["B",Te],["G",we],["A",Ie],["B",Te],["F#",Te],["G",we],["D",Ie],["E",Te],["A",Ie],["G",we],["A",hr]],lead:["F#5 . . A5 . . C#6 . B5 . A5 . F#5 . E5 .","D5 . . . . . B4 . D5 . E5 . F#5 . . .","G5 . . F#5 . . E5 . D5 . E5 . G5 . B5 .","A5 . . . . . . . - - E5 F#5 G5 . A5 .","F#5 . . A5 . . D6 . C#6 . A5 . F#5 . A5 .","B5 . . A5 . . F#5 . D5 . . . B4 . D5 .","E5 . . F#5 . . G5 . A5 . B5 . A5 . G5 .","E5 . . . . . . . - - - - C#5 . E5 .","D6 . . C#6 . . B5 . . . F#5 . . . A5 .","C#6 . . B5 . . A5 . . . E5 . . . F#5 .","B5 . . A5 . . G5 . F#5 . G5 . A5 . B5 .","A5 . . . . . F#5 . . . D5 . . . - -","G5 . . A5 . . B5 . . . D6 . . . E6 .","C#6 . . . . . A5 . . . E5 . . . - -","D6 . . C#6 . . B5 . A5 . G5 . F#5 . G5 .","A5 . . . . . . . . . . . G5 . E5 ."],bass:[0,null,12,null,0,null,12,0,null,0,12,null,0,null,12,7],kick:[0,6,8],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"square"},tokyo:{name:"NEON EXPRESSWAY",bpm:144,chords:[["F",we],["G",Ie],["E",Te],["A",hi],["F",we],["G",Ie],["E",hr],["A",hi],["D",Te],["G",Ie],["C",we],["A",Te],["D",Te],["E",Te],["F",we],["E",hr]],lead:["A5 . . C6 . . E6 . . . D6 . C6 . A5 .","B5 . . . . . G5 . . . D5 . G5 . B5 .","C6 . . B5 . . G5 . E5 . . . G5 . B5 .","A5 . . . . . . . E5 . A5 . C6 . E6 .","F6 . . E6 . . C6 . . . A5 . C6 . E6 .","D6 . . . . . B5 . . . G5 . B5 . D6 .","E6 . . D6 . . B5 . G#5 . . . E5 . G#5 .","A5 . . . . . . . . . . . - - - -","D6 . F6 . A6 . F6 . D6 . . . C6 . A5 .","B5 . D6 . G6 . D6 . B5 . . . A5 . G5 .","E6 . G6 . . . E6 . C6 . . . B5 . C6 .","A5 . . . . . E5 . . . A5 . . . - -","F5 . A5 . D6 . . . C6 . A5 . F5 . A5 .","G5 . B5 . E6 . . . D6 . B5 . G5 . B5 .","C6 . . . A5 . . . C6 . . . F6 . . .","E6 . . . . . D6 . . . B5 . . . G#5 ."],bass:[0,0,12,0,0,12,0,7,0,0,12,0,10,12,7,12],kick:[0,3,8,11],snare:[4,12],hat:[2,6,10,14],leadWave:"sawtooth"},title:{name:"TITLE",bpm:128,chords:[["C",we],["A",Te],["F",we],["G",Ie]],lead:["E5 . G5 . B5 . . . C6 . B5 . G5 . . .","C6 . . . A5 . . . E5 . . . G5 . A5 .","A5 . . . F5 . . . C6 . . . A5 . . .","B5 . . . D6 . . . G5 . . . - - - -"],bass:[0,null,12,null,0,null,12,null,0,null,12,null,0,7,12,7],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadWave:"square"},palm:{name:"PALM DRIVE",bpm:116,chords:[["A",we],["F#",Te],["D",we],["E",Ie],["A",we],["C#",Te],["D",we],["E",Ie]],lead:["E5 . . . C#5 . . . E5 . F#5 . G#5 . . .","A5 . . . . . . . F#5 . E5 . C#5 . . .","D5 . . . F#5 . . . A5 . . . C#6 . B5 .","B5 . . . . . . . G#5 . . . E5 . . .","E5 . . . C#5 . . . E5 . F#5 . A5 . . .","G#5 . . . E5 . . . C#5 . E5 . G#5 . . .","F#5 . . . A5 . . . D6 . . . C#6 . A5 .","B5 . . . . . . . - - G#5 . A5 . B5 ."],bass:[0,null,0,null,0,null,12,null,0,null,0,null,0,null,12,7],kick:[0,8,10],snare:[4,12],hat:[2,6,10,14],leadWave:"saw2",pad:!0,arp:{pattern:[0,1,2,3,4,3,2,1],wave:"square",oct:5},gated:!0,stabs:!1},signal:{name:"NIGHT SIGNAL",bpm:128,chords:[["D",hi],["A#",Ie],["C",Ie],["A",hi],["D",Te],["A#",we],["G",Te],["A",Ie]],lead:["A5 . . D6 . . F6 . E6 . D6 . C6 . A5 .","A#5 . . . . . F5 . . . A#5 . D6 . . .","C6 . . E6 . . G6 . F6 . E6 . C6 . . .","E6 . . . . . . . - - A5 . C6 . E6 .","F6 . . E6 . . D6 . A5 . . . D6 . F6 .","G6 . . F6 . . D6 . A#5 . . . F5 . . .","G5 . . A#5 . . D6 . G6 . . . F6 . D6 .","C#6 . . . . . E6 . . . A5 . . . - -"],bass:[0,0,12,0,0,0,12,0,0,0,12,0,0,12,0,12],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadWave:"fm",pad:!0,gated:!0,stabs:!1},rival:{name:"TURBO RIVAL",bpm:152,chords:[["E",hi],["C",Ie],["D",Ie],["B",Ie],["E",hi],["C",Ie],["A",hi],["B",hr]],lead:["B5 . . . G5 . E5 . B5 . . . C6 . B5 .","G5 . . . E5 . C5 . E5 . G5 . C6 . . .","A5 . . . F#5 . D5 . F#5 . A5 . D6 . C6 .","B5 . . . . . . . D#6 . . . F#6 . . .","E6 . . . D6 . B5 . G5 . . . B5 . E6 .","G6 . . . E6 . C6 . E6 . . . G6 . E6 .","C6 . . . A5 . E5 . A5 . C6 . E6 . . .","D#6 . . . . . F#6 . . . B5 . . . - -"],bass:[0,null,0,12,0,null,0,12,0,null,0,12,0,7,12,7],kick:[0,4,8,12],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"saw2",arp:{pattern:[0,2,4,2],wave:"square",oct:5}},sunset:{name:"AFTER SUNSET",bpm:98,chords:[["F",we],["E",Te],["D",Te],["C",we],["A#",we],["A",Te],["G",Te],["C",Ie]],lead:["A5 . . . C6 . . . E6 . . . D6 . C6 .","B5 . . . G5 . . . E5 . . . . . . .","F5 . . . A5 . . . C6 . . . E6 . D6 .","E6 . . . . . . . G5 . . . . . . .","D6 . . . F6 . . . A6 . . . G6 . F6 .","E6 . . . C6 . . . A5 . . . G5 . A5 .","A#5 . . . A5 . . . G5 . . . F5 . G5 .","E5 . . . . . . . . . . . - - - -"],bass:[0,null,null,0,null,null,12,null,0,null,null,7,null,null,12,null],kick:[0,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadWave:"fm",pad:!0,arp:{pattern:[0,2,1,3,2,4,3,1],wave:"triangle",oct:5},gated:!0,stabs:!1}},Pr=["miami","tokyo","palm","signal","rival","sunset"].map(i=>({id:i,name:Ah[i].name})),Rh={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},cg=i=>{const t=/^([A-G]#?)(\d)$/.exec(i);return t?Rh[t[1]]+(parseInt(t[2],10)+1)*12:69},xs=i=>440*Math.pow(2,(i-69)/12);class lg{constructor(){this.ctx=null,this.muted=!1,this.song=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.55;const n=e.createDynamicsCompressor();this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.32,this.musicBus.connect(this.master),this.delay=e.createDelay(1);const s=e.createGain();s.gain.value=.28,this.delay.connect(s).connect(this.delay);const r=e.createGain();r.gain.value=.35,this.delay.connect(r).connect(this.musicBus),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const a=this.noise.getChannelData(0);for(let h=0;h<a.length;h++)a[h]=Math.random()*2-1;this.engA=e.createOscillator(),this.engA.type="sawtooth",this.engB=e.createOscillator(),this.engB.type="square",this.engF=e.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=4,this.engG=e.createGain(),this.engG.gain.value=0;const o=e.createGain();o.gain.value=.6,this.engA.connect(this.engF),this.engB.connect(o).connect(this.engF),this.engF.connect(this.engG).connect(this.sfx),this.engA.start(),this.engB.start();const l=e.createBufferSource();l.buffer=this.noise,l.loop=!0;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=2400,c.Q.value=6,this.skidG=e.createGain(),this.skidG.gain.value=0,l.connect(c).connect(this.skidG).connect(this.sfx),l.start()}toggleMute(){this.muted=!this.muted,this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.55,this.ctx.currentTime,.02)}engine(t,e,n){if(!this.ctx)return;const s=this.ctx.currentTime,r=38+e*120;this.engA.frequency.setTargetAtTime(r,s,.03),this.engB.frequency.setTargetAtTime(r*.5+1.5,s,.03),this.engF.frequency.setTargetAtTime(300+e*1400+n*600,s,.05),this.engG.gain.setTargetAtTime(t?.1+n*.08:0,s,.08)}skid(t){this.ctx&&this.skidG.gain.setTargetAtTime(t*.22,this.ctx.currentTime,.04)}tone(t,e,n,s,r=0,a,o){const l=this.ctx,c=l.currentTime+r,h=l.createOscillator();h.type=n,h.frequency.setValueAtTime(t,c),a&&h.frequency.exponentialRampToValueAtTime(a,c+e);const u=l.createGain();u.gain.setValueAtTime(s,c),u.gain.exponentialRampToValueAtTime(.001,c+e),h.connect(u).connect(o??this.sfx),h.start(c),h.stop(c+e+.02)}burst(t,e,n,s=0,r="lowpass",a,o){const l=this.ctx,c=o??l.currentTime+s,h=l.createBufferSource();h.buffer=this.noise;const u=l.createBiquadFilter();u.type=r,u.frequency.setValueAtTime(n,c),r==="lowpass"&&u.frequency.exponentialRampToValueAtTime(80,c+t);const f=l.createGain();f.gain.setValueAtTime(e,c),f.gain.exponentialRampToValueAtTime(.001,c+t),h.connect(u).connect(f).connect(a??this.sfx),h.start(c,Math.random()*.5),h.stop(c+t+.02)}crash(t){this.ctx&&(this.burst(t?.9:.35,t?.9:.5,t?4e3:2500),this.tone(t?90:140,t?.5:.2,"square",.35,0,30))}scrape(){this.ctx&&this.burst(.18,.25,3e3,0,"highpass")}pop(){this.ctx&&(this.burst(.09,.5,900),this.tone(70,.08,"square",.25,0,40))}turbo(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const s=t.createBiquadFilter();s.type="bandpass",s.Q.value=3,s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(5e3,e+.7);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.5,e+.08),r.gain.exponentialRampToValueAtTime(.001,e+1.1),n.connect(s).connect(r).connect(this.sfx),n.start(e),n.stop(e+1.2),this.tone(90,.6,"sawtooth",.25,0,240),this.tone(660,.25,"square",.1,.05,1320)}countBeep(t){this.ctx&&(t?this.tone(880,.7,"square",.22):this.tone(440,.25,"square",.22))}blip(){this.ctx&&this.tone(660,.07,"square",.12,0,990)}coin(){this.ctx&&(this.tone(988,.08,"square",.15),this.tone(1319,.3,"square",.15,.08))}jingle(){this.ctx&&[523,659,784,1047,784,1047].forEach((t,e)=>this.tone(t,.16,"square",.15,e*.09))}fanfare(){this.ctx&&[392,523,659,784,659,784,1047].forEach((t,e)=>this.tone(t,e===6?.8:.18,"square",.16,e*.13))}sad(){this.ctx&&[392,370,349,330].forEach((t,e)=>this.tone(t,e===3?.9:.3,"triangle",.25,e*.3))}music(t){if(!this.ctx)return;const e=t?Ah[t]:null;e!==this.song&&(this.song=e,this.step=0,this.nextTime=this.ctx.currentTime+.1,this.timer!==null&&window.clearInterval(this.timer),this.timer=null,e&&(this.delay.delayTime.value=60/e.bpm*.75,this.timer=window.setInterval(()=>this.schedule(),25)))}schedule(){const t=this.ctx,e=this.song;if(!e)return;const n=60/e.bpm/4;for(this.nextTime<t.currentTime-.2&&(this.nextTime=t.currentTime+.05);this.nextTime<t.currentTime+.12;)this.playStep(e,this.step,this.nextTime,n),this.step=(this.step+1)%(e.chords.length*16),this.nextTime+=n}playStep(t,e,n,s){const r=Math.floor(e/16),a=e%16,[o,l]=t.chords[r],c=Rh[o],h=t.bass[a];if(h!=null&&this.voice(xs(36+c+h),s*.9,"sawtooth",.32,n,700),t.stabs!==!1&&a%4===2)for(const d of l)this.voice(xs(60+c+d),s*1.2,"square",.045,n,2600);if(t.pad&&a===0)for(const d of l)this.padNote(xs(48+c+d),s*16,n);if(t.arp){const d=t.arp.pattern[a%t.arp.pattern.length],x=l[d%l.length]+12*Math.floor(d/l.length);this.voice(xs((t.arp.oct+1)*12+c+x),s*.7,t.arp.wave,.045,n,3200,!1,!0)}const u=t.lead[r].split(/\s+/),f=u[a];if(f&&f!=="."&&f!=="-"){let d=1;for(;a+d<16&&u[a+d]===".";)d++;this.voice(xs(cg(f)),s*d*.95,t.leadWave,.11,n,3800,!0)}if(t.kick.includes(a)){const d=this.ctx,x=d.createOscillator(),M=d.createGain();x.frequency.setValueAtTime(150,n),x.frequency.exponentialRampToValueAtTime(40,n+.12),M.gain.setValueAtTime(.7,n),M.gain.exponentialRampToValueAtTime(.001,n+.18),x.connect(M).connect(this.musicBus),x.start(n),x.stop(n+.2)}t.snare.includes(a)&&(t.gated?(this.burst(.26,.55,1500,0,"bandpass",this.musicBus,n),this.burst(.2,.3,5e3,0,"highpass",this.musicBus,n)):this.burst(.14,.45,1800,0,"bandpass",this.musicBus,n)),t.hat.includes(a)&&this.burst(.04,.18,7e3,0,"highpass",this.musicBus,n)}padNote(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1400;const a=s.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.028,n+Math.min(.35,e*.3)),a.gain.setValueAtTime(.028,n+e*.85),a.gain.linearRampToValueAtTime(0,n+e),r.connect(a).connect(this.musicBus);for(const o of[-9,9]){const l=s.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(t,n),l.detune.value=o,l.connect(r),l.start(n),l.stop(n+e+.02)}}voice(t,e,n,s,r,a,o=!1,l=!1){const c=this.ctx;if(n==="fm"){const x=c.createOscillator(),M=c.createOscillator(),m=c.createGain();x.frequency.setValueAtTime(t,r),M.frequency.setValueAtTime(t*2,r),m.gain.setValueAtTime(t*3,r),m.gain.exponentialRampToValueAtTime(t*.3,r+Math.max(.05,e)),M.connect(m).connect(x.frequency);const p=c.createGain();p.gain.setValueAtTime(0,r),p.gain.linearRampToValueAtTime(s*1.3,r+.004),p.gain.exponentialRampToValueAtTime(s*.4,r+Math.max(.05,e*.8)),p.gain.linearRampToValueAtTime(0,r+e+.05),x.connect(p).connect(this.musicBus),o&&p.connect(this.delay);for(const g of[x,M])g.start(r),g.stop(r+e+.08);return}const h=c.createOscillator(),u=[];if(n==="saw2"&&(s*=.6),n==="saw2"){h.type="sawtooth",h.detune.value=-8;const x=c.createOscillator();x.type="sawtooth",x.detune.value=8,x.frequency.setValueAtTime(t,r),u.push(x)}else h.type=n;if(h.frequency.setValueAtTime(t,r),o){const x=c.createOscillator(),M=c.createGain();x.frequency.value=6,M.gain.setValueAtTime(0,r),M.gain.linearRampToValueAtTime(t*.012,r+Math.min(e,.4)),x.connect(M).connect(h.frequency);for(const m of u)M.connect(m.frequency);x.start(r),x.stop(r+e+.05)}const f=c.createBiquadFilter();f.type="lowpass",f.frequency.value=a;const d=c.createGain();d.gain.setValueAtTime(0,r),d.gain.linearRampToValueAtTime(s,r+.005),d.gain.setValueAtTime(s,r+Math.max(.01,e-.03)),d.gain.linearRampToValueAtTime(0,r+e),h.connect(f).connect(d).connect(this.musicBus),(o||l)&&d.connect(this.delay);for(const x of[h,...u])x!==h&&x.connect(f),x.start(r),x.stop(r+e+.02)}}const hg=()=>{try{return localStorage.getItem("th86-gfx")==="86"?"86":"92"}catch{return"92"}},ee={mode:hg(),get modern(){return this.mode==="92"},get width(){return this.modern?640:426},get height(){return this.modern?360:240}};function ug(i){try{localStorage.setItem("th86-gfx",i)}catch{}}function fg(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const s=new Us(t);return s.colorSpace=De,s}const dt=852,tn=480,$n=i=>"#"+i.toString(16).padStart(6,"0"),Xt=16769088,Yt=16777215,gn=16751136,En=16724016,Qe=4255999,ki=16734880,dg=4251712;class pg{constructor(t){this.canvas=t,t.width=dt,t.height=tn,this.g=t.getContext("2d"),this.g.imageSmoothingEnabled=!1}clear(){this.g.clearRect(0,0,dt,tn)}text(t,e,n,s,r,a="left",o=0){const l=this.g;l.font=`${s}px ${Or}`,l.textAlign=a,l.textBaseline="top";const c=Math.max(2,s/8);l.fillStyle=$n(o),l.fillText(t,e+c,n+c),l.fillStyle=$n(r),l.fillText(t,e,n)}box(t,e,n,s,r,a,o=4){const l=this.g;l.fillStyle=$n(a),l.fillRect(t,e,n,s),l.fillStyle=$n(r),l.fillRect(t+o,e+o,n-o*2,s-o*2)}rect(t,e,n,s,r){this.g.fillStyle=$n(r),this.g.fillRect(t,e,n,s)}logo(t,e,n,s,r,a,o){const l=this.g;l.font=`${s}px ${Or}`,l.textAlign="center",l.textBaseline="top";for(let c=s/6;c>0;c-=2)l.fillStyle=$n(o),l.fillText(t,e+c*.5,n+c);l.fillStyle="#000";for(const[c,h]of[[-3,0],[3,0],[0,-3],[0,3]])l.fillText(t,e+c,n+h);l.save(),l.beginPath(),l.rect(0,n-4,dt,s*.5+4),l.clip(),l.fillStyle=$n(r),l.fillText(t,e,n),l.restore(),l.save(),l.beginPath(),l.rect(0,n+s*.5,dt,s),l.clip(),l.fillStyle=$n(a),l.fillText(t,e,n),l.restore()}flare(t,e,n){const s=this.g,r=dt/2,a=tn/2;s.save(),s.globalCompositeOperation="lighter";const o=s.createRadialGradient(t,e,0,t,e,150);o.addColorStop(0,`rgba(255,240,200,${.55*n})`),o.addColorStop(.3,`rgba(255,190,120,${.22*n})`),o.addColorStop(1,"rgba(255,160,100,0)"),s.fillStyle=o,s.fillRect(t-150,e-150,300,300);const l=s.createLinearGradient(t-260,e,t+260,e);l.addColorStop(0,"rgba(255,220,180,0)"),l.addColorStop(.5,`rgba(255,230,190,${.35*n})`),l.addColorStop(1,"rgba(255,220,180,0)"),s.fillStyle=l,s.fillRect(t-260,e-2,520,4);const c=[[.35,18,"255,200,90",.22],[.62,10,"140,255,170",.2],[.9,34,"120,160,255",.12],[1.25,14,"255,120,200",.18],[1.6,52,"255,190,110",.09],[1.95,22,"120,230,255",.14]];for(const[h,u,f,d]of c){const x=t+(r-t)*h,M=e+(a-e)*h;s.fillStyle=`rgba(${f},${d*n})`,s.beginPath();for(let m=0;m<6;m++){const p=m/6*Math.PI*2+Math.PI/6,g=x+Math.cos(p)*u,y=M+Math.sin(p)*u;m===0?s.moveTo(g,y):s.lineTo(g,y)}s.closePath(),s.fill()}s.restore()}tach(t,e,n){const r=Math.round(n*24);for(let a=0;a<24;a++){const o=a<13?dg:a<20?Xt:En,l=8+Math.floor(a*.9);this.rect(t+a*12,e-l,10,l,a<r?o:2109472)}}}const ae=6,mg=3,Tt=11,gi=4,Cs=Tt*2/gi;class gg{constructor(){this.segs=[],this.stageStarts=[],this.goalSeg=0}seg(t){const e=this.segs.length;return this.segs[t<0?0:t>=e?e-1:t]}H(t){const e=this.segs.length;return t<=0?this.segs[0].heading:t>=e?this.segs[e-1].heading+this.segs[e-1].curve*ae:this.segs[t].heading}Y(t){return this.seg(t).y}get goalDist(){return this.goalSeg*ae}}const xg=(i,t,e)=>i+(t-i)*e*e,_g=(i,t,e)=>i+(t-i)*(1-(1-e)*(1-e)),Ta=(i,t,e)=>i+(t-i)*(-Math.cos(e*Math.PI)/2+.5);class Ch{constructor(t,e=0){this.profileOf=t,this.track=new gg,this.heading=0,this.stage=0,this.zone="",this.tunnel=!1,this.y=e}push(t,e){this.track.segs.push({curve:t,y:e,heading:this.heading,stage:this.stage,zone:this.zone,profile:this.profileOf(this.zone,this.tunnel),tunnel:this.tunnel,props:[]}),this.heading+=t*ae}section(t,e,n,s,r){const a=t+e+n,o=this.y;let l=0;for(let c=0;c<t;c++,l++)this.push(xg(0,s,c/t),Ta(o,o+r,l/a));for(let c=0;c<e;c++,l++)this.push(s,Ta(o,o+r,l/a));for(let c=0;c<n;c++,l++)this.push(_g(s,0,c/n),Ta(o,o+r,l/a));this.y=o+r}straight(t,e=0){this.section(0,t,0,0,e)}stageFrom(t,e){this.zone=t.zone,this.track.stageStarts.push(this.track.segs.length);const n=this.track.segs.length+t.length,s=Math.min(t.yMax,Math.max(t.yMin,this.y));Math.abs(s-this.y)>.5?this.straight(40,s-this.y):this.straight(20);let r=0;for(;this.track.segs.length<n;){const a=n-this.track.segs.length,o=!!t.tunnels&&r===0&&a<t.length*.55;this.tunnel=!!t.tunnels&&(o||e.chance(t.tunnels))&&a>120,this.tunnel&&r++;const l=this.zone;this.tunnel&&t.tunnelZone&&(this.zone=t.tunnelZone);let c=e.sign();this.heading>.7&&(c=-1),this.heading<-.7&&(c=1);const h=e.range(9e-4,.0032)*t.curvy;let u=0;e.chance(.25+t.hilly*.6)&&(u=e.range(10,45)*t.hilly*e.sign(),this.y+u>t.yMax&&(u=t.yMax-this.y),this.y+u<t.yMin&&(u=t.yMin-this.y));const f=e.next();if(this.tunnel)this.section(20,e.int(40,80),20,h*.5*c,Math.min(u,0));else if(f<.18)this.straight(e.int(25,60),u);else if(f<.42){const d=e.int(15,35);this.section(15,d,15,h*c,u*.5),this.section(15,d,15,-h*c,u*.5)}else this.section(e.int(15,30),e.int(25,80),e.int(15,30),h*c,u);this.tunnel=!1,this.zone=l}this.stage++}finish(t){return this.stage--,this.track.goalSeg=this.track.segs.length,this.straight(t),this.track}}const As=6,Ph=200,Gi=As+Ph+1;class vg{constructor(t){this.track=t,this.start=0,this.bx=new Float32Array(Gi),this.by=new Float32Array(Gi),this.bz=new Float32Array(Gi),this.bh=new Float32Array(Gi),this.yRef=0,this.heading=0,this.count=As+Ph}update(t){const e=this.track,n=Math.floor(t/ae),s=t/ae-n,r=e.H(n)+e.seg(n).curve*s*ae;this.heading=r,this.yRef=e.Y(n)+(e.Y(n+1)-e.Y(n))*s,this.start=n-As;const{bx:a,bz:o,bh:l,by:c}=this,h=As,u=As+1;let f=e.H(n+1)-r,d=(1-s)*ae;l[u]=f,a[u]=Math.sin(f/2)*d,o[u]=-Math.cos(f/2)*d;for(let x=u+1;x<Gi;x++){f=e.H(this.start+x)-r;const M=(l[x-1]+f)/2;l[x]=f,a[x]=a[x-1]+Math.sin(M)*ae,o[x]=o[x-1]-Math.cos(M)*ae}f=e.H(n)-r,d=s*ae,l[h]=f,a[h]=-Math.sin(f/2)*d,o[h]=Math.cos(f/2)*d;for(let x=h-1;x>=0;x--){f=e.H(this.start+x)-r;const M=(l[x+1]+f)/2;l[x]=f,a[x]=a[x+1]-Math.sin(M)*ae,o[x]=o[x+1]+Math.cos(M)*ae}for(let x=0;x<Gi;x++)c[x]=e.Y(this.start+x)-this.yRef}sample(t,e,n){const s=t/ae,r=Math.floor(s),a=s-r,o=r-this.start;if(o<0||o>=this.count)return!1;const l=this.bh[o]+(this.bh[o+1]-this.bh[o])*a;return n.h=l,n.x=this.bx[o]+(this.bx[o+1]-this.bx[o])*a+Math.cos(l)*e,n.z=this.bz[o]+(this.bz[o+1]-this.bz[o])*a+Math.sin(l)*e,n.y=this.by[o]+(this.by[o+1]-this.by[o])*a,!0}}const St=(i,t,e,n,s,r,a)=>({z:i,w:t,yb:e,belt:n,top:s,wt:r,seg:a}),ui=657932,Le=12063760,Aa=16747040,rn=(i,t,e)=>[{x:i,y:t,r:e},{x:-i,y:t,r:e}],Oe=[{id:"testarossa",rimStyle:"star",trim:12095592,arch:.04,front:"popup",make:"FERRARI",name:"TESTAROSSA",year:1984,group:"80s EXOTIC",paints:[14160924,15921902,16765976],stations:[St(-2.24,.88,.3,.5,.56,.8,"p"),St(-1.7,.93,.24,.62,.68,.86,"p"),St(-.85,.96,.22,.74,.8,.8,"ws"),St(-.05,.97,.22,.8,1.12,.62,"rf"),St(.55,.98,.22,.84,1.12,.62,"rw"),St(1,.99,.22,.87,.98,.8,"p"),St(2.24,.99,.28,.9,.96,.86,"p")],wheels:{r:.32,fz:-1.27,rz:1.28,fx:.78,rx:.82,rim:14212320,spokes:5},rear:[{x:0,y:.64,w:1.92,h:.34,c:ui}],lights:[{x:.62,y:.64,w:.6,h:.22,c:Le,brake:!0},{x:.22,y:.64,w:.18,h:.22,c:Aa}],slats:{y0:.5,y1:.78,n:6,w:.95},side:[{kind:"strakes",z0:-.3,z1:1.05,y0:.38,y1:.8,n:5}],exhaust:[...rn(.55,.33,.05),...rn(.7,.33,.05)],plateY:.38,stats:{vmax:290,accel:.95,grip:.97}},{id:"countach",rimStyle:"dial",trim:10516560,arch:.07,front:"popup",make:"LAMBORGHINI",name:"COUNTACH QV",year:1985,group:"80s EXOTIC",paints:[16053486,14161944,16765976],stations:[St(-2.07,.86,.28,.4,.44,.76,"p"),St(-1.3,.92,.24,.56,.62,.84,"p"),St(-.75,.95,.22,.66,.72,.84,"ws"),St(.15,.97,.22,.74,1.06,.6,"rf"),St(.65,.99,.22,.78,1.06,.62,"rw"),St(1.05,1,.22,.84,.94,.88,"p"),St(2.07,1,.28,.86,.92,.9,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.8,rx:.84,rim:13158604,spokes:5},rear:[{x:0,y:.6,w:.84,h:.32,c:ui}],lights:[{x:.7,y:.67,w:.42,h:.15,c:Le,brake:!0},{x:.7,y:.52,w:.42,h:.1,c:Aa}],side:[{kind:"naca",z0:-.5,z1:.35,y0:.5,y1:.72},{kind:"intake",z0:.6,z1:1.2,y0:.5,y1:.8}],wing:{kind:"big",z:1.95,y:1.28,w:.95,d:.38},exhaust:[...rn(.32,.32,.055),...rn(.5,.32,.055)],plateY:.42,stats:{vmax:298,accel:1,grip:.92}},{id:"f40",rimStyle:"star",trim:9050132,arch:.05,front:"popup",make:"FERRARI",name:"F40",year:1987,group:"80s EXOTIC",paints:[14686232,16765976,15921902],stations:[St(-2.18,.9,.27,.46,.5,.8,"p"),St(-1.5,.95,.22,.6,.66,.88,"p"),St(-.8,.97,.22,.7,.76,.82,"ws"),St(-.05,.98,.22,.76,1.1,.62,"rf"),St(.5,.99,.22,.8,1.1,.62,"lv"),St(1.6,.99,.22,.86,.92,.86,"p"),St(2.18,.99,.28,.88,.92,.9,"p")],wheels:{r:.33,fz:-1.22,rz:1.23,fx:.8,rx:.82,rim:9079440,spokes:5},rear:[{x:0,y:.58,w:1.9,h:.34,c:ui}],lights:[{x:.74,y:.7,w:.2,h:.2,c:Le,round:!0,brake:!0},{x:.5,y:.7,w:.2,h:.2,c:Le,round:!0,brake:!0}],side:[{kind:"naca",z0:-.6,z1:.1,y0:.55,y1:.7},{kind:"intake",z0:.2,z1:.9,y0:.45,y1:.78}],wing:{kind:"bridge",z:1.98,y:1.18,w:.98,d:.4},exhaust:[{x:0,y:.5,r:.06},...rn(.16,.5,.06)],plateY:.32,stats:{vmax:324,accel:1.05,grip:.9}},{id:"959",rimStyle:"six",trim:3816e3,front:"round",make:"PORSCHE",name:"959",year:1986,group:"80s EXOTIC",paints:[13159636,15921902,14161944],stations:[St(-2.13,.84,.3,.5,.56,.74,"p"),St(-1.6,.9,.26,.62,.7,.8,"p"),St(-.75,.92,.25,.76,.84,.72,"ws"),St(-.1,.92,.25,.8,1.26,.6,"rf"),St(.35,.92,.25,.82,1.26,.6,"rw"),St(1.45,.94,.25,.86,.96,.8,"p"),St(2.13,.94,.3,.88,.98,.84,"p")],wheels:{r:.34,fz:-1.13,rz:1.14,fx:.74,rx:.78,rim:14212324,spokes:5},rear:[{x:0,y:.74,w:1.86,h:.18,c:3803658}],lights:[{x:0,y:.74,w:1.5,h:.08,c:Le,brake:!0,mirror:!1},{x:.8,y:.74,w:.22,h:.16,c:Le,brake:!0}],wing:{kind:"hoop",z:1.85,y:1.12,w:.9,d:.45},exhaust:rn(.45,.34,.05),plateY:.5,stats:{vmax:315,accel:1,grip:1.05}},{id:"r32",rimStyle:"six",trim:2763312,arch:.045,front:"rect",make:"NISSAN",name:"SKYLINE GT-R R32",year:1989,group:"90s JAPAN",paints:[5923952,15921902,12064792],stations:[St(-2.27,.82,.32,.6,.66,.76,"p"),St(-1.9,.86,.3,.72,.78,.8,"p"),St(-.55,.87,.3,.8,.84,.8,"ws"),St(.25,.87,.3,.82,1.32,.66,"rf"),St(1,.87,.3,.84,1.3,.66,"rw"),St(1.55,.87,.3,.88,.98,.8,"p"),St(2.27,.86,.32,.9,1,.8,"p")],wheels:{r:.32,fz:-1.33,rz:1.29,fx:.74,rx:.74,rim:12106948,spokes:6},rear:[{x:0,y:.8,w:.5,h:.18,c:2763310}],lights:[{x:.64,y:.8,w:.22,h:.22,c:Le,round:!0,brake:!0},{x:.38,y:.8,w:.22,h:.22,c:Le,round:!0,brake:!0}],wing:{kind:"hoop",z:2.05,y:1.1,w:.74,d:.26},exhaust:[{x:.55,y:.32,r:.065}],plateY:.54,stats:{vmax:285,accel:1.06,grip:1.12}},{id:"supra",rimStyle:"star",trim:3815996,front:"rect",make:"TOYOTA",name:"SUPRA RZ",year:1993,group:"90s JAPAN",paints:[16738832,15921902,14161944],stations:[St(-2.26,.84,.3,.54,.6,.78,"p"),St(-1.8,.89,.27,.66,.72,.84,"p"),St(-.5,.9,.27,.76,.8,.8,"ws"),St(.25,.9,.27,.8,1.24,.64,"rf"),St(.8,.9,.27,.82,1.22,.64,"rw"),St(1.6,.9,.27,.86,.96,.84,"p"),St(2.26,.88,.3,.86,.94,.82,"p")],wheels:{r:.33,fz:-1.28,rz:1.27,fx:.76,rx:.76,rim:13685980,spokes:5},rear:[{x:0,y:.76,w:1.7,h:.28,c:2763312}],lights:[{x:.7,y:.77,w:.26,h:.22,c:Le,round:!0,brake:!0},{x:.44,y:.77,w:.22,h:.2,c:Le,round:!0,brake:!0}],wing:{kind:"hoop",z:2,y:1.22,w:.86,d:.32},exhaust:[{x:.6,y:.32,r:.075}],plateY:.5,stats:{vmax:290,accel:1.02,grip:1}},{id:"rx7",rimStyle:"multi",trim:2763310,front:"popup",make:"MAZDA",name:"RX-7",year:1992,group:"90s JAPAN",paints:[16765976,14161944,2787930],stations:[St(-2.15,.84,.3,.5,.56,.76,"p"),St(-1.6,.88,.26,.62,.68,.84,"p"),St(-.45,.88,.26,.74,.78,.78,"ws"),St(.25,.88,.26,.78,1.2,.6,"rf"),St(.7,.88,.26,.8,1.16,.62,"rw"),St(1.55,.88,.26,.84,.92,.8,"p"),St(2.15,.86,.3,.84,.9,.78,"p")],wheels:{r:.32,fz:-1.2,rz:1.23,fx:.74,rx:.74,rim:13159636,spokes:5},rear:[{x:0,y:.74,w:1.66,h:.18,c:ui}],lights:[{x:.66,y:.74,w:.2,h:.15,c:Le,round:!0,brake:!0},{x:.44,y:.74,w:.2,h:.15,c:Le,round:!0,brake:!0}],wing:{kind:"hoop",z:1.98,y:1.06,w:.78,d:.24},exhaust:rn(.55,.33,.055),plateY:.52,stats:{vmax:280,accel:1.06,grip:1.12}},{id:"nsx",rimStyle:"multi",trim:1973794,front:"popup",make:"HONDA",name:"NSX",year:1990,group:"90s JAPAN",paints:[13113376,15921902,16765976],stations:[St(-2.21,.84,.3,.5,.56,.76,"p"),St(-1.6,.89,.26,.62,.68,.84,"p"),St(-.95,.9,.26,.72,.78,.8,"ws"),St(-.15,.9,.26,.78,1.15,.62,"rf"),St(.5,.9,.26,.82,1.13,.62,"rw"),St(1,.9,.26,.86,.96,.8,"p"),St(2.21,.9,.3,.9,.96,.84,"p")],wheels:{r:.32,fz:-1.26,rz:1.27,fx:.76,rx:.78,rim:14212324,spokes:7},rear:[{x:0,y:.74,w:1.78,h:.17,c:3803658}],lights:[{x:.68,y:.74,w:.4,h:.12,c:Le,brake:!0},{x:0,y:.74,w:.9,h:.06,c:9048080,mirror:!1}],side:[{kind:"intake",z0:.3,z1:.95,y0:.45,y1:.78}],wing:{kind:"bridge",z:2,y:1.04,w:.9,d:.3},exhaust:rn(.4,.33,.05),plateY:.46,stats:{vmax:280,accel:1,grip:1.16}},{id:"diablo",rimStyle:"dial",trim:12095592,arch:.06,front:"popup",make:"LAMBORGHINI",name:"DIABLO",year:1990,group:"90s SUPERCAR",paints:[6957768,16765976,15921902],stations:[St(-2.23,.88,.28,.42,.46,.78,"p"),St(-1.4,.95,.24,.58,.64,.88,"p"),St(-.8,.98,.22,.66,.72,.86,"ws"),St(.2,1,.22,.74,1.1,.6,"rf"),St(.65,1.02,.22,.78,1.08,.64,"rw"),St(1.2,1.03,.22,.86,.96,.9,"p"),St(2.23,1.02,.28,.88,.96,.92,"p")],wheels:{r:.33,fz:-1.32,rz:1.33,fx:.82,rx:.86,rim:13685980,spokes:5},rear:[{x:0,y:.66,w:1.96,h:.3,c:ui}],lights:[{x:.8,y:.7,w:.2,h:.17,c:Le,round:!0,brake:!0},{x:.56,y:.7,w:.2,h:.17,c:Aa,round:!0}],side:[{kind:"intake",z0:.5,z1:1.25,y0:.45,y1:.82}],wing:{kind:"big",z:2,y:1.2,w:.96,d:.34},exhaust:[...rn(.12,.42,.055),...rn(.3,.42,.055)],plateY:.36,stats:{vmax:325,accel:1,grip:.9}},{id:"mclarenf1",rimStyle:"mesh",trim:2763312,drive:"C",front:"slim",make:"McLAREN",name:"F1",year:1992,group:"90s SUPERCAR",paints:[16747034,13159636,14161944],stations:[St(-2.15,.82,.3,.48,.52,.72,"p"),St(-1.5,.88,.26,.6,.66,.82,"p"),St(-1,.9,.25,.68,.74,.78,"ws"),St(-.15,.91,.25,.74,1.13,.56,"rf"),St(.35,.91,.25,.78,1.1,.58,"rw"),St(1,.91,.25,.84,.94,.82,"p"),St(2.15,.9,.3,.86,.92,.84,"p")],wheels:{r:.32,fz:-1.36,rz:1.36,fx:.74,rx:.76,rim:13159636,spokes:5},rear:[{x:0,y:.64,w:1.7,h:.34,c:ui}],lights:[{x:.68,y:.74,w:.14,h:.14,c:Le,round:!0,brake:!0},{x:.5,y:.74,w:.14,h:.14,c:Le,round:!0,brake:!0}],side:[{kind:"intake",z0:.2,z1:.9,y0:.5,y1:.82}],wing:{kind:"duck",z:2.1,y:.97,w:.86,d:.14},scoop:!0,exhaust:[{x:0,y:.54,r:.09}],plateY:.34,stats:{vmax:340,accel:1.1,grip:.95}},{id:"f355",rimStyle:"star",trim:11567200,front:"popup",make:"FERRARI",name:"F355",year:1994,group:"90s SUPERCAR",paints:[14686232,16765976,1723034],stations:[St(-2.12,.86,.3,.5,.56,.78,"p"),St(-1.5,.92,.26,.62,.68,.86,"p"),St(-.8,.94,.24,.72,.78,.82,"ws"),St(-.05,.95,.24,.78,1.15,.6,"rf"),St(.5,.95,.24,.82,1.12,.62,"rw"),St(1.1,.95,.24,.86,.96,.84,"p"),St(2.12,.94,.3,.88,.98,.86,"p")],wheels:{r:.32,fz:-1.22,rz:1.23,fx:.78,rx:.8,rim:14212324,spokes:5},rear:[{x:0,y:.5,w:1.2,h:.22,c:ui}],lights:[{x:.72,y:.74,w:.22,h:.2,c:Le,round:!0,brake:!0},{x:.48,y:.74,w:.22,h:.2,c:Le,round:!0,brake:!0}],side:[{kind:"intake",z0:.35,z1:1,y0:.45,y1:.76}],louvres:{z0:1.2,z1:1.9,n:6,w:.7},wing:{kind:"duck",z:2.05,y:1,w:.9,d:.16},exhaust:[...rn(.55,.38,.05),...rn(.7,.38,.05)],plateY:.6,stats:{vmax:295,accel:1,grip:1.05}}];class Ps{constructor(t){this.s=t>>>0}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}}const yl=[{name:"ACE",skill:1.03,corner:.92,aggro:.8},{name:"AOKI",skill:1.01,corner:.95,aggro:.5},{name:"REYES",skill:1,corner:.82,aggro:.9},{name:"VOLK",skill:.99,corner:.88,aggro:.7},{name:"LOLA",skill:.97,corner:.9,aggro:.4},{name:"BLADE",skill:.96,corner:.78,aggro:1},{name:"KENJI",skill:.94,corner:.95,aggro:.3}],Mg=3.6;function yg(i,t,e){const n=new Ps(e),s=Oe.filter(r=>r!==i);for(let r=s.length-1;r>0;r--){const a=n.int(0,r);[s[r],s[a]]=[s[a],s[r]]}return yl.map((r,a)=>{const o=s[a%s.length],l=Math.floor((yl.length-a)/2),c=a%2===0?-1:1;return{name:r.name,spec:o,paint:n.pick(o.paints),d:t+9+l*9,x:c*Cs*.55,v:0,vmax:o.stats.vmax/Mg*r.skill,corner:r.corner,aggro:r.aggro,lane:c*n.range(1,4),steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:3,turboT:0}})}const xi=()=>performance.now()/1e3;function bg(i,t,e,n,s,r,a,o){const l=e.goalDist;for(const c of i){if(c.remote){const y=c.remote;xi()-y.at>3&&(y.v=0);const v=Math.min(1,xi()-y.at),T=y.d+y.v*v;c.v=y.v,c.d+=c.v*t,c.d+=(T-c.d)*Math.min(1,t*6),Math.abs(T-c.d)>30&&(c.d=T),c.x+=(y.x-c.x)*Math.min(1,t*8),c.spin-=c.v*t/.37;continue}if(!o){c.v=0;continue}const h=e.seg(Math.floor(c.d/ae)),u=e.seg(Math.floor((c.d+70)/ae)),f=Math.max(Math.abs(h.curve),Math.abs(u.curve));let d=c.vmax*(1-Math.min(.3,f*70*(1.15-c.corner)));const x=c.d-r.pos;x>450?d*=.9:x>250?d*=.96:x<-300?d*=1.15:x<-120&&(d*=1.08),c.turboT>0?(c.turboT-=t,d*=1.18):c.turbos>0&&f<9e-4&&c.d<l-300&&x>-200&&x<120&&Math.random()<t*(.05+c.aggro*.1)&&(c.turbos--,c.turboT=3),c.d>l+250&&(d=0),c.bumpT>0&&(c.bumpT-=t,d*=.6);const M=n.map(y=>({d:y.d,x:y.x,v:y.v,len:s(y)}));for(const y of i)y!==c&&M.push({d:y.d,x:y.x,v:y.v,len:4.4});M.push({d:r.pos,x:r.px,v:r.speed,len:4.4});let m=null;for(const y of M){const v=y.d-c.d;v>0&&v<22+c.v*.5&&Math.abs(y.x-c.x)<2.6&&y.v<c.v+2&&(!m||v<m.d-c.d)&&(m=y)}let p=Math.max(-6,Math.min(6,u.curve*2200))+c.lane*.5;if(m){const y=m.x-3.4,v=m.x+3.4,T=y>-Tt+1.2,E=v<Tt-1.2;p=T&&(!E||Math.abs(y-c.x)<Math.abs(v-c.x))?y:E?v:c.x,!T&&!E&&(d=Math.min(d,m.v*(.98-(1-c.aggro)*.05)))}p=Math.max(-Tt+1.4,Math.min(Tt-1.4,p));const g=Math.sign(p-c.x)*Math.min(Math.abs(p-c.x),(6+c.aggro*4)*t);c.x+=g,c.steer+=(g/Math.max(t,.001)/10-c.steer)*Math.min(1,t*8),c.braking=d<c.v-3,c.v+=Math.sign(d-c.v)*Math.min(Math.abs(d-c.v),(c.braking||c.turboT>0?40:22)*t);for(const y of n)Math.abs(y.d-c.d)<s(y)&&Math.abs(y.x-c.x)<2&&(c.v=Math.min(c.v,y.v*.9),c.x+=Math.sign(c.x-y.x||1)*.6);for(const y of i)if(y!==c&&Math.abs(y.d-c.d)<4.2&&Math.abs(y.x-c.x)<1.9){const v=Math.sign(c.x-y.x||1)*.4;c.x+=v,c.d<y.d&&(c.v=Math.min(c.v,y.v))}c.d+=c.v*t,c.spin-=c.v*t/.37,c.finished<0&&c.d>=l&&(c.finished=a)}}function bl(i,t,e){let n=1;for(const s of i)e>=0?s.finished>=0&&s.finished<e&&n++:(s.finished>=0||s.d>t)&&n++;return n}const ur=i=>`${i}${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}`;function fr(i,t,e,n,s,r){const a=t.goalDist,o=i.map(l=>({name:l.name,car:l.spec.name,time:l.finished>=0?l.finished:r+Math.max(0,a-l.d)/Math.max(20,l.v||l.vmax),player:!1,estimated:l.finished<0}));return o.push({name:e,car:n,time:s,player:!0,estimated:!1}),o.sort((l,c)=>l.time-c.time),o.map((l,c)=>({...l,pos:c+1}))}const Sl=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}'${e.toFixed(2).padStart(5,"0")}`},Sg="modulepreload",Eg=function(i,t){return new URL(i,t).href},El={},wg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=Eg(c,n),c in El)return;El[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let x=a.length-1;x>=0;x--){const M=a[x];if(M.href===c&&(!h||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Sg,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((x,M)=>{d.addEventListener("load",x),d.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},Hi=1,Tg="turbo-horizon-86";function Ag(i){const t=Math.random().toString(36).slice(2,10),e=new BroadcastChannel(`th86-${i}`),n=new Map;return e.onmessage=s=>{var a;const r=s.data;!r||r.f===t||r.t&&r.t!==t||(a=n.get(r.a))==null||a(r.d,r.f)},{selfId:t,send:(s,r,a)=>e.postMessage({a:s,d:r,f:t,t:a}),on:(s,r)=>n.set(s,r),onLeave:()=>{},onJoin:()=>{},leave:()=>e.close()}}async function Rg(i){const t=await wg(()=>import("./index-BRIyx3g7.js"),[],import.meta.url),e=t.joinRoom({appId:Tg},i),n=new Map,s=r=>{let a=n.get(r);return a||(a=e.makeAction(r),n.set(r,a)),a};return{selfId:t.selfId,send:(r,a,o)=>{s(r).send(a,o?{target:o}:void 0).catch(()=>{})},on:(r,a)=>{s(r).onMessage=(o,l)=>a(o,l.peerId)},onLeave:r=>{e.onPeerLeave=r},onJoin:r=>{e.onPeerJoin=r},leave:()=>{e.leave().catch(()=>{})}}}const an=(i,t,e,n=0)=>typeof i=="number"&&Number.isFinite(i)?Math.max(t,Math.min(e,i)):n,Vi=(i,t)=>typeof i=="string"?i.slice(0,t):"";function Co(i){return i.toUpperCase().replace(/[^A-Z0-9 -]/g,"").replace(/\s+/g," ").trim().slice(0,10)}class Cg{constructor(t,e){this.room=t,this.peers=new Map,this.status="connecting",this.error="",this.selfId="",this.tr=null,this.timer=0,this.me={name:"PLAYER",car:0,paint:0,status:"lobby",raceId:""},this.onGo=null,this.onSt=null,(e?Promise.resolve(Ag(t)):Rg(t)).then(n=>{this.tr=n,this.selfId=n.selfId,this.status="online",n.on("hi",(s,r)=>this.gotHi(s,r)),n.on("go",(s,r)=>this.gotGo(s,r)),n.on("st",(s,r)=>this.gotSt(s,r)),n.onJoin(s=>this.sendHi(s)),n.onLeave(s=>this.peers.delete(s)),this.sendHi(),this.timer=window.setInterval(()=>{this.sendHi();const s=performance.now()/1e3;for(const[r,a]of this.peers)s-a.seen>6&&this.peers.delete(r)},1e3)}).catch(n=>{this.status="error",this.error=String((n==null?void 0:n.message)??n)})}update(t){}setMe(t){const e=JSON.stringify(this.me);Object.assign(this.me,t),JSON.stringify(this.me)!==e&&this.sendHi()}sendGo(t){var e;(e=this.tr)==null||e.send("go",{p:Hi,...t})}sendSt(t){var e;(e=this.tr)==null||e.send("st",{p:Hi,...t})}leave(){var t;window.clearInterval(this.timer),(t=this.tr)==null||t.leave(),this.tr=null,this.peers.clear()}list(){return[...this.peers.values()].sort((t,e)=>t.joined-e.joined)}sendHi(t){var e;(e=this.tr)==null||e.send("hi",{p:Hi,...this.me},t)}gotHi(t,e){const n=t;if(!n||n.p!==Hi)return;const s=this.peers.get(e),r=performance.now()/1e3;s||this.sendHi(e),this.peers.set(e,{id:e,name:Co(Vi(n.name,40))||"PLAYER",car:Math.round(an(n.car,0,63)),paint:Math.round(an(n.paint,0,15)),status:n.status==="race"?"race":"lobby",raceId:Vi(n.raceId,24),joined:(s==null?void 0:s.joined)??r,seen:r})}gotGo(t,e){var a;const n=t;if(!n||n.p!==Hi||!Array.isArray(n.players))return;const s=n.players.slice(0,8).map(o=>({id:Vi(o==null?void 0:o.id,64),name:Co(Vi(o==null?void 0:o.name,40))||"PLAYER",car:Math.round(an(o==null?void 0:o.car,0,63)),paint:Math.round(an(o==null?void 0:o.paint,0,15))})).filter(o=>o.id),r={raceId:Vi(n.raceId,24),route:Math.round(an(n.route,0,1)),seed:Math.round(an(n.seed,0,1e9)),players:s};r.raceId&&((a=this.onGo)==null||a.call(this,r,e))}gotSt(t,e){var s;const n=t;!n||n.p!==Hi||(s=this.onSt)==null||s.call(this,{r:Vi(n.r,24),d:an(n.d,-1e3,1e6),x:an(n.x,-50,50),v:an(n.v,0,200),steer:an(n.steer,-2,2),br:n.br===!0,tb:n.tb===!0,hp:an(n.hp,0,100,100),fin:an(n.fin,-1,1e5,-1)},e)}}function wl(){const i=location.hash.replace(/^#/,"");return i.startsWith("join")?i.slice(5).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,24)||"lobby":null}const Ra=["arcade","rivals","online"],Tl=82,Ca=3.6,_s=[0,18,34,50,66,84],Al=25,Rl=.82,Pa=3,Cl=3,Pl=1.18,Pg=()=>{try{return parseInt(localStorage.getItem("th86-hi")??"0",10)||0}catch{return 0}},Il=()=>{try{const i=JSON.parse(localStorage.getItem("th86-car")??"[0,0]");return[Math.min(Oe.length-1,i[0]|0),i[1]|0]}catch{return[0,0]}},Ll=(i,t)=>{try{localStorage.setItem("th86-car",JSON.stringify([i,t]))}catch{}},Ig=()=>{try{const i=parseInt(localStorage.getItem("th86-music")??"-1",10);return i>=-1&&i<Pr.length?i:-1}catch{return-1}},Lg=i=>{try{localStorage.setItem("th86-music",String(i))}catch{}},Dg=()=>{try{return localStorage.getItem("th86-name")??""}catch{return""}},Ug=i=>{try{localStorage.setItem("th86-name",i)}catch{}},Ng=i=>{try{localStorage.setItem("th86-hi",String(i))}catch{}};class Fg{constructor(t,e,n,s,r){this.worlds=t,this.camera=e,this.input=n,this.audio=s,this.hud=r,this.state="attract",this.t=0,this.paused=!1,this.routeIdx=0,this.pos=0,this.px=0,this.speed=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.crashYaw=0,this.hp=100,this.wrecked=!1,this.dmgCool=0,this.scrapeDmg=0,this.smokeT=0,this.wheelSpin=0,this.bounce=0,this.shakeKick=0,this.drifting=!1,this.gear=1,this.flameT=0,this.wasAccel=!1,this.timeLeft=0,this.score=0,this.stage=0,this.hi=Pg(),this.msg="",this.msg2="",this.msgUntil=0,this.bonusLeft=0,this.demoClock=0,this.attractRoute=0,this.clock=0,this.lastBeep=-1,this.musicIdx=Ig(),this.mode="arcade",this.net=null,this.nameBox=null,this.playerName=Dg(),this.pending=null,this.raceId="",this.netSendT=0,this.tableT=0,this.raceTime=0,this.turbos=3,this.turboT=0,this.finishTime=-1,this.place=8,this.table=[],this.musicToast=0,this.carIdx=Il()[0],this.paintIdx=Il()[1],this.touch=!1,this.world=t[0],this.resetPlayer(!0)}get spec(){return Oe[this.carIdx]}get vmax(){return this.spec.stats.vmax/Ca}applyCar(t=this.spec,e=t.paints[this.paintIdx%t.paints.length]){this.world.setPlayerCar(t,e)}setWorld(t){this.world===this.worlds[t]&&this.routeIdx===t||(this.routeIdx=t,this.world=this.worlds[t],this.state!=="attract"&&this.applyCar())}resetPlayer(t){this.pos=3*ae,this.px=t?this.world.laneX(1):0,this.speed=t?50:0,this.turboT=0,this.steer=0,this.driftYaw=0,this.crashT=0,this.stage=0,this.wrecked=!1,this.world.resetTraffic(this.pos),this.world.particles.clear()}go(t){this.state=t,this.t=0}trackId(){return this.musicIdx<0?this.world.route.id:Pr[this.musicIdx].id}musicLabel(){return this.musicIdx<0?"ROUTE THEME":Pr[this.musicIdx].name}nextTrack(){this.musicIdx=this.musicIdx+1>=Pr.length?-1:this.musicIdx+1,Lg(this.musicIdx),this.audio.music(this.trackId()),this.musicToast=this.clock+2.5}flash(t,e="",n=2){this.msg=t,this.msg2=e,this.msgUntil=this.clock+n}startRace(){this.paused=!1,this.resetPlayer(!1),this.hp=100,this.wrecked=!1,this.applyCar(),this.turbos=Pa,this.turboT=0,this.raceTime=0,this.finishTime=-1,this.table=[],this.mode==="rivals"?(this.world.setRivals(yg(this.spec,this.pos,Date.now()&65535)),this.world.resetTraffic(this.pos,10,520),this.place=8):this.world.setRivals([]),this.timeLeft=this.world.route.startTime,this.score=0,this.lastBeep=-1,this.msg="",this.go("countdown"),this.audio.music(this.trackId())}update(t){const e=this.input;if(this.clock+=t,e.hit("KeyM")&&this.audio.toggleMute(),!this.paused&&e.hit("KeyN")&&["carselect","countdown","race"].includes(this.state)&&this.nextTrack(),this.paused){let s=e.hit("Escape")?"resume":e.hit("KeyR")?"restart":e.hit("KeyQ")?"quit":"";for(const r of e.taps)r.y>222&&r.y<254?s="resume":r.y>=254&&r.y<280?s="restart":r.y>=280&&r.y<310&&(s="quit");s==="resume"?this.paused=!1:s==="restart"&&this.mode!=="online"?this.startRace():s==="quit"&&(this.paused=!1,this.mode==="online"?this.toLobby():this.toSelect()),this.audio.engine(!1,0,0),this.audio.skid(0),this.netTick(t);return}switch(this.t+=t,this.state){case"attract":{if(this.demoClock+=t,this.demoClock>24){this.demoClock=0,this.attractRoute=1-this.attractRoute,this.setWorld(this.attractRoute);const r=Oe[Math.floor(Math.random()*Oe.length)];this.world.setPlayerCar(r,r.paints[0]),this.resetPlayer(!0)}this.drive(t,this.autopilot(),!0);const s=e.taps.some(r=>r.y>400&&r.y<440&&Math.abs(r.x-dt/2)<200);e.hit("KeyG")||s?(ug(ee.modern?"86":"92"),location.reload()):(e.confirm||e.taps.length)&&(this.audio.coin(),this.toSelect());break}case"select":{this.drive(t,this.autopilot(),!0);let s=-1,r=e.confirm||this.t>20;e.hit("ArrowLeft","KeyA","ArrowRight","KeyD")&&(s=1-this.routeIdx);let a=e.hit("ArrowUp","KeyW","ArrowDown","KeyS");for(const o of e.taps)if(o.y>140&&o.y<280){const l=o.x<dt/2?0:1;l===this.routeIdx?r=!0:s=l}else if(o.y>=320&&o.y<380){const l=Ra[Math.max(0,Math.min(2,Math.floor((o.x-(dt/2-375))/250)))];l!==this.mode&&(this.mode=l,this.audio.blip())}else o.y>=380&&(r=!0);if(a){const o=e.hit("ArrowDown","KeyS")?1:2;this.mode=Ra[(Ra.indexOf(this.mode)+o)%3],this.audio.blip()}s>=0&&(this.audio.blip(),this.setWorld(s),this.resetPlayer(!0)),e.hit("Escape")?(this.go("attract"),this.audio.music("title")):r&&(this.audio.coin(),this.mode==="online"?this.toName():this.toCarSelect());break}case"carselect":{this.speed=0;let s=0,r=0,a=e.confirm||this.t>25;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1);for(const o of e.taps)o.y>370&&o.y<405&&o.x>dt/2?this.nextTrack():o.y>405&&o.x>dt/2-150&&o.x<dt/2+150?a=!0:o.x<160?s=-1:o.x>dt-160?s=1:r=1;s&&(this.carIdx=(this.carIdx+s+Oe.length)%Oe.length,this.paintIdx=0,this.audio.blip()),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length,this.audio.blip()),(s||r)&&this.applyCar(),e.hit("Escape")?this.toSelect():a&&(Ll(this.carIdx,this.paintIdx),this.audio.coin(),this.startRace()),this.showroom(t);break}case"name":{this.speed=0,e.hit("Escape")&&this.nameBox&&(this.nameBox.hide(),this.toSelect()),this.showroom(t);break}case"lobby":{this.lobby(t);break}case"countdown":{const s=Math.floor(this.t);s!==this.lastBeep&&s<=3&&(this.lastBeep=s,this.audio.countBeep(s===3));const r=e.accel?.9:.15;this.audio.engine(!0,r,e.accel?1:0),this.updateWorld(0,{steer:0,yaw:0,spin:0,bounce:e.accel?Math.random()*.02:0}),this.t>=3&&(this.go("race"),this.flash("GO!","",1)),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"race":{e.hit("KeyT","ShiftLeft","ShiftRight")&&this.turbos>0&&this.turboT<=0&&this.crashT<=0&&(this.turbos--,this.turboT=Cl,this.audio.turbo(),this.flash("TURBO!","",1)),this.drive(t,{accel:e.accel||this.turboT>0,brake:e.brake,steer:e.steer,drift:e.drift},!1),this.timeLeft-=t,this.score+=Math.floor(this.speed*Ca*t*9),this.drifting&&this.speed>45&&(this.score+=Math.floor(t*3e3));const s=this.world.track.seg(Math.floor(this.pos/ae));s.stage>this.stage&&(this.stage=s.stage,this.timeLeft+=this.world.route.extendTime,this.flash("CHECKPOINT!","EXTENDED PLAY",2.5),this.audio.jingle()),this.pos>=this.world.track.goalDist?(this.bonusLeft=Math.max(0,this.timeLeft),this.mode!=="arcade"&&(this.finishTime=this.raceTime,this.place=bl(this.world.rivals,this.pos,this.finishTime),this.score+=[1e6,6e5,4e5,25e4,15e4,1e5,5e4,2e4][this.place-1],this.table=fr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime,this.raceTime)),this.go("goal"),this.audio.fanfare(),this.audio.music(null)):this.timeLeft<=0&&(this.timeLeft=0,this.mode!=="arcade"&&(this.table=fr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore()),e.hit("Escape")&&(this.paused=!0),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"goal":{const s=this.autopilot();if(this.drive(t,{...s,accel:!1,brake:this.speed>20},!0),this.t>1.5&&this.bonusLeft>0){const r=Math.min(this.bonusLeft,t*12);this.bonusLeft-=r,this.score+=Math.floor(r*1e4),this.timeLeft=this.bonusLeft,Math.floor(this.t*12)%2===0&&this.audio.blip(),this.bonusLeft<=0&&this.saveScore()}this.t>3&&this.bonusLeft<=0&&(e.confirm||e.taps.length||this.t>14)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}case"over":{this.drive(t,{accel:!1,brake:this.t>1,steer:0,drift:!1},!1),this.t>2.5&&(e.confirm||e.taps.length||this.t>12)&&this.afterRace(),e.hit("KeyR")&&this.mode!=="online"&&this.startRace();break}}const n=this.world;if(n.rivals.length&&["countdown","race","goal","over"].includes(this.state)){const s=this.state!=="countdown";this.state==="race"&&(this.raceTime+=t),bg(n.rivals,t,n.track,n.traffic,r=>n.data.props[r.t].len??4.4,{pos:this.pos,px:this.px,speed:this.speed},this.raceTime,s),(this.state==="race"||this.state==="countdown")&&(this.place=bl(n.rivals,this.pos,-1))}n.netTime=this.raceTime,this.netTick(t)}saveScore(){this.score>this.hi&&(this.hi=this.score,Ng(this.hi))}showroom(t){this.updateWorld(t,{steer:0,yaw:0,spin:0,bounce:0});const e=this.t*.45+.6,n=this.camera;n.fov=40,n.updateProjectionMatrix(),n.position.set(this.px+Math.sin(e)*7,2,Math.cos(e)*7),n.lookAt(this.px,.35,0)}boot(){wl()!==null&&(this.mode="online",this.toName())}toName(){if(this.mode="online",this.go("name"),this.applyCar(),this.resetPlayer(!1),this.px=0,!this.nameBox)return this.joinLobby(this.playerName||"PLAYER");this.nameBox.show(this.playerName,t=>{this.input.fireFirst(),this.playerName=t,Ug(t),this.joinLobby(t)})}joinLobby(t){var e;if(!this.net||this.net.status==="error"){(e=this.net)==null||e.leave();const n=new URLSearchParams(location.search).get("net")==="local";this.net=new Cg(wl()??"lobby",n),this.net.onGo=s=>this.acceptGo(s),this.net.onSt=(s,r)=>this.gotSt(s,r)}this.net.setMe({name:t,car:this.carIdx,paint:this.paintIdx,status:"lobby",raceId:""}),this.toLobby()}toLobby(){var t;this.paused=!1,this.pending=null,this.raceId="",this.world.setRivals([]),(t=this.net)==null||t.setMe({status:"lobby",raceId:""}),this.go("lobby"),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())}leaveOnline(){var t;(t=this.net)==null||t.leave(),this.net=null,this.pending=null,this.mode="arcade",this.toSelect()}afterRace(){this.mode==="online"&&this.net?this.toLobby():this.toSelect()}lobby(t){const e=this.input,n=this.net;this.speed=0;let s=0,r=0,a=!1,o=e.confirm;e.hit("ArrowLeft","KeyA")&&(s=-1),e.hit("ArrowRight","KeyD")&&(s=1),e.hit("ArrowUp","KeyW","ArrowDown","KeyS")&&(r=1),e.hit("KeyR")&&(a=!0);let l=e.hit("Escape","KeyQ");for(const h of e.taps)h.y>405&&Math.abs(h.x-dt/2)<150?o=!0:h.y>405&&h.x<dt/2-160?a=!0:h.y<50&&h.x<150?l=!0:h.y>60&&h.y<135&&h.x<dt-330?s=1:h.y>=135&&h.y<400&&h.x<dt-330&&(r=1);if(l)return this.leaveOnline();if((n==null?void 0:n.status)==="error"){o&&this.joinLobby(this.playerName||"PLAYER"),this.showroom(t);return}!!this.pending||(s&&(this.carIdx=(this.carIdx+s+Oe.length)%Oe.length,this.paintIdx=0),r&&(this.paintIdx=(this.paintIdx+1)%this.spec.paints.length),(s||r)&&(this.audio.blip(),this.applyCar(),Ll(this.carIdx,this.paintIdx),n==null||n.setMe({car:this.carIdx,paint:this.paintIdx})),a&&(this.audio.blip(),this.setWorld(1-this.routeIdx),this.applyCar(),this.resetPlayer(!1),this.px=0,this.audio.music(this.trackId())),o&&(n==null?void 0:n.status)==="online"&&this.startOnline()),this.pending&&xi()>=this.pending.at&&this.beginOnlineRace(this.pending.go),this.showroom(t)}startOnline(){const t=this.net,e=t.list().filter(s=>s.status==="lobby").slice(0,7),n={raceId:`${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,route:this.routeIdx,seed:Math.floor(Math.random()*1e9),players:[{id:t.selfId,name:this.playerName||"PLAYER",car:this.carIdx,paint:this.paintIdx},...e.map(s=>({id:s.id,name:s.name,car:s.car,paint:s.paint}))]};t.sendGo(n),this.acceptGo(n)}acceptGo(t){this.state!=="lobby"||!this.net||t.players.some(e=>e.id===this.net.selfId)&&(this.pending&&this.pending.go.raceId<=t.raceId||(this.pending={go:t,at:xi()+2},this.audio.coin()))}beginOnlineRace(t){const e=this.net;this.pending=null,this.setWorld(t.route),this.raceId=t.raceId,this.startRace();const n=t.players.length,s=Math.ceil(n/2),r=o=>({d:3*ae+(s-1-Math.floor(o/2))*9,x:(o%2?1:-1)*Cs*.55}),a=[];t.players.forEach((o,l)=>{const c=r(l);if(o.id===e.selfId){this.pos=c.d,this.px=c.x;return}const h=Oe[o.car%Oe.length];a.push({name:o.name,spec:h,paint:h.paints[o.paint%h.paints.length],d:c.d,x:c.x,v:0,vmax:0,corner:0,aggro:0,lane:0,steer:0,spin:0,braking:!1,finished:-1,bumpT:0,turbos:0,turboT:0,remote:{id:o.id,d:c.d,x:c.x,v:0,at:xi(),hp:100}})}),this.world.setRivals(a),this.world.setNetTraffic(t.seed,3*ae),this.place=n,e.setMe({status:"race",raceId:t.raceId})}gotSt(t,e){if(!this.raceId||t.r!==this.raceId)return;const n=this.world.rivals.findIndex(a=>{var o;return((o=a.remote)==null?void 0:o.id)===e});if(n<0)return;const s=this.world.rivals[n],r=s.remote;r.d=t.d,r.x=t.x,r.v=t.v,r.at=xi(),s.steer=t.steer,s.braking=t.br,s.turboT=t.tb?1:0,t.hp<r.hp-.5&&(this.world.rivalHit(n,Math.min(1,(r.hp-t.hp)/25)),r.hp=t.hp),t.fin>=0&&s.finished<0&&(s.finished=t.fin)}netTick(t){var n;const e=this.net;e&&(e.update(t),!(this.mode!=="online"||!this.raceId||!["countdown","race","goal","over"].includes(this.state))&&(this.netSendT-=t,this.netSendT<=0&&(this.netSendT=1/15,e.sendSt({r:this.raceId,d:this.pos,x:this.px,v:this.speed,steer:this.steer,br:this.input.brake&&this.speed>1,tb:this.turboT>0,hp:this.hp,fin:this.finishTime})),this.table.length&&(this.state==="goal"||this.state==="over")&&(this.tableT-=t,this.tableT<=0&&(this.tableT=1,this.table=fr(this.world.rivals,this.world.track,"YOU",this.spec.name,this.finishTime>=0?this.finishTime:1/0,this.raceTime),this.place=((n=this.table.find(s=>s.player))==null?void 0:n.pos)??this.place))))}toSelect(){this.go("select");for(const t of this.worlds)t.setRivals([]);this.applyCar(),this.resetPlayer(!0),this.audio.music("title")}toCarSelect(){this.go("carselect"),this.audio.music(this.trackId()),this.applyCar(),this.resetPlayer(!1),this.px=0}autopilot(){const t=this.world;let e=Math.round((this.px+Tt)/(Tt*2/4)-.5);e=Math.max(0,Math.min(3,e));let n=!1;for(const o of t.traffic){const l=o.d-this.pos;l>0&&l<70&&Math.abs(o.x-t.laneX(e))<2.5&&(n=!0)}if(n){for(const o of[e-1,e+1,e-2,e+2])if(!(o<0||o>3)&&!t.traffic.some(l=>l.d-this.pos>-8&&l.d-this.pos<90&&Math.abs(l.x-t.laneX(o))<2.5)){e=o;break}}const s=t.track.seg(Math.floor(this.pos/ae)).curve,r=(t.laneX(e)-this.px)*2.2+s*this.speed*this.speed*Rl,a=Math.max(-1,Math.min(1,r/Al));return{accel:this.speed<68,brake:!1,steer:a,drift:!1}}drive(t,e,n){const s=this.world,r=s.track,a=s.route,o=r.seg(Math.floor(this.pos/ae));let l=0,c=!1,h=0;if(this.crashT>0){this.crashT-=t,this.speed=Math.max(0,this.speed-60*t),this.crashYaw+=t*9*Math.max(0,this.crashT);const g=Math.max(-Tt+3,Math.min(Tt-3,this.px));this.px+=(g-this.px)*Math.min(1,t*1.5),this.bounce=Math.abs(Math.sin(this.crashT*9))*.4*this.crashT,l=this.crashT>.6?1:0,this.crashT<=0&&(this.crashYaw=0)}else{const g=this.speed,y=this.spec.stats,v=this.turboT>0,T=this.vmax*(v?Pl:1)*this.limp();e.accel?this.speed+=30*y.accel*(v?1.9:1)*(1-Math.pow(Math.min(1,g/T),1.8))*t+2*t:e.brake?this.speed-=58*t:this.speed-=(3+g*.035)*t;const E=e.steer,A=E===0?9:7;this.steer+=Math.sign(E-this.steer)*Math.min(Math.abs(E-this.steer),A*t);let C=this.steer*Al*y.grip*Math.min(1,g/22),b=o.curve*g*g*Rl/y.grip;this.drifting=e.drift&&g>30&&Math.abs(e.steer)>0,this.drifting?(C*=1.45,b*=.45,this.speed-=5*t,l=1):Math.abs(this.steer)>.8&&g>62&&Math.abs(o.curve)>.0014&&(l=.6);const S=this.drifting?this.steer*-.5:this.steer*-.12;this.driftYaw+=(S-this.driftYaw)*Math.min(1,t*6),this.px+=(C-b)*t;const D=a.walls||o.tunnel,X=D?Tt+(o.tunnel,1):a.offroadLimit;Math.abs(this.px)>X&&(this.px=Math.sign(this.px)*X,D&&g>15&&(h=Math.sign(this.px),this.speed-=g*.9*t,this.shakeKick=.25,Math.random()<t*12&&this.audio.scrape(),!n&&this.state==="race"&&(this.hp-=3*t,this.scrapeDmg+=t,this.scrapeDmg>.6&&(this.scrapeDmg=0,this.world.car.hit(.12,h>0?"right":"left")),this.hp<=0&&this.wreck()))),c=Math.abs(this.px)>Tt+1,c?(this.speed>32&&(this.speed-=40*t),this.bounce=Math.random()*.08*Math.min(1,g/30),this.shakeKick=Math.max(this.shakeKick,.12)):this.bounce=0,!n&&c&&g>12&&s.hitProp(this.pos,this.px)&&(this.damage(12+g*.12,.6+Math.min(.4,g/200),this.px>0?"right":"left"),this.crash(!0));const W=s.hitTraffic(this.pos,this.px);W&&(n?this.speed=Math.min(this.speed,W.v*.9):g-W.v>36?(this.damage(10+(g-W.v)*.14,.5+Math.min(.5,(g-W.v)/150),"front"),this.crash(!0)):(this.dmgCool<=0&&this.damage(5,.25,W.x>this.px?"right":"left"),this.speed=W.v*.75,this.px+=Math.sign(this.px-W.x||1)*1.2,this.shakeKick=.3,this.audio.crash(!1)));for(const Y of s.rivals){if(Math.abs(Y.d-this.pos)>4.3||Math.abs(Y.x-this.px)>1.95)continue;const it=Math.sign(this.px-Y.x||1);this.px+=it*.9,Y.x-=it*.9,Y.d>this.pos?g-Y.v>45&&!n?(this.damage(9+(g-Y.v)*.1,.5,"front"),this.crash(!0)):(this.speed=Math.min(this.speed,Y.v*.92),!n&&this.dmgCool<=0&&this.damage(2.5,.15,"front")):(Y.bumpT=.6,!n&&this.dmgCool<=0&&this.damage(2,.15,Math.abs(Y.d-this.pos)<2?it>0?"left":"right":"rear")),this.shakeKick=Math.max(this.shakeKick,.25),n||this.audio.crash(!1)}}const u=this.vmax*(this.turboT>0?Pl:1);this.speed>u&&(this.speed=Math.max(u,this.speed-14*t)),this.speed=Math.max(0,this.speed),this.turboT>0&&(this.turboT=Math.max(0,this.turboT-t),this.flameT=Math.max(this.flameT,.08),this.shakeKick=Math.max(this.shakeKick,.1)),this.pos+=this.speed*t,this.wheelSpin-=this.speed*t/.37,(this.state==="attract"||this.state==="select")&&this.pos>r.goalDist-200&&this.resetPlayer(!0),s.updateTraffic(t,this.pos,()=>{this.state==="race"&&(this.score+=2e3)});let f=1;const d=this.vmax/Tl;for(;f<_s.length-1&&this.speed>_s[f]*d;)f++;const x=.25+.75*Math.min(1,(this.speed-_s[f-1]*d)/((_s[f]-_s[f-1])*d)),M=this.state!=="attract"&&this.state!=="select";this.audio.engine(M&&!this.wrecked,x,e.accel?1:0),this.audio.skid(M?l*Math.min(1,this.speed/20):0),f>this.gear&&e.accel&&this.speed>20&&(this.flameT=.12,M&&this.audio.pop()),this.wasAccel&&!e.accel&&this.speed>55&&this.crashT<=0&&(this.flameT=.2,M&&this.audio.pop()),this.gear=f,this.wasAccel=e.accel,this.flameT=Math.max(0,this.flameT-t);const m=s.particles,p=Math.random()<t*45?1:0;if(p&&l>0&&this.speed>12){const g=a.id==="tokyo"?12105936:16777215;for(const y of[-.9,.9])m.spawn(this.pos-1.4,this.px+y,.35,this.speed*.6,y,.8,.8,.45,2.6,g)}if(p&&c&&this.speed>15){const y=o.zone.startsWith("beach")&&this.px>0?15916192:o.zone==="hills"?13152378:14207128;for(const v of[-.9,.9])m.spawn(this.pos-1.5,this.px+v,.3,this.speed*.5,v*2,1.8,.6,.4,2.2,y)}if(this.dmgCool=Math.max(0,this.dmgCool-t),this.engineSmoke(t),h&&Math.random()<t*60)for(let g=0;g<2;g++)m.spawn(this.pos+Math.random()*2-1,this.px+h*.9,.5,this.speed*.8,-h*(2+Math.random()*3),3+Math.random()*3,.35,.13,-1,Math.random()<.5?16769088:16747040);m.update(t),this.updateWorld(t,{steer:this.steer,yaw:this.driftYaw+this.crashYaw,spin:this.wheelSpin,bounce:this.bounce,brake:e.brake&&this.speed>1||this.crashT>0,flame:this.flameT})}limp(){return this.hp>=35?1:.86+.14*(this.hp/35)}damage(t,e,n){if(this.state!=="race"||this.wrecked)return;this.hp=Math.max(0,this.hp-t),this.dmgCool=.5,this.world.car.hit(e,n),this.hp+t>=55&&this.hp<55&&this.world.car.breakLamp(Math.random()<.5?-1:1),this.hp<=0?this.wreck():this.hp<25&&this.hp+t>=25&&this.flash("WARNING!","HEAVY DAMAGE",2)}wreck(){this.wrecked||(this.hp=0,this.wrecked=!0,this.turboT=0,this.audio.crash(!0),this.audio.pop(),this.mode!=="arcade"&&(this.table=fr(this.world.rivals,this.world.track,"YOU",this.spec.name,1/0,this.raceTime)),this.go("over"),this.audio.sad(),this.audio.music(null),this.saveScore())}engineSmoke(t){if(this.hp>=50||!["race","over","goal"].includes(this.state))return;const e=this.wrecked?30:this.hp<25?14:5;if(this.smokeT+=t*e,this.smokeT<1)return;this.smokeT-=1;const n=this.spec.stations,s=["r32","supra","rx7"].includes(this.spec.id),r=s?n[0].z+.9:n[n.length-1].z-.9,a=s?n[1].top:n[n.length-2].top,o=this.pos-r,l=this.px+(Math.random()-.5)*.6,c=this.wrecked?Math.random()<.5?2236962:3815994:this.hp<25?6974058:12105912,h=this.world.particles;h.spawn(o,l,a+.1,this.speed*.85,(Math.random()-.5)*.8,1.2+Math.random(),1.6+Math.random(),.45,3,c),this.wrecked&&this.t<6&&Math.random()<.5&&h.spawn(o,l,a+.05,this.speed*.9,(Math.random()-.5)*.4,1.5,.35,.3,.5,Math.random()<.5?16747040:16764992)}crash(t){if(!(this.crashT>0)){this.crashT=t?1.6:.8,this.speed*=.35,this.shakeKick=.6,this.audio.crash(t);for(let e=0;e<14;e++)this.world.particles.spawn(this.pos+Math.random()*3-1.5,this.px+Math.random()*3-1.5,.4+Math.random(),this.speed*.5,Math.random()*4-2,1+Math.random()*2,1.1,.7,2.5,e%3?14211288:9079434)}}updateWorld(t,e){const n=this.speed/Tl,s=this.camera,r=54+14*Math.min(1.3,n)*Math.min(1.3,n)+(this.turboT>0?6:0);Math.abs(s.fov-r)>.01&&(s.fov=Math.abs(r-s.fov)>8?r:s.fov+(r-s.fov)*Math.min(1,t*5),s.updateProjectionMatrix()),this.shakeKick=Math.max(0,this.shakeKick-t*1.5);const a=Math.max(0,n-.7)*.12+this.shakeKick*.5;this.world.update(this.pos,this.px,s,a,e)}draw(){const t=this.hud;if(t.clear(),ee.modern&&this.state!=="carselect"){const s=this.world.sunOnHud(this.camera,dt,tn);if(s){const r=Math.max(Math.abs(s.x/dt-.5),Math.abs(s.y/tn-.5))*2;t.flare(s.x,s.y,Math.max(0,Math.min(1,1.25-r)))}}const e=Math.floor(this.clock*2.5)%2===0,n=this.world.route;switch(this.state){case"attract":{t.logo("TURBO",dt/2,70,64,Xt,gn,11540504),t.logo("HORIZON",dt/2,150,56,8452351,2789631,1714832),t.text("'86",dt/2+230,210,24,ki,"left"),t.text("ARCADE  ROAD  RACING",dt/2,236,16,Yt,"center"),e&&t.text(this.touch?"TAP TO START":"PRESS ENTER",dt/2,320,24,Xt,"center"),t.text(`HI-SCORE ${String(this.hi).padStart(8,"0")}`,dt/2,20,16,Qe,"center"),t.text("FREE PLAY",dt-20,tn-30,16,Yt,"right"),t.text(`${this.touch?"TAP":"G"}  GRAPHICS  ${ee.modern?"1992":"1986"}`,dt/2,412,16,Qe,"center"),t.text("©1986 HORIZON SOFT",20,tn-30,16,Yt,"left");break}case"select":{t.text("SELECT  YOUR  ROUTE",dt/2,44,24,Xt,"center");const s=330,r=120,a=150;this.worlds.forEach((l,c)=>{const h=c===0?dt/2-s-20:dt/2+20,u=c===this.routeIdx,f=u?e?Xt:Yt:3816026;t.box(h,a,s,r,c===0?1727160:2363466,f,u?6:4);const d=c===0?16771232:16738992;t.text(l.route.lines[0],h+s/2,a+30,24,d,"center"),t.text(l.route.lines[1],h+s/2,a+66,24,d,"center")}),t.text(this.touch?"TAP A ROUTE, TAP AGAIN TO GO":"< >  ROUTE   ^ v  MODE   ENTER  NEXT",dt/2,290,16,Yt,"center"),[["arcade","ARCADE","BEAT THE CLOCK"],["rivals","VS RIVALS","8-CAR RACE"],["online","ONLINE","RACE REAL PLAYERS"]].forEach(([l,c,h],u)=>{const d=dt/2-375+u*250+7,x=l===this.mode;t.box(d,324,236,54,x?2759248:1315880,x?e?ki:Yt:3816026,x?5:3),t.text(c,d+236/2,334,16,x?Xt:9079464,"center"),t.text(h,d+236/2,356,8,x?Yt:9079464,"center")}),t.text(`${Math.max(0,Math.ceil(20-this.t))}`,dt/2,92,32,gn,"center");break}case"carselect":{const s=this.spec;t.text("SELECT  YOUR  CAR",dt/2,20,24,Xt,"center"),t.text(`${Math.max(0,Math.ceil(25-this.t))}`,dt-30,20,24,gn,"right"),t.text(s.make,dt/2,64,16,Qe,"center"),t.text(s.name,dt/2,88,32,Yt,"center"),t.text(`${s.year}  ${s.group}`,dt/2,130,16,ki,"center"),t.text("<",40,210,48,e?Xt:Yt,"center"),t.text(">",dt-40,210,48,e?Xt:Yt,"center"),[["SPEED",(s.stats.vmax-260)/90],["ACCEL",(s.stats.accel-.85)/.3],["GRIP",(s.stats.grip-.82)/.38]].forEach(([a,o],l)=>{const c=330+l*22;t.text(a,40,c,16,Xt);for(let h=0;h<12;h++)t.rect(150+h*14,c,11,16,h<Math.round(Math.max(.1,Math.min(1,o))*12)?l===0?En:l===1?gn:4251712:2105408)}),t.text(`${s.stats.vmax} KM/H`,340,330,16,Yt),t.text(`CAR ${this.carIdx+1}/${Oe.length}`,dt-30,330,16,Yt,"right"),t.text(this.touch?"TAP CAR: COLOUR":"^ v  COLOUR",dt-30,356,16,Qe,"right"),t.text(`${this.touch?"TAP":"N"}  MUSIC: ${this.musicLabel()}`,dt-30,382,16,ki,"right"),t.box(dt/2-150,410,300,50,1727160,e?Xt:Yt),t.text(this.touch?"TAP TO RACE":"ENTER  RACE",dt/2,427,16,Yt,"center");break}case"name":{t.text("ONLINE  RACE",dt/2,20,24,Xt,"center");break}case"lobby":{this.lobbyHud(e);break}default:{if(this.raceHud(e),this.mode==="online"&&this.nameTags(),this.state==="countdown"){const s=3-Math.floor(this.t);s>0&&t.text(String(s),dt/2,180,64,s===1?En:Xt,"center"),t.text(n.stageNames[0],dt/2,280,16,Yt,"center")}this.table.length&&(this.state==="goal"?this.t>2.5:this.t>2.5)?this.resultsTable(e):this.state==="goal"&&this.mode!=="arcade"?(t.text(this.place===1?"YOU WIN!":`${ur(this.place)} PLACE`,dt/2,150,64,this.place===1?Xt:Qe,"center"),t.text(Sl(this.finishTime),dt/2,240,24,Yt,"center")):this.state==="goal"&&(t.text("GOAL!",dt/2,140,64,Xt,"center"),t.text("CONGRATULATIONS",dt/2,230,24,Qe,"center"),t.text(`TIME BONUS  ${Math.ceil(this.bonusLeft*1e4)}`,dt/2,280,16,Yt,"center"),this.t>3&&this.bonusLeft<=0&&e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",dt/2,330,24,Xt,"center")),this.state==="over"&&!(this.table.length&&this.t>2.5)&&(this.t<2.5?(t.text(this.wrecked?"WRECKED":"TIME UP",dt/2,180,48,En,"center"),this.wrecked&&t.text("ENGINE BLOWN",dt/2,240,24,gn,"center")):(t.text("GAME OVER",dt/2,170,48,En,"center"),t.text(`SCORE ${this.score}`,dt/2,250,24,Yt,"center"),e&&t.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",dt/2,310,24,Xt,"center"))),this.clock<this.musicToast&&this.state!=="goal"&&this.state!=="over"&&(t.box(dt/2-200,146,400,34,1052720,ki,3),t.text(`MUSIC  ${this.musicLabel()}`,dt/2,156,16,Yt,"center")),this.clock<this.msgUntil&&(this.msg==="GO!"||e)&&(t.text(this.msg,dt/2,150,this.msg==="GO!"?64:32,this.msg==="GO!"?Xt:Qe,"center"),this.msg2&&t.text(this.msg2,dt/2,200,24,Xt,"center")),this.paused&&(t.box(dt/2-220,150,440,170,1052720,Yt),t.text("PAUSE",dt/2,180,32,Xt,"center"),t.text(this.touch?"RESUME":"ESC  RESUME",dt/2,230,16,Yt,"center"),t.text(this.touch?"RESTART":"R  RESTART",dt/2,260,16,Yt,"center"),t.text(this.touch?"QUIT":"Q  QUIT",dt/2,290,16,Yt,"center"))}}}lobbyHud(t){const e=this.hud,n=this.net,s=this.spec;e.text("ONLINE  LOBBY",dt/2,14,24,Xt,"center"),e.text(this.touch?"< EXIT":"ESC EXIT",20,18,16,9079464);const r=(n==null?void 0:n.list())??[],a=!n||n.status==="connecting"?"CONNECTING...":n.status==="error"?"COULDN'T CONNECT":r.length?`${r.length+1} PLAYERS HERE`:"WAITING FOR PLAYERS...";e.text(a,dt/2,46,16,(n==null?void 0:n.status)==="error"?En:Qe,"center"),e.text(s.make,40,76,16,Qe),e.text(s.name,40,98,24,Yt),e.text(this.touch?"TAP NAME: CAR   TAP CAR: COLOUR":"< > CAR   ^ v COLOUR",40,130,8,9079464);const o=dt-320,l=70;e.box(o,l,300,40+Math.min(8,r.length+1)*34+(r.length>7?16:0),1052720,3816026,3),e.text("PLAYERS",o+14,l+12,16,Xt);const c=[{name:this.playerName||"PLAYER",car:s.name,st:"YOU",me:!0},...r.map(f=>({name:f.name,car:Oe[f.car%Oe.length].name,st:f.status==="race"?"RACING":"READY",me:!1}))];c.slice(0,8).forEach((f,d)=>{const x=l+40+d*34;e.text(f.name,o+14,x,16,f.me?Xt:Yt),e.text(f.st,o+286,x+4,8,f.st==="RACING"?gn:f.me?Xt:4251712,"right"),e.text(f.car,o+14,x+19,8,9079464)}),c.length>8&&e.text(`+${c.length-8} MORE`,o+14,l+40+8*34,8,Yt);const h=this.world.route;if(e.box(20,410,250,50,1315880,Yt,3),e.text(`${this.touch?"TAP":"R"}  ROUTE`,145,418,8,9079464,"center"),e.text(`${h.lines[0]} ${h.lines[1]}`.slice(0,15),145,434,16,Xt,"center"),(n==null?void 0:n.status)==="error"){e.text("CHECK YOUR CONNECTION, OR PLAY ONLINE AT",dt/2,320,8,Yt,"center"),e.text("FREDDYWONG.GITHUB.IO/TURBO-HORIZON-86",dt/2,340,16,Qe,"center"),e.box(dt/2-150,410,300,50,1727160,t?Xt:Yt),e.text(this.touch?"TAP TO RETRY":"ENTER  RETRY",dt/2,427,16,Yt,"center");return}if(this.pending){const f=Math.max(1,Math.ceil(this.pending.at-xi()));e.text("STARTING IN",dt/2,170,24,Qe,"center"),e.text(String(f),dt/2,206,64,Xt,"center");const d=this.worlds[this.pending.go.route].route;e.text(`${d.lines[0]} ${d.lines[1]}`,dt/2,284,16,Yt,"center");return}r.some(f=>f.status==="race")?e.text("RACE IN PROGRESS - JOIN THE NEXT ONE",dt/2,386,8,gn,"center"):r.length||e.text("SHARE THIS PAGE LINK TO INVITE PLAYERS",dt/2,386,8,Yt,"center");const u=(n==null?void 0:n.status)==="online";e.box(dt/2-150,410,300,50,u?1739322:2105392,u&&t?Xt:Yt),e.text(this.touch?"TAP TO START":"ENTER  START",dt/2,427,16,u?Yt:9079464,"center")}nameTags(){const t=this.hud;this.world.rivals.forEach((e,n)=>{const s=this.world.rivalScreenPos(n,this.camera,dt,tn);if(!s||s.dist>140)return;const r=s.dist<45?16:8;t.text(e.name,s.x,s.y-r,r,e.finished>=0?Xt:Yt,"center")})}resultsTable(t){const e=this.hud,n=dt/2-330,s=660,r=96;e.box(n,r,s,330,1052720,this.place===1&&this.finishTime>=0?Xt:Yt,4);const a=this.finishTime<0?`${this.wrecked?"WRECKED":"TIME UP"}  -  DID NOT FINISH`:this.place===1?"YOU WIN!":`YOU FINISHED ${ur(this.place)}`;e.text(a,dt/2,r+16,16,this.finishTime<0?En:Xt,"center"),this.table.forEach((o,l)=>{const c=r+52+l*30;o.player&&e.rect(n+10,c-6,s-20,28,3811952);const h=o.player?Xt:Yt;e.text(ur(o.pos),n+24,c,16,o.pos===1?gn:h),e.text(o.name,n+110,c,16,h),e.text(o.car,n+230,c,16,o.player?Xt:Qe);const u=Number.isFinite(o.time)?(o.estimated?"~":" ")+Sl(o.time):"DNF";e.text(u,n+s-24,c,16,h,"right")}),t&&this.t>3.5&&e.text(this.touch?"TAP TO CONTINUE":"PRESS ENTER",dt/2,r+340,16,Xt,"center")}raceHud(t){const e=this.hud,n=this.world.route;e.text("SCORE",20,16,16,Xt),e.text(String(this.score).padStart(8,"0"),20,38,16,Yt),e.text("TIME",dt/2,12,16,Xt,"center");const s=Math.ceil(this.timeLeft),r=this.timeLeft<10&&this.state==="race";(!r||t)&&e.text(String(s).padStart(2,"0"),dt/2,34,48,r?En:gn,"center"),e.text(`STAGE ${Math.min(this.stage+1,n.stageNames.length)}`,dt-20,16,16,Xt,"right");const a=Math.max(0,(this.pos-3*ae)/1e3);if(e.text(`${a.toFixed(1)}KM`,dt-20,38,16,Yt,"right"),this.mode!=="arcade"&&this.world.rivals.length&&this.state==="race"){const g=ur(this.place),y=this.touch?84:dt/2-52,v=this.touch?222:90;e.text("POS",y-12,v+8,16,Xt,"right"),e.text(g,y,v,32,this.place===1?Xt:Yt),e.text(`/${this.world.rivals.length+1}`,y+g.length*32+4,v+16,16,Yt)}{const v=this.touch?20:dt-20-170,T=this.touch?this.mode!=="arcade"?270:236:64,E=this.hp>60?4251712:this.hp>30?Xt:En,A=this.hp<25&&this.state==="race";e.text("DAMAGE",v,T,16,A&&t?En:Xt);const C=Math.ceil(this.hp/100*10);for(let b=0;b<10;b++)e.rect(v+b*17,T+22,15,12,b<C&&(!A||t)?E:2105408)}const o=Math.round(this.speed*Ca),l=this.touch,c=l?70:tn-92;e.text("SPEED",20,c,16,Xt),e.text(String(o).padStart(3," "),20,c+26,32,Yt),e.text("KM/H",130,c+42,16,Qe),l?e.tach(20,c+100,this.speed/this.vmax):e.tach(220,tn-24,this.speed/this.vmax);const h=l?20:220,u=l?c+112:tn-80;e.text("TURBO",h,u,16,this.turboT>0&&t?Yt:gn);for(let g=0;g<Pa;g++)e.box(h+92+g*26,u-2,20,20,g<this.turbos?gn:2105392,g<this.turbos?Xt:4210776,3);this.turboT>0&&e.rect(h+92,u+22,this.turboT/Cl*(Pa*26-6),5,Xt);const f=l?dt/2-120:dt-250,d=l?dt/2+120:dt-24,x=l?118:tn-34;e.text("COURSE",f,x-26,16,Xt),e.rect(f,x,d-f,8,2105408);const M=this.world.track.goalDist,m=this.world.track.stageStarts;for(const g of m)e.rect(f+g*ae/M*(d-f)-1,x-4,4,16,Yt);const p=Math.min(1,this.pos/M);e.rect(f,x,p*(d-f),8,ki),e.rect(f+p*(d-f)-4,x-6,8,20,Xt),e.text(n.stageNames[Math.min(this.stage,n.stageNames.length-1)],d,x+14,8,Yt,"right")}}class Og{constructor(){this.down=new Set,this.pressed=new Set,this.taps=[],this.firstInput=[],this.autoGas=!1,window.addEventListener("keydown",t=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code),this.fireFirst()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}onFirstInput(t){this.firstInput.push(t)}fireFirst(){const t=this.firstInput;this.firstInput=[],t.forEach(e=>e())}setVirtual(t,e){e?(this.down.has(t)||this.pressed.add(t),this.down.add(t)):this.down.delete(t)}tap(t,e){this.taps.push({x:t,y:e}),this.fireFirst()}held(...t){return t.some(e=>this.down.has(e))}hit(...t){return t.some(e=>this.pressed.has(e))}endFrame(){this.pressed.clear(),this.taps.length=0}get accel(){return this.held("KeyW","ArrowUp")||this.autoGas&&!this.brake}get brake(){return this.held("KeyS","ArrowDown")}get steer(){return(this.held("KeyD","ArrowRight")?1:0)-(this.held("KeyA","ArrowLeft")?1:0)}get drift(){return this.held("Space")}get confirm(){return this.hit("Enter","Space","NumpadEnter")}}class zg{constructor(t){this.done=null;const e=document.createElement("div");e.style.cssText='position:absolute;inset:0;display:none;align-items:center;justify-content:center;z-index:5;font-family:"Press Start 2P",monospace;';const n=document.createElement("form");n.style.cssText="display:flex;flex-direction:column;align-items:center;gap:2.4vmin;padding:4vmin 5vmin;background:rgba(16,16,48,0.92);border:0.7vmin solid #ffe040;box-shadow:0.8vmin 0.8vmin 0 #000;max-width:90%;";const s=document.createElement("div");s.textContent="ENTER YOUR NAME",s.style.cssText="color:#ffe040;font-size:3.6vmin;text-shadow:0.4vmin 0.4vmin 0 #000;";const r=document.createElement("input");r.maxLength=10,r.autocomplete="off",r.spellcheck=!1,r.setAttribute("autocapitalize","characters"),r.setAttribute("enterkeyhint","go"),r.style.cssText="font-family:inherit;font-size:4.4vmin;width:12ch;text-align:center;text-transform:uppercase;color:#fff;background:#0a0a20;border:0.5vmin solid #40f0ff;padding:1.4vmin;outline:none;";const a=document.createElement("button");a.type="submit",a.textContent="JOIN",a.style.cssText="font-family:inherit;font-size:3.6vmin;color:#fff;background:#1a5ab8;border:0.6vmin solid #fff;padding:1.6vmin 4vmin;box-shadow:0.6vmin 0.6vmin 0 #000;cursor:pointer;";const o=document.createElement("div");o.textContent="LETTERS, NUMBERS, SPACE OR -",o.style.cssText="color:#8a8aa8;font-size:1.8vmin;",n.append(s,r,a,o),e.append(n),t.append(e);for(const l of["keydown","keyup","mousedown","pointerdown","touchstart"])e.addEventListener(l,c=>c.stopPropagation());r.addEventListener("input",()=>{const l=r.value.toUpperCase().replace(/[^A-Z0-9 -]/g,"");l!==r.value&&(r.value=l)}),n.addEventListener("submit",l=>{var h;l.preventDefault();const c=Co(r.value);if(!c){r.focus();return}this.hide(),(h=this.done)==null||h.call(this,c)}),this.root=e,this.input=r}get open(){return this.root.style.display!=="none"}show(t,e){this.done=e,this.input.value=t,this.root.style.display="flex",setTimeout(()=>{this.input.focus(),this.input.select()},50)}hide(){this.root.style.display="none",this.input.blur()}}function Bg(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let g=0,y=o.length;g<y;g++){const v=o[g],T=i.attributes[v];l[v]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const E=i.morphAttributes[v];E&&(c[v]||(c[v]=[]),E.forEach((A,C)=>{const b=new A.array.constructor(A.count*A.itemSize);c[v][C]=new A.constructor(b,A.itemSize,A.normalized)}))}const d=t*.5,x=Math.log10(1/t),M=Math.pow(10,x),m=d*M;for(let g=0;g<r;g++){const y=n?n.getX(g):g;let v="";for(let T=0,E=o.length;T<E;T++){const A=o[T],C=i.getAttribute(A),b=C.itemSize;for(let S=0;S<b;S++)v+=`${~~(C[u[S]](y)*M+m)},`}if(v in e)h.push(e[v]);else{for(let T=0,E=o.length;T<E;T++){const A=o[T],C=i.getAttribute(A),b=i.morphAttributes[A],S=C.itemSize,D=l[A],X=c[A];for(let W=0;W<S;W++){const Y=u[W],it=f[W];if(D[it](a,C[Y](y)),b)for(let $=0,ot=b.length;$<ot;$++)X[$][it](a,b[$][Y](y))}}e[v]=a,h.push(a),a++}}const p=i.clone();for(const g in i.attributes){const y=l[g];if(p.setAttribute(g,new y.constructor(y.array.slice(0,a*y.itemSize),y.itemSize,y.normalized)),g in c)for(let v=0;v<c[g].length;v++){const T=c[g][v];p.morphAttributes[g][v]=new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(h),p}class ht{constructor(t=!1){this.pos=[],this.col=[],this.uvs=[],this.tiles=[],this.hasUv=!1,this.hasTile=!1,this.curTile=[12,0,0],this.m=null,this.tmp=new V,this.c=new Lt,this.hasTile=t}layer(t,e){const n=this.curTile;return this.hasTile=!0,this.curTile=[t,0,0],e(),this.curTile=n,this}with(t,e){const n=this.m;return this.m=n?n.clone().multiply(t):t,e(),this.m=n,this}push(t,e,n){this.tmp.set(t[0],t[1],t[2]),this.m&&this.tmp.applyMatrix4(this.m),this.pos.push(this.tmp.x,this.tmp.y,this.tmp.z),this.c.setHex(e),this.col.push(this.c.r,this.c.g,this.c.b),n&&(this.hasUv=!0),this.uvs.push(n?n[0]:0,n?n[1]:0),this.tiles.push(this.curTile[0],this.curTile[1],this.curTile[2])}tri(t,e,n,s,r){return this.push(t,s,r==null?void 0:r[0]),this.push(e,s,r==null?void 0:r[1]),this.push(n,s,r==null?void 0:r[2]),this}quad(t,e,n,s,r,a){if(a){const[o,l,c,h]=a;this.tri(t,e,n,r,[[o,l],[c,l],[c,h]]),this.tri(t,n,s,r,[[o,l],[c,h],[o,h]])}else this.tri(t,e,n,r),this.tri(t,n,s,r);return this}quadC(t,e,n,s,r){return this.push(t,r[0]),this.push(e,r[1]),this.push(n,r[2]),this.push(t,r[0]),this.push(n,r[2]),this.push(s,r[3]),this}quadT(t,e,n,s,r,a,o){return this.hasTile=!0,this.curTile=[o[0],o[1],0],this.quad(t,e,n,s,r,a),this.curTile=[12,0,0],this}facadeBox(t,e,n,s,r,a,o,l,c,h,u,f=0){const[d,x]=Array.isArray(h)?h:[h,h],M=t-s/2,m=t+s/2,p=e-r/2,g=e+r/2,y=n-a/2,v=n+a/2,T=r/c,E=s/l,A=a/l;return this.quadT([m,p,v],[M,p,v],[M,g,v],[m,g,v],d,[f,0,f+E,T],o),this.quadT([M,p,y],[m,p,y],[m,g,y],[M,g,y],d,[f+.5,0,f+.5+E,T],o),this.quadT([M,p,v],[M,p,y],[M,g,y],[M,g,v],x,[f+.25,0,f+.25+A,T],o),this.quadT([m,p,y],[m,p,v],[m,g,v],[m,g,y],x,[f+.75,0,f+.75+A,T],o),this.quad([M,g,y],[m,g,y],[m,g,v],[M,g,v],u),this}poly(t,e){for(let n=1;n<t.length-1;n++)this.tri(t[0],t[n],t[n+1],e);return this}box(t,e,n,s,r,a,o){const l=Array.isArray(o)?o:[o],c=l[0],h=l[1]??c,u=l[2]??c,f=l[3]??c,d=t-s/2,x=t+s/2,M=e-r/2,m=e+r/2,p=n-a/2,g=n+a/2;return this.quad([d,m,p],[x,m,p],[x,m,g],[d,m,g],h),this.quad([d,M,p],[d,M,g],[x,M,g],[x,M,p],c),this.quad([d,M,p],[x,M,p],[x,m,p],[d,m,p],u),this.quad([x,M,g],[d,M,g],[d,m,g],[x,m,g],f),this.quad([d,M,g],[d,M,p],[d,m,p],[d,m,g],c),this.quad([x,M,p],[x,M,g],[x,m,g],[x,m,p],c),this}prism(t,e,n,s,r,a,o,l,c=null,h=0){const u=Array.isArray(l)?l:[l];for(let f=0;f<o;f++){const d=h+f/o*Math.PI*2,x=h+(f+1)/o*Math.PI*2,M=[t+Math.cos(d)*r,n,e+Math.sin(d)*r],m=[t+Math.cos(x)*r,n,e+Math.sin(x)*r],p=[t+Math.cos(x)*a,s,e+Math.sin(x)*a],g=[t+Math.cos(d)*a,s,e+Math.sin(d)*a];a<=1e-4?this.tri(M,m,g,u[f%u.length]):this.quad(M,m,p,g,u[f%u.length])}if(c!==null&&a>1e-4){const f=[];for(let d=0;d<o;d++){const x=h+d/o*Math.PI*2;f.push([t+Math.cos(x)*a,s,e+Math.sin(x)*a])}this.poly(f,c)}return this}blob(t,e,n,s,r,a,o){const l=new Jo(1,0),c=l.attributes.position,h=Array.isArray(o)?o:[o];for(let u=0;u<c.count;u+=3){const f=M=>[t+c.getX(M)*s,e+c.getY(M)*r,n+c.getZ(M)*a],d=c.getY(u)+c.getY(u+1)+c.getY(u+2),x=h.length>1?d>.3?h[0]:h[1]:h[0];this.tri(f(u),f(u+1),f(u+2),x)}return l.dispose(),this}build(t=!1){const e=new He;if(e.setAttribute("position",new ge(this.pos,3)),e.setAttribute("color",new ge(this.col,3)),this.hasUv&&e.setAttribute("uv",new ge(this.uvs,2)),this.hasTile&&e.setAttribute("tile",new ge(this.tiles,3)),t){const n=Bg(e,1e-4);return e.dispose(),n.computeVertexNormals(),n.computeBoundingSphere(),n}return e.computeVertexNormals(),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}}function kg(i){return new Ft().makeRotationY(i)}function Dl(i,t,e){return new Ft().makeTranslation(i,t,e)}class Ih{constructor(){this.group=new zn,this.layers=[],this.sun=null,this.tmp=new V}sunNdc(t){if(!this.sun)return null;this.sun.obj.updateMatrixWorld();const e=this.tmp.copy(this.sun.local);return this.sun.obj.localToWorld(e),e.project(t),e.z<1?e:null}addLayer(t,e){this.group.add(t),this.layers.push({obj:t,factor:e})}update(t,e){this.group.position.copy(t);for(const n of this.layers)n.obj.rotation.y=e*n.factor}}const hn=(i={})=>new Xe({vertexColors:!0,fog:!1,side:ue,...i}),Ul=(i,t)=>{const e=n=>Math.min(255,Math.round((i>>n&255)*t));return e(16)<<16|e(8)<<8|e(0)},Gg=i=>{const t=e=>Math.round(Math.round(e/255*31)*8.225806451612904);return t(i>>16&255)<<16|t(i>>8&255)<<8|t(i&255)},Hg=(i,t,e)=>{const n=s=>Math.round((i>>s&255)+((t>>s&255)-(i>>s&255))*e);return n(16)<<16|n(8)<<8|n(0)};function Lh(i,t,e=.45){const s=document.createElement("canvas");s.width=2,s.height=2048;const r=s.getContext("2d"),a=d=>"#"+d.toString(16).padStart(6,"0");r.fillStyle=a(t),r.fillRect(0,0,2,2048);const o=d=>{if(d<=i[0][0])return i[0][1];for(let x=1;x<i.length;x++)if(d<=i[x][0])return Hg(i[x-1][1],i[x][1],(d-i[x-1][0])/(i[x][0]-i[x-1][0]));return i[i.length-1][1]},l=ee.modern,c=l?.09:e;for(let d=0;d<90;d+=c*(d<20||l?1:3)){const M=2048*(90-Math.min(90,d+c*(d<20||l?1:3)))/180,m=2048*(90-d)/180;r.fillStyle=a(l?o(d):Gg(o(d))),r.fillRect(0,Math.floor(M),2,Math.ceil(m-M)+1)}const h=new Us(s);h.magFilter=l?en:ke,h.minFilter=l?en:ke,h.generateMipmaps=!1,h.colorSpace=De;const u=new Qo(2800,24,90),f=new fe(u,new Xe({map:h,fog:!1,side:qe,depthWrite:!1}));return f.renderOrder=-10,f}const Zt=(i,t,e,n)=>[Math.sin(t)*i+Math.cos(t)*e,n,-Math.cos(t)*i+Math.sin(t)*e];function Ia(i,t,e,n,s,r,a=40,o=[6,18]){const l=new ht,c=240,h=new Float32Array(c+1);for(let u=0;u<a;u++){const f=i.next()*c,d=i.range(.3,1)*n,x=i.range(o[0],o[1]);for(let M=0;M<=c;M++){let m=Math.abs(M-f);m=Math.min(m,c-m),h[M]=Math.max(h[M],d*Math.max(0,1-m/x))}}for(let u=0;u<c;u++){const f=u/c*Math.PI*2,d=(u+1)/c*Math.PI*2,x=h[u]*s(f),M=h[u+1]*s(d);if(!(x<1&&M<1)){if(ee.modern){const m=g=>Ul(e,.86+.26*Math.min(1,g/n)),p=Ul(e,.78);l.quadC(Zt(t,f,0,-60),Zt(t,d,0,-60),Zt(t,d,0,M),Zt(t,f,0,x),[p,p,m(M),m(x)])}else l.quad(Zt(t,f,0,-60),Zt(t,d,0,-60),Zt(t,d,0,M),Zt(t,f,0,x),e);if(r!==void 0){const m=n*.72;x>m&&M>m&&l.quad(Zt(t-1,f,0,x-(x-m)*.6),Zt(t-1,d,0,M-(M-m)*.6),Zt(t-1,d,0,M),Zt(t-1,f,0,x),r)}}}return new fe(l.build(),hn())}function Dh(i,t,e=500){const n=new Zo(i,i,e,32,1,!0);return n.translate(0,-e/2+.5,0),new fe(n,new Xe({color:t,fog:!1,side:ue}))}function Vg(i,t,e){const n=Math.tan(e*Math.PI/180)*i,[s,r,a]=Zt(i,t,0,n);return new V(s,r,a)}function Uh(i,t,e,n,s,r=20){const a=new ht,o=Math.tan(e*Math.PI/180)*i;if(ee.modern){const l=Math.max(r,40),c=[...s].sort((u,f)=>f[0]-u[0]),h=(u,f)=>Zt(i,t,Math.cos(f)*n*u,o+Math.sin(f)*n*u);for(let u=0;u<c.length;u++){const[f,d]=c[u],[x,M]=u+1<c.length?c[u+1]:[0,c[u][1]];for(let m=0;m<l;m++){const p=m/l*Math.PI*2,g=(m+1)/l*Math.PI*2;a.quadC(h(f,p),h(f,g),h(x,g),h(x,p),[d,d,M,M])}}return new fe(a.build(),hn())}for(const[l,c]of s){const h=[];for(let u=0;u<r;u++){const f=u/r*Math.PI*2;h.push(Zt(i,t,Math.cos(f)*n*l,o+Math.sin(f)*n*l))}a.poly(h,c),i-=2}return new fe(a.build(),hn())}function Po(i,t,e,n,s=-Math.PI,r=Math.PI,a=[4,13]){const o=new ht,[l,c,h]=n,u=(f,d,x,M,m,p,g,y=0,v=Math.PI*2)=>{const T=[],E=ee.modern?24:12;for(let A=0;A<=E;A++){const C=y+(v-y)*A/E;T.push(Zt(f,d,x+Math.cos(C)*m,M+Math.sin(C)*p))}o.poly(T,g)};for(let f=0;f<e;f++){const d=i.range(s,r),x=i.range(a[0],a[1]),M=Math.tan(x*Math.PI/180)*t,m=i.range(140,340),p=i.int(4,8),g=t-f*6;u(g,d,0,M,m*.9,16,h,Math.PI,Math.PI*2);for(let y=0;y<p;y++){const v=i.range(-m,m)*.65,T=i.range(0,34)*(1-Math.abs(v)/m),E=i.range(45,100),A=E*i.range(.5,.7),C=g-1-y*.3;u(C,d,v,M+T,E,A,c,0,Math.PI),u(C-.1,d,v-E*.15,M+T+A*.2,E*.7,A*.65,l,.2,Math.PI)}}return new fe(o.build(),hn())}function Nh(i,t,e,n,s,r,a=.6,o=.25){const l=new ht,c=new ht,h=420;for(let f=0;f<h;f++){const d=f/h*Math.PI*2+i.range(-.004,.004),x=r(d);if(x<=0||!i.chance(a))continue;const M=i.range(14,40),m=i.range(.15,1)*s*x*(i.chance(.1)?1.4:1),p=t-i.range(0,60),g=i.pick(e);if(l.quad(Zt(p,d,-M/2,-40),Zt(p,d,M/2,-40),Zt(p,d,M/2,m),Zt(p,d,-M/2,m),g),i.chance(.25)){const y=M*.5;l.quad(Zt(p,d,-y/2,m),Zt(p,d,y/2,m),Zt(p,d,y/2,m+m*.2),Zt(p,d,-y/2,m+m*.2),g)}if(n.length){for(let y=6;y<m-4;y+=7)for(let v=-M/2+3;v<M/2-3;v+=5){if(!i.chance(o))continue;const T=i.pick(n);c.quad(Zt(p-1,d,v,y),Zt(p-1,d,v+2.6,y),Zt(p-1,d,v+2.6,y+3.4),Zt(p-1,d,v,y+3.4),T)}m>s*.6&&i.chance(.6)&&c.quad(Zt(p-1,d,-1.5,m+1),Zt(p-1,d,1.5,m+1),Zt(p-1,d,1.5,m+4),Zt(p-1,d,-1.5,m+4),16719904)}}const u=new zn;return u.add(new fe(l.build(),hn())),c.empty||u.add(new fe(c.build(),hn())),u}function Wg(i,t){const e=[],n=[],s=new Lt;for(let a=0;a<t;a++){const o=i.next()*Math.PI*2,l=i.range(12,75)*(Math.PI/180),c=2600;e.push(Math.sin(o)*Math.cos(l)*c,Math.sin(l)*c,-Math.cos(o)*Math.cos(l)*c),s.setHex(i.pick([16777215,13162751,16771264,10137855])),n.push(s.r,s.g,s.b)}const r=new He;return r.setAttribute("position",new ge(e,3)),r.setAttribute("color",new ge(n,3)),new eg(r,new Th({size:1,sizeAttenuation:!1,vertexColors:!0,fog:!1}))}function Xg(i,t,e,n,s,r){const a=new ht,o=(l,c)=>Zt(i,t,l,c);return a.poly([o(-n,-40),o(n,-40),o(n*.12,e),o(-n*.12,e)],s),a.poly([o(-n*.12,e),o(n*.12,e),o(n*.32,e*.62),o(n*.14,e*.7),o(0,e*.6),o(-n*.16,e*.68),o(-n*.32,e*.6)].map(l=>[l[0],l[1],l[2]]).reverse(),r),new fe(a.build(),hn())}function qg(i,t,e,n,s){const r=new ht;for(let a=0;a<s;a++){const o=i.range(e,n),l=i.range(.8,1.4),c=t-a*4,h=(u,f)=>Zt(c,o,u*l,f*l-1.5);i.chance(.6)?(r.poly([h(-34,0),h(30,0),h(36,7),h(-38,7)],3820138),r.poly([h(-26,7),h(14,7),h(14,11),h(-26,11)],i.pick([13130314,4885192,14196800])),r.poly([h(18,7),h(30,7),h(30,17),h(18,17)],15790320),r.poly([h(22,17),h(26,17),h(26,22),h(22,22)],2763306)):(r.poly([h(-16,0),h(16,0),h(20,4),h(-18,4)],16053492),r.poly([h(-8,4),h(10,4),h(8,8),h(-6,8)],14739696))}return new fe(r.build(),hn())}function Yg(i,t){const e=new ht,n=new ht,s=(a,o)=>Zt(i,t,a,o);e.poly([s(-90,-40),s(90,-40),s(60,6),s(20,14),s(-30,12),s(-70,2)],6978138);for(let a=0;a<6;a++){const o=12+a*9,l=o+9,c=7-a*.6,h=7-(a+1)*.6;e.poly([s(-c,o),s(c,o),s(h,l),s(-h,l)],a%2?14170682:16777215)}e.poly([s(-4.5,66),s(4.5,66),s(4.5,72),s(-4.5,72)],2763306),e.poly([s(-5,72),s(5,72),s(0,78)],14170682),n.poly([s(-3.5,67),s(3.5,67),s(3.5,71),s(-3.5,71)],16774320);const r=new zn;return r.add(new fe(e.build(),hn()),new fe(n.build(),hn())),r}function Kg(i,t,e,n){const s=new ht;for(let r=0;r<70;r++){const a=-i.range(.5,26),o=n*(.25+-a/26*.75),l=i.range(-o,o),c=i.range(4,22)*(1- -a/40),h=i.pick([16774336,16769168,16777215,16763024]);s.quad(Zt(t,e,l-c,a),Zt(t,e,l+c,a),Zt(t,e,l+c,a+.9),Zt(t,e,l-c,a+.9),h)}return new fe(s.build(),hn())}function $g(i,t,e){const n=new ht;for(let s=0;s<e;s++){const r=i.range(-Math.PI,Math.PI),a=Math.tan(i.range(8,22)*Math.PI/180)*t;for(const[o,l]of[[-3,16724016],[3,3211104],[0,16777215]])n.quad(Zt(t,r,o-1.2,a-1.2),Zt(t,r,o+1.2,a-1.2),Zt(t,r,o+1.2,a+1.2),Zt(t,r,o-1.2,a+1.2),l)}return new fe(n.build(),hn())}const Ot={ASPHALT:0,PAINT:1,KERB:2,GRASS:3,SAND:4,SEA:5,CONCRETE:6,TUNNEL:7,PAVING:8,CITY:9,BAY:10,SHALLOW:11,FOAM:12,CEILING:13,DIRT:14},Zg={[Ot.SEA]:.04,[Ot.BAY]:.03,[Ot.SHALLOW]:.06,[Ot.FOAM]:.09},G=128,bn=4;class ec{constructor(t){this.cv=t,this.s=1,this.g=t.getContext("2d",{willReadFrequently:!0})}seed(t){this.s=t}rnd(){return this.s=this.s*1103515245+12345&2147483647,this.s/2147483647}noise(t,e,n,s,r=[1,1,1]){const a=this.g.createImageData(G,G);for(let o=0;o<G*G;o++){const l=Math.max(0,Math.min(1,n+(this.rnd()-.5)*2*s));a.data[o*4]=255*l*r[0],a.data[o*4+1]=255*l*r[1],a.data[o*4+2]=255*l*r[2],a.data[o*4+3]=255}this.g.putImageData(a,t,e)}wrapRect(t,e,n,s,r,a,o){const l=this.g;l.fillStyle=o;for(const c of[0,-G])for(const h of[0,-G]){const u=n+c,f=s+h;u+r<=0||f+a<=0||u>=G||f>=G||l.fillRect(t+Math.max(0,u),e+Math.max(0,f),Math.min(G,u+r)-Math.max(0,u),Math.min(G,f+a)-Math.max(0,f))}}dot(t,e,n,s=1){this.wrapRect(t,e,Math.floor(this.rnd()*G),Math.floor(this.rnd()*G),s,s,n)}grey(t,e=1){const n=Math.round(255*t);return`rgba(${n},${n},${n},${e})`}}function jg(i,t){const e=t%bn*G,n=Math.floor(t/bn)*G,s=i.g;switch(i.seed(t*7919+13),s.save(),s.beginPath(),s.rect(e,n,G,G),s.clip(),t){case Ot.ASPHALT:{i.noise(e,n,.88,.05);for(let r=0;r<700;r++)i.dot(e,n,i.grey(i.rnd()<.5?.97:.72));i.wrapRect(e,n,70,20,34,22,i.grey(.8)),i.wrapRect(e,n,70,20,34,1,i.grey(.68)),i.wrapRect(e,n,70,41,34,1,i.grey(.68)),s.strokeStyle=i.grey(.6),s.lineWidth=1;for(let r=0;r<3;r++){s.beginPath();let a=e+i.rnd()*G,o=n+i.rnd()*G;s.moveTo(a,o);for(let l=0;l<7;l++)a+=(i.rnd()-.5)*14,o+=3+i.rnd()*7,s.lineTo(a,o);s.stroke()}i.wrapRect(e,n,26,0,14,G,"rgba(0,0,0,0.05)"),i.wrapRect(e,n,88,0,14,G,"rgba(0,0,0,0.05)");break}case Ot.PAINT:{i.noise(e,n,.97,.03);for(let r=0;r<160;r++)i.dot(e,n,i.grey(.78+i.rnd()*.1),i.rnd()<.3?2:1);break}case Ot.KERB:{for(let r=0;r<G;r++){const a=.78+.22*Math.sin(r/G*Math.PI);s.fillStyle=i.grey(a),s.fillRect(e+r,n,1,G)}for(let r=0;r<G;r+=32)i.wrapRect(e,n,0,r,G,2,i.grey(.55));for(let r=0;r<200;r++)i.dot(e,n,"rgba(0,0,0,0.12)");break}case Ot.GRASS:{i.noise(e,n,.84,.06);for(let r=0;r<40;r++){const a=i.rnd()*G,o=i.rnd()*G,l=4+i.rnd()*8;i.wrapRect(e,n,a,o,l,l*.6,"rgba(0,0,0,0.08)")}for(let r=0;r<420;r++){const a=Math.floor(i.rnd()*G),o=Math.floor(i.rnd()*G),l=i.rnd()<.6;i.wrapRect(e,n,a,o,1,2+Math.floor(i.rnd()*3),l?i.grey(1,.85):"rgba(0,0,0,0.25)")}for(let r=0;r<14;r++)i.dot(e,n,"rgba(255,255,255,1)",2);break}case Ot.DIRT:{i.noise(e,n,.85,.08);for(let r=0;r<120;r++)i.dot(e,n,i.rnd()<.5?i.grey(1):i.grey(.62),i.rnd()<.3?2:1);break}case Ot.SAND:{for(let r=0;r<G;r++)for(let a=0;a<G;a++){const l=.9+Math.sin(a/G*Math.PI*8+Math.sin(r/G*Math.PI*2)*2.2)*.04+(i.rnd()-.5)*.06;s.fillStyle=i.grey(l),s.fillRect(e+a,n+r,1,1)}for(let r=0;r<70;r++)i.dot(e,n,i.grey(1),i.rnd()<.3?2:1);for(let r=0;r<8;r++)i.wrapRect(e,n,40+r%2*7+r*2,r*16,4,7,"rgba(0,0,0,0.13)");break}case Ot.SEA:case Ot.BAY:case Ot.SHALLOW:{const r=t===Ot.SHALLOW?.86:.8;if(i.noise(e,n,r,.03),t===Ot.SHALLOW){s.strokeStyle=i.grey(1,.55);for(let a=0;a<26;a++){s.beginPath();const o=e+i.rnd()*G,l=n+i.rnd()*G;s.moveTo(o,l),s.quadraticCurveTo(o+(i.rnd()-.5)*30,l+(i.rnd()-.5)*30,o+(i.rnd()-.5)*40,l+(i.rnd()-.5)*40),s.stroke()}}for(let a=0;a<60;a++){const o=i.rnd()*G,l=i.rnd()*G,c=6+i.rnd()*16;i.wrapRect(e,n,o,l+1,c,1,"rgba(0,0,0,0.12)"),i.wrapRect(e,n,o+2,l,c-3,1,i.grey(1,t===Ot.BAY?.55:.9))}for(let a=0;a<40;a++)i.dot(e,n,i.grey(1));break}case Ot.FOAM:{i.noise(e,n,.93,.07);for(let r=0;r<80;r++)i.wrapRect(e,n,i.rnd()*G,i.rnd()*G,3+i.rnd()*8,2,"rgba(0,0,0,0.08)");break}case Ot.CONCRETE:{i.noise(e,n,.88,.04);for(let r=0;r<10;r++)i.wrapRect(e,n,i.rnd()*G,i.rnd()*G,6+i.rnd()*20,4+i.rnd()*14,"rgba(0,0,0,0.05)");i.wrapRect(e,n,0,0,2,G,i.grey(.6)),i.wrapRect(e,n,64,0,1,G,i.grey(.72)),i.wrapRect(e,n,0,0,G,1,i.grey(.72));for(let r=0;r<4;r++)i.wrapRect(e,n,10+r*31,0,2,20+i.rnd()*40,"rgba(0,0,0,0.07)");break}case Ot.TUNNEL:{i.noise(e,n,.93,.03);for(let r=0;r<G;r+=16)i.wrapRect(e,n,0,r,G,1,i.grey(.72));for(let r=0;r<G;r+=16)for(let a=r/16%2?8:0;a<G;a+=16)i.wrapRect(e,n,a,r,1,16,i.grey(.76));for(let r=0;r<6;r++)i.wrapRect(e,n,i.rnd()*G,i.rnd()*G,10,6,"rgba(0,0,0,0.08)");break}case Ot.CEILING:{i.noise(e,n,.86,.04);for(let r=0;r<G;r+=32)i.wrapRect(e,n,r,0,2,G,i.grey(.6));i.wrapRect(e,n,0,60,G,6,i.grey(.7));break}case Ot.PAVING:{i.noise(e,n,.9,.04);for(let r=0;r<G;r+=16){i.wrapRect(e,n,0,r,G,1,i.grey(.68));for(let a=r/16%2?16:0;a<G;a+=32)i.wrapRect(e,n,a,r,1,16,i.grey(.68))}for(let r=0;r<12;r++)i.wrapRect(e,n,Math.floor(i.rnd()*4)*32+1,Math.floor(i.rnd()*8)*16+1,31,15,"rgba(0,0,0,0.05)");break}case Ot.CITY:{s.fillStyle="#16182c",s.fillRect(e,n,G,G);for(let r=0;r<4;r++){const a=r*32+14;i.wrapRect(e,n,0,a,G,3,"#3a3a50"),i.wrapRect(e,n,r*32+14,0,3,G,"#3a3a50");for(let o=2;o<G;o+=8)i.wrapRect(e,n,o,a-1,1,1,"#ffd890")}for(let r=0;r<90;r++){const a=["#ffe8a0","#fff6d8","#a0f0ff","#ffb060"][Math.floor(i.rnd()*4)];i.dot(e,n,a)}for(let r=0;r<18;r++){const a=Math.floor(i.rnd()*4)*32+15;i.wrapRect(e,n,i.rnd()*G,a,2,1,i.rnd()<.5?"#ff3020":"#ffffff")}break}default:s.fillStyle="#ffffff",s.fillRect(e,n,G,G)}s.restore()}function Jg(){const i=document.createElement("canvas");i.width=i.height=G*bn;const t=new ec(i);for(let e=0;e<16;e++)jg(t,e);return nc(i)}function nc(i){const t=i.getContext("2d"),e=new Uint8Array(G*G*4*16);for(let s=0;s<16;s++){const r=t.getImageData(s%bn*G,Math.floor(s/bn)*G,G,G).data;for(let a=0;a<G;a++)e.set(r.subarray((G-1-a)*G*4,(G-a)*G*4),(s*G*G+a*G)*4)}const n=new Xo(e,G,G,16);return n.wrapS=n.wrapT=Lr,n.magFilter=en,n.minFilter=jn,n.generateMipmaps=!0,n.colorSpace=De,n.needsUpdate=!0,n}function qr(i){return[i,0]}const Fh=new Sh(new Uint8Array([255,255,255,255]),1,1);Fh.needsUpdate=!0;function zr(i,t,e){const n=e??{value:0};return i.map=Fh,i.onBeforeCompile=s=>{s.uniforms.uTime=n,s.uniforms.uArr={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 tile;
varying vec3 vTile;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTile = tile;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTile;
uniform float uTime;
uniform highp sampler2DArray uArr;`).replace("#include <map_fragment>",`
#ifdef USE_MAP
  vec2 tuv = vMapUv + vec2(0.0, vTile.z * uTime);
  diffuseColor *= texture(uArr, vec3(tuv, vTile.x + 0.25));
#endif`)},i.customProgramCacheKey=()=>"tilearray",n}const ye={HOTEL:0,DECO:1,SHOP:2,MOTEL:3,OFFICE_WARM:4,OFFICE_COOL:5,OFFICE_DARK:6,APARTMENT:7,STONE:8};function Qg(i,t){const e=t%bn*G,n=Math.floor(t/bn)*G,s=i.g;i.seed(t*104729+7);const r=(a,o,l,c,h)=>{s.fillStyle=h,s.fillRect(e+a,n+o,l,c)};switch(s.save(),s.beginPath(),s.rect(e,n,G,G),s.clip(),t){case ye.HOTEL:{r(0,0,G,G,"#f4f2ec");for(let a=0;a<4;a++){const o=a*32;r(0,o+30,G,2,"#d8d4cc");for(let l=0;l<4;l++){const c=l*32+5;r(c-1,o+5,24,20,"#c8c8c8");const h=s.createLinearGradient(0,n+o+6,0,n+o+24);h.addColorStop(0,"#2a6aa8"),h.addColorStop(1,"#6ab4e4"),s.fillStyle=h,s.fillRect(e+c,n+o+6,22,18),r(c+10,o+6,2,18,"#e8e8e8"),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(e+c+2,n+o+22),s.lineTo(e+c+9,n+o+7),s.lineTo(e+c+12,n+o+7),s.lineTo(e+c+5,n+o+22),s.fill(),r(c-3,o+21,28,2,"#ffffff");for(let u=0;u<7;u++)r(c-2+u*4,o+23,1,5,"#ffffff");r(c-3,o+28,28,2,"#bdbab2")}}break}case ye.DECO:{r(0,0,G,G,"#f6f0e4");for(let a=0;a<G;a+=32)r(a,0,4,G,"#e2dacb"),r(a+4,0,1,G,"#cfc6b4");for(let a=0;a<4;a++){const o=a*32;r(0,o,G,3,"#e8e0d0");for(let l=0;l<4;l++){const c=l*32+9;s.fillStyle="#3a78a8",s.beginPath(),s.arc(e+c+7,n+o+13,6,0,Math.PI*2),s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),r(c+2,o+22,10,6,"#3a78a8"),r(c+1,o+21,12,1,"#ffffff")}}break}case ye.SHOP:{r(0,0,G,G,"#f2eee6"),r(0,0,G,10,"#e4ddd0");for(let a=0;a<4;a++)r(a*32+8,18,16,14,"#4a86b8");r(0,40,G,4,"#d0c8b8"),r(4,52,120,70,"#2a3a4c");for(let a=0;a<30;a++)r(6+i.rnd()*110,70+i.rnd()*44,4+i.rnd()*6,3+i.rnd()*6,["#ff6a8a","#ffe060","#60d0ff","#ffffff","#90e060"][Math.floor(i.rnd()*5)]);r(4,52,120,3,"#8ab8d8"),r(54,64,20,58,"#1a2430"),r(70,92,2,4,"#e0c060");for(let a=4;a<124;a+=30)r(a,52,2,70,"#d8d8d8");break}case ye.MOTEL:{r(0,0,G,G,"#f4efe6");for(let a=0;a<2;a++){const o=a*64;r(0,o+58,G,6,"#d6d0c4"),r(0,o+54,G,2,"#ffffff");for(let l=0;l<16;l++)r(l*8,o+54,1,6,"#ffffff");for(let l=0;l<2;l++){const c=l*64;r(c+6,o+14,16,38,["#2a8a8a","#c85a4a"][l]),r(c+18,o+32,2,3,"#e0c060"),r(c+30,o+18,26,18,"#4a7aa8"),r(c+30,o+18,26,2,"#ffffff"),r(c+34,o+38,14,8,"#c8c8c8"),r(c+35,o+39,12,1,"#9a9a9a")}}break}case ye.OFFICE_WARM:case ye.OFFICE_COOL:case ye.OFFICE_DARK:{r(0,0,G,G,"#1a1e36");const a=t===ye.OFFICE_WARM?.42:t===ye.OFFICE_COOL?.55:.12,o=["#ffe6a0","#ffd27a","#fff2c8"],l=["#e8f6ff","#c8ecff","#ffffff"];for(let c=0;c<8;c++){const h=c*16,u=t===ye.OFFICE_COOL&&i.rnd()<.5;for(let f=0;f<8;f++){const d=f*16,x=u||i.rnd()<a,M=x?i.rnd()<.15?"#8adfff":(t===ye.OFFICE_COOL?l:o)[Math.floor(i.rnd()*3)]:"#262c4c";if(r(d+2,h+3,12,10,M),x&&i.rnd()<.4)for(let m=0;m<4;m++)r(d+2,h+4+m*3,12,1,"rgba(0,0,0,0.25)");x&&i.rnd()<.2&&r(d+5,h+8,3,5,"rgba(20,20,40,0.6)"),x||r(d+3,h+4,4,1,"rgba(120,140,200,0.4)")}r(0,h,G,2,"#2a3054")}for(let c=0;c<G;c+=16)r(c,0,2,G,"#2c3258");break}case ye.APARTMENT:{r(0,0,G,G,"#2a2440");for(let a=0;a<6;a++){const o=a*21;for(let l=0;l<4;l++){const c=l*32,h=i.rnd()<.5;r(c+4,o+3,24,13,h?["#ffb860","#ffd890","#fff0c8"][Math.floor(i.rnd()*3)]:"#3a3456"),h&&r(c+4+i.rnd()*18,o+3,6,13,"rgba(255,240,220,0.6)"),r(c+2,o+15,28,2,"#8a86a0");for(let u=0;u<7;u++)r(c+3+u*4,o+17,1,3,"#6a6680");i.rnd()<.3&&r(c+24,o+9,4,6,"#b0b0c0")}}break}case ye.STONE:{i.noise(e,n,.9,.05);for(let a=0;a<G;a+=16)r(0,a,G,1,"rgba(0,0,0,0.18)");break}default:r(0,0,G,G,"#ffffff")}s.restore()}function t1(){const i=document.createElement("canvas");i.width=i.height=G*bn;const t=new ec(i);for(let e=0;e<16;e++)Qg(t,e);return nc(i)}const qt={LENS:0,LENS_ROUND:1,LENS_BAR:2,MESH:3,LOUVRE:4,TREAD:5,RIM_STAR:6,RIM_MULTI:7,RIM_MESH:8,RIM_DIAL:9,SIDEWALL:10,RIM_STEEL:11,PLAIN:12,HEADLAMP:13,SEAT:14,RIM_SIX:15},e1={star:qt.RIM_STAR,six:qt.RIM_SIX,multi:qt.RIM_MULTI,mesh:qt.RIM_MESH,dial:qt.RIM_DIAL,steel:qt.RIM_STEEL};function n1(i,t){const e=t%bn*G,n=Math.floor(t/bn)*G,s=i.g;i.seed(t*15485863+3);const r=(u,f,d,x,M)=>{s.fillStyle=M,s.fillRect(e+u,n+f,d,x)},a=G/2,o=(u,f,d=a,x=a)=>{s.fillStyle=f,s.beginPath(),s.arc(e+d,n+x,u,0,Math.PI*2),s.fill()},l=(u,f,d)=>{s.strokeStyle=d,s.lineWidth=f,s.beginPath(),s.arc(e+a,n+a,u,0,Math.PI*2),s.stroke()},c=(u,f=14)=>{o(f+3,i.grey(.55)),o(f,i.grey(.92));for(let d=0;d<u;d++){const x=d/u*Math.PI*2;o(2.6,i.grey(.35),a+Math.cos(x)*f*.62,a+Math.sin(x)*f*.62)}o(4,i.grey(.7))},h=()=>{l(61,6,i.grey(1)),l(57,2,i.grey(.6))};switch(s.save(),s.beginPath(),s.rect(e,n,G,G),s.clip(),s.clearRect(e,n,G,G),t){case qt.LENS:{r(0,0,G,G,i.grey(.55)),r(6,8,G-12,G-16,i.grey(.88));for(let f=10;f<G-10;f+=9)r(6,f,G-12,2,i.grey(.62));for(let f=10;f<G-8;f+=14)r(f,8,1,G-16,i.grey(.7));const u=s.createRadialGradient(e+a,n+a,4,e+a,n+a,60);u.addColorStop(0,"rgba(255,255,255,0.75)"),u.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=u,s.fillRect(e,n,G,G);break}case qt.LENS_ROUND:{r(0,0,G,G,i.grey(.5)),o(62,i.grey(.6));for(let u=58;u>8;u-=7)o(u,i.grey(.72+(58-u)/200)),l(u,1.5,i.grey(.55+(58-u)/250));o(12,i.grey(1));break}case qt.LENS_BAR:{r(0,0,G,G,i.grey(.7));for(let u=0;u<G;u+=4)r(u,0,2,G,i.grey(.9));r(0,0,G,10,i.grey(.5)),r(0,G-10,G,10,i.grey(.5)),r(0,a-3,G,6,i.grey(1));break}case qt.MESH:{r(0,0,G,G,i.grey(.12)),s.strokeStyle=i.grey(.85),s.lineWidth=1.6;for(let u=-G;u<G*2;u+=10)s.beginPath(),s.moveTo(e+u,n),s.lineTo(e+u+G,n+G),s.stroke(),s.beginPath(),s.moveTo(e+u,n+G),s.lineTo(e+u+G,n),s.stroke();break}case qt.LOUVRE:{for(let u=0;u<G;u+=16){const f=s.createLinearGradient(0,n+u,0,n+u+16);f.addColorStop(0,i.grey(1)),f.addColorStop(.55,i.grey(.7)),f.addColorStop(.6,i.grey(.08)),f.addColorStop(1,i.grey(.15)),s.fillStyle=f,s.fillRect(e,n+u,G,16)}break}case qt.TREAD:{i.noise(e,n,.85,.05);for(const u of[30,62,94])r(u,0,5,G,i.grey(.25));for(let u=0;u<G;u+=16)for(const[f,d]of[[0,30],[35,62],[67,94],[99,G]])s.strokeStyle=i.grey(.32),s.lineWidth=2.5,s.beginPath(),s.moveTo(e+f,n+u+(f<64?0:6)),s.lineTo(e+d,n+u+(f<64?6:0)),s.stroke();break}case qt.SIDEWALL:{r(0,0,G,G,i.grey(.16)),r(0,G-10,G,10,i.grey(.1)),r(0,0,G,6,i.grey(.24)),s.fillStyle=i.grey(.62),s.font="bold 28px monospace",s.textBaseline="middle",s.save(),s.translate(e+2,n+a),s.scale(.58,1.3),s.fillText("TURBO-R",0,0),s.restore();break}case qt.HEADLAMP:{r(0,0,G,G,i.grey(.55));const u=s.createRadialGradient(e+a,n+a,2,e+a,n+a,58);u.addColorStop(0,i.grey(1)),u.addColorStop(.3,i.grey(.95)),u.addColorStop(.75,i.grey(.72)),u.addColorStop(1,i.grey(.5)),s.fillStyle=u,s.fillRect(e+4,n+4,G-8,G-8),s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let f=8;f<G;f+=10)s.beginPath(),s.moveTo(e+f,n),s.lineTo(e+f,n+G),s.stroke(),s.beginPath(),s.moveTo(e,n+f),s.lineTo(e+G,n+f),s.stroke();break}case qt.SEAT:{r(0,0,G,G,i.grey(.8));for(let u=24;u<G-24;u+=10)r(u,0,2,G,i.grey(.55));r(0,0,20,G,i.grey(.65)),r(G-20,0,20,G,i.grey(.65));break}case qt.RIM_STAR:{h(),s.fillStyle=i.grey(.92);for(let u=0;u<5;u++){const f=u/5*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(f),s.beginPath(),s.moveTo(-9,0),s.lineTo(-6,59),s.lineTo(6,59),s.lineTo(9,0),s.fill(),s.fillStyle=i.grey(.6),s.fillRect(-1,10,2,46),s.fillStyle=i.grey(.92),s.restore()}c(5);break}case qt.RIM_SIX:{h();for(let u=0;u<6;u++){const f=u/6*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(f),s.fillStyle=i.grey(.9),s.fillRect(-7,0,5,59),s.fillRect(2,0,5,59),s.restore()}c(5,16);break}case qt.RIM_MULTI:{h();for(let u=0;u<7;u++){const f=u/7*Math.PI*2;s.save(),s.translate(e+a,n+a),s.rotate(f),s.fillStyle=i.grey(.92),s.beginPath(),s.moveTo(-4,8),s.quadraticCurveTo(-14,34,-6,59),s.lineTo(5,59),s.quadraticCurveTo(-2,34,6,8),s.fill(),s.restore()}c(5);break}case qt.RIM_MESH:{s.save(),s.beginPath(),s.arc(e+a,n+a,58,0,Math.PI*2),s.clip(),s.strokeStyle=i.grey(.88),s.lineWidth=3;for(let u=0;u<20;u++){const f=u/20*Math.PI*2;for(const d of[-.5,.5])s.beginPath(),s.moveTo(e+a+Math.cos(f)*14,n+a+Math.sin(f)*14),s.lineTo(e+a+Math.cos(f+d)*60,n+a+Math.sin(f+d)*60),s.stroke()}s.restore(),h(),c(5,16);break}case qt.RIM_DIAL:{o(60,i.grey(.86)),s.globalCompositeOperation="destination-out";for(let u=0;u<5;u++){const f=u/5*Math.PI*2;o(15,"#000",a+Math.cos(f)*36,a+Math.sin(f)*36)}s.globalCompositeOperation="source-over";for(let u=0;u<5;u++){const f=u/5*Math.PI*2;s.strokeStyle=i.grey(.55),s.lineWidth=2,s.beginPath(),s.arc(e+a+Math.cos(f)*36,n+a+Math.sin(f)*36,16,0,Math.PI*2),s.stroke()}h(),c(5);break}case qt.RIM_STEEL:{o(62,i.grey(.45)),o(52,i.grey(.9)),l(40,2,i.grey(.6));for(let u=0;u<8;u++){const f=u/8*Math.PI*2;o(4,i.grey(.4),a+Math.cos(f)*46,a+Math.sin(f)*46)}o(14,i.grey(.7));break}default:r(0,0,G,G,"#ffffff")}s.restore()}let dr=null;function i1(){if(dr)return dr;const i=document.createElement("canvas");i.width=i.height=G*bn;const t=new ec(i);for(let e=0;e<16;e++)n1(t,e);return dr=nc(i),dr}const s1=3428460,r1=3954804,on=1447448,Se=657932,Wi=13949152,Nl=723725,pr=5921376,ze=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),a1=(i,t,e)=>new Lt(i).lerp(new Lt(t),e).getHex();function vs(i,t){const e=i.length,n=i.map(o=>o.z),s=i.map(o=>o[t]),r=[];for(let o=0;o<e-1;o++)r.push((s[o+1]-s[o])/Math.max(1e-4,n[o+1]-n[o]));const a=[];for(let o=0;o<e;o++)if(o===0)a.push(r[0]*.5);else if(o===e-1)a.push(r[e-2]*.5);else if(r[o-1]*r[o]<=0)a.push(0);else{const l=(r[o-1]+r[o])/2;a.push(Math.sign(l)*Math.min(Math.abs(l),3*Math.abs(r[o-1]),3*Math.abs(r[o])))}return o=>{if(o<=n[0])return s[0];if(o>=n[e-1])return s[e-1];let l=0;for(;l<e-2&&o>n[l+1];)l++;const c=n[l+1]-n[l];if(c<1e-4)return s[l+1];const h=(o-n[l])/c,u=h*h,f=u*h;return(2*f-3*u+1)*s[l]+(f-2*u+h)*c*a[l]+(-2*f+3*u)*s[l+1]+(f-u)*c*a[l+1]}}const mr=i=>i==="ws"||i==="rf"||i==="rw";function Br(i,t,e,n,s,r,a,o,l,c){i.tri(t,e,n,r,[a,o,l]),i.tri(t,n,s,r,[a,l,c])}function Fl(i,t,e,n,s,r,a,o,l,c=o){i.layer(l,()=>{const h=t-s/2,u=t+s/2,f=e-r/2,d=e+r/2,x=n-a/2,M=n+a/2;i.quad([h,d,x],[u,d,x],[u,d,M],[h,d,M],o,[0,0,1,.3]),i.quad([h,f,x],[u,f,x],[u,d,x],[h,d,x],o,[0,0,1,1]),i.quad([u,f,M],[h,f,M],[h,d,M],[u,d,M],c,[0,0,1,1]),i.quad([h,f,M],[h,f,x],[h,d,x],[h,d,M],ze(o,.8),[0,0,.2,1]),i.quad([u,f,x],[u,f,M],[u,d,M],[u,d,x],ze(o,.8),[0,0,.2,1]),i.quad([h,f,x],[h,f,M],[u,f,M],[u,f,x],ze(o,.6),[0,0,1,.3])})}function Ol(i,t,e,n,s){const r=new V(...t),a=new V(...e),o=r.distanceTo(a),l=new Ft().lookAt(r,a,new V(0,1,0));l.setPosition(r.clone().add(a).multiplyScalar(.5)),i.with(l,()=>i.box(0,0,0,n,n,o,s))}function La(i,t,e,n,s=8,r=5,a=n){const o=(l,c)=>{const h=c/r*Math.PI,u=l/s*Math.PI*2;return[t[0]+Math.sin(h)*Math.cos(u)*e,t[1]+Math.cos(h)*e,t[2]+Math.sin(h)*Math.sin(u)*e]};for(let l=0;l<r;l++)for(let c=0;c<s;c++){const h=l===1?a:n;i.quad(o(c,l),o(c+1,l),o(c+1,l+1),o(c,l+1),h)}}function Zi(i,t,e,n,s){for(let r=0;r<n;r++){const a=r/n*Math.PI*2,o=(r+1)/n*Math.PI*2;i.quad([Math.cos(a)*t,Math.sin(a)*t,0],[Math.cos(o)*t,Math.sin(o)*t,0],[Math.cos(o)*e,Math.sin(o)*e,0],[Math.cos(a)*e,Math.sin(a)*e,0],s)}}function Io(i,t,e,n,s,r,a,o,l){i.layer(l,()=>{for(let c=0;c<a;c++){const h=c/a*Math.PI*2,u=(c+1)/a*Math.PI*2;i.tri([t,e,n],[t+Math.cos(h)*s,e+Math.sin(h)*r,n],[t+Math.cos(u)*s,e+Math.sin(u)*r,n],o,[[.5,.5],[.5+Math.cos(h)*.5,.5+Math.sin(h)*.5],[.5+Math.cos(u)*.5,.5+Math.sin(u)*.5]])}})}function Oh(i,t,e=!1){var K;const n=new ht(!0),s=new ht(!0),r=new ht(!0),a=new ht,o=new ht(!0),l=new ht(!0),c=i.stations,h=c[0],u=c[c.length-1],f=h.z,d=u.z,x=vs(c,"w"),M=vs(c,"yb"),m=vs(c,"belt"),p=vs(c,"top"),g=vs(c,"wt"),y=_=>{let L=c[0].seg;for(const P of c)_>=P.z-1e-6&&(L=P.seg);return L},v=ze(t,.42),T=ze(t,.82),E=i.group==="80s EXOTIC",A=i.wheels,C=e?.11:A.hw??.18,b=[{z:A.fz,x:e?x(A.fz)-.12:A.fx,r:A.r,hw:C,R:0,flare:0},{z:A.rz,x:e?x(A.rz)-.12:A.rx,r:e?A.r:A.r*1.03,hw:e?C:C*1.15,R:0,flare:0}];for(const _ of b){_.R=_.r+(e?.06:.07);const L=_.x+_.hw+.02-x(_.z);_.flare=Math.max(i.arch??(e?.012:.035),L)}const S=_=>{let L=0;for(const P of b){const F=(_-P.z)/(P.R+.5);Math.abs(F)<1&&(L+=P.flare*Math.cos(F*Math.PI/2)**2)}return L},D=_=>{let L=-1;for(const P of b){const F=_-P.z;Math.abs(F)<=P.R&&(L=Math.max(L,P.r+Math.sqrt(P.R*P.R-F*F)))}return L},X=_=>{const L=x(_),P=M(_),F=m(_),z=p(_),O=Math.min(g(_),L-.02),ct=y(_),B=S(_),tt=D(_),lt=F-P,pt=mr(ct)?.03:.022,at=[[L-.05,P],[L+B,P+.12*lt],[L+B+.014,P+.5*lt],[L+B*.85,P+.82*lt],[L-.02+B*.5,F],mr(ct)?[L-.03-(L-.03-O)*.42,F+(z-F)*.52]:[O+(L-O)*.55,F+(z-F)*.8],[O,z],[O*.5,z+pt*.75],[0,z+pt]];if(tt>0){for(let xt=0;xt<4;xt++)at[xt][1]=Math.max(at[xt][1],tt+(xt===3?.03:0));at[4][1]=Math.max(at[4][1],tt+.07),at[5][1]=Math.max(at[5][1],at[4][1]-.015),at[6][1]=Math.max(at[6][1],tt+.03)}return{z:_,seg:ct,pts:at}},W=e?.6:.17,Y=[];for(let _=0;_<c.length-1;_++){const L=Math.max(1,Math.ceil((c[_+1].z-c[_].z)/W));for(let P=0;P<L;P++)Y.push(c[_].z+(c[_+1].z-c[_].z)*P/L)}Y.push(d);const it=e?[-1.02,-1,-.5,.5,1,1.02]:[-1.03,-1,-.92,-.7,-.38,0,.38,.7,.92,1,1.03];for(const _ of b)for(const L of it)Y.push(_.z+_.R*L);Y.sort((_,L)=>_-L);const $=[];for(const _ of Y)_<f||_>d||$.length&&_-$[$.length-1]<.006||$.push(_);const ot=$.map(X),q=(_,L,P,F=0,z=0)=>[P*(_.pts[L][0]+F),_.pts[L][1]+z,_.z],bt=((K=c.find(_=>_.seg==="lv"))==null?void 0:K.z)??0;for(let _=0;_<ot.length-1;_++){const L=ot[_],P=ot[_+1],F=L.seg;for(const z of[-1,1])for(let O=0;O<8;O++){let ct=q(L,O,z),B=q(P,O,z),tt=q(P,O+1,z),lt=q(L,O+1,z);z>0&&([B,lt]=[lt,B]);const pt=(O===4||O===5)&&mr(F),at=(O===6||O===7)&&(F==="ws"||F==="rw");if(pt)a.quad(ct,B,tt,lt,r1);else if(at)a.quad(ct,B,tt,lt,s1);else if(O>=6&&F==="bed")s.quad(ct,B,tt,lt,on);else{if(O>=6&&F==="lv")continue;n.quad(ct,B,tt,lt,O===0?v:t)}}}c.some(_=>_.seg==="lv")&&s.layer(qt.LOUVRE,()=>{for(let _=0;_<ot.length-1;_++){const L=ot[_],P=ot[_+1];if(L.seg==="lv")for(const F of[-1,1])for(let z=6;z<8;z++){const O=q(L,z,F),ct=q(P,z,F),B=q(P,z+1,F),tt=q(L,z+1,F),lt=at=>(at-bt)/.13,pt=at=>Math.abs(at[0])*2;Br(s,O,ct,B,tt,t,[pt(O),lt(O[2])],[pt(ct),lt(ct[2])],[pt(B),lt(B[2])],[pt(tt),lt(tt[2])])}}});const wt=(_,L,P)=>{const F=[];for(let O=0;O<=8;O++)F.push(q(_,O,1));for(let O=7;O>=0;O--)F.push(q(_,O,-1));const z=(_.pts[0][1]+_.pts[8][1])/2;for(let O=0;O<F.length;O++)P.tri([0,z,_.z],F[O],F[(O+1)%F.length],L)},ut=ot[0],Pt=ot[ot.length-1];wt(ut,T,s),wt(Pt,ze(t,.9),s);const Gt=(_,L,P,F,z,O,ct,B)=>{const tt=vt=>{const Bt=vt.pts[P],N=vt.pts[z],mt=N[0]-Bt[0],J=N[1]-Bt[1],rt=Math.hypot(mt,J)||1,Mt=[F*(Bt[0]+.006),Bt[1]+.004,vt.z],gt=[F*(Bt[0]+.006+mt/rt*O),Bt[1]+.004+J/rt*O,vt.z];return[Mt,gt]},[lt,pt]=tt(_),[at,xt]=tt(L);B.quad(lt,at,xt,pt,ct)};for(let _=0;_<ot.length-1;_++){const L=ot[_],P=ot[_+1];if(mr(L.seg))for(const F of[-1,1])Gt(L,P,4,F,5,.03,Se,s),L.seg==="rf"?Gt(L,P,6,F,5,.025,Se,s):Gt(L,P,6,F,5,.06,t,s)}const Q=(_,L,P,F)=>{const z=[];for(let O=L;O<=8;O++)z.push(q(_,O,1,.004,.006));for(let O=7;O>=L;O--)z.push(q(_,O,-1,.004,.006));for(let O=0;O<z.length-1;O++){const ct=z[O],B=z[O+1];s.quad(ct,B,[B[0],B[1],B[2]+F],[ct[0],ct[1],ct[2]+F],P)}},ft=ot.find(_=>_.seg==="ws"),yt=ot.find(_=>_.seg==="rf");ft&&Q(ft,4,Se,.06),yt&&Q(yt,6,t,-.05);const et=(_,L)=>{const P=X(_);for(let F=0;F<4;F++){const z=P.pts[F],O=P.pts[F+1];if(L>=z[1]&&L<=O[1])return z[0]+(O[0]-z[0])*(L-z[1])/Math.max(1e-4,O[1]-z[1])}return L<P.pts[0][1]?P.pts[0][0]:P.pts[4][0]},Ct=(_,L)=>{const P=X(_);for(let F=4;F<8;F++){const z=P.pts[F],O=P.pts[F+1];if(L<=z[0]&&L>=O[0])return z[1]+(O[1]-z[1])*(z[0]-L)/Math.max(1e-4,z[0]-O[0])}return P.pts[8][1]};for(const _ of b){const L=e?6:14;for(const P of[-1,1])for(let F=0;F<L;F++){const z=F/L*Math.PI,O=(F+1)/L*Math.PI,ct=(Bt,N)=>_.z+Math.cos(Bt)*N,B=(Bt,N)=>_.r+Math.sin(Bt)*N,tt=et(ct(z,_.R),B(z,_.R))+.002,lt=et(ct(O,_.R),B(O,_.R))+.002,pt=_.x-_.hw-.06,at=Math.min(B(z,_.R),Ct(ct(z,_.R),pt)-.02),xt=Math.min(B(O,_.R),Ct(ct(O,_.R),pt)-.02);s.quad([P*tt,B(z,_.R),ct(z,_.R)],[P*lt,B(O,_.R),ct(O,_.R)],[P*pt,xt,ct(O,_.R)],[P*pt,at,ct(z,_.R)],Nl);const vt=_.R+(e?.03:.045);s.quad([P*(tt+.02),B(z,_.R),ct(z,_.R)],[P*(lt+.02),B(O,_.R),ct(O,_.R)],[P*(lt+.004),B(O,vt),ct(O,vt)],[P*(tt+.004),B(z,vt),ct(z,vt)],E||e?t:T),s.quad([P*(tt+.02),B(z,_.R),ct(z,_.R)],[P*(lt+.02),B(O,_.R),ct(O,_.R)],[P*(lt-.01),B(O,_.R-.01),ct(O,_.R-.01)],[P*(tt-.01),B(z,_.R-.01),ct(z,_.R-.01)],v)}}const zt=ut.pts,nt=zt[0][1],Rt=zt[2][0],st=f-.006,$t=i.front??"popup";if(s.quad([-Rt*.74,nt+.02,st+.002],[Rt*.74,nt+.02,st+.002],[Rt*.74,nt+.19,st+.002],[-Rt*.74,nt+.19,st+.002],Se),s.layer(qt.MESH,()=>s.quad([-Rt*.7,nt+.04,st],[Rt*.7,nt+.04,st],[Rt*.7,nt+.17,st],[-Rt*.7,nt+.17,st],pr,[0,0,Rt*6,1.2])),e){const _=nt+.24;for(const L of[-1,1])o.layer(qt.HEADLAMP,()=>o.quad([L*Rt*.82,_-.06,st-.002],[L*Rt*.5,_-.06,st-.002],[L*Rt*.5,_+.06,st-.002],[L*Rt*.82,_+.06,st-.002],15262924,[0,0,1,1]))}else{s.box(0,nt-.02,f+.2,Rt*1.84,.03,.5,[Se,on]);const _=(zt[4][1]+zt[6][1])/2;for(const L of[-1,1]){const P=L*Rt*.62;if($t==="popup"){const F=f+.26,z=f+.62,O=tt=>p(tt)+.012,ct=(tt,lt,pt,at)=>s.quad([tt,O(lt),lt],[pt,O(at),at],[pt,O(at)+.001,at+.018],[tt,O(lt)+.001,lt+.018],Se);ct(P-.2,F,P+.2,F),ct(P-.2,z,P+.2,z);for(const tt of[P-.2,P+.2])s.quad([tt-.008,O(F),F],[tt+.008,O(F),F],[tt+.008,O(z),z],[tt-.008,O(z),z],Se);const B=nt+.25;s.quad([P-.17,B-.05,st+.001],[P+.17,B-.05,st+.001],[P+.17,B+.05,st+.001],[P-.17,B+.05,st+.001],on),o.layer(qt.HEADLAMP,()=>o.quad([P-.15+L*.06,B-.035,st-.002],[P+.15+L*.06,B-.035,st-.002],[P+.15+L*.06,B+.035,st-.002],[P-.15+L*.06,B+.035,st-.002],16052440,[0,0,1,1])),o.layer(qt.LENS,()=>o.quad([P-.16,B-.035,st-.002],[P-.04,B-.035,st-.002],[P-.04,B+.035,st-.002],[P-.16,B+.035,st-.002],16752688,[0,0,1,1]))}else if($t==="round")o1(s,P,_,st+.001,.125,.15,Wi),Io(o,P,_,st-.002,.125,.11,16,16052440,qt.HEADLAMP);else{const F=$t==="slim"?.06:.12;s.quad([P-.23,_-F/2-.02,st+.001],[P+.23,_-F/2-.02,st+.001],[P+.23,_+F/2+.02,st+.001],[P-.23,_+F/2+.02,st+.001],on),o.layer(qt.HEADLAMP,()=>o.quad([P-.2,_-F/2,st-.002],[P+.12,_-F/2,st-.002],[P+.12,_+F/2,st-.002],[P-.2,_+F/2,st-.002],16052440,[0,0,1,1])),o.layer(qt.LENS,()=>o.quad([P+.13,_-F/2,st-.002],[P+.21,_-F/2,st-.002],[P+.21,_+F/2,st-.002],[P+.13,_+F/2,st-.002],16752688,[0,0,1,1]))}}}const U=d;for(const _ of i.rear??[])for(const L of _.mirror===!1||_.x===0?[_.x]:[_.x,-_.x]){const P=[L-_.w/2,_.y-_.h/2,U+.006],F=[L+_.w/2,_.y-_.h/2,U+.006],z=[L+_.w/2,_.y+_.h/2,U+.006],O=[L-_.w/2,_.y+_.h/2,U+.006];_.c===Se?s.layer(qt.MESH,()=>s.quad(P,F,z,O,pr,[0,0,_.w*7,_.h*7])):s.quad(P,F,z,O,_.c)}const Ue=(_,L,P,F,z,O=0,ct)=>{const B=L.w+O,tt=L.h+O,lt=ct??(L.round?qt.LENS_ROUND:L.w>.7?qt.LENS_BAR:qt.LENS);L.round?Io(_,P,L.y,F,B/2,tt/2,16,z,lt):_.layer(lt,()=>_.quad([P-B/2,L.y-tt/2,F],[P+B/2,L.y-tt/2,F],[P+B/2,L.y+tt/2,F],[P-B/2,L.y+tt/2,F],z,[0,0,L.w>.7?B*6:1,1]))};for(const _ of i.lights)for(const L of _.mirror===!1||_.x===0?[_.x]:[_.x,-_.x])Ue(o,_,L,U+.012,_.c),_.brake&&!e&&Ue(l,_,L,U+.016,16730678),e||(Ue(s,_,L,U+.008,1710622,.05,qt.PLAIN),_.round&&s.with(new Ft().makeTranslation(L,_.y,U+.01).multiply(new Ft().makeScale(1,_.h/_.w,1)),()=>Zi(s,_.w/2,_.w/2+.022,16,Wi)));if(i.slats){const _=i.slats;for(let L=0;L<=_.n;L++){const P=_.y0+(_.y1-_.y0)*L/_.n;s.box(0,P,U+.03,_.w*2,.03,.035,[Se,on])}}const Wt=Pt.pts[0][1],jt=Pt.pts[2][0],Ht=Math.min(Wt+.15,i.plateY-.12);if(Ht-(Wt-.04)>.06&&s.box(0,(Ht+Wt-.04)/2,U+.03,jt*1.96,Ht-Wt+.04,.09,E||e?[2763310,3684412]:[T,t]),e)s.quad([-.26,i.plateY-.08,U+.008],[.26,i.plateY-.08,U+.008],[.26,i.plateY+.08,U+.008],[-.26,i.plateY+.08,U+.008],15263960),s.quad([-.29,i.plateY-.1,U+.007],[.29,i.plateY-.1,U+.007],[.29,i.plateY+.1,U+.007],[-.29,i.plateY+.1,U+.007],3158068);else{for(const P of i.exhaust)s.with(new Ft().makeTranslation(P.x,P.y,U-.1).multiply(new Ft().makeRotationX(Math.PI/2)),()=>{s.prism(0,0,-.1,.22,P.r,P.r,12,[Wi,11054260],null),s.prism(0,0,.2,.222,P.r*1.04,P.r*1.04,12,9075368,null),s.prism(0,0,.221,.08,P.r*.8,P.r*.8,12,Se,Se)});const _=i.plateY,L=U+.006;s.quad([-.3,_-.1,U+.004],[.3,_-.1,U+.004],[.3,_+.1,U+.004],[-.3,_+.1,U+.004],on),s.quad([-.31,_-.105,L],[.31,_-.105,L],[.31,_-.085,L],[-.31,_-.085,L],Wi),s.quad([-.31,_+.085,L],[.31,_+.085,L],[.31,_+.105,L],[-.31,_+.105,L],Wi);for(const P of[-1,1]){o.layer(qt.LENS,()=>o.quad([P*.36,_-.04,U+.012],[P*.49,_-.04,U+.012],[P*.49,_+.04,U+.012],[P*.36,_+.04,U+.012],15790312,[0,0,1,1]));const F=Math.max(Wt+.02,(Ht+Wt)/2-.025);P<0&&o.layer(qt.LENS,()=>o.quad([-.62,F,U+.08],[-.48,F,U+.08],[-.48,F+.05,U+.08],[-.62,F+.05,U+.08],13639704,[0,0,1,1]))}s.quad([-jt*.8,Wt-.05,U+.06],[jt*.8,Wt-.05,U+.06],[jt*.8,Wt+.03,U-.5],[-jt*.8,Wt+.03,U-.5],1842208);for(let P=-3;P<=3;P++)s.box(P*jt*.24,Wt+0,U-.15,.025,.06,.4,on)}const se=(_,L,P,F,z,O,ct,B,tt,lt,pt)=>{const at=[L*(et(P,z)+lt),z,P],xt=[L*(et(F,ct)+lt),ct,F],vt=[L*(et(F,B)+lt),B,F],Bt=[L*(et(P,O)+lt),O,P];_.quad(at,xt,vt,Bt,tt,pt)};for(const _ of i.side??[])for(const L of[-1,1])if(_.kind==="intake")se(s,L,_.z0-.03,_.z1+.03,_.y0+(_.y1-_.y0)*.5-.03,_.y1+.03,_.y0-.03,_.y1+.03,Se,.005),s.layer(qt.MESH,()=>se(s,L,_.z0,_.z1,_.y0+(_.y1-_.y0)*.5,_.y1,_.y0,_.y1,pr,.008,[0,0,(_.z1-_.z0)*7,(_.y1-_.y0)*7]));else if(_.kind==="naca")se(s,L,_.z0,_.z1,_.y1-.02,_.y1,_.y0,_.y1,Se,.007),se(s,L,_.z0+(_.z1-_.z0)*.6,_.z1,_.y1-(_.y1-_.y0)*.6,_.y1,_.y0+.02,_.y1-.02,2236966,.009);else if(_.kind==="stripe")se(s,L,_.z0,_.z1,_.y0,_.y1,_.y0,_.y1,_.c??16777215,.008);else if(_.kind==="strakes")for(let F=0;F<6;F++){const z=_.z0+(_.z1-_.z0)*F/6,O=_.z0+(_.z1-_.z0)*(F+1)/6;se(s,L,z,O,_.y0,_.y1,_.y0,_.y1,Se,.006);const ct=_.n??5;for(let B=0;B<ct;B++){const tt=_.y0+(_.y1-_.y0)*(B+.6)/(ct+.2);for(const[lt,pt,at,xt]of[[tt,tt+.035,.035,.035],[tt,tt,.006,.035],[tt+.035,tt+.035,.006,.035]]){const vt=[L*(et(z,lt)+at),lt,z],Bt=[L*(et(O,lt)+at),lt,O],N=[L*(et(O,pt)+xt),pt,O],mt=[L*(et(z,pt)+xt),pt,z];s.quad(vt,Bt,N,mt,lt===pt?lt===tt?v:T:t)}}}const It=c.find(_=>_.seg==="ws"),I=c.find(_=>_.seg==="rw")??c.find(_=>_.seg==="lv"),w=c.findIndex(_=>_.seg==="rf");for(const _ of[-1,1]){const L=b[0].z+b[0].R+.04,P=b[1].z-b[1].R-.04;if(P>L){const xt=e?1:4;for(let vt=0;vt<xt;vt++){const Bt=L+(P-L)*vt/xt,N=L+(P-L)*(vt+1)/xt,mt=M(Bt),J=M(N);s.quad([_*(et(Bt,mt+.02)+.02),mt-.02,Bt],[_*(et(N,J+.02)+.02),J-.02,N],[_*(et(N,J+.1)+.006),J+.1,N],[_*(et(Bt,mt+.1)+.006),mt+.1,Bt],e?2763310:E?v:T)}}const F=f+.3,z=M(F)+(m(F)-M(F))*.55;if(o.layer(qt.LENS,()=>{o.quad([_*(et(F,z)+.01),z-.025,F],[_*(et(F+.14,z)+.01),z-.025,F+.14],[_*(et(F+.14,z)+.01),z+.025,F+.14],[_*(et(F,z)+.01),z+.025,F],16751136,[0,0,1,1]);const xt=d-.4,vt=M(xt)+(m(xt)-M(xt))*.6;o.quad([_*(et(xt,vt)+.01),vt-.025,xt],[_*(et(xt+.14,vt)+.01),vt-.025,xt+.14],[_*(et(xt+.14,vt)+.01),vt+.025,xt+.14],[_*(et(xt,vt)+.01),vt+.025,xt],13113360,[0,0,1,1])}),!It)continue;const O=It.z+.22,ct=m(O)+.1,B=et(O,m(O)-.01);e?s.box(_*(B+.08),ct,O,.14,.12,.1,[1710618,2236962,1710618,3355443]):(s.box(_*(B+.04),ct-.05,O,.1,.035,.05,Se),s.box(_*(B+.13),ct,O,.18,.11,.1,[t,t,T,Se]),s.quad([_*(B+.05),ct-.045,O+.052],[_*(B+.21),ct-.045,O+.052],[_*(B+.21),ct+.045,O+.052],[_*(B+.05),ct+.045,O+.052],10135736));const tt=It.z+.06,lt=I?I.z+.05:It.z+1.15;for(const xt of[tt,lt]){const vt=X(xt);for(let Bt=0;Bt<4;Bt++){const N=vt.pts[Bt],mt=vt.pts[Bt+1];mt[1]<M(xt)+.08||s.quad([_*(N[0]+.006),N[1],xt],[_*(N[0]+.006),N[1],xt+.016],[_*(mt[0]+.006),mt[1],xt+.016],[_*(mt[0]+.006),mt[1],xt],on)}}if(i.id==="countach"||i.id==="diablo"){const xt=b[0].z+b[0].R+.02,vt=m(xt)-.04;s.quad([_*(et(xt,vt)+.007),vt,xt],[_*(et(tt+.3,m(tt+.3)-.02)+.007),m(tt+.3)-.02,tt+.3],[_*(et(tt+.3,m(tt+.3)-.04)+.007),m(tt+.3)-.04,tt+.3],[_*(et(xt,vt-.02)+.007),vt-.02,xt],on)}const pt=lt-.3,at=m(pt)-.1;if(!e&&(s.quad([_*(et(pt-.1,at)+.009),at-.018,pt-.1],[_*(et(pt+.1,at)+.009),at-.018,pt+.1],[_*(et(pt+.1,at)+.009),at+.018,pt+.1],[_*(et(pt-.1,at)+.009),at+.018,pt-.1],Wi),_>0&&w>=0)){const xt=b[1].z-b[1].R-.22,vt=m(xt)-.12,Bt=et(xt,vt)+.007;s.with(new Ft().makeTranslation(Bt,vt,xt).multiply(new Ft().makeRotationY(Math.PI/2)),()=>Zi(s,.06,.072,10,on))}}if(It&&ft){const _=ft.z+.07,L=p(_)+.035;for(const P of[-.62,0]){const F=g(_)*.62;s.quad([P*g(_),L,_],[P*g(_)+F,L+.004,_+.035],[P*g(_)+F,L+.016,_+.035],[P*g(_),L+.012,_],Se)}}if(i.louvres){const _=i.louvres,L=P=>p(P)+.024;s.layer(qt.LOUVRE,()=>{for(let F=0;F<4;F++){const z=_.z0+(_.z1-_.z0)*F/4,O=_.z0+(_.z1-_.z0)*(F+1)/4,ct=_.n*F/4,B=_.n*(F+1)/4;Br(s,[-_.w,L(z),z],[_.w,L(z),z],[_.w,L(O),O],[-_.w,L(O),O],ze(t,.9),[0,ct],[4,ct],[4,B],[0,B])}})}if(i.scoop&&w>=0){const _=c[w];s.box(0,_.top+.08,_.z+.3,.34,.14,.55,[t,t,Se,T]),s.layer(qt.MESH,()=>s.quad([-.15,_.top+.03,_.z+.024],[.15,_.top+.03,_.z+.024],[.15,_.top+.135,_.z+.024],[-.15,_.top+.135,_.z+.024],pr,[0,0,2,1]))}if(i.wing){const _=i.wing,L=p(_.z)+.02,P=F=>{const z=F;s.quad([-z,_.y+.03,_.z-_.d/2],[z,_.y+.03,_.z-_.d/2],[z,_.y+.02,_.z+_.d/2],[-z,_.y+.02,_.z+_.d/2],t),s.quad([-z,_.y-.03,_.z-_.d/2],[z,_.y-.03,_.z-_.d/2],[z,_.y-.005,_.z+_.d/2],[-z,_.y-.005,_.z+_.d/2],v),s.quad([-z,_.y-.03,_.z-_.d/2],[z,_.y-.03,_.z-_.d/2],[z,_.y+.03,_.z-_.d/2],[-z,_.y+.03,_.z-_.d/2],T),s.quad([-z,_.y-.005,_.z+_.d/2],[z,_.y-.005,_.z+_.d/2],[z,_.y+.045,_.z+_.d/2+.01],[-z,_.y+.045,_.z+_.d/2+.01],Se)};if(_.kind==="duck")s.box(0,_.y,_.z,_.w*2,.06,_.d,[t,t,T,T]),s.quad([-_.w,_.y+.03,_.z+_.d/2],[_.w,_.y+.03,_.z+_.d/2],[_.w,_.y+.05,_.z+_.d/2+.02],[-_.w,_.y+.05,_.z+_.d/2+.02],Se);else if(P(_.w),_.kind==="big")for(const F of[-1,1])s.box(F*.32,(L+_.y)/2,_.z,.06,_.y-L,.2,[on,on,2500136]),s.box(F*_.w,_.y+.02,_.z,.02,.2,_.d+.1,[t,t,T,T]);else if(_.kind==="hoop"){for(const F of[-1,1])s.box(F*(_.w-.08),(L+_.y)/2,_.z,.1,_.y-L,_.d*.7,[t,t,T,T]);l.layer(qt.LENS_BAR,()=>l.quad([-.2,_.y+.012,_.z+_.d/2+.012],[.2,_.y+.012,_.z+_.d/2+.012],[.2,_.y+.04,_.z+_.d/2+.016],[-.2,_.y+.04,_.z+_.d/2+.016],16728112,[0,0,3,1])),o.layer(qt.LENS_BAR,()=>o.quad([-.2,_.y+.012,_.z+_.d/2+.008],[.2,_.y+.012,_.z+_.d/2+.008],[.2,_.y+.04,_.z+_.d/2+.012],[-.2,_.y+.04,_.z+_.d/2+.012],7344144,[0,0,3,1]))}else for(const F of[-1,1])s.poly([[F*_.w,L,_.z-_.d/2-.2],[F*_.w,L,_.z+_.d/2],[F*_.w,_.y+.07,_.z+_.d/2],[F*_.w,_.y+.07,_.z-_.d/2]],t)}if(!e&&w>=0){c[w];const _=c[w+1];i.group==="90s JAPAN"&&Ol(s,[.35,p(_.z)-.02,_.z+.05],[.4,p(_.z)+.45,_.z+.35],.012,Se)}if(w>=0&&It){const _=c[w],L=c[w+1],P=i.trim??2894898,F=_.z+Math.min(.45,(L.z-_.z)*.55),z=p(F),O=m(F),ct=z-(e?.24:.22),B=x(F)-.09,tt=O-.26,lt=It.z+.25,pt=L.z+.15;r.quad([-B,tt,lt],[B,tt,lt],[B,tt,pt],[-B,tt,pt],Nl);for(const Mt of[-1,1])r.quad([Mt*B,tt,lt],[Mt*B,tt,pt],[Mt*B,O-.02,pt],[Mt*B,O-.02,lt],ze(P,.7));r.quad([-B,tt,pt],[B,tt,pt],[B,O+.02,pt],[-B,O+.02,pt],1315864);const at=c[w+2]??L;r.quad([-B,O+.02,pt],[B,O+.02,pt],[B,Math.min(m(at.z),p(at.z))-.02,at.z],[-B,Math.min(m(at.z),p(at.z))-.02,at.z],1842208);const xt=i.drive??(i.group==="90s JAPAN"?"R":"L"),vt=xt==="C"?0:(xt==="R"?1:-1)*Math.min(.38,B*.48),Bt=xt==="C"?[{x:0,z:F-.12,driver:!0},{x:-.44,z:F+.12,driver:!1},{x:.44,z:F+.12,driver:!1}]:[{x:vt,z:F,driver:!0},{x:-vt,z:F,driver:!1}],N=e?4868690:a1(t,2105392,.55),mt=F-(e?.5:.48),J=ct-.24,rt=Math.max(It.z+.3,mt-.22);r.box(0,O-.03,rt,B*2,.12,.32,[1710622,2236968]);for(const Mt of Bt){const gt=Mt.x,Vt=Mt.z;if(e){r.box(gt,O-.02,Vt+.2,.42,.5,.1,ze(P,.9)),Mt.driver&&(La(r,[gt,ct,Vt],.11,2760728,6,4,2760728),r.box(gt,ct-.25,Vt+.03,.36,.26,.2,N));continue}const xe=Math.min(O-.04,z-.52);if(r.with(new Ft().makeTranslation(gt,xe,Vt+.22).multiply(new Ft().makeRotationX(.22)),()=>{Fl(r,0,0,0,.44,.56,.1,P,qt.SEAT,ze(P,.75)),Fl(r,0,.36,.02,.26,.17,.09,P,qt.SEAT,ze(P,.75));for(const ve of[-1,1])r.box(ve*.2,.02,-.06,.06,.48,.1,ze(P,.85))}),Mt.driver){La(r,[gt,ct,Vt],.125,15790316,10,6,t),r.quad([gt-.09,ct-.04,Vt-.12],[gt+.09,ct-.04,Vt-.12],[gt+.09,ct+.03,Vt-.11],[gt-.09,ct+.03,Vt-.11],1054752),r.box(gt,ct-.17,Vt+.02,.1,.08,.1,N),r.box(gt,ct-.33,Vt+.04,.4,.26,.22,[N,ze(N,1.1)]);for(const ve of[-1,1])Ol(r,[gt+ve*.18,ct-.26,Vt+.02],[gt+ve*.16,J-.02,mt+.05],.075,N),La(r,[gt+ve*.16,J-.02,mt+.04],.04,1710618,5,3);r.with(new Ft().makeTranslation(gt,J,mt).multiply(new Ft().makeRotationX(-.45)),()=>{Zi(r,.15,.185,14,1447446),r.box(0,0,0,.3,.035,.02,2236966),r.box(0,-.07,0,.035,.14,.02,2236966),r.prism(0,0,-.01,.01,.05,.05,8,3158068,3158068)}),r.box(gt,O+.05,rt+.02,.42,.07,.2,[1315862,1842208])}}r.box(0,p(_.z+.05)-.07,_.z+.06,.22,.06,.03,[1710618,1710618,1710618,9082532])}return{skin:n,body:s,cabin:r,glass:a,glow:o,brake:l,plate:{y:i.plateY,z:U+.012},tailZ:U,wheels:[{x:b[0].x,z:b[0].z,r:b[0].r,hw:b[0].hw},{x:b[1].x,z:b[1].z,r:b[1].r,hw:b[1].hw}]}}function o1(i,t,e,n,s,r,a){i.with(new Ft().makeTranslation(t,e,n),()=>Zi(i,s,r,16,a))}function zh(i,t,e,n,s,r,a=16,o=!0){const l=(x,M,m)=>[M,Math.cos(x)*m,Math.sin(x)*m],c=t*.66,h=t*.93,u=e*.8,f=n*e,d=n*(e-.035);for(let x=0;x<a;x++){const M=x/a*Math.PI*2,m=(x+1)/a*Math.PI*2,p=x/a*8,g=(x+1)/a*8;i.layer(qt.TREAD,()=>Br(i,l(M,-u,t),l(M,u,t),l(m,u,t),l(m,-u,t),3815996,[0,p],[1,p],[1,g],[0,g]));for(const T of[-1,1])i.quad(l(M,T*u,t),l(m,T*u,t),l(m,T*e,h),l(M,T*e,h),2500138);const y=x/a*2,v=(x+1)/a*2;i.layer(qt.SIDEWALL,()=>Br(i,l(M,f,c),l(m,f,c),l(m,f,h),l(M,f,h),16777215,[y,0],[v,0],[v,1],[y,1])),i.quad(l(M,-f,c),l(m,-f,c),l(m,-f,h),l(M,-f,h),1447448),i.tri([-f,0,0],l(M,-f,c),l(m,-f,c),1052690),i.quad(l(M,f,c),l(m,f,c),l(m,d,c),l(M,d,c),ze(r,.85)),o&&i.quad(l(M,d,c*.98),l(m,d,c*.98),l(m,-d*.6,c*.98),l(M,-d*.6,c*.98),ze(r,.4))}i.with(new Ft().makeTranslation(d,0,0).multiply(new Ft().makeRotationY(Math.PI/2)),()=>{Io(i,0,0,0,c,c,a,r,e1[s])})}function c1(i,t,e,n,s){const r=new ht(!0);return zh(r,i,t,e,n,s),r.build()}function l1(i,t,e,n=13113360){const s=new ht(!0),r=i*.66,a=e*(t-.09);s.with(new Ft().makeTranslation(a,0,0).multiply(new Ft().makeRotationY(Math.PI/2)),()=>{Zi(s,r*.42,r*.86,14,10132128),Zi(s,r*.86,r*.88,14,6974064),s.prism(0,0,-.02,.02,r*.42,r*.42,8,3815998,3815998)});const o=.8;return s.with(new Ft().makeTranslation(a+e*.02,Math.cos(o)*r*.68,Math.sin(o)*r*.68).multiply(new Ft().makeRotationX(o)),()=>{s.box(0,0,0,.06,.08,.2,[n,ze(n,1.15)])}),s.build()}let gr=null;function Bh(){if(gr)return gr;const i=i1(),t=new Ro({vertexColors:!0,side:ue,shininess:60,specular:11053224}),e=new Cr({vertexColors:!0,side:ue,alphaTest:.5}),n=new Xe({vertexColors:!0,side:ue});for(const r of[t,e,n])zr(r,i);const s=new Ro({vertexColors:!0,side:ue,transparent:!0,opacity:.62,depthWrite:!1,shininess:110,specular:16777215});return gr={paint:t,lit:e,glow:n,glass:s},gr}let Ms=null;function h1(){if(Ms)return Ms;const i=64,t=128,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createImageData(i,t),r=(c,h,u)=>{const f=Math.max(0,Math.min(1,(u-c)/(h-c)));return f*f*(3-2*f)},a=.36,o=.4,l=.12;for(let c=0;c<t;c++)for(let h=0;h<i;h++){const u=(h+.5)/i-.5,f=(c+.5)/t-.5,d=Math.abs(u)-(a-l),x=Math.abs(f)-(o-l),M=Math.hypot(Math.max(d,0),Math.max(x,0))+Math.min(Math.max(d,x),0)-l;let m=.55*(1-r(-.08,.13,M));for(const g of[-.28,.28])for(const y of[-.3,.3]){const v=Math.hypot((u-y)/.09,(f-g)/.12);m=Math.max(m,.9*(1-r(.4,1.2,v)))}const p=(c*i+h)*4;s.data[p]=s.data[p+1]=s.data[p+2]=0,s.data[p+3]=Math.round(255*Math.min(1,m))}return n.putImageData(s,0,0),Ms=new Us(e),Ms.colorSpace=Fn,Ms}const zl=new Map;function kh(i){const t=zl.get(i);if(t)return t;const e=new Xe({color:0,map:h1(),transparent:!0,side:ue,opacity:i,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return zl.set(i,e),e}function Gh(i){const t=i.stations,e=t[0].z,n=t[t.length-1].z,s=n-e,a=Math.max(...t.map(h=>h.w))*2*1/.72/2,o=s*.98/.8/2,l=(e+n)/2,c=new ht;return c.quad([-a,.025,l-o],[a,.025,l-o],[a,.025,l+o],[-a,.025,l+o],16777215,[0,0,1,1]),c.build()}const u1=1583164,f1=2242124,Xi=1315862,Ve=657932,xr=13159636,Lo=(i,t)=>new Lt(i).multiplyScalar(t).getHex();function xn(i,t,e){if(t<=i[0].z)return i[0][e];for(let n=1;n<i.length;n++)if(t<=i[n].z){const s=(t-i[n-1].z)/(i[n].z-i[n-1].z);return i[n-1][e]+(i[n][e]-i[n-1][e])*s}return i[i.length-1][e]}function Hh(i,t,e=!1){const n=new ht,s=new ht,r=new ht,a=i.stations,o=Lo(t,.72),l=Lo(t,.5),c=a[a.length-1],h=c.z;for(let g=0;g<a.length-1;g++){const y=a[g],v=a[g+1],T=y.seg==="ws"||y.seg==="rf"||y.seg==="rw"||y.seg==="lv";for(const A of[-1,1])n.quad([A*y.w,y.yb,y.z],[A*v.w,v.yb,v.z],[A*v.w,v.belt,v.z],[A*y.w,y.belt,y.z],t),n.quad([A*y.w,y.belt,y.z],[A*v.w,v.belt,v.z],[A*v.wt,v.top,v.z],[A*y.wt,y.top,y.z],T&&y.seg!=="lv"?f1:t),n.quad([A*(y.w+.004),y.yb,y.z],[A*(v.w+.004),v.yb,v.z],[A*(v.w+.004),v.yb+.09,v.z],[A*(y.w+.004),y.yb+.09,y.z],l);const E=y.seg==="ws"||y.seg==="rw"?u1:y.seg==="lv"||y.seg==="bed"?Xi:y.seg==="rf"?o:t;if(n.quad([-y.wt,y.top,y.z],[y.wt,y.top,y.z],[v.wt,v.top,v.z],[-v.wt,v.top,v.z],E),y.seg==="lv")for(let A=1;A<6;A++){const C=A/6,b=y.z+(v.z-y.z)*C,S=y.top+(v.top-y.top)*C+.01,D=y.wt+(v.wt-y.wt)*C;n.quad([-D,S,b-.03],[D,S,b-.03],[D,S+.01,b+.03],[-D,S+.01,b+.03],t)}}const u=(g,y,v)=>n.poly([[-g.w,g.yb,g.z+v],[-g.w,g.belt,g.z+v],[-g.wt,g.top,g.z+v],[g.wt,g.top,g.z+v],[g.w,g.belt,g.z+v],[g.w,g.yb,g.z+v]],y);u(a[0],o,0),u(c,o,0);const f=a[0],d=f.z-.006;if(n.quad([-f.w*.7,f.yb+.04,d],[f.w*.7,f.yb+.04,d],[f.w*.7,f.yb+.14,d],[-f.w*.7,f.yb+.14,d],Ve),!e){const g=i.front??"popup",y=(f.belt+f.top)/2;for(const v of[-1,1]){const T=v*f.w*.62;if(g==="popup"){const E=xn(a,f.z+.45,"top");n.quad([T-.2,E+.004,f.z+.3],[T+.2,E+.004,f.z+.3],[T+.2,E+.004,f.z+.33],[T-.2,E+.004,f.z+.33],Ve),s.quad([T-.14,f.yb+.17,d],[T+.14,f.yb+.17,d],[T+.14,f.yb+.24,d],[T-.14,f.yb+.24,d],16756800)}else if(g==="round"){const E=[];for(let A=0;A<8;A++){const C=A/8*Math.PI*2;E.push([T+Math.cos(C)*.11,y+Math.sin(C)*.09,d-.002])}s.poly(E,16052440)}else{const E=g==="slim"?.05:.1;s.quad([T-.2,y-E/2,d],[T+.2,y-E/2,d],[T+.2,y+E/2,d],[T-.2,y+E/2,d],16052440)}}}n.quad([-c.w,c.yb-.06,h+.02],[c.w,c.yb-.06,h+.02],[c.w,c.yb+.08,h+.02],[-c.w,c.yb+.08,h+.02],e?3815994:Ve);for(const g of i.rear??[])for(const y of g.mirror===!1||g.x===0?[g.x]:[g.x,-g.x])n.quad([y-g.w/2,g.y-g.h/2,h+.006],[y+g.w/2,g.y-g.h/2,h+.006],[y+g.w/2,g.y+g.h/2,h+.006],[y-g.w/2,g.y+g.h/2,h+.006],g.c);const x=(g,y,v,T,E)=>{if(y.round){const A=[];for(let C=0;C<8;C++){const b=C/8*Math.PI*2+Math.PI/8;A.push([v+Math.cos(b)*y.w/2,y.y+Math.sin(b)*y.h/2,T])}g.poly(A,E)}else g.quad([v-y.w/2,y.y-y.h/2,T],[v+y.w/2,y.y-y.h/2,T],[v+y.w/2,y.y+y.h/2,T],[v-y.w/2,y.y+y.h/2,T],E)},M=ee.modern&&!e;for(const g of i.lights)for(const y of g.mirror===!1||g.x===0?[g.x]:[g.x,-g.x])x(s,g,y,h+.012,g.c),g.brake&&!e&&x(r,g,y,h+.016,16726570),M&&(x(n,{...g,w:g.w+.05,h:g.h+.05},y,h+.008,1710622),x(s,{...g,w:g.w*.5,h:g.h*.45},y,h+.014,new Lt(g.c).lerp(new Lt(16777215),.45).getHex()));if(i.slats){const g=i.slats;for(let y=0;y<=g.n;y++){const v=g.y0+(g.y1-g.y0)*y/g.n;n.box(0,v,h+.03,g.w*2,.035,.03,Ve)}}if(e)n.quad([-.26,i.plateY-.08,h+.008],[.26,i.plateY-.08,h+.008],[.26,i.plateY+.08,h+.008],[-.26,i.plateY+.08,h+.008],15263960);else{for(const g of i.exhaust)n.with(new Ft().makeTranslation(g.x,g.y,h-.1).multiply(new Ft().makeRotationX(Math.PI/2)),()=>{n.prism(0,0,-.1,.17,g.r,g.r,8,xr,null),n.prism(0,0,.169,.17,g.r*.78,g.r*.78,8,Ve,Ve)});if(n.quad([-.3,i.plateY-.1,h+.004],[.3,i.plateY-.1,h+.004],[.3,i.plateY+.1,h+.004],[-.3,i.plateY+.1,h+.004],Xi),M){const g=i.plateY,y=h+.006;n.quad([-.31,g-.105,y],[.31,g-.105,y],[.31,g-.085,y],[-.31,g-.085,y],xr),n.quad([-.31,g+.085,y],[.31,g+.085,y],[.31,g+.105,y],[-.31,g+.105,y],xr);for(const v of[-1,1])s.quad([v*.36,g-.04,h+.012],[v*.48,g-.04,h+.012],[v*.48,g+.04,h+.012],[v*.36,g+.04,h+.012],15790312);for(let v=-2;v<=2;v++)n.box(v*.2,c.yb-.03,h-.12,.03,.1,.26,Xi)}}const m=(g,y,v,T,E,A,C,b,S)=>{const D=xn(a,y,"w")+S,X=xn(a,v,"w")+S;n.quad([g*D,T,y],[g*X,A,v],[g*X,C,v],[g*D,E,y],b)};for(const g of i.side??[])for(const y of[-1,1])if(g.kind==="intake")m(y,g.z0,g.z1,g.y0+(g.y1-g.y0)*.5,g.y1,g.y0,g.y1,Ve,.006);else if(g.kind==="naca")m(y,g.z0,g.z1,g.y1-.02,g.y1,g.y0,g.y1,Ve,.006);else if(g.kind==="stripe")m(y,g.z0,g.z1,g.y0,g.y1,g.y0,g.y1,g.c??16777215,.008);else if(g.kind==="strakes"){m(y,g.z0,g.z1,g.y0,g.y1,g.y0,g.y1,Ve,.006);const v=g.n??5;for(let T=0;T<v;T++){const E=g.y0+(g.y1-g.y0)*(T+.6)/(v+.2);m(y,g.z0,g.z1,E,E+.035,E,E+.035,t,.03)}}if(!e){const g=a.find(y=>y.seg==="ws");if(g)for(const y of[-1,1])n.box(y*(g.w+.06),g.belt+.12,g.z+.25,.18,.12,.12,[t,t,o,Ve]);if(M&&g){const y=a.find(v=>v.seg==="rw")??a.find(v=>v.seg==="lv");for(const v of[-1,1]){n.box(v*(g.w+.02),g.belt+.08,g.z+.25,.08,.04,.05,Ve);const T=g.z+.05,E=y?y.z+.05:g.z+1.1;for(const b of[T,E]){const S=xn(a,b,"w")+.007,D=xn(a,b,"yb")+.1,X=xn(a,b,"belt")-.02;n.quad([v*S,D,b],[v*S,D,b+.02],[v*S,X,b+.02],[v*S,X,b],Xi)}const A=xn(a,E-.25,"w")+.012,C=xn(a,E-.25,"belt")-.1;n.quad([v*A,C,E-.38],[v*A,C,E-.18],[v*A,C+.04,E-.18],[v*A,C+.04,E-.38],xr)}for(const v of["ws","rw"]){const T=a.findIndex(C=>C.seg===v);if(T<0||T+1>=a.length)continue;const E=a[T],A=a[T+1];for(const C of[-1,1])n.quad([C*E.wt,E.top+.004,E.z],[C*A.wt,A.top+.004,A.z],[C*(A.wt-.04),A.top+.006,A.z],[C*(E.wt-.04),E.top+.006,E.z],Ve)}}}if(e&&ee.modern){const g=a[0],y=a.find(T=>T.seg==="ws"),v=a.find(T=>T.seg==="rw");if(n.box(0,c.yb+.05,h+.08,c.w*2+.06,.16,.16,[3815998,4868686]),n.box(0,g.yb+.05,g.z-.08,g.w*2+.06,.16,.16,[3815998,4868686]),y)for(const T of[-1,1])n.box(T*(y.w+.08),y.belt+.1,y.z+.2,.14,.12,.1,1710618);if(v&&n.quad([-.05,v.top+.15,v.z+.3],[.45,v.top+.35,v.z+.3],[.45,v.top+.37,v.z+.3],[-.05,v.top+.17,v.z+.3],1118481),i.id==="volvo240"||i.id==="cherokee"){const T=a.find(A=>A.seg==="rf"),E=a[a.indexOf(T)+1];for(const A of[-1,1])n.box(A*(T.wt-.08),T.top+.06,(T.z+E.z)/2,.06,.08,E.z-T.z,2763306)}}if(i.louvres){const g=i.louvres;for(let y=0;y<g.n;y++){const v=g.z0+(g.z1-g.z0)*y/g.n,T=xn(a,v,"top")+.006;n.quad([-g.w,T,v],[g.w,T,v],[g.w,T+.004,v+.06],[-g.w,T+.004,v+.06],Ve)}}if(i.scoop){const g=a.find(y=>y.seg==="rf");n.box(0,g.top+.07,g.z+.25,.32,.14,.5,[t,t,Ve,o])}if(i.wing){const g=i.wing,y=xn(a,g.z,"top");if(g.kind==="duck")n.box(0,g.y,g.z,g.w*2,.06,g.d,[t,t,o,o]);else if(n.box(0,g.y,g.z,g.w*2,.055,g.d,[t,t,o,o]),n.box(0,g.y-.03,g.z+g.d/2,g.w*2,.04,.03,l),g.kind==="big")for(const v of[-1,1])n.box(v*.32,(y+g.y)/2,g.z,.07,g.y-y,.16,Xi);else if(g.kind==="hoop")for(const v of[-1,1])n.box(v*(g.w-.08),(y+g.y)/2,g.z,.12,g.y-y,g.d*.7,t);else for(const v of[-1,1])n.poly([[v*g.w,y,g.z-g.d/2-.15],[v*g.w,y,g.z+g.d/2],[v*g.w,g.y+.06,g.z+g.d/2],[v*g.w,g.y+.06,g.z-g.d/2]],t)}const p=i.wheels;for(const[g,y]of[[p.fz,p.fx],[p.rz,p.rx]])for(const v of[-1,1]){const T=[];for(let E=0;E<=6;E++){const A=E/6*Math.PI;T.push([v*(xn(a,g,"w")+.003),p.r+Math.sin(A)*(p.r+.07),g+Math.cos(A)*(p.r+.07)])}n.poly(T,Ve)}return{lit:n,glow:s,brake:r,plate:{y:i.plateY,z:h+.012},tailZ:h}}function d1(i,t,e,n,s){const r=new ht,a=Math.max(10,s*2),o=(c,h,u=i)=>[h,Math.cos(c)*u,Math.sin(c)*u],l=Lo(n,.3);for(let c=0;c<a;c++){const h=c/a*Math.PI*2,u=(c+1)/a*Math.PI*2;r.quad(o(h,-t),o(u,-t),o(u,t),o(h,t),c%2?1710618:2368548),r.quad(o(h,e*t),o(u,e*t),o(u,e*t,i*.7),o(h,e*t,i*.7),2105376),r.tri([-e*t,0,0],o(h,-e*t),o(u,-e*t),1447446),r.tri([e*(t+.005),0,0],o(h,e*(t+.005),i*.7),o(u,e*(t+.005),i*.7),c%2===0?n:l)}return r.with(new Ft().makeRotationZ(Math.PI/2),()=>r.prism(0,0,-e*(t+.01),-e*(t+.011),.07,.07,6,n,n)),r.build()}function ic(i,t=1,e=.8){const n=new ht,s=i.stations[i.stations.length-1].z+.08;for(const r of i.lights)for(const a of r.mirror===!1||r.x===0?[r.x]:[r.x,-r.x]){const o=Math.max(r.w,r.h)*1.6*t+.25;n.quad([a-o,r.y-o,s],[a+o,r.y-o,s],[a+o,r.y+o,s],[a-o,r.y+o,s],new Lt(r.c).multiplyScalar(e).getHex(),[0,0,1,1])}return n}function p1(i,t){const e=t.wheels;for(const[n,s]of[[-e.fx,e.fz],[e.fx,e.fz],[-e.rx,e.rz],[e.rx,e.rz]])i.with(new Ft().makeTranslation(n,e.r,s).multiply(new Ft().makeRotationZ(Math.PI/2)),()=>{i.prism(0,0,-.12,.12,e.r,e.r,8,1579032,(n>0,9079434))})}class Da{constructor(t,e,n,s,r=3947590,a=!1){this.spec=t,this.root=new zn,this.body=new zn,this.wheels=[],this.geos=[],this.hubs=[],this.detail=[],this.paintwork=[],this.dentable=[],this.cracks=null,this.crackCount=0,this.glowMesh=null,this.tailZ=0,this.damaged=!1,this.near=!0;const o=(v,T,E)=>{this.geos.push(v);const A=new fe(v,T);return E.add(A),A},l=ee.modern,c=l?Bh():null;let h,u,f;if(c){const v=Oh(t,e);this.paintwork.push(o(v.skin.build(!0),c.paint,this.body),o(v.body.build(),c.paint,this.body)),this.detail.push(o(v.cabin.build(),c.lit,this.body));const T=o(v.glass.build(),c.glass,this.body);T.renderOrder=1,this.glowMesh=o(v.glow.build(),c.glow,this.body),this.dentable.push(T,this.glowMesh),this.brake=o(v.brake.empty?new ht().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),c.glow,this.body),h=v.plate,u=v.tailZ,f=v.wheels}else{const v=Hh(t,e);this.paintwork.push(o(v.lit.build(),n.paint??n.lit,this.body)),v.glow.empty||this.dentable.push(this.glowMesh=o(v.glow.build(),n.glow,this.body)),this.brake=o(v.brake.empty?new ht().tri([0,0,0],[0,0,0],[0,0,0],0).build():v.brake.build(),n.glow,this.body),h=v.plate,u=v.tailZ;const T=t.wheels,E=T.hw??.18;f=[{x:T.fx,z:T.fz,r:T.r,hw:E},{x:T.rx,z:T.rz,r:T.r*1.03,hw:E*1.15}]}const d=new ht,{y:x,z:M}=h;d.quad([-.27,x-.08,M],[.27,x-.08,M],[.27,x+.08,M],[-.27,x+.08,M],16777215,s),this.dentable.push(o(d.build(),n.sign,this.body)),this.dentable.push(this.brake),a&&n.halo&&o(ic(t,.45,.45).build(),n.halo,this.body);const m=new ht;for(const v of t.exhaust)m.prism(v.x,-v.y,0,.7,v.r*2,0,6,[16764992,16740384],null),m.prism(v.x,-v.y,0,.42,v.r*1.2,0,6,16775360,null);const p=m.build();if(p.rotateX(Math.PI/2),this.flames=o(p,n.glow,this.body),this.flames.position.set(0,0,u+(l?.12:.05)),this.tailZ=u,this.flames.visible=!1,l){const v=o(Gh(t),kh(a?.85:.7),this.root);v.renderOrder=-1}else{const v=t.stations,T=v[v.length-1].z-v[0].z,E=Math.max(...v.map(b=>b.w)),A=new ht,C=[];for(let b=0;b<8;b++){const S=b/8*Math.PI*2+Math.PI/8;C.push([Math.cos(S)*E*.92,.02,v[0].z+T/2+Math.sin(S)*(T/2-.05)])}A.poly(C,16777215),o(A.build(),new Xe({color:r,side:ue}),this.root)}const g=t.wheels,y=t.rimStyle??"star";for(const[v,T]of[[0,-1],[0,1],[1,-1],[1,1]]){const E=f[v],A=c?c1(E.r,E.hw,T,y,g.rim):d1(E.r,E.hw,T,g.rim,g.spokes),C=o(A,c?c.lit:n.lit,this.root);if(C.position.set(T*E.x,E.r,E.z),this.wheels.push(C),c){const b=o(l1(E.r,E.hw,T,t.id==="959"||t.id==="nsx"?2763310:13113360),c.lit,this.root);b.position.copy(C.position),this.hubs.push(b),this.detail.push(b)}}this.root.add(this.body)}setNear(t){if(t!==this.near){this.near=t;for(const e of this.detail)e.visible=t}}dispose(){var t;for(const e of this.geos)e.dispose();(t=this.cracks)==null||t.geometry.dispose()}hit(t,e){this.damaged=!0;const n=this.spec.stations,s=n[0].z,r=n[n.length-1].z,a=Math.max(...n.map(p=>p.w)),o=Math.random,l=new V,c=new V;if(e==="front"||e==="rear"){const p=e==="front";l.set((o()-.5)*a*1.4,.45+o()*.25,p?s+.1:r-.1),c.set(0,-.15,p?1:-1)}else{const p=e==="right"?1:-1;l.set(p*a,.45+o()*.3,s+.6+o()*(r-s-1.2)),c.set(-p,-.1,(o()-.5)*.3)}c.normalize();const h=.55+t*.5,u=.04+t*.16,f=new Lt(6974064),d=new Lt(1841688),x=new Lt,M=(p,g,y)=>Math.sin(p*41.3+g*17.1)*Math.cos(y*29.7+p*7.3),m=(p,g)=>{const y=p.geometry,v=y.getAttribute("position"),T=g?y.getAttribute("color"):void 0;let E=!1;for(let A=0;A<v.count;A++){const C=v.getX(A),b=v.getY(A),S=v.getZ(A),D=Math.hypot(C-l.x,(b-l.y)*1.3,S-l.z);if(D>=h)continue;const X=(1-D/h)**2,W=u*X*(.8+.4*M(C,b,S));if(v.setXYZ(A,C+c.x*W,b+c.y*W,S+c.z*W),E=!0,T){x.setRGB(T.getX(A),T.getY(A),T.getZ(A));const Y=Math.min(1,X*(.4+t));x.lerp(M(S,C,b)>.2?f:d,Y*.75),T.setXYZ(A,x.r,x.g,x.b)}}E&&(v.needsUpdate=!0,T&&(T.needsUpdate=!0),y.computeVertexNormals())};for(const p of this.paintwork)m(p,!0);for(const p of this.dentable)m(p,!1);t>.35&&this.crackCount<3&&this.crack()}breakLamp(t){this.damaged=!0;for(const e of[this.glowMesh,this.brake]){if(!e)continue;const n=e.geometry.getAttribute("position"),s=e.geometry.getAttribute("color");for(let r=0;r<n.count;r++)n.getZ(r)<this.tailZ-.05||n.getX(r)*t<.2||s.setXYZ(r,s.getX(r)*.15+.02,s.getY(r)*.15+.02,s.getZ(r)*.15+.02);s.needsUpdate=!0}}crack(){const t=this.spec.stations;let e=t.findIndex(f=>f.seg==="rw");if(e<0&&(e=t.findIndex(f=>f.seg==="ws")),e<0||e+1>=t.length)return;this.crackCount++;const n=t[e],s=t[e+1],r=(f,d)=>{const x=n.wt+(s.wt-n.wt)*d;return[f*x*.95,n.top+(s.top-n.top)*d+.03*(1-f*f)+.025,n.z+(s.z-n.z)*d]},a=this.cracks?Array.from(this.cracks.geometry.getAttribute("position").array):[],o=(Math.random()-.5)*1.1,l=.25+Math.random()*.5,c=7+Math.floor(Math.random()*4),h=[];for(let f=0;f<c;f++){const d=f/c*Math.PI*2+Math.random()*.5,x=.35+Math.random()*.45;let M=o,m=l;for(let p=1;p<=4;p++){const g=x*p/4,y=Math.max(-1,Math.min(1,o+Math.cos(d)*g+(Math.random()-.5)*.08)),v=Math.max(0,Math.min(1,l+Math.sin(d)*g*.8+(Math.random()-.5)*.06));a.push(...r(M,m),...r(y,v)),p===1&&h.push([y,v]),M=y,m=v}}for(let f=0;f<h.length;f++)a.push(...r(...h[f]),...r(...h[(f+1)%h.length]));const u=new He;u.setAttribute("position",new ge(a,3)),this.cracks?(this.cracks.geometry.dispose(),this.cracks.geometry=u):(this.cracks=new tg(u,new wh({color:15266047,transparent:!0,opacity:.85})),this.cracks.renderOrder=2,this.body.add(this.cracks))}pose(t,e,n,s,r,a=!1,o=0){this.root.rotation.set(0,e,0),this.body.rotation.set(r,0,-t*.05),this.body.position.y=s,this.brake.visible=a,this.flames.visible=o>0,o>0&&this.flames.scale.set(1,1,.6+Math.random()*.8),this.wheels.forEach((l,c)=>l.rotation.set(n,c<2?-t*.35:0,0,"YXZ")),this.hubs.forEach((l,c)=>l.rotation.set(0,c<2?-t*.35:0,0))}}function Un(i){const t=i.len/2,e=i.yb??.3,n=i.belt??i.hood,s=i.tumble??.8;return[{z:-t,w:i.w*.96,yb:e,belt:i.nose-.05,top:i.nose,wt:i.w*.9,seg:"p"},{z:-t+.35,w:i.w,yb:e,belt:n-.04,top:i.hood-.02,wt:i.w*.94,seg:"p"},{z:i.ws,w:i.w,yb:e,belt:n,top:i.hood,wt:i.w*.92,seg:"ws"},{z:i.rf0,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rf"},{z:i.rf1,w:i.w,yb:e,belt:n,top:i.roof,wt:i.w*s,seg:"rw"},{z:i.rw,w:i.w,yb:e,belt:n,top:i.deck,wt:i.w*.92,seg:"p"},{z:t,w:i.w,yb:e,belt:Math.min(n,i.tail-.04),top:i.tail,wt:i.w*.92,seg:"p"}]}const _n=12589072,vn=(i,t,e,n,s=.5,r=.3)=>{const a=e[e.length-1].z-e[0].z,o=Math.max(...e.map(l=>l.w));return{id:i,name:t,make:"",year:0,group:"TRAFFIC",paints:[16777215],stations:e,lights:n,wheels:{r,fz:e[0].z+a*.2,rz:e[0].z+a*.8,fx:o-.06,rx:o-.06,rim:10132122,spokes:4},exhaust:[],plateY:s,stats:{vmax:0,accel:0,grip:0}}},Vh={golf:vn("golf","VW GOLF MK2",Un({len:4,w:.83,nose:.62,hood:.84,roof:1.4,deck:.98,tail:.98,ws:-.95,rf0:-.2,rf1:1.15,rw:1.85}),[{x:.6,y:.84,w:.34,h:.18,c:_n}],.55),volvo240:vn("volvo240","VOLVO 240 ESTATE",Un({len:4.8,w:.86,nose:.7,hood:.86,roof:1.42,deck:1,tail:1,ws:-.8,rf0:0,rf1:2.22,rw:2.34}),[{x:.76,y:.86,w:.16,h:.42,c:_n}],.6),ae86:vn("ae86","TOYOTA AE86",Un({len:4.2,w:.82,nose:.6,hood:.8,roof:1.32,deck:.94,tail:.94,ws:-.6,rf0:.1,rf1:.7,rw:1.95}),[{x:.52,y:.8,w:.56,h:.14,c:_n}],.52),cherokee:vn("cherokee","JEEP CHEROKEE XJ",Un({len:4.24,w:.9,nose:.92,hood:1.06,roof:1.62,deck:1.22,tail:1.22,ws:-.9,rf0:-.35,rf1:1.96,rw:2.06,yb:.45}),[{x:.8,y:.98,w:.14,h:.36,c:_n}],.7,.36),caprice:vn("caprice","CHEVROLET CAPRICE",Un({len:5.4,w:.95,nose:.78,hood:.92,roof:1.42,deck:1,tail:1,ws:-.7,rf0:0,rf1:1,rw:1.6}),[{x:.62,y:.86,w:.6,h:.16,c:_n}],.6),w124:vn("w124","MERCEDES W124",Un({len:4.74,w:.87,nose:.7,hood:.86,roof:1.42,deck:1,tail:1.02,ws:-.65,rf0:.05,rf1:.95,rw:1.55}),[{x:.6,y:.88,w:.5,h:.2,c:_n}],.62),f150:vn("f150","FORD F-150",[{z:-2.5,w:.98,yb:.45,belt:.95,top:1.05,wt:.9,seg:"p"},{z:-2.1,w:1,yb:.45,belt:1.1,top:1.15,wt:.94,seg:"p"},{z:-.9,w:1,yb:.45,belt:1.15,top:1.2,wt:.94,seg:"ws"},{z:-.35,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"rf"},{z:.6,w:1,yb:.45,belt:1.15,top:1.8,wt:.86,seg:"p"},{z:.62,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"bed"},{z:2.5,w:1,yb:.45,belt:1.15,top:1.18,wt:.96,seg:"p"}],[{x:.9,y:.95,w:.12,h:.3,c:_n}],.65,.38),crown:vn("crown","TOYOTA CROWN",Un({len:4.7,w:.85,nose:.74,hood:.88,roof:1.48,deck:1,tail:1.02,ws:-.6,rf0:.1,rf1:1.05,rw:1.5}),[{x:.64,y:.88,w:.4,h:.16,c:_n}],.62),cedric:vn("cedric","NISSAN CEDRIC",Un({len:4.8,w:.86,nose:.72,hood:.86,roof:1.42,deck:.98,tail:1,ws:-.65,rf0:.05,rf1:1,rw:1.55}),[{x:.5,y:.86,w:.7,h:.12,c:_n}],.6),every:vn("every","SUZUKI EVERY",[{z:-1.7,w:.7,yb:.4,belt:.8,top:.9,wt:.66,seg:"p"},{z:-1.55,w:.7,yb:.4,belt:.9,top:1,wt:.66,seg:"ws"},{z:-1.05,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"rf"},{z:1.65,w:.7,yb:.4,belt:1,top:1.82,wt:.62,seg:"p"},{z:1.7,w:.7,yb:.4,belt:1,top:1.8,wt:.64,seg:"p"}],[{x:.6,y:.8,w:.14,h:.3,c:_n}],.6,.27),civic:vn("civic","HONDA CIVIC EF",Un({len:4,w:.84,nose:.6,hood:.8,roof:1.32,deck:.96,tail:.96,ws:-.55,rf0:.2,rf1:1.2,rw:1.92}),[{x:.5,y:.8,w:.66,h:.12,c:_n}],.5)};function Ir(i,t={}){if(ee.modern)return m1(i,t);const e=Hh(i,16777215,!0);p1(e.lit,i);const n=e.glow;if(t.taxi){const o=i.stations.find(l=>l.seg==="rf");n.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const s=i.stations,a={parts:[{geo:e.lit.build(),mat:"lit"}],radius:0,max:40,len:(s[s.length-1].z-s[0].z)/2+2.2};return n.empty||a.parts.push({geo:n.build(),mat:"glow"}),t.night&&a.parts.push({geo:ic(i,.8).build(),mat:"halo",tint:!1}),a}function m1(i,t){const e=Oh(i,16777215,!0),n=e.cabin;for(const o of e.wheels)for(const l of[-1,1])n.with(new Ft().makeTranslation(l*o.x,o.r,o.z),()=>zh(n,o.r,o.hw,l,"steel",12106948,8,!1));const s=e.glow;if(t.taxi){const o=i.stations.find(l=>l.seg==="rf");s.box(0,o.top+.12,o.z+.4,.5,.22,.3,16769152)}const r=i.stations,a={parts:[{geo:Gh(i),mat:"shadow",tint:!1,order:-1},{geo:e.skin.build(!0),mat:"car",tint:!0},{geo:e.body.build(),mat:"car",tint:!0},{geo:n.build(),mat:"car",tint:!1},{geo:s.build(),mat:"carGlow",tint:!1},{geo:e.glass.build(),mat:"glass",tint:!1}],radius:0,max:40,len:(r[r.length-1].z-r[0].z)/2+2.2};return t.night&&a.parts.push({geo:ic(i,.8).build(),mat:"halo",tint:!1}),a}let ys=null;function g1(i){ee.modern&&!ys&&(ys=t1());const t=new Cr({vertexColors:!0,flatShading:!0,side:ue}),e=new Xe({vertexColors:!0,side:ue});ee.modern&&ys&&(zr(t,ys),zr(e,ys));const n=ee.modern?Bh():null;return{facade:t,facadeLit:e,car:(n==null?void 0:n.lit)??t,carGlow:(n==null?void 0:n.glow)??e,glass:(n==null?void 0:n.glass)??e,shadow:kh(.75),lit:new Cr({vertexColors:!0,flatShading:!0,side:ue}),glow:new Xe({vertexColors:!0,side:ue}),sign:new Xe({map:i,side:ue}),halo:new Xe({map:fg(),vertexColors:!0,transparent:!0,blending:Ba,depthWrite:!1,fog:!1,side:ue,visible:ee.modern}),paint:ee.modern?new Ro({vertexColors:!0,flatShading:!0,side:ue,shininess:45,specular:10132122}):new Cr({vertexColors:!0,flatShading:!0,side:ue})}}class x1{constructor(t,e,n){this.defs=t,this.meshes=[],this.counts=[],this.m=new Ft,this.q=new rs,this.e=new ln,this.p=new V,this.sc=new V,this.c=new Lt,this.white=new Lt(1,1,1);for(const s of t){const r=s.parts.map(a=>{const o=new Eh(a.geo,e[a.mat],s.max);return o.frustumCulled=!1,o.instanceMatrix.setUsage(Es),o.setColorAt(0,this.white),o.count=0,a.order&&(o.renderOrder=a.order),n.add(o),{mesh:o,tint:a.tint??a.mat==="lit"}});this.meshes.push(r),this.counts.push(0)}}begin(){this.counts.fill(0)}add(t,e,n,s,r,a=1,o=1,l,c=0){const h=this.counts[t];if(!(h>=this.defs[t].max)){this.counts[t]=h+1,this.e.set(0,r,c,"YXZ"),this.q.setFromEuler(this.e),this.p.set(e,n,s),this.sc.set(a,a*o,a),this.m.compose(this.p,this.q,this.sc),l!==void 0&&this.c.setHex(l);for(const{mesh:u,tint:f}of this.meshes[t])u.setMatrixAt(h,this.m),u.setColorAt(h,f&&l!==void 0?this.c:this.white)}}end(){this.meshes.forEach((t,e)=>{for(const{mesh:n}of t)n.count=this.counts[e],n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0)})}}const _1=(i,t)=>new Lt(i).multiplyScalar(t).getHex(),_e=(i,t,e)=>{const n=[{geo:i.build(),mat:"lit"}];return t&&!t.empty&&n.push({geo:t.build(),mat:"glow"}),n};function v1(){const i=new ht;return Do(i),{parts:_e(i),radius:.8,max:260}}function M1(){const i=new ht;return i.blob(0,0,0,16,2.4,11,[15916186,14205056]),i.with(Dl(-4,1.5,1),()=>Do(i)),i.with(Dl(5,1.2,-2).multiply(kg(1.3)).multiply(new Ft().makeScale(.8,.8,.8)),()=>Do(i)),{parts:_e(i),radius:0,max:20}}function Do(i){let e=0;for(let r=0;r<5;r++){const a=.18*Math.pow(r+1,1.5),o=r*2,l=(r+1)*2,c=.48-r*.04,h=.44-r*.04,u=r%2?9067051:11038778;for(let f=0;f<6;f++){const d=f/6*Math.PI*2,x=(f+1)/6*Math.PI*2;i.quad([e+Math.cos(d)*c,o,Math.sin(d)*c],[e+Math.cos(x)*c,o,Math.sin(x)*c],[a+Math.cos(x)*h,l,Math.sin(x)*h],[a+Math.cos(d)*h,l,Math.sin(d)*h],f%2?u:7621154)}e=a}const n=[e,5*2,0],s=7;for(let r=0;r<s;r++){const a=r/s*Math.PI*2+.3,o=Math.cos(a),l=Math.sin(a),c=-l,h=o,u=(g,y,v)=>[[n[0]+o*g+c*v,n[1]+y,n[2]+l*g+h*v],[n[0]+o*g-c*v,n[1]+y,n[2]+l*g-h*v]],[f,d]=u(1.5,.7,.75),[x,M]=u(3,.3,.6),m=[n[0]+o*4.4,n[1]-1.6,n[2]+l*4.4],p=r%2?3124810:2067002;i.tri(n,f,d,p),i.quad(d,f,x,M,r%2?2529343:1733682),i.tri(M,x,m,p)}i.blob(n[0],n[1]-.3,0,.5,.45,.5,6965786)}function y1(){const i=new ht;return i.prism(0,0,0,3,.45,.32,5,[7227942,5913630]),i.blob(0,4.6,0,2.8,2.4,2.8,[4173375,2783790]),i.blob(.4,6.8,.2,1.9,1.6,1.9,[5685834,3442746]),{parts:_e(i),radius:1.2,max:220}}function b1(){const i=new ht;return i.blob(0,.9,0,1.8,1.1,1.6,[4763712,2914860]),{parts:_e(i),radius:0,max:160}}function S1(){const i=new ht;return i.blob(0,1,0,2.2,1.6,2,[13153420,9206362]),i.blob(1.6,.6,.6,1.2,.9,1.1,[12100732,8153676]),{parts:_e(i),radius:2.2,max:120}}function Ua(i){const t=new ht;return t.box(0,1.3,0,.12,2.6,.12,15790320),t.prism(0,0,2.3,3,2.1,0,8,[i[0],i[1]]),t.prism(0,0,2.3,2.3001,2.1,.01,8,[i[0],i[1]]),t.quad([-.6,.03,.6],[.6,.03,.6],[.6,.03,2.4],[-.6,.03,2.4],i[0]),{parts:_e(t),radius:0,max:120}}function E1(){const i=new ht;for(const[t,e]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(t,1.3,e,.2,2.6,.2,16777215);return i.box(0,3.5,0,2.6,1.8,2.4,[16777215,16777215]),i.box(0,3.6,1.21,1.8,.7,.02,2775690),i.prism(0,0,4.4,5.4,2.1,0,4,[16730730,16743050],null,Math.PI/4),{parts:_e(i),radius:1.4,max:30}}function Bl(i,t,e,n,s,r,a=!0){for(let o=0;o<3;o++)i.box(r.range(-n/3,n/3),e+.6,r.range(-s/3,s/3),2.2,1.2,1.6,[13158600,14474460]);if(r.chance(.7)){const o=r.range(-n/4,n/4),l=r.range(-s/4,s/4);for(const[c,h]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.box(o+c,e+1,l+h,.2,2,.2,6974064);i.prism(o,l,e+2,e+4.2,1.4,1.4,8,[10127984,9075298],8022610)}a&&(i.box(n/4,e+4,0,.25,8,.25,10132136),t.box(n/4,e+8.2,0,.6,.6,.6,16719904))}function w1(i,t){const e=new ht,n=3836600;if(ee.modern){const s=new ht,r=new ht,a=o=>qr(o);if(i===0){s.facadeBox(0,38/2+1.5,0,16,35,12,a(ye.HOTEL),8,8,[16777215,15658734],15263976),e.box(0,1.5,0,16-.4,3,12-.4,[2771562,2771562]),e.box(0,3.1,12/2+1.2,7,.3,2.6,[16777215,16777215]);for(const h of[-3.2,3.2])e.box(h,1.5,12/2+2.3,.2,3,.2,14211288);for(const h of[-16/2-.2,16/2+.2])e.box(h,38/2,0,.7,38,12+.7,[16777215,16777215]);e.box(0,38+1.2,0,16*.5,2.4,12*.6,[16777215,15790320]),Bl(e,r,38,16,12,t)}else if(i===1){const o=[[18,16,14],[14,12,11],[9,9,8]];let l=0;for(const[c,h,u]of o)s.facadeBox(0,l+h/2,0,c,h,u,a(ye.DECO),8,8,[16777215,15790320],15788248),e.box(0,l+h-.4,0,c+.6,.8,u+.6,[16769162,16771232]),e.box(0,l+h-1.4,0,c+.3,.25,u+.3,4243632),l+=h;e.prism(0,0,l,l+7,1.2,.05,4,[16777215,14737632]),r.box(0,l+7.2,0,.5,.5,.5,16719904)}else{s.facadeBox(0,12/2,0,26,12,9,a(ye.MOTEL),12,12,[16777215,15790320],14736596),e.box(0,12+.3,0,27,.6,10,[16738954,16743062]),e.box(0,6.1,9/2+.9,26,.25,1.8,[15790320,16777215]);for(let h=-26/2+3;h<26/2;h+=6)e.box(h,12/2,9/2+1.7,.4,12,.4,16777215);Bl(e,r,12,26,9,t,!1)}return{parts:[..._e(e,r),{geo:s.build(),mat:"facade"}],radius:0,max:40}}if(i===0){e.box(0,38/2,0,16,38,12,[16777215,15790320]);for(let o=4;o<36;o+=3.2)e.box(0,o,0,16+.3,1.2,12+.3,n);e.box(0,38+1.2,0,16*.5,2.4,12*.6,16777215),e.box(-16/2-.2,38/2,0,.6,38,12+.6,16777215),e.box(16/2+.2,38/2,0,.6,38,12+.6,16777215)}else if(i===1){const s=[[18,16,14],[14,12,11],[9,9,8]];let r=0;for(const[a,o,l]of s){e.box(0,r+o/2,0,a,o,l,[16777215,16053492]);for(let c=r+2.5;c<r+o-1;c+=3)e.box(0,c,0,a*.7,1.3,l+.3,n);e.box(0,r+o-.4,0,a+.6,.8,l+.6,16769162),r+=o}e.prism(0,0,r,r+7,1.2,.05,4,[16777215,14737632])}else{e.box(0,12/2,0,26,12,9,[16777215,15921906]);for(let o=2.5;o<12;o+=3.3)e.box(0,o,0,26+.3,1.1,9+.3,n);e.box(0,12+.3,0,27,.6,10,16738954);for(let o=-26/2+3;o<26/2;o+=6)e.box(o,12/2,9/2+.25,.6,12,.5,16777215)}return{parts:_e(e),radius:0,max:40}}function T1(i){const t=new ht,e=new ht,n=new ht;ee.modern?n.facadeBox(0,3.5,0,12,7,9,qr(ye.SHOP),12,7,[16777215,15790320],14736596):(t.box(0,3.5,0,12,7,9,[16777215,15790320]),t.box(0,3,4.6,8,2.6,.2,3832488));for(let r=0;r<6;r++){const a=-6+r*2,o=a+2;t.quad([a,5.2,4.5],[o,5.2,4.5],[o,4.4,6],[a,4.4,6],r%2?16777215:16730714)}e.quad([-5,7.2,4.52],[5,7.2,4.52],[5,9.7,4.52],[-5,9.7,4.52],16777215,i),t.box(0,8.45,4.4,10.4,2.9,.2,16777215);const s=[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}];return n.empty||s.push({geo:n.build(),mat:"facade"}),{parts:s,radius:0,max:40}}function A1(i,t=9,e=4.5,n=9079434,s=15790320){const r=new ht,a=new ht;return r.box(-t*.3,2.5,0,.35,5,.35,n),r.box(t*.3,2.5,0,.35,5,.35,n),r.box(0,5+e/2,0,t+.6,e+.6,.4,s),a.quad([-t/2,5,.22],[t/2,5,.22],[t/2,5+e,.22],[-t/2,5+e,.22],16777215,i),{parts:[{geo:r.build(),mat:"lit"},{geo:a.build(),mat:"sign"}],radius:1.2,max:40}}function R1(i,t=4,e=2){const n=new ht,s=new ht;return n.box(0,1.6,0,.2,3.2,.2,13619151),n.box(0,3.2+e/2,-.06,t+.2,e+.2,.1,14540253),s.quad([-t/2,3.2,.01],[t/2,3.2,.01],[t/2,3.2+e,.01],[-t/2,3.2+e,.01],16777215,i),{parts:[{geo:n.build(),mat:"lit"},{geo:s.build(),mat:"sign"}],radius:.5,max:30}}function Wh(i,t,e=10133672,n=3,s=!1){const r=new ht,a=new ht;r.prism(0,0,0,i,.2,.14,6,e),r.box(-n/2,i,0,n,.22,.22,e),a.box(-n,i-.2,0,1.4,.3,.6,t);const o=_e(r,a);if(s){const l=new ht,c=4.2,h=i-.5;l.quad([-n-c,h-c,0],[-n+c,h-c,0],[-n+c,h+c,0],[-n-c,h+c,0],t,[0,0,1,1]),l.quad([-n,h-c,-c],[-n,h-c,c],[-n,h+c,c],[-n,h+c,-c],t,[0,0,1,1]),l.quad([-n-3.5,.05,-3.5],[-n+3.5,.05,-3.5],[-n+3.5,.05,3.5],[-n-3.5,.05,3.5],_1(t,.35),[0,0,1,1]),o.push({geo:l.build(),mat:"halo",tint:!1})}return{parts:o,radius:.5,max:120}}function C1(i=15921906,t=10132122){const e=new ht;return e.box(0,.85,-ae/2,.15,.45,ae+.05,[i,i]),e.box(0,.4,0,.18,.8,.18,t),e.box(0,.4,-ae/2,.18,.8,.18,t),{parts:_e(e),radius:0,max:420}}function vi(i,t=15790320,e=14690858,n=16769088){const s=new ht,r=new ht,a=new ht,o=Tt+2.5;s.box(-o,5.5,0,1.2,11,1.2,[t,t]),s.box(o,5.5,0,1.2,11,1.2,[t,t]),s.box(0,11.5,0,o*2+1.6,3.4,.8,e),r.quad([-o+1,10.1,.42],[o-1,10.1,.42],[o-1,12.9,.42],[-o+1,12.9,.42],16777215,i);for(let l=0;l<6;l++)a.box(-o+2+l*((o*2-4)/5),13.6,.2,.9,.6,.6,n);return{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"sign"},{geo:a.build(),mat:"glow"}],radius:0,max:4}}function P1(i=9079446,t=14204992,e=9){const n=new ht,s=Tt+2.2,r=34,a=60;return n.box(-s-a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(s+a/2,r/2-4,0,a,r+8,3,[i,i]),n.box(0,e+(r-e)/2,0,s*2,r-e,3,[i,i]),n.box(0,e+.6,1.6,s*2,1.2,.3,t),n.box(-s-.4,e/2,1.6,.8,e,.3,t),n.box(s+.4,e/2,1.6,.8,e,.3,t),{parts:_e(n),radius:0,max:6}}function I1(i=9){const t=new ht,e=Tt+2.2,n=i+2.5,s=4894266,r=3836976,a=11047024,o=9073752,l=(u,f,d)=>t.poly(u.map(([x,M])=>[x,M,d]),f),c=u=>u.map(([f,d])=>[-f,d]).reverse(),h=[[-130,-8],[-e,-8],[-e,n],[-34,30],[-62,38],[-98,22]];l(h,s,-.4),l(c([[-120,-8],[-e,-8],[-e,n],[-30,34],[-55,30],[-90,16]]),r,-.4),l([[-e,n],[e,n],[e+8,34],[12,44],[-10,40],[-e-6,30]],s,-.4),l([[-e-10,-8],[-e,-8],[-e,n],[-e-6,n+6],[-e-14,8]],a,0),l([[e,-8],[e+10,-8],[e+14,8],[e+6,n+6],[e,n]],o,0),l([[-e,n],[e,n],[e+6,n+6],[0,n+9],[-e-6,n+6]],a,0),t.box(-e-.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(e+.6,i/2,.4,1.2,i+.4,.8,14735560),t.box(0,i+1.1,.4,e*2+2.4,2.2,.8,14735560);for(let u=0;u<10;u++){const f=-e+u*e*2/10;t.quad([f,i+.2,.82],[f+e*2/10,i+.2,.82],[f+e*2/10,i+.9,.82],[f,i+.9,.82],u%2?1710618:16764992)}return{parts:_e(t),radius:0,max:6}}function kr(i,t=0){const e=new ht,n=new ht,s=1+t;if(!t)for(const r of[-1.5,1.5])e.box(r,.6,-.1,.16,1.2,.16,15263976);return e.box(0,s+.75,-.08,4.3,1.7,.12,1710618),n.quad([-2,s+.1,0],[2,s+.1,0],[2,s+1.4,0],[-2,s+1.4,0],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:1.8,max:60}}function L1(){const i=new ht;i.box(0,.65,-ae/2,1.5,1.3,ae,[3840570,5421130]);const t=[16734858,16769088,16777215,16747056];for(let e=0;e<6;e++)i.box(e%2?.35:-.35,1.34,-.5-e*.95,.3,.12,.3,t[e%t.length]);return{parts:_e(i),radius:0,max:360}}function D1(){const i=new ht,t=new ht;return i.prism(0,0,0,8,.1,.08,6,15790320,16769088),t.tri([0,7.8,0],[0,6.2,0],[-2.6,7,.3],16777215),t.tri([0,7,.01],[0,6.6,.01],[-1.6,6.85,.31],13684944),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:.4,max:80}}function U1(){const i=new ht;return i.prism(0,0,0,1.6,.3,.25,5,6964774),i.prism(0,0,1.2,5.2,2.4,0,7,[2783802,1991728]),i.prism(0,0,3.6,7.6,1.9,0,7,[3444799,2519092]),i.prism(0,0,5.8,9.6,1.3,0,7,[4105288,2914872]),{parts:_e(i),radius:1,max:200}}function N1(){const i=new ht;return[[16730730,16777215],[2793727,16769088],[16769088,16738848]].forEach(([e,n],s)=>{const r=(s-1)*.8,a=[];for(let o=0;o<10;o++){const l=o/10*Math.PI*2;a.push([r+Math.cos(l)*.32,1.25+Math.sin(l)*1.25,s*.12])}i.poly(a,e),i.quad([r-.06,.1,s*.12+.01],[r+.06,.1,s*.12+.01],[r+.06,2.4,s*.12+.01],[r-.06,2.4,s*.12+.01],n)}),{parts:_e(i),radius:0,max:40}}function F1(){const i=new ht;return i.poly([[-1.4,0,-4],[1.4,0,-4],[1.1,.9,-4.4],[-1.1,.9,-4.4]],16777215),i.box(0,.6,0,2.8,1.2,8,[16777215,15263976,15790320,2775720]),i.box(0,.35,0,2.84,.25,8.04,2775720),i.box(0,6,.6,.15,10,.15,13684944),i.tri([0,10.5,.6],[0,1.6,.6],[0,1.6,4],16777215),i.tri([0,9,.5],[0,1.6,.5],[0,1.6,-3],16738954),{parts:_e(i),radius:0,max:40}}function O1(i){const t=new ht,e=new ht,n=Tt+60,s=12.5;t.box(0,s,0,n*2,2.4,11,[9079448,11053236,7237244,7237244]),t.box(0,s-.3,5.55,n*2,1.2,.2,i),t.box(0,s+1.7,5.3,n*2,1,.3,13158608),t.box(0,s+1.7,-5.3,n*2,1,.3,13158608);for(const r of[-16,Tt+5,-47,Tt+36])t.box(r,s/2-20,0,2.6,s+40,4,[8026760,9079446]);for(let r=-Tt;r<=Tt;r+=5.5)e.box(r,s-1.25,0,1.6,.1,.8,16773312);for(let r=-n+4;r<n;r+=9)e.box(r,s+2.35,5.3,.5,.3,.4,16760928);return{parts:_e(t,e),radius:0,max:6}}function z1(i){const t=new ht,e=[16765040,16777215,16756800,8446207,16734858];for(let n=0;n<26;n++){const s=i.range(-45,45),r=i.range(-30,30),a=i.pick(e);if(i.chance(.4))for(let o=0;o<5;o++)t.box(s+o*3,.4,r,.7,.7,.7,a);else t.box(s,.4,r,.9,.9,.9,a)}return{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:200}}function Uo(i){const t=new ht,e=new ht;t.box(0,2.3,1,2.5,3.2,7.4,[16053492,16777215,15263976,14737632]),t.box(0,2.2,1,2.54,.5,7.44,i),t.box(0,1.5,-3.6,2.4,2.2,1.8,[16777215]),t.box(0,2.1,-4.45,2,.8,.1,2241348);for(const[n,s]of[[-1,-3.6],[1,-3.6],[-1,2.6],[1,2.6],[-1,3.8],[1,3.8]])t.box(n,.45,s,.4,.9,.9,1381653);return e.box(-1,.95,4.72,.35,.3,.04,16722464),e.box(1,.95,4.72,.35,.3,.04,16722464),{parts:_e(t,e),radius:0,max:10,len:6.5}}function Xh(i){const t=new ht,e=new ht;t.box(0,1.9,0,2.5,3,10,[16777215,16053492,15263976,15263976]),t.box(0,2.4,0,2.54,1,9,2241348),t.box(0,1.2,0,2.54,.4,10.04,i),t.box(0,2.6,5.02,1.8,.8,.05,2241348);for(const[n,s]of[[-1.05,-3.4],[1.05,-3.4],[-1.05,3.4],[1.05,3.4]])t.box(n,.45,s,.4,.9,1,1381653);return e.box(-1,1,5.02,.3,.35,.04,16722464),e.box(1,1,5.02,.3,.35,.04,16722464),e.box(0,3.25,5.02,1.6,.25,.04,16756800),{parts:_e(t,e),radius:0,max:8,len:7.5}}function kl(i){const t=new ht,e=new ht;return t.box(0,.55,0,.16,1.1,.16,[16053492,16777215]),t.box(0,.86,0,.17,.12,.17,1710618),e.box(0,.72,.085,.1,.16,.01,i?16724e3:16777215),{parts:_e(t,e),radius:0,max:400}}function B1(i){const t=new ht,e=new ht;return t.box(0,.6,0,.12,1.2,.12,14474460),t.box(0,1.35,-.04,.9,.6,.06,16777215),e.quad([-.42,1.08,0],[.42,1.08,0],[.42,1.62,0],[-.42,1.62,0],16777215,i),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"}],radius:0,max:20}}function Gl(i){const t=new ht,e=new ht,n=14196858,s=i===1?14196858:3820138;return t.box(-.12,.42,0,.18,.84,.2,s),t.box(.12,.42,0,.18,.84,.2,s),i===1&&t.box(0,.8,0,.44,.18,.24,2763370),e.box(0,1.15,0,.46,.62,.26,[16777215,16777215]),t.box(-.3,1.1,0,.12,.6,.14,n),t.box(.3,1.1,0,.12,.6,.14,n),t.box(0,1.6,0,.24,.28,.24,n),t.box(0,1.76,-.02,.26,.08,.26,i===1?15253600:2759184),{parts:[{geo:t.build(),mat:"lit",tint:!1},{geo:e.build(),mat:"lit",tint:!0}],radius:0,max:160}}function k1(i){const t=new ht;for(let e=0;e<5;e++){const n=i.range(-10,10),s=i.range(0,6),r=i.range(-10,10),a=i.range(.8,1.3);t.tri([n,s,r],[n-.9*a,s+.35*a,r-.2],[n-.1,s+.05,r+.25*a],16777215),t.tri([n,s,r],[n+.9*a,s+.35*a,r-.2],[n+.1,s+.05,r+.25*a],15263984)}return{parts:_e(t),radius:0,max:30}}function G1(){const i=new ht,t=new ht;i.box(0,1.3,0,2.4,2.6,2.2,[16777215,16053492]);for(let e=0;e<3;e++)t.box(-.8+e*.8,1.3,0,.4,2.62,2.22,[16777215,16777215]);return i.prism(0,0,2.6,3.6,1.9,0,4,[16777215,15263976],null,Math.PI/4),i.box(0,1,1.12,.9,1.8,.04,6965802),{parts:[{geo:i.build(),mat:"lit",tint:!1},{geo:t.build(),mat:"lit",tint:!0}],radius:1.4,max:40}}function H1(i){const t=new ht;return t.box(0,.05,0,.16,.1,.4,i),{parts:[{geo:t.build(),mat:"glow"}],radius:0,max:500}}function V1(i){const t=new ht,e=new ht,n=new ht;return t.box(0,1.1,0,1,2.2,.8,[16747040,16752704]),t.box(0,2.3,0,1.1,.2,.9,3815994),e.quad([-.4,1.4,.41],[.4,1.4,.41],[.4,1.9,.41],[-.4,1.9,.41],16777215,i),n.box(0,2.5,0,.3,.2,.3,16764992),{parts:[{geo:t.build(),mat:"lit"},{geo:e.build(),mat:"sign"},{geo:n.build(),mat:"glow"}],radius:0,max:20}}function W1(i){const t=new ht,e=new ht;for(const n of[-4.5,4.5])t.with(new Ft().makeTranslation(n,i-1.1,0).multiply(new Ft().makeRotationX(Math.PI/2)),()=>{t.prism(0,0,-1.6,1.6,.7,.7,10,[9079442,8026754],2763310),t.prism(0,0,-1.61,-1.6,.7,.7,10,2763310,2763310)}),t.box(n,i-.3,0,.2,.6,.2,5921378);for(const n of[-9,9])e.box(n,i-.2,0,.4,.2,1.4,16773312);return{parts:_e(t,e),radius:0,max:12}}const Hl=i=>new Lt().setHex(i);function Zn(i,t,e,n){const s=[],r=(h,u,f,d,x,M,m,p)=>s.push({xa:h,ya:u,absA:f,xb:d,yb:x,absB:M,c0:Hl(m[0]),c1:Hl(m[1]),tex:p});let o=-Tt;const l=i.edge!==void 0?.45:0;l&&(r(o,0,!1,o+l,0,!1,[i.edge,i.edge],Ot.PAINT),o+=l);for(let h=1;h<gi;h++){const u=-Tt+h*Cs;r(o,0,!1,u-.35/2,0,!1,i.road,Ot.ASPHALT),r(u-.35/2,0,!1,u+.35/2,0,!1,[i.line,i.road[1]],Ot.PAINT),o=u+.35/2}r(o,0,!1,Tt-l,0,!1,i.road,Ot.ASPHALT),l&&r(Tt-l,0,!1,Tt,0,!1,[i.edge,i.edge],Ot.PAINT);const c=[];for(const h of[-1,1]){let u=Tt,f=0,d=!1;if(i.rumble){const x=i.rumbleW??1.6;r(h*u,0,!1,h*(u+x),0,!1,i.rumble,Ot.KERB),u+=x}for(const x of h<0?t:e){const M=u+x.w;let m=f,p=d;x.abs!==void 0?(m=x.abs,p=!0):x.dy!==void 0&&(m=f+x.dy),r(h*u,f,d,h*M,m,p,x.c),u=M,f=m,d=p}c.push({x:h*u,y:f,abs:d})}return n&&r(c[0].x,c[0].y,c[0].abs,c[1].x,c[1].y,c[1].abs,n,Ot.CEILING),{spans:s}}function X1(i){if(Math.abs(i.xb-i.xa)<.01)return Math.abs(i.yb-i.ya)>3?Ot.TUNNEL:Ot.CONCRETE;const e={h:0,s:0,l:0};i.c0.getHSL(e,De);const n=e.h*360,{s,l:r}=e;return i.absB&&i.yb<.5&&i.yb>.05&&r>.9?Ot.FOAM:n>165&&n<260&&s>.5?r<.25?Ot.BAY:r>.52?Ot.SHALLOW:Ot.SEA:r<.22?Ot.CITY:n>60&&n<170&&s>.25?Ot.GRASS:n>25&&n<60&&s>.55?Ot.SAND:n>25&&n<60&&s>.3&&r<.8?Ot.DIRT:s<.2&&r>.6?Ot.CONCRETE:Ot.PAVING}const q1={[Ot.ASPHALT]:[5.5,9],[Ot.PAINT]:[2,6],[Ot.KERB]:[1.6,6],[Ot.GRASS]:[7,7],[Ot.SAND]:[9,9],[Ot.SEA]:[16,16],[Ot.BAY]:[20,20],[Ot.SHALLOW]:[10,10],[Ot.FOAM]:[3,8],[Ot.CONCRETE]:[4,6],[Ot.TUNNEL]:[3,3],[Ot.CEILING]:[6,12],[Ot.PAVING]:[3,3],[Ot.CITY]:[40,40],[Ot.DIRT]:[5,5]},Vl=220,Y1=32;class K1{constructor(t){this.profiles=t,this.time={value:0};const e=Vl*Y1;if(this.pos=new Float32Array(e*4*3),this.colr=new Float32Array(e*4*3),this.uv=new Float32Array(e*4*2),this.tile=new Float32Array(e*4*3),ee.modern)for(const r of t)for(const a of r.spans)Math.abs(a.c0.r-a.c1.r)+Math.abs(a.c0.g-a.c1.g)+Math.abs(a.c0.b-a.c1.b)<.25&&(a.c1=a.c0.clone().lerp(a.c1,.45)),a.tex===void 0&&(a.tex=X1(a)),a.tex===Ot.CITY&&(a.c0=new Lt(13158624),a.c1=new Lt(12105940));const n=new Uint32Array(e*6);for(let r=0;r<e;r++)n.set([r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3],r*6);this.geo=new He,this.geo.setAttribute("position",new Be(this.pos,3).setUsage(Es)),this.geo.setAttribute("color",new Be(this.colr,3).setUsage(Es)),this.geo.setAttribute("uv",new Be(this.uv,2).setUsage(Es)),this.geo.setAttribute("tile",new Be(this.tile,3).setUsage(Es)),this.geo.setIndex(new Be(n,1));const s=new Xe({vertexColors:!0,side:ue});ee.modern&&(s.color.setScalar(1.1),zr(s,Jg(),this.time)),this.mesh=new fe(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0}update(t){const{bx:e,by:n,bz:s,bh:r,yRef:a}=t,o=this.pos,l=this.colr,c=this.uv,h=this.tile;let u=0;const f=Math.min(t.count,Vl);for(let d=0;d<f;d++){const x=t.start+d,M=t.track.seg(x),m=this.profiles[M.profile],p=Math.floor(x/mg)%2===0,g=Math.cos(r[d]),y=Math.sin(r[d]),v=Math.cos(r[d+1]),T=Math.sin(r[d+1]);for(const E of m.spans){const A=p?E.c0:E.c1,C=u*12;o[C]=e[d]+g*E.xa,o[C+1]=E.absA?E.ya-a:n[d]+E.ya,o[C+2]=s[d]+y*E.xa,o[C+3]=e[d]+g*E.xb,o[C+4]=E.absB?E.yb-a:n[d]+E.yb,o[C+5]=s[d]+y*E.xb,o[C+6]=e[d+1]+v*E.xb,o[C+7]=E.absB?E.yb-a:n[d+1]+E.yb,o[C+8]=s[d+1]+T*E.xb,o[C+9]=e[d+1]+v*E.xa,o[C+10]=E.absA?E.ya-a:n[d+1]+E.ya,o[C+11]=s[d+1]+T*E.xa;for(let q=0;q<4;q++)l[C+q*3]=A.r,l[C+q*3+1]=A.g,l[C+q*3+2]=A.b;const b=q1[E.tex??0]??[6,8],S=(E.xa+E.ya)/b[0],D=(E.xb+E.yb)/b[0],X=x*ae/b[1],W=(x+1)*ae/b[1],Y=u*8,[it,$]=qr(E.tex??0),ot=Zg[E.tex??0]??0;for(let q=0;q<4;q++)h[u*12+q*3]=it,h[u*12+q*3+1]=$,h[u*12+q*3+2]=ot;c[Y]=S,c[Y+1]=X,c[Y+2]=D,c[Y+3]=X,c[Y+4]=D,c[Y+5]=W,c[Y+6]=S,c[Y+7]=W,u++}}this.geo.setDrawRange(0,u*6),this.geo.attributes.position.addUpdateRange(0,u*12),this.geo.attributes.color.addUpdateRange(0,u*12),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,ee.modern&&(this.geo.attributes.uv.addUpdateRange(0,u*8),this.geo.attributes.uv.needsUpdate=!0,this.geo.attributes.tile.addUpdateRange(0,u*12),this.geo.attributes.tile.needsUpdate=!0,this.time.value=performance.now()/1e3)}}class qh{constructor(){this.defs=[]}add(t){return this.defs.push(t),this.defs.length-1}}const _r=[16756936,11069695,16773280,12124120,16765096,14731519,16777215],Wl=[16047256,15519880],Na=[1616092,1351892],$1=[6605900,5815364],Xl=[5026876,4367414],bs=[14734532,13945016],Fa=12576482,Ss={road:[10921646,9868958],line:16777215,edge:16777215,rumble:[16722474,16777215]},Z1=[16777215,14743807],j1=[5430488,4641490],J1={id:"miami",name:"MIAMI BEACH",lines:["MIAMI","BEACH"],stageNames:["OCEAN DRIVE","PASTEL BOULEVARD","BAYSIDE CAUSEWAY","COCONUT HILLS","SUNSET POINT"],fog:{color:Fa,near:160,far:1150},ambient:{color:16777215,intensity:1.9},sun:{color:16773852,intensity:2.4,dir:[-.5,1,.8]},startTime:60,extendTime:40,shadow:6052966,trafficColors:[16734810,5943551,16769114,16777215,6348960,16751312,16752704],trafficCount:16,walls:!1,offroadLimit:Tt+26,build(i){const t=new Ps(1986),e=[Zn(Ss,[{w:4,c:bs},{w:600,c:$1}],[{w:6,c:Wl},{w:28,abs:.4,c:Wl},{w:3,abs:.12,c:Z1},{w:16,abs:0,c:j1},{w:600,abs:0,c:Na}]),Zn(Ss,[{w:6,c:bs},{w:600,c:[7393880,6735440]}],[{w:6,c:bs},{w:600,c:[7393880,6735440]}]),Zn(Ss,[{w:1,c:bs},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Na}],[{w:1,c:bs},{w:0,dy:.9,c:[16777215,15790320]},{w:.6,c:[16777215,16777215]},{w:0,abs:0,c:[13684944,12632256]},{w:600,abs:0,c:Na}]),Zn(Ss,[{w:3,c:[14207120,13417604]},{w:600,c:Xl}],[{w:3,c:[14207120,13417604]},{w:600,c:Xl}]),Zn(Ss,[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[{w:1.2,dy:.3,c:[11579576,11053232]},{w:0,dy:5,c:[15261896,14209208]},{w:0,dy:.8,c:[16765024,7368832]},{w:1.5,dy:2.8,c:[13156520,12367004]}],[5789800,5263454])],n=(nt,Rt)=>Rt?4:nt==="city"?1:nt==="causeway"?2:nt==="hills"?3:0,s=new Ch(n,3);s.zone="beach",s.straight(30),s.stageFrom({zone:"beach",length:400,curvy:.75,hilly:.1,yMin:2.5,yMax:6},t),s.stageFrom({zone:"city",length:400,curvy:.8,hilly:.25,yMin:3,yMax:14},t),s.stageFrom({zone:"causeway",length:380,curvy:.6,hilly:.1,yMin:3,yMax:5},t),s.stageFrom({zone:"hills",length:420,curvy:1,hilly:1,yMin:4,yMax:70,tunnels:.15,tunnelZone:"hills"},t),s.stageFrom({zone:"beach2",length:420,curvy:.7,hilly:.15,yMin:2.5,yMax:6},t);const r=s.finish(260),a=new qh,o=a.add(v1()),l=a.add(y1()),c=a.add(b1()),h=a.add(S1()),u=[a.add(Ua([16724032,16777215])),a.add(Ua([2781439,16769088])),a.add(Ua([2146464,16744624]))],f=a.add(E1()),d=[0,1,2].map(nt=>a.add(w1(nt,t))),x=a.add(Wh(8,16774336)),M=a.add(C1()),m=a.add(M1()),p=a.add(I1()),g=[{bg:16734858,fg:16777215,text:"SUNSET",sub:"COLA",border:16777215},{bg:2788095,fg:16777215,text:"SURF",sub:"SHOP",border:16769088},{bg:16769088,fg:14690858,text:"TURBO",sub:"MOTOR OIL",border:14690858},{bg:16777215,fg:1735384,text:"BEACH",sub:"CLUB 86",border:16734858},{bg:2142352,fg:16777215,text:"PALM",sub:"RESORT",border:16777215},{bg:16747040,fg:16777215,text:"MANGO",sub:"JUICE",border:16777215}].map(nt=>a.add(A1(i.add(nt,2,2),9,4.5))),y=[{bg:16777215,fg:16726634,text:"DINER"},{bg:1710650,fg:4251903,text:"DISCO"},{bg:16777215,fg:2783960,text:"MOTEL"},{bg:16734858,fg:16777215,text:"ICE CREAM"}].map(nt=>a.add(T1(i.add(nt,2,1)))),v=[{bg:1735226,fg:16777215,text:"MIAMI",sub:"BEACH 12",border:16777215},{bg:1735226,fg:16777215,text:"KEYS",sub:"NEXT EXIT",border:16777215},{bg:1727152,fg:16777215,text:"ROUTE",sub:"A1A",border:16777215}].map(nt=>a.add(R1(i.add(nt,1,1)))),T=a.add(vi(i.add({bg:16777215,fg:14690858,text:"START",stripes:1710618},4,1))),E=a.add(vi(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),15790320,1727200)),A=a.add(vi(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),15790320,1710618)),C=Vh,b=[C.golf,C.volvo240,C.ae86,C.cherokee,C.caprice,C.w124,C.f150].map(nt=>a.add(Ir(nt))).concat([a.add(Uo(2788095)),a.add(Xh(16734858))]),S=a.add(kr(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1))),D=a.add(kr(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1))),X=a.add(L1()),W=a.add(D1()),Y=a.add(U1()),it=a.add(N1()),$=a.add(F1()),ot=[{bg:16734858,fg:16777215,text:"WELCOME TO MIAMI",border:16777215},{bg:1731296,fg:16769088,text:"SUNSET POINT",border:16777215}].map((nt,Rt)=>a.add(vi(i.add(nt,4,1),16777215,Rt?16747040:2146480,16777215))),q=a.add(kl(!0)),bt=a.add(kl(!1)),wt=Array.from({length:16},(nt,Rt)=>a.add(B1(i.add({bg:1735226,fg:16777215,text:String(Rt+1),border:16777215},1,1)))),ut=[a.add(Gl(0)),a.add(Gl(1))],Pt=a.add(k1(t)),Gt=a.add(G1()),Q=[16730730,2789631,16769088,16777215,4247712,16751152,12607743],ft=[16726618,16769088,2789631,4251808,16777215,16747040],yt=r.segs;for(let nt=10;nt<yt.length;nt++){const Rt=yt[nt],st=Rt.props;if(Rt.tunnel){yt[nt-1].tunnel||st.push({t:p,x:0});continue}const $t=Rt.zone;if(ee.modern){const U=$t==="beach"||$t==="beach2";nt%3===0&&($t==="hills"||U)&&st.push({t:q,x:Tt+2.1},{t:bt,x:-13.1}),nt%167===100&&st.push({t:wt[Math.min(wt.length-1,Math.floor(nt*6/1e3))],x:Tt+3.4,r:-.3}),U&&(nt%5===0&&t.chance(.55)&&st.push({t:ut[1],x:Tt+t.range(9,26),r:t.range(0,6),tint:t.pick(Q)}),nt%4===1&&t.chance(.35)&&st.push({t:ut[0],x:-(Tt+t.range(1.5,3.5)),r:t.range(0,6),tint:t.pick(Q)}),nt%40===10&&st.push({t:Pt,x:Tt+t.range(15,60),y:t.range(16,28),r:t.range(0,6)}),$t==="beach2"&&nt%26===13&&t.chance(.7)&&st.push({t:Gt,x:Tt+t.range(18,22),r:-.3+t.range(-.2,.2),tint:t.pick(Q)})),$t==="city"&&nt%5===2&&t.chance(.45)&&st.push({t:ut[0],x:t.sign()*(Tt+t.range(2.5,5.5)),r:t.range(0,6),tint:t.pick(Q)})}Math.abs(Rt.curve)>.0016&&nt%5===0&&$t!=="causeway"&&st.push(Rt.curve>0?{t:S,x:-16.5,r:.15}:{t:D,x:Tt+5.5,r:-.15}),($t==="beach"||$t==="beach2"||$t==="causeway")&&nt%23===0&&t.chance(.6)&&st.push({t:$,x:($t==="causeway"?t.sign():1)*t.range(70,280),y:0,abs:!0,s:t.range(.9,1.4),r:t.range(-.6,.6)}),$t==="beach"||$t==="beach2"?(nt%19===4&&t.chance(.5)&&st.push({t:it,x:Tt+t.range(10,18),r:t.range(-.5,.5)}),nt%7===0&&t.chance(.85)&&st.push({t:o,x:Tt+t.range(4.5,7),s:t.range(.9,1.3),r:t.range(0,6)}),nt%7===3&&t.chance(.5)&&st.push({t:o,x:-(Tt+t.range(5,9)),s:t.range(.9,1.3),r:t.range(0,6)}),nt%9===0&&t.chance($t==="beach2"?.75:.45)&&(st.push({t:t.pick(u),x:Tt+t.range(14,26),r:t.range(0,6)}),t.chance(.5)&&st.push({t:t.pick(u),x:Tt+t.range(14,26),r:t.range(0,6)})),$t==="beach2"&&nt%70===35&&st.push({t:f,x:Tt+22,r:-.6}),nt%55===20&&st.push({t:t.pick(d),x:-(Tt+t.range(40,70)),tint:t.pick(_r),r:t.range(-.3,.3)}),nt%80===50&&st.push({t:t.pick(g),x:-23,r:.35}),nt%37===0&&t.chance(.5)&&st.push({t:h,x:Tt+t.range(24,32),s:t.range(.6,1.2),r:t.range(0,6)}),nt%120===60&&st.push({t:t.pick(v),x:Tt+3,r:-.2})):$t==="city"?(nt%30>3&&st.push({t:X,x:Tt+9.5},{t:X,x:-20.5}),nt%16===12&&st.push({t:W,x:Tt+4.5,tint:t.pick(ft)},{t:W,x:-15.5,r:Math.PI,tint:t.pick(ft)}),nt%14===0&&t.chance(.75)&&st.push({t:t.pick(y),x:-(Tt+t.range(15,18)),tint:t.pick(_r),r:.5}),nt%14===7&&t.chance(.75)&&st.push({t:t.pick(y),x:Tt+t.range(15,18),tint:t.pick(_r),r:-.5}),nt%8===0&&st.push({t:x,x:Tt+3,r:0},{t:x,x:-14,r:Math.PI}),nt%8===4&&(st.push({t:o,x:Tt+6.5,s:t.range(.9,1.2),r:t.range(0,6)}),st.push({t:o,x:-17.5,s:t.range(.9,1.2),r:t.range(0,6)})),nt%40===20&&st.push({t:t.pick(g),x:(nt%80===20?-1:1)*(Tt+11),r:nt%80===20?.35:-.35}),nt%30===15&&st.push({t:t.pick(d),x:t.sign()*(Tt+t.range(50,80)),tint:t.pick(_r),r:t.range(-.3,.3)})):$t==="causeway"?(nt%10===0&&st.push({t:x,x:Tt+2.4,r:0}),nt%10===5&&st.push({t:x,x:-13.4,r:Math.PI}),nt%45===0&&t.chance(.8)&&st.push({t:m,x:t.sign()*t.range(70,160),y:0,abs:!0,s:t.range(.8,1.4),r:t.range(0,6)}),nt%150===75&&st.push({t:t.pick(v),x:Tt+4,r:-.2})):$t==="hills"&&(Math.abs(Rt.curve)>.0012&&(st.push({t:M,x:Tt+2.4}),st.push({t:M,x:-13.4})),nt%4===2&&t.chance(.5)&&st.push({t:Y,x:t.sign()*(Tt+t.range(8,50)),s:t.range(.8,1.5),r:t.range(0,6)}),nt%5===0&&t.chance(.6)&&st.push({t:l,x:t.sign()*(Tt+t.range(8,40)),s:t.range(.8,1.4),r:t.range(0,6)}),nt%11===0&&t.chance(.5)&&st.push({t:c,x:t.sign()*(Tt+t.range(5,12)),s:t.range(.7,1.2),r:t.range(0,6)}),nt%23===0&&t.chance(.6)&&st.push({t:h,x:t.sign()*(Tt+t.range(9,30)),s:t.range(.8,1.8),r:t.range(0,6)}),nt%90===45&&st.push({t:t.pick(g),x:Tt+12,r:-.35}))}for(let nt=1;nt<r.stageStarts.length;nt++)yt[r.stageStarts[nt]+4].props.push({t:E,x:0});yt[8].props.push({t:T,x:0}),yt[r.stageStarts[1]+160].props.push({t:ot[0],x:0}),yt[r.stageStarts[4]+200].props.push({t:ot[1],x:0}),yt[r.goalSeg].props.push({t:A,x:0});const et=new Ih;et.addLayer(Lh([[0,16773304],[1.4,16765072],[3,16754820],[4.6,16750240],[6.5,16165068],[8.5,13813486],[11,10672886],[15,7260918],[20,4633330],[28,2791146],[40,1736416],[90,941768]],Fa),0);const Ct=nt=>Math.atan2(Math.sin(nt),Math.cos(nt)),zt=Uh(2500,.25,2.6,300,[[1.45,16762020],[1.22,16754820],[1,16747066],[.84,16755268],[.68,16763992],[.5,16771200],[.3,16775368]],24);return et.addLayer(zt,1),et.sun={obj:zt,local:Vg(2500,.25,2.6)},et.addLayer(Po(t,2320,7,[16769216,16758944,15239336],-.5,1.2,[1.2,3.2]),.9),et.addLayer(Po(t,2350,14,[16777215,16771312,16033992]),.8),et.addLayer(Ia(t,2200,8030928,230,nt=>{const Rt=Ct(nt);return Rt<-.25?1:Rt>1.6?.8:0},15265535,46),1),et.addLayer(Ia(t,2050,5939360,110,nt=>{const Rt=Ct(nt);return Rt<-.15||Rt>1.9?1:0},void 0,50),1),et.addLayer(Ia(t,1980,3050072,55,nt=>{const Rt=Ct(nt);return Rt<-.35||Rt>2.1?1:0},void 0,260,[1.2,3.5]),1),et.addLayer(Nh(t,2e3,[11057368,10004684,12109024,14207192],[8034504,15266047,9087192],150,nt=>{const Rt=Ct(nt);return Rt>.7&&Rt<1.3?1:0},.9,.35),1),ee.modern&&(et.addLayer(qg(t,1880,.35,1.5,5),1),et.addLayer(Yg(1860,1.55),1),et.addLayer(Kg(t,1880,.25,140),1)),et.addLayer(Dh(1900,Fa),0),{track:r,profiles:e,props:a.defs,backdrop:et,trafficTypes:b,gateType:A}}},Oa=2890832,No=[16771232,16774872,16765040,10547455,16777215],za={road:[4868698,3947594],line:15790320,edge:15790320,rumble:[5921384,5263452],rumbleW:1.4},vr=i=>[{w:0,dy:1.3,c:[12369096,11053238]},{w:.5,c:[14474468,13684952]},{w:0,abs:0,c:[3816018,3816018]},{w:600,abs:0,c:i}];function Q1(i,t,e,n){const s=new ht,r=new ht,a=i.pick([1843780,2235456,1583680,2500160]);if(ee.modern){const h=new ht,u=qr(n<30?ye.APARTMENT:i.pick([ye.OFFICE_WARM,ye.OFFICE_COOL,ye.OFFICE_DARK,ye.OFFICE_WARM])),f=n<30?[12,12]:[16,16];if(h.facadeBox(0,n/2,0,t,n,e,u,f[0],f[1],[16777215,12106968],2764360,i.range(0,1)),n>45&&i.chance(.6)){const d=t*.65,x=e*.65,M=i.range(6,14);h.facadeBox(0,n+M/2,0,d,M,x,u,f[0],f[1],[14474480,10527940],2764360,i.range(0,1)),i.chance(.5)&&r.box(0,n+M+.3,0,d+.2,.5,x+.2,i.pick([4255999,16726666,16777215])),n+=M}for(let d=0;d<3;d++)s.box(i.range(-t/4,t/4),n+.8,i.range(-e/4,e/4),2.6,1.6,2,[3817048,4869736]);return n>40&&(s.box(t/5,n+6,0,.35,12,.35,6975112),r.box(t/5,n+12.3,0,1,1,1,16719904)),{parts:[{geo:h.build(),mat:"facadeLit"},{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}s.box(0,n/2,0,t,n,e,[a,2764370]),i.chance(.5)&&s.box(0,n+2,0,t*.6,4,e*.6,a);const o=i.int(0,2),l=i.range(.12,.35),c=[[0,1,t,e/2],[0,-1,t,e/2],[1,1,e,t/2],[1,-1,e,t/2]];for(const[h,u,f,d]of c)for(let x=4;x<n-3;x+=3.6){if(o===1&&i.chance(.15)){const M=i.pick(No),m=d+.06;h===0?r.quad([-f/2+1,x,u*m],[f/2-1,x,u*m],[f/2-1,x+1.8,u*m],[-f/2+1,x+1.8,u*m],M):r.quad([u*m,x,-f/2+1],[u*m,x,f/2-1],[u*m,x+1.8,f/2-1],[u*m,x+1.8,-f/2+1],M);continue}for(let M=-f/2+1.5;M<f/2-1.5;M+=3){if(!i.chance(l))continue;const m=i.pick(No),p=d+.06;h===0?r.quad([M,x,u*p],[M+1.5,x,u*p],[M+1.5,x+1.8,u*p],[M,x+1.8,u*p],m):r.quad([u*p,x,M],[u*p,x,M+1.5],[u*p,x+1.8,M+1.5],[u*p,x+1.8,M],m)}}return n>70&&r.box(0,n+4.6,0,1.2,1.2,1.2,16719904),{parts:[{geo:s.build(),mat:"lit"},{geo:r.build(),mat:"glow"}],radius:0,max:60}}function tx(i,t,e){const n=new ht,s=new ht,r=new ht;return n.box(0,e/2,-.4,1.2,e,1.2,2105392),s.quad([-1.6,e,.25],[1.6,e,.25],[1.6,e+12,.25],[-1.6,e+12,.25],16777215,i),r.box(0,e+6,0,3.8,12.6,.4,t),{parts:[{geo:n.build(),mat:"lit"},{geo:r.build(),mat:"glow"},{geo:s.build(),mat:"sign"}],radius:0,max:50}}function ex(i,t){const e=new ht,n=new ht,s=new ht;return e.box(-6,2,0,.6,4,.6,3158080),e.box(6,2,0,.6,4,.6,3158080),s.box(0,8,-.1,19,8,.3,t),n.quad([-9,4.4,.1],[9,4.4,.1],[9,11.6,.1],[-9,11.6,.1],16777215,i),{parts:[{geo:e.build(),mat:"lit"},{geo:s.build(),mat:"glow"},{geo:n.build(),mat:"sign"}],radius:0,max:40}}function nx(i,t){const e=new ht,n=new ht,s=Tt+1.2;return e.box(-s,4.5,0,.6,9,.6,9079448),e.box(s,4.5,0,.6,9,.6,9079448),e.box(0,8.6,-.3,s*2,.5,.5,9079448),e.box(-5.5,10,-.15,9.4,4.2,.2,940586),e.box(5.5,10,-.15,9.4,4.2,.2,940586),n.quad([-10,8,0],[-1,8,0],[-1,12,0],[-10,12,0],16777215,i),n.quad([1,8,0],[10,8,0],[10,12,0],[1,12,0],16777215,t),{parts:[{geo:e.build(),mat:"lit"},{geo:n.build(),mat:"sign"}],radius:0,max:6}}function ix(){const i=new ht,t=new ht,e=56,n=-70;for(const s of[-Tt-3,Tt+3])i.box(s,(e+n)/2,0,2.4,e-n,2.4,[14212328,16777215]),t.box(s,e+.8,0,1.2,1.2,1.2,16719904);for(const s of[14,36,e-2])i.box(0,s,0,(Tt+3)*2,2.2,2,14212328);for(const s of[-Tt-3,Tt+3])for(const r of[-1,1])for(let a=1;a<=16;a++){const o=a/16,l=r*o*64,c=e-(e-4)*(1-(1-o)*(1-o));t.box(s,c,l,.6,.6,.6,a%2?16777215:8446207)}return{parts:[{geo:i.build(),mat:"lit"},{geo:t.build(),mat:"glow"}],radius:0,max:8}}const sx={id:"tokyo",name:"TOKYO NIGHT HIGHWAY",lines:["TOKYO NIGHT","HIGHWAY"],stageNames:["SHUTOKO LOOP","NEON DISTRICT","UNDERGROUND","BAY BRIDGE","WANGAN LINE"],fog:{color:Oa,near:140,far:1150},ambient:{color:12895487,intensity:1.8},sun:{color:16761048,intensity:1.6,dir:[-.4,1,.9]},startTime:60,extendTime:40,shadow:2236972,trafficColors:[16777215,14692400,4235519,3199136,16752688,13656319,10132136],trafficCount:18,walls:!0,offroadLimit:Tt+1,build(i){var bt,wt;const t=new Ps(1985),e=[Zn(za,vr([1711160,1447983]),vr([1711160,1447983])),Zn(za,vr([924744,792638]),vr([924744,792638])),Zn(za,[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[{w:.8,dy:.3,c:[7368832,6842488]},{w:0,dy:4.6,c:[9077880,8288364]},{w:0,dy:.7,c:[16752688,6183504]},{w:1.6,dy:2.6,c:[6973020,6446676]}],[3420716,3025960])],n=(ut,Pt)=>Pt?2:ut==="bay"?1:0,s=new Ch(n,26);s.zone="city",s.straight(30),s.stageFrom({zone:"city",length:400,curvy:.85,hilly:.4,yMin:22,yMax:40},t),s.stageFrom({zone:"neon",length:400,curvy:.8,hilly:.3,yMin:22,yMax:34,tunnels:.12},t),s.stageFrom({zone:"under",length:420,curvy:.7,hilly:.4,yMin:18,yMax:34,tunnels:.4},t),s.stageFrom({zone:"bay",length:420,curvy:.45,hilly:1,yMin:26,yMax:64},t),s.stageFrom({zone:"wangan",length:420,curvy:.45,hilly:.2,yMin:22,yMax:30},t);const r=s.finish(260),a=new qh,o=[],c=(ee.modern?[[5,12,26],[5,32,64],[5,70,140]]:[[8,40,130]]).map(([ut,Pt,Gt])=>{const Q=[];for(let ft=0;ft<ut;ft++){const yt=t.range(18,34),et=t.range(18,30),Ct=t.range(Pt,Gt),zt={t:a.add(Q1(t,yt,et,Ct)),h:Ct,w:Math.max(yt,et)};Q.push(zt),o.push(zt)}return Q}),h=a.add(Wh(10,16760928,9079448,4,!0)),u=[16726666,4255999,16769088,16732208,8453984,12607743],d=["ホテル","カラオケ","ラーメン","喫茶店","電気街","寿司","ゲーム","居酒屋"].map((ut,Pt)=>{const Gt=u[Pt%u.length],Q={bg:1052700,fg:Gt,text:ut,vertical:!0,jp:!0,border:Gt};return a.add(tx(i.add(Q,1,4),Gt,t.range(26,36)))}),M=[{bg:1052700,fg:16726666,text:"TURBO",sub:"GAME CENTER",border:16726666},{bg:1052700,fg:4255999,text:"東京",jp:!0,border:4255999},{bg:14690858,fg:16777215,text:"NEO",sub:"ELECTRONICS",border:16777215},{bg:1052700,fg:16769088,text:"ネオン",jp:!0,border:16769088},{bg:1720512,fg:16777215,text:"SKY",sub:"HOTEL",border:4255999},{bg:1052700,fg:8453984,text:"カメラ",jp:!0,border:8453984}].map((ut,Pt)=>a.add(ex(i.add(ut,2,1),u[Pt%u.length]))),p=[[{bg:940586,fg:16777215,text:"新宿",sub:"SHINJUKU",jp:!0},{bg:940586,fg:16777215,text:"銀座",sub:"GINZA",jp:!0}],[{bg:940586,fg:16777215,text:"渋谷",sub:"SHIBUYA",jp:!0},{bg:940586,fg:16777215,text:"羽田",sub:"HANEDA",jp:!0}],[{bg:940586,fg:16777215,text:"湾岸線",sub:"WANGAN",jp:!0},{bg:940586,fg:16777215,text:"横浜",sub:"YOKOHAMA",jp:!0}]].map(([ut,Pt])=>a.add(nx(i.add(ut,2,1),i.add(Pt,2,1)))),g=a.add(ix()),y=a.add(P1(6974072,16752688,7.9)),v=a.add(vi(i.add({bg:1052700,fg:4255999,text:"START",border:4255999},4,1),10132136,16726666,4255999)),T=a.add(vi(i.add({bg:16769088,fg:1710618,text:"CHECKPOINT"},4,1),10132136,1727200,16769088)),E=a.add(vi(i.add({bg:16777215,fg:0,text:"GOAL",stripes:-1},4,1),10132136,1710618,16726666)),A=Vh,C=[A.cedric,A.every,A.civic,A.ae86,A.crown].map(ut=>a.add(Ir(ut,{night:!0}))).concat([a.add(Ir(A.crown,{taxi:!0,night:!0})),a.add(Ir(A.crown,{taxi:!0,night:!0})),a.add(Uo(14690858)),a.add(Uo(1739322)),a.add(Xh(2787930))]),b=a.add(H1(16756784)),S=a.add(V1(i.add({bg:16747040,fg:1710618,text:"非常電話",jp:!0},1,1))),D=a.add(W1(8.2)),X=a.add(kr(i.add({bg:16764960,fg:1052688,text:"",arrows:"R"},2,1),.3)),W=a.add(kr(i.add({bg:16764960,fg:1052688,text:"",arrows:"L"},2,1),.3)),Y=a.add(O1(2788e3)),it=[0,1,2].map(()=>a.add(z1(t))),$=r.segs,ot=(ut,Pt,Gt)=>{const Q=$[ut].props;for(const ft of[-1,1]){if(!t.chance(Pt))continue;const yt=t.range(0,240),et=ee.modern?t.pick(c[yt<70?0:yt<140?1:2]):t.pick(o),Ct=ee.modern?t.range(.9,1.15):t.range(.85,1.25),zt=ft*(Tt+Gt+et.w*Ct*.5+yt),nt=ee.modern?t.range(.92,1.1):yt<70?t.range(.25,.45):yt<140?t.range(.5,.9):t.range(.8,1.5);Q.push({t:et.t,x:zt,y:0,abs:!0,s:Ct,sy:nt,r:t.range(-.2,.2),tint:t.pick([16777215,14209279,13164799])}),yt<140&&t.chance(.4)&&Q.push({t:t.pick(M),x:zt-ft*et.w*Ct*.2,y:et.h*Ct*nt,abs:!0,r:ft*-.4})}};for(let ut=10;ut<$.length;ut++){const Pt=$[ut],Gt=Pt.props;if(Pt.tunnel){$[ut-1].tunnel||Gt.push({t:y,x:0}),ee.modern&&ut%22===0&&Gt.push({t:D,x:0});continue}const Q=Pt.zone;if(ee.modern&&(ut%2===0&&Gt.push({t:b,x:Tt+1.65,y:1.3},{t:b,x:-12.65,y:1.3}),ut%140===70&&Gt.push({t:S,x:Tt+.9,r:-Math.PI/2})),Math.abs(Pt.curve)>.0016&&ut%4===0&&Gt.push(Pt.curve>0?{t:X,x:-12.95,r:.1}:{t:W,x:Tt+1.95,r:-.1}),Q!=="bay"&&ut%3===0&&Gt.push({t:t.pick(it),x:t.sign()*(Tt+t.range(40,330)),y:0,abs:!0,r:t.range(0,6)}),Q!=="bay"&&ut%130===90&&!((bt=$[ut+2])!=null&&bt.tunnel)&&!((wt=$[ut-2])!=null&&wt.tunnel)&&Gt.push({t:Y,x:0,y:-0}),ut%7===0&&Gt.push({t:h,x:Tt+2.6,y:1.3,r:0}),ut%7===3&&Gt.push({t:h,x:-13.6,y:1.3,r:Math.PI}),Q==="bay"){ut%75===30&&Gt.push({t:g,x:0}),ut%9===0&&ot(ut,.08,260);continue}ot(ut,Q==="wangan"?.12:Q==="under"?.22:.3,18),(Q==="neon"||Q==="city")&&ut%4===0&&t.chance(Q==="neon"?.55:.2)&&Gt.push({t:t.pick(d),x:t.sign()*(Tt+t.range(10,22)),y:0,abs:!0,r:t.range(-.5,.5)}),ut%110===55&&Gt.push({t:t.pick(p),x:0})}for(let ut=1;ut<r.stageStarts.length;ut++)$[r.stageStarts[ut]+4].props.push({t:T,x:0});$[8].props.push({t:v,x:0}),$[r.goalSeg].props.push({t:E,x:0});const q=new Ih;return q.addLayer(Lh([[0,16754784],[1.2,15891058],[2.6,13785734],[4.2,10503308],[6.2,7221378],[9,4858994],[13,3284066],[19,2234450],[30,1314880],[90,394782]],Oa),0),q.addLayer(Po(t,2380,9,[5913216,3942498,12606088],-Math.PI,Math.PI,[5,14]),.7),q.addLayer(Wg(t,260),.3),q.addLayer(Uh(2500,-.45,16,70,[[1.6,5917322],[1.3,9075370],[1,16774352],[.8,16777192]],16),1),q.addLayer(Xg(2300,.55,190,520,3811946,14209264),1),q.addLayer(Nh(t,2100,[1710136,2103872,1316410],No,170,()=>1,.75,.22),1),ee.modern&&q.addLayer($g(t,2300,6),.4),q.addLayer(Dh(1950,Oa),0),{track:r,profiles:e,props:a.defs,backdrop:q,trafficTypes:C,gateType:E}}};class rx{constructor(t,e,n){this.input=t,this.stage=e,this.onEnable=n,this.btns=[],this.pointers=new Map,this.held=new Set,this.enabled=!1,this.root=document.createElement("div"),this.root.id="touch",document.body.appendChild(this.root);const s=(a,o,l)=>{const c=document.createElement("div");return c.className=`tbtn ${a}`,c.textContent=o,this.root.appendChild(c),l&&this.btns.push({el:c,code:l}),c};s("left","◀","ArrowLeft"),s("right","▶","ArrowRight"),s("gas","GAS","ArrowUp"),s("brake","BRAKE","ArrowDown"),s("drift","DRIFT","Space"),s("pause","II","Escape"),s("radio","MUSIC","KeyN"),this.turboBtn=s("turbo",`TURBO
3`,"KeyT"),this.autoBtn=s("auto",`AUTO
GAS`,""),this.rotate=document.createElement("div"),this.rotate.id="rotate",this.rotate.textContent=`PLEASE ROTATE
YOUR PHONE`,document.body.appendChild(this.rotate);const r={passive:!1};window.addEventListener("pointerdown",a=>this.down(a),r),window.addEventListener("pointermove",a=>this.move(a),r),window.addEventListener("pointerup",a=>this.up(a),r),window.addEventListener("pointercancel",a=>this.up(a),r),document.addEventListener("touchmove",a=>a.preventDefault(),r),document.addEventListener("gesturestart",a=>a.preventDefault(),r)}enable(){var e,n;if(this.enabled)return;this.enabled=!0,this.input.autoGas=!0,document.body.classList.add("touchmode"),this.onEnable();const t=document.documentElement;try{const s=((e=t.requestFullscreen)==null?void 0:e.call(t))??((n=t.webkitRequestFullscreen)==null?void 0:n.call(t));Promise.resolve(s).then(()=>{var r,a;return(a=(r=screen.orientation).lock)==null?void 0:a.call(r,"landscape")}).catch(()=>{})}catch{}}codeAt(t,e){if(!this.root.classList.contains("show"))return null;for(const n of this.btns){const s=n.el.getBoundingClientRect(),r=10;if(t>=s.left-r&&t<=s.right+r&&e>=s.top-r&&e<=s.bottom+r)return n.code}return null}sync(){const t=new Set;for(const e of this.pointers.values())e&&t.add(e);for(const e of this.held)t.has(e)||this.input.setVirtual(e,!1);for(const e of t)this.held.has(e)||this.input.setVirtual(e,!0);this.held=t;for(const e of this.btns)e.el.classList.toggle("on",t.has(e.code))}down(t){if((t.pointerType==="touch"||t.pointerType==="pen")&&this.enable(),!this.enabled)return;t.preventDefault();const e=this.autoBtn.getBoundingClientRect();if(this.root.classList.contains("show")&&t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom){this.input.autoGas=!this.input.autoGas,this.autoBtn.classList.toggle("on",this.input.autoGas);return}const n=this.codeAt(t.clientX,t.clientY);if(this.pointers.set(t.pointerId,n),n)this.input.fireFirst();else{const s=this.stage.getBoundingClientRect();this.input.tap((t.clientX-s.left)/s.width*dt,(t.clientY-s.top)/s.height*tn)}this.sync()}move(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;t.preventDefault();const e=this.codeAt(t.clientX,t.clientY);e!=="Escape"&&e!=="KeyN"&&e!=="KeyT"&&this.pointers.set(t.pointerId,e),this.sync()}up(t){this.pointers.has(t.pointerId)&&(this.pointers.delete(t.pointerId),this.sync())}setTurbo(t,e){const n=`TURBO
${t}`;this.turboBtn.textContent!==n&&(this.turboBtn.textContent=n),this.turboBtn.classList.toggle("empty",t===0&&!e)}update(t){const e=this.enabled&&window.innerHeight>window.innerWidth;this.rotate.classList.toggle("show",e);const n=this.enabled&&t&&!e;return this.root.classList.contains("show")!==n&&(this.root.classList.toggle("show",n),n||(this.pointers.clear(),this.sync())),this.autoBtn.classList.toggle("on",this.input.autoGas),e}}const ql=96,Mr={x:0,y:0,z:0,h:0};class ax{constructor(t){this.pool=[],this.m=new Ft,this.s=new V,this.p=new V;const e=new ht,n=(r,a,o,l,c)=>{const h=[];for(let u=0;u<8;u++){const f=u/8*Math.PI*2+Math.PI/8;h.push([a+Math.cos(f)*r,o+Math.sin(f)*r,l])}e.poly(h,c)};let s;if(ee.modern){const a=document.createElement("canvas");a.width=a.height=64;const o=a.getContext("2d"),l=o.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);l.addColorStop(0,"rgba(255,255,255,0.85)"),l.addColorStop(.55,"rgba(235,235,235,0.45)"),l.addColorStop(1,"rgba(220,220,220,0)"),o.fillStyle=l,o.fillRect(0,0,64,64);const c=new Us(a);c.colorSpace=De,e.quad([-.6,-.6,0],[.6,-.6,0],[.6,.6,0],[-.6,.6,0],16777215,[0,0,1,1]),s=new Xe({map:c,vertexColors:!0,transparent:!0,depthWrite:!1,side:ue})}else n(.5,0,0,0,12105912),n(.34,-.1,.1,.01,16777215),s=new Xe({vertexColors:!0,side:ue});this.mesh=new Eh(e.build(),s,ql),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.setColorAt(0,new Lt(1,1,1)),t.add(this.mesh)}spawn(t,e,n,s,r,a,o,l,c,h){this.pool.length>=ql&&this.pool.shift(),this.pool.push({d:t,x:e,y:n,vd:s,vx:r,vy:a,life:o,max:o,size:l,grow:c,color:new Lt(h)})}clear(){this.pool.length=0}update(t){for(const e of this.pool)e.life-=t,e.d+=e.vd*t,e.x+=e.vx*t,e.y+=e.vy*t,e.vy-=(e.grow<0?18:0)*t,e.vd*=1-t*2,e.vx*=1-t*2;this.pool=this.pool.filter(e=>e.life>0)}render(t,e){let n=0;for(const s of this.pool){if(!t.sample(s.d,s.x,Mr))continue;const r=1-s.life/s.max,a=Math.max(.02,s.size*(1+Math.max(0,s.grow)*r)*(r>.75?(1-r)*4:1));this.p.set(Mr.x,Mr.y+s.y,Mr.z),this.s.set(a,a,a),this.m.compose(this.p,e.quaternion,this.s),this.mesh.setMatrixAt(n,this.m),this.mesh.setColorAt(n,s.color),n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}const Me={x:0,y:0,z:0,h:0};class Yl{constructor(t,e){if(this.route=t,this.scene=new jm,this.traffic=[],this.rivals=[],this.rivalCars=[],this.rng=new Ps(7),this.carPaint=-1,this.net=null,this.netTime=0,this.data=t.build(e),this.track=this.data.track,this.view=new vg(this.track),this.scene.fog=new $o(t.fog.color,t.fog.near,t.fog.far),this.scene.background=new Lt(t.fog.color),ee.modern){this.scene.add(new Ml(t.ambient.color,t.ambient.intensity*.55));const[r,a]=t.id==="tokyo"?[9072864,2760768]:[10542335,14205072];this.scene.add(new ng(r,a,t.ambient.intensity*.75))}else this.scene.add(new Ml(t.ambient.color,t.ambient.intensity));const n=new rg(t.sun.color,t.sun.intensity);n.position.set(...t.sun.dir),this.scene.add(n),this.scene.add(this.data.backdrop.group);const s=g1(e.texture);this.road=new K1(this.data.profiles),this.scene.add(this.road.mesh),this.props=new x1(this.data.props,s,this.scene),this.mats=s,this.plate=e.add({bg:t.id==="tokyo"?15790312:16769088,fg:1056864,text:"TH-86",border:1056864},1,1),this.car=new Da(Oe[0],Oe[0].paints[0],s,this.plate,this.route.shadow,this.route.id==="tokyo"),this.scene.add(this.car.root),this.particles=new ax(this.scene)}setPlayerCar(t,e){this.car.spec===t&&this.carPaint===e&&!this.car.damaged||(this.scene.remove(this.car.root),this.car.dispose(),this.car=new Da(t,e,this.mats,this.plate,this.route.shadow,this.route.id==="tokyo"),this.carPaint=e,this.scene.add(this.car.root))}setRivals(t){for(const e of this.rivalCars)this.scene.remove(e.root),e.dispose();this.rivals=t,this.rivalCars=t.map(e=>{const n=new Da(e.spec,e.paint,this.mats,this.plate,this.route.shadow,this.route.id==="tokyo");return this.scene.add(n.root),n})}sunOnHud(t,e,n){const s=this.data.backdrop.sunNdc(t);return!s||Math.abs(s.x)>1.3||Math.abs(s.y)>1.3?null:{x:(s.x+1)/2*e,y:(1-s.y)/2*n}}laneX(t){return-gi*Cs/2+Cs*(t+.5)}spawnCar(t){const e=this.rng.int(0,gi-1);return{d:t,x:this.laneX(e),laneTarget:e,v:this.rng.range(28,50),t:this.rng.pick(this.data.trafficTypes),tint:this.rng.pick(this.route.trafficColors),passed:!1}}resetTraffic(t,e=this.route.trafficCount,n=160){this.net=null,this.traffic=[];for(let s=0;s<e;s++)this.traffic.push(this.spawnCar(t+n+s*75+this.rng.range(0,40)))}setNetTraffic(t,e){const n=new Ps(t),s=e+160,r=this.track.goalDist+100-s,a=Math.max(6,Math.round(this.route.trafficCount*r/1100*.7)),o={start:s,len:r,cars:[]};this.traffic=[];for(let l=0;l<a;l++){const c=[n.int(0,gi-1)];for(let h=1;h<32;h++)c.push(Math.max(0,Math.min(gi-1,c[h-1]+(n.chance(.5)?n.sign():0))));o.cars.push({d0:(l+n.next()*.6)/a*r,v:n.range(28,50),lanes:c,period:n.range(8,20)}),this.traffic.push({d:s+o.cars[l].d0,x:this.laneX(c[0]),laneTarget:c[0],v:o.cars[l].v,t:n.pick(this.data.trafficTypes),tint:n.pick(this.route.trafficColors),passed:!1,wrap:0})}this.net=o,this.netTime=0}updateNetTraffic(t,e){const n=this.net,s=this.netTime;this.traffic.forEach((r,a)=>{const o=n.cars[a],l=o.d0+o.v*s,c=Math.floor(l/n.len);c!==r.wrap&&(r.wrap=c,r.passed=!1),r.d=n.start+l-c*n.len;const h=Math.floor(s/o.period),u=o.lanes[h%o.lanes.length],f=o.lanes[Math.max(0,h-1)%o.lanes.length],d=Math.min(1,(s-h*o.period)/1.5),x=d*d*(3-2*d);r.x=this.laneX(f)+(this.laneX(u)-this.laneX(f))*x,r.laneTarget=u,!r.passed&&r.d<t-3&&r.d>t-40&&(r.passed=!0,e())})}rivalHit(t,e){var s;const n=["front","rear","left","right"];(s=this.rivalCars[t])==null||s.hit(e,n[Math.floor(Math.random()*4)])}rivalScreenPos(t,e,n,s){const r=this.rivalCars[t];if(!r||!r.root.visible)return null;const a=r.root.position.clone();a.y+=1.9;const o=a.distanceTo(e.position);return a.project(e),a.z>1||Math.abs(a.x)>1.1||Math.abs(a.y)>1.1?null:{x:(a.x+1)/2*n,y:(1-a.y)/2*s,dist:o}}updateTraffic(t,e,n){if(this.net)return this.updateNetTraffic(e,n);const s=this.track.goalDist;for(const r of this.traffic){r.d+=r.v*t,this.rng.chance(t*.08)&&(r.laneTarget=Math.max(0,Math.min(gi-1,r.laneTarget+this.rng.sign())));const a=this.laneX(r.laneTarget);if(r.x+=Math.sign(a-r.x)*Math.min(Math.abs(a-r.x),3*t),!r.passed&&r.d<e-3&&(r.passed=!0,n()),r.d<e-60||r.d>e+1500){const o=this.spawnCar(e+this.rng.range(900,1150));o.d>s+100&&(o.d=e-200),Object.assign(r,o)}}}hitTraffic(t,e){for(const n of this.traffic){const s=this.data.props[n.t].len??4.4;if(Math.abs(n.d-t)<s&&Math.abs(n.x-e)<2)return n}return null}hitProp(t,e){const n=Math.floor(t/ae);for(let s=n-1;s<=n+1;s++){const r=this.track.seg(s),a=s*ae-t;if(!(Math.abs(a)>2.4))for(const o of r.props){const l=this.data.props[o.t].radius;if(l>0&&Math.abs(o.x-e)<l*(o.s??1)+.9)return!0}}return!1}update(t,e,n,s,r){const a=this.view;a.update(t),this.road.update(a);const o=this.props;o.begin();const{bx:l,by:c,bz:h,bh:u,yRef:f}=a;for(let p=0;p<a.count;p++){const g=this.track.seg(a.start+p);if(!g.props.length)continue;const y=Math.cos(u[p]),v=Math.sin(u[p]);for(const T of g.props){const E=T.abs?(T.y??0)-f:c[p]+(T.y??0);o.add(T.t,l[p]+y*T.x,E,h[p]+v*T.x,-u[p]+(T.r??0),T.s??1,T.sy??1,T.tint)}}for(const p of this.traffic)a.sample(p.d,p.x,Me)&&o.add(p.t,Me.x,Me.y,Me.z,-Me.h,1,1,p.tint);o.end(),a.sample(t+2,e,Me);const d=Me.y;a.sample(t-2,e,Me);const x=Me.y;this.car.root.position.set(e,0,0),this.car.pose(r.steer,r.yaw,r.spin,r.bounce,Math.atan2(d-x,4),r.brake,r.flame),this.rivals.forEach((p,g)=>{const y=this.rivalCars[g];if(!a.sample(p.d+2,p.x,Me)){y.root.visible=!1;return}const v=Me.y;a.sample(p.d-2,p.x,Me);const T=Me.y;a.sample(p.d,p.x,Me),y.root.visible=!0,y.setNear(Math.abs(p.d-t)<28),y.root.position.set(Me.x,Me.y,Me.z),y.pose(p.steer,-Me.h-p.steer*.08,p.spin,0,Math.atan2(v-T,4),p.braking,p.turboT>0?1:0)}),a.sample(t-8.8,e*.9,Me);const M=Math.max(Me.y,-.5)+3.3;a.sample(t+40,0,Me);const m=Me.y*.45+.9;n.position.set(e*.9+(Math.random()-.5)*s,M+(Math.random()-.5)*s,8.8),n.lookAt(e*.82,m,-30),this.data.backdrop.update(n.position,a.heading),this.particles.render(a,n)}}const yr=ee.width,br=ee.height;async function ox(){var x;try{await document.fonts.load('16px "Press Start 2P"')}catch{}const i=document.getElementById("stage"),t=document.getElementById("gl"),e=new Zm({canvas:t,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(yr,br,!1);const n=new cn(54,yr/br,.5,4e3),s=new og,r=[new Yl(J1,s),new Yl(sx,s)],a=new Og,o=new lg,l=new pg(document.getElementById("hud")),c=new Fg(r,n,a,o,l);a.onFirstInput(()=>{o.init(),o.music("title")});const h=new rx(a,i,()=>c.touch=!0);window.addEventListener("mousedown",M=>{if(h.enabled)return;const m=i.getBoundingClientRect();a.tap((M.clientX-m.left)/m.width*852,(M.clientY-m.top)/m.height*480)}),window.game=c,(x=window.matchMedia)!=null&&x.call(window,"(pointer: coarse)").matches&&(c.touch=!0),c.nameBox=new zg(i),c.boot();const u=()=>{const M=Math.min(window.innerWidth/yr,window.innerHeight/br)||1,m=M>=3?Math.floor(M):M;i.style.width=`${Math.floor(yr*m)}px`,i.style.height=`${Math.floor(br*m)}px`};window.addEventListener("resize",u),u();let f=performance.now();const d=M=>{const m=Math.max(0,Math.min(.03333333333333333,(M-f)/1e3));f=M;const p=(c.state==="race"||c.state==="countdown")&&!c.paused;h.update(p)&&p&&(c.paused=!0),h.enabled&&h.setTurbo(c.turbos,c.turboT>0),c.update(m),c.draw(),a.endFrame(),e.render(c.world.scene,n),requestAnimationFrame(d)};requestAnimationFrame(d)}ox();
