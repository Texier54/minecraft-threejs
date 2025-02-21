var Ea=Object.defineProperty;var wi=e=>{throw TypeError(e)};var Sa=(e,n,t)=>n in e?Ea(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var xe=(e,n,t)=>Sa(e,typeof n!="symbol"?n+"":n,t),Ma=(e,n,t)=>n.has(e)||wi("Cannot "+t);var Cn=(e,n,t)=>(Ma(e,n,"read from private field"),t?t.call(e):n.get(e)),Pi=(e,n,t)=>n.has(e)?wi("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);import{c as Ta,S as vi,N as kt,C as Ze,R as xa,W as cn,H as Gn,U as Kt,L as pn,a as at,D as Nt,B as At,F as _n,t as Aa,b as Ra,p as ba,w as tn,d as Ca,E as ya,V as pt,P as mn,e as vt,A as wa,f as Ot,g as Fn,h as Ei,i as gn,j as vn,k as Br,l as De,m as Pa,n as kr,M as Pt,o as Vn,q as Da,r as Ge,s as La,u as Ia,v as Ua,x as $t,y as Hr,z as Un,G as ot,I as Gr,J as Yt,K as Ut,O as yt,Q as Bn,T as un,X as Na,Y as Oa,Z as Fa,_ as Ba,$ as ka,a0 as Ha,a1 as Ga,a2 as Va,a3 as za,a4 as Wa,a5 as Xa,a6 as qa,a7 as Ya,a8 as Ka,a9 as $a,aa as Za,ab as ja,ac as Qa,ad as Ja,ae as eo,af as to,ag as yn,ah as an,ai as Yn,aj as no,ak as io,al as ro,am as Vr,an as ao,ao as oo,ap as so,aq as co,ar as Bt,as as zr,at as Wr,au as Xr,av as kn,aw as qr,ax as Yr,ay as zn,az as Ct,aA as Di,aB as $e,aC as Kr,aD as $r,aE as Zr,aF as qt,aG as ci,aH as li,aI as lo,aJ as jr,aK as fo,aL as uo,aM as Nn,aN as po,aO as ho,aP as Li,aQ as Ii,aR as Ui,aS as mo,aT as Ni,aU as _o,aV as nn,aW as Oi,aX as go,aY as vo,aZ as Eo,a_ as So,a$ as Mo,b0 as To,b1 as xo,b2 as Ao,b3 as Ro,b4 as Kn,b5 as $n,b6 as Zn,b7 as jn,b8 as Fi,b9 as Bi,ba as ki,bb as Hi,bc as Gi,bd as Vi,be as zi,bf as Wi,bg as Xi,bh as qi,bi as Yi,bj as Ki,bk as $i,bl as Zi,bm as ji,bn as Qi,bo as Ji,bp as er,bq as tr,br as nr,bs as ir,bt as Qn,bu as rr,bv as ar,bw as bo,bx as or,by as sr,bz as cr,bA as Qr,bB as _t,bC as En,bD as Sn,bE as ln,bF as Ft,bG as Co,bH as yo,bI as wo,bJ as lr,bK as Po,bL as di,bM as fi,bN as ui,bO as pi,bP as hi,bQ as mi,bR as _i,bS as Do,bT as Lo,bU as Jr,bV as Io,bW as Uo,bX as No,bY as Oo,bZ as Fo,b_ as Bo,b$ as ko,c0 as Ho,c1 as ea,c2 as Go,c3 as Vo,c4 as zo,c5 as Wo,c6 as Xo,c7 as qo,c8 as Yo,c9 as Ko,ca as Hn,cb as Ke,cc as $o,cd as ft,ce as Zo,cf as he,cg as jo,ch as Qo,ci as Jo,cj as es,ck as ts,cl as ns,cm as is,cn as rs,co as as,cp as os}from"./recipes-BuQu2uzc.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ta(){let e=null,n=!1,t=null,i=null;function r(a,o){t(a,o),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function ss(e){const n=new WeakMap;function t(s,_){const m=s.array,E=s.usage,g=m.byteLength,v=e.createBuffer();e.bindBuffer(_,v),e.bufferData(_,m,E),s.onUploadCallback();let x;if(m instanceof Float32Array)x=e.FLOAT;else if(m instanceof Uint16Array)s.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=e.SHORT;else if(m instanceof Uint32Array)x=e.UNSIGNED_INT;else if(m instanceof Int32Array)x=e.INT;else if(m instanceof Int8Array)x=e.BYTE;else if(m instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:s.version,size:g}}function i(s,_,m){const E=_.array,g=_.updateRanges;if(e.bindBuffer(m,s),g.length===0)e.bufferSubData(m,0,E);else{g.sort((x,U)=>x.start-U.start);let v=0;for(let x=1;x<g.length;x++){const U=g[v],y=g[x];y.start<=U.start+U.count+1?U.count=Math.max(U.count,y.start+y.count-U.start):(++v,g[v]=y)}g.length=v+1;for(let x=0,U=g.length;x<U;x++){const y=g[x];e.bufferSubData(m,y.start*E.BYTES_PER_ELEMENT,E,y.start,y.count)}_.clearUpdateRanges()}_.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const _=n.get(s);_&&(e.deleteBuffer(_.buffer),n.delete(s))}function o(s,_){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const E=n.get(s);(!E||E.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const m=n.get(s);if(m===void 0)n.set(s,t(s,_));else if(m.version<s.version){if(m.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(m.buffer,s,_),m.version=s.version}}return{get:r,remove:a,update:o}}var cs=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ls=`#ifdef USE_ALPHAHASH
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
#endif`,ds=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fs=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,us=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ps=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hs=`#ifdef USE_AOMAP
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
#endif`,ms=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_s=`#ifdef USE_BATCHING
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
#endif`,gs=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Es=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ss=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ms=`#ifdef USE_IRIDESCENCE
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
#endif`,Ts=`#ifdef USE_BUMPMAP
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
#endif`,xs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,As=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rs=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cs=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ys=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ws=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ps=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ds=`#define PI 3.141592653589793
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
} // validated`,Ls=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Is=`vec3 transformedNormal = objectNormal;
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
#endif`,Us=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ns=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Os=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fs=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bs="gl_FragColor = linearToOutputTexel( gl_FragColor );",ks=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hs=`#ifdef USE_ENVMAP
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
#endif`,Gs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vs=`#ifdef USE_ENVMAP
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
#endif`,zs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ws=`#ifdef USE_ENVMAP
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
#endif`,Xs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ys=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ks=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$s=`#ifdef USE_GRADIENTMAP
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
}`,Zs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,js=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Js=`uniform bool receiveShadow;
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
#endif`,ec=`#ifdef USE_ENVMAP
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
#endif`,tc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ic=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ac=`PhysicalMaterial material;
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
#endif`,oc=`struct PhysicalMaterial {
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
}`,sc=`
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
#endif`,cc=`#if defined( RE_IndirectDiffuse )
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
#endif`,lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gc=`#if defined( USE_POINTS_UV )
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
#endif`,vc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ec=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xc=`#ifdef USE_MORPHTARGETS
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
#endif`,Ac=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pc=`#ifdef USE_NORMALMAP
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
#endif`,Dc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ic=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qc=`float getShadowMask() {
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
}`,Yc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kc=`#ifdef USE_SKINNING
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
#endif`,$c=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zc=`#ifdef USE_SKINNING
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
#endif`,jc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,el=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tl=`#ifdef USE_TRANSMISSION
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
#endif`,nl=`#ifdef USE_TRANSMISSION
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
#endif`,il=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,al=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ol=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cl=`uniform sampler2D t2D;
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
}`,ll=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ul=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pl=`#include <common>
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
}`,hl=`#if DEPTH_PACKING == 3200
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
}`,ml=`#define DISTANCE
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
}`,_l=`#define DISTANCE
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
}`,gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,El=`uniform float scale;
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
}`,Sl=`uniform vec3 diffuse;
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
}`,Ml=`#include <common>
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
}`,Tl=`uniform vec3 diffuse;
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
}`,xl=`#define LAMBERT
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
}`,Al=`#define LAMBERT
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
}`,Rl=`#define MATCAP
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
}`,bl=`#define MATCAP
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
}`,Cl=`#define NORMAL
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
}`,yl=`#define NORMAL
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
}`,wl=`#define PHONG
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
}`,Pl=`#define PHONG
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
}`,Dl=`#define STANDARD
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
}`,Ll=`#define STANDARD
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
}`,Il=`#define TOON
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
}`,Ul=`#define TOON
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
}`,Nl=`uniform float size;
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
}`,Ol=`uniform vec3 diffuse;
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
}`,Fl=`#include <common>
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
}`,Bl=`uniform vec3 color;
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
}`,kl=`uniform float rotation;
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
}`,Hl=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:cs,alphahash_pars_fragment:ls,alphamap_fragment:ds,alphamap_pars_fragment:fs,alphatest_fragment:us,alphatest_pars_fragment:ps,aomap_fragment:hs,aomap_pars_fragment:ms,batching_pars_vertex:_s,batching_vertex:gs,begin_vertex:vs,beginnormal_vertex:Es,bsdfs:Ss,iridescence_fragment:Ms,bumpmap_pars_fragment:Ts,clipping_planes_fragment:xs,clipping_planes_pars_fragment:As,clipping_planes_pars_vertex:Rs,clipping_planes_vertex:bs,color_fragment:Cs,color_pars_fragment:ys,color_pars_vertex:ws,color_vertex:Ps,common:Ds,cube_uv_reflection_fragment:Ls,defaultnormal_vertex:Is,displacementmap_pars_vertex:Us,displacementmap_vertex:Ns,emissivemap_fragment:Os,emissivemap_pars_fragment:Fs,colorspace_fragment:Bs,colorspace_pars_fragment:ks,envmap_fragment:Hs,envmap_common_pars_fragment:Gs,envmap_pars_fragment:Vs,envmap_pars_vertex:zs,envmap_physical_pars_fragment:ec,envmap_vertex:Ws,fog_vertex:Xs,fog_pars_vertex:qs,fog_fragment:Ys,fog_pars_fragment:Ks,gradientmap_pars_fragment:$s,lightmap_pars_fragment:Zs,lights_lambert_fragment:js,lights_lambert_pars_fragment:Qs,lights_pars_begin:Js,lights_toon_fragment:tc,lights_toon_pars_fragment:nc,lights_phong_fragment:ic,lights_phong_pars_fragment:rc,lights_physical_fragment:ac,lights_physical_pars_fragment:oc,lights_fragment_begin:sc,lights_fragment_maps:cc,lights_fragment_end:lc,logdepthbuf_fragment:dc,logdepthbuf_pars_fragment:fc,logdepthbuf_pars_vertex:uc,logdepthbuf_vertex:pc,map_fragment:hc,map_pars_fragment:mc,map_particle_fragment:_c,map_particle_pars_fragment:gc,metalnessmap_fragment:vc,metalnessmap_pars_fragment:Ec,morphinstance_vertex:Sc,morphcolor_vertex:Mc,morphnormal_vertex:Tc,morphtarget_pars_vertex:xc,morphtarget_vertex:Ac,normal_fragment_begin:Rc,normal_fragment_maps:bc,normal_pars_fragment:Cc,normal_pars_vertex:yc,normal_vertex:wc,normalmap_pars_fragment:Pc,clearcoat_normal_fragment_begin:Dc,clearcoat_normal_fragment_maps:Lc,clearcoat_pars_fragment:Ic,iridescence_pars_fragment:Uc,opaque_fragment:Nc,packing:Oc,premultiplied_alpha_fragment:Fc,project_vertex:Bc,dithering_fragment:kc,dithering_pars_fragment:Hc,roughnessmap_fragment:Gc,roughnessmap_pars_fragment:Vc,shadowmap_pars_fragment:zc,shadowmap_pars_vertex:Wc,shadowmap_vertex:Xc,shadowmask_pars_fragment:qc,skinbase_vertex:Yc,skinning_pars_vertex:Kc,skinning_vertex:$c,skinnormal_vertex:Zc,specularmap_fragment:jc,specularmap_pars_fragment:Qc,tonemapping_fragment:Jc,tonemapping_pars_fragment:el,transmission_fragment:tl,transmission_pars_fragment:nl,uv_pars_fragment:il,uv_pars_vertex:rl,uv_vertex:al,worldpos_vertex:ol,background_vert:sl,background_frag:cl,backgroundCube_vert:ll,backgroundCube_frag:dl,cube_vert:fl,cube_frag:ul,depth_vert:pl,depth_frag:hl,distanceRGBA_vert:ml,distanceRGBA_frag:_l,equirect_vert:gl,equirect_frag:vl,linedashed_vert:El,linedashed_frag:Sl,meshbasic_vert:Ml,meshbasic_frag:Tl,meshlambert_vert:xl,meshlambert_frag:Al,meshmatcap_vert:Rl,meshmatcap_frag:bl,meshnormal_vert:Cl,meshnormal_frag:yl,meshphong_vert:wl,meshphong_frag:Pl,meshphysical_vert:Dl,meshphysical_frag:Ll,meshtoon_vert:Il,meshtoon_frag:Ul,points_vert:Nl,points_frag:Ol,shadow_vert:Fl,shadow_frag:Bl,sprite_vert:kl,sprite_frag:Hl},ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wt={basic:{uniforms:_t([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:_t([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:_t([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:_t([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:_t([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:_t([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:_t([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:_t([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:_t([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:_t([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:_t([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:_t([ee.common,ee.displacementmap,{referencePosition:{value:new De},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:_t([ee.lights,ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};wt.physical={uniforms:_t([wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const wn={r:0,b:0,g:0},Vt=new En,Gl=new Pt;function Vl(e,n,t,i,r,a,o){const s=new Ze(0);let _=a===!0?0:1,m,E,g=null,v=0,x=null;function U(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:n).get(M)),M}function y(b){let M=!1;const H=U(b);H===null?c(s,_):H&&H.isColor&&(c(H,1),M=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(b,M){const H=U(M);H&&(H.isCubeTexture||H.mapping===zn)?(E===void 0&&(E=new ot(new Ct(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Di(wt.backgroundCube.uniforms),vertexShader:wt.backgroundCube.vertexShader,fragmentShader:wt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(E)),Vt.copy(M.backgroundRotation),Vt.x*=-1,Vt.y*=-1,Vt.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Vt.y*=-1,Vt.z*=-1),E.material.uniforms.envMap.value=H,E.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(Gl.makeRotationFromEuler(Vt)),E.material.toneMapped=at.getTransfer(H.colorSpace)!==$e,(g!==H||v!==H.version||x!==e.toneMapping)&&(E.material.needsUpdate=!0,g=H,v=H.version,x=e.toneMapping),E.layers.enableAll(),b.unshift(E,E.geometry,E.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new ot(new Kr(2,2),new $t({name:"BackgroundMaterial",uniforms:Di(wt.background.uniforms),vertexShader:wt.background.vertexShader,fragmentShader:wt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,m.material.toneMapped=at.getTransfer(H.colorSpace)!==$e,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||v!==H.version||x!==e.toneMapping)&&(m.material.needsUpdate=!0,g=H,v=H.version,x=e.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function c(b,M){b.getRGB(wn,$r(e)),i.buffers.color.setClear(wn.r,wn.g,wn.b,M,o)}function I(){E!==void 0&&(E.geometry.dispose(),E.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),_=M,c(s,_)},getClearAlpha:function(){return _},setClearAlpha:function(b){_=b,c(s,_)},render:y,addToRenderList:f,dispose:I}}function zl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=v(null);let a=r,o=!1;function s(u,C,Y,G,q){let j=!1;const z=g(G,Y,C);a!==z&&(a=z,m(a.object)),j=x(u,G,Y,q),j&&U(u,G,Y,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(u,C,Y,G),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function _(){return e.createVertexArray()}function m(u){return e.bindVertexArray(u)}function E(u){return e.deleteVertexArray(u)}function g(u,C,Y){const G=Y.wireframe===!0;let q=i[u.id];q===void 0&&(q={},i[u.id]=q);let j=q[C.id];j===void 0&&(j={},q[C.id]=j);let z=j[G];return z===void 0&&(z=v(_()),j[G]=z),z}function v(u){const C=[],Y=[],G=[];for(let q=0;q<t;q++)C[q]=0,Y[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:G,object:u,attributes:{},index:null}}function x(u,C,Y,G){const q=a.attributes,j=C.attributes;let z=0;const J=Y.getAttributes();for(const F in J)if(J[F].location>=0){const Te=q[F];let Le=j[F];if(Le===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(Le=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(Le=u.instanceColor)),Te===void 0||Te.attribute!==Le||Le&&Te.data!==Le.data)return!0;z++}return a.attributesNum!==z||a.index!==G}function U(u,C,Y,G){const q={},j=C.attributes;let z=0;const J=Y.getAttributes();for(const F in J)if(J[F].location>=0){let Te=j[F];Te===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(Te=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(Te=u.instanceColor));const Le={};Le.attribute=Te,Te&&Te.data&&(Le.data=Te.data),q[F]=Le,z++}a.attributes=q,a.attributesNum=z,a.index=G}function y(){const u=a.newAttributes;for(let C=0,Y=u.length;C<Y;C++)u[C]=0}function f(u){c(u,0)}function c(u,C){const Y=a.newAttributes,G=a.enabledAttributes,q=a.attributeDivisors;Y[u]=1,G[u]===0&&(e.enableVertexAttribArray(u),G[u]=1),q[u]!==C&&(e.vertexAttribDivisor(u,C),q[u]=C)}function I(){const u=a.newAttributes,C=a.enabledAttributes;for(let Y=0,G=C.length;Y<G;Y++)C[Y]!==u[Y]&&(e.disableVertexAttribArray(Y),C[Y]=0)}function b(u,C,Y,G,q,j,z){z===!0?e.vertexAttribIPointer(u,C,Y,q,j):e.vertexAttribPointer(u,C,Y,G,q,j)}function M(u,C,Y,G){y();const q=G.attributes,j=Y.getAttributes(),z=C.defaultAttributeValues;for(const J in j){const F=j[J];if(F.location>=0){let _e=q[J];if(_e===void 0&&(J==="instanceMatrix"&&u.instanceMatrix&&(_e=u.instanceMatrix),J==="instanceColor"&&u.instanceColor&&(_e=u.instanceColor)),_e!==void 0){const Te=_e.normalized,Le=_e.itemSize,Ve=n.get(_e);if(Ve===void 0)continue;const et=Ve.buffer,V=Ve.type,Q=Ve.bytesPerElement,ue=V===e.INT||V===e.UNSIGNED_INT||_e.gpuType===Zr;if(_e.isInterleavedBufferAttribute){const ie=_e.data,Me=ie.stride,be=_e.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)c(F.location+Ie,ie.meshPerAttribute);u.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)f(F.location+Ie);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Ie=0;Ie<F.locationSize;Ie++)b(F.location+Ie,Le/F.locationSize,V,Te,Me*Q,(be+Le/F.locationSize*Ie)*Q,ue)}else{if(_e.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)c(F.location+ie,_e.meshPerAttribute);u.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ie=0;ie<F.locationSize;ie++)f(F.location+ie);e.bindBuffer(e.ARRAY_BUFFER,et);for(let ie=0;ie<F.locationSize;ie++)b(F.location+ie,Le/F.locationSize,V,Te,Le*Q,Le/F.locationSize*ie*Q,ue)}}else if(z!==void 0){const Te=z[J];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(F.location,Te);break;case 3:e.vertexAttrib3fv(F.location,Te);break;case 4:e.vertexAttrib4fv(F.location,Te);break;default:e.vertexAttrib1fv(F.location,Te)}}}}I()}function H(){B();for(const u in i){const C=i[u];for(const Y in C){const G=C[Y];for(const q in G)E(G[q].object),delete G[q];delete C[Y]}delete i[u]}}function P(u){if(i[u.id]===void 0)return;const C=i[u.id];for(const Y in C){const G=C[Y];for(const q in G)E(G[q].object),delete G[q];delete C[Y]}delete i[u.id]}function N(u){for(const C in i){const Y=i[C];if(Y[u.id]===void 0)continue;const G=Y[u.id];for(const q in G)E(G[q].object),delete G[q];delete Y[u.id]}}function B(){h(),o=!0,a!==r&&(a=r,m(a.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:B,resetDefaultState:h,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:f,disableUnusedAttributes:I}}function Wl(e,n,t){let i;function r(m){i=m}function a(m,E){e.drawArrays(i,m,E),t.update(E,i,1)}function o(m,E,g){g!==0&&(e.drawArraysInstanced(i,m,E,g),t.update(E,i,g))}function s(m,E,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,m,0,E,0,g);let x=0;for(let U=0;U<g;U++)x+=E[U];t.update(x,i,1)}function _(m,E,g,v){if(g===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let U=0;U<m.length;U++)o(m[U],E[U],v[U]);else{x.multiDrawArraysInstancedWEBGL(i,m,0,E,0,v,0,g);let U=0;for(let y=0;y<g;y++)U+=E[y]*v[y];t.update(U,i,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=_}function Xl(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Ot&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(N){const B=N===Gn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Kt&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==qt&&!B)}function _(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const E=_(m);E!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",E,"instead."),m=E);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),c=e.getParameter(e.MAX_VERTEX_ATTRIBS),I=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),H=U>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:_,textureFormatReadable:o,textureTypeReadable:s,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:U,maxTextureSize:y,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:I,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:H,maxSamples:P}}function ql(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Da,s=new Ge,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||r;return r=v,i=g.length,x},this.beginShadows=function(){a=!0,E(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=E(g,v,0)},this.setState=function(g,v,x){const U=g.clippingPlanes,y=g.clipIntersection,f=g.clipShadows,c=e.get(g);if(!r||U===null||U.length===0||a&&!f)a?E(null):m();else{const I=a?0:i,b=I*4;let M=c.clippingState||null;_.value=M,M=E(U,v,b,x);for(let H=0;H!==b;++H)M[H]=t[H];c.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=I}};function m(){_.value!==t&&(_.value=t,_.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function E(g,v,x,U){const y=g!==null?g.length:0;let f=null;if(y!==0){if(f=_.value,U!==!0||f===null){const c=x+y*4,I=v.matrixWorldInverse;s.getNormalMatrix(I),(f===null||f.length<c)&&(f=new Float32Array(c));for(let b=0,M=x;b!==y;++b,M+=4)o.copy(g[b]).applyMatrix4(I,s),o.normal.toArray(f,M),f[M+3]=o.constant}_.value=f,_.needsUpdate=!0}return n.numPlanes=y,n.numIntersection=0,f}}function Yl(e){let n=new WeakMap;function t(o,s){return s===ci?o.mapping=Sn:s===li&&(o.mapping=ln),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ci||s===li)if(n.has(o)){const _=n.get(o).texture;return t(_,o.mapping)}else{const _=o.image;if(_&&_.height>0){const m=new lo(_.height);return m.fromEquirectangularTexture(e,o),n.set(o,m),o.addEventListener("dispose",r),t(m.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const _=n.get(s);_!==void 0&&(n.delete(s),_.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const on=4,dr=[.125,.215,.35,.446,.526,.582],Xt=20,Jn=new Io,fr=new Ze;let ei=null,ti=0,ni=0,ii=!1;const Wt=(1+Math.sqrt(5))/2,Qt=1/Wt,ur=[new De(-Wt,Qt,0),new De(Wt,Qt,0),new De(-Qt,0,Wt),new De(Qt,0,Wt),new De(0,Wt,-Qt),new De(0,Wt,Qt),new De(-1,1,-1),new De(1,1,-1),new De(-1,1,1),new De(1,1,1)];class pr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100){ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(n,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_r(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(ei,ti,ni),this._renderer.xr.enabled=ii,n.scissorTest=!1,Pn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Sn||n.mapping===ln?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Gn,format:Ot,colorSpace:Vn,depthBuffer:!1},r=hr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kl(a)),this._blurMaterial=$l(a,n,t)}return r}_compileMaterial(n){const t=new ot(this._lodPlanes[0],n);this._renderer.compile(t,Jn)}_sceneToCubeUV(n,t,i,r){const s=new mn(90,1,t,i),_=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],E=this._renderer,g=E.autoClear,v=E.toneMapping;E.getClearColor(fr),E.toneMapping=kt,E.autoClear=!1;const x=new Ft({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),U=new ot(new Ct,x);let y=!1;const f=n.background;f?f.isColor&&(x.color.copy(f),n.background=null,y=!0):(x.color.copy(fr),y=!0);for(let c=0;c<6;c++){const I=c%3;I===0?(s.up.set(0,_[c],0),s.lookAt(m[c],0,0)):I===1?(s.up.set(0,0,_[c]),s.lookAt(0,m[c],0)):(s.up.set(0,_[c],0),s.lookAt(0,0,m[c]));const b=this._cubeSize;Pn(r,I*b,c>2?b:0,b,b),E.setRenderTarget(r),y&&E.render(U,s),E.render(n,s)}U.geometry.dispose(),U.material.dispose(),E.toneMapping=v,E.autoClear=g,n.background=f}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===Sn||n.mapping===ln;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_r()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mr());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=n;const _=this._cubeSize;Pn(t,0,0,3*_,2*_),i.setRenderTarget(t),i.render(o,Jn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=ur[(r-a-1)%ur.length];this._blur(n,a-1,a,o,s)}t.autoClear=i}_blur(n,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,i,r,"latitudinal",a),this._halfBlur(o,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,o,s){const _=this._renderer,m=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,g=new ot(this._lodPlanes[r],m),v=m.uniforms,x=this._sizeLods[i]-1,U=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Xt-1),y=a/U,f=isFinite(a)?1+Math.floor(E*y):Xt;f>Xt&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xt}`);const c=[];let I=0;for(let N=0;N<Xt;++N){const B=N/y,h=Math.exp(-B*B/2);c.push(h),N===0?I+=h:N<f&&(I+=2*h)}for(let N=0;N<c.length;N++)c[N]=c[N]/I;v.envMap.value=n.texture,v.samples.value=f,v.weights.value=c,v.latitudinal.value=o==="latitudinal",s&&(v.poleAxis.value=s);const{_lodMax:b}=this;v.dTheta.value=U,v.mipInt.value=b-i;const M=this._sizeLods[r],H=3*M*(r>b-on?r-b+on:0),P=4*(this._cubeSize-M);Pn(t,H,P,3*M,2*M),_.setRenderTarget(t),_.render(g,Jn)}}function Kl(e){const n=[],t=[],i=[];let r=e;const a=e-on+1+dr.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let _=1/s;o>e-on?_=dr[o-e+on-1]:o===0&&(_=0),i.push(_);const m=1/(s-2),E=-m,g=1+m,v=[E,E,g,E,g,g,E,E,g,g,E,g],x=6,U=6,y=3,f=2,c=1,I=new Float32Array(y*U*x),b=new Float32Array(f*U*x),M=new Float32Array(c*U*x);for(let P=0;P<x;P++){const N=P%3*2/3-1,B=P>2?0:-1,h=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];I.set(h,y*U*P),b.set(v,f*U*P);const u=[P,P,P,P,P,P];M.set(u,c*U*P)}const H=new Hr;H.setAttribute("position",new Un(I,y)),H.setAttribute("uv",new Un(b,f)),H.setAttribute("faceIndex",new Un(M,c)),n.push(H),r>on&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function hr(e,n,t){const i=new cn(e,n,t);return i.texture.mapping=zn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function $l(e,n,t){const i=new Float32Array(Xt),r=new De(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Xt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Si(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function mr(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Si(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function _r(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Si(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Si(){return`

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
	`}function Zl(e){let n=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const _=s.mapping,m=_===ci||_===li,E=_===Sn||_===ln;if(m||E){let g=n.get(s);const v=g!==void 0?g.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==v)return t===null&&(t=new pr(e)),g=m?t.fromEquirectangular(s,g):t.fromCubemap(s,g),g.texture.pmremVersion=s.pmremVersion,n.set(s,g),g.texture;if(g!==void 0)return g.texture;{const x=s.image;return m&&x&&x.height>0||E&&x&&r(x)?(t===null&&(t=new pr(e)),g=m?t.fromEquirectangular(s):t.fromCubemap(s),g.texture.pmremVersion=s.pmremVersion,n.set(s,g),s.addEventListener("dispose",a),g.texture):null}}}return s}function r(s){let _=0;const m=6;for(let E=0;E<m;E++)s[E]!==void 0&&_++;return _===m}function a(s){const _=s.target;_.removeEventListener("dispose",a);const m=n.get(_);m!==void 0&&(n.delete(_),m.dispose())}function o(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&tn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ql(e,n,t,i){const r={},a=new WeakMap;function o(g){const v=g.target;v.index!==null&&n.remove(v.index);for(const U in v.attributes)n.remove(v.attributes[U]);v.removeEventListener("dispose",o),delete r[v.id];const x=a.get(v);x&&(n.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function s(g,v){return r[v.id]===!0||(v.addEventListener("dispose",o),r[v.id]=!0,t.memory.geometries++),v}function _(g){const v=g.attributes;for(const x in v)n.update(v[x],e.ARRAY_BUFFER)}function m(g){const v=[],x=g.index,U=g.attributes.position;let y=0;if(x!==null){const I=x.array;y=x.version;for(let b=0,M=I.length;b<M;b+=3){const H=I[b+0],P=I[b+1],N=I[b+2];v.push(H,P,P,N,N,H)}}else if(U!==void 0){const I=U.array;y=U.version;for(let b=0,M=I.length/3-1;b<M;b+=3){const H=b+0,P=b+1,N=b+2;v.push(H,P,P,N,N,H)}}else return;const f=new(Co(v)?yo:wo)(v,1);f.version=y;const c=a.get(g);c&&n.remove(c),a.set(g,f)}function E(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&m(g)}else m(g);return a.get(g)}return{get:s,update:_,getWireframeAttribute:E}}function Jl(e,n,t){let i;function r(v){i=v}let a,o;function s(v){a=v.type,o=v.bytesPerElement}function _(v,x){e.drawElements(i,x,a,v*o),t.update(x,i,1)}function m(v,x,U){U!==0&&(e.drawElementsInstanced(i,x,a,v*o,U),t.update(x,i,U))}function E(v,x,U){if(U===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,v,0,U);let f=0;for(let c=0;c<U;c++)f+=x[c];t.update(f,i,1)}function g(v,x,U,y){if(U===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<v.length;c++)m(v[c]/o,x[c],y[c]);else{f.multiDrawElementsInstancedWEBGL(i,x,0,a,v,0,y,0,U);let c=0;for(let I=0;I<U;I++)c+=x[I]*y[I];t.update(c,i,1)}}this.setMode=r,this.setIndex=s,this.render=_,this.renderInstances=m,this.renderMultiDraw=E,this.renderMultiDrawInstances=g}function ed(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=s*(a/3);break;case e.LINES:t.lines+=s*(a/2);break;case e.LINE_STRIP:t.lines+=s*(a-1);break;case e.LINE_LOOP:t.lines+=s*a;break;case e.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function td(e,n,t){const i=new WeakMap,r=new vt;function a(o,s,_){const m=o.morphTargetInfluences,E=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,g=E!==void 0?E.length:0;let v=i.get(s);if(v===void 0||v.count!==g){let h=function(){N.dispose(),i.delete(s),s.removeEventListener("dispose",h)};v!==void 0&&v.texture.dispose();const x=s.morphAttributes.position!==void 0,U=s.morphAttributes.normal!==void 0,y=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],I=s.morphAttributes.color||[];let b=0;x===!0&&(b=1),U===!0&&(b=2),y===!0&&(b=3);let M=s.attributes.position.count*b,H=1;M>n.maxTextureSize&&(H=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const P=new Float32Array(M*H*4*g),N=new jr(P,M,H,g);N.type=qt,N.needsUpdate=!0;const B=b*4;for(let u=0;u<g;u++){const C=f[u],Y=c[u],G=I[u],q=M*H*4*u;for(let j=0;j<C.count;j++){const z=j*B;x===!0&&(r.fromBufferAttribute(C,j),P[q+z+0]=r.x,P[q+z+1]=r.y,P[q+z+2]=r.z,P[q+z+3]=0),U===!0&&(r.fromBufferAttribute(Y,j),P[q+z+4]=r.x,P[q+z+5]=r.y,P[q+z+6]=r.z,P[q+z+7]=0),y===!0&&(r.fromBufferAttribute(G,j),P[q+z+8]=r.x,P[q+z+9]=r.y,P[q+z+10]=r.z,P[q+z+11]=G.itemSize===4?r.w:1)}}v={count:g,texture:N,size:new pt(M,H)},i.set(s,v),s.addEventListener("dispose",h)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)_.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let x=0;for(let y=0;y<m.length;y++)x+=m[y];const U=s.morphTargetsRelative?1:1-x;_.getUniforms().setValue(e,"morphTargetBaseInfluence",U),_.getUniforms().setValue(e,"morphTargetInfluences",m)}_.getUniforms().setValue(e,"morphTargetsTexture",v.texture,t),_.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}return{update:a}}function nd(e,n,t,i){let r=new WeakMap;function a(_){const m=i.render.frame,E=_.geometry,g=n.get(_,E);if(r.get(g)!==m&&(n.update(g),r.set(g,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",s)===!1&&_.addEventListener("dispose",s),r.get(_)!==m&&(t.update(_.instanceMatrix,e.ARRAY_BUFFER),_.instanceColor!==null&&t.update(_.instanceColor,e.ARRAY_BUFFER),r.set(_,m))),_.isSkinnedMesh){const v=_.skeleton;r.get(v)!==m&&(v.update(),r.set(v,m))}return g}function o(){r=new WeakMap}function s(_){const m=_.target;m.removeEventListener("dispose",s),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:a,dispose:o}}const na=new Qr,gr=new Br(1,1),ia=new jr,ra=new Vo,aa=new zo,vr=[],Er=[],Sr=new Float32Array(16),Mr=new Float32Array(9),Tr=new Float32Array(4);function dn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=vr[r];if(a===void 0&&(a=new Float32Array(r),vr[r]=a),n!==0){i.toArray(a,0);for(let o=1,s=0;o!==n;++o)s+=t,e[o].toArray(a,s)}return a}function st(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Wn(e,n){let t=Er[n];t===void 0&&(t=new Int32Array(n),Er[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function id(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function rd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function ad(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(st(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function od(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function sd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;Tr.set(i),e.uniformMatrix2fv(this.addr,!1,Tr),ct(t,i)}}function cd(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;Mr.set(i),e.uniformMatrix3fv(this.addr,!1,Mr),ct(t,i)}}function ld(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;Sr.set(i),e.uniformMatrix4fv(this.addr,!1,Sr),ct(t,i)}}function dd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function fd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function ud(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function pd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function hd(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function md(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function _d(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function gd(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function vd(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(gr.compareFunction=Vr,a=gr):a=na,t.setTexture2D(n||a,r)}function Ed(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||ra,r)}function Sd(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||aa,r)}function Md(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||ia,r)}function Td(e){switch(e){case 5126:return id;case 35664:return rd;case 35665:return ad;case 35666:return od;case 35674:return sd;case 35675:return cd;case 35676:return ld;case 5124:case 35670:return dd;case 35667:case 35671:return fd;case 35668:case 35672:return ud;case 35669:case 35673:return pd;case 5125:return hd;case 36294:return md;case 36295:return _d;case 36296:return gd;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return Ed;case 35680:case 36300:case 36308:case 36293:return Sd;case 36289:case 36303:case 36311:case 36292:return Md}}function xd(e,n){e.uniform1fv(this.addr,n)}function Ad(e,n){const t=dn(n,this.size,2);e.uniform2fv(this.addr,t)}function Rd(e,n){const t=dn(n,this.size,3);e.uniform3fv(this.addr,t)}function bd(e,n){const t=dn(n,this.size,4);e.uniform4fv(this.addr,t)}function Cd(e,n){const t=dn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function yd(e,n){const t=dn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function wd(e,n){const t=dn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Pd(e,n){e.uniform1iv(this.addr,n)}function Dd(e,n){e.uniform2iv(this.addr,n)}function Ld(e,n){e.uniform3iv(this.addr,n)}function Id(e,n){e.uniform4iv(this.addr,n)}function Ud(e,n){e.uniform1uiv(this.addr,n)}function Nd(e,n){e.uniform2uiv(this.addr,n)}function Od(e,n){e.uniform3uiv(this.addr,n)}function Fd(e,n){e.uniform4uiv(this.addr,n)}function Bd(e,n,t){const i=this.cache,r=n.length,a=Wn(t,r);st(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let o=0;o!==r;++o)t.setTexture2D(n[o]||na,a[o])}function kd(e,n,t){const i=this.cache,r=n.length,a=Wn(t,r);st(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||ra,a[o])}function Hd(e,n,t){const i=this.cache,r=n.length,a=Wn(t,r);st(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||aa,a[o])}function Gd(e,n,t){const i=this.cache,r=n.length,a=Wn(t,r);st(i,a)||(e.uniform1iv(this.addr,a),ct(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||ia,a[o])}function Vd(e){switch(e){case 5126:return xd;case 35664:return Ad;case 35665:return Rd;case 35666:return bd;case 35674:return Cd;case 35675:return yd;case 35676:return wd;case 5124:case 35670:return Pd;case 35667:case 35671:return Dd;case 35668:case 35672:return Ld;case 35669:case 35673:return Id;case 5125:return Ud;case 36294:return Nd;case 36295:return Od;case 36296:return Fd;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Gd}}class zd{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Td(t.type)}}class Wd{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vd(t.type)}}class Xd{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(n,t[s.id],i)}}}const ri=/(\w+)(\])?(\[|\.)?/g;function xr(e,n){e.seq.push(n),e.map[n.id]=n}function qd(e,n,t){const i=e.name,r=i.length;for(ri.lastIndex=0;;){const a=ri.exec(i),o=ri.lastIndex;let s=a[1];const _=a[2]==="]",m=a[3];if(_&&(s=s|0),m===void 0||m==="["&&o+2===r){xr(t,m===void 0?new zd(s,e,n):new Wd(s,e,n));break}else{let g=t.map[s];g===void 0&&(g=new Xd(s),xr(t,g)),t=g}}}class On{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),o=n.getUniformLocation(t,a.name);qd(a,o,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],_=i[s.id];_.needsUpdate!==!1&&s.setValue(n,_.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Ar(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Yd=37297;let Kd=0;function $d(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===n?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const Rr=new Ge;function Zd(e){at._getMatrix(Rr,at.workingColorSpace,e);const n=`mat3( ${Rr.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(e)){case Jr:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function br(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=e.getShaderInfoLog(n).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$d(e.getShaderSource(n),o)}else return r}function jd(e,n){const t=Zd(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qd(e,n){let t;switch(n){case Ho:t="Linear";break;case ko:t="Reinhard";break;case Bo:t="Cineon";break;case Fo:t="ACESFilmic";break;case Oo:t="AgX";break;case No:t="Neutral";break;case Uo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dn=new De;function Jd(){at.getLuminanceCoefficients(Dn);const e=Dn.x.toFixed(4),n=Dn.y.toFixed(4),t=Dn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ef(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hn).join(`
`)}function tf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function nf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:s}}return t}function hn(e){return e!==""}function Cr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function yr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function gi(e){return e.replace(rf,of)}const af=new Map;function of(e,n){let t=Pe[n];if(t===void 0){const i=af.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return gi(t)}const sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wr(e){return e.replace(sf,cf)}function cf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Pr(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function lf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Gr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ea?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ut&&(n="SHADOWMAP_TYPE_VSM"),n}function df(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Sn:case ln:n="ENVMAP_TYPE_CUBE";break;case zn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function ff(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ln:n="ENVMAP_MODE_REFRACTION";break}return n}function uf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qo:n="ENVMAP_BLENDING_MULTIPLY";break;case Xo:n="ENVMAP_BLENDING_MIX";break;case Wo:n="ENVMAP_BLENDING_ADD";break}return n}function pf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hf(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const _=lf(t),m=df(t),E=ff(t),g=uf(t),v=pf(t),x=ef(t),U=tf(a),y=r.createProgram();let f,c,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U].filter(hn).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U].filter(hn).join(`
`),c.length>0&&(c+=`
`)):(f=[Pr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hn).join(`
`),c=[Pr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,U,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+E:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+_:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kt?"#define TONE_MAPPING":"",t.toneMapping!==kt?Pe.tonemapping_pars_fragment:"",t.toneMapping!==kt?Qd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,jd("linearToOutputTexel",t.outputColorSpace),Jd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hn).join(`
`)),o=gi(o),o=Cr(o,t),o=yr(o,t),s=gi(s),s=Cr(s,t),s=yr(s,t),o=wr(o),s=wr(s),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,f=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",t.glslVersion===lr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const b=I+f+o,M=I+c+s,H=Ar(r,r.VERTEX_SHADER,b),P=Ar(r,r.FRAGMENT_SHADER,M);r.attachShader(y,H),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function N(C){if(e.debug.checkShaderErrors){const Y=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(H).trim(),q=r.getShaderInfoLog(P).trim();let j=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,y,H,P);else{const J=br(r,H,"vertex"),F=br(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+J+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||q==="")&&(z=!1);z&&(C.diagnostics={runnable:j,programLog:Y,vertexShader:{log:G,prefix:f},fragmentShader:{log:q,prefix:c}})}r.deleteShader(H),r.deleteShader(P),B=new On(r,y),h=nf(r,y)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let h;this.getAttributes=function(){return h===void 0&&N(this),h};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=r.getProgramParameter(y,Yd)),u},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kd++,this.cacheKey=n,this.usedTimes=1,this.program=y,this.vertexShader=H,this.fragmentShader=P,this}let mf=0;class _f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(n);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new gf(n),t.set(n,i)),i}}class gf{constructor(n){this.id=mf++,this.code=n,this.usedTimes=0}}function vf(e,n,t,i,r,a,o){const s=new Po,_=new _f,m=new Set,E=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const U={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(h){return m.add(h),h===0?"uv":`uv${h}`}function f(h,u,C,Y,G){const q=Y.fog,j=G.geometry,z=h.isMeshStandardMaterial?Y.environment:null,J=(h.isMeshStandardMaterial?t:n).get(h.envMap||z),F=J&&J.mapping===zn?J.image.height:null,_e=U[h.type];h.precision!==null&&(x=r.getMaxPrecision(h.precision),x!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",x,"instead."));const Te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Le=Te!==void 0?Te.length:0;let Ve=0;j.morphAttributes.position!==void 0&&(Ve=1),j.morphAttributes.normal!==void 0&&(Ve=2),j.morphAttributes.color!==void 0&&(Ve=3);let et,V,Q,ue;if(_e){const Xe=wt[_e];et=Xe.vertexShader,V=Xe.fragmentShader}else et=h.vertexShader,V=h.fragmentShader,_.update(h),Q=_.getVertexShaderID(h),ue=_.getFragmentShaderID(h);const ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),be=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,Je=!!h.map,Fe=!!h.matcap,it=!!J,S=!!h.aoMap,Mt=!!h.lightMap,Ue=!!h.bumpMap,Ne=!!h.normalMap,ge=!!h.displacementMap,Ye=!!h.emissiveMap,me=!!h.metalnessMap,p=!!h.roughnessMap,l=h.anisotropy>0,w=h.clearcoat>0,W=h.dispersion>0,K=h.iridescence>0,k=h.sheen>0,pe=h.transmission>0,re=l&&!!h.anisotropyMap,ce=w&&!!h.clearcoatMap,Be=w&&!!h.clearcoatNormalMap,Z=w&&!!h.clearcoatRoughnessMap,le=K&&!!h.iridescenceMap,Se=K&&!!h.iridescenceThicknessMap,Ae=k&&!!h.sheenColorMap,de=k&&!!h.sheenRoughnessMap,Oe=!!h.specularMap,we=!!h.specularColorMap,qe=!!h.specularIntensityMap,T=pe&&!!h.transmissionMap,te=pe&&!!h.thicknessMap,O=!!h.gradientMap,X=!!h.alphaMap,oe=h.alphaTest>0,ae=!!h.alphaHash,ye=!!h.extensions;let tt=kt;h.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(tt=e.toneMapping);const ut={shaderID:_e,shaderType:h.type,shaderName:h.name,vertexShader:et,fragmentShader:V,defines:h.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:x,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Vn,alphaToCoverage:!!h.alphaToCoverage,map:Je,matcap:Fe,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:F,aoMap:S,lightMap:Mt,bumpMap:Ue,normalMap:Ne,displacementMap:v&&ge,emissiveMap:Ye,normalMapObjectSpace:Ne&&h.normalMapType===fo,normalMapTangentSpace:Ne&&h.normalMapType===uo,metalnessMap:me,roughnessMap:p,anisotropy:l,anisotropyMap:re,clearcoat:w,clearcoatMap:ce,clearcoatNormalMap:Be,clearcoatRoughnessMap:Z,dispersion:W,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:k,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:Oe,specularColorMap:we,specularIntensityMap:qe,transmission:pe,transmissionMap:T,thicknessMap:te,gradientMap:O,opaque:h.transparent===!1&&h.blending===Nn&&h.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:ae,combine:h.combine,mapUv:Je&&y(h.map.channel),aoMapUv:S&&y(h.aoMap.channel),lightMapUv:Mt&&y(h.lightMap.channel),bumpMapUv:Ue&&y(h.bumpMap.channel),normalMapUv:Ne&&y(h.normalMap.channel),displacementMapUv:ge&&y(h.displacementMap.channel),emissiveMapUv:Ye&&y(h.emissiveMap.channel),metalnessMapUv:me&&y(h.metalnessMap.channel),roughnessMapUv:p&&y(h.roughnessMap.channel),anisotropyMapUv:re&&y(h.anisotropyMap.channel),clearcoatMapUv:ce&&y(h.clearcoatMap.channel),clearcoatNormalMapUv:Be&&y(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&y(h.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(h.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&y(h.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&y(h.sheenColorMap.channel),sheenRoughnessMapUv:de&&y(h.sheenRoughnessMap.channel),specularMapUv:Oe&&y(h.specularMap.channel),specularColorMapUv:we&&y(h.specularColorMap.channel),specularIntensityMapUv:qe&&y(h.specularIntensityMap.channel),transmissionMapUv:T&&y(h.transmissionMap.channel),thicknessMapUv:te&&y(h.thicknessMap.channel),alphaMapUv:X&&y(h.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ne||l),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(Je||X),fog:!!q,useFog:h.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ve,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:tt,decodeVideoTexture:Je&&h.map.isVideoTexture===!0&&at.getTransfer(h.map.colorSpace)===$e,decodeVideoTextureEmissive:Ye&&h.emissiveMap.isVideoTexture===!0&&at.getTransfer(h.emissiveMap.colorSpace)===$e,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Nt,flipSided:h.side===At,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:ye&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&h.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return ut.vertexUv1s=m.has(1),ut.vertexUv2s=m.has(2),ut.vertexUv3s=m.has(3),m.clear(),ut}function c(h){const u=[];if(h.shaderID?u.push(h.shaderID):(u.push(h.customVertexShaderID),u.push(h.customFragmentShaderID)),h.defines!==void 0)for(const C in h.defines)u.push(C),u.push(h.defines[C]);return h.isRawShaderMaterial===!1&&(I(u,h),b(u,h),u.push(e.outputColorSpace)),u.push(h.customProgramCacheKey),u.join()}function I(h,u){h.push(u.precision),h.push(u.outputColorSpace),h.push(u.envMapMode),h.push(u.envMapCubeUVHeight),h.push(u.mapUv),h.push(u.alphaMapUv),h.push(u.lightMapUv),h.push(u.aoMapUv),h.push(u.bumpMapUv),h.push(u.normalMapUv),h.push(u.displacementMapUv),h.push(u.emissiveMapUv),h.push(u.metalnessMapUv),h.push(u.roughnessMapUv),h.push(u.anisotropyMapUv),h.push(u.clearcoatMapUv),h.push(u.clearcoatNormalMapUv),h.push(u.clearcoatRoughnessMapUv),h.push(u.iridescenceMapUv),h.push(u.iridescenceThicknessMapUv),h.push(u.sheenColorMapUv),h.push(u.sheenRoughnessMapUv),h.push(u.specularMapUv),h.push(u.specularColorMapUv),h.push(u.specularIntensityMapUv),h.push(u.transmissionMapUv),h.push(u.thicknessMapUv),h.push(u.combine),h.push(u.fogExp2),h.push(u.sizeAttenuation),h.push(u.morphTargetsCount),h.push(u.morphAttributeCount),h.push(u.numDirLights),h.push(u.numPointLights),h.push(u.numSpotLights),h.push(u.numSpotLightMaps),h.push(u.numHemiLights),h.push(u.numRectAreaLights),h.push(u.numDirLightShadows),h.push(u.numPointLightShadows),h.push(u.numSpotLightShadows),h.push(u.numSpotLightShadowsWithMaps),h.push(u.numLightProbes),h.push(u.shadowMapType),h.push(u.toneMapping),h.push(u.numClippingPlanes),h.push(u.numClipIntersection),h.push(u.depthPacking)}function b(h,u){s.disableAll(),u.supportsVertexTextures&&s.enable(0),u.instancing&&s.enable(1),u.instancingColor&&s.enable(2),u.instancingMorph&&s.enable(3),u.matcap&&s.enable(4),u.envMap&&s.enable(5),u.normalMapObjectSpace&&s.enable(6),u.normalMapTangentSpace&&s.enable(7),u.clearcoat&&s.enable(8),u.iridescence&&s.enable(9),u.alphaTest&&s.enable(10),u.vertexColors&&s.enable(11),u.vertexAlphas&&s.enable(12),u.vertexUv1s&&s.enable(13),u.vertexUv2s&&s.enable(14),u.vertexUv3s&&s.enable(15),u.vertexTangents&&s.enable(16),u.anisotropy&&s.enable(17),u.alphaHash&&s.enable(18),u.batching&&s.enable(19),u.dispersion&&s.enable(20),u.batchingColor&&s.enable(21),h.push(s.mask),s.disableAll(),u.fog&&s.enable(0),u.useFog&&s.enable(1),u.flatShading&&s.enable(2),u.logarithmicDepthBuffer&&s.enable(3),u.reverseDepthBuffer&&s.enable(4),u.skinning&&s.enable(5),u.morphTargets&&s.enable(6),u.morphNormals&&s.enable(7),u.morphColors&&s.enable(8),u.premultipliedAlpha&&s.enable(9),u.shadowMapEnabled&&s.enable(10),u.doubleSided&&s.enable(11),u.flipSided&&s.enable(12),u.useDepthPacking&&s.enable(13),u.dithering&&s.enable(14),u.transmission&&s.enable(15),u.sheen&&s.enable(16),u.opaque&&s.enable(17),u.pointsUvs&&s.enable(18),u.decodeVideoTexture&&s.enable(19),u.decodeVideoTextureEmissive&&s.enable(20),u.alphaToCoverage&&s.enable(21),h.push(s.mask)}function M(h){const u=U[h.type];let C;if(u){const Y=wt[u];C=po.clone(Y.uniforms)}else C=h.uniforms;return C}function H(h,u){let C;for(let Y=0,G=E.length;Y<G;Y++){const q=E[Y];if(q.cacheKey===u){C=q,++C.usedTimes;break}}return C===void 0&&(C=new hf(e,u,h,a),E.push(C)),C}function P(h){if(--h.usedTimes===0){const u=E.indexOf(h);E[u]=E[E.length-1],E.pop(),h.destroy()}}function N(h){_.remove(h)}function B(){_.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:M,acquireProgram:H,releaseProgram:P,releaseShaderCache:N,programs:E,dispose:B}}function Ef(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function r(o,s,_){e.get(o)[s]=_}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Sf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Dr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Lr(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(g,v,x,U,y,f){let c=e[n];return c===void 0?(c={id:g.id,object:g,geometry:v,material:x,groupOrder:U,renderOrder:g.renderOrder,z:y,group:f},e[n]=c):(c.id=g.id,c.object=g,c.geometry=v,c.material=x,c.groupOrder=U,c.renderOrder=g.renderOrder,c.z=y,c.group=f),n++,c}function s(g,v,x,U,y,f){const c=o(g,v,x,U,y,f);x.transmission>0?i.push(c):x.transparent===!0?r.push(c):t.push(c)}function _(g,v,x,U,y,f){const c=o(g,v,x,U,y,f);x.transmission>0?i.unshift(c):x.transparent===!0?r.unshift(c):t.unshift(c)}function m(g,v){t.length>1&&t.sort(g||Sf),i.length>1&&i.sort(v||Dr),r.length>1&&r.sort(v||Dr)}function E(){for(let g=n,v=e.length;g<v;g++){const x=e[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:_,finish:E,sort:m}}function Mf(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Lr,e.set(i,[o])):r>=a.length?(o=new Lr,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function Tf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new De,color:new Ze};break;case"SpotLight":t={position:new De,direction:new De,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new De,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new De,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new De,halfWidth:new De,halfHeight:new De};break}return e[n.id]=t,t}}}function xf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Af=0;function Rf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function bf(e){const n=new Tf,t=xf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new De);const r=new De,a=new Pt,o=new Pt;function s(m){let E=0,g=0,v=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let x=0,U=0,y=0,f=0,c=0,I=0,b=0,M=0,H=0,P=0,N=0;m.sort(Rf);for(let h=0,u=m.length;h<u;h++){const C=m[h],Y=C.color,G=C.intensity,q=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)E+=Y.r*G,g+=Y.g*G,v+=Y.b*G;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],G);N++}else if(C.isDirectionalLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[x]=F,i.directionalShadowMap[x]=j,i.directionalShadowMatrix[x]=C.shadow.matrix,I++}i.directional[x]=z,x++}else if(C.isSpotLight){const z=n.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(Y).multiplyScalar(G),z.distance=q,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[y]=z;const J=C.shadow;if(C.map&&(i.spotLightMap[H]=C.map,H++,J.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[y]=J.matrix,C.castShadow){const F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=j,M++}y++}else if(C.isRectAreaLight){const z=n.get(C);z.color.copy(Y).multiplyScalar(G),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=z,f++}else if(C.isPointLight){const z=n.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const J=C.shadow,F=t.get(C);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[U]=F,i.pointShadowMap[U]=j,i.pointShadowMatrix[U]=C.shadow.matrix,b++}i.point[U]=z,U++}else if(C.isHemisphereLight){const z=n.get(C);z.skyColor.copy(C.color).multiplyScalar(G),z.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[c]=z,c++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=E,i.ambient[1]=g,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==x||B.pointLength!==U||B.spotLength!==y||B.rectAreaLength!==f||B.hemiLength!==c||B.numDirectionalShadows!==I||B.numPointShadows!==b||B.numSpotShadows!==M||B.numSpotMaps!==H||B.numLightProbes!==N)&&(i.directional.length=x,i.spot.length=y,i.rectArea.length=f,i.point.length=U,i.hemi.length=c,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+H-P,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,B.directionalLength=x,B.pointLength=U,B.spotLength=y,B.rectAreaLength=f,B.hemiLength=c,B.numDirectionalShadows=I,B.numPointShadows=b,B.numSpotShadows=M,B.numSpotMaps=H,B.numLightProbes=N,i.version=Af++)}function _(m,E){let g=0,v=0,x=0,U=0,y=0;const f=E.matrixWorldInverse;for(let c=0,I=m.length;c<I;c++){const b=m[c];if(b.isDirectionalLight){const M=i.directional[g];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),g++}else if(b.isSpotLight){const M=i.spot[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),x++}else if(b.isRectAreaLight){const M=i.rectArea[U];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),U++}else if(b.isPointLight){const M=i.point[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(f),v++}else if(b.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(f),y++}}}return{setup:s,setupView:_,state:i}}function Ir(e){const n=new bf(e),t=[],i=[];function r(E){m.camera=E,t.length=0,i.length=0}function a(E){t.push(E)}function o(E){i.push(E)}function s(){n.setup(t)}function _(E){n.setupView(t,E)}const m={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:m,setupLights:s,setupLightsView:_,pushLight:a,pushShadow:o}}function Cf(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let s;return o===void 0?(s=new Ir(e),n.set(r,[s])):a>=o.length?(s=new Ir(e),o.push(s)):s=o[a],s}function i(){n=new WeakMap}return{get:t,dispose:i}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wf=`uniform sampler2D shadow_pass;
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
}`;function Pf(e,n,t){let i=new kr;const r=new pt,a=new pt,o=new vt,s=new La({depthPacking:Ia}),_=new Ua,m={},E=t.maxTextureSize,g={[_n]:At,[At]:_n,[Nt]:Nt},v=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:yf,fragmentShader:wf}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const U=new Hr;U.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ot(U,v),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let c=this.type;this.render=function(P,N,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const h=e.getRenderTarget(),u=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),Y=e.state;Y.setBlending(Yt),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const G=c!==Ut&&this.type===Ut,q=c===Ut&&this.type!==Ut;for(let j=0,z=P.length;j<z;j++){const J=P[j],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const _e=F.getFrameExtents();if(r.multiply(_e),a.copy(F.mapSize),(r.x>E||r.y>E)&&(r.x>E&&(a.x=Math.floor(E/_e.x),r.x=a.x*_e.x,F.mapSize.x=a.x),r.y>E&&(a.y=Math.floor(E/_e.y),r.y=a.y*_e.y,F.mapSize.y=a.y)),F.map===null||G===!0||q===!0){const Le=this.type!==Ut?{minFilter:yt,magFilter:yt}:{};F.map!==null&&F.map.dispose(),F.map=new cn(r.x,r.y,Le),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const Te=F.getViewportCount();for(let Le=0;Le<Te;Le++){const Ve=F.getViewport(Le);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),Y.viewport(o),F.updateMatrices(J,Le),i=F.getFrustum(),M(N,B,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Ut&&I(F,B),F.needsUpdate=!1}c=this.type,f.needsUpdate=!1,e.setRenderTarget(h,u,C)};function I(P,N){const B=n.update(y);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cn(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(N,null,B,v,y,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(N,null,B,x,y,null)}function b(P,N,B,h){let u=null;const C=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)u=C;else if(u=B.isPointLight===!0?_:s,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Y=u.uuid,G=N.uuid;let q=m[Y];q===void 0&&(q={},m[Y]=q);let j=q[G];j===void 0&&(j=u.clone(),q[G]=j,N.addEventListener("dispose",H)),u=j}if(u.visible=N.visible,u.wireframe=N.wireframe,h===Ut?u.side=N.shadowSide!==null?N.shadowSide:N.side:u.side=N.shadowSide!==null?N.shadowSide:g[N.side],u.alphaMap=N.alphaMap,u.alphaTest=N.alphaTest,u.map=N.map,u.clipShadows=N.clipShadows,u.clippingPlanes=N.clippingPlanes,u.clipIntersection=N.clipIntersection,u.displacementMap=N.displacementMap,u.displacementScale=N.displacementScale,u.displacementBias=N.displacementBias,u.wireframeLinewidth=N.wireframeLinewidth,u.linewidth=N.linewidth,B.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const Y=e.properties.get(u);Y.light=B}return u}function M(P,N,B,h,u){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&u===Ut)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const G=n.update(P),q=P.material;if(Array.isArray(q)){const j=G.groups;for(let z=0,J=j.length;z<J;z++){const F=j[z],_e=q[F.materialIndex];if(_e&&_e.visible){const Te=b(P,_e,h,u);P.onBeforeShadow(e,P,N,B,G,Te,F),e.renderBufferDirect(B,null,G,Te,P,F),P.onAfterShadow(e,P,N,B,G,Te,F)}}}else if(q.visible){const j=b(P,q,h,u);P.onBeforeShadow(e,P,N,B,G,j,null),e.renderBufferDirect(B,null,G,j,P,null),P.onAfterShadow(e,P,N,B,G,j,null)}}const Y=P.children;for(let G=0,q=Y.length;G<q;G++)M(Y[G],N,B,h,u)}function H(P){P.target.removeEventListener("dispose",H);for(const B in m){const h=m[B],u=P.target.uuid;u in h&&(h[u].dispose(),delete h[u])}}}const Df={[_i]:mi,[hi]:fi,[pi]:di,[Bn]:ui,[mi]:_i,[fi]:hi,[di]:pi,[ui]:Bn};function Lf(e,n){function t(){let T=!1;const te=new vt;let O=null;const X=new vt(0,0,0,0);return{setMask:function(oe){O!==oe&&!T&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){T=oe},setClear:function(oe,ae,ye,tt,ut){ut===!0&&(oe*=tt,ae*=tt,ye*=tt),te.set(oe,ae,ye,tt),X.equals(te)===!1&&(e.clearColor(oe,ae,ye,tt),X.copy(te))},reset:function(){T=!1,O=null,X.set(-1,0,0,0)}}}function i(){let T=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(ae){if(te!==ae){const ye=n.get("EXT_clip_control");te?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT);const tt=oe;oe=null,this.setClear(tt)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){O!==ae&&!T&&(e.depthMask(ae),O=ae)},setFunc:function(ae){if(te&&(ae=Df[ae]),X!==ae){switch(ae){case _i:e.depthFunc(e.NEVER);break;case mi:e.depthFunc(e.ALWAYS);break;case hi:e.depthFunc(e.LESS);break;case Bn:e.depthFunc(e.LEQUAL);break;case pi:e.depthFunc(e.EQUAL);break;case ui:e.depthFunc(e.GEQUAL);break;case fi:e.depthFunc(e.GREATER);break;case di:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=ae}},setLocked:function(ae){T=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){T=!1,O=null,X=null,oe=null,te=!1}}}function r(){let T=!1,te=null,O=null,X=null,oe=null,ae=null,ye=null,tt=null,ut=null;return{setTest:function(Xe){T||(Xe?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(Xe){te!==Xe&&!T&&(e.stencilMask(Xe),te=Xe)},setFunc:function(Xe,Rt,Lt){(O!==Xe||X!==Rt||oe!==Lt)&&(e.stencilFunc(Xe,Rt,Lt),O=Xe,X=Rt,oe=Lt)},setOp:function(Xe,Rt,Lt){(ae!==Xe||ye!==Rt||tt!==Lt)&&(e.stencilOp(Xe,Rt,Lt),ae=Xe,ye=Rt,tt=Lt)},setLocked:function(Xe){T=Xe},setClear:function(Xe){ut!==Xe&&(e.clearStencil(Xe),ut=Xe)},reset:function(){T=!1,te=null,O=null,X=null,oe=null,ae=null,ye=null,tt=null,ut=null}}}const a=new t,o=new i,s=new r,_=new WeakMap,m=new WeakMap;let E={},g={},v=new WeakMap,x=[],U=null,y=!1,f=null,c=null,I=null,b=null,M=null,H=null,P=null,N=new Ze(0,0,0),B=0,h=!1,u=null,C=null,Y=null,G=null,q=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=J>=2);let _e=null,Te={};const Le=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),et=new vt().fromArray(Le),V=new vt().fromArray(Ve);function Q(T,te,O,X){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(T,ae),e.texParameteri(T,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(T,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ye=0;ye<O;ye++)T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+ye,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const ue={};ue[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(Bn),Ue(!1),Ne(Ni),ie(e.CULL_FACE),S(Yt);function ie(T){E[T]!==!0&&(e.enable(T),E[T]=!0)}function Me(T){E[T]!==!1&&(e.disable(T),E[T]=!1)}function be(T,te){return g[T]!==te?(e.bindFramebuffer(T,te),g[T]=te,T===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=te),T===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ie(T,te){let O=x,X=!1;if(T){O=v.get(te),O===void 0&&(O=[],v.set(te,O));const oe=T.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,ye=oe.length;ae<ye;ae++)O[ae]=e.COLOR_ATTACHMENT0+ae;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function Je(T){return U!==T?(e.useProgram(T),U=T,!0):!1}const Fe={[un]:e.FUNC_ADD,[Na]:e.FUNC_SUBTRACT,[Oa]:e.FUNC_REVERSE_SUBTRACT};Fe[Do]=e.MIN,Fe[Lo]=e.MAX;const it={[Fa]:e.ZERO,[Ba]:e.ONE,[ka]:e.SRC_COLOR,[Ha]:e.SRC_ALPHA,[Ga]:e.SRC_ALPHA_SATURATE,[Va]:e.DST_COLOR,[za]:e.DST_ALPHA,[Wa]:e.ONE_MINUS_SRC_COLOR,[Xa]:e.ONE_MINUS_SRC_ALPHA,[qa]:e.ONE_MINUS_DST_COLOR,[Ya]:e.ONE_MINUS_DST_ALPHA,[Ka]:e.CONSTANT_COLOR,[$a]:e.ONE_MINUS_CONSTANT_COLOR,[Za]:e.CONSTANT_ALPHA,[ja]:e.ONE_MINUS_CONSTANT_ALPHA};function S(T,te,O,X,oe,ae,ye,tt,ut,Xe){if(T===Yt){y===!0&&(Me(e.BLEND),y=!1);return}if(y===!1&&(ie(e.BLEND),y=!0),T!==ho){if(T!==f||Xe!==h){if((c!==un||M!==un)&&(e.blendEquation(e.FUNC_ADD),c=un,M=un),Xe)switch(T){case Nn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ui:e.blendFunc(e.ONE,e.ONE);break;case Ii:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Li:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Nn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ui:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Ii:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Li:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}I=null,b=null,H=null,P=null,N.set(0,0,0),B=0,f=T,h=Xe}return}oe=oe||te,ae=ae||O,ye=ye||X,(te!==c||oe!==M)&&(e.blendEquationSeparate(Fe[te],Fe[oe]),c=te,M=oe),(O!==I||X!==b||ae!==H||ye!==P)&&(e.blendFuncSeparate(it[O],it[X],it[ae],it[ye]),I=O,b=X,H=ae,P=ye),(tt.equals(N)===!1||ut!==B)&&(e.blendColor(tt.r,tt.g,tt.b,ut),N.copy(tt),B=ut),f=T,h=!1}function Mt(T,te){T.side===Nt?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=T.side===At;te&&(O=!O),Ue(O),T.blending===Nn&&T.transparent===!1?S(Yt):S(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),a.setMask(T.colorWrite);const X=T.stencilWrite;s.setTest(X),X&&(s.setMask(T.stencilWriteMask),s.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),s.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Ye(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(T){u!==T&&(T?e.frontFace(e.CW):e.frontFace(e.CCW),u=T)}function Ne(T){T!==mo?(ie(e.CULL_FACE),T!==C&&(T===Ni?e.cullFace(e.BACK):T===_o?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),C=T}function ge(T){T!==Y&&(z&&e.lineWidth(T),Y=T)}function Ye(T,te,O){T?(ie(e.POLYGON_OFFSET_FILL),(G!==te||q!==O)&&(e.polygonOffset(te,O),G=te,q=O)):Me(e.POLYGON_OFFSET_FILL)}function me(T){T?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function p(T){T===void 0&&(T=e.TEXTURE0+j-1),_e!==T&&(e.activeTexture(T),_e=T)}function l(T,te,O){O===void 0&&(_e===null?O=e.TEXTURE0+j-1:O=_e);let X=Te[O];X===void 0&&(X={type:void 0,texture:void 0},Te[O]=X),(X.type!==T||X.texture!==te)&&(_e!==O&&(e.activeTexture(O),_e=O),e.bindTexture(T,te||ue[T]),X.type=T,X.texture=te)}function w(){const T=Te[_e];T!==void 0&&T.type!==void 0&&(e.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function W(){try{e.compressedTexImage2D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{e.compressedTexImage3D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function k(){try{e.texSubImage2D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function re(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Be(){try{e.texStorage2D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{e.texStorage3D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(){try{e.texImage2D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Se(){try{e.texImage3D.apply(e,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ae(T){et.equals(T)===!1&&(e.scissor(T.x,T.y,T.z,T.w),et.copy(T))}function de(T){V.equals(T)===!1&&(e.viewport(T.x,T.y,T.z,T.w),V.copy(T))}function Oe(T,te){let O=m.get(te);O===void 0&&(O=new WeakMap,m.set(te,O));let X=O.get(T);X===void 0&&(X=e.getUniformBlockIndex(te,T.name),O.set(T,X))}function we(T,te){const X=m.get(te).get(T);_.get(te)!==X&&(e.uniformBlockBinding(te,X,T.__bindingPointIndex),_.set(te,X))}function qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),E={},_e=null,Te={},g={},v=new WeakMap,x=[],U=null,y=!1,f=null,c=null,I=null,b=null,M=null,H=null,P=null,N=new Ze(0,0,0),B=0,h=!1,u=null,C=null,Y=null,G=null,q=null,et.set(0,0,e.canvas.width,e.canvas.height),V.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:Me,bindFramebuffer:be,drawBuffers:Ie,useProgram:Je,setBlending:S,setMaterial:Mt,setFlipSided:Ue,setCullFace:Ne,setLineWidth:ge,setPolygonOffset:Ye,setScissorTest:me,activeTexture:p,bindTexture:l,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:le,texImage3D:Se,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:Be,texStorage3D:Z,texSubImage2D:k,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:Ae,viewport:de,reset:qe}}function If(e,n,t,i,r,a,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,E=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(p,l){return x?new OffscreenCanvas(p,l):Go("canvas")}function y(p,l,w){let W=1;const K=me(p);if((K.width>w||K.height>w)&&(W=w/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const k=Math.floor(W*K.width),pe=Math.floor(W*K.height);g===void 0&&(g=U(k,pe));const re=l?U(k,pe):g;return re.width=k,re.height=pe,re.getContext("2d").drawImage(p,0,0,k,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+pe+")."),re}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),p;return p}function f(p){return p.generateMipmaps}function c(p){e.generateMipmap(p)}function I(p){return p.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?e.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(p,l,w,W,K=!1){if(p!==null){if(e[p]!==void 0)return e[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let k=l;if(l===e.RED&&(w===e.FLOAT&&(k=e.R32F),w===e.HALF_FLOAT&&(k=e.R16F),w===e.UNSIGNED_BYTE&&(k=e.R8)),l===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.R8UI),w===e.UNSIGNED_SHORT&&(k=e.R16UI),w===e.UNSIGNED_INT&&(k=e.R32UI),w===e.BYTE&&(k=e.R8I),w===e.SHORT&&(k=e.R16I),w===e.INT&&(k=e.R32I)),l===e.RG&&(w===e.FLOAT&&(k=e.RG32F),w===e.HALF_FLOAT&&(k=e.RG16F),w===e.UNSIGNED_BYTE&&(k=e.RG8)),l===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RG8UI),w===e.UNSIGNED_SHORT&&(k=e.RG16UI),w===e.UNSIGNED_INT&&(k=e.RG32UI),w===e.BYTE&&(k=e.RG8I),w===e.SHORT&&(k=e.RG16I),w===e.INT&&(k=e.RG32I)),l===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGB8UI),w===e.UNSIGNED_SHORT&&(k=e.RGB16UI),w===e.UNSIGNED_INT&&(k=e.RGB32UI),w===e.BYTE&&(k=e.RGB8I),w===e.SHORT&&(k=e.RGB16I),w===e.INT&&(k=e.RGB32I)),l===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),w===e.UNSIGNED_INT&&(k=e.RGBA32UI),w===e.BYTE&&(k=e.RGBA8I),w===e.SHORT&&(k=e.RGBA16I),w===e.INT&&(k=e.RGBA32I)),l===e.RGB&&w===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),l===e.RGBA){const pe=K?Jr:at.getTransfer(W);w===e.FLOAT&&(k=e.RGBA32F),w===e.HALF_FLOAT&&(k=e.RGBA16F),w===e.UNSIGNED_BYTE&&(k=pe===$e?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function M(p,l){let w;return p?l===null||l===vn||l===gn?w=e.DEPTH24_STENCIL8:l===qt?w=e.DEPTH32F_STENCIL8:l===kn&&(w=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===vn||l===gn?w=e.DEPTH_COMPONENT24:l===qt?w=e.DEPTH_COMPONENT32F:l===kn&&(w=e.DEPTH_COMPONENT16),w}function H(p,l){return f(p)===!0||p.isFramebufferTexture&&p.minFilter!==yt&&p.minFilter!==an?Math.log2(Math.max(l.width,l.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?l.mipmaps.length:1}function P(p){const l=p.target;l.removeEventListener("dispose",P),B(l),l.isVideoTexture&&E.delete(l)}function N(p){const l=p.target;l.removeEventListener("dispose",N),u(l)}function B(p){const l=i.get(p);if(l.__webglInit===void 0)return;const w=p.source,W=v.get(w);if(W){const K=W[l.__cacheKey];K.usedTimes--,K.usedTimes===0&&h(p),Object.keys(W).length===0&&v.delete(w)}i.remove(p)}function h(p){const l=i.get(p);e.deleteTexture(l.__webglTexture);const w=p.source,W=v.get(w);delete W[l.__cacheKey],o.memory.textures--}function u(p){const l=i.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),i.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(l.__webglFramebuffer[W]))for(let K=0;K<l.__webglFramebuffer[W].length;K++)e.deleteFramebuffer(l.__webglFramebuffer[W][K]);else e.deleteFramebuffer(l.__webglFramebuffer[W]);l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer[W])}else{if(Array.isArray(l.__webglFramebuffer))for(let W=0;W<l.__webglFramebuffer.length;W++)e.deleteFramebuffer(l.__webglFramebuffer[W]);else e.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&e.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&e.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let W=0;W<l.__webglColorRenderbuffer.length;W++)l.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(l.__webglColorRenderbuffer[W]);l.__webglDepthRenderbuffer&&e.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const w=p.textures;for(let W=0,K=w.length;W<K;W++){const k=i.get(w[W]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(w[W])}i.remove(p)}let C=0;function Y(){C=0}function G(){const p=C;return p>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+r.maxTextures),C+=1,p}function q(p){const l=[];return l.push(p.wrapS),l.push(p.wrapT),l.push(p.wrapR||0),l.push(p.magFilter),l.push(p.minFilter),l.push(p.anisotropy),l.push(p.internalFormat),l.push(p.format),l.push(p.type),l.push(p.generateMipmaps),l.push(p.premultiplyAlpha),l.push(p.flipY),l.push(p.unpackAlignment),l.push(p.colorSpace),l.join()}function j(p,l){const w=i.get(p);if(p.isVideoTexture&&ge(p),p.isRenderTargetTexture===!1&&p.version>0&&w.__version!==p.version){const W=p.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(w,p,l);return}}t.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+l)}function z(p,l){const w=i.get(p);if(p.version>0&&w.__version!==p.version){V(w,p,l);return}t.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+l)}function J(p,l){const w=i.get(p);if(p.version>0&&w.__version!==p.version){V(w,p,l);return}t.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+l)}function F(p,l){const w=i.get(p);if(p.version>0&&w.__version!==p.version){Q(w,p,l);return}t.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+l)}const _e={[Qa]:e.REPEAT,[Ja]:e.CLAMP_TO_EDGE,[eo]:e.MIRRORED_REPEAT},Te={[yt]:e.NEAREST,[to]:e.NEAREST_MIPMAP_NEAREST,[yn]:e.NEAREST_MIPMAP_LINEAR,[an]:e.LINEAR,[Yn]:e.LINEAR_MIPMAP_NEAREST,[pn]:e.LINEAR_MIPMAP_LINEAR},Le={[no]:e.NEVER,[io]:e.ALWAYS,[ro]:e.LESS,[Vr]:e.LEQUAL,[ao]:e.EQUAL,[oo]:e.GEQUAL,[so]:e.GREATER,[co]:e.NOTEQUAL};function Ve(p,l){if(l.type===qt&&n.has("OES_texture_float_linear")===!1&&(l.magFilter===an||l.magFilter===Yn||l.magFilter===yn||l.magFilter===pn||l.minFilter===an||l.minFilter===Yn||l.minFilter===yn||l.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(p,e.TEXTURE_WRAP_S,_e[l.wrapS]),e.texParameteri(p,e.TEXTURE_WRAP_T,_e[l.wrapT]),(p===e.TEXTURE_3D||p===e.TEXTURE_2D_ARRAY)&&e.texParameteri(p,e.TEXTURE_WRAP_R,_e[l.wrapR]),e.texParameteri(p,e.TEXTURE_MAG_FILTER,Te[l.magFilter]),e.texParameteri(p,e.TEXTURE_MIN_FILTER,Te[l.minFilter]),l.compareFunction&&(e.texParameteri(p,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(p,e.TEXTURE_COMPARE_FUNC,Le[l.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===yt||l.minFilter!==yn&&l.minFilter!==pn||l.type===qt&&n.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");e.texParameterf(p,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,r.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function et(p,l){let w=!1;p.__webglInit===void 0&&(p.__webglInit=!0,l.addEventListener("dispose",P));const W=l.source;let K=v.get(W);K===void 0&&(K={},v.set(W,K));const k=q(l);if(k!==p.__cacheKey){K[k]===void 0&&(K[k]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,w=!0),K[k].usedTimes++;const pe=K[p.__cacheKey];pe!==void 0&&(K[p.__cacheKey].usedTimes--,pe.usedTimes===0&&h(l)),p.__cacheKey=k,p.__webglTexture=K[k].texture}return w}function V(p,l,w){let W=e.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),l.isData3DTexture&&(W=e.TEXTURE_3D);const K=et(p,l),k=l.source;t.bindTexture(W,p.__webglTexture,e.TEXTURE0+w);const pe=i.get(k);if(k.version!==pe.__version||K===!0){t.activeTexture(e.TEXTURE0+w);const re=at.getPrimaries(at.workingColorSpace),ce=l.colorSpace===nn?null:at.getPrimaries(l.colorSpace),Be=l.colorSpace===nn||re===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Z=y(l.image,!1,r.maxTextureSize);Z=Ye(l,Z);const le=a.convert(l.format,l.colorSpace),Se=a.convert(l.type);let Ae=b(l.internalFormat,le,Se,l.colorSpace,l.isVideoTexture);Ve(W,l);let de;const Oe=l.mipmaps,we=l.isVideoTexture!==!0,qe=pe.__version===void 0||K===!0,T=k.dataReady,te=H(l,Z);if(l.isDepthTexture)Ae=M(l.format===Fn,l.type),qe&&(we?t.texStorage2D(e.TEXTURE_2D,1,Ae,Z.width,Z.height):t.texImage2D(e.TEXTURE_2D,0,Ae,Z.width,Z.height,0,le,Se,null));else if(l.isDataTexture)if(Oe.length>0){we&&qe&&t.texStorage2D(e.TEXTURE_2D,te,Ae,Oe[0].width,Oe[0].height);for(let O=0,X=Oe.length;O<X;O++)de=Oe[O],we?T&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,de.width,de.height,le,Se,de.data):t.texImage2D(e.TEXTURE_2D,O,Ae,de.width,de.height,0,le,Se,de.data);l.generateMipmaps=!1}else we?(qe&&t.texStorage2D(e.TEXTURE_2D,te,Ae,Z.width,Z.height),T&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Z.width,Z.height,le,Se,Z.data)):t.texImage2D(e.TEXTURE_2D,0,Ae,Z.width,Z.height,0,le,Se,Z.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){we&&qe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Ae,Oe[0].width,Oe[0].height,Z.depth);for(let O=0,X=Oe.length;O<X;O++)if(de=Oe[O],l.format!==Ot)if(le!==null)if(we){if(T)if(l.layerUpdates.size>0){const oe=Oi(de.width,de.height,l.format,l.type);for(const ae of l.layerUpdates){const ye=de.data.subarray(ae*oe/de.data.BYTES_PER_ELEMENT,(ae+1)*oe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,ae,de.width,de.height,1,le,ye)}l.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,Z.depth,le,de.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Ae,de.width,de.height,Z.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?T&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,Z.depth,le,Se,de.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,Ae,de.width,de.height,Z.depth,0,le,Se,de.data)}else{we&&qe&&t.texStorage2D(e.TEXTURE_2D,te,Ae,Oe[0].width,Oe[0].height);for(let O=0,X=Oe.length;O<X;O++)de=Oe[O],l.format!==Ot?le!==null?we?T&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(e.TEXTURE_2D,O,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?T&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,de.width,de.height,le,Se,de.data):t.texImage2D(e.TEXTURE_2D,O,Ae,de.width,de.height,0,le,Se,de.data)}else if(l.isDataArrayTexture)if(we){if(qe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Ae,Z.width,Z.height,Z.depth),T)if(l.layerUpdates.size>0){const O=Oi(Z.width,Z.height,l.format,l.type);for(const X of l.layerUpdates){const oe=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,le,Se,oe)}l.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Ae,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(l.isData3DTexture)we?(qe&&t.texStorage3D(e.TEXTURE_3D,te,Ae,Z.width,Z.height,Z.depth),T&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)):t.texImage3D(e.TEXTURE_3D,0,Ae,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(l.isFramebufferTexture){if(qe)if(we)t.texStorage2D(e.TEXTURE_2D,te,Ae,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,Ae,O,X,0,le,Se,null),O>>=1,X>>=1}}else if(Oe.length>0){if(we&&qe){const O=me(Oe[0]);t.texStorage2D(e.TEXTURE_2D,te,Ae,O.width,O.height)}for(let O=0,X=Oe.length;O<X;O++)de=Oe[O],we?T&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,le,Se,de):t.texImage2D(e.TEXTURE_2D,O,Ae,le,Se,de);l.generateMipmaps=!1}else if(we){if(qe){const O=me(Z);t.texStorage2D(e.TEXTURE_2D,te,Ae,O.width,O.height)}T&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,le,Se,Z)}else t.texImage2D(e.TEXTURE_2D,0,Ae,le,Se,Z);f(l)&&c(W),pe.__version=k.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function Q(p,l,w){if(l.image.length!==6)return;const W=et(p,l),K=l.source;t.bindTexture(e.TEXTURE_CUBE_MAP,p.__webglTexture,e.TEXTURE0+w);const k=i.get(K);if(K.version!==k.__version||W===!0){t.activeTexture(e.TEXTURE0+w);const pe=at.getPrimaries(at.workingColorSpace),re=l.colorSpace===nn?null:at.getPrimaries(l.colorSpace),ce=l.colorSpace===nn||pe===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,l.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,l.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Be=l.isCompressedTexture||l.image[0].isCompressedTexture,Z=l.image[0]&&l.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!Be&&!Z?le[X]=y(l.image[X],!0,r.maxCubemapSize):le[X]=Z?l.image[X].image:l.image[X],le[X]=Ye(l,le[X]);const Se=le[0],Ae=a.convert(l.format,l.colorSpace),de=a.convert(l.type),Oe=b(l.internalFormat,Ae,de,l.colorSpace),we=l.isVideoTexture!==!0,qe=k.__version===void 0||W===!0,T=K.dataReady;let te=H(l,Se);Ve(e.TEXTURE_CUBE_MAP,l);let O;if(Be){we&&qe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Oe,Se.width,Se.height);for(let X=0;X<6;X++){O=le[X].mipmaps;for(let oe=0;oe<O.length;oe++){const ae=O[oe];l.format!==Ot?Ae!==null?we?T&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?T&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,ae.width,ae.height,Ae,de,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Oe,ae.width,ae.height,0,Ae,de,ae.data)}}}else{if(O=l.mipmaps,we&&qe){O.length>0&&te++;const X=me(le[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Oe,X.width,X.height)}for(let X=0;X<6;X++)if(Z){we?T&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,Ae,de,le[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,le[X].width,le[X].height,0,Ae,de,le[X].data);for(let oe=0;oe<O.length;oe++){const ye=O[oe].image[X].image;we?T&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,ye.width,ye.height,Ae,de,ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Oe,ye.width,ye.height,0,Ae,de,ye.data)}}else{we?T&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,de,le[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Oe,Ae,de,le[X]);for(let oe=0;oe<O.length;oe++){const ae=O[oe];we?T&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Ae,de,ae.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Oe,Ae,de,ae.image[X])}}}f(l)&&c(e.TEXTURE_CUBE_MAP),k.__version=K.version,l.onUpdate&&l.onUpdate(l)}p.__version=l.version}function ue(p,l,w,W,K,k){const pe=a.convert(w.format,w.colorSpace),re=a.convert(w.type),ce=b(w.internalFormat,pe,re,w.colorSpace),Be=i.get(l),Z=i.get(w);if(Z.__renderTarget=l,!Be.__hasExternalTextures){const le=Math.max(1,l.width>>k),Se=Math.max(1,l.height>>k);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,k,ce,le,Se,l.depth,0,pe,re,null):t.texImage2D(K,k,ce,le,Se,0,pe,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,p),Ne(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,K,Z.__webglTexture,0,Ue(l)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,K,Z.__webglTexture,k),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(p,l,w){if(e.bindRenderbuffer(e.RENDERBUFFER,p),l.depthBuffer){const W=l.depthTexture,K=W&&W.isDepthTexture?W.type:null,k=M(l.stencilBuffer,K),pe=l.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=Ue(l);Ne(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,k,l.width,l.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,k,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,k,l.width,l.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,p)}else{const W=l.textures;for(let K=0;K<W.length;K++){const k=W[K],pe=a.convert(k.format,k.colorSpace),re=a.convert(k.type),ce=b(k.internalFormat,pe,re,k.colorSpace),Be=Ue(l);w&&Ne(l)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be,ce,l.width,l.height):Ne(l)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be,ce,l.width,l.height):e.renderbufferStorage(e.RENDERBUFFER,ce,l.width,l.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(p,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,p),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(l.depthTexture);W.__renderTarget=l,(!W.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),j(l.depthTexture,0);const K=W.__webglTexture,k=Ue(l);if(l.depthTexture.format===Ei)Ne(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(l.depthTexture.format===Fn)Ne(l)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(p){const l=i.get(p),w=p.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==p.depthTexture){const W=p.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),W){const K=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),l.__depthDisposeCallback=K}l.__boundDepthTexture=W}if(p.depthTexture&&!l.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Me(l.__webglFramebuffer,p)}else if(w){l.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer[W]),l.__webglDepthbuffer[W]===void 0)l.__webglDepthbuffer[W]=e.createRenderbuffer(),ie(l.__webglDepthbuffer[W],p,!1);else{const K=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=l.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,k)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=e.createRenderbuffer(),ie(l.__webglDepthbuffer,p,!1);else{const W=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=l.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,W,e.RENDERBUFFER,K)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(p,l,w){const W=i.get(p);l!==void 0&&ue(W.__webglFramebuffer,p,p.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&be(p)}function Je(p){const l=p.texture,w=i.get(p),W=i.get(l);p.addEventListener("dispose",N);const K=p.textures,k=p.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=l.version,o.memory.textures++),k){w.__webglFramebuffer=[];for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0){w.__webglFramebuffer[re]=[];for(let ce=0;ce<l.mipmaps.length;ce++)w.__webglFramebuffer[re][ce]=e.createFramebuffer()}else w.__webglFramebuffer[re]=e.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){w.__webglFramebuffer=[];for(let re=0;re<l.mipmaps.length;re++)w.__webglFramebuffer[re]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(pe)for(let re=0,ce=K.length;re<ce;re++){const Be=i.get(K[re]);Be.__webglTexture===void 0&&(Be.__webglTexture=e.createTexture(),o.memory.textures++)}if(p.samples>0&&Ne(p)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];w.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[re]);const Be=a.convert(ce.format,ce.colorSpace),Z=a.convert(ce.type),le=b(ce.internalFormat,Be,Z,ce.colorSpace,p.isXRRenderTarget===!0),Se=Ue(p);e.renderbufferStorageMultisample(e.RENDERBUFFER,Se,le,p.width,p.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,w.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),p.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(w.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){t.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(e.TEXTURE_CUBE_MAP,l);for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0)for(let ce=0;ce<l.mipmaps.length;ce++)ue(w.__webglFramebuffer[re][ce],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else ue(w.__webglFramebuffer[re],p,l,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(l)&&c(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let re=0,ce=K.length;re<ce;re++){const Be=K[re],Z=i.get(Be);t.bindTexture(e.TEXTURE_2D,Z.__webglTexture),Ve(e.TEXTURE_2D,Be),ue(w.__webglFramebuffer,p,Be,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),f(Be)&&c(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(re=p.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,W.__webglTexture),Ve(re,l),l.mipmaps&&l.mipmaps.length>0)for(let ce=0;ce<l.mipmaps.length;ce++)ue(w.__webglFramebuffer[ce],p,l,e.COLOR_ATTACHMENT0,re,ce);else ue(w.__webglFramebuffer,p,l,e.COLOR_ATTACHMENT0,re,0);f(l)&&c(re),t.unbindTexture()}p.depthBuffer&&be(p)}function Fe(p){const l=p.textures;for(let w=0,W=l.length;w<W;w++){const K=l[w];if(f(K)){const k=I(p),pe=i.get(K).__webglTexture;t.bindTexture(k,pe),c(k),t.unbindTexture()}}}const it=[],S=[];function Mt(p){if(p.samples>0){if(Ne(p)===!1){const l=p.textures,w=p.width,W=p.height;let K=e.COLOR_BUFFER_BIT;const k=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(p),re=l.length>1;if(re)for(let ce=0;ce<l.length;ce++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ce=0;ce<l.length;ce++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const Be=i.get(l[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Be,0)}e.blitFramebuffer(0,0,w,W,0,0,w,W,K,e.NEAREST),_===!0&&(it.length=0,S.length=0,it.push(e.COLOR_ATTACHMENT0+ce),p.depthBuffer&&p.resolveDepthBuffer===!1&&(it.push(k),S.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,S)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<l.length;ce++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ce]);const Be=i.get(l[ce]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,Be,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&_){const l=p.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[l])}}}function Ue(p){return Math.min(r.maxSamples,p.samples)}function Ne(p){const l=i.get(p);return p.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function ge(p){const l=o.render.frame;E.get(p)!==l&&(E.set(p,l),p.update())}function Ye(p,l){const w=p.colorSpace,W=p.format,K=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||w!==Vn&&w!==nn&&(at.getTransfer(w)===$e?(W!==Ot||K!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),l}function me(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(m.width=p.naturalWidth||p.width,m.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(m.width=p.displayWidth,m.height=p.displayHeight):(m.width=p.width,m.height=p.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Ie,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ne}function Uf(e,n){function t(i,r=nn){let a;const o=at.getTransfer(r);if(i===Kt)return e.UNSIGNED_BYTE;if(i===qr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===go)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===vo)return e.BYTE;if(i===Eo)return e.SHORT;if(i===kn)return e.UNSIGNED_SHORT;if(i===Zr)return e.INT;if(i===vn)return e.UNSIGNED_INT;if(i===qt)return e.FLOAT;if(i===Gn)return e.HALF_FLOAT;if(i===So)return e.ALPHA;if(i===Mo)return e.RGB;if(i===Ot)return e.RGBA;if(i===To)return e.LUMINANCE;if(i===xo)return e.LUMINANCE_ALPHA;if(i===Ei)return e.DEPTH_COMPONENT;if(i===Fn)return e.DEPTH_STENCIL;if(i===Ao)return e.RED;if(i===Xr)return e.RED_INTEGER;if(i===Ro)return e.RG;if(i===Wr)return e.RG_INTEGER;if(i===zr)return e.RGBA_INTEGER;if(i===Kn||i===$n||i===Zn||i===jn)if(o===$e)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Kn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$n)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Kn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$n)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fi||i===Bi||i===ki||i===Hi)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Fi)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ki)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hi)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gi||i===Vi||i===zi)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gi||i===Vi)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===zi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wi||i===Xi||i===qi||i===Yi||i===Ki||i===$i||i===Zi||i===ji||i===Qi||i===Ji||i===er||i===tr||i===nr||i===ir)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Wi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ki)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$i)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ji)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qi)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ji)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===er)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nr)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ir)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qn||i===rr||i===ar)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Qn)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ar)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bo||i===or||i===sr||i===cr)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Qn)return a.COMPRESSED_RED_RGTC1_EXT;if(i===or)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Nf={type:"move"};class ai{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new De,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new De),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new De,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new De),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let r=null,a=null,o=null;const s=this._targetRay,_=this._grip,m=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(m&&n.hand){o=!0;for(const y of n.hand.values()){const f=t.getJointPose(y,i),c=this._getHandJoint(m,y);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const E=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=E.position.distanceTo(g.position),x=.02,U=.005;m.inputState.pinching&&v>x+U?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!m.inputState.pinching&&v<=x-U&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else _!==null&&n.gripSpace&&(a=t.getPose(n.gripSpace,i),a!==null&&(_.matrix.fromArray(a.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,a.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(a.linearVelocity)):_.hasLinearVelocity=!1,a.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(a.angularVelocity)):_.hasAngularVelocity=!1));s!==null&&(r=t.getPose(n.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return s!==null&&(s.visible=r!==null),_!==null&&(_.visible=a!==null),m!==null&&(m.visible=o!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}}const Of=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ff=`
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

}`;class Bf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const r=new Qr,a=n.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new $t({vertexShader:Of,fragmentShader:Ff,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kf extends ya{constructor(n,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",_=1,m=null,E=null,g=null,v=null,x=null,U=null;const y=new Bf,f=t.getContextAttributes();let c=null,I=null;const b=[],M=[],H=new pt;let P=null;const N=new mn;N.viewport=new vt;const B=new mn;B.viewport=new vt;const h=[N,B],u=new wa;let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=b[V];return Q===void 0&&(Q=new ai,b[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=b[V];return Q===void 0&&(Q=new ai,b[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=b[V];return Q===void 0&&(Q=new ai,b[V]=Q),Q.getHandSpace()};function G(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const ue=b[Q];ue!==void 0&&(ue.update(V.inputSource,V.frame,m||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let V=0;V<b.length;V++){const Q=M[V];Q!==null&&(M[V]=null,b[V].disconnect(Q))}C=null,Y=null,y.reset(),n.setRenderTarget(c),x=null,v=null,g=null,r=null,I=null,et.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||o},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return U},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(c=n.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await t.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(H),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ue=null,ie=null,Me=null;f.depth&&(Me=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=f.stencil?Fn:Ei,ie=f.stencil?gn:vn);const be={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};g=new XRWebGLBinding(r,t),v=g.createProjectionLayer(be),r.updateRenderState({layers:[v]}),n.setPixelRatio(1),n.setSize(v.textureWidth,v.textureHeight,!1),I=new cn(v.textureWidth,v.textureHeight,{format:Ot,type:Kt,depthTexture:new Br(v.textureWidth,v.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:f.stencil,colorSpace:n.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const ue={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new cn(x.framebufferWidth,x.framebufferHeight,{format:Ot,type:Kt,colorSpace:n.outputColorSpace,stencilBuffer:f.stencil})}I.isXRRenderTarget=!0,this.setFoveation(_),m=null,o=await r.requestReferenceSpace(s),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(V){for(let Q=0;Q<V.removed.length;Q++){const ue=V.removed[Q],ie=M.indexOf(ue);ie>=0&&(M[ie]=null,b[ie].disconnect(ue))}for(let Q=0;Q<V.added.length;Q++){const ue=V.added[Q];let ie=M.indexOf(ue);if(ie===-1){for(let be=0;be<b.length;be++)if(be>=M.length){M.push(ue),ie=be;break}else if(M[be]===null){M[be]=ue,ie=be;break}if(ie===-1)break}const Me=b[ie];Me&&Me.connect(ue)}}const z=new De,J=new De;function F(V,Q,ue){z.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const ie=z.distanceTo(J),Me=Q.projectionMatrix.elements,be=ue.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Je=Me[14]/(Me[10]+1),Fe=(Me[9]+1)/Me[5],it=(Me[9]-1)/Me[5],S=(Me[8]-1)/Me[0],Mt=(be[8]+1)/be[0],Ue=Ie*S,Ne=Ie*Mt,ge=ie/(-S+Mt),Ye=ge*-S;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ye),V.translateZ(ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Me[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const me=Ie+ge,p=Je+ge,l=Ue-Ye,w=Ne+(ie-Ye),W=Fe*Je/p*me,K=it*Je/p*me;V.projectionMatrix.makePerspective(l,w,W,K,me,p),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function _e(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Q=V.near,ue=V.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),u.near=B.near=N.near=Q,u.far=B.far=N.far=ue,(C!==u.near||Y!==u.far)&&(r.updateRenderState({depthNear:u.near,depthFar:u.far}),C=u.near,Y=u.far),N.layers.mask=V.layers.mask|2,B.layers.mask=V.layers.mask|4,u.layers.mask=N.layers.mask|B.layers.mask;const ie=V.parent,Me=u.cameras;_e(u,ie);for(let be=0;be<Me.length;be++)_e(Me[be],ie);Me.length===2?F(u,N,B):u.projectionMatrix.copy(N.projectionMatrix),Te(V,u,ie)};function Te(V,Q,ue){ue===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(v===null&&x===null))return _},this.setFoveation=function(V){_=V,v!==null&&(v.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(u)};let Le=null;function Ve(V,Q){if(E=Q.getViewerPose(m||o),U=Q,E!==null){const ue=E.views;x!==null&&(n.setRenderTargetFramebuffer(I,x.framebuffer),n.setRenderTarget(I));let ie=!1;ue.length!==u.cameras.length&&(u.cameras.length=0,ie=!0);for(let be=0;be<ue.length;be++){const Ie=ue[be];let Je=null;if(x!==null)Je=x.getViewport(Ie);else{const it=g.getViewSubImage(v,Ie);Je=it.viewport,be===0&&(n.setRenderTargetTextures(I,it.colorTexture,v.ignoreDepthValues?void 0:it.depthStencilTexture),n.setRenderTarget(I))}let Fe=h[be];Fe===void 0&&(Fe=new mn,Fe.layers.enable(be),Fe.viewport=new vt,h[be]=Fe),Fe.matrix.fromArray(Ie.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ie.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(u.matrix.copy(Fe.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),ie===!0&&u.cameras.push(Fe)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const be=g.getDepthInformation(ue[0]);be&&be.isValid&&be.texture&&y.init(n,be,r.renderState)}}for(let ue=0;ue<b.length;ue++){const ie=M[ue],Me=b[ue];ie!==null&&Me!==void 0&&Me.update(ie,Q,m||o)}Le&&Le(V,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),U=null}const et=new ta;et.setAnimationLoop(Ve),this.setAnimationLoop=function(V){Le=V},this.dispose=function(){}}}const zt=new En,Hf=new Pt;function Gf(e,n){function t(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,$r(e)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,I,b,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?a(f,c):c.isMeshToonMaterial?(a(f,c),g(f,c)):c.isMeshPhongMaterial?(a(f,c),E(f,c)):c.isMeshStandardMaterial?(a(f,c),v(f,c),c.isMeshPhysicalMaterial&&x(f,c,M)):c.isMeshMatcapMaterial?(a(f,c),U(f,c)):c.isMeshDepthMaterial?a(f,c):c.isMeshDistanceMaterial?(a(f,c),y(f,c)):c.isMeshNormalMaterial?a(f,c):c.isLineBasicMaterial?(o(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?_(f,c,I,b):c.isSpriteMaterial?m(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function a(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,t(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===At&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,t(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===At&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,t(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,t(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const I=n.get(c),b=I.envMap,M=I.envMapRotation;b&&(f.envMap.value=b,zt.copy(M),zt.x*=-1,zt.y*=-1,zt.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zt.y*=-1,zt.z*=-1),f.envMapRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(zt)),f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,t(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,f.aoMapTransform))}function o(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function _(f,c,I,b){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*I,f.scale.value=b*.5,c.map&&(f.map.value=c.map,t(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function m(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,t(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,t(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function E(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function g(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function v(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function x(f,c,I){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===At&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=I.texture,f.transmissionSamplerSize.value.set(I.width,I.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,f.specularIntensityMapTransform))}function U(f,c){c.matcap&&(f.matcap.value=c.matcap)}function y(f,c){const I=n.get(c).light;f.referencePosition.value.setFromMatrixPosition(I.matrixWorld),f.nearDistance.value=I.shadow.camera.near,f.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vf(e,n,t,i){let r={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function _(I,b){const M=b.program;i.uniformBlockBinding(I,M)}function m(I,b){let M=r[I.id];M===void 0&&(U(I),M=E(I),r[I.id]=M,I.addEventListener("dispose",f));const H=b.program;i.updateUBOMapping(I,H);const P=n.render.frame;a[I.id]!==P&&(v(I),a[I.id]=P)}function E(I){const b=g();I.__bindingPointIndex=b;const M=e.createBuffer(),H=I.__size,P=I.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,H,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,M),M}function g(){for(let I=0;I<s;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const b=r[I.id],M=I.uniforms,H=I.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let P=0,N=M.length;P<N;P++){const B=Array.isArray(M[P])?M[P]:[M[P]];for(let h=0,u=B.length;h<u;h++){const C=B[h];if(x(C,P,h,H)===!0){const Y=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let j=0;j<G.length;j++){const z=G[j],J=y(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,Y+q,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Y,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(I,b,M,H){const P=I.value,N=b+"_"+M;if(H[N]===void 0)return typeof P=="number"||typeof P=="boolean"?H[N]=P:H[N]=P.clone(),!0;{const B=H[N];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return H[N]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function U(I){const b=I.uniforms;let M=0;const H=16;for(let N=0,B=b.length;N<B;N++){const h=Array.isArray(b[N])?b[N]:[b[N]];for(let u=0,C=h.length;u<C;u++){const Y=h[u],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,j=G.length;q<j;q++){const z=G[q],J=y(z),F=M%H,_e=F%J.boundary,Te=F+_e;M+=_e,Te!==0&&H-Te<J.storage&&(M+=H-Te),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=J.storage}}}const P=M%H;return P>0&&(M+=H-P),I.__size=M,I.__cache={},this}function y(I){const b={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(b.boundary=4,b.storage=4):I.isVector2?(b.boundary=8,b.storage=8):I.isVector3||I.isColor?(b.boundary=16,b.storage=12):I.isVector4?(b.boundary=16,b.storage=16):I.isMatrix3?(b.boundary=48,b.storage=48):I.isMatrix4?(b.boundary=64,b.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),b}function f(I){const b=I.target;b.removeEventListener("dispose",f);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),e.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function c(){for(const I in r)e.deleteBuffer(r[I]);o=[],r={},a={}}return{bind:_,update:m,dispose:c}}class zf{constructor(n={}){const{canvas:t=Ta(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:E="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const U=new Uint32Array(4),y=new Int32Array(4);let f=null,c=null;const I=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=kt,this.toneMappingExposure=1;const M=this;let H=!1,P=0,N=0,B=null,h=-1,u=null;const C=new vt,Y=new vt;let G=null;const q=new Ze(0);let j=0,z=t.width,J=t.height,F=1,_e=null,Te=null;const Le=new vt(0,0,z,J),Ve=new vt(0,0,z,J);let et=!1;const V=new kr;let Q=!1,ue=!1;this.transmissionResolutionScale=1;const ie=new Pt,Me=new Pt,be=new De,Ie=new vt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function it(){return B===null?F:1}let S=i;function Mt(d,A){return t.getContext(d,A)}try{const d={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:E,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),S===null){const A="webgl2";if(S=Mt(A,d),S===null)throw Mt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let Ue,Ne,ge,Ye,me,p,l,w,W,K,k,pe,re,ce,Be,Z,le,Se,Ae,de,Oe,we,qe,T;function te(){Ue=new jl(S),Ue.init(),we=new Uf(S,Ue),Ne=new Xl(S,Ue,n,we),ge=new Lf(S,Ue),Ne.reverseDepthBuffer&&v&&ge.buffers.depth.setReversed(!0),Ye=new ed(S),me=new Ef,p=new If(S,Ue,ge,me,Ne,we,Ye),l=new Yl(M),w=new Zl(M),W=new ss(S),qe=new zl(S,W),K=new Ql(S,W,Ye,qe),k=new nd(S,K,W,Ye),Ae=new td(S,Ne,p),Z=new ql(me),pe=new vf(M,l,w,Ue,Ne,qe,Z),re=new Gf(M,me),ce=new Mf,Be=new Cf(Ue),Se=new Vl(M,l,w,ge,k,x,_),le=new Pf(M,k,Ne),T=new Vf(S,Ye,Ne,ge),de=new Wl(S,Ue,Ye),Oe=new Jl(S,Ue,Ye),Ye.programs=pe.programs,M.capabilities=Ne,M.extensions=Ue,M.properties=me,M.renderLists=ce,M.shadowMap=le,M.state=ge,M.info=Ye}te();const O=new kf(M,S);this.xr=O,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const d=Ue.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=Ue.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(d){d!==void 0&&(F=d,this.setSize(z,J,!1))},this.getSize=function(d){return d.set(z,J)},this.setSize=function(d,A,D=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=d,J=A,t.width=Math.floor(d*F),t.height=Math.floor(A*F),D===!0&&(t.style.width=d+"px",t.style.height=A+"px"),this.setViewport(0,0,d,A)},this.getDrawingBufferSize=function(d){return d.set(z*F,J*F).floor()},this.setDrawingBufferSize=function(d,A,D){z=d,J=A,F=D,t.width=Math.floor(d*D),t.height=Math.floor(A*D),this.setViewport(0,0,d,A)},this.getCurrentViewport=function(d){return d.copy(C)},this.getViewport=function(d){return d.copy(Le)},this.setViewport=function(d,A,D,L){d.isVector4?Le.set(d.x,d.y,d.z,d.w):Le.set(d,A,D,L),ge.viewport(C.copy(Le).multiplyScalar(F).round())},this.getScissor=function(d){return d.copy(Ve)},this.setScissor=function(d,A,D,L){d.isVector4?Ve.set(d.x,d.y,d.z,d.w):Ve.set(d,A,D,L),ge.scissor(Y.copy(Ve).multiplyScalar(F).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(d){ge.setScissorTest(et=d)},this.setOpaqueSort=function(d){_e=d},this.setTransparentSort=function(d){Te=d},this.getClearColor=function(d){return d.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(d=!0,A=!0,D=!0){let L=0;if(d){let R=!1;if(B!==null){const $=B.texture.format;R=$===zr||$===Wr||$===Xr}if(R){const $=B.texture.type,ne=$===Kt||$===vn||$===kn||$===gn||$===qr||$===Yr,se=Se.getClearColor(),fe=Se.getClearAlpha(),Re=se.r,Ce=se.g,ve=se.b;ne?(U[0]=Re,U[1]=Ce,U[2]=ve,U[3]=fe,S.clearBufferuiv(S.COLOR,0,U)):(y[0]=Re,y[1]=Ce,y[2]=ve,y[3]=fe,S.clearBufferiv(S.COLOR,0,y))}else L|=S.COLOR_BUFFER_BIT}A&&(L|=S.DEPTH_BUFFER_BIT),D&&(L|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Se.dispose(),ce.dispose(),Be.dispose(),me.dispose(),l.dispose(),w.dispose(),k.dispose(),qe.dispose(),T.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",Ti),O.removeEventListener("sessionend",xi),Ht.stop()};function X(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const d=Ye.autoReset,A=le.enabled,D=le.autoUpdate,L=le.needsUpdate,R=le.type;te(),Ye.autoReset=d,le.enabled=A,le.autoUpdate=D,le.needsUpdate=L,le.type=R}function ae(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function ye(d){const A=d.target;A.removeEventListener("dispose",ye),tt(A)}function tt(d){ut(d),me.remove(d)}function ut(d){const A=me.get(d).programs;A!==void 0&&(A.forEach(function(D){pe.releaseProgram(D)}),d.isShaderMaterial&&pe.releaseShaderCache(d))}this.renderBufferDirect=function(d,A,D,L,R,$){A===null&&(A=Je);const ne=R.isMesh&&R.matrixWorld.determinant()<0,se=pa(d,A,D,L,R);ge.setMaterial(L,ne);let fe=D.index,Re=1;if(L.wireframe===!0){if(fe=K.getWireframeAttribute(D),fe===void 0)return;Re=2}const Ce=D.drawRange,ve=D.attributes.position;let ke=Ce.start*Re,ze=(Ce.start+Ce.count)*Re;$!==null&&(ke=Math.max(ke,$.start*Re),ze=Math.min(ze,($.start+$.count)*Re)),fe!==null?(ke=Math.max(ke,0),ze=Math.min(ze,fe.count)):ve!=null&&(ke=Math.max(ke,0),ze=Math.min(ze,ve.count));const rt=ze-ke;if(rt<0||rt===1/0)return;qe.setup(R,L,se,D,fe);let nt,He=de;if(fe!==null&&(nt=W.get(fe),He=Oe,He.setIndex(nt)),R.isMesh)L.wireframe===!0?(ge.setLineWidth(L.wireframeLinewidth*it()),He.setMode(S.LINES)):He.setMode(S.TRIANGLES);else if(R.isLine){let Ee=L.linewidth;Ee===void 0&&(Ee=1),ge.setLineWidth(Ee*it()),R.isLineSegments?He.setMode(S.LINES):R.isLineLoop?He.setMode(S.LINE_LOOP):He.setMode(S.LINE_STRIP)}else R.isPoints?He.setMode(S.POINTS):R.isSprite&&He.setMode(S.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)He.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))He.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const Ee=R._multiDrawStarts,lt=R._multiDrawCounts,We=R._multiDrawCount,bt=fe?W.get(fe).bytesPerElement:1,jt=me.get(L).currentProgram.getUniforms();for(let Et=0;Et<We;Et++)jt.setValue(S,"_gl_DrawID",Et),He.render(Ee[Et]/bt,lt[Et])}else if(R.isInstancedMesh)He.renderInstances(ke,rt,R.count);else if(D.isInstancedBufferGeometry){const Ee=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,lt=Math.min(D.instanceCount,Ee);He.renderInstances(ke,rt,lt)}else He.render(ke,rt)};function Xe(d,A,D){d.transparent===!0&&d.side===Nt&&d.forceSinglePass===!1?(d.side=At,d.needsUpdate=!0,bn(d,A,D),d.side=_n,d.needsUpdate=!0,bn(d,A,D),d.side=Nt):bn(d,A,D)}this.compile=function(d,A,D=null){D===null&&(D=d),c=Be.get(D),c.init(A),b.push(c),D.traverseVisible(function(R){R.isLight&&R.layers.test(A.layers)&&(c.pushLight(R),R.castShadow&&c.pushShadow(R))}),d!==D&&d.traverseVisible(function(R){R.isLight&&R.layers.test(A.layers)&&(c.pushLight(R),R.castShadow&&c.pushShadow(R))}),c.setupLights();const L=new Set;return d.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const $=R.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];Xe(se,D,R),L.add(se)}else Xe($,D,R),L.add($)}),b.pop(),c=null,L},this.compileAsync=function(d,A,D=null){const L=this.compile(d,A,D);return new Promise(R=>{function $(){if(L.forEach(function(ne){me.get(ne).currentProgram.isReady()&&L.delete(ne)}),L.size===0){R(d);return}setTimeout($,10)}Ue.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Rt=null;function Lt(d){Rt&&Rt(d)}function Ti(){Ht.stop()}function xi(){Ht.start()}const Ht=new ta;Ht.setAnimationLoop(Lt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(d){Rt=d,O.setAnimationLoop(d),d===null?Ht.stop():Ht.start()},O.addEventListener("sessionstart",Ti),O.addEventListener("sessionend",xi),this.render=function(d,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(A),A=O.getCamera()),d.isScene===!0&&d.onBeforeRender(M,d,A,B),c=Be.get(d,b.length),c.init(A),b.push(c),Me.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),V.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,Q=Z.init(this.clippingPlanes,ue),f=ce.get(d,I.length),f.init(),I.push(f),O.enabled===!0&&O.isPresenting===!0){const $=M.xr.getDepthSensingMesh();$!==null&&Xn($,A,-1/0,M.sortObjects)}Xn(d,A,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(_e,Te),Fe=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Fe&&Se.addToRenderList(f,d),this.info.render.frame++,Q===!0&&Z.beginShadows();const D=c.state.shadowsArray;le.render(D,d,A),Q===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=f.opaque,R=f.transmissive;if(c.setupLights(),A.isArrayCamera){const $=A.cameras;if(R.length>0)for(let ne=0,se=$.length;ne<se;ne++){const fe=$[ne];Ri(L,R,d,fe)}Fe&&Se.render(d);for(let ne=0,se=$.length;ne<se;ne++){const fe=$[ne];Ai(f,d,fe,fe.viewport)}}else R.length>0&&Ri(L,R,d,A),Fe&&Se.render(d),Ai(f,d,A);B!==null&&N===0&&(p.updateMultisampleRenderTarget(B),p.updateRenderTargetMipmap(B)),d.isScene===!0&&d.onAfterRender(M,d,A),qe.resetDefaultState(),h=-1,u=null,b.pop(),b.length>0?(c=b[b.length-1],Q===!0&&Z.setGlobalState(M.clippingPlanes,c.state.camera)):c=null,I.pop(),I.length>0?f=I[I.length-1]:f=null};function Xn(d,A,D,L){if(d.visible===!1)return;if(d.layers.test(A.layers)){if(d.isGroup)D=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(A);else if(d.isLight)c.pushLight(d),d.castShadow&&c.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||V.intersectsSprite(d)){L&&Ie.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Me);const ne=k.update(d),se=d.material;se.visible&&f.push(d,ne,se,D,Ie.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||V.intersectsObject(d))){const ne=k.update(d),se=d.material;if(L&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Ie.copy(d.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ie.copy(ne.boundingSphere.center)),Ie.applyMatrix4(d.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const fe=ne.groups;for(let Re=0,Ce=fe.length;Re<Ce;Re++){const ve=fe[Re],ke=se[ve.materialIndex];ke&&ke.visible&&f.push(d,ne,ke,D,Ie.z,ve)}}else se.visible&&f.push(d,ne,se,D,Ie.z,null)}}const $=d.children;for(let ne=0,se=$.length;ne<se;ne++)Xn($[ne],A,D,L)}function Ai(d,A,D,L){const R=d.opaque,$=d.transmissive,ne=d.transparent;c.setupLightsView(D),Q===!0&&Z.setGlobalState(M.clippingPlanes,D),L&&ge.viewport(C.copy(L)),R.length>0&&Rn(R,A,D),$.length>0&&Rn($,A,D),ne.length>0&&Rn(ne,A,D),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ri(d,A,D,L){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[L.id]===void 0&&(c.state.transmissionRenderTarget[L.id]=new cn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Gn:Kt,minFilter:pn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const $=c.state.transmissionRenderTarget[L.id],ne=L.viewport||C;$.setSize(ne.z*M.transmissionResolutionScale,ne.w*M.transmissionResolutionScale);const se=M.getRenderTarget();M.setRenderTarget($),M.getClearColor(q),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Fe&&Se.render(D);const fe=M.toneMapping;M.toneMapping=kt;const Re=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),c.setupLightsView(L),Q===!0&&Z.setGlobalState(M.clippingPlanes,L),Rn(d,D,L),p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ve=0,ke=A.length;ve<ke;ve++){const ze=A[ve],rt=ze.object,nt=ze.geometry,He=ze.material,Ee=ze.group;if(He.side===Nt&&rt.layers.test(L.layers)){const lt=He.side;He.side=At,He.needsUpdate=!0,bi(rt,D,L,nt,He,Ee),He.side=lt,He.needsUpdate=!0,Ce=!0}}Ce===!0&&(p.updateMultisampleRenderTarget($),p.updateRenderTargetMipmap($))}M.setRenderTarget(se),M.setClearColor(q,j),Re!==void 0&&(L.viewport=Re),M.toneMapping=fe}function Rn(d,A,D){const L=A.isScene===!0?A.overrideMaterial:null;for(let R=0,$=d.length;R<$;R++){const ne=d[R],se=ne.object,fe=ne.geometry,Re=L===null?ne.material:L,Ce=ne.group;se.layers.test(D.layers)&&bi(se,A,D,fe,Re,Ce)}}function bi(d,A,D,L,R,$){d.onBeforeRender(M,A,D,L,R,$),d.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),R.onBeforeRender(M,A,D,L,d,$),R.transparent===!0&&R.side===Nt&&R.forceSinglePass===!1?(R.side=At,R.needsUpdate=!0,M.renderBufferDirect(D,A,L,R,d,$),R.side=_n,R.needsUpdate=!0,M.renderBufferDirect(D,A,L,R,d,$),R.side=Nt):M.renderBufferDirect(D,A,L,R,d,$),d.onAfterRender(M,A,D,L,R,$)}function bn(d,A,D){A.isScene!==!0&&(A=Je);const L=me.get(d),R=c.state.lights,$=c.state.shadowsArray,ne=R.state.version,se=pe.getParameters(d,R.state,$,A,D),fe=pe.getProgramCacheKey(se);let Re=L.programs;L.environment=d.isMeshStandardMaterial?A.environment:null,L.fog=A.fog,L.envMap=(d.isMeshStandardMaterial?w:l).get(d.envMap||L.environment),L.envMapRotation=L.environment!==null&&d.envMap===null?A.environmentRotation:d.envMapRotation,Re===void 0&&(d.addEventListener("dispose",ye),Re=new Map,L.programs=Re);let Ce=Re.get(fe);if(Ce!==void 0){if(L.currentProgram===Ce&&L.lightsStateVersion===ne)return yi(d,se),Ce}else se.uniforms=pe.getUniforms(d),d.onBeforeCompile(se,M),Ce=pe.acquireProgram(se,fe),Re.set(fe,Ce),L.uniforms=se.uniforms;const ve=L.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ve.clippingPlanes=Z.uniform),yi(d,se),L.needsLights=ma(d),L.lightsStateVersion=ne,L.needsLights&&(ve.ambientLightColor.value=R.state.ambient,ve.lightProbe.value=R.state.probe,ve.directionalLights.value=R.state.directional,ve.directionalLightShadows.value=R.state.directionalShadow,ve.spotLights.value=R.state.spot,ve.spotLightShadows.value=R.state.spotShadow,ve.rectAreaLights.value=R.state.rectArea,ve.ltc_1.value=R.state.rectAreaLTC1,ve.ltc_2.value=R.state.rectAreaLTC2,ve.pointLights.value=R.state.point,ve.pointLightShadows.value=R.state.pointShadow,ve.hemisphereLights.value=R.state.hemi,ve.directionalShadowMap.value=R.state.directionalShadowMap,ve.directionalShadowMatrix.value=R.state.directionalShadowMatrix,ve.spotShadowMap.value=R.state.spotShadowMap,ve.spotLightMatrix.value=R.state.spotLightMatrix,ve.spotLightMap.value=R.state.spotLightMap,ve.pointShadowMap.value=R.state.pointShadowMap,ve.pointShadowMatrix.value=R.state.pointShadowMatrix),L.currentProgram=Ce,L.uniformsList=null,Ce}function Ci(d){if(d.uniformsList===null){const A=d.currentProgram.getUniforms();d.uniformsList=On.seqWithValue(A.seq,d.uniforms)}return d.uniformsList}function yi(d,A){const D=me.get(d);D.outputColorSpace=A.outputColorSpace,D.batching=A.batching,D.batchingColor=A.batchingColor,D.instancing=A.instancing,D.instancingColor=A.instancingColor,D.instancingMorph=A.instancingMorph,D.skinning=A.skinning,D.morphTargets=A.morphTargets,D.morphNormals=A.morphNormals,D.morphColors=A.morphColors,D.morphTargetsCount=A.morphTargetsCount,D.numClippingPlanes=A.numClippingPlanes,D.numIntersection=A.numClipIntersection,D.vertexAlphas=A.vertexAlphas,D.vertexTangents=A.vertexTangents,D.toneMapping=A.toneMapping}function pa(d,A,D,L,R){A.isScene!==!0&&(A=Je),p.resetTextureUnits();const $=A.fog,ne=L.isMeshStandardMaterial?A.environment:null,se=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vn,fe=(L.isMeshStandardMaterial?w:l).get(L.envMap||ne),Re=L.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Ce=!!D.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ve=!!D.morphAttributes.position,ke=!!D.morphAttributes.normal,ze=!!D.morphAttributes.color;let rt=kt;L.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(rt=M.toneMapping);const nt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,He=nt!==void 0?nt.length:0,Ee=me.get(L),lt=c.state.lights;if(Q===!0&&(ue===!0||d!==u)){const ht=d===u&&L.id===h;Z.setState(L,d,ht)}let We=!1;L.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==lt.state.version||Ee.outputColorSpace!==se||R.isBatchedMesh&&Ee.batching===!1||!R.isBatchedMesh&&Ee.batching===!0||R.isBatchedMesh&&Ee.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Ee.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Ee.instancing===!1||!R.isInstancedMesh&&Ee.instancing===!0||R.isSkinnedMesh&&Ee.skinning===!1||!R.isSkinnedMesh&&Ee.skinning===!0||R.isInstancedMesh&&Ee.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ee.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ee.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ee.instancingMorph===!1&&R.morphTexture!==null||Ee.envMap!==fe||L.fog===!0&&Ee.fog!==$||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Re||Ee.vertexTangents!==Ce||Ee.morphTargets!==ve||Ee.morphNormals!==ke||Ee.morphColors!==ze||Ee.toneMapping!==rt||Ee.morphTargetsCount!==He)&&(We=!0):(We=!0,Ee.__version=L.version);let bt=Ee.currentProgram;We===!0&&(bt=bn(L,A,R));let jt=!1,Et=!1,fn=!1;const je=bt.getUniforms(),Tt=Ee.uniforms;if(ge.useProgram(bt.program)&&(jt=!0,Et=!0,fn=!0),L.id!==h&&(h=L.id,Et=!0),jt||u!==d){ge.buffers.depth.getReversed()?(ie.copy(d.projectionMatrix),Aa(ie),Ra(ie),je.setValue(S,"projectionMatrix",ie)):je.setValue(S,"projectionMatrix",d.projectionMatrix),je.setValue(S,"viewMatrix",d.matrixWorldInverse);const mt=je.map.cameraPosition;mt!==void 0&&mt.setValue(S,be.setFromMatrixPosition(d.matrixWorld)),Ne.logarithmicDepthBuffer&&je.setValue(S,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&je.setValue(S,"isOrthographic",d.isOrthographicCamera===!0),u!==d&&(u=d,Et=!0,fn=!0)}if(R.isSkinnedMesh){je.setOptional(S,R,"bindMatrix"),je.setOptional(S,R,"bindMatrixInverse");const ht=R.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),je.setValue(S,"boneTexture",ht.boneTexture,p))}R.isBatchedMesh&&(je.setOptional(S,R,"batchingTexture"),je.setValue(S,"batchingTexture",R._matricesTexture,p),je.setOptional(S,R,"batchingIdTexture"),je.setValue(S,"batchingIdTexture",R._indirectTexture,p),je.setOptional(S,R,"batchingColorTexture"),R._colorsTexture!==null&&je.setValue(S,"batchingColorTexture",R._colorsTexture,p));const xt=D.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&Ae.update(R,D,bt),(Et||Ee.receiveShadow!==R.receiveShadow)&&(Ee.receiveShadow=R.receiveShadow,je.setValue(S,"receiveShadow",R.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Tt.envMap.value=fe,Tt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&A.environment!==null&&(Tt.envMapIntensity.value=A.environmentIntensity),Et&&(je.setValue(S,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&ha(Tt,fn),$&&L.fog===!0&&re.refreshFogUniforms(Tt,$),re.refreshMaterialUniforms(Tt,L,F,J,c.state.transmissionRenderTarget[d.id]),On.upload(S,Ci(Ee),Tt,p)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(On.upload(S,Ci(Ee),Tt,p),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&je.setValue(S,"center",R.center),je.setValue(S,"modelViewMatrix",R.modelViewMatrix),je.setValue(S,"normalMatrix",R.normalMatrix),je.setValue(S,"modelMatrix",R.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ht=L.uniformsGroups;for(let mt=0,qn=ht.length;mt<qn;mt++){const Gt=ht[mt];T.update(Gt,bt),T.bind(Gt,bt)}}return bt}function ha(d,A){d.ambientLightColor.needsUpdate=A,d.lightProbe.needsUpdate=A,d.directionalLights.needsUpdate=A,d.directionalLightShadows.needsUpdate=A,d.pointLights.needsUpdate=A,d.pointLightShadows.needsUpdate=A,d.spotLights.needsUpdate=A,d.spotLightShadows.needsUpdate=A,d.rectAreaLights.needsUpdate=A,d.hemisphereLights.needsUpdate=A}function ma(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(d,A,D){me.get(d.texture).__webglTexture=A,me.get(d.depthTexture).__webglTexture=D;const L=me.get(d);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=D===void 0,L.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,A){const D=me.get(d);D.__webglFramebuffer=A,D.__useDefaultFramebuffer=A===void 0};const _a=S.createFramebuffer();this.setRenderTarget=function(d,A=0,D=0){B=d,P=A,N=D;let L=!0,R=null,$=!1,ne=!1;if(d){const fe=me.get(d);if(fe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(S.FRAMEBUFFER,null),L=!1;else if(fe.__webglFramebuffer===void 0)p.setupRenderTarget(d);else if(fe.__hasExternalTextures)p.rebindTextures(d,me.get(d.texture).__webglTexture,me.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ve=d.depthTexture;if(fe.__boundDepthTexture!==ve){if(ve!==null&&me.has(ve)&&(d.width!==ve.image.width||d.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");p.setupDepthRenderbuffer(d)}}const Re=d.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ne=!0);const Ce=me.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(Ce[A])?R=Ce[A][D]:R=Ce[A],$=!0):d.samples>0&&p.useMultisampledRTT(d)===!1?R=me.get(d).__webglMultisampledFramebuffer:Array.isArray(Ce)?R=Ce[D]:R=Ce,C.copy(d.viewport),Y.copy(d.scissor),G=d.scissorTest}else C.copy(Le).multiplyScalar(F).floor(),Y.copy(Ve).multiplyScalar(F).floor(),G=et;if(D!==0&&(R=_a),ge.bindFramebuffer(S.FRAMEBUFFER,R)&&L&&ge.drawBuffers(d,R),ge.viewport(C),ge.scissor(Y),ge.setScissorTest(G),$){const fe=me.get(d.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+A,fe.__webglTexture,D)}else if(ne){const fe=me.get(d.texture),Re=A;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,fe.__webglTexture,D,Re)}else if(d!==null&&D!==0){const fe=me.get(d.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,fe.__webglTexture,D)}h=-1},this.readRenderTargetPixels=function(d,A,D,L,R,$,ne){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=me.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){ge.bindFramebuffer(S.FRAMEBUFFER,se);try{const fe=d.texture,Re=fe.format,Ce=fe.type;if(!Ne.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=d.width-L&&D>=0&&D<=d.height-R&&S.readPixels(A,D,L,R,we.convert(Re),we.convert(Ce),$)}finally{const fe=B!==null?me.get(B).__webglFramebuffer:null;ge.bindFramebuffer(S.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(d,A,D,L,R,$,ne){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=me.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const fe=d.texture,Re=fe.format,Ce=fe.type;if(!Ne.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=d.width-L&&D>=0&&D<=d.height-R){ge.bindFramebuffer(S.FRAMEBUFFER,se);const ve=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ve),S.bufferData(S.PIXEL_PACK_BUFFER,$.byteLength,S.STREAM_READ),S.readPixels(A,D,L,R,we.convert(Re),we.convert(Ce),0);const ke=B!==null?me.get(B).__webglFramebuffer:null;ge.bindFramebuffer(S.FRAMEBUFFER,ke);const ze=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await ba(S,ze,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ve),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,$),S.deleteBuffer(ve),S.deleteSync(ze),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,A=null,D=0){d.isTexture!==!0&&(tn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,d=arguments[1]);const L=Math.pow(2,-D),R=Math.floor(d.image.width*L),$=Math.floor(d.image.height*L),ne=A!==null?A.x:0,se=A!==null?A.y:0;p.setTexture2D(d,0),S.copyTexSubImage2D(S.TEXTURE_2D,D,0,0,ne,se,R,$),ge.unbindTexture()};const ga=S.createFramebuffer(),va=S.createFramebuffer();this.copyTextureToTexture=function(d,A,D=null,L=null,R=0,$=null){d.isTexture!==!0&&(tn("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,d=arguments[1],A=arguments[2],$=arguments[3]||0,D=null),$===null&&(R!==0?(tn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=R,R=0):$=0);let ne,se,fe,Re,Ce,ve,ke,ze,rt;const nt=d.isCompressedTexture?d.mipmaps[$]:d.image;if(D!==null)ne=D.max.x-D.min.x,se=D.max.y-D.min.y,fe=D.isBox3?D.max.z-D.min.z:1,Re=D.min.x,Ce=D.min.y,ve=D.isBox3?D.min.z:0;else{const xt=Math.pow(2,-R);ne=Math.floor(nt.width*xt),se=Math.floor(nt.height*xt),d.isDataArrayTexture?fe=nt.depth:d.isData3DTexture?fe=Math.floor(nt.depth*xt):fe=1,Re=0,Ce=0,ve=0}L!==null?(ke=L.x,ze=L.y,rt=L.z):(ke=0,ze=0,rt=0);const He=we.convert(A.format),Ee=we.convert(A.type);let lt;A.isData3DTexture?(p.setTexture3D(A,0),lt=S.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(p.setTexture2DArray(A,0),lt=S.TEXTURE_2D_ARRAY):(p.setTexture2D(A,0),lt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,A.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,A.unpackAlignment);const We=S.getParameter(S.UNPACK_ROW_LENGTH),bt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),jt=S.getParameter(S.UNPACK_SKIP_PIXELS),Et=S.getParameter(S.UNPACK_SKIP_ROWS),fn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,nt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,nt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Re),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ce),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ve);const je=d.isDataArrayTexture||d.isData3DTexture,Tt=A.isDataArrayTexture||A.isData3DTexture;if(d.isDepthTexture){const xt=me.get(d),ht=me.get(A),mt=me.get(xt.__renderTarget),qn=me.get(ht.__renderTarget);ge.bindFramebuffer(S.READ_FRAMEBUFFER,mt.__webglFramebuffer),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Gt=0;Gt<fe;Gt++)je&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.get(d).__webglTexture,R,ve+Gt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.get(A).__webglTexture,$,rt+Gt)),S.blitFramebuffer(Re,Ce,ne,se,ke,ze,ne,se,S.DEPTH_BUFFER_BIT,S.NEAREST);ge.bindFramebuffer(S.READ_FRAMEBUFFER,null),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(R!==0||d.isRenderTargetTexture||me.has(d)){const xt=me.get(d),ht=me.get(A);ge.bindFramebuffer(S.READ_FRAMEBUFFER,ga),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,va);for(let mt=0;mt<fe;mt++)je?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,xt.__webglTexture,R,ve+mt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,xt.__webglTexture,R),Tt?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ht.__webglTexture,$,rt+mt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ht.__webglTexture,$),R!==0?S.blitFramebuffer(Re,Ce,ne,se,ke,ze,ne,se,S.COLOR_BUFFER_BIT,S.NEAREST):Tt?S.copyTexSubImage3D(lt,$,ke,ze,rt+mt,Re,Ce,ne,se):S.copyTexSubImage2D(lt,$,ke,ze,Re,Ce,ne,se);ge.bindFramebuffer(S.READ_FRAMEBUFFER,null),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Tt?d.isDataTexture||d.isData3DTexture?S.texSubImage3D(lt,$,ke,ze,rt,ne,se,fe,He,Ee,nt.data):A.isCompressedArrayTexture?S.compressedTexSubImage3D(lt,$,ke,ze,rt,ne,se,fe,He,nt.data):S.texSubImage3D(lt,$,ke,ze,rt,ne,se,fe,He,Ee,nt):d.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,$,ke,ze,ne,se,He,Ee,nt.data):d.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,$,ke,ze,nt.width,nt.height,He,nt.data):S.texSubImage2D(S.TEXTURE_2D,$,ke,ze,ne,se,He,Ee,nt);S.pixelStorei(S.UNPACK_ROW_LENGTH,We),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,jt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Et),S.pixelStorei(S.UNPACK_SKIP_IMAGES,fn),$===0&&A.generateMipmaps&&S.generateMipmap(lt),ge.unbindTexture()},this.copyTextureToTexture3D=function(d,A,D=null,L=null,R=0){return d.isTexture!==!0&&(tn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,L=arguments[1]||null,d=arguments[2],A=arguments[3],R=arguments[4]||0),tn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,A,D,L,R)},this.initRenderTarget=function(d){me.get(d).__webglFramebuffer===void 0&&p.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?p.setTextureCube(d,0):d.isData3DTexture?p.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?p.setTexture2DArray(d,0):p.setTexture2D(d,0),ge.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,ge.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(n),t.unpackColorSpace=at._getUnpackColorSpace()}}const Jt=new En(0,0,0,"YXZ"),en=new De,Wf={type:"change"},Xf={type:"lock"},qf={type:"unlock"},Ur=Math.PI/2;class Yf extends Yo{constructor(n,t=null){super(n,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Kf.bind(this),this._onPointerlockChange=$f.bind(this),this._onPointerlockError=Zf.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const t=this.object;en.setFromMatrixColumn(t.matrix,0),en.crossVectors(t.up,en),t.position.addScaledVector(en,n)}moveRight(n){if(this.enabled===!1)return;const t=this.object;en.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(en,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Kf(e){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;Jt.setFromQuaternion(n.quaternion),Jt.y-=e.movementX*.002*this.pointerSpeed,Jt.x-=e.movementY*.002*this.pointerSpeed,Jt.x=Math.max(Ur-this.maxPolarAngle,Math.min(Ur-this.minPolarAngle,Jt.x)),n.quaternion.setFromEuler(Jt),this.dispatchEvent(Wf)}function $f(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Xf),this.isLocked=!0):(this.dispatchEvent(qf),this.isLocked=!1)}function Zf(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}var sn;class jf{constructor(n,t,i,r){xe(this,"radius",.5);xe(this,"height",1.8);xe(this,"maxSpeed",10);xe(this,"jumpSpeed",10);xe(this,"onGround",!1);xe(this,"input",new De);xe(this,"velocity",new De(0,0,0));Pi(this,sn,new De);xe(this,"camera",new mn(75,window.innerWidth/window.innerHeight,.1,100));xe(this,"controls",new Yf(this.camera,document.body));xe(this,"selectedCoords",null);xe(this,"selectedCoordsNormal",null);this.position.set(10,120,10),n.add(this.camera),this.scene=n,this.world=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.boundsHelper=new ot(new Ko(this.radius,this.radius,this.height,16),new Ft({wireframe:!0}));const a=new Ct(.1,.1,.3),o=new Hn().load("images/hand.png");o.colorSpace=vi,o.magFilter=yt,o.minFilter=yt;const s=new Ft({map:o});this.handMesh=new ot(a,s),this.handMesh.position.set(.4,-.25,-.4),this.handMesh.rotation.x=.6,this.handMesh.rotation.z=-.4,this.handMesh.rotation.y=-.5,n.add(this.handMesh),this.camera.add(this.handMesh),this.punchDirection=1;const _=new Ft({color:0,transparent:!0,opacity:.2}),m=new Hn().load("images/break.png"),E=new Ke({map:m,transparent:!0}),g=new Ct(1.01,1.01,1.01);this.selectionBreakHelper=new ot(g,E),this.scene.add(this.selectionBreakHelper);const v=new Ct(1.01,1.01,1.01);this.selectionHelper=new ot(v,_),n.add(this.selectionHelper),this.raycaster=new $o,this.mouse=new pt,this.raycaster.far=5,document.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this)),this.isDestroying=!1}onMouseDown(n){var i,r;if(this.controls.isLocked&&(this.isMouseDown=!0,this.animateHand(),this.selectedCoords))if(n.button==2){const a=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(((i=this.inventory.getSelectedItem())==null?void 0:i.block)!==void 0&&ft(a.id).interface!==!0&&ft((r=this.inventory.getSelectedItem())==null?void 0:r.block).type==="block"){this.world.addBlock(this.selectedCoordsNormal.x,this.selectedCoordsNormal.y,this.selectedCoordsNormal.z,this.inventory.getSelectedItem().block),this.inventory.removeBlock(this.inventory.getSelectedItem().block);var t=new Audio("audio/dirt1.ogg");t.play()}else ft(a.id).interface===!0&&this.ui.open(a.id)}else this.startDestroyingBlock(n)}startDestroyingBlock(n){var E,g;if(!this.isMouseDown||!this.selectedCoords)return;let t=0;const i=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);console.log(i);let r=ft(i.id).hardness*1e3,a=1;r*=1.5;const o=(E=this.inventory.getSelectedItem())==null?void 0:E.block;let s=null;o&&(s=ft(o),s.type=="item"&&s.tool_type==ft(i.id).tool&&(a=s.tool_material));let _=a/ft(i.id).hardness;(g=ft(i.id))!=null&&g.need_tool&&!(s&&s.type=="item"&&s.tool_type==ft(i.id).tool)?_/=100:_/=30,r=Math.ceil(1/_)/20*1e3,_>1&&(r=0),console.log(r),this.isDestroying=!0,this.animateBlockBreaking(r),this.destructionInterval=setInterval(()=>{if(!this.isMouseDown){clearInterval(this.destructionInterval),this.isDestroying=!1;return}if(t+=100,t>=r){const x=ft(i.id);Object.hasOwn(x,"drops")?this.inventory.addBlock(x.drops):this.inventory.addBlock(i.id),this.world.removeBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);var v=new Audio("audio/dirt1.ogg");v.play(),this.isDestroying=!1,clearInterval(this.destructionInterval),setTimeout(()=>{this.startDestroyingBlock(n)},200)}},100)}onMouseUp(n){this.controls.isLocked&&n.button!=2&&(this.isDestroying=!1,clearInterval(this.destructionInterval),this.isMouseDown=!1)}animateHand(){this.handMesh.position.y+=this.punchDirection*.02,(this.handMesh.position.y>-.4||this.handMesh.position.y<-.6)&&(this.punchDirection*=-1)}update(n){this.updateRaycaster(n)}updateRaycaster(n){const t=this.raycaster.intersectObjects(n.children,!0);if(this.controls.isLocked)if(this.raycaster.setFromCamera(this.mouse,this.camera),t.length>0){const i=t[0],r=i.object.parent,a=new Pt;i.object.getMatrixAt(i.instanceId,a),this.selectedCoords=r.position.clone(),this.selectedCoords.applyMatrix4(a),this.selectedCoords.set(Math.round(this.selectedCoords.x),Math.round(this.selectedCoords.y),Math.round(this.selectedCoords.z)),this.selectedCoordsNormal=this.selectedCoords.clone().add(i.normal);const o=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(o){new Ft({color:0,transparent:!0,opacity:.2});let s=ft(o.id).geometry;this.selectionHelper.scale.set(s.parameters.width+.01,s.parameters.height+.01,s.parameters.depth+.01)}this.selectionHelper.position.copy(this.selectedCoords),this.selectionHelper.visible=!0}else this.selectedCoords=null,this.selectionHelper.visible=!1}animateBlockBreaking(n){this.selectionBreakHelper.position.copy(this.selectedCoords),this.selectionBreakHelper.visible=!0;const i=n/6;this.nextStep(i,0)}nextStep(n,t){if(t<=6&&this.isDestroying){const a=t%2,o=Math.floor(t/2);this.selectionBreakHelper.material.map.offset.set(a/2,o/3),this.selectionBreakHelper.material.map.repeat.set(1/2,1/3),t++,setTimeout(this.nextStep.bind(this),n,n,t)}else this.selectionBreakHelper.visible=!1}setBlockInHand(n){var t;if((t=ft(n))!=null&&t.material){this.scene.remove(this.meshHandItem),this.camera.remove(this.meshHandItem);const i=new Ct(.3,.3,.3);this.meshHandItem=new ot(i,ft(n).material),this.meshHandItem.count=0,this.meshHandItem.castShadow=!0,this.meshHandItem.receiveShadow=!0,this.meshHandItem.rotation.x=-.2,this.meshHandItem.rotation.z=0,this.meshHandItem.rotation.y=.6,this.meshHandItem.position.set(.55,-.45,-.5),this.scene.add(this.meshHandItem),this.camera.add(this.meshHandItem),this.handMesh.visible=!1}else this.meshHandItem&&(this.meshHandItem.visible=!1),this.handMesh.visible=!0}get worldVelocity(){return Cn(this,sn).copy(this.velocity),Cn(this,sn).applyEuler(new En(0,this.camera.rotation.y,0)),Cn(this,sn)}applyWorldDeltaVelocity(n){n.applyEuler(new En(0,-this.camera.rotation.y,0)),this.velocity.add(n)}applyInputs(n){this.controls.isLocked&&(this.velocity.x=this.input.x,this.velocity.z=this.input.z,this.controls.moveRight(this.velocity.x*n),this.controls.moveForward(this.velocity.z*n),this.position.y+=this.velocity.y*n,document.getElementById("player-position").innerHTML=this.toString())}updateBoundsHelper(){this.boundsHelper.position.copy(this.position),this.boundsHelper.position.y-=this.height/2}onKeyDown(n){n.code==="ShiftLeft"&&(keys.speed=!0),n.code==="KeyW"&&(this.input.z=this.maxSpeed),n.code==="KeyS"&&(this.input.z=-this.maxSpeed),n.code==="KeyA"&&(this.input.x=-this.maxSpeed),n.code==="KeyD"&&(this.input.x=this.maxSpeed),n.code==="Space"&&this.onGround&&(this.velocity.y+=this.jumpSpeed),n.code==="F5"&&this.camera.position.set(this.camera.position.x,this.camera.position.y+1,this.camera.position.z)}onKeyUp(n){n.code==="KeyW"&&(this.input.z=0),n.code==="KeyS"&&(this.input.z=0),n.code==="KeyA"&&(this.input.x=0),n.code==="KeyD"&&(this.input.x=0)}get position(){return this.camera.position}toString(){let n="";return n+=`X: ${this.position.x.toFixed(3)} `,n+=`Y: ${this.position.y.toFixed(3)} `,n+=`Z: ${this.position.z.toFixed(3)}`,n}save(){(async()=>{const n=new Blob([JSON.stringify(this.position)]).size;console.log(`Taille des données : ${n} octets`),console.log(this.position);const t=this.position;await Jf(t)})()}load(){(async()=>{const n=await eu();this.position.set(n.x,n.y,n.z)})()}setInventory(n){this.inventory=n}setUI(n){this.ui=n}}sn=new WeakMap;const Qf="minecraftDB",Mn="minecraftData";function oa(){return new Promise((e,n)=>{const t=indexedDB.open(Qf,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(Mn,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function Jf(e){const t=(await oa()).transaction([Mn],"readwrite");return t.objectStore(Mn).put({id:"minecraft_player_position",data:e}),t.complete}async function eu(){const e=await oa();return new Promise((n,t)=>{const a=e.transaction([Mn],"readonly").objectStore(Mn).get("minecraft_player_position");a.onsuccess=function(){var o;n(((o=a.result)==null?void 0:o.data)||null)},a.onerror=function(o){t(o.target.error)}})}class tu{constructor(n){xe(this,"m_w",123456789);xe(this,"m_z",987654321);xe(this,"mask",4294967295);this.m_w=123456789+n&this.mask,this.m_z=987654321-n&this.mask}random(){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,n}}class Nr extends Bt{constructor(t,i,r){super();xe(this,"chunks");xe(this,"chunkSize");xe(this,"height");xe(this,"meshs");xe(this,"data",[]);this.chunks=new Map,this.chunkSize=t.width,this.height=t.height,this.params=i,this.dataStore=r,this.rng=new tu(this.params.seed)}initializeTerrain(){this.data=[];for(let t=0;t<this.chunkSize;t++){const i=[];for(let r=0;r<this.height;r++){const a=[];for(let o=0;o<this.chunkSize;o++)a.push({id:he.empty.id,instanceId:null,inventory:null});i.push(a)}this.data.push(i)}}generate(){if(this.dataStore.contains(this.position.x,this.position.z))this.data=this.dataStore.get(this.position.x,this.position.z),this.generateMesh();else{const t=new Worker(new URL("/minecraft-threejs/assets/chunkWorker-DyP1YviV.js",import.meta.url),{type:"module"});t.onmessage=i=>{i.data,this.data=i.data.data,this.dataStore.set(this.position.x,this.position.z,this.data),this.generateMesh(),t.terminate()},t.onerror=i=>{console.error(i),t.terminate()},t.onmessageerror=i=>{console.error("Message error in Worker:",i)},t.postMessage({chunkSize:this.chunkSize,chunkHeight:this.height,params:this.params,position:this.position,rng:this.rng})}}generateResources(t,i,r,a){const o=new SimplexNoise(t);Zo.forEach(s=>{o.noise3D((this.position.x+i)/s.scale.x,(this.position.y+r)/s.scale.y,(this.position.z+a)/s.scale.z)>s.scarcity&&this.setBlockId(i,r,a,s.id)})}generateTerrain(t){var r,a;const i=new SimplexNoise(t);for(let o=0;o<this.chunkSize;o++)for(let s=0;s<this.chunkSize;s++){const _=i.noise2D((this.position.x+o)/this.params.terrain.scale,(this.position.z+s)/this.params.terrain.scale),m=this.params.terrain.offset+this.params.terrain.magnitude*_;let E=Math.floor(m*this.height);E=Math.max(1,Math.min(E,this.height-1));for(let g=0;g<this.height;g++)g<E&&g>E-3&&((r=this.getBlock(o,g,s))==null?void 0:r.id)===he.empty.id&&this.setBlockId(o,g,s,he.dirt.id),g<E&&((a=this.getBlock(o,g,s))==null?void 0:a.id)===he.empty.id?(this.setBlockId(o,g,s,he.stone.id),this.generateResources(i,o,g,s)):g==E&&(this.setBlockId(o,g,s,he.grass.id),Math.random()<this.params.trees.frequency&&this.generateTree(t,1,o,E+1,s))}}generateTree(t,i,r,a,o){const s=this.params.trees.trunk.minHeight,_=this.params.trees.trunk.maxHeight,m=Math.round(s+(_-s)*Math.random()+1);for(let E=a;E<a+m;E++)this.setBlockId(r,E,o,he.log.id);this.generateTreeCanopy(i,r,a+m,o,t)}generateTreeCanopy(t,i,r,a,o){const s=this.params.trees.canopy.minRadius,_=this.params.trees.canopy.maxRadius,m=Math.round(s+(_-s)*Math.random());for(let E=-m;E<=m;E++)for(let g=-m;g<=m;g++)for(let v=-m;v<=m;v++){const x=Math.random();if(E*E+g*g+v*v>m*m)continue;const U=this.getBlock(i+E,r+g,a+v);U&&U.id!==he.empty.id||x<this.params.trees.canopy.density&&this.getBlock(i+E,r+g,a+v)!==null&&this.setBlockId(i+E,r+g,a+v,he.leaves.id)}}generateMesh(){const t=this.chunkSize*this.chunkSize*40,i={};Object.values(he).filter(a=>a.id!==he.empty.id&&a.type==="block").forEach(a=>{const o=new jo(a.geometry,a.material,t);o.name=a.id,o.count=0,o.castShadow=!0,o.receiveShadow=!0,i[a.id]=o});const r=new Pt;for(let a=0;a<this.chunkSize;a++)for(let o=0;o<this.chunkSize;o++)for(let s=0;s<this.height;s++){const _=this.getBlock(a,s,o);if(!this.isBlockObscured(a,s,o)&&_!=null&&_.id!=he.empty.id){const m=(1-i[_.id].geometry.parameters.height)/2;r.setPosition(a,s-m,o),i[_.id].setMatrixAt(i[_.id].count,r);const g=i[_.id].count;this.setBlockInstanceId(a,s,o,g),i[_.id].count++}}this.meshs=i,this.add(...Object.values(i))}setBlockId(t,i,r,a){this.data[t][i][r].id=a}getBlock(t,i,r){return this.inBounds(t,i,r)&&typeof this.data[t]<"u"?this.data[t][i][r]:null}inBounds(t,i,r){return t>=0&&t<this.chunkSize&&r>=0&&r<this.chunkSize&&i>=0&&i<this.height}setBlockInstanceId(t,i,r,a){this.inBounds(t,i,r)&&(this.data[t][i][r].instanceId=a)}revealBlock(t,i,r){const a=this.worldToChunkCoords(t,i,r),o=this.getChunk(a.chunk.x,a.chunk.z);o&&o.addBlockInstance(a.block.x,a.block.y,a.block.z)}isBlockObscured(t,i,r){var g,v,x,U,y,f;const a=((g=this.getBlock(t,i+1,r))==null?void 0:g.id)??he.empty.id,o=((v=this.getBlock(t,i-1,r))==null?void 0:v.id)??he.empty.id,s=((x=this.getBlock(t+1,i,r))==null?void 0:x.id)??he.empty.id,_=((U=this.getBlock(t-1,i,r))==null?void 0:U.id)??he.empty.id,m=((y=this.getBlock(t,i,r+1))==null?void 0:y.id)??he.empty.id,E=((f=this.getBlock(t,i,r-1))==null?void 0:f.id)??he.empty.id;return!(a===he.empty.id||o===he.empty.id||s===he.empty.id||_===he.empty.id||m===he.empty.id||E===he.empty.id)}disposeInstances(){this.traverse(t=>{t.dipose&&t.dispose()}),this.clear}addBlock(t,i,r,a){this.getBlock(t,i,r).id===he.empty.id&&(this.setBlockId(t,i,r,a),this.addBlockInstance(t,i,r),this.dataStore.set(this.position.x,this.position.z,this.data))}setBlockInventory(t,i,r,a){this.inBounds(t,i,r)&&(this.data[t][i][r].inventory=a)}addBlockInstance(t,i,r){const a=this.getBlock(t,i,r);if(a&&a.id!==he.empty.id&&a.instanceId===null){const o=this.children.find(E=>E.name===a.id);a.id==50&&(console.log(o.count),console.log(t,i,r));const s=o.count++;this.setBlockInstanceId(t,i,r,s);const _=new Pt,m=(1-o.geometry.parameters.height)/2;if(_.setPosition(t,i-m,r),o.setMatrixAt(s,_),o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere(),a.id==he.torch.id){const E=new Qo(16753920,8,14,2);E.position.set(t,i+.7,r),E.castShadow=!0,this.add(E)}}}removeBlock(t,i,r){const a=this.getBlock(t,i,r);a&&a.id!==he.empty.id&&(this.deleteBlockInstance(t,i,r),this.setBlockId(t,i,r,he.empty.id),this.dataStore.set(this.position.x,this.position.z,this.data))}deleteBlockInstance(t,i,r){const a=this.getBlock(t,i,r);if(a.id===he.empty.id||a.instanceId===null)return;const o=this.children.find(E=>E.name===a.id),s=a.instanceId,_=new Pt;o.getMatrixAt(o.count-1,_);const m=new De;m.applyMatrix4(_),this.setBlockInstanceId(m.x,Math.round(m.y),m.z,s),o.setMatrixAt(s,_),o.count--,o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere(),this.setBlockInstanceId(t,i,r,null)}}class nu{constructor(){this.data={}}clear(){this.data={}}contains(n,t){const i=this.getKey(n,t);return this.data[i]!==void 0}get(n,t){const i=this.getKey(n,t);return this.data[i]}set(n,t,i){const r=this.getKey(n,t);this.data[r]=i}getKey(n,t){return`${n},${t}`}getData(){return this.data}setData(n){this.data=n}}class iu extends Bt{constructor(){super();xe(this,"asyncLoading",!0);xe(this,"drawDistance",2);xe(this,"chunkSize",{width:16,height:80});xe(this,"params",{seed:45678,terrain:{scale:40,magnitude:.1,offset:.8},trees:{trunk:{minHeight:4,maxHeight:7},canopy:{minRadius:3,maxRadius:3,density:.7},frequency:.005}});xe(this,"dataStore",new nu)}save(){(async()=>{const t=new Blob([JSON.stringify(this.dataStore.getData())]).size;console.log(`Taille des données : ${t} octets`);const i=this.dataStore.getData();console.log(i),await au(i)})()}load(){(async()=>{const t=await ou();this.dataStore.setData(t),this.generate()})()}generate(){this.disposeChunks();for(let t=-this.drawDistance;t<=this.drawDistance;t++)for(let i=-this.drawDistance;i<=this.drawDistance;i++){const r=new Nr(this.chunkSize,this.params,this.dataStore);r.position.set(t*this.chunkSize.width,0,i*this.chunkSize.width),r.generate(),r.userData={x:t,z:i},this.add(r)}}update(t){const i=this.getVisibleChunks(t),r=this.getChunksToAdd(i);this.removeUnusedChunks(i);for(const a of r)this.generateChunk(a.x,a.z)}getVisibleChunks(t){const i=[],r=this.worldToChunkCoords(t.position.x,t.position.y,t.position.z),a=r.chunk.x,o=r.chunk.z;for(let s=a-this.drawDistance;s<=a+this.drawDistance;s++)for(let _=o-this.drawDistance;_<=o+this.drawDistance;_++)i.push({x:s,z:_});return i}getChunksToAdd(t){return t.filter(i=>!this.children.map(a=>a.userData).find(({x:a,z:o})=>i.x===a&&i.z===o))}removeUnusedChunks(t){const i=this.children.filter(r=>{const{x:a,z:o}=r.userData;return!t.find(_=>_.x===a&&_.z===o)});for(const r of i)r.disposeInstances(),this.remove(r)}generateChunk(t,i){const r=new Nr(this.chunkSize,this.params,this.dataStore);r.position.set(t*this.chunkSize.width,0,i*this.chunkSize.width),r.userData={x:t,z:i},this.asyncLoading?requestIdleCallback(r.generate.bind(r),{timeout:2e3}):r.generate(),this.add(r)}getBlock(t,i,r){const a=this.worldToChunkCoords(t,i,r),o=this.getChunk(a.chunk.x,a.chunk.z);return o?o.getBlock(a.block.x,a.block.y,a.block.z):null}worldToChunkCoords(t,i,r){const a={x:Math.floor(t/this.chunkSize.width),z:Math.floor(r/this.chunkSize.width)},o={x:t-this.chunkSize.width*a.x,y:i,z:r-this.chunkSize.width*a.z};return{chunk:a,block:o}}getChunk(t,i){return this.children.find(r=>r.userData.x===t&&r.userData.z===i)}disposeChunks(){this.traverse(t=>{t.disposeInstances&&t.disposeInstances()}),this.clear()}addBlock(t,i,r,a){const o=this.worldToChunkCoords(t,i,r),s=this.getChunk(o.chunk.x,o.chunk.z);s&&(s.addBlock(o.block.x,o.block.y,o.block.z,a),ft(a).transparent!==!0&&(this.hideBlock(t-1,i,r),this.hideBlock(t+1,i,r),this.hideBlock(t,i-1,r),this.hideBlock(t,i+1,r),this.hideBlock(t,i,r-1),this.hideBlock(t,i,r+1)))}removeBlock(t,i,r){const a=this.worldToChunkCoords(t,i,r),o=this.getChunk(a.chunk.x,a.chunk.z);a.block.y!==0&&o&&(this.checkRemoveTree(t,i,r),o.removeBlock(a.block.x,a.block.y,a.block.z),this.revealBlock(t-1,i,r),this.revealBlock(t+1,i,r),this.revealBlock(t,i-1,r),this.revealBlock(t,i+1,r),this.revealBlock(t,i,r-1),this.revealBlock(t,i,r+1))}setBlockInventory(t,i,r,a){const o=this.worldToChunkCoords(t,i,r),s=this.getChunk(o.chunk.x,o.chunk.z);s&&s.setBlockInventory(o.block.x,o.block.y,o.block.z,a)}checkRemoveTree(t,i,r){var o;if(this.getBlock(t,i,r).id==he.log.id)for(let s=-6;s<=6;s++)for(let _=-6;_<=6;_++)for(let m=-6;m<=6;m++){let E=t+s,g=i+_,v=r+m;s===0&&_===0&&m===0||((o=this.getBlock(E,g,v))==null?void 0:o.id)==he.leaves.id&&this.removeBlock(E,g,v)}}revealBlock(t,i,r){const a=this.worldToChunkCoords(t,i,r),o=this.getChunk(a.chunk.x,a.chunk.z);o&&o.addBlockInstance(a.block.x,a.block.y,a.block.z)}hideBlock(t,i,r){const a=this.worldToChunkCoords(t,i,r),o=this.getChunk(a.chunk.x,a.chunk.z);o&&o.isBlockObscured(a.block.x,a.block.y,a.block.z)&&o.deleteBlockInstance(a.block.x,a.block.y,a.block.z)}}const ru="minecraftDB",Tn="minecraftData";function sa(){return new Promise((e,n)=>{const t=indexedDB.open(ru,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(Tn,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function au(e){const t=(await sa()).transaction([Tn],"readwrite");return t.objectStore(Tn).put({id:"minecraft_data",data:e}),t.complete}async function ou(){const e=await sa();return new Promise((n,t)=>{const a=e.transaction([Tn],"readonly").objectStore(Tn).get("minecraft_data");a.onsuccess=function(){var o;n(((o=a.result)==null?void 0:o.data)||null)},a.onerror=function(o){t(o.target.error)}})}const su=new Hn;function It(e){const n=su.load(e);return n.colorSpace=vi,n.magFilter=yt,n.minFilter=yt,n}const Qe={pig_head_front:It("images/mob/pig/pig_head_front.png"),pig_head_right:It("images/mob/pig/pig_head_right.png"),pig_head_left:It("images/mob/pig/pig_head_left.png"),pig_head_top:It("images/mob/pig/pig_head_top.png"),pig_feet:It("images/mob/pig/pig_feet_side.png"),pig_body_back:It("images/mob/pig/pig_body_back.png"),pig_body_side:It("images/mob/pig/pig_body_side.png"),pig_body_right:It("images/mob/pig/pig_body_right.png"),pig_noise_front:It("images/mob/pig/pig_noise_front.png")},Ln={pig:{id:1,name:"pig",head:{material:[new Ke({map:Qe.pig_head_left}),new Ke({map:Qe.pig_head_right}),new Ke({map:Qe.pig_head_top}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_head_front}),new Ke({map:Qe.pig_body_side})]},body:{material:[new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_right}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_back})]},feet:{material:[new Ke({map:Qe.pig_feet}),new Ke({map:Qe.pig_feet}),new Ke({map:Qe.pig_feet}),new Ke({map:Qe.pig_feet}),new Ke({map:Qe.pig_feet}),new Ke({map:Qe.pig_feet})]},noise:{material:[new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_body_side}),new Ke({map:Qe.pig_noise_front}),new Ke({map:Qe.pig_body_side})]}}};class cu extends Bt{constructor(){super();const n=new Ct(.9,.7,1.6),t=new Ct(.7,.7,.7),i=new Ct(.32,.25,.1),r=new Ct(.4,.5,.4),a=new ot(n,Ln.pig.body.material);a.position.set(0,.6,0),this.add(a);const o=new ot(t,Ln.pig.head.material);o.position.set(0,.8,1),this.add(o);const s=new ot(i,Ln.pig.noise.material);s.position.set(0,.7,1.4),this.add(s);for(let _=0;_<4;_++){const m=new ot(r,Ln.pig.feet.material);m.position.set(_<2?-.25:.25,0,_%2===0?-.7:.6),m.isLeg=!0,this.add(m)}this.position.set(6,69,10),this.BOUNDARY={minX:-50,maxX:50,minZ:-50,maxZ:50},this.target=this.getRandomTarget(),this.pigVelocity=new De(0,0,0)}getRandomTarget(){const n=Math.random()*(this.BOUNDARY.maxX-this.BOUNDARY.minX)+this.BOUNDARY.minX,t=Math.random()*(this.BOUNDARY.maxZ-this.BOUNDARY.minZ)+this.BOUNDARY.minZ;return new De(n,75,t)}movePig(n,t){var a,o;this.world=t,((a=this.world.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)))==null?void 0:a.id)==0?this.pigVelocity.y-=.01:((o=this.world.getBlock(Math.floor(this.position.x),Math.ceil(this.position.y),Math.floor(this.position.z)))==null?void 0:o.id)>0?this.pigVelocity.y+=.05:this.pigVelocity.y=0,this.position.add(this.pigVelocity);const i=2,r=this.target.clone().sub(this.position).normalize();r.y=0,this.position.add(r.multiplyScalar(i*n)),this.position.distanceTo(this.target)<2&&(this.target=this.getRandomTarget()),this.target.y=this.position.y,this.lookAt(this.target),this.animatePigLegs(n)}animatePigLegs(){const t=Math.sin(Date.now()*.005*2);this.children.forEach(i=>{i.isLeg&&(i.rotation.x=t*.2)})}}const lu=new Ft({color:16711680,transparent:!0,opacity:.2}),du=new Ct(1.001,1.001,1.001),fu=new Ft({wireframe:!0,color:65280}),uu=new Jo(.05,6,6);class pu{constructor(n){xe(this,"simulationRate",250);xe(this,"timestep",1/this.simulationRate);xe(this,"accumulator",0);xe(this,"gravity",32);this.helpers=new Bt,n.add(this.helpers)}update(n,t,i){for(this.accumulator+=n;this.accumulator>=this.timestep;)t.controls.isLocked&&(t.velocity.y-=this.gravity*this.timestep),t.applyInputs(this.timestep),t.updateBoundsHelper(),this.detectCollisions(t,i),this.accumulator-=this.timestep}detectCollisions(n,t){n.onGround=!1,this.helpers.clear();const i=this.broadPhase(n,t),r=this.narrowPhase(i,n);r.length>0&&this.resolveCollisions(r,n)}broadPhase(n,t){var E;const i=[],r=Math.floor(n.position.x-n.radius),a=Math.ceil(n.position.x+n.radius),o=Math.floor(n.position.y-n.height),s=Math.ceil(n.position.y),_=Math.floor(n.position.z-n.radius),m=Math.ceil(n.position.z+n.radius);for(let g=r;g<=a;g++)for(let v=o;v<=s;v++)for(let x=_;x<=m;x++){const U=(E=t.getBlock(g,v,x))==null?void 0:E.id;if(U&&U!==he.empty.id){const y={x:g,y:v,z:x};i.push(y)}}return i}narrowPhase(n,t){const i=[];for(const r of n){const a={x:Math.max(r.x-.5,Math.min(t.position.x,r.x+.5)),y:Math.max(r.y-.5,Math.min(t.position.y-t.height/2,r.y+.5)),z:Math.max(r.z-.5,Math.min(t.position.z,r.z+.5))},o=a.x-t.position.x,s=a.y-(t.position.y-t.height/2),_=a.z-t.position.z;if(this.pointInPlayerBoundingCylinder(a,t)){const m=t.height/2-Math.abs(s),E=t.radius-Math.sqrt(o*o+_*_);let g,v;m<E?(g=new De(0,-Math.sign(s),0),v=m,t.onGround=!0):(g=new De(-o,0,-_).normalize(),v=E),i.push({block:r,contactPoint:a,normal:g,overlap:v}),this.addContactPointerHelper(a)}}return i}resolveCollisions(n,t){n.sort((i,r)=>i.overlap<r.overlap);for(const i of n){if(!this.pointInPlayerBoundingCylinder(i.contactPoint,t))continue;let r=i.normal.clone();r.multiplyScalar(i.overlap),t.position.add(r);let a=t.worldVelocity.dot(i.normal),o=i.normal.clone().multiplyScalar(a);t.applyWorldDeltaVelocity(o.negate())}}pointInPlayerBoundingCylinder(n,t){const i=n.x-t.position.x,r=n.y-(t.position.y-t.height/2),a=n.z-t.position.z,o=i*i+a*a;return Math.abs(r)<t.height/2&&o<t.radius*t.radius}addCollisionHelper(n){const t=new ot(du,lu);t.position.copy(n),this.helpers.add(t)}addContactPointerHelper(n){const t=new ot(uu,fu);t.position.copy(n),this.helpers.add(t)}}const hu={iron_ingot:{input:he.ironOre.id,output:{id:he.iron_ingot.id,quantity:1}},glass:{input:he.sand.id,output:{id:he.glass.id,quantity:1}}};class mu{check(n){let t=null;return Object.values(es).forEach((i,r)=>{i.needed==(n==null?void 0:n.block)&&(t=i.gain)}),t}checkSmelting(n){console.log(n);for(const[t,i]of Object.entries(hu))if(n[0].block==i.input)return i.output;return null}}class _u{constructor(){xe(this,"fuelList",[he.coal.id]);xe(this,"output",2);xe(this,"fuel",1);xe(this,"input",0);this.smelting=new mu}handle(n){this.inventory=n;const t=this.smelting.checkSmelting(n);t&&this.checkFuel(n)?(n[this.output]={block:t.id,quantity:t.quantity},this.decreaseQuantity(this.fuel),this.decreaseQuantity(this.input)):n[this.output]=null}decreaseQuantity(n){this.inventory[n].quantity>1?this.inventory[n].quantity-=1:this.inventory[n]=null}checkFuel(n){var t;return!!this.fuelList.includes((t=n[this.fuel])==null?void 0:t.block)}}const gu=e=>{let n={};for(let t=0;t<e;t++)n[t]={type:"input"};return n},In={0:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"ouput"}},grid:2,id:0,name:"empty",visible:!1},61:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"ouput"}},grid:1,id:0,name:"empty",visible:!1},58:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"input"},5:{type:"input"},6:{type:"input"},7:{type:"input"},8:{type:"input"},9:{type:"ouput"}},grid:3,id:0,name:"empty",visible:!1},54:{slot:gu(27),grid:9,id:0,name:"empty",visible:!1}};class vu{constructor(n,t){this.player=n,this.inventory=t}open(n){this.player.controls.unlock(),this.inventory.show(n)}}class Eu{constructor(n,t){xe(this,"inventoryContainer",document.getElementById("inventory"));xe(this,"inventoryStockage",document.getElementById("stockage"));xe(this,"inventoryCrafter",document.getElementById("crafter"));xe(this,"inventoryOutput",document.getElementById("output"));xe(this,"bar",document.getElementById("bar"));xe(this,"selectedItemId",27);xe(this,"UIID",0);xe(this,"output",0);xe(this,"items",[{block:he.grass.id,quantity:20},{block:he.stone.id,quantity:20},{block:he.craftingTable.id,quantity:20},{block:he.planks.id,quantity:10},{block:he.log.id,quantity:10},{block:he.furnace.id,quantity:10},{block:he.chest.id,quantity:4},{block:he.glass.id,quantity:40},{block:he.stick.id,quantity:40}]);xe(this,"inventory",Array(41).fill(null));xe(this,"blockInventory",Array(41).fill(null));xe(this,"player",null);xe(this,"heldItem",null);xe(this,"heldItemElement",document.getElementById("held-item"));this.player=n,this.world=t,this.inventory[0]=this.items[2],this.inventory[1]=this.items[1],this.inventory[3]=this.items[8],this.inventory[27]=this.items[0],this.inventory[28]=this.items[3],this.inventory[29]=this.items[4],this.inventory[30]=this.items[5],this.inventory[31]=this.items[6],this.inventory[32]=this.items[7],this.inventory[33]=this.items[8],this.renderInventory(),this.renderBar(),document.addEventListener("mousemove",i=>{this.heldItem&&(this.heldItemElement.style.left=`${i.pageX-20}px`,this.heldItemElement.style.top=`${i.pageY-20}px`)}),this.recipes=new ts,this.furnace=new _u,document.addEventListener("keydown",this.onKeyDown.bind(this))}show(n=0){if(this.inventoryContainer.style.display="block",this.bar.style.display="none",this.UIID=n,console.log(this.player.selectedCoords),this.UIID){let t=this.world.getBlock(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z).inventory;console.log(t),t?this.blockInventory=t:this.blockInventory=Array(41).fill(null)}this.renderInventory()}hide(){this.inventoryContainer.style.display="none",this.bar.style.display="grid",this.renderBar(),this.UIID&&this.world.setBlockInventory(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z,this.blockInventory)}getBlock(n){return this.inventory[n]}getSelectedItem(){return this.inventory[this.selectedItemId]}selectItem(n){var t;if(n){document.querySelectorAll(".slot").forEach(a=>{a.classList.remove("selected")});const r=document.querySelector('.slot[data-index_bar="'+n+'"]');r&&(r.classList.add("selected"),this.selectedItemId=n),this.player.setBlockInHand((t=this.getBlock(n))==null?void 0:t.block)}}renderInventory(){var i;this.inventoryStockage.innerHTML="",this.inventoryCrafter.innerHTML="",this.inventoryOutput.innerHTML="",this.inventory.forEach((r,a)=>{const o=document.createElement("div");if(o.classList.add("slot"),o.dataset.index=a,r){const s=document.createElement("img"),_=document.createElement("div"),m=Object.values(he).find(E=>E.id===r.block);s.src=m.icon,s.alt=r.block,s.width=200,_.innerHTML=r.quantity,_.classList.add("slot-quantity"),o.appendChild(s),m.stackable&&o.appendChild(_)}o.addEventListener("mousedown",s=>this.handleSlotClick(a,s)),a<36&&this.inventoryStockage.appendChild(o)});const n=(i=In[this.UIID])==null?void 0:i.slot,t=In[this.UIID].grid;this.inventoryCrafter.style.gridTemplateColumns="repeat("+t+", 50px)";for(const r in n)if(n.hasOwnProperty(r)){const a=n[r],o=document.createElement("div");if(o.classList.add("slot"),o.dataset.index=a.name,this.blockInventory[r]!==null){const s=document.createElement("img"),_=document.createElement("div"),m=Object.values(he).find(E=>E.id===this.blockInventory[r].block);s.src=m.icon,s.alt=this.blockInventory[r].block,s.width=200,_.innerHTML=this.blockInventory[r].quantity,_.classList.add("slot-quantity"),o.appendChild(s),m.stackable&&o.appendChild(_)}o.addEventListener("mousedown",s=>this.handleSlotBlockClick(r,s)),n[r].type=="input"?this.inventoryCrafter.appendChild(o):(this.output=r,this.inventoryOutput.appendChild(o))}}renderBar(){this.bar.innerHTML="",this.inventory.forEach((n,t)=>{if(t>=27&&t<36){const i=document.createElement("div");if(i.classList.add("slot"),i.dataset.index_bar=t,t==this.selectedItemId&&i.classList.add("selected"),n){const r=document.createElement("img"),a=document.createElement("div"),o=Object.values(he).find(s=>s.id===n.block);r.src=o.icon,r.alt=n.block,r.width=200,a.innerHTML=n.quantity,a.classList.add("slot-quantity"),i.appendChild(r),o.stackable&&i.appendChild(a)}this.bar.appendChild(i)}})}inventoryToGrid(){var o,s,_;const n=In[this.UIID].grid;let t=[];for(let m=0;m<n;m++){const E=[];for(let g=0;g<n;g++)E.push(null);t.push(E)}const i=(o=In[this.UIID])==null?void 0:o.slot;let r=0,a=0;for(const m in i){if(a>=n&&(a=0,r++,r>=n))break;(s=this.blockInventory[m])!=null&&s.block?t[r][a]=(_=this.blockInventory[m])==null?void 0:_.block:t[r][a]=null,a++}return t}handleSlotClick(n,t){const i=this.inventory[n];if(this.heldItem)if(!i)t.button==0?(this.inventory[n]=this.heldItem,this.clearHeldItem()):(this.inventory[n]={...this.heldItem},this.inventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.inventory[n].block==this.heldItem.block&&ft(this.inventory[n].block).stackable)this.inventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem();else{[this.inventory[n],this.heldItem]=[this.heldItem,this.inventory[n]];const r=Object.values(he).find(a=>a.id===this.heldItem.block);this.heldItemElement.src=r.icon}else if(i)if(t.button==0){this.heldItem=this.inventory[n],this.inventory[n]=null;const r=Object.values(he).find(a=>a.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}else{this.heldItem={...this.inventory[n]},this.heldItem.quantity=Math.round(this.heldItem.quantity/2),this.inventory[n].quantity=Math.floor(this.inventory[n].quantity/2);const r=Object.values(he).find(a=>a.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}this.renderInventory()}handleSlotBlockClick(n,t){const i=this.blockInventory[n];if(this.heldItem){if(!i)t.button==0?n!=this.output&&(this.blockInventory[n]=this.heldItem,this.clearHeldItem()):(this.blockInventory[n]={...this.heldItem},this.blockInventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.blockInventory[n].block==this.heldItem.block&&ft(this.blockInventory[n].block).stackable)n==this.output?this.setHeldItem(this.heldItem.block,this.heldItem.quantity+=this.blockInventory[n].quantity):(this.blockInventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem());else if(n!=this.output){[this.blockInventory[n],this.heldItem]=[this.heldItem,this.blockInventory[n]];const r=Object.values(he).find(a=>a.id===this.heldItem.block);this.heldItemElement.src=r.icon}}else i&&(t.button==0?(this.setHeldItem(this.blockInventory[n].block,this.blockInventory[n].quantity),this.blockInventory[n]=null):(this.setHeldItem(this.blockInventory[n].block,Math.round(this.blockInventory[n].quantity/2)),this.blockInventory[n].quantity=Math.floor(this.blockInventory[n].quantity/2)));if(this.UIID==0||this.UIID==58){const r=this.recipes.checkRecipe(this.inventoryToGrid());r?this.blockInventory[this.output]={block:r.id,quantity:r.quantity}:this.blockInventory[this.output]=null}else this.UIID==he.furnace.id&&this.furnace.handle(this.blockInventory);this.renderInventory()}clearHeldItem(){this.heldItem=null,this.heldItemElement.style.display="none"}setHeldItem(n,t){this.heldItem={block:n,quantity:t};const i=ft(n);this.heldItemElement.src=i.icon,this.heldItemElement.style.display="block",t<1&&this.clearHeldItem()}addBlock(n){let t=!1;this.inventory.forEach((i,r)=>{r<36&&(i==null?void 0:i.block)==n&&(i.quantity+=1,t=!0)}),t||this.inventory.forEach((i,r)=>{r<36&&!t&&i==null&&(console.log(n),this.inventory[r]={quantity:1,block:n},t=!0)}),this.renderBar()}removeBlock(n){this.inventory.forEach((t,i)=>{i<36&&(t==null?void 0:t.block)==n&&(t.quantity-=1,t.quantity<=0&&(this.inventory[i]=null))}),this.renderBar()}save(){(async()=>{new Blob([JSON.stringify(this.inventory)]).size;const n=this.inventory;await Mu(n)})()}load(){(async()=>{const n=await Tu();this.inventory=n,this.renderBar()})()}onKeyDown(n){document.querySelectorAll(".item").forEach(i=>i.classList.remove("selected"));let t=null;n.code==="Digit1"&&(t=27),n.code==="Digit2"&&(t=28),n.code==="Digit3"&&(t=29),n.code==="Digit4"&&(t=30),n.code==="Digit5"&&(t=31),n.code==="Digit6"&&(t=32),n.code==="Digit7"&&(t=33),n.code==="Digit8"&&(t=34),n.code==="Digit9"&&(t=35),t&&this.selectItem(t)}}const Su="minecraftDB",xn="minecraftData";function ca(){return new Promise((e,n)=>{const t=indexedDB.open(Su,1);t.onupgradeneeded=function(i){i.target.result.createObjectStore(xn,{keyPath:"id"})},t.onsuccess=function(i){e(i.target.result)},t.onerror=function(i){n(i.target.error)}})}async function Mu(e){const t=(await ca()).transaction([xn],"readwrite");return t.objectStore(xn).put({id:"minecraft_inventory",data:e}),t.complete}async function Tu(){const e=await ca();return new Promise((n,t)=>{const a=e.transaction([xn],"readonly").objectStore(xn).get("minecraft_inventory");a.onsuccess=function(){var o;n(((o=a.result)==null?void 0:o.data)||null)},a.onerror=function(o){t(o.target.error)}})}class xu{constructor(n,t,i){this.world=n,this.player=t,this.inventory=i,document.getElementById("backToGame").addEventListener("click",()=>this.backToGame()),document.getElementById("save").addEventListener("click",()=>this.save()),document.getElementById("load").addEventListener("click",()=>this.load()),window.addEventListener("keydown",s=>{s.key==="Escape"&&this.openMenu()})}backToGame(){document.getElementById("menu").style.display="none",this.player.controls.lock(),this.inventory.hide()}openMenu(){document.getElementById("menu").style.display="block"}save(){this.world.save(),this.inventory.save(),this.player.save()}load(){this.world.load(),this.inventory.load(),this.player.load()}}const Dt=new ns,St=new iu;St.generate();Dt.add(St);Dt.fog=new is(8429792,St.chunkSize.width*St.drawDistance*.9,St.chunkSize.width*St.drawDistance);const Zt=new zf;Zt.setPixelRatio(window.devicePixelRatio);Zt.setSize(window.innerWidth,window.innerHeight);Zt.setClearColor(8429792);Zt.shadowMap.enabled=!0;Zt.shadowMap.type=ea;document.body.appendChild(Zt.domElement);const Au=document.getElementById("fps"),gt=new jf(Dt,St),Ru=new pu(Dt),An=new Eu(gt,St);new xu(St,gt,An);const bu=new vu(gt,An);gt.setInventory(An);gt.setUI(bu);const la=new cu;Dt.add(la);const Mi=new Hn,da=Mi.load("images/grass.png"),rn=Mi.load("images/grass_block_side.png"),fa=Mi.load("images/stone.png");[da,rn,fa].forEach(e=>{e.magFilter=yt,e.minFilter=yt});const Cu=[rn,rn,da,rn,rn,rn];Cu.map(e=>new Ft({map:e}));new Ft({map:fa});let dt;function yu(){dt=new rs,dt.intensity=1.5,dt.position.set(50,50,50),dt.castShadow=!0,dt.shadow.camera.left=-40,dt.shadow.camera.right=40,dt.shadow.camera.top=40,dt.shadow.camera.bottom=-40,dt.shadow.camera.near=.1,dt.shadow.camera.far=200,dt.shadow.bias=-1e-4,dt.shadow.mapSize=new pt(2048,2048),Dt.add(dt),Dt.add(dt.target);const e=new as;e.intensity=.2,Dt.add(e)}window.addEventListener("keydown",e=>{e.code==="KeyE"&&(gt.controls.isLocked?(gt.controls.unlock(),An.show()):(gt.controls.lock(),An.hide()))});Dt.background=new Ze(7254527);var oi=performance.now(),Or=0,si=0,Fr=0;const wu=new os;function ua(){const e=performance.now(),n=wu.getDelta();let t=(e-Fr)/1e3;Ru.update(t,gt,St),St.update(gt),gt.update(St),Fr=e,si++,e-oi>1e3&&(Or=Math.round(si*1e3/(e-oi)),Au.textContent=`FPS: ${Or}`,oi=e,si=0,dt.position.copy(gt.camera.position),dt.position.sub(new De(-50,-50,-50)),dt.target.position.copy(gt.camera.position)),la.movePig(n,St),Zt.render(Dt,gt.camera),requestAnimationFrame(ua)}yu();ua();document.addEventListener("contextmenu",function(e){e.preventDefault()},!1);
