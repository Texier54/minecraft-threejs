var Al=Object.defineProperty;var Zo=e=>{throw TypeError(e)};var Rl=(e,n,t)=>n in e?Al(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var xe=(e,n,t)=>Rl(e,typeof n!="symbol"?n+"":n,t),Cl=(e,n,t)=>n.has(e)||Zo("Cannot "+t);var ki=(e,n,t)=>(Cl(e,n,"read from private field"),t?t.call(e):n.get(e)),$o=(e,n,t)=>n.has(e)?Zo("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);import{c as Dl,S as Ao,N as un,C as nt,R as Ll,W as qn,H as fr,U as Rn,L as oi,a as dt,D as on,B as Ft,F as _i,t as Pl,b as Il,p as Ul,w as Hn,d as Nl,E as Ol,V as xt,P as fi,e as At,A as kl,f as an,g as rr,h as Ro,i as mi,j as gi,k as js,l as Re,m as Fl,n as Js,M as Yt,o as dr,q as Bl,r as Xe,s as Hl,u as Gl,v as Vl,x as Cn,y as Qs,z as $i,G as Qe,I as ec,J as An,K as tn,O as cn,Q as or,T as ni,X as zl,Y as Wl,Z as Xl,_ as ql,$ as Yl,a0 as Kl,a1 as Zl,a2 as $l,a3 as jl,a4 as Jl,a5 as Ql,a6 as ef,a7 as tf,a8 as nf,a9 as rf,aa as of,ab as af,ac as sf,ad as cf,ae as lf,af as ff,ag as Fi,ah as Vn,ai as Mr,aj as df,ak as uf,al as hf,am as tc,an as pf,ao as _f,ap as mf,aq as gf,ar as sn,as as nc,at as ic,au as rc,av as ar,aw as oc,ax as ac,ay as ur,az as mt,aA as jo,aB as tt,aC as sc,aD as cc,aE as lc,aF as bn,aG as eo,aH as to,aI as vf,aJ as fc,aK as Ef,aL as Sf,aM as ji,aN as xf,aO as Mf,aP as Jo,aQ as Qo,aR as ea,aS as bf,aT as ta,aU as Tf,aV as Gn,aW as na,aX as yf,aY as wf,aZ as Af,a_ as Rf,a$ as Cf,b0 as Df,b1 as Lf,b2 as Pf,b3 as If,b4 as br,b5 as Tr,b6 as yr,b7 as wr,b8 as ia,b9 as ra,ba as oa,bb as aa,bc as sa,bd as ca,be as la,bf as fa,bg as da,bh as ua,bi as ha,bj as pa,bk as _a,bl as ma,bm as ga,bn as va,bo as Ea,bp as Sa,bq as xa,br as Ma,bs as ba,bt as Ar,bu as Ta,bv as ya,bw as Uf,bx as wa,by as Aa,bz as Ra,bA as dc,bB as wt,bC as vi,bD as Ei,bE as Yn,bF as fn,bG as Nf,bH as Of,bI as kf,bJ as Ca,bK as Ff,bL as no,bM as io,bN as ro,bO as oo,bP as ao,bQ as so,bR as co,bS as Bf,bT as Hf,bU as uc,bV as Gf,bW as Vf,bX as zf,bY as Wf,bZ as Xf,b_ as qf,b$ as Yf,c0 as Kf,c1 as hc,c2 as Zf,c3 as $f,c4 as jf,c5 as Jf,c6 as Qf,c7 as ed,c8 as td,c9 as nd,ca as lo,cb as Me,cc as id,cd as vt,ce as rd,cf as Ee,cg as od,ch as ad,ci as sd,cj as cd,ck as ld,cl as fd,cm as dd,cn as ud,co as hd,cp as pd,cq as _d,cr as md}from"./smelting-Dc6DVDkj.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pc(){let e=null,n=!1,t=null,i=null;function r(o,a){t(o,a),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function gd(e){const n=new WeakMap;function t(s,p){const c=s.array,f=s.usage,E=c.byteLength,m=e.createBuffer();e.bindBuffer(p,m),e.bufferData(p,c,f),s.onUploadCallback();let g;if(c instanceof Float32Array)g=e.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=e.SHORT;else if(c instanceof Uint32Array)g=e.UNSIGNED_INT;else if(c instanceof Int32Array)g=e.INT;else if(c instanceof Int8Array)g=e.BYTE;else if(c instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:E}}function i(s,p,c){const f=p.array,E=p.updateRanges;if(e.bindBuffer(c,s),E.length===0)e.bufferSubData(c,0,f);else{E.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<E.length;g++){const y=E[m],w=E[g];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++m,E[m]=w)}E.length=m+1;for(let g=0,y=E.length;g<y;g++){const w=E[g];e.bufferSubData(c,w.start*f.BYTES_PER_ELEMENT,f,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const p=n.get(s);p&&(e.deleteBuffer(p.buffer),n.delete(s))}function a(s,p){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const f=n.get(s);(!f||f.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=n.get(s);if(c===void 0)n.set(s,t(s,p));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,p),c.version=s.version}}return{get:r,remove:o,update:a}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ru=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ou=`#ifdef USE_GRADIENTMAP
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
}`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
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
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
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
#endif`,mu=`struct PhysicalMaterial {
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
}`,gu=`
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`#ifdef USE_MORPHTARGETS
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
#endif`,Uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ou=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
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
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nh=`float getShadowMask() {
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
}`,ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rh=`#ifdef USE_SKINNING
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
#endif`,oh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ah=`#ifdef USE_SKINNING
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
#endif`,sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ch=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dh=`#ifdef USE_TRANSMISSION
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
#endif`,uh=`#ifdef USE_TRANSMISSION
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
#endif`,hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vh=`uniform sampler2D t2D;
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`#include <common>
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
}`,Th=`#if DEPTH_PACKING == 3200
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
}`,yh=`#define DISTANCE
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
}`,wh=`#define DISTANCE
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
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ch=`uniform float scale;
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
}`,Dh=`uniform vec3 diffuse;
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
}`,Lh=`#include <common>
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
}`,Ph=`uniform vec3 diffuse;
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
}`,Ih=`#define LAMBERT
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
}`,Uh=`#define LAMBERT
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
}`,Nh=`#define MATCAP
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
}`,Oh=`#define MATCAP
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
}`,kh=`#define NORMAL
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
}`,Fh=`#define NORMAL
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
}`,Bh=`#define PHONG
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
}`,Hh=`#define PHONG
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
}`,Gh=`#define STANDARD
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
}`,Vh=`#define STANDARD
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
}`,zh=`#define TOON
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
}`,Wh=`#define TOON
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
}`,Xh=`uniform float size;
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
}`,qh=`uniform vec3 diffuse;
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
}`,Yh=`#include <common>
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
}`,Kh=`uniform vec3 color;
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
}`,Zh=`uniform float rotation;
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
}`,$h=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:vd,alphahash_pars_fragment:Ed,alphamap_fragment:Sd,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:bd,aomap_fragment:Td,aomap_pars_fragment:yd,batching_pars_vertex:wd,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Dd,iridescence_fragment:Ld,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Od,color_fragment:kd,color_pars_fragment:Fd,color_pars_vertex:Bd,color_vertex:Hd,common:Gd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:Yd,colorspace_fragment:Kd,colorspace_pars_fragment:Zd,envmap_fragment:$d,envmap_common_pars_fragment:jd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:fu,envmap_vertex:eu,fog_vertex:tu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:ru,gradientmap_pars_fragment:ou,lightmap_pars_fragment:au,lights_lambert_fragment:su,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:du,lights_toon_pars_fragment:uu,lights_phong_fragment:hu,lights_phong_pars_fragment:pu,lights_physical_fragment:_u,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:vu,lights_fragment_end:Eu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:bu,map_fragment:Tu,map_pars_fragment:yu,map_particle_fragment:wu,map_particle_pars_fragment:Au,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Du,morphcolor_vertex:Lu,morphnormal_vertex:Pu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Uu,normal_fragment_begin:Nu,normal_fragment_maps:Ou,normal_pars_fragment:ku,normal_pars_vertex:Fu,normal_vertex:Bu,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Vu,clearcoat_pars_fragment:zu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:Ku,dithering_fragment:Zu,dithering_pars_fragment:$u,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:eh,shadowmap_vertex:th,shadowmask_pars_fragment:nh,skinbase_vertex:ih,skinning_pars_vertex:rh,skinning_vertex:oh,skinnormal_vertex:ah,specularmap_fragment:sh,specularmap_pars_fragment:ch,tonemapping_fragment:lh,tonemapping_pars_fragment:fh,transmission_fragment:dh,transmission_pars_fragment:uh,uv_pars_fragment:hh,uv_pars_vertex:ph,uv_vertex:_h,worldpos_vertex:mh,background_vert:gh,background_frag:vh,backgroundCube_vert:Eh,backgroundCube_frag:Sh,cube_vert:xh,cube_frag:Mh,depth_vert:bh,depth_frag:Th,distanceRGBA_vert:yh,distanceRGBA_frag:wh,equirect_vert:Ah,equirect_frag:Rh,linedashed_vert:Ch,linedashed_frag:Dh,meshbasic_vert:Lh,meshbasic_frag:Ph,meshlambert_vert:Ih,meshlambert_frag:Uh,meshmatcap_vert:Nh,meshmatcap_frag:Oh,meshnormal_vert:kh,meshnormal_frag:Fh,meshphong_vert:Bh,meshphong_frag:Hh,meshphysical_vert:Gh,meshphysical_frag:Vh,meshtoon_vert:zh,meshtoon_frag:Wh,points_vert:Xh,points_frag:qh,shadow_vert:Yh,shadow_frag:Kh,sprite_vert:Zh,sprite_frag:$h},ee={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Wt={basic:{uniforms:wt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:wt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:wt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:wt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:wt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:wt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:wt([ee.points,ee.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:wt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:wt([ee.common,ee.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:wt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:wt([ee.sprite,ee.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:wt([ee.common,ee.displacementmap,{referencePosition:{value:new Re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:wt([ee.lights,ee.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wt.physical={uniforms:wt([Wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Bi={r:0,b:0,g:0},En=new vi,jh=new Yt;function Jh(e,n,t,i,r,o,a){const s=new nt(0);let p=o===!0?0:1,c,f,E=null,m=0,g=null;function y(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:n).get(S)),S}function w(M){let S=!1;const N=y(M);N===null?l(s,p):N&&N.isColor&&(l(N,1),S=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(M,S){const N=y(S);N&&(N.isCubeTexture||N.mapping===ur)?(f===void 0&&(f=new Qe(new mt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:jo(Wt.backgroundCube.uniforms),vertexShader:Wt.backgroundCube.vertexShader,fragmentShader:Wt.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,A,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),En.copy(S.backgroundRotation),En.x*=-1,En.y*=-1,En.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),f.material.uniforms.envMap.value=N,f.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(jh.makeRotationFromEuler(En)),f.material.toneMapped=dt.getTransfer(N.colorSpace)!==tt,(E!==N||m!==N.version||g!==e.toneMapping)&&(f.material.needsUpdate=!0,E=N,m=N.version,g=e.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Qe(new sc(2,2),new Cn({name:"BackgroundMaterial",uniforms:jo(Wt.background.uniforms),vertexShader:Wt.background.vertexShader,fragmentShader:Wt.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(N.colorSpace)!==tt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(E!==N||m!==N.version||g!==e.toneMapping)&&(c.material.needsUpdate=!0,E=N,m=N.version,g=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function l(M,S){M.getRGB(Bi,cc(e)),i.buffers.color.setClear(Bi.r,Bi.g,Bi.b,S,a)}function D(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(M,S=1){s.set(M),p=S,l(s,p)},getClearAlpha:function(){return p},setClearAlpha:function(M){p=M,l(s,p)},render:w,addToRenderList:d,dispose:D}}function Qh(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=m(null);let o=r,a=!1;function s(_,T,z,H,Y){let $=!1;const W=E(H,z,T);o!==W&&(o=W,c(o.object)),$=g(_,H,z,Y),$&&y(_,H,z,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(_,T,z,H),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function p(){return e.createVertexArray()}function c(_){return e.bindVertexArray(_)}function f(_){return e.deleteVertexArray(_)}function E(_,T,z){const H=z.wireframe===!0;let Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let $=Y[T.id];$===void 0&&($={},Y[T.id]=$);let W=$[H];return W===void 0&&(W=m(p()),$[H]=W),W}function m(_){const T=[],z=[],H=[];for(let Y=0;Y<t;Y++)T[Y]=0,z[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:H,object:_,attributes:{},index:null}}function g(_,T,z,H){const Y=o.attributes,$=T.attributes;let W=0;const Q=z.getAttributes();for(const B in Q)if(Q[B].location>=0){const ye=Y[B];let Ue=$[B];if(Ue===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(Ue=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(Ue=_.instanceColor)),ye===void 0||ye.attribute!==Ue||Ue&&ye.data!==Ue.data)return!0;W++}return o.attributesNum!==W||o.index!==H}function y(_,T,z,H){const Y={},$=T.attributes;let W=0;const Q=z.getAttributes();for(const B in Q)if(Q[B].location>=0){let ye=$[B];ye===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ye=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ye=_.instanceColor));const Ue={};Ue.attribute=ye,ye&&ye.data&&(Ue.data=ye.data),Y[B]=Ue,W++}o.attributes=Y,o.attributesNum=W,o.index=H}function w(){const _=o.newAttributes;for(let T=0,z=_.length;T<z;T++)_[T]=0}function d(_){l(_,0)}function l(_,T){const z=o.newAttributes,H=o.enabledAttributes,Y=o.attributeDivisors;z[_]=1,H[_]===0&&(e.enableVertexAttribArray(_),H[_]=1),Y[_]!==T&&(e.vertexAttribDivisor(_,T),Y[_]=T)}function D(){const _=o.newAttributes,T=o.enabledAttributes;for(let z=0,H=T.length;z<H;z++)T[z]!==_[z]&&(e.disableVertexAttribArray(z),T[z]=0)}function M(_,T,z,H,Y,$,W){W===!0?e.vertexAttribIPointer(_,T,z,Y,$):e.vertexAttribPointer(_,T,z,H,Y,$)}function S(_,T,z,H){w();const Y=H.attributes,$=z.getAttributes(),W=T.defaultAttributeValues;for(const Q in $){const B=$[Q];if(B.location>=0){let _e=Y[Q];if(_e===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),_e!==void 0){const ye=_e.normalized,Ue=_e.itemSize,Ye=n.get(_e);if(Ye===void 0)continue;const at=Ye.buffer,V=Ye.type,J=Ye.bytesPerElement,ue=V===e.INT||V===e.UNSIGNED_INT||_e.gpuType===lc;if(_e.isInterleavedBufferAttribute){const ie=_e.data,be=ie.stride,Ce=_e.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<B.locationSize;Ne++)l(B.location+Ne,ie.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<B.locationSize;Ne++)d(B.location+Ne);e.bindBuffer(e.ARRAY_BUFFER,at);for(let Ne=0;Ne<B.locationSize;Ne++)M(B.location+Ne,Ue/B.locationSize,V,ye,be*J,(Ce+Ue/B.locationSize*Ne)*J,ue)}else{if(_e.isInstancedBufferAttribute){for(let ie=0;ie<B.locationSize;ie++)l(B.location+ie,_e.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ie=0;ie<B.locationSize;ie++)d(B.location+ie);e.bindBuffer(e.ARRAY_BUFFER,at);for(let ie=0;ie<B.locationSize;ie++)M(B.location+ie,Ue/B.locationSize,V,ye,Ue*J,Ue/B.locationSize*ie*J,ue)}}else if(W!==void 0){const ye=W[Q];if(ye!==void 0)switch(ye.length){case 2:e.vertexAttrib2fv(B.location,ye);break;case 3:e.vertexAttrib3fv(B.location,ye);break;case 4:e.vertexAttrib4fv(B.location,ye);break;default:e.vertexAttrib1fv(B.location,ye)}}}}D()}function N(){k();for(const _ in i){const T=i[_];for(const z in T){const H=T[z];for(const Y in H)f(H[Y].object),delete H[Y];delete T[z]}delete i[_]}}function P(_){if(i[_.id]===void 0)return;const T=i[_.id];for(const z in T){const H=T[z];for(const Y in H)f(H[Y].object),delete H[Y];delete T[z]}delete i[_.id]}function A(_){for(const T in i){const z=i[T];if(z[_.id]===void 0)continue;const H=z[_.id];for(const Y in H)f(H[Y].object),delete H[Y];delete z[_.id]}}function k(){v(),a=!0,o!==r&&(o=r,c(o.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:k,resetDefaultState:v,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:w,enableAttribute:d,disableUnusedAttributes:D}}function ep(e,n,t){let i;function r(c){i=c}function o(c,f){e.drawArrays(i,c,f),t.update(f,i,1)}function a(c,f,E){E!==0&&(e.drawArraysInstanced(i,c,f,E),t.update(f,i,E))}function s(c,f,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,E);let g=0;for(let y=0;y<E;y++)g+=f[y];t.update(g,i,1)}function p(c,f,E,m){if(E===0)return;const g=n.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<c.length;y++)a(c[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,m,0,E);let y=0;for(let w=0;w<E;w++)y+=f[w]*m[w];t.update(y,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=p}function tp(e,n,t,i){let r;function o(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const A=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==an&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(A){const k=A===fr&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(A!==Rn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!k)}function p(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=p(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const E=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:E,reverseDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:d,maxAttributes:l,maxVertexUniforms:D,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:N,maxSamples:P}}function np(e){const n=this;let t=null,i=0,r=!1,o=!1;const a=new Bl,s=new Xe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(E,m){const g=E.length!==0||m||i!==0||r;return r=m,i=E.length,g},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(E,m){t=f(E,m,0)},this.setState=function(E,m,g){const y=E.clippingPlanes,w=E.clipIntersection,d=E.clipShadows,l=e.get(E);if(!r||y===null||y.length===0||o&&!d)o?f(null):c();else{const D=o?0:i,M=D*4;let S=l.clippingState||null;p.value=S,S=f(y,m,M,g);for(let N=0;N!==M;++N)S[N]=t[N];l.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function c(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function f(E,m,g,y){const w=E!==null?E.length:0;let d=null;if(w!==0){if(d=p.value,y!==!0||d===null){const l=g+w*4,D=m.matrixWorldInverse;s.getNormalMatrix(D),(d===null||d.length<l)&&(d=new Float32Array(l));for(let M=0,S=g;M!==w;++M,S+=4)a.copy(E[M]).applyMatrix4(D,s),a.normal.toArray(d,S),d[S+3]=a.constant}p.value=d,p.needsUpdate=!0}return n.numPlanes=w,n.numIntersection=0,d}}function ip(e){let n=new WeakMap;function t(a,s){return s===eo?a.mapping=Ei:s===to&&(a.mapping=Yn),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===eo||s===to)if(n.has(a)){const p=n.get(a).texture;return t(p,a.mapping)}else{const p=a.image;if(p&&p.height>0){const c=new vf(p.height);return c.fromEquirectangularTexture(e,a),n.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const p=n.get(s);p!==void 0&&(n.delete(s),p.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const zn=4,Da=[.125,.215,.35,.446,.526,.582],Mn=20,Rr=new Gf,La=new nt;let Cr=null,Dr=0,Lr=0,Pr=!1;const xn=(1+Math.sqrt(5))/2,Nn=1/xn,Pa=[new Re(-xn,Nn,0),new Re(xn,Nn,0),new Re(-Nn,0,xn),new Re(Nn,0,xn),new Re(0,xn,-Nn),new Re(0,xn,Nn),new Re(-1,1,-1),new Re(1,1,-1),new Re(-1,1,1),new Re(1,1,1)];class Ia{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100){Cr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Cr,Dr,Lr),this._renderer.xr.enabled=Pr,n.scissorTest=!1,Hi(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Ei||n.mapping===Yn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Cr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:fr,format:an,colorSpace:dr,depthBuffer:!1},r=Ua(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rp(o)),this._blurMaterial=op(o,n,t)}return r}_compileMaterial(n){const t=new Qe(this._lodPlanes[0],n);this._renderer.compile(t,Rr)}_sceneToCubeUV(n,t,i,r){const s=new fi(90,1,t,i),p=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,E=f.autoClear,m=f.toneMapping;f.getClearColor(La),f.toneMapping=un,f.autoClear=!1;const g=new fn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),y=new Qe(new mt,g);let w=!1;const d=n.background;d?d.isColor&&(g.color.copy(d),n.background=null,w=!0):(g.color.copy(La),w=!0);for(let l=0;l<6;l++){const D=l%3;D===0?(s.up.set(0,p[l],0),s.lookAt(c[l],0,0)):D===1?(s.up.set(0,0,p[l]),s.lookAt(0,c[l],0)):(s.up.set(0,p[l],0),s.lookAt(0,0,c[l]));const M=this._cubeSize;Hi(r,D*M,l>2?M:0,M,M),f.setRenderTarget(r),w&&f.render(y,s),f.render(n,s)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=E,n.background=d}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Ei||n.mapping===Yn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Qe(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=n;const p=this._cubeSize;Hi(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(a,Rr)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Pa[(r-o-1)%Pa.length];this._blur(n,o-1,o,a,s)}t.autoClear=i}_blur(n,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(n,a,t,i,r,"latitudinal",o),this._halfBlur(a,n,i,i,r,"longitudinal",o)}_halfBlur(n,t,i,r,o,a,s){const p=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,E=new Qe(this._lodPlanes[r],c),m=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Mn-1),w=o/y,d=isFinite(o)?1+Math.floor(f*w):Mn;d>Mn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Mn}`);const l=[];let D=0;for(let A=0;A<Mn;++A){const k=A/w,v=Math.exp(-k*k/2);l.push(v),A===0?D+=v:A<d&&(D+=2*v)}for(let A=0;A<l.length;A++)l[A]=l[A]/D;m.envMap.value=n.texture,m.samples.value=d,m.weights.value=l,m.latitudinal.value=a==="latitudinal",s&&(m.poleAxis.value=s);const{_lodMax:M}=this;m.dTheta.value=y,m.mipInt.value=M-i;const S=this._sizeLods[r],N=3*S*(r>M-zn?r-M+zn:0),P=4*(this._cubeSize-S);Hi(t,N,P,3*S,2*S),p.setRenderTarget(t),p.render(E,Rr)}}function rp(e){const n=[],t=[],i=[];let r=e;const o=e-zn+1+Da.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let p=1/s;a>e-zn?p=Da[a-e+zn-1]:a===0&&(p=0),i.push(p);const c=1/(s-2),f=-c,E=1+c,m=[f,f,E,f,E,E,f,f,E,E,f,E],g=6,y=6,w=3,d=2,l=1,D=new Float32Array(w*y*g),M=new Float32Array(d*y*g),S=new Float32Array(l*y*g);for(let P=0;P<g;P++){const A=P%3*2/3-1,k=P>2?0:-1,v=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];D.set(v,w*y*P),M.set(m,d*y*P);const _=[P,P,P,P,P,P];S.set(_,l*y*P)}const N=new Qs;N.setAttribute("position",new $i(D,w)),N.setAttribute("uv",new $i(M,d)),N.setAttribute("faceIndex",new $i(S,l)),n.push(N),r>zn&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ua(e,n,t){const i=new qn(e,n,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hi(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function op(e,n,t){const i=new Float32Array(Mn),r=new Re(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Co(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Na(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Oa(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}function ap(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const p=s.mapping,c=p===eo||p===to,f=p===Ei||p===Yn;if(c||f){let E=n.get(s);const m=E!==void 0?E.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==m)return t===null&&(t=new Ia(e)),E=c?t.fromEquirectangular(s,E):t.fromCubemap(s,E),E.texture.pmremVersion=s.pmremVersion,n.set(s,E),E.texture;if(E!==void 0)return E.texture;{const g=s.image;return c&&g&&g.height>0||f&&g&&r(g)?(t===null&&(t=new Ia(e)),E=c?t.fromEquirectangular(s):t.fromCubemap(s),E.texture.pmremVersion=s.pmremVersion,n.set(s,E),s.addEventListener("dispose",o),E.texture):null}}}return s}function r(s){let p=0;const c=6;for(let f=0;f<c;f++)s[f]!==void 0&&p++;return p===c}function o(s){const p=s.target;p.removeEventListener("dispose",o);const c=n.get(p);c!==void 0&&(n.delete(p),c.dispose())}function a(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sp(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cp(e,n,t,i){const r={},o=new WeakMap;function a(E){const m=E.target;m.index!==null&&n.remove(m.index);for(const y in m.attributes)n.remove(m.attributes[y]);m.removeEventListener("dispose",a),delete r[m.id];const g=o.get(m);g&&(n.remove(g),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function s(E,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function p(E){const m=E.attributes;for(const g in m)n.update(m[g],e.ARRAY_BUFFER)}function c(E){const m=[],g=E.index,y=E.attributes.position;let w=0;if(g!==null){const D=g.array;w=g.version;for(let M=0,S=D.length;M<S;M+=3){const N=D[M+0],P=D[M+1],A=D[M+2];m.push(N,P,P,A,A,N)}}else if(y!==void 0){const D=y.array;w=y.version;for(let M=0,S=D.length/3-1;M<S;M+=3){const N=M+0,P=M+1,A=M+2;m.push(N,P,P,A,A,N)}}else return;const d=new(Nf(m)?Of:kf)(m,1);d.version=w;const l=o.get(E);l&&n.remove(l),o.set(E,d)}function f(E){const m=o.get(E);if(m){const g=E.index;g!==null&&m.version<g.version&&c(E)}else c(E);return o.get(E)}return{get:s,update:p,getWireframeAttribute:f}}function lp(e,n,t){let i;function r(m){i=m}let o,a;function s(m){o=m.type,a=m.bytesPerElement}function p(m,g){e.drawElements(i,g,o,m*a),t.update(g,i,1)}function c(m,g,y){y!==0&&(e.drawElementsInstanced(i,g,o,m*a,y),t.update(g,i,y))}function f(m,g,y){if(y===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,m,0,y);let d=0;for(let l=0;l<y;l++)d+=g[l];t.update(d,i,1)}function E(m,g,y,w){if(y===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let l=0;l<m.length;l++)c(m[l]/a,g[l],w[l]);else{d.multiDrawElementsInstancedWEBGL(i,g,0,o,m,0,w,0,y);let l=0;for(let D=0;D<y;D++)l+=g[D]*w[D];t.update(l,i,1)}}this.setMode=r,this.setIndex=s,this.render=p,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=E}function fp(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case e.TRIANGLES:t.triangles+=s*(o/3);break;case e.LINES:t.lines+=s*(o/2);break;case e.LINE_STRIP:t.lines+=s*(o-1);break;case e.LINE_LOOP:t.lines+=s*o;break;case e.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dp(e,n,t){const i=new WeakMap,r=new At;function o(a,s,p){const c=a.morphTargetInfluences,f=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,E=f!==void 0?f.length:0;let m=i.get(s);if(m===void 0||m.count!==E){let v=function(){A.dispose(),i.delete(s),s.removeEventListener("dispose",v)};m!==void 0&&m.texture.dispose();const g=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,w=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],D=s.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let S=s.attributes.position.count*M,N=1;S>n.maxTextureSize&&(N=Math.ceil(S/n.maxTextureSize),S=n.maxTextureSize);const P=new Float32Array(S*N*4*E),A=new fc(P,S,N,E);A.type=bn,A.needsUpdate=!0;const k=M*4;for(let _=0;_<E;_++){const T=d[_],z=l[_],H=D[_],Y=S*N*4*_;for(let $=0;$<T.count;$++){const W=$*k;g===!0&&(r.fromBufferAttribute(T,$),P[Y+W+0]=r.x,P[Y+W+1]=r.y,P[Y+W+2]=r.z,P[Y+W+3]=0),y===!0&&(r.fromBufferAttribute(z,$),P[Y+W+4]=r.x,P[Y+W+5]=r.y,P[Y+W+6]=r.z,P[Y+W+7]=0),w===!0&&(r.fromBufferAttribute(H,$),P[Y+W+8]=r.x,P[Y+W+9]=r.y,P[Y+W+10]=r.z,P[Y+W+11]=H.itemSize===4?r.w:1)}}m={count:E,texture:A,size:new xt(S,N)},i.set(s,m),s.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)p.getUniforms().setValue(e,"morphTexture",a.morphTexture,t);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];const y=s.morphTargetsRelative?1:1-g;p.getUniforms().setValue(e,"morphTargetBaseInfluence",y),p.getUniforms().setValue(e,"morphTargetInfluences",c)}p.getUniforms().setValue(e,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(e,"morphTargetsTextureSize",m.size)}return{update:o}}function up(e,n,t,i){let r=new WeakMap;function o(p){const c=i.render.frame,f=p.geometry,E=n.get(p,f);if(r.get(E)!==c&&(n.update(E),r.set(E,c)),p.isInstancedMesh&&(p.hasEventListener("dispose",s)===!1&&p.addEventListener("dispose",s),r.get(p)!==c&&(t.update(p.instanceMatrix,e.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,e.ARRAY_BUFFER),r.set(p,c))),p.isSkinnedMesh){const m=p.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return E}function a(){r=new WeakMap}function s(p){const c=p.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const _c=new dc,ka=new js(1,1),mc=new fc,gc=new $f,vc=new jf,Fa=[],Ba=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function $n(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let o=Fa[r];if(o===void 0&&(o=new Float32Array(r),Fa[r]=o),n!==0){i.toArray(o,0);for(let a=1,s=0;a!==n;++a)s+=t,e[a].toArray(o,s)}return o}function ht(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function pt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function hr(e,n){let t=Ba[n];t===void 0&&(t=new Int32Array(n),Ba[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function hp(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function pp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ht(t,n))return;e.uniform2fv(this.addr,n),pt(t,n)}}function _p(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ht(t,n))return;e.uniform3fv(this.addr,n),pt(t,n)}}function mp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ht(t,n))return;e.uniform4fv(this.addr,n),pt(t,n)}}function gp(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ht(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),pt(t,n)}else{if(ht(t,i))return;Va.set(i),e.uniformMatrix2fv(this.addr,!1,Va),pt(t,i)}}function vp(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ht(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),pt(t,n)}else{if(ht(t,i))return;Ga.set(i),e.uniformMatrix3fv(this.addr,!1,Ga),pt(t,i)}}function Ep(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ht(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),pt(t,n)}else{if(ht(t,i))return;Ha.set(i),e.uniformMatrix4fv(this.addr,!1,Ha),pt(t,i)}}function Sp(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function xp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ht(t,n))return;e.uniform2iv(this.addr,n),pt(t,n)}}function Mp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ht(t,n))return;e.uniform3iv(this.addr,n),pt(t,n)}}function bp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ht(t,n))return;e.uniform4iv(this.addr,n),pt(t,n)}}function Tp(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function yp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ht(t,n))return;e.uniform2uiv(this.addr,n),pt(t,n)}}function wp(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ht(t,n))return;e.uniform3uiv(this.addr,n),pt(t,n)}}function Ap(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ht(t,n))return;e.uniform4uiv(this.addr,n),pt(t,n)}}function Rp(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let o;this.type===e.SAMPLER_2D_SHADOW?(ka.compareFunction=tc,o=ka):o=_c,t.setTexture2D(n||o,r)}function Cp(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||gc,r)}function Dp(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||vc,r)}function Lp(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||mc,r)}function Pp(e){switch(e){case 5126:return hp;case 35664:return pp;case 35665:return _p;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return Ep;case 5124:case 35670:return Sp;case 35667:case 35671:return xp;case 35668:case 35672:return Mp;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return yp;case 36295:return wp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Lp}}function Ip(e,n){e.uniform1fv(this.addr,n)}function Up(e,n){const t=$n(n,this.size,2);e.uniform2fv(this.addr,t)}function Np(e,n){const t=$n(n,this.size,3);e.uniform3fv(this.addr,t)}function Op(e,n){const t=$n(n,this.size,4);e.uniform4fv(this.addr,t)}function kp(e,n){const t=$n(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Fp(e,n){const t=$n(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Bp(e,n){const t=$n(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Hp(e,n){e.uniform1iv(this.addr,n)}function Gp(e,n){e.uniform2iv(this.addr,n)}function Vp(e,n){e.uniform3iv(this.addr,n)}function zp(e,n){e.uniform4iv(this.addr,n)}function Wp(e,n){e.uniform1uiv(this.addr,n)}function Xp(e,n){e.uniform2uiv(this.addr,n)}function qp(e,n){e.uniform3uiv(this.addr,n)}function Yp(e,n){e.uniform4uiv(this.addr,n)}function Kp(e,n,t){const i=this.cache,r=n.length,o=hr(t,r);ht(i,o)||(e.uniform1iv(this.addr,o),pt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(n[a]||_c,o[a])}function Zp(e,n,t){const i=this.cache,r=n.length,o=hr(t,r);ht(i,o)||(e.uniform1iv(this.addr,o),pt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(n[a]||gc,o[a])}function $p(e,n,t){const i=this.cache,r=n.length,o=hr(t,r);ht(i,o)||(e.uniform1iv(this.addr,o),pt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(n[a]||vc,o[a])}function jp(e,n,t){const i=this.cache,r=n.length,o=hr(t,r);ht(i,o)||(e.uniform1iv(this.addr,o),pt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(n[a]||mc,o[a])}function Jp(e){switch(e){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Op;case 35674:return kp;case 35675:return Fp;case 35676:return Bp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return zp;case 5125:return Wp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return jp}}class Qp{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pp(t.type)}}class e_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class t_{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(n,t[s.id],i)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function za(e,n){e.seq.push(n),e.map[n.id]=n}function n_(e,n,t){const i=e.name,r=i.length;for(Ir.lastIndex=0;;){const o=Ir.exec(i),a=Ir.lastIndex;let s=o[1];const p=o[2]==="]",c=o[3];if(p&&(s=s|0),c===void 0||c==="["&&a+2===r){za(t,c===void 0?new Qp(s,e,n):new e_(s,e,n));break}else{let E=t.map[s];E===void 0&&(E=new t_(s),za(t,E)),t=E}}}class Ji{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=n.getActiveUniform(t,r),a=n.getUniformLocation(t,o.name);n_(o,a,this)}}setValue(n,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],p=i[s.id];p.needsUpdate!==!1&&s.setValue(n,p.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.id in t&&i.push(a)}return i}}function Wa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const i_=37297;let r_=0;function o_(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===n?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}const Xa=new Xe;function a_(e){dt._getMatrix(Xa,dt.workingColorSpace,e);const n=`mat3( ${Xa.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(e)){case uc:return[n,"LinearTransferOETF"];case tt:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function qa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=e.getShaderInfoLog(n).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+o_(e.getShaderSource(n),a)}else return r}function s_(e,n){const t=a_(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c_(e,n){let t;switch(n){case Kf:t="Linear";break;case Yf:t="Reinhard";break;case qf:t="Cineon";break;case Xf:t="ACESFilmic";break;case Wf:t="AgX";break;case zf:t="Neutral";break;case Vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gi=new Re;function l_(){dt.getLuminanceCoefficients(Gi);const e=Gi.x.toFixed(4),n=Gi.y.toFixed(4),t=Gi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ai).join(`
`)}function d_(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function u_(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(n,r),a=o.name;let s=1;o.type===e.FLOAT_MAT2&&(s=2),o.type===e.FLOAT_MAT3&&(s=3),o.type===e.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:e.getAttribLocation(n,a),locationSize:s}}return t}function ai(e){return e!==""}function Ya(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Ka(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(e){return e.replace(h_,__)}const p_=new Map;function __(e,n){let t=Ie[n];if(t===void 0){const i=p_.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return fo(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(e){return e.replace(m_,g_)}function g_(e,n,t,i){let r="";for(let o=parseInt(n);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function $a(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function v_(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===ec?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===hc?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===tn&&(n="SHADOWMAP_TYPE_VSM"),n}function E_(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ei:case Yn:n="ENVMAP_TYPE_CUBE";break;case ur:n="ENVMAP_TYPE_CUBE_UV";break}return n}function S_(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Yn:n="ENVMAP_MODE_REFRACTION";break}return n}function x_(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ed:n="ENVMAP_BLENDING_MULTIPLY";break;case Qf:n="ENVMAP_BLENDING_MIX";break;case Jf:n="ENVMAP_BLENDING_ADD";break}return n}function M_(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function b_(e,n,t,i){const r=e.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const p=v_(t),c=E_(t),f=S_(t),E=x_(t),m=M_(t),g=f_(t),y=d_(o),w=r.createProgram();let d,l,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ai).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ai).join(`
`),l.length>0&&(l+=`
`)):(d=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ai).join(`
`),l=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+E:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Ie.tonemapping_pars_fragment:"",t.toneMapping!==un?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),l_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ai).join(`
`)),a=fo(a),a=Ya(a,t),a=Ka(a,t),s=fo(s),s=Ya(s,t),s=Ka(s,t),a=Za(a),s=Za(s),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const M=D+d+a,S=D+l+s,N=Wa(r,r.VERTEX_SHADER,M),P=Wa(r,r.FRAGMENT_SHADER,S);r.attachShader(w,N),r.attachShader(w,P),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function A(T){if(e.debug.checkShaderErrors){const z=r.getProgramInfoLog(w).trim(),H=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(P).trim();let $=!0,W=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,w,N,P);else{const Q=qa(r,N,"vertex"),B=qa(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+Q+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||Y==="")&&(W=!1);W&&(T.diagnostics={runnable:$,programLog:z,vertexShader:{log:H,prefix:d},fragmentShader:{log:Y,prefix:l}})}r.deleteShader(N),r.deleteShader(P),k=new Ji(r,w),v=u_(r,w)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(w,i_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=n,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=P,this}let T_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new w_(n),t.set(n,i)),i}}class w_{constructor(n){this.id=T_++,this.code=n,this.usedTimes=0}}function A_(e,n,t,i,r,o,a){const s=new Ff,p=new y_,c=new Set,f=[],E=r.logarithmicDepthBuffer,m=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,_,T,z,H){const Y=z.fog,$=H.geometry,W=v.isMeshStandardMaterial?z.environment:null,Q=(v.isMeshStandardMaterial?t:n).get(v.envMap||W),B=Q&&Q.mapping===ur?Q.image.height:null,_e=y[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ue=ye!==void 0?ye.length:0;let Ye=0;$.morphAttributes.position!==void 0&&(Ye=1),$.morphAttributes.normal!==void 0&&(Ye=2),$.morphAttributes.color!==void 0&&(Ye=3);let at,V,J,ue;if(_e){const je=Wt[_e];at=je.vertexShader,V=je.fragmentShader}else at=v.vertexShader,V=v.fragmentShader,p.update(v),J=p.getVertexShaderID(v),ue=p.getFragmentShaderID(v);const ie=e.getRenderTarget(),be=e.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,ot=!!v.map,Ge=!!v.matcap,lt=!!Q,b=!!v.aoMap,It=!!v.lightMap,Fe=!!v.bumpMap,Be=!!v.normalMap,me=!!v.displacementMap,et=!!v.emissiveMap,pe=!!v.metalnessMap,x=!!v.roughnessMap,u=v.anisotropy>0,I=v.clearcoat>0,X=v.dispersion>0,K=v.iridescence>0,G=v.sheen>0,he=v.transmission>0,re=u&&!!v.anisotropyMap,ce=I&&!!v.clearcoatMap,Ve=I&&!!v.clearcoatNormalMap,j=I&&!!v.clearcoatRoughnessMap,le=K&&!!v.iridescenceMap,Se=K&&!!v.iridescenceThicknessMap,we=G&&!!v.sheenColorMap,fe=G&&!!v.sheenRoughnessMap,He=!!v.specularMap,Pe=!!v.specularColorMap,Je=!!v.specularIntensityMap,R=he&&!!v.transmissionMap,te=he&&!!v.thicknessMap,F=!!v.gradientMap,q=!!v.alphaMap,ae=v.alphaTest>0,oe=!!v.alphaHash,Le=!!v.extensions;let st=un;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(st=e.toneMapping);const St={shaderID:_e,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:V,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:dr,alphaToCoverage:!!v.alphaToCoverage,map:ot,matcap:Ge,envMap:lt,envMapMode:lt&&Q.mapping,envMapCubeUVHeight:B,aoMap:b,lightMap:It,bumpMap:Fe,normalMap:Be,displacementMap:m&&me,emissiveMap:et,normalMapObjectSpace:Be&&v.normalMapType===Ef,normalMapTangentSpace:Be&&v.normalMapType===Sf,metalnessMap:pe,roughnessMap:x,anisotropy:u,anisotropyMap:re,clearcoat:I,clearcoatMap:ce,clearcoatNormalMap:Ve,clearcoatRoughnessMap:j,dispersion:X,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:G,sheenColorMap:we,sheenRoughnessMap:fe,specularMap:He,specularColorMap:Pe,specularIntensityMap:Je,transmission:he,transmissionMap:R,thicknessMap:te,gradientMap:F,opaque:v.transparent===!1&&v.blending===ji&&v.alphaToCoverage===!1,alphaMap:q,alphaTest:ae,alphaHash:oe,combine:v.combine,mapUv:ot&&w(v.map.channel),aoMapUv:b&&w(v.aoMap.channel),lightMapUv:It&&w(v.lightMap.channel),bumpMapUv:Fe&&w(v.bumpMap.channel),normalMapUv:Be&&w(v.normalMap.channel),displacementMapUv:me&&w(v.displacementMap.channel),emissiveMapUv:et&&w(v.emissiveMap.channel),metalnessMapUv:pe&&w(v.metalnessMap.channel),roughnessMapUv:x&&w(v.roughnessMap.channel),anisotropyMapUv:re&&w(v.anisotropyMap.channel),clearcoatMapUv:ce&&w(v.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&w(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&w(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&w(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&w(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&w(v.sheenColorMap.channel),sheenRoughnessMapUv:fe&&w(v.sheenRoughnessMap.channel),specularMapUv:He&&w(v.specularMap.channel),specularColorMapUv:Pe&&w(v.specularColorMap.channel),specularIntensityMapUv:Je&&w(v.specularIntensityMap.channel),transmissionMapUv:R&&w(v.transmissionMap.channel),thicknessMapUv:te&&w(v.thicknessMap.channel),alphaMapUv:q&&w(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Be||u),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(ot||q),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ye,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&T.length>0,shadowMapType:e.shadowMap.type,toneMapping:st,decodeVideoTexture:ot&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===tt,decodeVideoTextureEmissive:et&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===tt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Ft,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Le&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&v.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function l(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)_.push(T),_.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(D(_,v),M(_,v),_.push(e.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function D(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function M(v,_){s.disableAll(),_.supportsVertexTextures&&s.enable(0),_.instancing&&s.enable(1),_.instancingColor&&s.enable(2),_.instancingMorph&&s.enable(3),_.matcap&&s.enable(4),_.envMap&&s.enable(5),_.normalMapObjectSpace&&s.enable(6),_.normalMapTangentSpace&&s.enable(7),_.clearcoat&&s.enable(8),_.iridescence&&s.enable(9),_.alphaTest&&s.enable(10),_.vertexColors&&s.enable(11),_.vertexAlphas&&s.enable(12),_.vertexUv1s&&s.enable(13),_.vertexUv2s&&s.enable(14),_.vertexUv3s&&s.enable(15),_.vertexTangents&&s.enable(16),_.anisotropy&&s.enable(17),_.alphaHash&&s.enable(18),_.batching&&s.enable(19),_.dispersion&&s.enable(20),_.batchingColor&&s.enable(21),v.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.reverseDepthBuffer&&s.enable(4),_.skinning&&s.enable(5),_.morphTargets&&s.enable(6),_.morphNormals&&s.enable(7),_.morphColors&&s.enable(8),_.premultipliedAlpha&&s.enable(9),_.shadowMapEnabled&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),_.decodeVideoTexture&&s.enable(19),_.decodeVideoTextureEmissive&&s.enable(20),_.alphaToCoverage&&s.enable(21),v.push(s.mask)}function S(v){const _=y[v.type];let T;if(_){const z=Wt[_];T=xf.clone(z.uniforms)}else T=v.uniforms;return T}function N(v,_){let T;for(let z=0,H=f.length;z<H;z++){const Y=f[z];if(Y.cacheKey===_){T=Y,++T.usedTimes;break}}return T===void 0&&(T=new b_(e,_,v,o),f.push(T)),T}function P(v){if(--v.usedTimes===0){const _=f.indexOf(v);f[_]=f[f.length-1],f.pop(),v.destroy()}}function A(v){p.remove(v)}function k(){p.dispose()}return{getParameters:d,getProgramCacheKey:l,getUniforms:S,acquireProgram:N,releaseProgram:P,releaseShaderCache:A,programs:f,dispose:k}}function R_(){let e=new WeakMap;function n(a){return e.has(a)}function t(a){let s=e.get(a);return s===void 0&&(s={},e.set(a,s)),s}function i(a){e.delete(a)}function r(a,s,p){e.get(a)[s]=p}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:o}}function C_(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function ja(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ja(){const e=[];let n=0;const t=[],i=[],r=[];function o(){n=0,t.length=0,i.length=0,r.length=0}function a(E,m,g,y,w,d){let l=e[n];return l===void 0?(l={id:E.id,object:E,geometry:m,material:g,groupOrder:y,renderOrder:E.renderOrder,z:w,group:d},e[n]=l):(l.id=E.id,l.object=E,l.geometry=m,l.material=g,l.groupOrder=y,l.renderOrder=E.renderOrder,l.z=w,l.group=d),n++,l}function s(E,m,g,y,w,d){const l=a(E,m,g,y,w,d);g.transmission>0?i.push(l):g.transparent===!0?r.push(l):t.push(l)}function p(E,m,g,y,w,d){const l=a(E,m,g,y,w,d);g.transmission>0?i.unshift(l):g.transparent===!0?r.unshift(l):t.unshift(l)}function c(E,m){t.length>1&&t.sort(E||C_),i.length>1&&i.sort(m||ja),r.length>1&&r.sort(m||ja)}function f(){for(let E=n,m=e.length;E<m;E++){const g=e[E];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:p,finish:f,sort:c}}function D_(){let e=new WeakMap;function n(i,r){const o=e.get(i);let a;return o===void 0?(a=new Ja,e.set(i,[a])):r>=o.length?(a=new Ja,o.push(a)):a=o[r],a}function t(){e=new WeakMap}return{get:n,dispose:t}}function L_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Re,color:new nt};break;case"SpotLight":t={position:new Re,direction:new Re,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Re,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Re,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Re,halfWidth:new Re,halfHeight:new Re};break}return e[n.id]=t,t}}}function P_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let I_=0;function U_(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function N_(e){const n=new L_,t=P_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Re);const r=new Re,o=new Yt,a=new Yt;function s(c){let f=0,E=0,m=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let g=0,y=0,w=0,d=0,l=0,D=0,M=0,S=0,N=0,P=0,A=0;c.sort(U_);for(let v=0,_=c.length;v<_;v++){const T=c[v],z=T.color,H=T.intensity,Y=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=z.r*H,E+=z.g*H,m+=z.b*H;else if(T.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(T.sh.coefficients[W],H);A++}else if(T.isDirectionalLight){const W=n.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,B=t.get(T);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.directionalShadow[g]=B,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=T.shadow.matrix,D++}i.directional[g]=W,g++}else if(T.isSpotLight){const W=n.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=Y,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,i.spot[w]=W;const Q=T.shadow;if(T.map&&(i.spotLightMap[N]=T.map,N++,Q.updateMatrices(T),T.castShadow&&P++),i.spotLightMatrix[w]=Q.matrix,T.castShadow){const B=t.get(T);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,i.spotShadow[w]=B,i.spotShadowMap[w]=$,S++}w++}else if(T.isRectAreaLight){const W=n.get(T);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),i.rectArea[d]=W,d++}else if(T.isPointLight){const W=n.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){const Q=T.shadow,B=t.get(T);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,i.pointShadow[y]=B,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=T.shadow.matrix,M++}i.point[y]=W,y++}else if(T.isHemisphereLight){const W=n.get(T);W.skyColor.copy(T.color).multiplyScalar(H),W.groundColor.copy(T.groundColor).multiplyScalar(H),i.hemi[l]=W,l++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=E,i.ambient[2]=m;const k=i.hash;(k.directionalLength!==g||k.pointLength!==y||k.spotLength!==w||k.rectAreaLength!==d||k.hemiLength!==l||k.numDirectionalShadows!==D||k.numPointShadows!==M||k.numSpotShadows!==S||k.numSpotMaps!==N||k.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=d,i.point.length=y,i.hemi.length=l,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+N-P,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,k.directionalLength=g,k.pointLength=y,k.spotLength=w,k.rectAreaLength=d,k.hemiLength=l,k.numDirectionalShadows=D,k.numPointShadows=M,k.numSpotShadows=S,k.numSpotMaps=N,k.numLightProbes=A,i.version=I_++)}function p(c,f){let E=0,m=0,g=0,y=0,w=0;const d=f.matrixWorldInverse;for(let l=0,D=c.length;l<D;l++){const M=c[l];if(M.isDirectionalLight){const S=i.directional[E];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),E++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),w++}}}return{setup:s,setupView:p,state:i}}function Qa(e){const n=new N_(e),t=[],i=[];function r(f){c.camera=f,t.length=0,i.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function s(){n.setup(t)}function p(f){n.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:s,setupLightsView:p,pushLight:o,pushShadow:a}}function O_(e){let n=new WeakMap;function t(r,o=0){const a=n.get(r);let s;return a===void 0?(s=new Qa(e),n.set(r,[s])):o>=a.length?(s=new Qa(e),a.push(s)):s=a[o],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F_=`uniform sampler2D shadow_pass;
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
}`;function B_(e,n,t){let i=new Js;const r=new xt,o=new xt,a=new At,s=new Hl({depthPacking:Gl}),p=new Vl,c={},f=t.maxTextureSize,E={[_i]:Ft,[Ft]:_i,[on]:on},m=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:k_,fragmentShader:F_}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new Qs;y.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qe(y,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let l=this.type;this.render=function(P,A,k){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||P.length===0)return;const v=e.getRenderTarget(),_=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),z=e.state;z.setBlending(An),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=l!==tn&&this.type===tn,Y=l===tn&&this.type!==tn;for(let $=0,W=P.length;$<W;$++){const Q=P[$],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const _e=B.getFrameExtents();if(r.multiply(_e),o.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/_e.x),r.x=o.x*_e.x,B.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/_e.y),r.y=o.y*_e.y,B.mapSize.y=o.y)),B.map===null||H===!0||Y===!0){const Ue=this.type!==tn?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new qn(r.x,r.y,Ue),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const ye=B.getViewportCount();for(let Ue=0;Ue<ye;Ue++){const Ye=B.getViewport(Ue);a.set(o.x*Ye.x,o.y*Ye.y,o.x*Ye.z,o.y*Ye.w),z.viewport(a),B.updateMatrices(Q,Ue),i=B.getFrustum(),S(A,k,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===tn&&D(B,k),B.needsUpdate=!1}l=this.type,d.needsUpdate=!1,e.setRenderTarget(v,_,T)};function D(P,A){const k=n.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qn(r.x,r.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(A,null,k,m,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(A,null,k,g,w,null)}function M(P,A,k,v){let _=null;const T=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)_=T;else if(_=k.isPointLight===!0?p:s,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=_.uuid,H=A.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let $=Y[H];$===void 0&&($=_.clone(),Y[H]=$,A.addEventListener("dispose",N)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,v===tn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:E[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=e.properties.get(_);z.light=k}return _}function S(P,A,k,v,_){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===tn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const H=n.update(P),Y=P.material;if(Array.isArray(Y)){const $=H.groups;for(let W=0,Q=$.length;W<Q;W++){const B=$[W],_e=Y[B.materialIndex];if(_e&&_e.visible){const ye=M(P,_e,v,_);P.onBeforeShadow(e,P,A,k,H,ye,B),e.renderBufferDirect(k,null,H,ye,P,B),P.onAfterShadow(e,P,A,k,H,ye,B)}}}else if(Y.visible){const $=M(P,Y,v,_);P.onBeforeShadow(e,P,A,k,H,$,null),e.renderBufferDirect(k,null,H,$,P,null),P.onAfterShadow(e,P,A,k,H,$,null)}}const z=P.children;for(let H=0,Y=z.length;H<Y;H++)S(z[H],A,k,v,_)}function N(P){P.target.removeEventListener("dispose",N);for(const k in c){const v=c[k],_=P.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const H_={[co]:so,[ao]:io,[oo]:no,[or]:ro,[so]:co,[io]:ao,[no]:oo,[ro]:or};function G_(e,n){function t(){let R=!1;const te=new At;let F=null;const q=new At(0,0,0,0);return{setMask:function(ae){F!==ae&&!R&&(e.colorMask(ae,ae,ae,ae),F=ae)},setLocked:function(ae){R=ae},setClear:function(ae,oe,Le,st,St){St===!0&&(ae*=st,oe*=st,Le*=st),te.set(ae,oe,Le,st),q.equals(te)===!1&&(e.clearColor(ae,oe,Le,st),q.copy(te))},reset:function(){R=!1,F=null,q.set(-1,0,0,0)}}}function i(){let R=!1,te=!1,F=null,q=null,ae=null;return{setReversed:function(oe){if(te!==oe){const Le=n.get("EXT_clip_control");te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const st=ae;ae=null,this.setClear(st)}te=oe},getReversed:function(){return te},setTest:function(oe){oe?ie(e.DEPTH_TEST):be(e.DEPTH_TEST)},setMask:function(oe){F!==oe&&!R&&(e.depthMask(oe),F=oe)},setFunc:function(oe){if(te&&(oe=H_[oe]),q!==oe){switch(oe){case co:e.depthFunc(e.NEVER);break;case so:e.depthFunc(e.ALWAYS);break;case ao:e.depthFunc(e.LESS);break;case or:e.depthFunc(e.LEQUAL);break;case oo:e.depthFunc(e.EQUAL);break;case ro:e.depthFunc(e.GEQUAL);break;case io:e.depthFunc(e.GREATER);break;case no:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=oe}},setLocked:function(oe){R=oe},setClear:function(oe){ae!==oe&&(te&&(oe=1-oe),e.clearDepth(oe),ae=oe)},reset:function(){R=!1,F=null,q=null,ae=null,te=!1}}}function r(){let R=!1,te=null,F=null,q=null,ae=null,oe=null,Le=null,st=null,St=null;return{setTest:function(je){R||(je?ie(e.STENCIL_TEST):be(e.STENCIL_TEST))},setMask:function(je){te!==je&&!R&&(e.stencilMask(je),te=je)},setFunc:function(je,Ht,Qt){(F!==je||q!==Ht||ae!==Qt)&&(e.stencilFunc(je,Ht,Qt),F=je,q=Ht,ae=Qt)},setOp:function(je,Ht,Qt){(oe!==je||Le!==Ht||st!==Qt)&&(e.stencilOp(je,Ht,Qt),oe=je,Le=Ht,st=Qt)},setLocked:function(je){R=je},setClear:function(je){St!==je&&(e.clearStencil(je),St=je)},reset:function(){R=!1,te=null,F=null,q=null,ae=null,oe=null,Le=null,st=null,St=null}}}const o=new t,a=new i,s=new r,p=new WeakMap,c=new WeakMap;let f={},E={},m=new WeakMap,g=[],y=null,w=!1,d=null,l=null,D=null,M=null,S=null,N=null,P=null,A=new nt(0,0,0),k=0,v=!1,_=null,T=null,z=null,H=null,Y=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=Q>=2);let _e=null,ye={};const Ue=e.getParameter(e.SCISSOR_BOX),Ye=e.getParameter(e.VIEWPORT),at=new At().fromArray(Ue),V=new At().fromArray(Ye);function J(R,te,F,q){const ae=new Uint8Array(4),oe=e.createTexture();e.bindTexture(R,oe),e.texParameteri(R,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(R,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Le=0;Le<F;Le++)R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,q,0,e.RGBA,e.UNSIGNED_BYTE,ae):e.texImage2D(te+Le,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ae);return oe}const ue={};ue[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),a.setFunc(or),Fe(!1),Be(ta),ie(e.CULL_FACE),b(An);function ie(R){f[R]!==!0&&(e.enable(R),f[R]=!0)}function be(R){f[R]!==!1&&(e.disable(R),f[R]=!1)}function Ce(R,te){return E[R]!==te?(e.bindFramebuffer(R,te),E[R]=te,R===e.DRAW_FRAMEBUFFER&&(E[e.FRAMEBUFFER]=te),R===e.FRAMEBUFFER&&(E[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(R,te){let F=g,q=!1;if(R){F=m.get(te),F===void 0&&(F=[],m.set(te,F));const ae=R.textures;if(F.length!==ae.length||F[0]!==e.COLOR_ATTACHMENT0){for(let oe=0,Le=ae.length;oe<Le;oe++)F[oe]=e.COLOR_ATTACHMENT0+oe;F.length=ae.length,q=!0}}else F[0]!==e.BACK&&(F[0]=e.BACK,q=!0);q&&e.drawBuffers(F)}function ot(R){return y!==R?(e.useProgram(R),y=R,!0):!1}const Ge={[ni]:e.FUNC_ADD,[zl]:e.FUNC_SUBTRACT,[Wl]:e.FUNC_REVERSE_SUBTRACT};Ge[Bf]=e.MIN,Ge[Hf]=e.MAX;const lt={[Xl]:e.ZERO,[ql]:e.ONE,[Yl]:e.SRC_COLOR,[Kl]:e.SRC_ALPHA,[Zl]:e.SRC_ALPHA_SATURATE,[$l]:e.DST_COLOR,[jl]:e.DST_ALPHA,[Jl]:e.ONE_MINUS_SRC_COLOR,[Ql]:e.ONE_MINUS_SRC_ALPHA,[ef]:e.ONE_MINUS_DST_COLOR,[tf]:e.ONE_MINUS_DST_ALPHA,[nf]:e.CONSTANT_COLOR,[rf]:e.ONE_MINUS_CONSTANT_COLOR,[of]:e.CONSTANT_ALPHA,[af]:e.ONE_MINUS_CONSTANT_ALPHA};function b(R,te,F,q,ae,oe,Le,st,St,je){if(R===An){w===!0&&(be(e.BLEND),w=!1);return}if(w===!1&&(ie(e.BLEND),w=!0),R!==Mf){if(R!==d||je!==v){if((l!==ni||S!==ni)&&(e.blendEquation(e.FUNC_ADD),l=ni,S=ni),je)switch(R){case ji:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ea:e.blendFunc(e.ONE,e.ONE);break;case Qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Jo:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ji:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ea:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Jo:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}D=null,M=null,N=null,P=null,A.set(0,0,0),k=0,d=R,v=je}return}ae=ae||te,oe=oe||F,Le=Le||q,(te!==l||ae!==S)&&(e.blendEquationSeparate(Ge[te],Ge[ae]),l=te,S=ae),(F!==D||q!==M||oe!==N||Le!==P)&&(e.blendFuncSeparate(lt[F],lt[q],lt[oe],lt[Le]),D=F,M=q,N=oe,P=Le),(st.equals(A)===!1||St!==k)&&(e.blendColor(st.r,st.g,st.b,St),A.copy(st),k=St),d=R,v=!1}function It(R,te){R.side===on?be(e.CULL_FACE):ie(e.CULL_FACE);let F=R.side===Ft;te&&(F=!F),Fe(F),R.blending===ji&&R.transparent===!1?b(An):b(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),o.setMask(R.colorWrite);const q=R.stencilWrite;s.setTest(q),q&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){_!==R&&(R?e.frontFace(e.CW):e.frontFace(e.CCW),_=R)}function Be(R){R!==bf?(ie(e.CULL_FACE),R!==T&&(R===ta?e.cullFace(e.BACK):R===Tf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):be(e.CULL_FACE),T=R}function me(R){R!==z&&(W&&e.lineWidth(R),z=R)}function et(R,te,F){R?(ie(e.POLYGON_OFFSET_FILL),(H!==te||Y!==F)&&(e.polygonOffset(te,F),H=te,Y=F)):be(e.POLYGON_OFFSET_FILL)}function pe(R){R?ie(e.SCISSOR_TEST):be(e.SCISSOR_TEST)}function x(R){R===void 0&&(R=e.TEXTURE0+$-1),_e!==R&&(e.activeTexture(R),_e=R)}function u(R,te,F){F===void 0&&(_e===null?F=e.TEXTURE0+$-1:F=_e);let q=ye[F];q===void 0&&(q={type:void 0,texture:void 0},ye[F]=q),(q.type!==R||q.texture!==te)&&(_e!==F&&(e.activeTexture(F),_e=F),e.bindTexture(R,te||ue[R]),q.type=R,q.texture=te)}function I(){const R=ye[_e];R!==void 0&&R.type!==void 0&&(e.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{e.compressedTexImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{e.texSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{e.texSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{e.texStorage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{e.texStorage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{e.texImage2D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{e.texImage3D.apply(e,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(R){at.equals(R)===!1&&(e.scissor(R.x,R.y,R.z,R.w),at.copy(R))}function fe(R){V.equals(R)===!1&&(e.viewport(R.x,R.y,R.z,R.w),V.copy(R))}function He(R,te){let F=c.get(te);F===void 0&&(F=new WeakMap,c.set(te,F));let q=F.get(R);q===void 0&&(q=e.getUniformBlockIndex(te,R.name),F.set(R,q))}function Pe(R,te){const q=c.get(te).get(R);p.get(te)!==q&&(e.uniformBlockBinding(te,q,R.__bindingPointIndex),p.set(te,q))}function Je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},_e=null,ye={},E={},m=new WeakMap,g=[],y=null,w=!1,d=null,l=null,D=null,M=null,S=null,N=null,P=null,A=new nt(0,0,0),k=0,v=!1,_=null,T=null,z=null,H=null,Y=null,at.set(0,0,e.canvas.width,e.canvas.height),V.set(0,0,e.canvas.width,e.canvas.height),o.reset(),a.reset(),s.reset()}return{buffers:{color:o,depth:a,stencil:s},enable:ie,disable:be,bindFramebuffer:Ce,drawBuffers:Ne,useProgram:ot,setBlending:b,setMaterial:It,setFlipSided:Fe,setCullFace:Be,setLineWidth:me,setPolygonOffset:et,setScissorTest:pe,activeTexture:x,bindTexture:u,unbindTexture:I,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:le,texImage3D:Se,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ve,texStorage3D:j,texSubImage2D:G,texSubImage3D:he,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:we,viewport:fe,reset:Je}}function V_(e,n,t,i,r,o,a){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,f=new WeakMap;let E;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(x,u){return g?new OffscreenCanvas(x,u):Zf("canvas")}function w(x,u,I){let X=1;const K=pe(x);if((K.width>I||K.height>I)&&(X=I/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(X*K.width),he=Math.floor(X*K.height);E===void 0&&(E=y(G,he));const re=u?y(G,he):E;return re.width=G,re.height=he,re.getContext("2d").drawImage(x,0,0,G,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+he+")."),re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),x;return x}function d(x){return x.generateMipmaps}function l(x){e.generateMipmap(x)}function D(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(x,u,I,X,K=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=u;if(u===e.RED&&(I===e.FLOAT&&(G=e.R32F),I===e.HALF_FLOAT&&(G=e.R16F),I===e.UNSIGNED_BYTE&&(G=e.R8)),u===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.R8UI),I===e.UNSIGNED_SHORT&&(G=e.R16UI),I===e.UNSIGNED_INT&&(G=e.R32UI),I===e.BYTE&&(G=e.R8I),I===e.SHORT&&(G=e.R16I),I===e.INT&&(G=e.R32I)),u===e.RG&&(I===e.FLOAT&&(G=e.RG32F),I===e.HALF_FLOAT&&(G=e.RG16F),I===e.UNSIGNED_BYTE&&(G=e.RG8)),u===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RG8UI),I===e.UNSIGNED_SHORT&&(G=e.RG16UI),I===e.UNSIGNED_INT&&(G=e.RG32UI),I===e.BYTE&&(G=e.RG8I),I===e.SHORT&&(G=e.RG16I),I===e.INT&&(G=e.RG32I)),u===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGB8UI),I===e.UNSIGNED_SHORT&&(G=e.RGB16UI),I===e.UNSIGNED_INT&&(G=e.RGB32UI),I===e.BYTE&&(G=e.RGB8I),I===e.SHORT&&(G=e.RGB16I),I===e.INT&&(G=e.RGB32I)),u===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),I===e.UNSIGNED_INT&&(G=e.RGBA32UI),I===e.BYTE&&(G=e.RGBA8I),I===e.SHORT&&(G=e.RGBA16I),I===e.INT&&(G=e.RGBA32I)),u===e.RGB&&I===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),u===e.RGBA){const he=K?uc:dt.getTransfer(X);I===e.FLOAT&&(G=e.RGBA32F),I===e.HALF_FLOAT&&(G=e.RGBA16F),I===e.UNSIGNED_BYTE&&(G=he===tt?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&n.get("EXT_color_buffer_float"),G}function S(x,u){let I;return x?u===null||u===gi||u===mi?I=e.DEPTH24_STENCIL8:u===bn?I=e.DEPTH32F_STENCIL8:u===ar&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===gi||u===mi?I=e.DEPTH_COMPONENT24:u===bn?I=e.DEPTH_COMPONENT32F:u===ar&&(I=e.DEPTH_COMPONENT16),I}function N(x,u){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==cn&&x.minFilter!==Vn?Math.log2(Math.max(u.width,u.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?u.mipmaps.length:1}function P(x){const u=x.target;u.removeEventListener("dispose",P),k(u),u.isVideoTexture&&f.delete(u)}function A(x){const u=x.target;u.removeEventListener("dispose",A),_(u)}function k(x){const u=i.get(x);if(u.__webglInit===void 0)return;const I=x.source,X=m.get(I);if(X){const K=X[u.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(x),Object.keys(X).length===0&&m.delete(I)}i.remove(x)}function v(x){const u=i.get(x);e.deleteTexture(u.__webglTexture);const I=x.source,X=m.get(I);delete X[u.__cacheKey],a.memory.textures--}function _(x){const u=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(u.__webglFramebuffer[X]))for(let K=0;K<u.__webglFramebuffer[X].length;K++)e.deleteFramebuffer(u.__webglFramebuffer[X][K]);else e.deleteFramebuffer(u.__webglFramebuffer[X]);u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer[X])}else{if(Array.isArray(u.__webglFramebuffer))for(let X=0;X<u.__webglFramebuffer.length;X++)e.deleteFramebuffer(u.__webglFramebuffer[X]);else e.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&e.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let X=0;X<u.__webglColorRenderbuffer.length;X++)u.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(u.__webglColorRenderbuffer[X]);u.__webglDepthRenderbuffer&&e.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const I=x.textures;for(let X=0,K=I.length;X<K;X++){const G=i.get(I[X]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(I[X])}i.remove(x)}let T=0;function z(){T=0}function H(){const x=T;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),T+=1,x}function Y(x){const u=[];return u.push(x.wrapS),u.push(x.wrapT),u.push(x.wrapR||0),u.push(x.magFilter),u.push(x.minFilter),u.push(x.anisotropy),u.push(x.internalFormat),u.push(x.format),u.push(x.type),u.push(x.generateMipmaps),u.push(x.premultiplyAlpha),u.push(x.flipY),u.push(x.unpackAlignment),u.push(x.colorSpace),u.join()}function $(x,u){const I=i.get(x);if(x.isVideoTexture&&me(x),x.isRenderTargetTexture===!1&&x.version>0&&I.__version!==x.version){const X=x.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(I,x,u);return}}t.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+u)}function W(x,u){const I=i.get(x);if(x.version>0&&I.__version!==x.version){V(I,x,u);return}t.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+u)}function Q(x,u){const I=i.get(x);if(x.version>0&&I.__version!==x.version){V(I,x,u);return}t.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+u)}function B(x,u){const I=i.get(x);if(x.version>0&&I.__version!==x.version){J(I,x,u);return}t.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+u)}const _e={[sf]:e.REPEAT,[cf]:e.CLAMP_TO_EDGE,[lf]:e.MIRRORED_REPEAT},ye={[cn]:e.NEAREST,[ff]:e.NEAREST_MIPMAP_NEAREST,[Fi]:e.NEAREST_MIPMAP_LINEAR,[Vn]:e.LINEAR,[Mr]:e.LINEAR_MIPMAP_NEAREST,[oi]:e.LINEAR_MIPMAP_LINEAR},Ue={[df]:e.NEVER,[uf]:e.ALWAYS,[hf]:e.LESS,[tc]:e.LEQUAL,[pf]:e.EQUAL,[_f]:e.GEQUAL,[mf]:e.GREATER,[gf]:e.NOTEQUAL};function Ye(x,u){if(u.type===bn&&n.has("OES_texture_float_linear")===!1&&(u.magFilter===Vn||u.magFilter===Mr||u.magFilter===Fi||u.magFilter===oi||u.minFilter===Vn||u.minFilter===Mr||u.minFilter===Fi||u.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,_e[u.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,_e[u.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,_e[u.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,ye[u.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,ye[u.minFilter]),u.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,Ue[u.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===cn||u.minFilter!==Fi&&u.minFilter!==oi||u.type===bn&&n.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const I=n.get("EXT_texture_filter_anisotropic");e.texParameterf(x,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,r.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function at(x,u){let I=!1;x.__webglInit===void 0&&(x.__webglInit=!0,u.addEventListener("dispose",P));const X=u.source;let K=m.get(X);K===void 0&&(K={},m.set(X,K));const G=Y(u);if(G!==x.__cacheKey){K[G]===void 0&&(K[G]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,I=!0),K[G].usedTimes++;const he=K[x.__cacheKey];he!==void 0&&(K[x.__cacheKey].usedTimes--,he.usedTimes===0&&v(u)),x.__cacheKey=G,x.__webglTexture=K[G].texture}return I}function V(x,u,I){let X=e.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),u.isData3DTexture&&(X=e.TEXTURE_3D);const K=at(x,u),G=u.source;t.bindTexture(X,x.__webglTexture,e.TEXTURE0+I);const he=i.get(G);if(G.version!==he.__version||K===!0){t.activeTexture(e.TEXTURE0+I);const re=dt.getPrimaries(dt.workingColorSpace),ce=u.colorSpace===Gn?null:dt.getPrimaries(u.colorSpace),Ve=u.colorSpace===Gn||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let j=w(u.image,!1,r.maxTextureSize);j=et(u,j);const le=o.convert(u.format,u.colorSpace),Se=o.convert(u.type);let we=M(u.internalFormat,le,Se,u.colorSpace,u.isVideoTexture);Ye(X,u);let fe;const He=u.mipmaps,Pe=u.isVideoTexture!==!0,Je=he.__version===void 0||K===!0,R=G.dataReady,te=N(u,j);if(u.isDepthTexture)we=S(u.format===rr,u.type),Je&&(Pe?t.texStorage2D(e.TEXTURE_2D,1,we,j.width,j.height):t.texImage2D(e.TEXTURE_2D,0,we,j.width,j.height,0,le,Se,null));else if(u.isDataTexture)if(He.length>0){Pe&&Je&&t.texStorage2D(e.TEXTURE_2D,te,we,He[0].width,He[0].height);for(let F=0,q=He.length;F<q;F++)fe=He[F],Pe?R&&t.texSubImage2D(e.TEXTURE_2D,F,0,0,fe.width,fe.height,le,Se,fe.data):t.texImage2D(e.TEXTURE_2D,F,we,fe.width,fe.height,0,le,Se,fe.data);u.generateMipmaps=!1}else Pe?(Je&&t.texStorage2D(e.TEXTURE_2D,te,we,j.width,j.height),R&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,j.width,j.height,le,Se,j.data)):t.texImage2D(e.TEXTURE_2D,0,we,j.width,j.height,0,le,Se,j.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){Pe&&Je&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,we,He[0].width,He[0].height,j.depth);for(let F=0,q=He.length;F<q;F++)if(fe=He[F],u.format!==an)if(le!==null)if(Pe){if(R)if(u.layerUpdates.size>0){const ae=na(fe.width,fe.height,u.format,u.type);for(const oe of u.layerUpdates){const Le=fe.data.subarray(oe*ae/fe.data.BYTES_PER_ELEMENT,(oe+1)*ae/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,F,0,0,oe,fe.width,fe.height,1,le,Le)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,F,0,0,0,fe.width,fe.height,j.depth,le,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,F,we,fe.width,fe.height,j.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?R&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,F,0,0,0,fe.width,fe.height,j.depth,le,Se,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,F,we,fe.width,fe.height,j.depth,0,le,Se,fe.data)}else{Pe&&Je&&t.texStorage2D(e.TEXTURE_2D,te,we,He[0].width,He[0].height);for(let F=0,q=He.length;F<q;F++)fe=He[F],u.format!==an?le!==null?Pe?R&&t.compressedTexSubImage2D(e.TEXTURE_2D,F,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,F,we,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?R&&t.texSubImage2D(e.TEXTURE_2D,F,0,0,fe.width,fe.height,le,Se,fe.data):t.texImage2D(e.TEXTURE_2D,F,we,fe.width,fe.height,0,le,Se,fe.data)}else if(u.isDataArrayTexture)if(Pe){if(Je&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,we,j.width,j.height,j.depth),R)if(u.layerUpdates.size>0){const F=na(j.width,j.height,u.format,u.type);for(const q of u.layerUpdates){const ae=j.data.subarray(q*F/j.data.BYTES_PER_ELEMENT,(q+1)*F/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,j.width,j.height,1,le,Se,ae)}u.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,le,Se,j.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,we,j.width,j.height,j.depth,0,le,Se,j.data);else if(u.isData3DTexture)Pe?(Je&&t.texStorage3D(e.TEXTURE_3D,te,we,j.width,j.height,j.depth),R&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,le,Se,j.data)):t.texImage3D(e.TEXTURE_3D,0,we,j.width,j.height,j.depth,0,le,Se,j.data);else if(u.isFramebufferTexture){if(Je)if(Pe)t.texStorage2D(e.TEXTURE_2D,te,we,j.width,j.height);else{let F=j.width,q=j.height;for(let ae=0;ae<te;ae++)t.texImage2D(e.TEXTURE_2D,ae,we,F,q,0,le,Se,null),F>>=1,q>>=1}}else if(He.length>0){if(Pe&&Je){const F=pe(He[0]);t.texStorage2D(e.TEXTURE_2D,te,we,F.width,F.height)}for(let F=0,q=He.length;F<q;F++)fe=He[F],Pe?R&&t.texSubImage2D(e.TEXTURE_2D,F,0,0,le,Se,fe):t.texImage2D(e.TEXTURE_2D,F,we,le,Se,fe);u.generateMipmaps=!1}else if(Pe){if(Je){const F=pe(j);t.texStorage2D(e.TEXTURE_2D,te,we,F.width,F.height)}R&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Se,j)}else t.texImage2D(e.TEXTURE_2D,0,we,le,Se,j);d(u)&&l(X),he.__version=G.version,u.onUpdate&&u.onUpdate(u)}x.__version=u.version}function J(x,u,I){if(u.image.length!==6)return;const X=at(x,u),K=u.source;t.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+I);const G=i.get(K);if(K.version!==G.__version||X===!0){t.activeTexture(e.TEXTURE0+I);const he=dt.getPrimaries(dt.workingColorSpace),re=u.colorSpace===Gn?null:dt.getPrimaries(u.colorSpace),ce=u.colorSpace===Gn||he===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ve=u.isCompressedTexture||u.image[0].isCompressedTexture,j=u.image[0]&&u.image[0].isDataTexture,le=[];for(let q=0;q<6;q++)!Ve&&!j?le[q]=w(u.image[q],!0,r.maxCubemapSize):le[q]=j?u.image[q].image:u.image[q],le[q]=et(u,le[q]);const Se=le[0],we=o.convert(u.format,u.colorSpace),fe=o.convert(u.type),He=M(u.internalFormat,we,fe,u.colorSpace),Pe=u.isVideoTexture!==!0,Je=G.__version===void 0||X===!0,R=K.dataReady;let te=N(u,Se);Ye(e.TEXTURE_CUBE_MAP,u);let F;if(Ve){Pe&&Je&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,He,Se.width,Se.height);for(let q=0;q<6;q++){F=le[q].mipmaps;for(let ae=0;ae<F.length;ae++){const oe=F[ae];u.format!==an?we!==null?Pe?R&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,oe.width,oe.height,we,oe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,He,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?R&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,oe.width,oe.height,we,fe,oe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,He,oe.width,oe.height,0,we,fe,oe.data)}}}else{if(F=u.mipmaps,Pe&&Je){F.length>0&&te++;const q=pe(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,He,q.width,q.height)}for(let q=0;q<6;q++)if(j){Pe?R&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,le[q].width,le[q].height,we,fe,le[q].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,le[q].width,le[q].height,0,we,fe,le[q].data);for(let ae=0;ae<F.length;ae++){const Le=F[ae].image[q].image;Pe?R&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Le.width,Le.height,we,fe,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,He,Le.width,Le.height,0,we,fe,Le.data)}}else{Pe?R&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,fe,le[q]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,we,fe,le[q]);for(let ae=0;ae<F.length;ae++){const oe=F[ae];Pe?R&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,we,fe,oe.image[q]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,He,we,fe,oe.image[q])}}}d(u)&&l(e.TEXTURE_CUBE_MAP),G.__version=K.version,u.onUpdate&&u.onUpdate(u)}x.__version=u.version}function ue(x,u,I,X,K,G){const he=o.convert(I.format,I.colorSpace),re=o.convert(I.type),ce=M(I.internalFormat,he,re,I.colorSpace),Ve=i.get(u),j=i.get(I);if(j.__renderTarget=u,!Ve.__hasExternalTextures){const le=Math.max(1,u.width>>G),Se=Math.max(1,u.height>>G);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,G,ce,le,Se,u.depth,0,he,re,null):t.texImage2D(K,G,ce,le,Se,0,he,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,x),Be(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,K,j.__webglTexture,0,Fe(u)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,K,j.__webglTexture,G),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(x,u,I){if(e.bindRenderbuffer(e.RENDERBUFFER,x),u.depthBuffer){const X=u.depthTexture,K=X&&X.isDepthTexture?X.type:null,G=S(u.stencilBuffer,K),he=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Fe(u);Be(u)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,G,u.width,u.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,G,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,G,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,x)}else{const X=u.textures;for(let K=0;K<X.length;K++){const G=X[K],he=o.convert(G.format,G.colorSpace),re=o.convert(G.type),ce=M(G.internalFormat,he,re,G.colorSpace),Ve=Fe(u);I&&Be(u)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ve,ce,u.width,u.height):Be(u)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ve,ce,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,ce,u.width,u.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(x,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,x),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(u.depthTexture);X.__renderTarget=u,(!X.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),$(u.depthTexture,0);const K=X.__webglTexture,G=Fe(u);if(u.depthTexture.format===Ro)Be(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(u.depthTexture.format===rr)Be(u)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ce(x){const u=i.get(x),I=x.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==x.depthTexture){const X=x.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),X){const K=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),u.__depthDisposeCallback=K}u.__boundDepthTexture=X}if(x.depthTexture&&!u.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");be(u.__webglFramebuffer,x)}else if(I){u.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[X]),u.__webglDepthbuffer[X]===void 0)u.__webglDepthbuffer[X]=e.createRenderbuffer(),ie(u.__webglDepthbuffer[X],x,!1);else{const K=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=u.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,G)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=e.createRenderbuffer(),ie(u.__webglDepthbuffer,x,!1);else{const X=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=u.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(x,u,I){const X=i.get(x);u!==void 0&&ue(X.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ce(x)}function ot(x){const u=x.texture,I=i.get(x),X=i.get(u);x.addEventListener("dispose",A);const K=x.textures,G=x.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=u.version,a.memory.textures++),G){I.__webglFramebuffer=[];for(let re=0;re<6;re++)if(u.mipmaps&&u.mipmaps.length>0){I.__webglFramebuffer[re]=[];for(let ce=0;ce<u.mipmaps.length;ce++)I.__webglFramebuffer[re][ce]=e.createFramebuffer()}else I.__webglFramebuffer[re]=e.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){I.__webglFramebuffer=[];for(let re=0;re<u.mipmaps.length;re++)I.__webglFramebuffer[re]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(he)for(let re=0,ce=K.length;re<ce;re++){const Ve=i.get(K[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=e.createTexture(),a.memory.textures++)}if(x.samples>0&&Be(x)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];I.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[re]);const Ve=o.convert(ce.format,ce.colorSpace),j=o.convert(ce.type),le=M(ce.internalFormat,Ve,j,ce.colorSpace,x.isXRRenderTarget===!0),Se=Fe(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Se,le,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,I.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(I.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){t.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Ye(e.TEXTURE_CUBE_MAP,u);for(let re=0;re<6;re++)if(u.mipmaps&&u.mipmaps.length>0)for(let ce=0;ce<u.mipmaps.length;ce++)ue(I.__webglFramebuffer[re][ce],x,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else ue(I.__webglFramebuffer[re],x,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);d(u)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let re=0,ce=K.length;re<ce;re++){const Ve=K[re],j=i.get(Ve);t.bindTexture(e.TEXTURE_2D,j.__webglTexture),Ye(e.TEXTURE_2D,Ve),ue(I.__webglFramebuffer,x,Ve,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),d(Ve)&&l(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(re=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,X.__webglTexture),Ye(re,u),u.mipmaps&&u.mipmaps.length>0)for(let ce=0;ce<u.mipmaps.length;ce++)ue(I.__webglFramebuffer[ce],x,u,e.COLOR_ATTACHMENT0,re,ce);else ue(I.__webglFramebuffer,x,u,e.COLOR_ATTACHMENT0,re,0);d(u)&&l(re),t.unbindTexture()}x.depthBuffer&&Ce(x)}function Ge(x){const u=x.textures;for(let I=0,X=u.length;I<X;I++){const K=u[I];if(d(K)){const G=D(x),he=i.get(K).__webglTexture;t.bindTexture(G,he),l(G),t.unbindTexture()}}}const lt=[],b=[];function It(x){if(x.samples>0){if(Be(x)===!1){const u=x.textures,I=x.width,X=x.height;let K=e.COLOR_BUFFER_BIT;const G=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,he=i.get(x),re=u.length>1;if(re)for(let ce=0;ce<u.length;ce++)t.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<u.length;ce++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const Ve=i.get(u[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ve,0)}e.blitFramebuffer(0,0,I,X,0,0,I,X,K,e.NEAREST),p===!0&&(lt.length=0,b.length=0,lt.push(e.COLOR_ATTACHMENT0+ce),x.depthBuffer&&x.resolveDepthBuffer===!1&&(lt.push(G),b.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,b)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<u.length;ce++){t.bindFramebuffer(e.FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const Ve=i.get(u[ce]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,he.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,Ve,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&p){const u=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])}}}function Fe(x){return Math.min(r.maxSamples,x.samples)}function Be(x){const u=i.get(x);return x.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function me(x){const u=a.render.frame;f.get(x)!==u&&(f.set(x,u),x.update())}function et(x,u){const I=x.colorSpace,X=x.format,K=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||I!==dr&&I!==Gn&&(dt.getTransfer(I)===tt?(X!==an||K!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),u}function pe(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Be}function z_(e,n){function t(i,r=Gn){let o;const a=dt.getTransfer(r);if(i===Rn)return e.UNSIGNED_BYTE;if(i===oc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ac)return e.UNSIGNED_SHORT_5_5_5_1;if(i===yf)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===wf)return e.BYTE;if(i===Af)return e.SHORT;if(i===ar)return e.UNSIGNED_SHORT;if(i===lc)return e.INT;if(i===gi)return e.UNSIGNED_INT;if(i===bn)return e.FLOAT;if(i===fr)return e.HALF_FLOAT;if(i===Rf)return e.ALPHA;if(i===Cf)return e.RGB;if(i===an)return e.RGBA;if(i===Df)return e.LUMINANCE;if(i===Lf)return e.LUMINANCE_ALPHA;if(i===Ro)return e.DEPTH_COMPONENT;if(i===rr)return e.DEPTH_STENCIL;if(i===Pf)return e.RED;if(i===rc)return e.RED_INTEGER;if(i===If)return e.RG;if(i===ic)return e.RG_INTEGER;if(i===nc)return e.RGBA_INTEGER;if(i===br||i===Tr||i===yr||i===wr)if(a===tt)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===br)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===br)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ia||i===ra||i===oa||i===aa)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ia)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ra)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===aa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sa||i===ca||i===la)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===sa||i===ca)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===la)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fa||i===da||i===ua||i===ha||i===pa||i===_a||i===ma||i===ga||i===va||i===Ea||i===Sa||i===xa||i===Ma||i===ba)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===fa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ua)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ha)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_a)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ma)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ga)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===va)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ea)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ma)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ar||i===Ta||i===ya)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Ar)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ta)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ya)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===wa||i===Aa||i===Ra)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ar)return o.COMPRESSED_RED_RGTC1_EXT;if(i===wa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ra)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mi?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const W_={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Re),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let r=null,o=null,a=null;const s=this._targetRay,p=this._grip,c=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(c&&n.hand){a=!0;for(const w of n.hand.values()){const d=t.getJointPose(w,i),l=this._getHandJoint(c,w);d!==null&&(l.matrix.fromArray(d.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=d.radius),l.visible=d!==null}const f=c.joints["index-finger-tip"],E=c.joints["thumb-tip"],m=f.position.distanceTo(E.position),g=.02,y=.005;c.inputState.pinching&&m>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&m<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(o=t.getPose(n.gripSpace,i),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));s!==null&&(r=t.getPose(n.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return s!==null&&(s.visible=r!==null),p!==null&&(p.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const i=new sn;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
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

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const r=new dc,o=n.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Cn({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends Ol{constructor(n,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",p=1,c=null,f=null,E=null,m=null,g=null,y=null;const w=new Y_,d=t.getContextAttributes();let l=null,D=null;const M=[],S=[],N=new xt;let P=null;const A=new fi;A.viewport=new At;const k=new fi;k.viewport=new At;const v=[A,k],_=new kl;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=M[V];return J===void 0&&(J=new Ur,M[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=M[V];return J===void 0&&(J=new Ur,M[V]=J),J.getGripSpace()},this.getHand=function(V){let J=M[V];return J===void 0&&(J=new Ur,M[V]=J),J.getHandSpace()};function H(V){const J=S.indexOf(V.inputSource);if(J===-1)return;const ue=M[J];ue!==void 0&&(ue.update(V.inputSource,V.frame,c||a),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let V=0;V<M.length;V++){const J=S[V];J!==null&&(S[V]=null,M[V].disconnect(J))}T=null,z=null,w.reset(),n.setRenderTarget(l),g=null,m=null,E=null,r=null,D=null,at.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return E},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(l=n.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(N),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ue=null,ie=null,be=null;d.depth&&(be=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=d.stencil?rr:Ro,ie=d.stencil?mi:gi);const Ce={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};E=new XRWebGLBinding(r,t),m=E.createProjectionLayer(Ce),r.updateRenderState({layers:[m]}),n.setPixelRatio(1),n.setSize(m.textureWidth,m.textureHeight,!1),D=new qn(m.textureWidth,m.textureHeight,{format:an,type:Rn,depthTexture:new js(m.textureWidth,m.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,colorSpace:n.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}else{const ue={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:g}),n.setPixelRatio(1),n.setSize(g.framebufferWidth,g.framebufferHeight,!1),D=new qn(g.framebufferWidth,g.framebufferHeight,{format:an,type:Rn,colorSpace:n.outputColorSpace,stencilBuffer:d.stencil})}D.isXRRenderTarget=!0,this.setFoveation(p),c=null,a=await r.requestReferenceSpace(s),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function $(V){for(let J=0;J<V.removed.length;J++){const ue=V.removed[J],ie=S.indexOf(ue);ie>=0&&(S[ie]=null,M[ie].disconnect(ue))}for(let J=0;J<V.added.length;J++){const ue=V.added[J];let ie=S.indexOf(ue);if(ie===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=S.length){S.push(ue),ie=Ce;break}else if(S[Ce]===null){S[Ce]=ue,ie=Ce;break}if(ie===-1)break}const be=M[ie];be&&be.connect(ue)}}const W=new Re,Q=new Re;function B(V,J,ue){W.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(ue.matrixWorld);const ie=W.distanceTo(Q),be=J.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Ne=be[14]/(be[10]-1),ot=be[14]/(be[10]+1),Ge=(be[9]+1)/be[5],lt=(be[9]-1)/be[5],b=(be[8]-1)/be[0],It=(Ce[8]+1)/Ce[0],Fe=Ne*b,Be=Ne*It,me=ie/(-b+It),et=me*-b;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(et),V.translateZ(me),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),be[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const pe=Ne+me,x=ot+me,u=Fe-et,I=Be+(ie-et),X=Ge*ot/x*pe,K=lt*ot/x*pe;V.projectionMatrix.makePerspective(u,I,X,K,pe,x),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function _e(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let J=V.near,ue=V.far;w.texture!==null&&(w.depthNear>0&&(J=w.depthNear),w.depthFar>0&&(ue=w.depthFar)),_.near=k.near=A.near=J,_.far=k.far=A.far=ue,(T!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,z=_.far),A.layers.mask=V.layers.mask|2,k.layers.mask=V.layers.mask|4,_.layers.mask=A.layers.mask|k.layers.mask;const ie=V.parent,be=_.cameras;_e(_,ie);for(let Ce=0;Ce<be.length;Ce++)_e(be[Ce],ie);be.length===2?B(_,A,k):_.projectionMatrix.copy(A.projectionMatrix),ye(V,_,ie)};function ye(V,J,ue){ue===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Fl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(m===null&&g===null))return p},this.setFoveation=function(V){p=V,m!==null&&(m.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(_)};let Ue=null;function Ye(V,J){if(f=J.getViewerPose(c||a),y=J,f!==null){const ue=f.views;g!==null&&(n.setRenderTargetFramebuffer(D,g.framebuffer),n.setRenderTarget(D));let ie=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ie=!0);for(let Ce=0;Ce<ue.length;Ce++){const Ne=ue[Ce];let ot=null;if(g!==null)ot=g.getViewport(Ne);else{const lt=E.getViewSubImage(m,Ne);ot=lt.viewport,Ce===0&&(n.setRenderTargetTextures(D,lt.colorTexture,m.ignoreDepthValues?void 0:lt.depthStencilTexture),n.setRenderTarget(D))}let Ge=v[Ce];Ge===void 0&&(Ge=new fi,Ge.layers.enable(Ce),Ge.viewport=new At,v[Ce]=Ge),Ge.matrix.fromArray(Ne.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ne.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ot.x,ot.y,ot.width,ot.height),Ce===0&&(_.matrix.copy(Ge.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ie===!0&&_.cameras.push(Ge)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ce=E.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&w.init(n,Ce,r.renderState)}}for(let ue=0;ue<M.length;ue++){const ie=S[ue],be=M[ue];ie!==null&&be!==void 0&&be.update(ie,J,c||a)}Ue&&Ue(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const at=new pc;at.setAnimationLoop(Ye),this.setAnimationLoop=function(V){Ue=V},this.dispose=function(){}}}const Sn=new vi,Z_=new Yt;function $_(e,n){function t(d,l){d.matrixAutoUpdate===!0&&d.updateMatrix(),l.value.copy(d.matrix)}function i(d,l){l.color.getRGB(d.fogColor.value,cc(e)),l.isFog?(d.fogNear.value=l.near,d.fogFar.value=l.far):l.isFogExp2&&(d.fogDensity.value=l.density)}function r(d,l,D,M,S){l.isMeshBasicMaterial||l.isMeshLambertMaterial?o(d,l):l.isMeshToonMaterial?(o(d,l),E(d,l)):l.isMeshPhongMaterial?(o(d,l),f(d,l)):l.isMeshStandardMaterial?(o(d,l),m(d,l),l.isMeshPhysicalMaterial&&g(d,l,S)):l.isMeshMatcapMaterial?(o(d,l),y(d,l)):l.isMeshDepthMaterial?o(d,l):l.isMeshDistanceMaterial?(o(d,l),w(d,l)):l.isMeshNormalMaterial?o(d,l):l.isLineBasicMaterial?(a(d,l),l.isLineDashedMaterial&&s(d,l)):l.isPointsMaterial?p(d,l,D,M):l.isSpriteMaterial?c(d,l):l.isShadowMaterial?(d.color.value.copy(l.color),d.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function o(d,l){d.opacity.value=l.opacity,l.color&&d.diffuse.value.copy(l.color),l.emissive&&d.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.bumpMap&&(d.bumpMap.value=l.bumpMap,t(l.bumpMap,d.bumpMapTransform),d.bumpScale.value=l.bumpScale,l.side===Ft&&(d.bumpScale.value*=-1)),l.normalMap&&(d.normalMap.value=l.normalMap,t(l.normalMap,d.normalMapTransform),d.normalScale.value.copy(l.normalScale),l.side===Ft&&d.normalScale.value.negate()),l.displacementMap&&(d.displacementMap.value=l.displacementMap,t(l.displacementMap,d.displacementMapTransform),d.displacementScale.value=l.displacementScale,d.displacementBias.value=l.displacementBias),l.emissiveMap&&(d.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,d.emissiveMapTransform)),l.specularMap&&(d.specularMap.value=l.specularMap,t(l.specularMap,d.specularMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest);const D=n.get(l),M=D.envMap,S=D.envMapRotation;M&&(d.envMap.value=M,Sn.copy(S),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),d.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Sn)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=l.reflectivity,d.ior.value=l.ior,d.refractionRatio.value=l.refractionRatio),l.lightMap&&(d.lightMap.value=l.lightMap,d.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,d.lightMapTransform)),l.aoMap&&(d.aoMap.value=l.aoMap,d.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,d.aoMapTransform))}function a(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform))}function s(d,l){d.dashSize.value=l.dashSize,d.totalSize.value=l.dashSize+l.gapSize,d.scale.value=l.scale}function p(d,l,D,M){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.size.value=l.size*D,d.scale.value=M*.5,l.map&&(d.map.value=l.map,t(l.map,d.uvTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function c(d,l){d.diffuse.value.copy(l.color),d.opacity.value=l.opacity,d.rotation.value=l.rotation,l.map&&(d.map.value=l.map,t(l.map,d.mapTransform)),l.alphaMap&&(d.alphaMap.value=l.alphaMap,t(l.alphaMap,d.alphaMapTransform)),l.alphaTest>0&&(d.alphaTest.value=l.alphaTest)}function f(d,l){d.specular.value.copy(l.specular),d.shininess.value=Math.max(l.shininess,1e-4)}function E(d,l){l.gradientMap&&(d.gradientMap.value=l.gradientMap)}function m(d,l){d.metalness.value=l.metalness,l.metalnessMap&&(d.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,d.metalnessMapTransform)),d.roughness.value=l.roughness,l.roughnessMap&&(d.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,d.roughnessMapTransform)),l.envMap&&(d.envMapIntensity.value=l.envMapIntensity)}function g(d,l,D){d.ior.value=l.ior,l.sheen>0&&(d.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),d.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(d.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,d.sheenColorMapTransform)),l.sheenRoughnessMap&&(d.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,d.sheenRoughnessMapTransform))),l.clearcoat>0&&(d.clearcoat.value=l.clearcoat,d.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(d.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,d.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(d.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Ft&&d.clearcoatNormalScale.value.negate())),l.dispersion>0&&(d.dispersion.value=l.dispersion),l.iridescence>0&&(d.iridescence.value=l.iridescence,d.iridescenceIOR.value=l.iridescenceIOR,d.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(d.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,d.iridescenceMapTransform)),l.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),l.transmission>0&&(d.transmission.value=l.transmission,d.transmissionSamplerMap.value=D.texture,d.transmissionSamplerSize.value.set(D.width,D.height),l.transmissionMap&&(d.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,d.transmissionMapTransform)),d.thickness.value=l.thickness,l.thicknessMap&&(d.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=l.attenuationDistance,d.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(d.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(d.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=l.specularIntensity,d.specularColor.value.copy(l.specularColor),l.specularColorMap&&(d.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,d.specularColorMapTransform)),l.specularIntensityMap&&(d.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,d.specularIntensityMapTransform))}function y(d,l){l.matcap&&(d.matcap.value=l.matcap)}function w(d,l){const D=n.get(l).light;d.referencePosition.value.setFromMatrixPosition(D.matrixWorld),d.nearDistance.value=D.shadow.camera.near,d.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j_(e,n,t,i){let r={},o={},a=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,M){const S=M.program;i.uniformBlockBinding(D,S)}function c(D,M){let S=r[D.id];S===void 0&&(y(D),S=f(D),r[D.id]=S,D.addEventListener("dispose",d));const N=M.program;i.updateUBOMapping(D,N);const P=n.render.frame;o[D.id]!==P&&(m(D),o[D.id]=P)}function f(D){const M=E();D.__bindingPointIndex=M;const S=e.createBuffer(),N=D.__size,P=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,N,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,S),S}function E(){for(let D=0;D<s;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(D){const M=r[D.id],S=D.uniforms,N=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let P=0,A=S.length;P<A;P++){const k=Array.isArray(S[P])?S[P]:[S[P]];for(let v=0,_=k.length;v<_;v++){const T=k[v];if(g(T,P,v,N)===!0){const z=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let $=0;$<H.length;$++){const W=H[$],Q=w(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,z+Y,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,T.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function g(D,M,S,N){const P=D.value,A=M+"_"+S;if(N[A]===void 0)return typeof P=="number"||typeof P=="boolean"?N[A]=P:N[A]=P.clone(),!0;{const k=N[A];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return N[A]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function y(D){const M=D.uniforms;let S=0;const N=16;for(let A=0,k=M.length;A<k;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,T=v.length;_<T;_++){const z=v[_],H=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,$=H.length;Y<$;Y++){const W=H[Y],Q=w(W),B=S%N,_e=B%Q.boundary,ye=B+_e;S+=_e,ye!==0&&N-ye<Q.storage&&(S+=N-ye),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const P=S%N;return P>0&&(S+=N-P),D.__size=S,D.__cache={},this}function w(D){const M={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(M.boundary=4,M.storage=4):D.isVector2?(M.boundary=8,M.storage=8):D.isVector3||D.isColor?(M.boundary=16,M.storage=12):D.isVector4?(M.boundary=16,M.storage=16):D.isMatrix3?(M.boundary=48,M.storage=48):D.isMatrix4?(M.boundary=64,M.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),M}function d(D){const M=D.target;M.removeEventListener("dispose",d);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function l(){for(const D in r)e.deleteBuffer(r[D]);a=[],r={},o={}}return{bind:p,update:c,dispose:l}}class J_{constructor(n={}){const{canvas:t=Dl(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:E=!1,reverseDepthBuffer:m=!1}=n;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=new Uint32Array(4),w=new Int32Array(4);let d=null,l=null;const D=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ao,this.toneMapping=un,this.toneMappingExposure=1;const S=this;let N=!1,P=0,A=0,k=null,v=-1,_=null;const T=new At,z=new At;let H=null;const Y=new nt(0);let $=0,W=t.width,Q=t.height,B=1,_e=null,ye=null;const Ue=new At(0,0,W,Q),Ye=new At(0,0,W,Q);let at=!1;const V=new Js;let J=!1,ue=!1;this.transmissionResolutionScale=1;const ie=new Yt,be=new Yt,Ce=new Re,Ne=new At,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function lt(){return k===null?B:1}let b=i;function It(h,C){return t.getContext(h,C)}try{const h={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:p,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ll}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",oe,!1),b===null){const C="webgl2";if(b=It(C,h),b===null)throw It(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let Fe,Be,me,et,pe,x,u,I,X,K,G,he,re,ce,Ve,j,le,Se,we,fe,He,Pe,Je,R;function te(){Fe=new sp(b),Fe.init(),Pe=new z_(b,Fe),Be=new tp(b,Fe,n,Pe),me=new G_(b,Fe),Be.reverseDepthBuffer&&m&&me.buffers.depth.setReversed(!0),et=new fp(b),pe=new R_,x=new V_(b,Fe,me,pe,Be,Pe,et),u=new ip(S),I=new ap(S),X=new gd(b),Je=new Qh(b,X),K=new cp(b,X,et,Je),G=new up(b,K,X,et),we=new dp(b,Be,x),j=new np(pe),he=new A_(S,u,I,Fe,Be,Je,j),re=new $_(S,pe),ce=new D_,Ve=new O_(Fe),Se=new Jh(S,u,I,me,G,g,p),le=new B_(S,G,Be),R=new j_(b,et,Be,me),fe=new ep(b,Fe,et),He=new lp(b,Fe,et),et.programs=he.programs,S.capabilities=Be,S.extensions=Fe,S.properties=pe,S.renderLists=ce,S.shadowMap=le,S.state=me,S.info=et}te();const F=new K_(S,b);this.xr=F,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const h=Fe.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){const h=Fe.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(h){h!==void 0&&(B=h,this.setSize(W,Q,!1))},this.getSize=function(h){return h.set(W,Q)},this.setSize=function(h,C,U=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=h,Q=C,t.width=Math.floor(h*B),t.height=Math.floor(C*B),U===!0&&(t.style.width=h+"px",t.style.height=C+"px"),this.setViewport(0,0,h,C)},this.getDrawingBufferSize=function(h){return h.set(W*B,Q*B).floor()},this.setDrawingBufferSize=function(h,C,U){W=h,Q=C,B=U,t.width=Math.floor(h*U),t.height=Math.floor(C*U),this.setViewport(0,0,h,C)},this.getCurrentViewport=function(h){return h.copy(T)},this.getViewport=function(h){return h.copy(Ue)},this.setViewport=function(h,C,U,O){h.isVector4?Ue.set(h.x,h.y,h.z,h.w):Ue.set(h,C,U,O),me.viewport(T.copy(Ue).multiplyScalar(B).round())},this.getScissor=function(h){return h.copy(Ye)},this.setScissor=function(h,C,U,O){h.isVector4?Ye.set(h.x,h.y,h.z,h.w):Ye.set(h,C,U,O),me.scissor(z.copy(Ye).multiplyScalar(B).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(h){me.setScissorTest(at=h)},this.setOpaqueSort=function(h){_e=h},this.setTransparentSort=function(h){ye=h},this.getClearColor=function(h){return h.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(h=!0,C=!0,U=!0){let O=0;if(h){let L=!1;if(k!==null){const Z=k.texture.format;L=Z===nc||Z===ic||Z===rc}if(L){const Z=k.texture.type,ne=Z===Rn||Z===gi||Z===ar||Z===mi||Z===oc||Z===ac,se=Se.getClearColor(),de=Se.getClearAlpha(),Ae=se.r,De=se.g,ge=se.b;ne?(y[0]=Ae,y[1]=De,y[2]=ge,y[3]=de,b.clearBufferuiv(b.COLOR,0,y)):(w[0]=Ae,w[1]=De,w[2]=ge,w[3]=de,b.clearBufferiv(b.COLOR,0,w))}else O|=b.COLOR_BUFFER_BIT}C&&(O|=b.DEPTH_BUFFER_BIT),U&&(O|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Se.dispose(),ce.dispose(),Ve.dispose(),pe.dispose(),u.dispose(),I.dispose(),G.dispose(),Je.dispose(),R.dispose(),he.dispose(),F.dispose(),F.removeEventListener("sessionstart",Vo),F.removeEventListener("sessionend",zo),gn.stop()};function q(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const h=et.autoReset,C=le.enabled,U=le.autoUpdate,O=le.needsUpdate,L=le.type;te(),et.autoReset=h,le.enabled=C,le.autoUpdate=U,le.needsUpdate=O,le.type=L}function oe(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Le(h){const C=h.target;C.removeEventListener("dispose",Le),st(C)}function st(h){St(h),pe.remove(h)}function St(h){const C=pe.get(h).programs;C!==void 0&&(C.forEach(function(U){he.releaseProgram(U)}),h.isShaderMaterial&&he.releaseShaderCache(h))}this.renderBufferDirect=function(h,C,U,O,L,Z){C===null&&(C=ot);const ne=L.isMesh&&L.matrixWorld.determinant()<0,se=xl(h,C,U,O,L);me.setMaterial(O,ne);let de=U.index,Ae=1;if(O.wireframe===!0){if(de=K.getWireframeAttribute(U),de===void 0)return;Ae=2}const De=U.drawRange,ge=U.attributes.position;let ze=De.start*Ae,Ke=(De.start+De.count)*Ae;Z!==null&&(ze=Math.max(ze,Z.start*Ae),Ke=Math.min(Ke,(Z.start+Z.count)*Ae)),de!==null?(ze=Math.max(ze,0),Ke=Math.min(Ke,de.count)):ge!=null&&(ze=Math.max(ze,0),Ke=Math.min(Ke,ge.count));const ft=Ke-ze;if(ft<0||ft===1/0)return;Je.setup(L,O,se,U,de);let ct,We=fe;if(de!==null&&(ct=X.get(de),We=He,We.setIndex(ct)),L.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*lt()),We.setMode(b.LINES)):We.setMode(b.TRIANGLES);else if(L.isLine){let ve=O.linewidth;ve===void 0&&(ve=1),me.setLineWidth(ve*lt()),L.isLineSegments?We.setMode(b.LINES):L.isLineLoop?We.setMode(b.LINE_LOOP):We.setMode(b.LINE_STRIP)}else L.isPoints?We.setMode(b.POINTS):L.isSprite&&We.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)We.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))We.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const ve=L._multiDrawStarts,gt=L._multiDrawCounts,Ze=L._multiDrawCount,Gt=de?X.get(de).bytesPerElement:1,Un=pe.get(O).currentProgram.getUniforms();for(let Ct=0;Ct<Ze;Ct++)Un.setValue(b,"_gl_DrawID",Ct),We.render(ve[Ct]/Gt,gt[Ct])}else if(L.isInstancedMesh)We.renderInstances(ze,ft,L.count);else if(U.isInstancedBufferGeometry){const ve=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,gt=Math.min(U.instanceCount,ve);We.renderInstances(ze,ft,gt)}else We.render(ze,ft)};function je(h,C,U){h.transparent===!0&&h.side===on&&h.forceSinglePass===!1?(h.side=Ft,h.needsUpdate=!0,Oi(h,C,U),h.side=_i,h.needsUpdate=!0,Oi(h,C,U),h.side=on):Oi(h,C,U)}this.compile=function(h,C,U=null){U===null&&(U=h),l=Ve.get(U),l.init(C),M.push(l),U.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(l.pushLight(L),L.castShadow&&l.pushShadow(L))}),h!==U&&h.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(l.pushLight(L),L.castShadow&&l.pushShadow(L))}),l.setupLights();const O=new Set;return h.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Z=L.material;if(Z)if(Array.isArray(Z))for(let ne=0;ne<Z.length;ne++){const se=Z[ne];je(se,U,L),O.add(se)}else je(Z,U,L),O.add(Z)}),M.pop(),l=null,O},this.compileAsync=function(h,C,U=null){const O=this.compile(h,C,U);return new Promise(L=>{function Z(){if(O.forEach(function(ne){pe.get(ne).currentProgram.isReady()&&O.delete(ne)}),O.size===0){L(h);return}setTimeout(Z,10)}Fe.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Ht=null;function Qt(h){Ht&&Ht(h)}function Vo(){gn.stop()}function zo(){gn.start()}const gn=new pc;gn.setAnimationLoop(Qt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(h){Ht=h,F.setAnimationLoop(h),h===null?gn.stop():gn.start()},F.addEventListener("sessionstart",Vo),F.addEventListener("sessionend",zo),this.render=function(h,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(C),C=F.getCamera()),h.isScene===!0&&h.onBeforeRender(S,h,C,k),l=Ve.get(h,M.length),l.init(C),M.push(l),be.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),V.setFromProjectionMatrix(be),ue=this.localClippingEnabled,J=j.init(this.clippingPlanes,ue),d=ce.get(h,D.length),d.init(),D.push(d),F.enabled===!0&&F.isPresenting===!0){const Z=S.xr.getDepthSensingMesh();Z!==null&&Sr(Z,C,-1/0,S.sortObjects)}Sr(h,C,0,S.sortObjects),d.finish(),S.sortObjects===!0&&d.sort(_e,ye),Ge=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ge&&Se.addToRenderList(d,h),this.info.render.frame++,J===!0&&j.beginShadows();const U=l.state.shadowsArray;le.render(U,h,C),J===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=d.opaque,L=d.transmissive;if(l.setupLights(),C.isArrayCamera){const Z=C.cameras;if(L.length>0)for(let ne=0,se=Z.length;ne<se;ne++){const de=Z[ne];Xo(O,L,h,de)}Ge&&Se.render(h);for(let ne=0,se=Z.length;ne<se;ne++){const de=Z[ne];Wo(d,h,de,de.viewport)}}else L.length>0&&Xo(O,L,h,C),Ge&&Se.render(h),Wo(d,h,C);k!==null&&A===0&&(x.updateMultisampleRenderTarget(k),x.updateRenderTargetMipmap(k)),h.isScene===!0&&h.onAfterRender(S,h,C),Je.resetDefaultState(),v=-1,_=null,M.pop(),M.length>0?(l=M[M.length-1],J===!0&&j.setGlobalState(S.clippingPlanes,l.state.camera)):l=null,D.pop(),D.length>0?d=D[D.length-1]:d=null};function Sr(h,C,U,O){if(h.visible===!1)return;if(h.layers.test(C.layers)){if(h.isGroup)U=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(C);else if(h.isLight)l.pushLight(h),h.castShadow&&l.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||V.intersectsSprite(h)){O&&Ne.setFromMatrixPosition(h.matrixWorld).applyMatrix4(be);const ne=G.update(h),se=h.material;se.visible&&d.push(h,ne,se,U,Ne.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||V.intersectsObject(h))){const ne=G.update(h),se=h.material;if(O&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ne.copy(h.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ne.copy(ne.boundingSphere.center)),Ne.applyMatrix4(h.matrixWorld).applyMatrix4(be)),Array.isArray(se)){const de=ne.groups;for(let Ae=0,De=de.length;Ae<De;Ae++){const ge=de[Ae],ze=se[ge.materialIndex];ze&&ze.visible&&d.push(h,ne,ze,U,Ne.z,ge)}}else se.visible&&d.push(h,ne,se,U,Ne.z,null)}}const Z=h.children;for(let ne=0,se=Z.length;ne<se;ne++)Sr(Z[ne],C,U,O)}function Wo(h,C,U,O){const L=h.opaque,Z=h.transmissive,ne=h.transparent;l.setupLightsView(U),J===!0&&j.setGlobalState(S.clippingPlanes,U),O&&me.viewport(T.copy(O)),L.length>0&&Ni(L,C,U),Z.length>0&&Ni(Z,C,U),ne.length>0&&Ni(ne,C,U),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Xo(h,C,U,O){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[O.id]===void 0&&(l.state.transmissionRenderTarget[O.id]=new qn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?fr:Rn,minFilter:oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Z=l.state.transmissionRenderTarget[O.id],ne=O.viewport||T;Z.setSize(ne.z*S.transmissionResolutionScale,ne.w*S.transmissionResolutionScale);const se=S.getRenderTarget();S.setRenderTarget(Z),S.getClearColor(Y),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&Se.render(U);const de=S.toneMapping;S.toneMapping=un;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),l.setupLightsView(O),J===!0&&j.setGlobalState(S.clippingPlanes,O),Ni(h,U,O),x.updateMultisampleRenderTarget(Z),x.updateRenderTargetMipmap(Z),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ge=0,ze=C.length;ge<ze;ge++){const Ke=C[ge],ft=Ke.object,ct=Ke.geometry,We=Ke.material,ve=Ke.group;if(We.side===on&&ft.layers.test(O.layers)){const gt=We.side;We.side=Ft,We.needsUpdate=!0,qo(ft,U,O,ct,We,ve),We.side=gt,We.needsUpdate=!0,De=!0}}De===!0&&(x.updateMultisampleRenderTarget(Z),x.updateRenderTargetMipmap(Z))}S.setRenderTarget(se),S.setClearColor(Y,$),Ae!==void 0&&(O.viewport=Ae),S.toneMapping=de}function Ni(h,C,U){const O=C.isScene===!0?C.overrideMaterial:null;for(let L=0,Z=h.length;L<Z;L++){const ne=h[L],se=ne.object,de=ne.geometry,Ae=O===null?ne.material:O,De=ne.group;se.layers.test(U.layers)&&qo(se,C,U,de,Ae,De)}}function qo(h,C,U,O,L,Z){h.onBeforeRender(S,C,U,O,L,Z),h.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),L.onBeforeRender(S,C,U,O,h,Z),L.transparent===!0&&L.side===on&&L.forceSinglePass===!1?(L.side=Ft,L.needsUpdate=!0,S.renderBufferDirect(U,C,O,L,h,Z),L.side=_i,L.needsUpdate=!0,S.renderBufferDirect(U,C,O,L,h,Z),L.side=on):S.renderBufferDirect(U,C,O,L,h,Z),h.onAfterRender(S,C,U,O,L,Z)}function Oi(h,C,U){C.isScene!==!0&&(C=ot);const O=pe.get(h),L=l.state.lights,Z=l.state.shadowsArray,ne=L.state.version,se=he.getParameters(h,L.state,Z,C,U),de=he.getProgramCacheKey(se);let Ae=O.programs;O.environment=h.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(h.isMeshStandardMaterial?I:u).get(h.envMap||O.environment),O.envMapRotation=O.environment!==null&&h.envMap===null?C.environmentRotation:h.envMapRotation,Ae===void 0&&(h.addEventListener("dispose",Le),Ae=new Map,O.programs=Ae);let De=Ae.get(de);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ne)return Ko(h,se),De}else se.uniforms=he.getUniforms(h),h.onBeforeCompile(se,S),De=he.acquireProgram(se,de),Ae.set(de,De),O.uniforms=se.uniforms;const ge=O.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(ge.clippingPlanes=j.uniform),Ko(h,se),O.needsLights=bl(h),O.lightsStateVersion=ne,O.needsLights&&(ge.ambientLightColor.value=L.state.ambient,ge.lightProbe.value=L.state.probe,ge.directionalLights.value=L.state.directional,ge.directionalLightShadows.value=L.state.directionalShadow,ge.spotLights.value=L.state.spot,ge.spotLightShadows.value=L.state.spotShadow,ge.rectAreaLights.value=L.state.rectArea,ge.ltc_1.value=L.state.rectAreaLTC1,ge.ltc_2.value=L.state.rectAreaLTC2,ge.pointLights.value=L.state.point,ge.pointLightShadows.value=L.state.pointShadow,ge.hemisphereLights.value=L.state.hemi,ge.directionalShadowMap.value=L.state.directionalShadowMap,ge.directionalShadowMatrix.value=L.state.directionalShadowMatrix,ge.spotShadowMap.value=L.state.spotShadowMap,ge.spotLightMatrix.value=L.state.spotLightMatrix,ge.spotLightMap.value=L.state.spotLightMap,ge.pointShadowMap.value=L.state.pointShadowMap,ge.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function Yo(h){if(h.uniformsList===null){const C=h.currentProgram.getUniforms();h.uniformsList=Ji.seqWithValue(C.seq,h.uniforms)}return h.uniformsList}function Ko(h,C){const U=pe.get(h);U.outputColorSpace=C.outputColorSpace,U.batching=C.batching,U.batchingColor=C.batchingColor,U.instancing=C.instancing,U.instancingColor=C.instancingColor,U.instancingMorph=C.instancingMorph,U.skinning=C.skinning,U.morphTargets=C.morphTargets,U.morphNormals=C.morphNormals,U.morphColors=C.morphColors,U.morphTargetsCount=C.morphTargetsCount,U.numClippingPlanes=C.numClippingPlanes,U.numIntersection=C.numClipIntersection,U.vertexAlphas=C.vertexAlphas,U.vertexTangents=C.vertexTangents,U.toneMapping=C.toneMapping}function xl(h,C,U,O,L){C.isScene!==!0&&(C=ot),x.resetTextureUnits();const Z=C.fog,ne=O.isMeshStandardMaterial?C.environment:null,se=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:dr,de=(O.isMeshStandardMaterial?I:u).get(O.envMap||ne),Ae=O.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,De=!!U.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!U.morphAttributes.position,ze=!!U.morphAttributes.normal,Ke=!!U.morphAttributes.color;let ft=un;O.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ft=S.toneMapping);const ct=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,We=ct!==void 0?ct.length:0,ve=pe.get(O),gt=l.state.lights;if(J===!0&&(ue===!0||h!==_)){const Mt=h===_&&O.id===v;j.setState(O,h,Mt)}let Ze=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==gt.state.version||ve.outputColorSpace!==se||L.isBatchedMesh&&ve.batching===!1||!L.isBatchedMesh&&ve.batching===!0||L.isBatchedMesh&&ve.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&ve.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&ve.instancing===!1||!L.isInstancedMesh&&ve.instancing===!0||L.isSkinnedMesh&&ve.skinning===!1||!L.isSkinnedMesh&&ve.skinning===!0||L.isInstancedMesh&&ve.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&ve.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&ve.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&ve.instancingMorph===!1&&L.morphTexture!==null||ve.envMap!==de||O.fog===!0&&ve.fog!==Z||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==j.numPlanes||ve.numIntersection!==j.numIntersection)||ve.vertexAlphas!==Ae||ve.vertexTangents!==De||ve.morphTargets!==ge||ve.morphNormals!==ze||ve.morphColors!==Ke||ve.toneMapping!==ft||ve.morphTargetsCount!==We)&&(Ze=!0):(Ze=!0,ve.__version=O.version);let Gt=ve.currentProgram;Ze===!0&&(Gt=Oi(O,C,L));let Un=!1,Ct=!1,ti=!1;const it=Gt.getUniforms(),Ut=ve.uniforms;if(me.useProgram(Gt.program)&&(Un=!0,Ct=!0,ti=!0),O.id!==v&&(v=O.id,Ct=!0),Un||_!==h){me.buffers.depth.getReversed()?(ie.copy(h.projectionMatrix),Pl(ie),Il(ie),it.setValue(b,"projectionMatrix",ie)):it.setValue(b,"projectionMatrix",h.projectionMatrix),it.setValue(b,"viewMatrix",h.matrixWorldInverse);const yt=it.map.cameraPosition;yt!==void 0&&yt.setValue(b,Ce.setFromMatrixPosition(h.matrixWorld)),Be.logarithmicDepthBuffer&&it.setValue(b,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(b,"isOrthographic",h.isOrthographicCamera===!0),_!==h&&(_=h,Ct=!0,ti=!0)}if(L.isSkinnedMesh){it.setOptional(b,L,"bindMatrix"),it.setOptional(b,L,"bindMatrixInverse");const Mt=L.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),it.setValue(b,"boneTexture",Mt.boneTexture,x))}L.isBatchedMesh&&(it.setOptional(b,L,"batchingTexture"),it.setValue(b,"batchingTexture",L._matricesTexture,x),it.setOptional(b,L,"batchingIdTexture"),it.setValue(b,"batchingIdTexture",L._indirectTexture,x),it.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&it.setValue(b,"batchingColorTexture",L._colorsTexture,x));const Nt=U.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&we.update(L,U,Gt),(Ct||ve.receiveShadow!==L.receiveShadow)&&(ve.receiveShadow=L.receiveShadow,it.setValue(b,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ut.envMap.value=de,Ut.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(Ut.envMapIntensity.value=C.environmentIntensity),Ct&&(it.setValue(b,"toneMappingExposure",S.toneMappingExposure),ve.needsLights&&Ml(Ut,ti),Z&&O.fog===!0&&re.refreshFogUniforms(Ut,Z),re.refreshMaterialUniforms(Ut,O,B,Q,l.state.transmissionRenderTarget[h.id]),Ji.upload(b,Yo(ve),Ut,x)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ji.upload(b,Yo(ve),Ut,x),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(b,"center",L.center),it.setValue(b,"modelViewMatrix",L.modelViewMatrix),it.setValue(b,"normalMatrix",L.normalMatrix),it.setValue(b,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Mt=O.uniformsGroups;for(let yt=0,xr=Mt.length;yt<xr;yt++){const vn=Mt[yt];R.update(vn,Gt),R.bind(vn,Gt)}}return Gt}function Ml(h,C){h.ambientLightColor.needsUpdate=C,h.lightProbe.needsUpdate=C,h.directionalLights.needsUpdate=C,h.directionalLightShadows.needsUpdate=C,h.pointLights.needsUpdate=C,h.pointLightShadows.needsUpdate=C,h.spotLights.needsUpdate=C,h.spotLightShadows.needsUpdate=C,h.rectAreaLights.needsUpdate=C,h.hemisphereLights.needsUpdate=C}function bl(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(h,C,U){pe.get(h.texture).__webglTexture=C,pe.get(h.depthTexture).__webglTexture=U;const O=pe.get(h);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=U===void 0,O.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(h,C){const U=pe.get(h);U.__webglFramebuffer=C,U.__useDefaultFramebuffer=C===void 0};const Tl=b.createFramebuffer();this.setRenderTarget=function(h,C=0,U=0){k=h,P=C,A=U;let O=!0,L=null,Z=!1,ne=!1;if(h){const de=pe.get(h);if(de.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(b.FRAMEBUFFER,null),O=!1;else if(de.__webglFramebuffer===void 0)x.setupRenderTarget(h);else if(de.__hasExternalTextures)x.rebindTextures(h,pe.get(h.texture).__webglTexture,pe.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){const ge=h.depthTexture;if(de.__boundDepthTexture!==ge){if(ge!==null&&pe.has(ge)&&(h.width!==ge.image.width||h.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(h)}}const Ae=h.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const De=pe.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(De[C])?L=De[C][U]:L=De[C],Z=!0):h.samples>0&&x.useMultisampledRTT(h)===!1?L=pe.get(h).__webglMultisampledFramebuffer:Array.isArray(De)?L=De[U]:L=De,T.copy(h.viewport),z.copy(h.scissor),H=h.scissorTest}else T.copy(Ue).multiplyScalar(B).floor(),z.copy(Ye).multiplyScalar(B).floor(),H=at;if(U!==0&&(L=Tl),me.bindFramebuffer(b.FRAMEBUFFER,L)&&O&&me.drawBuffers(h,L),me.viewport(T),me.scissor(z),me.setScissorTest(H),Z){const de=pe.get(h.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+C,de.__webglTexture,U)}else if(ne){const de=pe.get(h.texture),Ae=C;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,de.__webglTexture,U,Ae)}else if(h!==null&&U!==0){const de=pe.get(h.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,de.__webglTexture,U)}v=-1},this.readRenderTargetPixels=function(h,C,U,O,L,Z,ne){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){me.bindFramebuffer(b.FRAMEBUFFER,se);try{const de=h.texture,Ae=de.format,De=de.type;if(!Be.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=h.width-O&&U>=0&&U<=h.height-L&&b.readPixels(C,U,O,L,Pe.convert(Ae),Pe.convert(De),Z)}finally{const de=k!==null?pe.get(k).__webglFramebuffer:null;me.bindFramebuffer(b.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(h,C,U,O,L,Z,ne){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const de=h.texture,Ae=de.format,De=de.type;if(!Be.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=h.width-O&&U>=0&&U<=h.height-L){me.bindFramebuffer(b.FRAMEBUFFER,se);const ge=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ge),b.bufferData(b.PIXEL_PACK_BUFFER,Z.byteLength,b.STREAM_READ),b.readPixels(C,U,O,L,Pe.convert(Ae),Pe.convert(De),0);const ze=k!==null?pe.get(k).__webglFramebuffer:null;me.bindFramebuffer(b.FRAMEBUFFER,ze);const Ke=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Ul(b,Ke,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ge),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Z),b.deleteBuffer(ge),b.deleteSync(Ke),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(h,C=null,U=0){h.isTexture!==!0&&(Hn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,h=arguments[1]);const O=Math.pow(2,-U),L=Math.floor(h.image.width*O),Z=Math.floor(h.image.height*O),ne=C!==null?C.x:0,se=C!==null?C.y:0;x.setTexture2D(h,0),b.copyTexSubImage2D(b.TEXTURE_2D,U,0,0,ne,se,L,Z),me.unbindTexture()};const yl=b.createFramebuffer(),wl=b.createFramebuffer();this.copyTextureToTexture=function(h,C,U=null,O=null,L=0,Z=null){h.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,h=arguments[1],C=arguments[2],Z=arguments[3]||0,U=null),Z===null&&(L!==0?(Hn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Z=L,L=0):Z=0);let ne,se,de,Ae,De,ge,ze,Ke,ft;const ct=h.isCompressedTexture?h.mipmaps[Z]:h.image;if(U!==null)ne=U.max.x-U.min.x,se=U.max.y-U.min.y,de=U.isBox3?U.max.z-U.min.z:1,Ae=U.min.x,De=U.min.y,ge=U.isBox3?U.min.z:0;else{const Nt=Math.pow(2,-L);ne=Math.floor(ct.width*Nt),se=Math.floor(ct.height*Nt),h.isDataArrayTexture?de=ct.depth:h.isData3DTexture?de=Math.floor(ct.depth*Nt):de=1,Ae=0,De=0,ge=0}O!==null?(ze=O.x,Ke=O.y,ft=O.z):(ze=0,Ke=0,ft=0);const We=Pe.convert(C.format),ve=Pe.convert(C.type);let gt;C.isData3DTexture?(x.setTexture3D(C,0),gt=b.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(x.setTexture2DArray(C,0),gt=b.TEXTURE_2D_ARRAY):(x.setTexture2D(C,0),gt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,C.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,C.unpackAlignment);const Ze=b.getParameter(b.UNPACK_ROW_LENGTH),Gt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(b.UNPACK_SKIP_PIXELS),Ct=b.getParameter(b.UNPACK_SKIP_ROWS),ti=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ct.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ct.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,De),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ge);const it=h.isDataArrayTexture||h.isData3DTexture,Ut=C.isDataArrayTexture||C.isData3DTexture;if(h.isDepthTexture){const Nt=pe.get(h),Mt=pe.get(C),yt=pe.get(Nt.__renderTarget),xr=pe.get(Mt.__renderTarget);me.bindFramebuffer(b.READ_FRAMEBUFFER,yt.__webglFramebuffer),me.bindFramebuffer(b.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let vn=0;vn<de;vn++)it&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.get(h).__webglTexture,L,ge+vn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,pe.get(C).__webglTexture,Z,ft+vn)),b.blitFramebuffer(Ae,De,ne,se,ze,Ke,ne,se,b.DEPTH_BUFFER_BIT,b.NEAREST);me.bindFramebuffer(b.READ_FRAMEBUFFER,null),me.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(L!==0||h.isRenderTargetTexture||pe.has(h)){const Nt=pe.get(h),Mt=pe.get(C);me.bindFramebuffer(b.READ_FRAMEBUFFER,yl),me.bindFramebuffer(b.DRAW_FRAMEBUFFER,wl);for(let yt=0;yt<de;yt++)it?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Nt.__webglTexture,L,ge+yt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Nt.__webglTexture,L),Ut?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Mt.__webglTexture,Z,ft+yt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Mt.__webglTexture,Z),L!==0?b.blitFramebuffer(Ae,De,ne,se,ze,Ke,ne,se,b.COLOR_BUFFER_BIT,b.NEAREST):Ut?b.copyTexSubImage3D(gt,Z,ze,Ke,ft+yt,Ae,De,ne,se):b.copyTexSubImage2D(gt,Z,ze,Ke,Ae,De,ne,se);me.bindFramebuffer(b.READ_FRAMEBUFFER,null),me.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ut?h.isDataTexture||h.isData3DTexture?b.texSubImage3D(gt,Z,ze,Ke,ft,ne,se,de,We,ve,ct.data):C.isCompressedArrayTexture?b.compressedTexSubImage3D(gt,Z,ze,Ke,ft,ne,se,de,We,ct.data):b.texSubImage3D(gt,Z,ze,Ke,ft,ne,se,de,We,ve,ct):h.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Z,ze,Ke,ne,se,We,ve,ct.data):h.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Z,ze,Ke,ct.width,ct.height,We,ct.data):b.texSubImage2D(b.TEXTURE_2D,Z,ze,Ke,ne,se,We,ve,ct);b.pixelStorei(b.UNPACK_ROW_LENGTH,Ze),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Gt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ct),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ti),Z===0&&C.generateMipmaps&&b.generateMipmap(gt),me.unbindTexture()},this.copyTextureToTexture3D=function(h,C,U=null,O=null,L=0){return h.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,O=arguments[1]||null,h=arguments[2],C=arguments[3],L=arguments[4]||0),Hn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(h,C,U,O,L)},this.initRenderTarget=function(h){pe.get(h).__webglFramebuffer===void 0&&x.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?x.setTextureCube(h,0):h.isData3DTexture?x.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?x.setTexture2DArray(h,0):x.setTexture2D(h,0),me.unbindTexture()},this.resetState=function(){P=0,A=0,k=null,me.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(n),t.unpackColorSpace=dt._getUnpackColorSpace()}}const On=new vi(0,0,0,"YXZ"),kn=new Re,Q_={type:"change"},em={type:"lock"},tm={type:"unlock"},es=Math.PI/2;class nm extends td{constructor(n,t=null){super(n,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=im.bind(this),this._onPointerlockChange=rm.bind(this),this._onPointerlockError=om.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const t=this.object;kn.setFromMatrixColumn(t.matrix,0),kn.crossVectors(t.up,kn),t.position.addScaledVector(kn,n)}moveRight(n){if(this.enabled===!1)return;const t=this.object;kn.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(kn,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function im(e){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;On.setFromQuaternion(n.quaternion),On.y-=e.movementX*.002*this.pointerSpeed,On.x-=e.movementY*.002*this.pointerSpeed,On.x=Math.max(es-this.maxPolarAngle,Math.min(es-this.minPolarAngle,On.x)),n.quaternion.setFromEuler(On),this.dispatchEvent(Q_)}function rm(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(em),this.isLocked=!0):(this.dispatchEvent(tm),this.isLocked=!1)}function om(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}var Xn;class am{constructor(n,t,i){xe(this,"radius",.5);xe(this,"height",1.8);xe(this,"maxSpeed",10);xe(this,"jumpSpeed",10);xe(this,"onGround",!1);xe(this,"input",new Re);xe(this,"velocity",new Re(0,0,0));$o(this,Xn,new Re);xe(this,"camera",new fi(75,window.innerWidth/window.innerHeight,.1,100));xe(this,"controls",new nm(this.camera,document.body));xe(this,"selectedCoords",null);xe(this,"selectedCoordsNormal",null);this.socket=i,this.position.set(10,120,10),n.add(this.camera),this.scene=n,this.world=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.boundsHelper=new Qe(new nd(this.radius,this.radius,this.height,16),new fn({wireframe:!0}));const r=new mt(.1,.1,.3),o=new lo().load("images/hand.png");o.colorSpace=Ao,o.magFilter=cn,o.minFilter=cn;const a=new fn({map:o});this.handMesh=new Qe(r,a),this.handMesh.position.set(.4,-.25,-.4),this.handMesh.rotation.x=.6,this.handMesh.rotation.z=-.4,this.handMesh.rotation.y=-.5,n.add(this.handMesh),this.camera.add(this.handMesh),this.punchDirection=1;const s=new fn({color:0,transparent:!0,opacity:.2}),p=new lo().load("images/break.png"),c=new Me({map:p,transparent:!0}),f=new mt(1.01,1.01,1.01);this.selectionBreakHelper=new Qe(f,c),this.scene.add(this.selectionBreakHelper);const E=new mt(1.01,1.01,1.01);this.selectionHelper=new Qe(E,s),n.add(this.selectionHelper),this.raycaster=new id,this.mouse=new xt,this.raycaster.far=5,document.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this)),this.isDestroying=!1}onMouseDown(n){var i,r,o;if(this.controls.isLocked&&(this.isMouseDown=!0,this.animateHand(),this.selectedCoords))if(n.button==2){const a=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(((i=this.inventory.getSelectedItem())==null?void 0:i.block)!==void 0&&vt(a.id).interface!==!0&&vt((r=this.inventory.getSelectedItem())==null?void 0:r.block).type==="block"){this.world.addBlock(this.selectedCoordsNormal.x,this.selectedCoordsNormal.y,this.selectedCoordsNormal.z,this.inventory.getSelectedItem().block),this.inventory.removeBlock(this.inventory.getSelectedItem().block);var t=new Audio("audio/dirt1.ogg");t.play(),(o=this.socket.getSocket())==null||o.emit("addBlock",{x:this.selectedCoordsNormal.x,y:this.selectedCoordsNormal.y,z:this.selectedCoordsNormal.z,blockId:this.inventory.getSelectedItem().block})}else vt(a.id).interface===!0&&this.ui.open(a.id)}else this.startDestroyingBlock(n)}startDestroyingBlock(n){var f,E;if(!this.isMouseDown||!this.selectedCoords)return;let t=0;const i=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);console.log(i);let r=vt(i.id).hardness*1e3,o=1;r*=1.5;const a=(f=this.inventory.getSelectedItem())==null?void 0:f.block;let s=null;a&&(s=vt(a),s.type=="item"&&s.tool_type==vt(i.id).tool&&(o=s.tool_material));let p=o/vt(i.id).hardness;(E=vt(i.id))!=null&&E.need_tool&&!(s&&s.type=="item"&&s.tool_type==vt(i.id).tool)?p/=100:p/=30,r=Math.ceil(1/p)/20*1e3,p>1&&(r=0),console.log(r),this.isDestroying=!0,this.animateBlockBreaking(r),this.destructionInterval=setInterval(()=>{var g;if(!this.isMouseDown){clearInterval(this.destructionInterval),this.isDestroying=!1;return}if(t+=100,t>=r){const y=vt(i.id);Object.hasOwn(y,"drops")?this.inventory.addBlock(y.drops):this.inventory.addBlock(i.id),this.world.removeBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z),(g=this.socket.getSocket())==null||g.emit("removeBlock",{x:this.selectedCoords.x,y:this.selectedCoords.y,z:this.selectedCoords.z});var m=new Audio("audio/dirt1.ogg");m.play(),this.isDestroying=!1,clearInterval(this.destructionInterval),setTimeout(()=>{this.startDestroyingBlock(n)},200)}},100)}onMouseUp(n){this.controls.isLocked&&n.button!=2&&(this.isDestroying=!1,clearInterval(this.destructionInterval),this.isMouseDown=!1)}animateHand(){this.handMesh.position.y+=this.punchDirection*.02,(this.handMesh.position.y>-.4||this.handMesh.position.y<-.6)&&(this.punchDirection*=-1)}update(n){this.updateRaycaster(n)}updateRaycaster(n){const t=this.raycaster.intersectObjects(n.children,!0);if(this.controls.isLocked)if(this.raycaster.setFromCamera(this.mouse,this.camera),t.length>0){const i=t[0],r=i.object.parent,o=new Yt;i.object.getMatrixAt(i.instanceId,o),this.selectedCoords=r.position.clone(),this.selectedCoords.applyMatrix4(o),this.selectedCoords.set(Math.round(this.selectedCoords.x),Math.round(this.selectedCoords.y),Math.round(this.selectedCoords.z)),this.selectedCoordsNormal=this.selectedCoords.clone().add(i.normal);const a=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(a){new fn({color:0,transparent:!0,opacity:.2});let s=vt(a.id).geometry;this.selectionHelper.scale.set(s.parameters.width+.01,s.parameters.height+.01,s.parameters.depth+.01)}this.selectionHelper.position.copy(this.selectedCoords),this.selectionHelper.visible=!0}else this.selectedCoords=null,this.selectionHelper.visible=!1}animateBlockBreaking(n){this.selectionBreakHelper.position.copy(this.selectedCoords),this.selectionBreakHelper.visible=!0;const i=n/6;this.nextStep(i,0)}nextStep(n,t){if(t<=6&&this.isDestroying){const o=t%2,a=Math.floor(t/2);this.selectionBreakHelper.material.map.offset.set(o/2,a/3),this.selectionBreakHelper.material.map.repeat.set(1/2,1/3),t++,setTimeout(this.nextStep.bind(this),n,n,t)}else this.selectionBreakHelper.visible=!1}setBlockInHand(n){var t;if((t=vt(n))!=null&&t.material){this.scene.remove(this.meshHandItem),this.camera.remove(this.meshHandItem);const i=new mt(.3,.3,.3);this.meshHandItem=new Qe(i,vt(n).material),this.meshHandItem.count=0,this.meshHandItem.castShadow=!0,this.meshHandItem.receiveShadow=!0,this.meshHandItem.rotation.x=-.2,this.meshHandItem.rotation.z=0,this.meshHandItem.rotation.y=.6,this.meshHandItem.position.set(.55,-.45,-.5),this.scene.add(this.meshHandItem),this.camera.add(this.meshHandItem),this.handMesh.visible=!1}else this.meshHandItem&&(this.meshHandItem.visible=!1),this.handMesh.visible=!0}get worldVelocity(){return ki(this,Xn).copy(this.velocity),ki(this,Xn).applyEuler(new vi(0,this.camera.rotation.y,0)),ki(this,Xn)}applyWorldDeltaVelocity(n){n.applyEuler(new vi(0,-this.camera.rotation.y,0)),this.velocity.add(n)}applyInputs(n){var t;if(this.controls.isLocked){this.velocity.x=this.input.x,this.velocity.z=this.input.z,this.controls.moveRight(this.velocity.x*n),this.controls.moveForward(this.velocity.z*n),this.position.y+=this.velocity.y*n;let i=this.world.getPlayerBiome(Math.floor(this.position.x),Math.floor(this.position.z));document.getElementById("player-position").innerHTML=this.toString()+" - "+i;const r=new Re;this.camera.getWorldDirection(r),(t=this.socket.getSocket())==null||t.emit("playerState",{id:this.socket.id,position:{x:this.position.x,y:this.position.y,z:this.position.z},direction:{x:r.x,y:r.y,z:r.z}})}}updateBoundsHelper(){this.boundsHelper.position.copy(this.position),this.boundsHelper.position.y-=this.height/2}onKeyDown(n){n.code==="ShiftLeft"&&(keys.speed=!0),n.code==="KeyW"&&(this.input.z=this.maxSpeed),n.code==="KeyS"&&(this.input.z=-this.maxSpeed),n.code==="KeyA"&&(this.input.x=-this.maxSpeed),n.code==="KeyD"&&(this.input.x=this.maxSpeed),n.code==="Space"&&this.onGround&&(this.velocity.y+=this.jumpSpeed),n.code==="F5"&&this.camera.position.set(this.camera.position.x,this.camera.position.y+1,this.camera.position.z)}onKeyUp(n){n.code==="KeyW"&&(this.input.z=0),n.code==="KeyS"&&(this.input.z=0),n.code==="KeyA"&&(this.input.x=0),n.code==="KeyD"&&(this.input.x=0)}get position(){return this.camera.position}toString(){let n="";return n+=`X: ${this.position.x.toFixed(3)} `,n+=`Y: ${this.position.y.toFixed(3)} `,n+=`Z: ${this.position.z.toFixed(3)}`,n}save(){(async()=>{new Blob([JSON.stringify(this.position)]).size;const n=this.position;await cm(n)})()}load(){(async()=>{const n=await lm();this.position.set(n.x,n.y,n.z)})()}setInventory(n){this.inventory=n}setUI(n){this.ui=n}}Xn=new WeakMap;const sm="minecraftDB",Si="minecraftData";function Ec(){return new Promise((e,n)=>{const t=indexedDB.open(sm,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(Si,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function cm(e){const t=(await Ec()).transaction([Si],"readwrite");return t.objectStore(Si).put({id:"minecraft_player_position",data:e}),t.complete}async function lm(){const e=await Ec();return new Promise((n,t)=>{const o=e.transaction([Si],"readonly").objectStore(Si).get("minecraft_player_position");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){t(a.target.error)}})}class fm{constructor(n){xe(this,"m_w",123456789);xe(this,"m_z",987654321);xe(this,"mask",4294967295);this.m_w=123456789+n&this.mask,this.m_z=987654321-n&this.mask}random(){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,n}}class ts extends sn{constructor(t,i,r){super();xe(this,"chunks");xe(this,"chunkSize");xe(this,"height");xe(this,"meshs");xe(this,"data",[]);this.chunks=new Map,this.chunkSize=t.width,this.height=t.height,this.params=i,this.dataStore=r,this.biomes=[],this.rng=new fm(this.params.seed)}initializeTerrain(){this.data=[];for(let t=0;t<this.chunkSize;t++){const i=[];for(let r=0;r<this.height;r++){const o=[];for(let a=0;a<this.chunkSize;a++)o.push({id:Ee.empty.id,instanceId:null,inventory:null});i.push(o)}this.data.push(i)}}generate(){if(this.dataStore.contains(this.position.x,this.position.z))this.data=this.dataStore.get(this.position.x,this.position.z),this.generateMesh();else{const t=new Worker(new URL("/minecraft-threejs/assets/chunkWorker-BGRMrYKa.js",import.meta.url),{type:"module"});t.onmessage=i=>{const{data:r,biomes:o}=i.data;this.biomes=o,this.data=r,this.dataStore.set(this.position.x,this.position.z,this.data),this.generateMesh(),t.terminate()},t.onerror=i=>{console.error(i),t.terminate()},t.onmessageerror=i=>{console.error("Message error in Worker:",i)},t.postMessage({chunkSize:this.chunkSize,chunkHeight:this.height,params:this.params,position:this.position,rng:this.rng})}}generateResources(t,i,r,o){const a=new SimplexNoise(t);rd.forEach(s=>{a.noise3D((this.position.x+i)/s.scale.x,(this.position.y+r)/s.scale.y,(this.position.z+o)/s.scale.z)>s.scarcity&&this.setBlockId(i,r,o,s.id)})}generateTerrain(t){var r,o;const i=new SimplexNoise(t);for(let a=0;a<this.chunkSize;a++)for(let s=0;s<this.chunkSize;s++){const p=i.noise2D((this.position.x+a)/this.params.terrain.scale,(this.position.z+s)/this.params.terrain.scale),c=this.params.terrain.offset+this.params.terrain.magnitude*p;let f=Math.floor(c*this.height);f=Math.max(1,Math.min(f,this.height-1));for(let E=0;E<this.height;E++)E<f&&E>f-3&&((r=this.getBlock(a,E,s))==null?void 0:r.id)===Ee.empty.id&&this.setBlockId(a,E,s,Ee.dirt.id),E<f&&((o=this.getBlock(a,E,s))==null?void 0:o.id)===Ee.empty.id?(this.setBlockId(a,E,s,Ee.stone.id),this.generateResources(i,a,E,s)):E==f&&(this.setBlockId(a,E,s,Ee.grass.id),Math.random()<this.params.trees.frequency&&this.generateTree(t,1,a,f+1,s))}}generateTree(t,i,r,o,a){const s=this.params.trees.trunk.minHeight,p=this.params.trees.trunk.maxHeight,c=Math.round(s+(p-s)*Math.random()+1);for(let f=o;f<o+c;f++)this.setBlockId(r,f,a,Ee.log.id);this.generateTreeCanopy(i,r,o+c,a,t)}generateTreeCanopy(t,i,r,o,a){const s=this.params.trees.canopy.minRadius,p=this.params.trees.canopy.maxRadius,c=Math.round(s+(p-s)*Math.random());for(let f=-c;f<=c;f++)for(let E=-c;E<=c;E++)for(let m=-c;m<=c;m++){const g=Math.random();if(f*f+E*E+m*m>c*c)continue;const y=this.getBlock(i+f,r+E,o+m);y&&y.id!==Ee.empty.id||g<this.params.trees.canopy.density&&this.getBlock(i+f,r+E,o+m)!==null&&this.setBlockId(i+f,r+E,o+m,Ee.leaves.id)}}generateMesh(){const t=this.chunkSize*this.chunkSize*40,i={};Object.values(Ee).filter(o=>o.id!==Ee.empty.id&&o.type==="block").forEach(o=>{const a=new od(o.geometry,o.material,t);a.name=o.id,a.count=0,a.castShadow=!0,a.receiveShadow=!0,i[o.id]=a});const r=new Yt;for(let o=0;o<this.chunkSize;o++)for(let a=0;a<this.chunkSize;a++)for(let s=0;s<this.height;s++){const p=this.getBlock(o,s,a);if(!this.isBlockObscured(o,s,a)&&p!=null&&p.id!=Ee.empty.id){const c=(1-i[p.id].geometry.parameters.height)/2;r.setPosition(o,s-c,a),i[p.id].setMatrixAt(i[p.id].count,r);const E=i[p.id].count;this.setBlockInstanceId(o,s,a,E),i[p.id].count++}}this.meshs=i,this.add(...Object.values(i))}setBlockId(t,i,r,o){this.data[t][i][r].id=o}getBlock(t,i,r){return this.inBounds(t,i,r)&&typeof this.data[t]<"u"?this.data[t][i][r]:null}inBounds(t,i,r){return t>=0&&t<this.chunkSize&&r>=0&&r<this.chunkSize&&i>=0&&i<this.height}setBlockInstanceId(t,i,r,o){this.inBounds(t,i,r)&&(this.data[t][i][r].instanceId=o)}revealBlock(t,i,r){const o=this.worldToChunkCoords(t,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.addBlockInstance(o.block.x,o.block.y,o.block.z)}isBlockObscured(t,i,r){var E,m,g,y,w,d;const o=((E=this.getBlock(t,i+1,r))==null?void 0:E.id)??Ee.empty.id,a=((m=this.getBlock(t,i-1,r))==null?void 0:m.id)??Ee.empty.id,s=((g=this.getBlock(t+1,i,r))==null?void 0:g.id)??Ee.empty.id,p=((y=this.getBlock(t-1,i,r))==null?void 0:y.id)??Ee.empty.id,c=((w=this.getBlock(t,i,r+1))==null?void 0:w.id)??Ee.empty.id,f=((d=this.getBlock(t,i,r-1))==null?void 0:d.id)??Ee.empty.id;return!(o===Ee.empty.id||a===Ee.empty.id||s===Ee.empty.id||p===Ee.empty.id||c===Ee.empty.id||f===Ee.empty.id)}disposeInstances(){this.traverse(t=>{t.dipose&&t.dispose()}),this.clear}addBlock(t,i,r,o){this.getBlock(t,i,r).id===Ee.empty.id&&(this.setBlockId(t,i,r,o),this.addBlockInstance(t,i,r),this.dataStore.set(this.position.x,this.position.z,this.data))}setBlockInventory(t,i,r,o){this.inBounds(t,i,r)&&(this.data[t][i][r].inventory=o)}addBlockInstance(t,i,r){const o=this.getBlock(t,i,r);if(o&&o.id!==Ee.empty.id&&o.instanceId===null){const a=this.children.find(f=>f.name===o.id);o.id==50&&(console.log(a.count),console.log(t,i,r));const s=a.count++;this.setBlockInstanceId(t,i,r,s);const p=new Yt,c=(1-a.geometry.parameters.height)/2;if(p.setPosition(t,i-c,r),a.setMatrixAt(s,p),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),o.id==Ee.torch.id){const f=new ad(16776928,2,14,.1);f.position.set(t,i+.1,r),f.castShadow=!1,this.add(f)}}}removeBlock(t,i,r){const o=this.getBlock(t,i,r);o&&o.id!==Ee.empty.id&&(this.deleteBlockInstance(t,i,r),this.setBlockId(t,i,r,Ee.empty.id),this.dataStore.set(this.position.x,this.position.z,this.data))}deleteBlockInstance(t,i,r){const o=this.getBlock(t,i,r);if(o.id===Ee.empty.id||o.instanceId===null)return;const a=this.children.find(f=>f.name===o.id),s=o.instanceId,p=new Yt;a.getMatrixAt(a.count-1,p);const c=new Re;c.applyMatrix4(p),this.setBlockInstanceId(c.x,Math.round(c.y),c.z,s),a.setMatrixAt(s,p),a.count--,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),this.setBlockInstanceId(t,i,r,null)}getBiome(t,i){return this.inBounds(t,0,i)&&typeof this.data[t]<"u"&&typeof this.biomes[t]<"u"?this.biomes[t][i]:(console.log(this.biomes),null)}}class dm{constructor(){this.data={}}clear(){this.data={}}contains(n,t){const i=this.getKey(n,t);return this.data[i]!==void 0}get(n,t){const i=this.getKey(n,t);return this.data[i]}set(n,t,i){const r=this.getKey(n,t);this.data[r]=i}getKey(n,t){return`${n},${t}`}getData(){return this.data}setData(n){this.data=n}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const um=4,ns=0,is=1,hm=2;function jn(e){let n=e.length;for(;--n>=0;)e[n]=0}const pm=0,Sc=1,_m=2,mm=3,gm=258,Do=29,Ii=256,xi=Ii+1+Do,Wn=30,Lo=19,xc=2*xi+1,Tn=15,Nr=16,vm=7,Po=256,Mc=16,bc=17,Tc=18,uo=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Qi=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Em=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),yc=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sm=512,nn=new Array((xi+2)*2);jn(nn);const di=new Array(Wn*2);jn(di);const Mi=new Array(Sm);jn(Mi);const bi=new Array(gm-mm+1);jn(bi);const Io=new Array(Do);jn(Io);const sr=new Array(Wn);jn(sr);function Or(e,n,t,i,r){this.static_tree=e,this.extra_bits=n,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=e&&e.length}let wc,Ac,Rc;function kr(e,n){this.dyn_tree=e,this.max_code=0,this.stat_desc=n}const Cc=e=>e<256?Mi[e]:Mi[256+(e>>>7)],Ti=(e,n)=>{e.pending_buf[e.pending++]=n&255,e.pending_buf[e.pending++]=n>>>8&255},Rt=(e,n,t)=>{e.bi_valid>Nr-t?(e.bi_buf|=n<<e.bi_valid&65535,Ti(e,e.bi_buf),e.bi_buf=n>>Nr-e.bi_valid,e.bi_valid+=t-Nr):(e.bi_buf|=n<<e.bi_valid&65535,e.bi_valid+=t)},qt=(e,n,t)=>{Rt(e,t[n*2],t[n*2+1])},Dc=(e,n)=>{let t=0;do t|=e&1,e>>>=1,t<<=1;while(--n>0);return t>>>1},xm=e=>{e.bi_valid===16?(Ti(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)},Mm=(e,n)=>{const t=n.dyn_tree,i=n.max_code,r=n.stat_desc.static_tree,o=n.stat_desc.has_stree,a=n.stat_desc.extra_bits,s=n.stat_desc.extra_base,p=n.stat_desc.max_length;let c,f,E,m,g,y,w=0;for(m=0;m<=Tn;m++)e.bl_count[m]=0;for(t[e.heap[e.heap_max]*2+1]=0,c=e.heap_max+1;c<xc;c++)f=e.heap[c],m=t[t[f*2+1]*2+1]+1,m>p&&(m=p,w++),t[f*2+1]=m,!(f>i)&&(e.bl_count[m]++,g=0,f>=s&&(g=a[f-s]),y=t[f*2],e.opt_len+=y*(m+g),o&&(e.static_len+=y*(r[f*2+1]+g)));if(w!==0){do{for(m=p-1;e.bl_count[m]===0;)m--;e.bl_count[m]--,e.bl_count[m+1]+=2,e.bl_count[p]--,w-=2}while(w>0);for(m=p;m!==0;m--)for(f=e.bl_count[m];f!==0;)E=e.heap[--c],!(E>i)&&(t[E*2+1]!==m&&(e.opt_len+=(m-t[E*2+1])*t[E*2],t[E*2+1]=m),f--)}},Lc=(e,n,t)=>{const i=new Array(Tn+1);let r=0,o,a;for(o=1;o<=Tn;o++)r=r+t[o-1]<<1,i[o]=r;for(a=0;a<=n;a++){let s=e[a*2+1];s!==0&&(e[a*2]=Dc(i[s]++,s))}},bm=()=>{let e,n,t,i,r;const o=new Array(Tn+1);for(t=0,i=0;i<Do-1;i++)for(Io[i]=t,e=0;e<1<<uo[i];e++)bi[t++]=i;for(bi[t-1]=i,r=0,i=0;i<16;i++)for(sr[i]=r,e=0;e<1<<Qi[i];e++)Mi[r++]=i;for(r>>=7;i<Wn;i++)for(sr[i]=r<<7,e=0;e<1<<Qi[i]-7;e++)Mi[256+r++]=i;for(n=0;n<=Tn;n++)o[n]=0;for(e=0;e<=143;)nn[e*2+1]=8,e++,o[8]++;for(;e<=255;)nn[e*2+1]=9,e++,o[9]++;for(;e<=279;)nn[e*2+1]=7,e++,o[7]++;for(;e<=287;)nn[e*2+1]=8,e++,o[8]++;for(Lc(nn,xi+1,o),e=0;e<Wn;e++)di[e*2+1]=5,di[e*2]=Dc(e,5);wc=new Or(nn,uo,Ii+1,xi,Tn),Ac=new Or(di,Qi,0,Wn,Tn),Rc=new Or(new Array(0),Em,0,Lo,vm)},Pc=e=>{let n;for(n=0;n<xi;n++)e.dyn_ltree[n*2]=0;for(n=0;n<Wn;n++)e.dyn_dtree[n*2]=0;for(n=0;n<Lo;n++)e.bl_tree[n*2]=0;e.dyn_ltree[Po*2]=1,e.opt_len=e.static_len=0,e.sym_next=e.matches=0},Ic=e=>{e.bi_valid>8?Ti(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},rs=(e,n,t,i)=>{const r=n*2,o=t*2;return e[r]<e[o]||e[r]===e[o]&&i[n]<=i[t]},Fr=(e,n,t)=>{const i=e.heap[t];let r=t<<1;for(;r<=e.heap_len&&(r<e.heap_len&&rs(n,e.heap[r+1],e.heap[r],e.depth)&&r++,!rs(n,i,e.heap[r],e.depth));)e.heap[t]=e.heap[r],t=r,r<<=1;e.heap[t]=i},os=(e,n,t)=>{let i,r,o=0,a,s;if(e.sym_next!==0)do i=e.pending_buf[e.sym_buf+o++]&255,i+=(e.pending_buf[e.sym_buf+o++]&255)<<8,r=e.pending_buf[e.sym_buf+o++],i===0?qt(e,r,n):(a=bi[r],qt(e,a+Ii+1,n),s=uo[a],s!==0&&(r-=Io[a],Rt(e,r,s)),i--,a=Cc(i),qt(e,a,t),s=Qi[a],s!==0&&(i-=sr[a],Rt(e,i,s)));while(o<e.sym_next);qt(e,Po,n)},ho=(e,n)=>{const t=n.dyn_tree,i=n.stat_desc.static_tree,r=n.stat_desc.has_stree,o=n.stat_desc.elems;let a,s,p=-1,c;for(e.heap_len=0,e.heap_max=xc,a=0;a<o;a++)t[a*2]!==0?(e.heap[++e.heap_len]=p=a,e.depth[a]=0):t[a*2+1]=0;for(;e.heap_len<2;)c=e.heap[++e.heap_len]=p<2?++p:0,t[c*2]=1,e.depth[c]=0,e.opt_len--,r&&(e.static_len-=i[c*2+1]);for(n.max_code=p,a=e.heap_len>>1;a>=1;a--)Fr(e,t,a);c=o;do a=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Fr(e,t,1),s=e.heap[1],e.heap[--e.heap_max]=a,e.heap[--e.heap_max]=s,t[c*2]=t[a*2]+t[s*2],e.depth[c]=(e.depth[a]>=e.depth[s]?e.depth[a]:e.depth[s])+1,t[a*2+1]=t[s*2+1]=c,e.heap[1]=c++,Fr(e,t,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Mm(e,n),Lc(t,p,e.bl_count)},as=(e,n,t)=>{let i,r=-1,o,a=n[0*2+1],s=0,p=7,c=4;for(a===0&&(p=138,c=3),n[(t+1)*2+1]=65535,i=0;i<=t;i++)o=a,a=n[(i+1)*2+1],!(++s<p&&o===a)&&(s<c?e.bl_tree[o*2]+=s:o!==0?(o!==r&&e.bl_tree[o*2]++,e.bl_tree[Mc*2]++):s<=10?e.bl_tree[bc*2]++:e.bl_tree[Tc*2]++,s=0,r=o,a===0?(p=138,c=3):o===a?(p=6,c=3):(p=7,c=4))},ss=(e,n,t)=>{let i,r=-1,o,a=n[0*2+1],s=0,p=7,c=4;for(a===0&&(p=138,c=3),i=0;i<=t;i++)if(o=a,a=n[(i+1)*2+1],!(++s<p&&o===a)){if(s<c)do qt(e,o,e.bl_tree);while(--s!==0);else o!==0?(o!==r&&(qt(e,o,e.bl_tree),s--),qt(e,Mc,e.bl_tree),Rt(e,s-3,2)):s<=10?(qt(e,bc,e.bl_tree),Rt(e,s-3,3)):(qt(e,Tc,e.bl_tree),Rt(e,s-11,7));s=0,r=o,a===0?(p=138,c=3):o===a?(p=6,c=3):(p=7,c=4)}},Tm=e=>{let n;for(as(e,e.dyn_ltree,e.l_desc.max_code),as(e,e.dyn_dtree,e.d_desc.max_code),ho(e,e.bl_desc),n=Lo-1;n>=3&&e.bl_tree[yc[n]*2+1]===0;n--);return e.opt_len+=3*(n+1)+5+5+4,n},ym=(e,n,t,i)=>{let r;for(Rt(e,n-257,5),Rt(e,t-1,5),Rt(e,i-4,4),r=0;r<i;r++)Rt(e,e.bl_tree[yc[r]*2+1],3);ss(e,e.dyn_ltree,n-1),ss(e,e.dyn_dtree,t-1)},wm=e=>{let n=4093624447,t;for(t=0;t<=31;t++,n>>>=1)if(n&1&&e.dyn_ltree[t*2]!==0)return ns;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return is;for(t=32;t<Ii;t++)if(e.dyn_ltree[t*2]!==0)return is;return ns};let cs=!1;const Am=e=>{cs||(bm(),cs=!0),e.l_desc=new kr(e.dyn_ltree,wc),e.d_desc=new kr(e.dyn_dtree,Ac),e.bl_desc=new kr(e.bl_tree,Rc),e.bi_buf=0,e.bi_valid=0,Pc(e)},Uc=(e,n,t,i)=>{Rt(e,(pm<<1)+(i?1:0),3),Ic(e),Ti(e,t),Ti(e,~t),t&&e.pending_buf.set(e.window.subarray(n,n+t),e.pending),e.pending+=t},Rm=e=>{Rt(e,Sc<<1,3),qt(e,Po,nn),xm(e)},Cm=(e,n,t,i)=>{let r,o,a=0;e.level>0?(e.strm.data_type===hm&&(e.strm.data_type=wm(e)),ho(e,e.l_desc),ho(e,e.d_desc),a=Tm(e),r=e.opt_len+3+7>>>3,o=e.static_len+3+7>>>3,o<=r&&(r=o)):r=o=t+5,t+4<=r&&n!==-1?Uc(e,n,t,i):e.strategy===um||o===r?(Rt(e,(Sc<<1)+(i?1:0),3),os(e,nn,di)):(Rt(e,(_m<<1)+(i?1:0),3),ym(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),os(e,e.dyn_ltree,e.dyn_dtree)),Pc(e),i&&Ic(e)},Dm=(e,n,t)=>(e.pending_buf[e.sym_buf+e.sym_next++]=n,e.pending_buf[e.sym_buf+e.sym_next++]=n>>8,e.pending_buf[e.sym_buf+e.sym_next++]=t,n===0?e.dyn_ltree[t*2]++:(e.matches++,n--,e.dyn_ltree[(bi[t]+Ii+1)*2]++,e.dyn_dtree[Cc(n)*2]++),e.sym_next===e.sym_end);var Lm=Am,Pm=Uc,Im=Cm,Um=Dm,Nm=Rm,Om={_tr_init:Lm,_tr_stored_block:Pm,_tr_flush_block:Im,_tr_tally:Um,_tr_align:Nm};const km=(e,n,t,i)=>{let r=e&65535|0,o=e>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+n[i++]|0,o=o+r|0;while(--a);r%=65521,o%=65521}return r|o<<16|0};var yi=km;const Fm=()=>{let e,n=[];for(var t=0;t<256;t++){e=t;for(var i=0;i<8;i++)e=e&1?3988292384^e>>>1:e>>>1;n[t]=e}return n},Bm=new Uint32Array(Fm()),Hm=(e,n,t,i)=>{const r=Bm,o=i+t;e^=-1;for(let a=i;a<o;a++)e=e>>>8^r[(e^n[a])&255];return e^-1};var _t=Hm,wi={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},pr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Gm,_tr_stored_block:po,_tr_flush_block:Vm,_tr_tally:hn,_tr_align:zm}=Om,{Z_NO_FLUSH:pn,Z_PARTIAL_FLUSH:Wm,Z_FULL_FLUSH:Xm,Z_FINISH:kt,Z_BLOCK:ls,Z_OK:Et,Z_STREAM_END:fs,Z_STREAM_ERROR:Kt,Z_DATA_ERROR:qm,Z_BUF_ERROR:Br,Z_DEFAULT_COMPRESSION:Ym,Z_FILTERED:Km,Z_HUFFMAN_ONLY:Vi,Z_RLE:Zm,Z_FIXED:$m,Z_DEFAULT_STRATEGY:jm,Z_UNKNOWN:Jm,Z_DEFLATED:_r}=pr,Qm=9,eg=15,tg=8,ng=29,ig=256,_o=ig+1+ng,rg=30,og=19,ag=2*_o+1,sg=15,ke=3,dn=258,Zt=dn+ke+1,cg=32,Kn=42,Uo=57,mo=69,go=73,vo=91,Eo=103,yn=113,si=666,bt=1,Jn=2,Dn=3,Qn=4,lg=3,wn=(e,n)=>(e.msg=wi[n],n),ds=e=>e*2-(e>4?9:0),ln=e=>{let n=e.length;for(;--n>=0;)e[n]=0},fg=e=>{let n,t,i,r=e.w_size;n=e.hash_size,i=n;do t=e.head[--i],e.head[i]=t>=r?t-r:0;while(--n);n=r,i=n;do t=e.prev[--i],e.prev[i]=t>=r?t-r:0;while(--n)};let dg=(e,n,t)=>(n<<e.hash_shift^t)&e.hash_mask,_n=dg;const Dt=e=>{const n=e.state;let t=n.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(e.output.set(n.pending_buf.subarray(n.pending_out,n.pending_out+t),e.next_out),e.next_out+=t,n.pending_out+=t,e.total_out+=t,e.avail_out-=t,n.pending-=t,n.pending===0&&(n.pending_out=0))},Lt=(e,n)=>{Vm(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,n),e.block_start=e.strstart,Dt(e.strm)},qe=(e,n)=>{e.pending_buf[e.pending++]=n},ii=(e,n)=>{e.pending_buf[e.pending++]=n>>>8&255,e.pending_buf[e.pending++]=n&255},So=(e,n,t,i)=>{let r=e.avail_in;return r>i&&(r=i),r===0?0:(e.avail_in-=r,n.set(e.input.subarray(e.next_in,e.next_in+r),t),e.state.wrap===1?e.adler=yi(e.adler,n,r,t):e.state.wrap===2&&(e.adler=_t(e.adler,n,r,t)),e.next_in+=r,e.total_in+=r,r)},Nc=(e,n)=>{let t=e.max_chain_length,i=e.strstart,r,o,a=e.prev_length,s=e.nice_match;const p=e.strstart>e.w_size-Zt?e.strstart-(e.w_size-Zt):0,c=e.window,f=e.w_mask,E=e.prev,m=e.strstart+dn;let g=c[i+a-1],y=c[i+a];e.prev_length>=e.good_match&&(t>>=2),s>e.lookahead&&(s=e.lookahead);do if(r=n,!(c[r+a]!==y||c[r+a-1]!==g||c[r]!==c[i]||c[++r]!==c[i+1])){i+=2,r++;do;while(c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&i<m);if(o=dn-(m-i),i=m-dn,o>a){if(e.match_start=n,a=o,o>=s)break;g=c[i+a-1],y=c[i+a]}}while((n=E[n&f])>p&&--t!==0);return a<=e.lookahead?a:e.lookahead},Zn=e=>{const n=e.w_size;let t,i,r;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=n+(n-Zt)&&(e.window.set(e.window.subarray(n,n+n-i),0),e.match_start-=n,e.strstart-=n,e.block_start-=n,e.insert>e.strstart&&(e.insert=e.strstart),fg(e),i+=n),e.strm.avail_in===0)break;if(t=So(e.strm,e.window,e.strstart+e.lookahead,i),e.lookahead+=t,e.lookahead+e.insert>=ke)for(r=e.strstart-e.insert,e.ins_h=e.window[r],e.ins_h=_n(e,e.ins_h,e.window[r+1]);e.insert&&(e.ins_h=_n(e,e.ins_h,e.window[r+ke-1]),e.prev[r&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=r,r++,e.insert--,!(e.lookahead+e.insert<ke)););}while(e.lookahead<Zt&&e.strm.avail_in!==0)},Oc=(e,n)=>{let t=e.pending_buf_size-5>e.w_size?e.w_size:e.pending_buf_size-5,i,r,o,a=0,s=e.strm.avail_in;do{if(i=65535,o=e.bi_valid+42>>3,e.strm.avail_out<o||(o=e.strm.avail_out-o,r=e.strstart-e.block_start,i>r+e.strm.avail_in&&(i=r+e.strm.avail_in),i>o&&(i=o),i<t&&(i===0&&n!==kt||n===pn||i!==r+e.strm.avail_in)))break;a=n===kt&&i===r+e.strm.avail_in?1:0,po(e,0,0,a),e.pending_buf[e.pending-4]=i,e.pending_buf[e.pending-3]=i>>8,e.pending_buf[e.pending-2]=~i,e.pending_buf[e.pending-1]=~i>>8,Dt(e.strm),r&&(r>i&&(r=i),e.strm.output.set(e.window.subarray(e.block_start,e.block_start+r),e.strm.next_out),e.strm.next_out+=r,e.strm.avail_out-=r,e.strm.total_out+=r,e.block_start+=r,i-=r),i&&(So(e.strm,e.strm.output,e.strm.next_out,i),e.strm.next_out+=i,e.strm.avail_out-=i,e.strm.total_out+=i)}while(a===0);return s-=e.strm.avail_in,s&&(s>=e.w_size?(e.matches=2,e.window.set(e.strm.input.subarray(e.strm.next_in-e.w_size,e.strm.next_in),0),e.strstart=e.w_size,e.insert=e.strstart):(e.window_size-e.strstart<=s&&(e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,e.insert>e.strstart&&(e.insert=e.strstart)),e.window.set(e.strm.input.subarray(e.strm.next_in-s,e.strm.next_in),e.strstart),e.strstart+=s,e.insert+=s>e.w_size-e.insert?e.w_size-e.insert:s),e.block_start=e.strstart),e.high_water<e.strstart&&(e.high_water=e.strstart),a?Qn:n!==pn&&n!==kt&&e.strm.avail_in===0&&e.strstart===e.block_start?Jn:(o=e.window_size-e.strstart,e.strm.avail_in>o&&e.block_start>=e.w_size&&(e.block_start-=e.w_size,e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,o+=e.w_size,e.insert>e.strstart&&(e.insert=e.strstart)),o>e.strm.avail_in&&(o=e.strm.avail_in),o&&(So(e.strm,e.window,e.strstart,o),e.strstart+=o,e.insert+=o>e.w_size-e.insert?e.w_size-e.insert:o),e.high_water<e.strstart&&(e.high_water=e.strstart),o=e.bi_valid+42>>3,o=e.pending_buf_size-o>65535?65535:e.pending_buf_size-o,t=o>e.w_size?e.w_size:o,r=e.strstart-e.block_start,(r>=t||(r||n===kt)&&n!==pn&&e.strm.avail_in===0&&r<=o)&&(i=r>o?o:r,a=n===kt&&e.strm.avail_in===0&&i===r?1:0,po(e,e.block_start,i,a),e.block_start+=i,Dt(e.strm)),a?Dn:bt)},Hr=(e,n)=>{let t,i;for(;;){if(e.lookahead<Zt){if(Zn(e),e.lookahead<Zt&&n===pn)return bt;if(e.lookahead===0)break}if(t=0,e.lookahead>=ke&&(e.ins_h=_n(e,e.ins_h,e.window[e.strstart+ke-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),t!==0&&e.strstart-t<=e.w_size-Zt&&(e.match_length=Nc(e,t)),e.match_length>=ke)if(i=hn(e,e.strstart-e.match_start,e.match_length-ke),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ke){e.match_length--;do e.strstart++,e.ins_h=_n(e,e.ins_h,e.window[e.strstart+ke-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=_n(e,e.ins_h,e.window[e.strstart+1]);else i=hn(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(Lt(e,!1),e.strm.avail_out===0))return bt}return e.insert=e.strstart<ke-1?e.strstart:ke-1,n===kt?(Lt(e,!0),e.strm.avail_out===0?Dn:Qn):e.sym_next&&(Lt(e,!1),e.strm.avail_out===0)?bt:Jn},Fn=(e,n)=>{let t,i,r;for(;;){if(e.lookahead<Zt){if(Zn(e),e.lookahead<Zt&&n===pn)return bt;if(e.lookahead===0)break}if(t=0,e.lookahead>=ke&&(e.ins_h=_n(e,e.ins_h,e.window[e.strstart+ke-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=ke-1,t!==0&&e.prev_length<e.max_lazy_match&&e.strstart-t<=e.w_size-Zt&&(e.match_length=Nc(e,t),e.match_length<=5&&(e.strategy===Km||e.match_length===ke&&e.strstart-e.match_start>4096)&&(e.match_length=ke-1)),e.prev_length>=ke&&e.match_length<=e.prev_length){r=e.strstart+e.lookahead-ke,i=hn(e,e.strstart-1-e.prev_match,e.prev_length-ke),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=r&&(e.ins_h=_n(e,e.ins_h,e.window[e.strstart+ke-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=ke-1,e.strstart++,i&&(Lt(e,!1),e.strm.avail_out===0))return bt}else if(e.match_available){if(i=hn(e,0,e.window[e.strstart-1]),i&&Lt(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return bt}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=hn(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<ke-1?e.strstart:ke-1,n===kt?(Lt(e,!0),e.strm.avail_out===0?Dn:Qn):e.sym_next&&(Lt(e,!1),e.strm.avail_out===0)?bt:Jn},ug=(e,n)=>{let t,i,r,o;const a=e.window;for(;;){if(e.lookahead<=dn){if(Zn(e),e.lookahead<=dn&&n===pn)return bt;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=ke&&e.strstart>0&&(r=e.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){o=e.strstart+dn;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<o);e.match_length=dn-(o-r),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=ke?(t=hn(e,1,e.match_length-ke),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(t=hn(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),t&&(Lt(e,!1),e.strm.avail_out===0))return bt}return e.insert=0,n===kt?(Lt(e,!0),e.strm.avail_out===0?Dn:Qn):e.sym_next&&(Lt(e,!1),e.strm.avail_out===0)?bt:Jn},hg=(e,n)=>{let t;for(;;){if(e.lookahead===0&&(Zn(e),e.lookahead===0)){if(n===pn)return bt;break}if(e.match_length=0,t=hn(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,t&&(Lt(e,!1),e.strm.avail_out===0))return bt}return e.insert=0,n===kt?(Lt(e,!0),e.strm.avail_out===0?Dn:Qn):e.sym_next&&(Lt(e,!1),e.strm.avail_out===0)?bt:Jn};function zt(e,n,t,i,r){this.good_length=e,this.max_lazy=n,this.nice_length=t,this.max_chain=i,this.func=r}const ci=[new zt(0,0,0,0,Oc),new zt(4,4,8,4,Hr),new zt(4,5,16,8,Hr),new zt(4,6,32,32,Hr),new zt(4,4,16,16,Fn),new zt(8,16,32,32,Fn),new zt(8,16,128,128,Fn),new zt(8,32,128,256,Fn),new zt(32,128,258,1024,Fn),new zt(32,258,258,4096,Fn)],pg=e=>{e.window_size=2*e.w_size,ln(e.head),e.max_lazy_match=ci[e.level].max_lazy,e.good_match=ci[e.level].good_length,e.nice_match=ci[e.level].nice_length,e.max_chain_length=ci[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=ke-1,e.match_available=0,e.ins_h=0};function _g(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_r,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(ag*2),this.dyn_dtree=new Uint16Array((2*rg+1)*2),this.bl_tree=new Uint16Array((2*og+1)*2),ln(this.dyn_ltree),ln(this.dyn_dtree),ln(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(sg+1),this.heap=new Uint16Array(2*_o+1),ln(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*_o+1),ln(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Ui=e=>{if(!e)return 1;const n=e.state;return!n||n.strm!==e||n.status!==Kn&&n.status!==Uo&&n.status!==mo&&n.status!==go&&n.status!==vo&&n.status!==Eo&&n.status!==yn&&n.status!==si?1:0},kc=e=>{if(Ui(e))return wn(e,Kt);e.total_in=e.total_out=0,e.data_type=Jm;const n=e.state;return n.pending=0,n.pending_out=0,n.wrap<0&&(n.wrap=-n.wrap),n.status=n.wrap===2?Uo:n.wrap?Kn:yn,e.adler=n.wrap===2?0:1,n.last_flush=-2,Gm(n),Et},Fc=e=>{const n=kc(e);return n===Et&&pg(e.state),n},mg=(e,n)=>Ui(e)||e.state.wrap!==2?Kt:(e.state.gzhead=n,Et),Bc=(e,n,t,i,r,o)=>{if(!e)return Kt;let a=1;if(n===Ym&&(n=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>Qm||t!==_r||i<8||i>15||n<0||n>9||o<0||o>$m||i===8&&a!==1)return wn(e,Kt);i===8&&(i=9);const s=new _g;return e.state=s,s.strm=e,s.status=Kn,s.wrap=a,s.gzhead=null,s.w_bits=i,s.w_size=1<<s.w_bits,s.w_mask=s.w_size-1,s.hash_bits=r+7,s.hash_size=1<<s.hash_bits,s.hash_mask=s.hash_size-1,s.hash_shift=~~((s.hash_bits+ke-1)/ke),s.window=new Uint8Array(s.w_size*2),s.head=new Uint16Array(s.hash_size),s.prev=new Uint16Array(s.w_size),s.lit_bufsize=1<<r+6,s.pending_buf_size=s.lit_bufsize*4,s.pending_buf=new Uint8Array(s.pending_buf_size),s.sym_buf=s.lit_bufsize,s.sym_end=(s.lit_bufsize-1)*3,s.level=n,s.strategy=o,s.method=t,Fc(e)},gg=(e,n)=>Bc(e,n,_r,eg,tg,jm),vg=(e,n)=>{if(Ui(e)||n>ls||n<0)return e?wn(e,Kt):Kt;const t=e.state;if(!e.output||e.avail_in!==0&&!e.input||t.status===si&&n!==kt)return wn(e,e.avail_out===0?Br:Kt);const i=t.last_flush;if(t.last_flush=n,t.pending!==0){if(Dt(e),e.avail_out===0)return t.last_flush=-1,Et}else if(e.avail_in===0&&ds(n)<=ds(i)&&n!==kt)return wn(e,Br);if(t.status===si&&e.avail_in!==0)return wn(e,Br);if(t.status===Kn&&t.wrap===0&&(t.status=yn),t.status===Kn){let r=_r+(t.w_bits-8<<4)<<8,o=-1;if(t.strategy>=Vi||t.level<2?o=0:t.level<6?o=1:t.level===6?o=2:o=3,r|=o<<6,t.strstart!==0&&(r|=cg),r+=31-r%31,ii(t,r),t.strstart!==0&&(ii(t,e.adler>>>16),ii(t,e.adler&65535)),e.adler=1,t.status=yn,Dt(e),t.pending!==0)return t.last_flush=-1,Et}if(t.status===Uo){if(e.adler=0,qe(t,31),qe(t,139),qe(t,8),t.gzhead)qe(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),qe(t,t.gzhead.time&255),qe(t,t.gzhead.time>>8&255),qe(t,t.gzhead.time>>16&255),qe(t,t.gzhead.time>>24&255),qe(t,t.level===9?2:t.strategy>=Vi||t.level<2?4:0),qe(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(qe(t,t.gzhead.extra.length&255),qe(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(e.adler=_t(e.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=mo;else if(qe(t,0),qe(t,0),qe(t,0),qe(t,0),qe(t,0),qe(t,t.level===9?2:t.strategy>=Vi||t.level<2?4:0),qe(t,lg),t.status=yn,Dt(e),t.pending!==0)return t.last_flush=-1,Et}if(t.status===mo){if(t.gzhead.extra){let r=t.pending,o=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+o>t.pending_buf_size;){let s=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=s,Dt(e),t.pending!==0)return t.last_flush=-1,Et;r=0,o-=s}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending+=o,t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=go}if(t.status===go){if(t.gzhead.name){let r=t.pending,o;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r)),Dt(e),t.pending!==0)return t.last_flush=-1,Et;r=0}t.gzindex<t.gzhead.name.length?o=t.gzhead.name.charCodeAt(t.gzindex++)&255:o=0,qe(t,o)}while(o!==0);t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=vo}if(t.status===vo){if(t.gzhead.comment){let r=t.pending,o;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r)),Dt(e),t.pending!==0)return t.last_flush=-1,Et;r=0}t.gzindex<t.gzhead.comment.length?o=t.gzhead.comment.charCodeAt(t.gzindex++)&255:o=0,qe(t,o)}while(o!==0);t.gzhead.hcrc&&t.pending>r&&(e.adler=_t(e.adler,t.pending_buf,t.pending-r,r))}t.status=Eo}if(t.status===Eo){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Dt(e),t.pending!==0))return t.last_flush=-1,Et;qe(t,e.adler&255),qe(t,e.adler>>8&255),e.adler=0}if(t.status=yn,Dt(e),t.pending!==0)return t.last_flush=-1,Et}if(e.avail_in!==0||t.lookahead!==0||n!==pn&&t.status!==si){let r=t.level===0?Oc(t,n):t.strategy===Vi?hg(t,n):t.strategy===Zm?ug(t,n):ci[t.level].func(t,n);if((r===Dn||r===Qn)&&(t.status=si),r===bt||r===Dn)return e.avail_out===0&&(t.last_flush=-1),Et;if(r===Jn&&(n===Wm?zm(t):n!==ls&&(po(t,0,0,!1),n===Xm&&(ln(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Dt(e),e.avail_out===0))return t.last_flush=-1,Et}return n!==kt?Et:t.wrap<=0?fs:(t.wrap===2?(qe(t,e.adler&255),qe(t,e.adler>>8&255),qe(t,e.adler>>16&255),qe(t,e.adler>>24&255),qe(t,e.total_in&255),qe(t,e.total_in>>8&255),qe(t,e.total_in>>16&255),qe(t,e.total_in>>24&255)):(ii(t,e.adler>>>16),ii(t,e.adler&65535)),Dt(e),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Et:fs)},Eg=e=>{if(Ui(e))return Kt;const n=e.state.status;return e.state=null,n===yn?wn(e,qm):Et},Sg=(e,n)=>{let t=n.length;if(Ui(e))return Kt;const i=e.state,r=i.wrap;if(r===2||r===1&&i.status!==Kn||i.lookahead)return Kt;if(r===1&&(e.adler=yi(e.adler,n,t,0)),i.wrap=0,t>=i.w_size){r===0&&(ln(i.head),i.strstart=0,i.block_start=0,i.insert=0);let p=new Uint8Array(i.w_size);p.set(n.subarray(t-i.w_size,t),0),n=p,t=i.w_size}const o=e.avail_in,a=e.next_in,s=e.input;for(e.avail_in=t,e.next_in=0,e.input=n,Zn(i);i.lookahead>=ke;){let p=i.strstart,c=i.lookahead-(ke-1);do i.ins_h=_n(i,i.ins_h,i.window[p+ke-1]),i.prev[p&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=p,p++;while(--c);i.strstart=p,i.lookahead=ke-1,Zn(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=ke-1,i.match_available=0,e.next_in=a,e.input=s,e.avail_in=o,i.wrap=r,Et};var xg=gg,Mg=Bc,bg=Fc,Tg=kc,yg=mg,wg=vg,Ag=Eg,Rg=Sg,Cg="pako deflate (from Nodeca project)",ui={deflateInit:xg,deflateInit2:Mg,deflateReset:bg,deflateResetKeep:Tg,deflateSetHeader:yg,deflate:wg,deflateEnd:Ag,deflateSetDictionary:Rg,deflateInfo:Cg};const Dg=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var Lg=function(e){const n=Array.prototype.slice.call(arguments,1);for(;n.length;){const t=n.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)Dg(t,i)&&(e[i]=t[i])}}return e},Pg=e=>{let n=0;for(let i=0,r=e.length;i<r;i++)n+=e[i].length;const t=new Uint8Array(n);for(let i=0,r=0,o=e.length;i<o;i++){let a=e[i];t.set(a,r),r+=a.length}return t},mr={assign:Lg,flattenChunks:Pg};let Hc=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Hc=!1}const Ai=new Uint8Array(256);for(let e=0;e<256;e++)Ai[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Ai[254]=Ai[254]=1;var Ig=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let n,t,i,r,o,a=e.length,s=0;for(r=0;r<a;r++)t=e.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=e.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),s+=t<128?1:t<2048?2:t<65536?3:4;for(n=new Uint8Array(s),o=0,r=0;o<s;r++)t=e.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=e.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?n[o++]=t:t<2048?(n[o++]=192|t>>>6,n[o++]=128|t&63):t<65536?(n[o++]=224|t>>>12,n[o++]=128|t>>>6&63,n[o++]=128|t&63):(n[o++]=240|t>>>18,n[o++]=128|t>>>12&63,n[o++]=128|t>>>6&63,n[o++]=128|t&63);return n};const Ug=(e,n)=>{if(n<65534&&e.subarray&&Hc)return String.fromCharCode.apply(null,e.length===n?e:e.subarray(0,n));let t="";for(let i=0;i<n;i++)t+=String.fromCharCode(e[i]);return t};var Ng=(e,n)=>{const t=n||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,n));let i,r;const o=new Array(t*2);for(r=0,i=0;i<t;){let a=e[i++];if(a<128){o[r++]=a;continue}let s=Ai[a];if(s>4){o[r++]=65533,i+=s-1;continue}for(a&=s===2?31:s===3?15:7;s>1&&i<t;)a=a<<6|e[i++]&63,s--;if(s>1){o[r++]=65533;continue}a<65536?o[r++]=a:(a-=65536,o[r++]=55296|a>>10&1023,o[r++]=56320|a&1023)}return Ug(o,r)},Og=(e,n)=>{n=n||e.length,n>e.length&&(n=e.length);let t=n-1;for(;t>=0&&(e[t]&192)===128;)t--;return t<0||t===0?n:t+Ai[e[t]]>n?t:n},Ri={string2buf:Ig,buf2string:Ng,utf8border:Og};function kg(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Gc=kg;const Vc=Object.prototype.toString,{Z_NO_FLUSH:Fg,Z_SYNC_FLUSH:Bg,Z_FULL_FLUSH:Hg,Z_FINISH:Gg,Z_OK:cr,Z_STREAM_END:Vg,Z_DEFAULT_COMPRESSION:zg,Z_DEFAULT_STRATEGY:Wg,Z_DEFLATED:Xg}=pr;function No(e){this.options=mr.assign({level:zg,method:Xg,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wg},e||{});let n=this.options;n.raw&&n.windowBits>0?n.windowBits=-n.windowBits:n.gzip&&n.windowBits>0&&n.windowBits<16&&(n.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Gc,this.strm.avail_out=0;let t=ui.deflateInit2(this.strm,n.level,n.method,n.windowBits,n.memLevel,n.strategy);if(t!==cr)throw new Error(wi[t]);if(n.header&&ui.deflateSetHeader(this.strm,n.header),n.dictionary){let i;if(typeof n.dictionary=="string"?i=Ri.string2buf(n.dictionary):Vc.call(n.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(n.dictionary):i=n.dictionary,t=ui.deflateSetDictionary(this.strm,i),t!==cr)throw new Error(wi[t]);this._dict_set=!0}}No.prototype.push=function(e,n){const t=this.strm,i=this.options.chunkSize;let r,o;if(this.ended)return!1;for(n===~~n?o=n:o=n===!0?Gg:Fg,typeof e=="string"?t.input=Ri.string2buf(e):Vc.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(o===Bg||o===Hg)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=ui.deflate(t,o),r===Vg)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=ui.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===cr;if(t.avail_out===0){this.onData(t.output);continue}if(o>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};No.prototype.onData=function(e){this.chunks.push(e)};No.prototype.onEnd=function(e){e===cr&&(this.result=mr.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};const zi=16209,qg=16191;var Yg=function(n,t){let i,r,o,a,s,p,c,f,E,m,g,y,w,d,l,D,M,S,N,P,A,k,v,_;const T=n.state;i=n.next_in,v=n.input,r=i+(n.avail_in-5),o=n.next_out,_=n.output,a=o-(t-n.avail_out),s=o+(n.avail_out-257),p=T.dmax,c=T.wsize,f=T.whave,E=T.wnext,m=T.window,g=T.hold,y=T.bits,w=T.lencode,d=T.distcode,l=(1<<T.lenbits)-1,D=(1<<T.distbits)-1;e:do{y<15&&(g+=v[i++]<<y,y+=8,g+=v[i++]<<y,y+=8),M=w[g&l];t:for(;;){if(S=M>>>24,g>>>=S,y-=S,S=M>>>16&255,S===0)_[o++]=M&65535;else if(S&16){N=M&65535,S&=15,S&&(y<S&&(g+=v[i++]<<y,y+=8),N+=g&(1<<S)-1,g>>>=S,y-=S),y<15&&(g+=v[i++]<<y,y+=8,g+=v[i++]<<y,y+=8),M=d[g&D];n:for(;;){if(S=M>>>24,g>>>=S,y-=S,S=M>>>16&255,S&16){if(P=M&65535,S&=15,y<S&&(g+=v[i++]<<y,y+=8,y<S&&(g+=v[i++]<<y,y+=8)),P+=g&(1<<S)-1,P>p){n.msg="invalid distance too far back",T.mode=zi;break e}if(g>>>=S,y-=S,S=o-a,P>S){if(S=P-S,S>f&&T.sane){n.msg="invalid distance too far back",T.mode=zi;break e}if(A=0,k=m,E===0){if(A+=c-S,S<N){N-=S;do _[o++]=m[A++];while(--S);A=o-P,k=_}}else if(E<S){if(A+=c+E-S,S-=E,S<N){N-=S;do _[o++]=m[A++];while(--S);if(A=0,E<N){S=E,N-=S;do _[o++]=m[A++];while(--S);A=o-P,k=_}}}else if(A+=E-S,S<N){N-=S;do _[o++]=m[A++];while(--S);A=o-P,k=_}for(;N>2;)_[o++]=k[A++],_[o++]=k[A++],_[o++]=k[A++],N-=3;N&&(_[o++]=k[A++],N>1&&(_[o++]=k[A++]))}else{A=o-P;do _[o++]=_[A++],_[o++]=_[A++],_[o++]=_[A++],N-=3;while(N>2);N&&(_[o++]=_[A++],N>1&&(_[o++]=_[A++]))}}else if(S&64){n.msg="invalid distance code",T.mode=zi;break e}else{M=d[(M&65535)+(g&(1<<S)-1)];continue n}break}}else if(S&64)if(S&32){T.mode=qg;break e}else{n.msg="invalid literal/length code",T.mode=zi;break e}else{M=w[(M&65535)+(g&(1<<S)-1)];continue t}break}}while(i<r&&o<s);N=y>>3,i-=N,y-=N<<3,g&=(1<<y)-1,n.next_in=i,n.next_out=o,n.avail_in=i<r?5+(r-i):5-(i-r),n.avail_out=o<s?257+(s-o):257-(o-s),T.hold=g,T.bits=y};const Bn=15,us=852,hs=592,ps=0,Gr=1,_s=2,Kg=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Zg=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),$g=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),jg=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Jg=(e,n,t,i,r,o,a,s)=>{const p=s.bits;let c=0,f=0,E=0,m=0,g=0,y=0,w=0,d=0,l=0,D=0,M,S,N,P,A,k=null,v;const _=new Uint16Array(Bn+1),T=new Uint16Array(Bn+1);let z=null,H,Y,$;for(c=0;c<=Bn;c++)_[c]=0;for(f=0;f<i;f++)_[n[t+f]]++;for(g=p,m=Bn;m>=1&&_[m]===0;m--);if(g>m&&(g=m),m===0)return r[o++]=1<<24|64<<16|0,r[o++]=1<<24|64<<16|0,s.bits=1,0;for(E=1;E<m&&_[E]===0;E++);for(g<E&&(g=E),d=1,c=1;c<=Bn;c++)if(d<<=1,d-=_[c],d<0)return-1;if(d>0&&(e===ps||m!==1))return-1;for(T[1]=0,c=1;c<Bn;c++)T[c+1]=T[c]+_[c];for(f=0;f<i;f++)n[t+f]!==0&&(a[T[n[t+f]]++]=f);if(e===ps?(k=z=a,v=20):e===Gr?(k=Kg,z=Zg,v=257):(k=$g,z=jg,v=0),D=0,f=0,c=E,A=o,y=g,w=0,N=-1,l=1<<g,P=l-1,e===Gr&&l>us||e===_s&&l>hs)return 1;for(;;){H=c-w,a[f]+1<v?(Y=0,$=a[f]):a[f]>=v?(Y=z[a[f]-v],$=k[a[f]-v]):(Y=96,$=0),M=1<<c-w,S=1<<y,E=S;do S-=M,r[A+(D>>w)+S]=H<<24|Y<<16|$|0;while(S!==0);for(M=1<<c-1;D&M;)M>>=1;if(M!==0?(D&=M-1,D+=M):D=0,f++,--_[c]===0){if(c===m)break;c=n[t+a[f]]}if(c>g&&(D&P)!==N){for(w===0&&(w=g),A+=E,y=c-w,d=1<<y;y+w<m&&(d-=_[y+w],!(d<=0));)y++,d<<=1;if(l+=1<<y,e===Gr&&l>us||e===_s&&l>hs)return 1;N=D&P,r[N]=g<<24|y<<16|A-o|0}}return D!==0&&(r[A+D]=c-w<<24|64<<16|0),s.bits=g,0};var hi=Jg;const Qg=0,zc=1,Wc=2,{Z_FINISH:ms,Z_BLOCK:ev,Z_TREES:Wi,Z_OK:Ln,Z_STREAM_END:tv,Z_NEED_DICT:nv,Z_STREAM_ERROR:Bt,Z_DATA_ERROR:Xc,Z_MEM_ERROR:qc,Z_BUF_ERROR:iv,Z_DEFLATED:gs}=pr,gr=16180,vs=16181,Es=16182,Ss=16183,xs=16184,Ms=16185,bs=16186,Ts=16187,ys=16188,ws=16189,lr=16190,en=16191,Vr=16192,As=16193,zr=16194,Rs=16195,Cs=16196,Ds=16197,Ls=16198,Xi=16199,qi=16200,Ps=16201,Is=16202,Us=16203,Ns=16204,Os=16205,Wr=16206,ks=16207,Fs=16208,rt=16209,Yc=16210,Kc=16211,rv=852,ov=592,av=15,sv=av,Bs=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function cv(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Pn=e=>{if(!e)return 1;const n=e.state;return!n||n.strm!==e||n.mode<gr||n.mode>Kc?1:0},Zc=e=>{if(Pn(e))return Bt;const n=e.state;return e.total_in=e.total_out=n.total=0,e.msg="",n.wrap&&(e.adler=n.wrap&1),n.mode=gr,n.last=0,n.havedict=0,n.flags=-1,n.dmax=32768,n.head=null,n.hold=0,n.bits=0,n.lencode=n.lendyn=new Int32Array(rv),n.distcode=n.distdyn=new Int32Array(ov),n.sane=1,n.back=-1,Ln},$c=e=>{if(Pn(e))return Bt;const n=e.state;return n.wsize=0,n.whave=0,n.wnext=0,Zc(e)},jc=(e,n)=>{let t;if(Pn(e))return Bt;const i=e.state;return n<0?(t=0,n=-n):(t=(n>>4)+5,n<48&&(n&=15)),n&&(n<8||n>15)?Bt:(i.window!==null&&i.wbits!==n&&(i.window=null),i.wrap=t,i.wbits=n,$c(e))},Jc=(e,n)=>{if(!e)return Bt;const t=new cv;e.state=t,t.strm=e,t.window=null,t.mode=gr;const i=jc(e,n);return i!==Ln&&(e.state=null),i},lv=e=>Jc(e,sv);let Hs=!0,Xr,qr;const fv=e=>{if(Hs){Xr=new Int32Array(512),qr=new Int32Array(32);let n=0;for(;n<144;)e.lens[n++]=8;for(;n<256;)e.lens[n++]=9;for(;n<280;)e.lens[n++]=7;for(;n<288;)e.lens[n++]=8;for(hi(zc,e.lens,0,288,Xr,0,e.work,{bits:9}),n=0;n<32;)e.lens[n++]=5;hi(Wc,e.lens,0,32,qr,0,e.work,{bits:5}),Hs=!1}e.lencode=Xr,e.lenbits=9,e.distcode=qr,e.distbits=5},Qc=(e,n,t,i)=>{let r;const o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new Uint8Array(o.wsize)),i>=o.wsize?(o.window.set(n.subarray(t-o.wsize,t),0),o.wnext=0,o.whave=o.wsize):(r=o.wsize-o.wnext,r>i&&(r=i),o.window.set(n.subarray(t-i,t-i+r),o.wnext),i-=r,i?(o.window.set(n.subarray(t-i,t),0),o.wnext=i,o.whave=o.wsize):(o.wnext+=r,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=r))),0},dv=(e,n)=>{let t,i,r,o,a,s,p,c,f,E,m,g,y,w,d=0,l,D,M,S,N,P,A,k;const v=new Uint8Array(4);let _,T;const z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Pn(e)||!e.output||!e.input&&e.avail_in!==0)return Bt;t=e.state,t.mode===en&&(t.mode=Vr),a=e.next_out,r=e.output,p=e.avail_out,o=e.next_in,i=e.input,s=e.avail_in,c=t.hold,f=t.bits,E=s,m=p,k=Ln;e:for(;;)switch(t.mode){case gr:if(t.wrap===0){t.mode=Vr;break}for(;f<16;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(t.wrap&2&&c===35615){t.wbits===0&&(t.wbits=15),t.check=0,v[0]=c&255,v[1]=c>>>8&255,t.check=_t(t.check,v,2,0),c=0,f=0,t.mode=vs;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((c&255)<<8)+(c>>8))%31){e.msg="incorrect header check",t.mode=rt;break}if((c&15)!==gs){e.msg="unknown compression method",t.mode=rt;break}if(c>>>=4,f-=4,A=(c&15)+8,t.wbits===0&&(t.wbits=A),A>15||A>t.wbits){e.msg="invalid window size",t.mode=rt;break}t.dmax=1<<t.wbits,t.flags=0,e.adler=t.check=1,t.mode=c&512?ws:en,c=0,f=0;break;case vs:for(;f<16;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(t.flags=c,(t.flags&255)!==gs){e.msg="unknown compression method",t.mode=rt;break}if(t.flags&57344){e.msg="unknown header flags set",t.mode=rt;break}t.head&&(t.head.text=c>>8&1),t.flags&512&&t.wrap&4&&(v[0]=c&255,v[1]=c>>>8&255,t.check=_t(t.check,v,2,0)),c=0,f=0,t.mode=Es;case Es:for(;f<32;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.head&&(t.head.time=c),t.flags&512&&t.wrap&4&&(v[0]=c&255,v[1]=c>>>8&255,v[2]=c>>>16&255,v[3]=c>>>24&255,t.check=_t(t.check,v,4,0)),c=0,f=0,t.mode=Ss;case Ss:for(;f<16;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.head&&(t.head.xflags=c&255,t.head.os=c>>8),t.flags&512&&t.wrap&4&&(v[0]=c&255,v[1]=c>>>8&255,t.check=_t(t.check,v,2,0)),c=0,f=0,t.mode=xs;case xs:if(t.flags&1024){for(;f<16;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.length=c,t.head&&(t.head.extra_len=c),t.flags&512&&t.wrap&4&&(v[0]=c&255,v[1]=c>>>8&255,t.check=_t(t.check,v,2,0)),c=0,f=0}else t.head&&(t.head.extra=null);t.mode=Ms;case Ms:if(t.flags&1024&&(g=t.length,g>s&&(g=s),g&&(t.head&&(A=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(o,o+g),A)),t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,g,o)),s-=g,o+=g,t.length-=g),t.length))break e;t.length=0,t.mode=bs;case bs:if(t.flags&2048){if(s===0)break e;g=0;do A=i[o+g++],t.head&&A&&t.length<65536&&(t.head.name+=String.fromCharCode(A));while(A&&g<s);if(t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,g,o)),s-=g,o+=g,A)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Ts;case Ts:if(t.flags&4096){if(s===0)break e;g=0;do A=i[o+g++],t.head&&A&&t.length<65536&&(t.head.comment+=String.fromCharCode(A));while(A&&g<s);if(t.flags&512&&t.wrap&4&&(t.check=_t(t.check,i,g,o)),s-=g,o+=g,A)break e}else t.head&&(t.head.comment=null);t.mode=ys;case ys:if(t.flags&512){for(;f<16;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(t.wrap&4&&c!==(t.check&65535)){e.msg="header crc mismatch",t.mode=rt;break}c=0,f=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=en;break;case ws:for(;f<32;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}e.adler=t.check=Bs(c),c=0,f=0,t.mode=lr;case lr:if(t.havedict===0)return e.next_out=a,e.avail_out=p,e.next_in=o,e.avail_in=s,t.hold=c,t.bits=f,nv;e.adler=t.check=1,t.mode=en;case en:if(n===ev||n===Wi)break e;case Vr:if(t.last){c>>>=f&7,f-=f&7,t.mode=Wr;break}for(;f<3;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}switch(t.last=c&1,c>>>=1,f-=1,c&3){case 0:t.mode=As;break;case 1:if(fv(t),t.mode=Xi,n===Wi){c>>>=2,f-=2;break e}break;case 2:t.mode=Cs;break;case 3:e.msg="invalid block type",t.mode=rt}c>>>=2,f-=2;break;case As:for(c>>>=f&7,f-=f&7;f<32;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if((c&65535)!==(c>>>16^65535)){e.msg="invalid stored block lengths",t.mode=rt;break}if(t.length=c&65535,c=0,f=0,t.mode=zr,n===Wi)break e;case zr:t.mode=Rs;case Rs:if(g=t.length,g){if(g>s&&(g=s),g>p&&(g=p),g===0)break e;r.set(i.subarray(o,o+g),a),s-=g,o+=g,p-=g,a+=g,t.length-=g;break}t.mode=en;break;case Cs:for(;f<14;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(t.nlen=(c&31)+257,c>>>=5,f-=5,t.ndist=(c&31)+1,c>>>=5,f-=5,t.ncode=(c&15)+4,c>>>=4,f-=4,t.nlen>286||t.ndist>30){e.msg="too many length or distance symbols",t.mode=rt;break}t.have=0,t.mode=Ds;case Ds:for(;t.have<t.ncode;){for(;f<3;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.lens[z[t.have++]]=c&7,c>>>=3,f-=3}for(;t.have<19;)t.lens[z[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,_={bits:t.lenbits},k=hi(Qg,t.lens,0,19,t.lencode,0,t.work,_),t.lenbits=_.bits,k){e.msg="invalid code lengths set",t.mode=rt;break}t.have=0,t.mode=Ls;case Ls:for(;t.have<t.nlen+t.ndist;){for(;d=t.lencode[c&(1<<t.lenbits)-1],l=d>>>24,D=d>>>16&255,M=d&65535,!(l<=f);){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(M<16)c>>>=l,f-=l,t.lens[t.have++]=M;else{if(M===16){for(T=l+2;f<T;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(c>>>=l,f-=l,t.have===0){e.msg="invalid bit length repeat",t.mode=rt;break}A=t.lens[t.have-1],g=3+(c&3),c>>>=2,f-=2}else if(M===17){for(T=l+3;f<T;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}c>>>=l,f-=l,A=0,g=3+(c&7),c>>>=3,f-=3}else{for(T=l+7;f<T;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}c>>>=l,f-=l,A=0,g=11+(c&127),c>>>=7,f-=7}if(t.have+g>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=rt;break}for(;g--;)t.lens[t.have++]=A}}if(t.mode===rt)break;if(t.lens[256]===0){e.msg="invalid code -- missing end-of-block",t.mode=rt;break}if(t.lenbits=9,_={bits:t.lenbits},k=hi(zc,t.lens,0,t.nlen,t.lencode,0,t.work,_),t.lenbits=_.bits,k){e.msg="invalid literal/lengths set",t.mode=rt;break}if(t.distbits=6,t.distcode=t.distdyn,_={bits:t.distbits},k=hi(Wc,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,_),t.distbits=_.bits,k){e.msg="invalid distances set",t.mode=rt;break}if(t.mode=Xi,n===Wi)break e;case Xi:t.mode=qi;case qi:if(s>=6&&p>=258){e.next_out=a,e.avail_out=p,e.next_in=o,e.avail_in=s,t.hold=c,t.bits=f,Yg(e,m),a=e.next_out,r=e.output,p=e.avail_out,o=e.next_in,i=e.input,s=e.avail_in,c=t.hold,f=t.bits,t.mode===en&&(t.back=-1);break}for(t.back=0;d=t.lencode[c&(1<<t.lenbits)-1],l=d>>>24,D=d>>>16&255,M=d&65535,!(l<=f);){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(D&&!(D&240)){for(S=l,N=D,P=M;d=t.lencode[P+((c&(1<<S+N)-1)>>S)],l=d>>>24,D=d>>>16&255,M=d&65535,!(S+l<=f);){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}c>>>=S,f-=S,t.back+=S}if(c>>>=l,f-=l,t.back+=l,t.length=M,D===0){t.mode=Os;break}if(D&32){t.back=-1,t.mode=en;break}if(D&64){e.msg="invalid literal/length code",t.mode=rt;break}t.extra=D&15,t.mode=Ps;case Ps:if(t.extra){for(T=t.extra;f<T;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.length+=c&(1<<t.extra)-1,c>>>=t.extra,f-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Is;case Is:for(;d=t.distcode[c&(1<<t.distbits)-1],l=d>>>24,D=d>>>16&255,M=d&65535,!(l<=f);){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(!(D&240)){for(S=l,N=D,P=M;d=t.distcode[P+((c&(1<<S+N)-1)>>S)],l=d>>>24,D=d>>>16&255,M=d&65535,!(S+l<=f);){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}c>>>=S,f-=S,t.back+=S}if(c>>>=l,f-=l,t.back+=l,D&64){e.msg="invalid distance code",t.mode=rt;break}t.offset=M,t.extra=D&15,t.mode=Us;case Us:if(t.extra){for(T=t.extra;f<T;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}t.offset+=c&(1<<t.extra)-1,c>>>=t.extra,f-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=rt;break}t.mode=Ns;case Ns:if(p===0)break e;if(g=m-p,t.offset>g){if(g=t.offset-g,g>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=rt;break}g>t.wnext?(g-=t.wnext,y=t.wsize-g):y=t.wnext-g,g>t.length&&(g=t.length),w=t.window}else w=r,y=a-t.offset,g=t.length;g>p&&(g=p),p-=g,t.length-=g;do r[a++]=w[y++];while(--g);t.length===0&&(t.mode=qi);break;case Os:if(p===0)break e;r[a++]=t.length,p--,t.mode=qi;break;case Wr:if(t.wrap){for(;f<32;){if(s===0)break e;s--,c|=i[o++]<<f,f+=8}if(m-=p,e.total_out+=m,t.total+=m,t.wrap&4&&m&&(e.adler=t.check=t.flags?_t(t.check,r,m,a-m):yi(t.check,r,m,a-m)),m=p,t.wrap&4&&(t.flags?c:Bs(c))!==t.check){e.msg="incorrect data check",t.mode=rt;break}c=0,f=0}t.mode=ks;case ks:if(t.wrap&&t.flags){for(;f<32;){if(s===0)break e;s--,c+=i[o++]<<f,f+=8}if(t.wrap&4&&c!==(t.total&4294967295)){e.msg="incorrect length check",t.mode=rt;break}c=0,f=0}t.mode=Fs;case Fs:k=tv;break e;case rt:k=Xc;break e;case Yc:return qc;case Kc:default:return Bt}return e.next_out=a,e.avail_out=p,e.next_in=o,e.avail_in=s,t.hold=c,t.bits=f,(t.wsize||m!==e.avail_out&&t.mode<rt&&(t.mode<Wr||n!==ms))&&Qc(e,e.output,e.next_out,m-e.avail_out),E-=e.avail_in,m-=e.avail_out,e.total_in+=E,e.total_out+=m,t.total+=m,t.wrap&4&&m&&(e.adler=t.check=t.flags?_t(t.check,r,m,e.next_out-m):yi(t.check,r,m,e.next_out-m)),e.data_type=t.bits+(t.last?64:0)+(t.mode===en?128:0)+(t.mode===Xi||t.mode===zr?256:0),(E===0&&m===0||n===ms)&&k===Ln&&(k=iv),k},uv=e=>{if(Pn(e))return Bt;let n=e.state;return n.window&&(n.window=null),e.state=null,Ln},hv=(e,n)=>{if(Pn(e))return Bt;const t=e.state;return t.wrap&2?(t.head=n,n.done=!1,Ln):Bt},pv=(e,n)=>{const t=n.length;let i,r,o;return Pn(e)||(i=e.state,i.wrap!==0&&i.mode!==lr)?Bt:i.mode===lr&&(r=1,r=yi(r,n,t,0),r!==i.check)?Xc:(o=Qc(e,n,t,t),o?(i.mode=Yc,qc):(i.havedict=1,Ln))};var _v=$c,mv=jc,gv=Zc,vv=lv,Ev=Jc,Sv=dv,xv=uv,Mv=hv,bv=pv,Tv="pako inflate (from Nodeca project)",rn={inflateReset:_v,inflateReset2:mv,inflateResetKeep:gv,inflateInit:vv,inflateInit2:Ev,inflate:Sv,inflateEnd:xv,inflateGetHeader:Mv,inflateSetDictionary:bv,inflateInfo:Tv};function yv(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var wv=yv;const el=Object.prototype.toString,{Z_NO_FLUSH:Av,Z_FINISH:Rv,Z_OK:Ci,Z_STREAM_END:Yr,Z_NEED_DICT:Kr,Z_STREAM_ERROR:Cv,Z_DATA_ERROR:Gs,Z_MEM_ERROR:Dv}=pr;function Oo(e){this.options=mr.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const n=this.options;n.raw&&n.windowBits>=0&&n.windowBits<16&&(n.windowBits=-n.windowBits,n.windowBits===0&&(n.windowBits=-15)),n.windowBits>=0&&n.windowBits<16&&!(e&&e.windowBits)&&(n.windowBits+=32),n.windowBits>15&&n.windowBits<48&&(n.windowBits&15||(n.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Gc,this.strm.avail_out=0;let t=rn.inflateInit2(this.strm,n.windowBits);if(t!==Ci)throw new Error(wi[t]);if(this.header=new wv,rn.inflateGetHeader(this.strm,this.header),n.dictionary&&(typeof n.dictionary=="string"?n.dictionary=Ri.string2buf(n.dictionary):el.call(n.dictionary)==="[object ArrayBuffer]"&&(n.dictionary=new Uint8Array(n.dictionary)),n.raw&&(t=rn.inflateSetDictionary(this.strm,n.dictionary),t!==Ci)))throw new Error(wi[t])}Oo.prototype.push=function(e,n){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let o,a,s;if(this.ended)return!1;for(n===~~n?a=n:a=n===!0?Rv:Av,el.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),o=rn.inflate(t,a),o===Kr&&r&&(o=rn.inflateSetDictionary(t,r),o===Ci?o=rn.inflate(t,a):o===Gs&&(o=Kr));t.avail_in>0&&o===Yr&&t.state.wrap>0&&e[t.next_in]!==0;)rn.inflateReset(t),o=rn.inflate(t,a);switch(o){case Cv:case Gs:case Kr:case Dv:return this.onEnd(o),this.ended=!0,!1}if(s=t.avail_out,t.next_out&&(t.avail_out===0||o===Yr))if(this.options.to==="string"){let p=Ri.utf8border(t.output,t.next_out),c=t.next_out-p,f=Ri.buf2string(t.output,p);t.next_out=c,t.avail_out=i-c,c&&t.output.set(t.output.subarray(p,p+c),0),this.onData(f)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(o===Ci&&s===0)){if(o===Yr)return o=rn.inflateEnd(this.strm),this.onEnd(o),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Oo.prototype.onData=function(e){this.chunks.push(e)};Oo.prototype.onEnd=function(e){e===Ci&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=mr.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};class Lv extends sn{constructor(){super();xe(this,"asyncLoading",!0);xe(this,"drawDistance",5);xe(this,"chunkSize",{width:16,height:80});xe(this,"params",{seed:45678,terrain:{scale:40,magnitude:.1,offset:.5},biomes:{mountains:{scale:40,magnitude:.2,offset:.5},plains:{scale:80,magnitude:.1,offset:.5},forest:{scale:40,magnitude:.1,offset:.5},desert:{scale:120,magnitude:.1,offset:.5}},trees:{trunk:{minHeight:4,maxHeight:7},canopy:{minRadius:3,maxRadius:3,density:.7},frequency:.005}});xe(this,"dataStore",new dm)}worldToUint8Array(t){let i=[];for(const r in t)if(Object.hasOwn(t,r)){const o=t[r];for(const a of o)i.push(...a)}return console.log(i),new Uint8Array(i)}save(){(async()=>{const t=new Blob([JSON.stringify(this.dataStore.getData())]).size;console.log(`Taille des données : ${t/1e6} Mo`);const i=this.dataStore.getData();console.log(i),await Iv(i)})()}load(){(async()=>{const t=await Uv();this.dataStore.setData(t),this.generate()})()}generate(){this.disposeChunks();for(let t=-this.drawDistance;t<=this.drawDistance;t++)for(let i=-this.drawDistance;i<=this.drawDistance;i++){const r=new ts(this.chunkSize,this.params,this.dataStore);r.position.set(t*this.chunkSize.width,0,i*this.chunkSize.width),r.generate(),r.userData={x:t,z:i},this.add(r)}}update(t){const i=this.getVisibleChunks(t),r=this.getChunksToAdd(i);this.removeUnusedChunks(i);for(const o of r)this.generateChunk(o.x,o.z)}getVisibleChunks(t){const i=[],r=this.worldToChunkCoords(t.position.x,t.position.y,t.position.z),o=r.chunk.x,a=r.chunk.z;for(let s=o-this.drawDistance;s<=o+this.drawDistance;s++)for(let p=a-this.drawDistance;p<=a+this.drawDistance;p++)i.push({x:s,z:p});return i}getChunksToAdd(t){return t.filter(i=>!this.children.map(o=>o.userData).find(({x:o,z:a})=>i.x===o&&i.z===a))}removeUnusedChunks(t){const i=this.children.filter(r=>{const{x:o,z:a}=r.userData;return!t.find(p=>p.x===o&&p.z===a)});for(const r of i)r.disposeInstances(),this.remove(r)}generateChunk(t,i){const r=new ts(this.chunkSize,this.params,this.dataStore);r.position.set(t*this.chunkSize.width,0,i*this.chunkSize.width),r.userData={x:t,z:i},this.asyncLoading?requestIdleCallback(r.generate.bind(r),{timeout:2e3}):r.generate(),this.add(r)}getBlock(t,i,r){const o=this.worldToChunkCoords(t,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);return a?a.getBlock(o.block.x,o.block.y,o.block.z):null}getPlayerBiome(t,i){const r=this.worldToChunkCoords(t,0,i),o=this.getChunk(r.chunk.x,r.chunk.z);return o?o.getBiome(r.block.x,r.block.z):null}worldToChunkCoords(t,i,r){const o={x:Math.floor(t/this.chunkSize.width),z:Math.floor(r/this.chunkSize.width)},a={x:t-this.chunkSize.width*o.x,y:i,z:r-this.chunkSize.width*o.z};return{chunk:o,block:a}}getChunk(t,i){return this.children.find(r=>r.userData.x===t&&r.userData.z===i)}disposeChunks(){this.traverse(t=>{t.disposeInstances&&t.disposeInstances()}),this.clear()}addBlock(t,i,r,o){const a=this.worldToChunkCoords(t,i,r),s=this.getChunk(a.chunk.x,a.chunk.z);s&&(s.addBlock(a.block.x,a.block.y,a.block.z,o),vt(o).transparent!==!0&&(this.hideBlock(t-1,i,r),this.hideBlock(t+1,i,r),this.hideBlock(t,i-1,r),this.hideBlock(t,i+1,r),this.hideBlock(t,i,r-1),this.hideBlock(t,i,r+1)))}removeBlock(t,i,r){const o=this.worldToChunkCoords(t,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);o.block.y!==0&&a&&(this.checkRemoveTree(t,i,r),a.removeBlock(o.block.x,o.block.y,o.block.z),this.revealBlock(t-1,i,r),this.revealBlock(t+1,i,r),this.revealBlock(t,i-1,r),this.revealBlock(t,i+1,r),this.revealBlock(t,i,r-1),this.revealBlock(t,i,r+1))}setBlockInventory(t,i,r,o){const a=this.worldToChunkCoords(t,i,r),s=this.getChunk(a.chunk.x,a.chunk.z);s&&s.setBlockInventory(a.block.x,a.block.y,a.block.z,o)}checkRemoveTree(t,i,r){var a;if(this.getBlock(t,i,r).id==Ee.log.id)for(let s=-6;s<=6;s++)for(let p=-6;p<=6;p++)for(let c=-6;c<=6;c++){let f=t+s,E=i+p,m=r+c;s===0&&p===0&&c===0||((a=this.getBlock(f,E,m))==null?void 0:a.id)==Ee.leaves.id&&this.removeBlock(f,E,m)}}revealBlock(t,i,r){const o=this.worldToChunkCoords(t,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.addBlockInstance(o.block.x,o.block.y,o.block.z)}hideBlock(t,i,r){const o=this.worldToChunkCoords(t,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.isBlockObscured(o.block.x,o.block.y,o.block.z)&&a.deleteBlockInstance(o.block.x,o.block.y,o.block.z)}}const Pv="minecraftDB",Di="minecraftData";function tl(){return new Promise((e,n)=>{const t=indexedDB.open(Pv,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(Di,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function Iv(e){const t=(await tl()).transaction([Di],"readwrite");return t.objectStore(Di).put({id:"minecraft_data",data:e}),t.oncomplete}async function Uv(){const e=await tl();return new Promise((n,t)=>{const o=e.transaction([Di],"readonly").objectStore(Di).get("minecraft_data");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){t(a.target.error)}})}const Nv=new lo;function $e(e){const n=Nv.load(e);return n.colorSpace=Ao,n.magFilter=cn,n.minFilter=cn,n}const Te={pig_head_front:$e("images/mob/pig/pig_head_front.png"),pig_head_right:$e("images/mob/pig/pig_head_right.png"),pig_head_left:$e("images/mob/pig/pig_head_left.png"),pig_head_top:$e("images/mob/pig/pig_head_top.png"),pig_feet:$e("images/mob/pig/pig_feet_side.png"),pig_body_back:$e("images/mob/pig/pig_body_back.png"),pig_body_side:$e("images/mob/pig/pig_body_side.png"),pig_body_right:$e("images/mob/pig/pig_body_right.png"),pig_noise_front:$e("images/mob/pig/pig_noise_front.png"),steve_head_front:$e("images/player/steve_head_front.png"),steve_head_back:$e("images/player/steve_head_back.png"),steve_head_right:$e("images/player/steve_head_right.png"),steve_head_left:$e("images/player/steve_head_left.png"),steve_head_top:$e("images/player/steve_head_top.png"),steve_head_bottom:$e("images/player/steve_head_bottom.png"),steve_body_top:$e("images/player/steve_body_top.png"),steve_body_front:$e("images/player/steve_body_front.png"),steve_body_back:$e("images/player/steve_body_back.png"),steve_body_right:$e("images/player/steve_body_right.png"),steve_body_left:$e("images/player/steve_body_left.png"),steve_arm_top:$e("images/player/steve_arm_top.png"),steve_arm_bottom:$e("images/player/steve_arm_bottom.png"),steve_arm_front:$e("images/player/steve_arm_front.png"),steve_arm_right:$e("images/player/steve_arm_right.png"),steve_arm_left:$e("images/player/steve_arm_left.png"),steve_arm_back:$e("images/player/steve_arm_back.png"),steve_leg_front:$e("images/player/steve_leg_front.png"),steve_leg_back:$e("images/player/steve_leg_back.png"),steve_leg_right:$e("images/player/steve_leg_right.png"),steve_leg_left:$e("images/player/steve_leg_left.png")},Xt={pig:{id:1,name:"pig",head:{material:[new Me({map:Te.pig_head_left}),new Me({map:Te.pig_head_right}),new Me({map:Te.pig_head_top}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_head_front}),new Me({map:Te.pig_body_side})]},body:{material:[new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_right}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_back})]},feet:{material:[new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet})]},noise:{material:[new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_body_side}),new Me({map:Te.pig_noise_front}),new Me({map:Te.pig_body_side})]}},steve:{id:1,name:"pig",head:{material:[new Me({map:Te.steve_head_left}),new Me({map:Te.steve_head_right}),new Me({map:Te.steve_head_top}),new Me({map:Te.steve_head_bottom}),new Me({map:Te.steve_head_front}),new Me({map:Te.steve_head_back})]},body:{material:[new Me({map:Te.steve_body_right}),new Me({map:Te.steve_body_left}),new Me({map:Te.steve_body_top}),new Me({map:Te.pig_body_side}),new Me({map:Te.steve_body_front}),new Me({map:Te.steve_body_back})]},leg:{material:[new Me({map:Te.steve_leg_right}),new Me({map:Te.steve_leg_left}),new Me({map:Te.pig_feet}),new Me({map:Te.pig_feet}),new Me({map:Te.steve_leg_front}),new Me({map:Te.steve_leg_back})]},arm:{material:[new Me({map:Te.steve_arm_right}),new Me({map:Te.steve_arm_left}),new Me({map:Te.steve_arm_top}),new Me({map:Te.steve_arm_bottom}),new Me({map:Te.steve_arm_front}),new Me({map:Te.steve_arm_back})]}}};class Ov extends sn{constructor(){super();const n=new mt(.9,.7,1.6),t=new mt(.7,.7,.7),i=new mt(.32,.25,.1),r=new mt(.4,.5,.4),o=new Qe(n,Xt.pig.body.material);o.position.set(0,.6,0),this.add(o);const a=new Qe(t,Xt.pig.head.material);a.position.set(0,.8,1),this.add(a);const s=new Qe(i,Xt.pig.noise.material);s.position.set(0,.7,1.4),this.add(s);for(let p=0;p<4;p++){const c=new Qe(r,Xt.pig.feet.material);c.position.set(p<2?-.25:.25,0,p%2===0?-.7:.6),c.isLeg=!0,this.add(c)}this.position.set(6,69,10),this.BOUNDARY={minX:-50,maxX:50,minZ:-50,maxZ:50},this.target=this.getRandomTarget(),this.pigVelocity=new Re(0,0,0)}getRandomTarget(){const n=Math.random()*(this.BOUNDARY.maxX-this.BOUNDARY.minX)+this.BOUNDARY.minX,t=Math.random()*(this.BOUNDARY.maxZ-this.BOUNDARY.minZ)+this.BOUNDARY.minZ;return new Re(n,75,t)}movePig(n,t){var o,a;this.world=t,((o=this.world.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)))==null?void 0:o.id)==0?this.pigVelocity.y-=.01:((a=this.world.getBlock(Math.floor(this.position.x),Math.ceil(this.position.y),Math.floor(this.position.z)))==null?void 0:a.id)>0?this.pigVelocity.y+=.05:this.pigVelocity.y=0,this.position.add(this.pigVelocity);const i=2,r=this.target.clone().sub(this.position).normalize();r.y=0,this.position.add(r.multiplyScalar(i*n)),this.position.distanceTo(this.target)<2&&(this.target=this.getRandomTarget()),this.target.y=this.position.y,this.lookAt(this.target),this.animatePigLegs(n)}animatePigLegs(){const t=Math.sin(Date.now()*.005*2);this.children.forEach(i=>{i.isLeg&&(i.rotation.x=t*.2)})}}const kv=new fn({color:16711680,transparent:!0,opacity:.2}),Fv=new mt(1.001,1.001,1.001),Bv=new fn({wireframe:!0,color:65280}),Hv=new sd(.05,6,6);class Gv{constructor(n){xe(this,"simulationRate",250);xe(this,"timestep",1/this.simulationRate);xe(this,"accumulator",0);xe(this,"gravity",32);this.helpers=new sn,n.add(this.helpers)}update(n,t,i){for(this.accumulator+=n;this.accumulator>=this.timestep;)t.controls.isLocked&&(t.velocity.y-=this.gravity*this.timestep),t.applyInputs(this.timestep),t.updateBoundsHelper(),this.detectCollisions(t,i),this.accumulator-=this.timestep}detectCollisions(n,t){n.onGround=!1,this.helpers.clear();const i=this.broadPhase(n,t),r=this.narrowPhase(i,n);r.length>0&&this.resolveCollisions(r,n)}broadPhase(n,t){var f;const i=[],r=Math.floor(n.position.x-n.radius),o=Math.ceil(n.position.x+n.radius),a=Math.floor(n.position.y-n.height),s=Math.ceil(n.position.y),p=Math.floor(n.position.z-n.radius),c=Math.ceil(n.position.z+n.radius);for(let E=r;E<=o;E++)for(let m=a;m<=s;m++)for(let g=p;g<=c;g++){const y=(f=t.getBlock(E,m,g))==null?void 0:f.id;if(y&&y!==Ee.empty.id){const w={x:E,y:m,z:g};i.push(w)}}return i}narrowPhase(n,t){const i=[];for(const r of n){const o={x:Math.max(r.x-.5,Math.min(t.position.x,r.x+.5)),y:Math.max(r.y-.5,Math.min(t.position.y-t.height/2,r.y+.5)),z:Math.max(r.z-.5,Math.min(t.position.z,r.z+.5))},a=o.x-t.position.x,s=o.y-(t.position.y-t.height/2),p=o.z-t.position.z;if(this.pointInPlayerBoundingCylinder(o,t)){const c=t.height/2-Math.abs(s),f=t.radius-Math.sqrt(a*a+p*p);let E,m;c<f?(E=new Re(0,-Math.sign(s),0),m=c,t.onGround=!0):(E=new Re(-a,0,-p).normalize(),m=f),i.push({block:r,contactPoint:o,normal:E,overlap:m}),this.addContactPointerHelper(o)}}return i}resolveCollisions(n,t){n.sort((i,r)=>i.overlap<r.overlap);for(const i of n){if(!this.pointInPlayerBoundingCylinder(i.contactPoint,t))continue;let r=i.normal.clone();r.multiplyScalar(i.overlap),t.position.add(r);let o=t.worldVelocity.dot(i.normal),a=i.normal.clone().multiplyScalar(o);t.applyWorldDeltaVelocity(a.negate())}}pointInPlayerBoundingCylinder(n,t){const i=n.x-t.position.x,r=n.y-(t.position.y-t.height/2),o=n.z-t.position.z,a=i*i+o*o;return Math.abs(r)<t.height/2&&a<t.radius*t.radius}addCollisionHelper(n){const t=new Qe(Fv,kv);t.position.copy(n),this.helpers.add(t)}addContactPointerHelper(n){const t=new Qe(Hv,Bv);t.position.copy(n),this.helpers.add(t)}}class Vv{constructor(){xe(this,"fuelList",[Ee.coal.id]);xe(this,"output",2);xe(this,"fuel",1);xe(this,"input",0);this.smelting=new cd}handle(n){this.inventory=n;const t=this.smelting.checkSmelting(n);t&&this.checkFuel(n)?(n[this.output]={block:t.id,quantity:t.quantity},this.decreaseQuantity(this.fuel),this.decreaseQuantity(this.input)):n[this.output]=null}decreaseQuantity(n){this.inventory[n].quantity>1?this.inventory[n].quantity-=1:this.inventory[n]=null}checkFuel(n){var t;return!!this.fuelList.includes((t=n[this.fuel])==null?void 0:t.block)}}const zv=e=>{let n={};for(let t=0;t<e;t++)n[t]={type:"input"};return n},Yi={0:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"ouput"}},grid:2,id:0,name:"empty",visible:!1},61:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"ouput"}},grid:1,id:0,name:"empty",visible:!1},58:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"input"},5:{type:"input"},6:{type:"input"},7:{type:"input"},8:{type:"input"},9:{type:"ouput"}},grid:3,id:0,name:"empty",visible:!1},54:{slot:zv(27),grid:9,id:0,name:"empty",visible:!1}};class Wv{constructor(n,t){this.player=n,this.inventory=t}open(n){this.player.controls.unlock(),this.inventory.show(n)}}class Xv{constructor(n,t){xe(this,"inventoryContainer",document.getElementById("inventory"));xe(this,"inventoryStockage",document.getElementById("stockage"));xe(this,"inventoryCrafter",document.getElementById("crafter"));xe(this,"inventoryOutput",document.getElementById("output"));xe(this,"bar",document.getElementById("bar"));xe(this,"selectedItemId",27);xe(this,"UIID",0);xe(this,"output",0);xe(this,"items",[{block:Ee.grass.id,quantity:20},{block:Ee.stone.id,quantity:20},{block:Ee.craftingTable.id,quantity:20},{block:Ee.planks.id,quantity:10},{block:Ee.log.id,quantity:10},{block:Ee.furnace.id,quantity:10},{block:Ee.chest.id,quantity:4},{block:Ee.glass.id,quantity:40},{block:Ee.stick.id,quantity:40}]);xe(this,"inventory",Array(41).fill(null));xe(this,"blockInventory",Array(41).fill(null));xe(this,"player",null);xe(this,"heldItem",null);xe(this,"heldItemElement",document.getElementById("held-item"));this.player=n,this.world=t,this.isShow=!1,this.inventory[0]=this.items[2],this.inventory[1]=this.items[1],this.inventory[3]=this.items[8],this.inventory[27]=this.items[0],this.inventory[28]=this.items[3],this.inventory[29]=this.items[4],this.inventory[30]=this.items[5],this.inventory[31]=this.items[6],this.inventory[32]=this.items[7],this.inventory[33]=this.items[8],this.renderInventory(),this.renderBar(),document.addEventListener("mousemove",i=>{this.heldItem&&(this.heldItemElement.style.left=`${i.pageX-20}px`,this.heldItemElement.style.top=`${i.pageY-20}px`)}),this.recipes=new ld,this.furnace=new Vv,document.addEventListener("keydown",this.onKeyDown.bind(this))}show(n=0){if(this.isShow=!0,this.inventoryContainer.style.display="block",this.bar.style.display="none",this.UIID=n,console.log(this.player.selectedCoords),this.blockInventory=Array(41).fill(null),this.UIID){let t=this.world.getBlock(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z).inventory;t&&(this.blockInventory=t)}this.renderInventory()}hide(){this.inventoryContainer.style.display="none",this.bar.style.display="grid",this.renderBar(),this.UIID&&this.world.setBlockInventory(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z,this.blockInventory),this.isShow=!1}getBlock(n){return this.inventory[n]}getSelectedItem(){return this.inventory[this.selectedItemId]}selectItem(n){var t;if(n){document.querySelectorAll(".slot").forEach(o=>{o.classList.remove("selected")});const r=document.querySelector('.slot[data-index_bar="'+n+'"]');r&&(r.classList.add("selected"),this.selectedItemId=n),this.player.setBlockInHand((t=this.getBlock(n))==null?void 0:t.block)}}renderInventory(){var i;this.inventoryStockage.innerHTML="",this.inventoryCrafter.innerHTML="",this.inventoryOutput.innerHTML="",this.inventory.forEach((r,o)=>{const a=document.createElement("div");if(a.classList.add("slot"),a.dataset.index=o,r){const s=document.createElement("img"),p=document.createElement("div"),c=Object.values(Ee).find(f=>f.id===r.block);s.src=c.icon,s.alt=r.block,s.width=200,p.innerHTML=r.quantity,p.classList.add("slot-quantity"),a.appendChild(s),c.stackable&&a.appendChild(p)}a.addEventListener("mousedown",s=>this.handleSlotClick(o,s)),o<36&&this.inventoryStockage.appendChild(a)});const n=(i=Yi[this.UIID])==null?void 0:i.slot,t=Yi[this.UIID].grid;this.inventoryCrafter.style.gridTemplateColumns="repeat("+t+", 50px)";for(const r in n)if(n.hasOwnProperty(r)){const o=n[r],a=document.createElement("div");if(a.classList.add("slot"),a.dataset.index=o.name,this.blockInventory[r]!==null){const s=document.createElement("img"),p=document.createElement("div"),c=Object.values(Ee).find(f=>f.id===this.blockInventory[r].block);s.src=c.icon,s.alt=this.blockInventory[r].block,s.width=200,p.innerHTML=this.blockInventory[r].quantity,p.classList.add("slot-quantity"),a.appendChild(s),c.stackable&&a.appendChild(p)}a.addEventListener("mousedown",s=>this.handleSlotBlockClick(r,s)),n[r].type=="input"?this.inventoryCrafter.appendChild(a):(this.output=r,this.inventoryOutput.appendChild(a))}}renderBar(){this.bar.innerHTML="",this.inventory.forEach((n,t)=>{if(t>=27&&t<36){const i=document.createElement("div");if(i.classList.add("slot"),i.dataset.index_bar=t,t==this.selectedItemId&&i.classList.add("selected"),n){const r=document.createElement("img"),o=document.createElement("div"),a=Object.values(Ee).find(s=>s.id===n.block);r.src=a.icon,r.alt=n.block,r.width=200,o.innerHTML=n.quantity,o.classList.add("slot-quantity"),i.appendChild(r),a.stackable&&i.appendChild(o)}this.bar.appendChild(i)}})}inventoryToGrid(){var a,s,p;const n=Yi[this.UIID].grid;let t=[];for(let c=0;c<n;c++){const f=[];for(let E=0;E<n;E++)f.push(null);t.push(f)}const i=(a=Yi[this.UIID])==null?void 0:a.slot;let r=0,o=0;for(const c in i){if(o>=n&&(o=0,r++,r>=n))break;(s=this.blockInventory[c])!=null&&s.block?t[r][o]=(p=this.blockInventory[c])==null?void 0:p.block:t[r][o]=null,o++}return t}handleSlotClick(n,t){const i=this.inventory[n];if(this.heldItem)if(!i)t.button==0?(this.inventory[n]=this.heldItem,this.clearHeldItem()):(this.inventory[n]={...this.heldItem},this.inventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.inventory[n].block==this.heldItem.block&&vt(this.inventory[n].block).stackable)this.inventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem();else{[this.inventory[n],this.heldItem]=[this.heldItem,this.inventory[n]];const r=Object.values(Ee).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon}else if(i)if(t.button==0){this.heldItem=this.inventory[n],this.inventory[n]=null;const r=Object.values(Ee).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}else{this.heldItem={...this.inventory[n]},this.heldItem.quantity=Math.round(this.heldItem.quantity/2),this.inventory[n].quantity=Math.floor(this.inventory[n].quantity/2);const r=Object.values(Ee).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}this.renderInventory()}handleSlotBlockClick(n,t){const i=this.blockInventory[n];if(this.heldItem){if(!i)t.button==0?n!=this.output&&(this.blockInventory[n]=this.heldItem,this.clearHeldItem()):(this.blockInventory[n]={...this.heldItem},this.blockInventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.blockInventory[n].block==this.heldItem.block&&vt(this.blockInventory[n].block).stackable)n==this.output?this.setHeldItem(this.heldItem.block,this.heldItem.quantity+=this.blockInventory[n].quantity):(this.blockInventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem());else if(n!=this.output){[this.blockInventory[n],this.heldItem]=[this.heldItem,this.blockInventory[n]];const r=Object.values(Ee).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon}}else i&&(t.button==0?(this.setHeldItem(this.blockInventory[n].block,this.blockInventory[n].quantity),this.blockInventory[n]=null):(this.setHeldItem(this.blockInventory[n].block,Math.round(this.blockInventory[n].quantity/2)),this.blockInventory[n].quantity=Math.floor(this.blockInventory[n].quantity/2)));if(this.UIID==0||this.UIID==58){const r=this.recipes.checkRecipe(this.inventoryToGrid());r?this.blockInventory[this.output]={block:r.id,quantity:r.quantity}:this.blockInventory[this.output]=null}else this.UIID==Ee.furnace.id&&this.furnace.handle(this.blockInventory);this.renderInventory()}clearHeldItem(){this.heldItem=null,this.heldItemElement.style.display="none"}setHeldItem(n,t){this.heldItem={block:n,quantity:t};const i=vt(n);this.heldItemElement.src=i.icon,this.heldItemElement.style.display="block",t<1&&this.clearHeldItem()}addBlock(n){let t=!1;this.inventory.forEach((i,r)=>{r<36&&(i==null?void 0:i.block)==n&&(i.quantity+=1,t=!0)}),t||this.inventory.forEach((i,r)=>{r<36&&!t&&i==null&&(console.log(n),this.inventory[r]={quantity:1,block:n},t=!0)}),this.renderBar()}removeBlock(n){this.inventory.forEach((t,i)=>{i<36&&(t==null?void 0:t.block)==n&&(t.quantity-=1,t.quantity<=0&&(this.inventory[i]=null))}),this.renderBar()}save(){(async()=>{new Blob([JSON.stringify(this.inventory)]).size;const n=this.inventory;await Yv(n)})()}load(){(async()=>{const n=await Kv();this.inventory=n,this.renderBar()})()}onKeyDown(n){document.querySelectorAll(".item").forEach(i=>i.classList.remove("selected"));let t=null;n.code==="Digit1"&&(t=27),n.code==="Digit2"&&(t=28),n.code==="Digit3"&&(t=29),n.code==="Digit4"&&(t=30),n.code==="Digit5"&&(t=31),n.code==="Digit6"&&(t=32),n.code==="Digit7"&&(t=33),n.code==="Digit8"&&(t=34),n.code==="Digit9"&&(t=35),t&&this.selectItem(t),n.key==="Escape"&&this.isShow&&(this.hide(),this.player.controls.lock())}}const qv="minecraftDB",Li="minecraftData";function nl(){return new Promise((e,n)=>{const t=indexedDB.open(qv,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(Li,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function Yv(e){const t=(await nl()).transaction([Li],"readwrite");return t.objectStore(Li).put({id:"minecraft_inventory",data:e}),t.complete}async function Kv(){const e=await nl();return new Promise((n,t)=>{const o=e.transaction([Li],"readonly").objectStore(Li).get("minecraft_inventory");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){t(a.target.error)}})}class Zv{constructor(n,t,i,r,o){this.world=n,this.player=t,this.inventory=i,this.client=r,this.chat=o,document.getElementById("backToGame").addEventListener("click",()=>this.backToGame()),document.getElementById("save").addEventListener("click",()=>this.save()),document.getElementById("load").addEventListener("click",()=>this.load()),document.getElementById("connect").addEventListener("click",()=>this.connect()),window.addEventListener("keydown",f=>{f.key==="Escape"&&this.inventory.isShow===!1&&this.openMenu()})}backToGame(){document.getElementById("menu").style.display="none",this.player.controls.lock(),this.inventory.hide()}openMenu(){document.getElementById("menu").style.display="block",this.inventory.hide()}save(){this.world.save(),this.inventory.save(),this.player.save(),this.chat.add("Saved game")}load(){this.world.load(),this.inventory.load(),this.player.load(),this.chat.add("Load saved")}connect(){this.client.getSocket()||this.client.init()}}class $v{constructor(n,t,i){this.scene=n,this.sun=new fd,this.time=i,this.setupLights(),this.player=t,this.dayDuration=1200*1e3;const r=new mt(5,5,5),o=new fn({color:16777215});this.sunMesh=new Qe(r,o),this.sunMesh.position.set(50,100,50),n.add(this.sunMesh)}setupLights(){this.sun.intensity=1.5,this.sun.position.set(50,120,-10),this.sun.castShadow=!0,this.sun.shadow.camera.left=-40,this.sun.shadow.camera.right=40,this.sun.shadow.camera.top=40,this.sun.shadow.camera.bottom=-40,this.sun.shadow.camera.near=.1,this.sun.shadow.camera.far=200,this.sun.shadow.bias=-1e-4,this.sun.shadow.mapSize=new xt(2048,2048),this.scene.add(this.sun),this.scene.add(this.sun.target),new dd(this.sun.shadow.camera);const n=new ud;n.intensity=.2,this.scene.add(n)}update(n){this.updateDayNightCycle(n)}updateDayNightCycle(n){this.time+=n/this.dayDuration,this.time>1&&(this.time=0);const t=this.time*Math.PI*2;this.sun.position.copy(this.player.camera.position),this.sun.position.sub(new Re(-Math.cos(t)*50,-(Math.sin(t)*50),-10)),this.sunMesh.position.copy(this.player.camera.position),this.sunMesh.position.sub(new Re(-Math.cos(t)*50,-(Math.sin(t)*50),-10)),this.sun.target.position.copy(this.player.camera.position)}getTime(){let n=this.time*24*60,t=parseInt(n/60),i=parseInt(n%60);return t+"H"+i}}const jt=Object.create(null);jt.open="0";jt.close="1";jt.ping="2";jt.pong="3";jt.message="4";jt.upgrade="5";jt.noop="6";const er=Object.create(null);Object.keys(jt).forEach(e=>{er[jt[e]]=e});const xo={type:"error",data:"parser error"},il=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",rl=typeof ArrayBuffer=="function",ol=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,ko=({type:e,data:n},t,i)=>il&&n instanceof Blob?t?i(n):Vs(n,i):rl&&(n instanceof ArrayBuffer||ol(n))?t?i(n):Vs(new Blob([n]),i):i(jt[e]+(n||"")),Vs=(e,n)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];n("b"+(i||""))},t.readAsDataURL(e)};function zs(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Zr;function jv(e,n){if(il&&e.data instanceof Blob)return e.data.arrayBuffer().then(zs).then(n);if(rl&&(e.data instanceof ArrayBuffer||ol(e.data)))return n(zs(e.data));ko(e,!1,t=>{Zr||(Zr=new TextEncoder),n(Zr.encode(t))})}const Ws="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",li=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Ws.length;e++)li[Ws.charCodeAt(e)]=e;const Jv=e=>{let n=e.length*.75,t=e.length,i,r=0,o,a,s,p;e[e.length-1]==="="&&(n--,e[e.length-2]==="="&&n--);const c=new ArrayBuffer(n),f=new Uint8Array(c);for(i=0;i<t;i+=4)o=li[e.charCodeAt(i)],a=li[e.charCodeAt(i+1)],s=li[e.charCodeAt(i+2)],p=li[e.charCodeAt(i+3)],f[r++]=o<<2|a>>4,f[r++]=(a&15)<<4|s>>2,f[r++]=(s&3)<<6|p&63;return c},Qv=typeof ArrayBuffer=="function",Fo=(e,n)=>{if(typeof e!="string")return{type:"message",data:al(e,n)};const t=e.charAt(0);return t==="b"?{type:"message",data:e0(e.substring(1),n)}:er[t]?e.length>1?{type:er[t],data:e.substring(1)}:{type:er[t]}:xo},e0=(e,n)=>{if(Qv){const t=Jv(e);return al(t,n)}else return{base64:!0,data:e}},al=(e,n)=>{switch(n){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},sl="",t0=(e,n)=>{const t=e.length,i=new Array(t);let r=0;e.forEach((o,a)=>{ko(o,!1,s=>{i[a]=s,++r===t&&n(i.join(sl))})})},n0=(e,n)=>{const t=e.split(sl),i=[];for(let r=0;r<t.length;r++){const o=Fo(t[r],n);if(i.push(o),o.type==="error")break}return i};function i0(){return new TransformStream({transform(e,n){jv(e,t=>{const i=t.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const o=new DataView(r.buffer);o.setUint8(0,126),o.setUint16(1,i)}else{r=new Uint8Array(9);const o=new DataView(r.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(i))}e.data&&typeof e.data!="string"&&(r[0]|=128),n.enqueue(r),n.enqueue(t)})}})}let $r;function Ki(e){return e.reduce((n,t)=>n+t.length,0)}function Zi(e,n){if(e[0].length===n)return e.shift();const t=new Uint8Array(n);let i=0;for(let r=0;r<n;r++)t[r]=e[0][i++],i===e[0].length&&(e.shift(),i=0);return e.length&&i<e[0].length&&(e[0]=e[0].slice(i)),t}function r0(e,n){$r||($r=new TextDecoder);const t=[];let i=0,r=-1,o=!1;return new TransformStream({transform(a,s){for(t.push(a);;){if(i===0){if(Ki(t)<1)break;const p=Zi(t,1);o=(p[0]&128)===128,r=p[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(Ki(t)<2)break;const p=Zi(t,2);r=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),i=3}else if(i===2){if(Ki(t)<8)break;const p=Zi(t,8),c=new DataView(p.buffer,p.byteOffset,p.length),f=c.getUint32(0);if(f>Math.pow(2,21)-1){s.enqueue(xo);break}r=f*Math.pow(2,32)+c.getUint32(4),i=3}else{if(Ki(t)<r)break;const p=Zi(t,r);s.enqueue(Fo(o?p:$r.decode(p),n)),i=0}if(r===0||r>e){s.enqueue(xo);break}}}})}const cl=4;function ut(e){if(e)return o0(e)}function o0(e){for(var n in ut.prototype)e[n]=ut.prototype[n];return e}ut.prototype.on=ut.prototype.addEventListener=function(e,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(n),this};ut.prototype.once=function(e,n){function t(){this.off(e,t),n.apply(this,arguments)}return t.fn=n,this.on(e,t),this};ut.prototype.off=ut.prototype.removeListener=ut.prototype.removeAllListeners=ut.prototype.removeEventListener=function(e,n){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+e];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var i,r=0;r<t.length;r++)if(i=t[r],i===n||i.fn===n){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+e],this};ut.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var n=new Array(arguments.length-1),t=this._callbacks["$"+e],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,r=t.length;i<r;++i)t[i].apply(this,n)}return this};ut.prototype.emitReserved=ut.prototype.emit;ut.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};ut.prototype.hasListeners=function(e){return!!this.listeners(e).length};const vr=typeof Promise=="function"&&typeof Promise.resolve=="function"?n=>Promise.resolve().then(n):(n,t)=>t(n,0),Ot=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),a0="arraybuffer";function ll(e,...n){return n.reduce((t,i)=>(e.hasOwnProperty(i)&&(t[i]=e[i]),t),{})}const s0=Ot.setTimeout,c0=Ot.clearTimeout;function Er(e,n){n.useNativeTimers?(e.setTimeoutFn=s0.bind(Ot),e.clearTimeoutFn=c0.bind(Ot)):(e.setTimeoutFn=Ot.setTimeout.bind(Ot),e.clearTimeoutFn=Ot.clearTimeout.bind(Ot))}const l0=1.33;function f0(e){return typeof e=="string"?d0(e):Math.ceil((e.byteLength||e.size)*l0)}function d0(e){let n=0,t=0;for(let i=0,r=e.length;i<r;i++)n=e.charCodeAt(i),n<128?t+=1:n<2048?t+=2:n<55296||n>=57344?t+=3:(i++,t+=4);return t}function fl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function u0(e){let n="";for(let t in e)e.hasOwnProperty(t)&&(n.length&&(n+="&"),n+=encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n}function h0(e){let n={},t=e.split("&");for(let i=0,r=t.length;i<r;i++){let o=t[i].split("=");n[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return n}class p0 extends Error{constructor(n,t,i){super(n),this.description=t,this.context=i,this.type="TransportError"}}class Bo extends ut{constructor(n){super(),this.writable=!1,Er(this,n),this.opts=n,this.query=n.query,this.socket=n.socket,this.supportsBinary=!n.forceBase64}onError(n,t,i){return super.emitReserved("error",new p0(n,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(n){this.readyState==="open"&&this.write(n)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(n){const t=Fo(n,this.socket.binaryType);this.onPacket(t)}onPacket(n){super.emitReserved("packet",n)}onClose(n){this.readyState="closed",super.emitReserved("close",n)}pause(n){}createUri(n,t={}){return n+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const n=this.opts.hostname;return n.indexOf(":")===-1?n:"["+n+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(n){const t=u0(n);return t.length?"?"+t:""}}class _0 extends Bo{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(n){this.readyState="pausing";const t=()=>{this.readyState="paused",n()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(n){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};n0(n,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const n=()=>{this.write([{type:"close"}])};this.readyState==="open"?n():this.once("open",n)}write(n){this.writable=!1,t0(n,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const n=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=fl()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(n,t)}}let dl=!1;try{dl=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const m0=dl;function g0(){}class v0 extends _0{constructor(n){if(super(n),typeof location<"u"){const t=location.protocol==="https:";let i=location.port;i||(i=t?"443":"80"),this.xd=typeof location<"u"&&n.hostname!==location.hostname||i!==n.port}}doWrite(n,t){const i=this.request({method:"POST",data:n});i.on("success",t),i.on("error",(r,o)=>{this.onError("xhr post error",r,o)})}doPoll(){const n=this.request();n.on("data",this.onData.bind(this)),n.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=n}}class $t extends ut{constructor(n,t,i){super(),this.createRequest=n,Er(this,i),this._opts=i,this._method=i.method||"GET",this._uri=t,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var n;const t=ll(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(t);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(n=this._opts.cookieJar)===null||n===void 0||n.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=$t.requestsCount++,$t.requests[this._index]=this)}_onError(n){this.emitReserved("error",n,this._xhr),this._cleanup(!0)}_cleanup(n){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=g0,n)try{this._xhr.abort()}catch{}typeof document<"u"&&delete $t.requests[this._index],this._xhr=null}}_onLoad(){const n=this._xhr.responseText;n!==null&&(this.emitReserved("data",n),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}$t.requestsCount=0;$t.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Xs);else if(typeof addEventListener=="function"){const e="onpagehide"in Ot?"pagehide":"unload";addEventListener(e,Xs,!1)}}function Xs(){for(let e in $t.requests)$t.requests.hasOwnProperty(e)&&$t.requests[e].abort()}const E0=function(){const e=ul({xdomain:!1});return e&&e.responseType!==null}();class S0 extends v0{constructor(n){super(n);const t=n&&n.forceBase64;this.supportsBinary=E0&&!t}request(n={}){return Object.assign(n,{xd:this.xd},this.opts),new $t(ul,this.uri(),n)}}function ul(e){const n=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!n||m0))return new XMLHttpRequest}catch{}if(!n)try{return new Ot[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const hl=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class x0 extends Bo{get name(){return"websocket"}doOpen(){const n=this.uri(),t=this.opts.protocols,i=hl?{}:ll(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(n,t,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=n=>this.onClose({description:"websocket connection closed",context:n}),this.ws.onmessage=n=>this.onData(n.data),this.ws.onerror=n=>this.onError("websocket error",n)}write(n){this.writable=!1;for(let t=0;t<n.length;t++){const i=n[t],r=t===n.length-1;ko(i,this.supportsBinary,o=>{try{this.doWrite(i,o)}catch{}r&&vr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const n=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=fl()),this.supportsBinary||(t.b64=1),this.createUri(n,t)}}const jr=Ot.WebSocket||Ot.MozWebSocket;class M0 extends x0{createSocket(n,t,i){return hl?new jr(n,t,i):t?new jr(n,t):new jr(n)}doWrite(n,t){this.ws.send(t)}}class b0 extends Bo{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(n){return this.emitReserved("error",n)}this._transport.closed.then(()=>{this.onClose()}).catch(n=>{this.onError("webtransport error",n)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(n=>{const t=r0(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=n.readable.pipeThrough(t).getReader(),r=i0();r.readable.pipeTo(n.writable),this._writer=r.writable.getWriter();const o=()=>{i.read().then(({done:s,value:p})=>{s||(this.onPacket(p),o())}).catch(s=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(n){this.writable=!1;for(let t=0;t<n.length;t++){const i=n[t],r=t===n.length-1;this._writer.write(i).then(()=>{r&&vr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var n;(n=this._transport)===null||n===void 0||n.close()}}const T0={websocket:M0,webtransport:b0,polling:S0},y0=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,w0=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Mo(e){if(e.length>8e3)throw"URI too long";const n=e,t=e.indexOf("["),i=e.indexOf("]");t!=-1&&i!=-1&&(e=e.substring(0,t)+e.substring(t,i).replace(/:/g,";")+e.substring(i,e.length));let r=y0.exec(e||""),o={},a=14;for(;a--;)o[w0[a]]=r[a]||"";return t!=-1&&i!=-1&&(o.source=n,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=A0(o,o.path),o.queryKey=R0(o,o.query),o}function A0(e,n){const t=/\/{2,9}/g,i=n.replace(t,"/").split("/");return(n.slice(0,1)=="/"||n.length===0)&&i.splice(0,1),n.slice(-1)=="/"&&i.splice(i.length-1,1),i}function R0(e,n){const t={};return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,o){r&&(t[r]=o)}),t}const bo=typeof addEventListener=="function"&&typeof removeEventListener=="function",tr=[];bo&&addEventListener("offline",()=>{tr.forEach(e=>e())},!1);class mn extends ut{constructor(n,t){if(super(),this.binaryType=a0,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,n&&typeof n=="object"&&(t=n,n=null),n){const i=Mo(n);t.hostname=i.host,t.secure=i.protocol==="https"||i.protocol==="wss",t.port=i.port,i.query&&(t.query=i.query)}else t.host&&(t.hostname=Mo(t.host).host);Er(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=h0(this.opts.query)),bo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},tr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(n){const t=Object.assign({},this.opts.query);t.EIO=cl,t.transport=n,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[n]);return new this._transportsByName[n](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const n=this.opts.rememberUpgrade&&mn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(n);t.open(),this.setTransport(t)}setTransport(n){this.transport&&this.transport.removeAllListeners(),this.transport=n,n.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",mn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",n),this.emitReserved("heartbeat"),n.type){case"open":this.onHandshake(JSON.parse(n.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=n.data,this._onError(t);break;case"message":this.emitReserved("data",n.data),this.emitReserved("message",n.data);break}}onHandshake(n){this.emitReserved("handshake",n),this.id=n.sid,this.transport.query.sid=n.sid,this._pingInterval=n.pingInterval,this._pingTimeout=n.pingTimeout,this._maxPayload=n.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const n=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+n,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},n),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const n=this._getWritablePackets();this.transport.send(n),this._prevBufferLen=n.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(t+=f0(r)),i>0&&t>this._maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const n=Date.now()>this._pingTimeoutTime;return n&&(this._pingTimeoutTime=0,vr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),n}write(n,t,i){return this._sendPacket("message",n,t,i),this}send(n,t,i){return this._sendPacket("message",n,t,i),this}_sendPacket(n,t,i,r){if(typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const o={type:n,data:t,options:i};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const n=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),n()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():n()}):this.upgrading?i():n()),this}_onError(n){if(mn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",n),this._onClose("transport error",n)}_onClose(n,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=tr.indexOf(this._offlineEventListener);i!==-1&&tr.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",n,t),this.writeBuffer=[],this._prevBufferLen=0}}}mn.protocol=cl;class C0 extends mn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let n=0;n<this._upgrades.length;n++)this._probe(this._upgrades[n])}_probe(n){let t=this.createTransport(n),i=!1;mn.priorWebsocketSuccess=!1;const r=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",E=>{if(!i)if(E.type==="pong"&&E.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;mn.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(f(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const m=new Error("probe error");m.transport=t.name,this.emitReserved("upgradeError",m)}}))};function o(){i||(i=!0,f(),t.close(),t=null)}const a=E=>{const m=new Error("probe error: "+E);m.transport=t.name,o(),this.emitReserved("upgradeError",m)};function s(){a("transport closed")}function p(){a("socket closed")}function c(E){t&&E.name!==t.name&&o()}const f=()=>{t.removeListener("open",r),t.removeListener("error",a),t.removeListener("close",s),this.off("close",p),this.off("upgrading",c)};t.once("open",r),t.once("error",a),t.once("close",s),this.once("close",p),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&n!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onHandshake(n){this._upgrades=this._filterUpgrades(n.upgrades),super.onHandshake(n)}_filterUpgrades(n){const t=[];for(let i=0;i<n.length;i++)~this.transports.indexOf(n[i])&&t.push(n[i]);return t}}let D0=class extends C0{constructor(n,t={}){const i=typeof n=="object"?n:t;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>T0[r]).filter(r=>!!r)),super(n,i)}};function L0(e,n="",t){let i=e;t=t||typeof location<"u"&&location,e==null&&(e=t.protocol+"//"+t.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=t.protocol+e:e=t.host+e),/^(https?|wss?):\/\//.test(e)||(typeof t<"u"?e=t.protocol+"//"+e:e="https://"+e),i=Mo(e)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const o=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+o+":"+i.port+n,i.href=i.protocol+"://"+o+(t&&t.port===i.port?"":":"+i.port),i}const P0=typeof ArrayBuffer=="function",I0=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,pl=Object.prototype.toString,U0=typeof Blob=="function"||typeof Blob<"u"&&pl.call(Blob)==="[object BlobConstructor]",N0=typeof File=="function"||typeof File<"u"&&pl.call(File)==="[object FileConstructor]";function Ho(e){return P0&&(e instanceof ArrayBuffer||I0(e))||U0&&e instanceof Blob||N0&&e instanceof File}function nr(e,n){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let t=0,i=e.length;t<i;t++)if(nr(e[t]))return!0;return!1}if(Ho(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return nr(e.toJSON(),!0);for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&nr(e[t]))return!0;return!1}function O0(e){const n=[],t=e.data,i=e;return i.data=To(t,n),i.attachments=n.length,{packet:i,buffers:n}}function To(e,n){if(!e)return e;if(Ho(e)){const t={_placeholder:!0,num:n.length};return n.push(e),t}else if(Array.isArray(e)){const t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=To(e[i],n);return t}else if(typeof e=="object"&&!(e instanceof Date)){const t={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=To(e[i],n));return t}return e}function k0(e,n){return e.data=yo(e.data,n),delete e.attachments,e}function yo(e,n){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<n.length)return n[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let t=0;t<e.length;t++)e[t]=yo(e[t],n);else if(typeof e=="object")for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=yo(e[t],n));return e}const F0=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],B0=5;var Oe;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(Oe||(Oe={}));class H0{constructor(n){this.replacer=n}encode(n){return(n.type===Oe.EVENT||n.type===Oe.ACK)&&nr(n)?this.encodeAsBinary({type:n.type===Oe.EVENT?Oe.BINARY_EVENT:Oe.BINARY_ACK,nsp:n.nsp,data:n.data,id:n.id}):[this.encodeAsString(n)]}encodeAsString(n){let t=""+n.type;return(n.type===Oe.BINARY_EVENT||n.type===Oe.BINARY_ACK)&&(t+=n.attachments+"-"),n.nsp&&n.nsp!=="/"&&(t+=n.nsp+","),n.id!=null&&(t+=n.id),n.data!=null&&(t+=JSON.stringify(n.data,this.replacer)),t}encodeAsBinary(n){const t=O0(n),i=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(i),r}}function qs(e){return Object.prototype.toString.call(e)==="[object Object]"}class Go extends ut{constructor(n){super(),this.reviver=n}add(n){let t;if(typeof n=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(n);const i=t.type===Oe.BINARY_EVENT;i||t.type===Oe.BINARY_ACK?(t.type=i?Oe.EVENT:Oe.ACK,this.reconstructor=new G0(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Ho(n)||n.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(n),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+n)}decodeString(n){let t=0;const i={type:Number(n.charAt(0))};if(Oe[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Oe.BINARY_EVENT||i.type===Oe.BINARY_ACK){const o=t+1;for(;n.charAt(++t)!=="-"&&t!=n.length;);const a=n.substring(o,t);if(a!=Number(a)||n.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(a)}if(n.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(n.charAt(t)===","||t===n.length););i.nsp=n.substring(o,t)}else i.nsp="/";const r=n.charAt(t+1);if(r!==""&&Number(r)==r){const o=t+1;for(;++t;){const a=n.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===n.length)break}i.id=Number(n.substring(o,t+1))}if(n.charAt(++t)){const o=this.tryParse(n.substr(t));if(Go.isPayloadValid(i.type,o))i.data=o;else throw new Error("invalid payload")}return i}tryParse(n){try{return JSON.parse(n,this.reviver)}catch{return!1}}static isPayloadValid(n,t){switch(n){case Oe.CONNECT:return qs(t);case Oe.DISCONNECT:return t===void 0;case Oe.CONNECT_ERROR:return typeof t=="string"||qs(t);case Oe.EVENT:case Oe.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&F0.indexOf(t[0])===-1);case Oe.ACK:case Oe.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class G0{constructor(n){this.packet=n,this.buffers=[],this.reconPack=n}takeBinaryData(n){if(this.buffers.push(n),this.buffers.length===this.reconPack.attachments){const t=k0(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const V0=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Go,Encoder:H0,get PacketType(){return Oe},protocol:B0},Symbol.toStringTag,{value:"Module"}));function Vt(e,n,t){return e.on(n,t),function(){e.off(n,t)}}const z0=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class _l extends ut{constructor(n,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=n,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const n=this.io;this.subs=[Vt(n,"open",this.onopen.bind(this)),Vt(n,"packet",this.onpacket.bind(this)),Vt(n,"error",this.onerror.bind(this)),Vt(n,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...n){return n.unshift("message"),this.emit.apply(this,n),this}emit(n,...t){var i,r,o;if(z0.hasOwnProperty(n))throw new Error('"'+n.toString()+'" is a reserved event name');if(t.unshift(n),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const a={type:Oe.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const f=this.ids++,E=t.pop();this._registerAckCallback(f,E),a.id=f}const s=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,p=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!s||(p?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(n,t){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[n]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[n];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===n&&this.sendBuffer.splice(s,1);t.call(this,new Error("operation has timed out"))},r),a=(...s)=>{this.io.clearTimeoutFn(o),t.apply(this,s)};a.withError=!0,this.acks[n]=a}emitWithAck(n,...t){return new Promise((i,r)=>{const o=(a,s)=>a?r(a):i(s);o.withError=!0,t.push(o),this.emit(n,...t)})}_addToQueue(n){let t;typeof n[n.length-1]=="function"&&(t=n.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:n,flags:Object.assign({fromQueue:!0},this.flags)};n.push((r,...o)=>i!==this._queue[0]?void 0:(r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(r)):(this._queue.shift(),t&&t(null,...o)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(n=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!n||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(n){n.nsp=this.nsp,this.io._packet(n)}onopen(){typeof this.auth=="function"?this.auth(n=>{this._sendConnectPacket(n)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(n){this.packet({type:Oe.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},n):n})}onerror(n){this.connected||this.emitReserved("connect_error",n)}onclose(n,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",n,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(n=>{if(!this.sendBuffer.some(i=>String(i.id)===n)){const i=this.acks[n];delete this.acks[n],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(n){if(n.nsp===this.nsp)switch(n.type){case Oe.CONNECT:n.data&&n.data.sid?this.onconnect(n.data.sid,n.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Oe.EVENT:case Oe.BINARY_EVENT:this.onevent(n);break;case Oe.ACK:case Oe.BINARY_ACK:this.onack(n);break;case Oe.DISCONNECT:this.ondisconnect();break;case Oe.CONNECT_ERROR:this.destroy();const i=new Error(n.data.message);i.data=n.data.data,this.emitReserved("connect_error",i);break}}onevent(n){const t=n.data||[];n.id!=null&&t.push(this.ack(n.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(n){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,n)}super.emit.apply(this,n),this._pid&&n.length&&typeof n[n.length-1]=="string"&&(this._lastOffset=n[n.length-1])}ack(n){const t=this;let i=!1;return function(...r){i||(i=!0,t.packet({type:Oe.ACK,id:n,data:r}))}}onack(n){const t=this.acks[n.id];typeof t=="function"&&(delete this.acks[n.id],t.withError&&n.data.unshift(null),t.apply(this,n.data))}onconnect(n,t){this.id=n,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(n=>this.emitEvent(n)),this.receiveBuffer=[],this.sendBuffer.forEach(n=>{this.notifyOutgoingListeners(n),this.packet(n)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(n=>n()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Oe.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(n){return this.flags.compress=n,this}get volatile(){return this.flags.volatile=!0,this}timeout(n){return this.flags.timeout=n,this}onAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(n),this}prependAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(n),this}offAny(n){if(!this._anyListeners)return this;if(n){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(n===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(n),this}prependAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(n),this}offAnyOutgoing(n){if(!this._anyOutgoingListeners)return this;if(n){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(n===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(n){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,n.data)}}}function ei(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}ei.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var n=Math.random(),t=Math.floor(n*this.jitter*e);e=Math.floor(n*10)&1?e+t:e-t}return Math.min(e,this.max)|0};ei.prototype.reset=function(){this.attempts=0};ei.prototype.setMin=function(e){this.ms=e};ei.prototype.setMax=function(e){this.max=e};ei.prototype.setJitter=function(e){this.jitter=e};class wo extends ut{constructor(n,t){var i;super(),this.nsps={},this.subs=[],n&&typeof n=="object"&&(t=n,n=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Er(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new ei({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=n;const r=t.parser||V0;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(n){return arguments.length?(this._reconnection=!!n,n||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(n){return n===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=n,this)}reconnectionDelay(n){var t;return n===void 0?this._reconnectionDelay:(this._reconnectionDelay=n,(t=this.backoff)===null||t===void 0||t.setMin(n),this)}randomizationFactor(n){var t;return n===void 0?this._randomizationFactor:(this._randomizationFactor=n,(t=this.backoff)===null||t===void 0||t.setJitter(n),this)}reconnectionDelayMax(n){var t;return n===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=n,(t=this.backoff)===null||t===void 0||t.setMax(n),this)}timeout(n){return arguments.length?(this._timeout=n,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(n){if(~this._readyState.indexOf("open"))return this;this.engine=new D0(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=Vt(t,"open",function(){i.onopen(),n&&n()}),o=s=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",s),n?n(s):this.maybeReconnectOnOpen()},a=Vt(t,"error",o);if(this._timeout!==!1){const s=this._timeout,p=this.setTimeoutFn(()=>{r(),o(new Error("timeout")),t.close()},s);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(r),this.subs.push(a),this}connect(n){return this.open(n)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const n=this.engine;this.subs.push(Vt(n,"ping",this.onping.bind(this)),Vt(n,"data",this.ondata.bind(this)),Vt(n,"error",this.onerror.bind(this)),Vt(n,"close",this.onclose.bind(this)),Vt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(n){try{this.decoder.add(n)}catch(t){this.onclose("parse error",t)}}ondecoded(n){vr(()=>{this.emitReserved("packet",n)},this.setTimeoutFn)}onerror(n){this.emitReserved("error",n)}socket(n,t){let i=this.nsps[n];return i?this._autoConnect&&!i.active&&i.connect():(i=new _l(this,n,t),this.nsps[n]=i),i}_destroy(n){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(n){const t=this.encoder.encode(n);for(let i=0;i<t.length;i++)this.engine.write(t[i],n.options)}cleanup(){this.subs.forEach(n=>n()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(n,t){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",n,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const n=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{n.skipReconnect||(this.emitReserved("reconnect_attempt",n.backoff.attempts),!n.skipReconnect&&n.open(r=>{r?(n._reconnecting=!1,n.reconnect(),this.emitReserved("reconnect_error",r)):n.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const n=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",n)}}const ri={};function ir(e,n){typeof e=="object"&&(n=e,e=void 0),n=n||{};const t=L0(e,n.path||"/socket.io"),i=t.source,r=t.id,o=t.path,a=ri[r]&&o in ri[r].nsps,s=n.forceNew||n["force new connection"]||n.multiplex===!1||a;let p;return s?p=new wo(i,n):(ri[r]||(ri[r]=new wo(i,n)),p=ri[r]),t.query&&!n.query&&(n.query=t.queryKey),p.socket(t.path,n)}Object.assign(ir,{Manager:wo,Socket:_l,io:ir,connect:ir});class W0{constructor(n,t,i){this.players={},this.playersMesh={},this.world=n,this.scene=t,this.socket=null,this.chat=i}getSocket(){return this.socket}init(){this.socket=ir("https://baptiste-texier.ddns.net:3000"),this.socket.emit("join",{username:"Joueur1",position:{x:0,y:71,z:10},direction:{x:0,y:0,z:0}}),this.chat.add("Connected to server"),this.socket.on("player-connect",n=>{console.log("Joueurs connectés:",n),this.chat.add(n.id+" joined the game"),this.updatePlayers({[n.id]:n})}),this.socket.on("player-disconnect",n=>{console.log("Joueurs déconnecté:",n),this.chat.add(n+" left the game"),this.scene.remove(this.playersMesh[n])}),this.socket.on("addBlock",n=>{this.world.addBlock(n.x,n.y,n.z,n.blockId)}),this.socket.on("removeBlock",n=>{this.world.removeBlock(n.x,n.y,n.z)}),this.socket.on("playerState",n=>{this.updatePlayers(n)})}updatePlayers(n){for(let t in n)if(t!=this.socket.id){if(!this.players[t]){const f=this.createPlayerMesh();this.scene.add(f),this.players[t]=f,this.playersMesh[t]=f}this.players[t].position.set(n[t].position.x,n[t].position.y,n[t].position.z);const i=this.players[t],r=n[t].position.x+n[t].direction.x,o=n[t].position.y+n[t].direction.y,a=n[t].position.z+n[t].direction.z,s=new Re(r,i.position.y,a),p=Math.atan2(s.z-i.position.z,s.x-i.position.x);this.players[t].rotation.y=p,this.players[t].lookAt(new Re(r,i.position.y,a)),this.players[t].getObjectByName("head").lookAt(new Re(r,o,a))}}createPlayerMesh(){const n=new sn;new hd({color:65280});const t=new Qe(new mt(.25,.72,.25),Xt.steve.leg.material);t.position.set(-.12,-1.45,0),n.add(t);const i=new Qe(new mt(.25,.72,.25),Xt.steve.leg.material);i.position.set(.12,-1.45,0),n.add(i);const r=new Qe(new mt(.5,.71,.25),Xt.steve.body.material);r.position.set(0,-.75,0),n.add(r);const o=new Qe(new mt(.5,.5,.5),Xt.steve.head.material);o.position.set(0,-.15,0),o.name="head",n.add(o);const a=new Qe(new mt(.25,.71,.25),Xt.steve.arm.material);a.position.set(-.38,-.75,0),n.add(a);const s=new Qe(new mt(.25,.71,.25),Xt.steve.arm.material);return s.position.set(.38,-.75,0),n.add(s),n}}class X0{constructor(){xe(this,"content",[]);xe(this,"element");this.element=document.getElementById("chat"),window.addEventListener("keydown",this.onKeyDown.bind(this))}add(n){this.content.push(n),console.log(this.content),this.display()}display(){let n="";this.content.forEach(t=>{n+='<span style="color: #FEFE3F;">'+t+"</span><br>"}),this.element.innerHTML=n,this.element.style.display="block",setTimeout(()=>{this.element.style.display="none"},1e4)}onKeyDown(n){n.code==="KeyT"&&this.display()}}var pi=function(){var e=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(f){f.preventDefault(),i(++e%n.children.length)},!1);function t(f){return n.appendChild(f.dom),f}function i(f){for(var E=0;E<n.children.length;E++)n.children[E].style.display=E===f?"block":"none";e=f}var r=(performance||Date).now(),o=r,a=0,s=t(new pi.Panel("FPS","#0ff","#002")),p=t(new pi.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new pi.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:n,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){a++;var f=(performance||Date).now();if(p.update(f-r,200),f>=o+1e3&&(s.update(a*1e3/(f-o),100),o=f,a=0,c)){var E=performance.memory;c.update(E.usedJSHeapSize/1048576,E.jsHeapSizeLimit/1048576)}return f},update:function(){r=this.end()},domElement:n,setMode:i}};pi.Panel=function(e,n,t){var i=1/0,r=0,o=Math.round,a=o(window.devicePixelRatio||1),s=80*a,p=48*a,c=3*a,f=2*a,E=3*a,m=15*a,g=74*a,y=30*a,w=document.createElement("canvas");w.width=s,w.height=p,w.style.cssText="width:80px;height:48px";var d=w.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,s,p),d.fillStyle=n,d.fillText(e,c,f),d.fillRect(E,m,g,y),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(E,m,g,y),{dom:w,update:function(l,D){i=Math.min(i,l),r=Math.max(r,l),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,s,m),d.fillStyle=n,d.fillText(o(l)+" "+e+" ("+o(i)+"-"+o(r)+")",c,f),d.drawImage(w,E+a,m,g-a,y,E,m,g-a,y),d.fillRect(E+g-a,m,a,y),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(E+g-a,m,a,o((1-l/D)*y))}}};const Jt=new pd,Tt=new Lv;Tt.generate();Jt.add(Tt);Jt.fog=new _d(8429792,Tt.chunkSize.width*Tt.drawDistance*.9,Tt.chunkSize.width*Tt.drawDistance);const In=new J_;In.setPixelRatio(window.devicePixelRatio);In.setSize(window.innerWidth,window.innerHeight);In.setClearColor(8429792);In.shadowMap.enabled=!0;In.shadowMap.type=hc;document.body.appendChild(In.domElement);const q0=document.getElementById("fps"),Y0=document.getElementById("time"),ml=new X0(Tt,Jt),gl=new W0(Tt,Jt,ml),Pt=new am(Jt,Tt,gl),K0=new Gv(Jt),Pi=new Xv(Pt,Tt);new Zv(Tt,Pt,Pi,gl,ml);const Z0=new Wv(Pt,Pi),Ys=new $v(Jt,Pt,.2);Pt.setInventory(Pi);Pt.setUI(Z0);const vl=new Ov;Jt.add(vl);window.addEventListener("keydown",e=>{e.code==="KeyE"&&(Pt.controls.isLocked?(Pt.controls.unlock(),Pi.show()):(Pt.controls.lock(),Pi.hide()))});Jt.background=new nt(7254527);var Jr=performance.now(),Ks=0,Qr=0,Zs=0;const $0=new md,El=new pi;document.body.appendChild(El.dom);let $s=performance.now();function Sl(){const e=performance.now(),n=$0.getDelta();let t=(e-Zs)/1e3;K0.update(t,Pt,Tt),Tt.update(Pt),Pt.update(Tt),Zs=e,Qr++,e-Jr>1e3&&(Ks=Math.round(Qr*1e3/(e-Jr)),q0.textContent=`FPS: ${Ks}`,Jr=e,Qr=0,Y0.textContent=Ys.getTime());const i=performance.now(),r=i-$s;$s=i,Ys.update(r),vl.movePig(n,Tt),In.render(Jt,Pt.camera),requestAnimationFrame(Sl),El.update()}Sl();document.addEventListener("contextmenu",function(e){e.preventDefault()},!1);
