var Ta=Object.defineProperty;var dr=t=>{throw TypeError(t)};var xa=(t,n,e)=>n in t?Ta(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var xe=(t,n,e)=>xa(t,typeof n!="symbol"?n+"":n,e),ba=(t,n,e)=>n.has(t)||dr("Cannot "+e);var Hn=(t,n,e)=>(ba(t,n,"read from private field"),e?e.call(t):n.get(t)),fr=(t,n,e)=>n.has(t)?dr("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,e);import{c as Aa,S as Ki,N as Xt,C as je,F as Ao,V as Ce,R as ya,W as gn,H as ai,U as nn,L as bn,a as st,D as Gt,B as Ct,b as wn,t as Ra,d as Ca,p as wa,w as fn,e as Pa,E as La,f as _t,P as Rn,g as Tt,A as Da,h as Vt,i as ni,j as $i,k as Pn,l as Ln,m as yo,n as Ia,M as Nt,o as si,q as Ua,r as Ve,s as Na,u as Oa,v as Fa,x as rn,y as Ro,z as $n,G as Je,I as Co,J as tn,K as Ht,O as It,Q as ii,T as Tn,X as Ba,Y as ka,Z as Ha,_ as Ga,$ as Va,a0 as za,a1 as Wa,a2 as Xa,a3 as qa,a4 as Ya,a5 as Ka,a6 as $a,a7 as Za,a8 as ja,a9 as Ja,aa as Qa,ab as es,ac as ts,ad as ns,ae as is,af as rs,ag as Gn,ah as pn,ai as pi,aj as os,ak as as,al as ss,am as wo,an as cs,ao as ls,ap as ds,aq as fs,ar as zt,as as Po,at as Lo,au as Do,av as ri,aw as Io,ax as Uo,ay as ci,az as pt,aA as ur,aB as Ze,aC as No,aD as Oo,aE as Fo,aF as en,aG as Di,aH as Ii,aI as us,aJ as Bo,aK as hs,aL as ps,aM as Zn,aN as ms,aO as _s,aP as hr,aQ as pr,aR as mr,aS as gs,aT as _r,aU as vs,aV as un,aW as gr,aX as Es,aY as Ss,aZ as Ms,a_ as Ts,a$ as xs,b0 as bs,b1 as As,b2 as ys,b3 as Rs,b4 as mi,b5 as _i,b6 as gi,b7 as vi,b8 as vr,b9 as Er,ba as Sr,bb as Mr,bc as Tr,bd as xr,be as br,bf as Ar,bg as yr,bh as Rr,bi as Cr,bj as wr,bk as Pr,bl as Lr,bm as Dr,bn as Ir,bo as Ur,bp as Nr,bq as Or,br as Fr,bs as Br,bt as Ei,bu as kr,bv as Hr,bw as Cs,bx as Gr,by as Vr,bz as zr,bA as ko,bB as St,bC as Dn,bD as In,bE as vn,bF as Wt,bG as ws,bH as Ps,bI as Ls,bJ as Wr,bK as Ds,bL as Ui,bM as Ni,bN as Oi,bO as Fi,bP as Bi,bQ as ki,bR as Hi,bS as Is,bT as Us,bU as Ho,bV as Ns,bW as Os,bX as Fs,bY as Bs,bZ as ks,b_ as Hs,b$ as Gs,c0 as Vs,c1 as Go,c2 as zs,c3 as Ws,c4 as Xs,c5 as qs,c6 as Ys,c7 as Ks,c8 as $s,c9 as Zs,ca as oi,cb as $e,cc as js,cd as ht,ce as Js,cf as pe,cg as Qs,ch as ec,ci as tc,cj as nc,ck as ic,cl as rc,cm as oc,cn as ac,co as sc,cp as cc,cq as lc}from"./recipes-DZrZy5gB.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vo(){let t=null,n=!1,e=null,i=null;function r(o,a){e(o,a),i=t.requestAnimationFrame(r)}return{start:function(){n!==!0&&e!==null&&(i=t.requestAnimationFrame(r),n=!0)},stop:function(){t.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){e=o},setContext:function(o){t=o}}}function dc(t){const n=new WeakMap;function e(s,p){const m=s.array,g=s.usage,v=m.byteLength,E=t.createBuffer();t.bindBuffer(p,E),t.bufferData(p,m,g),s.onUploadCallback();let M;if(m instanceof Float32Array)M=t.FLOAT;else if(m instanceof Uint16Array)s.isFloat16BufferAttribute?M=t.HALF_FLOAT:M=t.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=t.SHORT;else if(m instanceof Uint32Array)M=t.UNSIGNED_INT;else if(m instanceof Int32Array)M=t.INT;else if(m instanceof Int8Array)M=t.BYTE;else if(m instanceof Uint8Array)M=t.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:E,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:s.version,size:v}}function i(s,p,m){const g=p.array,v=p.updateRanges;if(t.bindBuffer(m,s),v.length===0)t.bufferSubData(m,0,g);else{v.sort((M,D)=>M.start-D.start);let E=0;for(let M=1;M<v.length;M++){const D=v[E],C=v[M];C.start<=D.start+D.count+1?D.count=Math.max(D.count,C.start+C.count-D.start):(++E,v[E]=C)}v.length=E+1;for(let M=0,D=v.length;M<D;M++){const C=v[M];t.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const p=n.get(s);p&&(t.deleteBuffer(p.buffer),n.delete(s))}function a(s,p){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const g=n.get(s);(!g||g.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const m=n.get(s);if(m===void 0)n.set(s,e(s,p));else if(m.version<s.version){if(m.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(m.buffer,s,p),m.version=s.version}}return{get:r,remove:o,update:a}}var fc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uc=`#ifdef USE_ALPHAHASH
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
#endif`,hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_c=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gc=`#ifdef USE_AOMAP
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
#endif`,vc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ec=`#ifdef USE_BATCHING
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
#endif`,Sc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bc=`#ifdef USE_IRIDESCENCE
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
#endif`,Ac=`#ifdef USE_BUMPMAP
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
#endif`,yc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ic=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uc=`#define PI 3.141592653589793
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
} // validated`,Nc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oc=`vec3 transformedNormal = objectNormal;
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
#endif`,Fc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zc=`#ifdef USE_ENVMAP
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
#endif`,Wc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xc=`#ifdef USE_ENVMAP
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
#endif`,qc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yc=`#ifdef USE_ENVMAP
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
#endif`,Kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$c=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jc=`#ifdef USE_GRADIENTMAP
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
}`,Qc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,el=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nl=`uniform bool receiveShadow;
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
#endif`,il=`#ifdef USE_ENVMAP
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
#endif`,rl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ol=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,al=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cl=`PhysicalMaterial material;
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
#endif`,ll=`struct PhysicalMaterial {
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
}`,dl=`
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
#endif`,fl=`#if defined( RE_IndirectDiffuse )
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
#endif`,ul=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pl=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ml=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_l=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,El=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sl=`#if defined( USE_POINTS_UV )
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
#endif`,Ml=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Al=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yl=`#ifdef USE_MORPHTARGETS
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
#endif`,Rl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ll=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Il=`#ifdef USE_NORMALMAP
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
#endif`,Ul=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ol=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kl=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ql=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$l=`float getShadowMask() {
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
}`,Zl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jl=`#ifdef USE_SKINNING
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
#endif`,Jl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ql=`#ifdef USE_SKINNING
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
#endif`,ed=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`#include <common>
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
}`,gd=`#if DEPTH_PACKING == 3200
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
}`,vd=`#define DISTANCE
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
}`,Ed=`#define DISTANCE
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Td=`uniform float scale;
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
}`,xd=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Ad=`uniform vec3 diffuse;
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
}`,yd=`#define LAMBERT
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define MATCAP
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
}`,wd=`#define MATCAP
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
}`,Pd=`#define NORMAL
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
}`,Ld=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Id=`#define PHONG
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
}`,Ud=`#define STANDARD
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
}`,Nd=`#define STANDARD
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
}`,Od=`#define TOON
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
}`,Fd=`#define TOON
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
}`,Bd=`uniform float size;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,Gd=`uniform vec3 color;
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
}`,Vd=`uniform float rotation;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:fc,alphahash_pars_fragment:uc,alphamap_fragment:hc,alphamap_pars_fragment:pc,alphatest_fragment:mc,alphatest_pars_fragment:_c,aomap_fragment:gc,aomap_pars_fragment:vc,batching_pars_vertex:Ec,batching_vertex:Sc,begin_vertex:Mc,beginnormal_vertex:Tc,bsdfs:xc,iridescence_fragment:bc,bumpmap_pars_fragment:Ac,clipping_planes_fragment:yc,clipping_planes_pars_fragment:Rc,clipping_planes_pars_vertex:Cc,clipping_planes_vertex:wc,color_fragment:Pc,color_pars_fragment:Lc,color_pars_vertex:Dc,color_vertex:Ic,common:Uc,cube_uv_reflection_fragment:Nc,defaultnormal_vertex:Oc,displacementmap_pars_vertex:Fc,displacementmap_vertex:Bc,emissivemap_fragment:kc,emissivemap_pars_fragment:Hc,colorspace_fragment:Gc,colorspace_pars_fragment:Vc,envmap_fragment:zc,envmap_common_pars_fragment:Wc,envmap_pars_fragment:Xc,envmap_pars_vertex:qc,envmap_physical_pars_fragment:il,envmap_vertex:Yc,fog_vertex:Kc,fog_pars_vertex:$c,fog_fragment:Zc,fog_pars_fragment:jc,gradientmap_pars_fragment:Jc,lightmap_pars_fragment:Qc,lights_lambert_fragment:el,lights_lambert_pars_fragment:tl,lights_pars_begin:nl,lights_toon_fragment:rl,lights_toon_pars_fragment:ol,lights_phong_fragment:al,lights_phong_pars_fragment:sl,lights_physical_fragment:cl,lights_physical_pars_fragment:ll,lights_fragment_begin:dl,lights_fragment_maps:fl,lights_fragment_end:ul,logdepthbuf_fragment:hl,logdepthbuf_pars_fragment:pl,logdepthbuf_pars_vertex:ml,logdepthbuf_vertex:_l,map_fragment:gl,map_pars_fragment:vl,map_particle_fragment:El,map_particle_pars_fragment:Sl,metalnessmap_fragment:Ml,metalnessmap_pars_fragment:Tl,morphinstance_vertex:xl,morphcolor_vertex:bl,morphnormal_vertex:Al,morphtarget_pars_vertex:yl,morphtarget_vertex:Rl,normal_fragment_begin:Cl,normal_fragment_maps:wl,normal_pars_fragment:Pl,normal_pars_vertex:Ll,normal_vertex:Dl,normalmap_pars_fragment:Il,clearcoat_normal_fragment_begin:Ul,clearcoat_normal_fragment_maps:Nl,clearcoat_pars_fragment:Ol,iridescence_pars_fragment:Fl,opaque_fragment:Bl,packing:kl,premultiplied_alpha_fragment:Hl,project_vertex:Gl,dithering_fragment:Vl,dithering_pars_fragment:zl,roughnessmap_fragment:Wl,roughnessmap_pars_fragment:Xl,shadowmap_pars_fragment:ql,shadowmap_pars_vertex:Yl,shadowmap_vertex:Kl,shadowmask_pars_fragment:$l,skinbase_vertex:Zl,skinning_pars_vertex:jl,skinning_vertex:Jl,skinnormal_vertex:Ql,specularmap_fragment:ed,specularmap_pars_fragment:td,tonemapping_fragment:nd,tonemapping_pars_fragment:id,transmission_fragment:rd,transmission_pars_fragment:od,uv_pars_fragment:ad,uv_pars_vertex:sd,uv_vertex:cd,worldpos_vertex:ld,background_vert:dd,background_frag:fd,backgroundCube_vert:ud,backgroundCube_frag:hd,cube_vert:pd,cube_frag:md,depth_vert:_d,depth_frag:gd,distanceRGBA_vert:vd,distanceRGBA_frag:Ed,equirect_vert:Sd,equirect_frag:Md,linedashed_vert:Td,linedashed_frag:xd,meshbasic_vert:bd,meshbasic_frag:Ad,meshlambert_vert:yd,meshlambert_frag:Rd,meshmatcap_vert:Cd,meshmatcap_frag:wd,meshnormal_vert:Pd,meshnormal_frag:Ld,meshphong_vert:Dd,meshphong_frag:Id,meshphysical_vert:Ud,meshphysical_frag:Nd,meshtoon_vert:Od,meshtoon_frag:Fd,points_vert:Bd,points_frag:kd,shadow_vert:Hd,shadow_frag:Gd,sprite_vert:Vd,sprite_frag:zd},ee={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ut={basic:{uniforms:St([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:St([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:St([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:St([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:St([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:St([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:St([ee.points,ee.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:St([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:St([ee.common,ee.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:St([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:St([ee.sprite,ee.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:St([ee.common,ee.displacementmap,{referencePosition:{value:new Ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:St([ee.lights,ee.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Ut.physical={uniforms:St([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Vn={r:0,b:0,g:0},Zt=new Dn,Wd=new Nt;function Xd(t,n,e,i,r,o,a){const s=new je(0);let p=o===!0?0:1,m,g,v=null,E=0,M=null;function D(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?e:n).get(T)),T}function C(y){let T=!1;const H=D(y);H===null?c(s,p):H&&H.isColor&&(c(H,1),T=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(y,T){const H=D(T);H&&(H.isCubeTexture||H.mapping===ci)?(g===void 0&&(g=new Je(new pt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:ur(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Zt.copy(T.backgroundRotation),Zt.x*=-1,Zt.y*=-1,Zt.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Zt.y*=-1,Zt.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Wd.makeRotationFromEuler(Zt)),g.material.toneMapped=st.getTransfer(H.colorSpace)!==Ze,(v!==H||E!==H.version||M!==t.toneMapping)&&(g.material.needsUpdate=!0,v=H,E=H.version,M=t.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new Je(new No(2,2),new rn({name:"BackgroundMaterial",uniforms:ur(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=st.getTransfer(H.colorSpace)!==Ze,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||E!==H.version||M!==t.toneMapping)&&(m.material.needsUpdate=!0,v=H,E=H.version,M=t.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null))}function c(y,T){y.getRGB(Vn,Oo(t)),i.buffers.color.setClear(Vn.r,Vn.g,Vn.b,T,a)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(y,T=1){s.set(y),p=T,c(s,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,c(s,p)},render:C,addToRenderList:f,dispose:I}}function qd(t,n){const e=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=E(null);let o=r,a=!1;function s(u,R,Y,G,q){let j=!1;const z=v(G,Y,R);o!==z&&(o=z,m(o.object)),j=M(u,G,Y,q),j&&D(u,G,Y,q),q!==null&&n.update(q,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,T(u,R,Y,G),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function p(){return t.createVertexArray()}function m(u){return t.bindVertexArray(u)}function g(u){return t.deleteVertexArray(u)}function v(u,R,Y){const G=Y.wireframe===!0;let q=i[u.id];q===void 0&&(q={},i[u.id]=q);let j=q[R.id];j===void 0&&(j={},q[R.id]=j);let z=j[G];return z===void 0&&(z=E(p()),j[G]=z),z}function E(u){const R=[],Y=[],G=[];for(let q=0;q<e;q++)R[q]=0,Y[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:Y,attributeDivisors:G,object:u,attributes:{},index:null}}function M(u,R,Y,G){const q=o.attributes,j=R.attributes;let z=0;const Q=Y.getAttributes();for(const F in Q)if(Q[F].location>=0){const Te=q[F];let De=j[F];if(De===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(De=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(De=u.instanceColor)),Te===void 0||Te.attribute!==De||De&&Te.data!==De.data)return!0;z++}return o.attributesNum!==z||o.index!==G}function D(u,R,Y,G){const q={},j=R.attributes;let z=0;const Q=Y.getAttributes();for(const F in Q)if(Q[F].location>=0){let Te=j[F];Te===void 0&&(F==="instanceMatrix"&&u.instanceMatrix&&(Te=u.instanceMatrix),F==="instanceColor"&&u.instanceColor&&(Te=u.instanceColor));const De={};De.attribute=Te,Te&&Te.data&&(De.data=Te.data),q[F]=De,z++}o.attributes=q,o.attributesNum=z,o.index=G}function C(){const u=o.newAttributes;for(let R=0,Y=u.length;R<Y;R++)u[R]=0}function f(u){c(u,0)}function c(u,R){const Y=o.newAttributes,G=o.enabledAttributes,q=o.attributeDivisors;Y[u]=1,G[u]===0&&(t.enableVertexAttribArray(u),G[u]=1),q[u]!==R&&(t.vertexAttribDivisor(u,R),q[u]=R)}function I(){const u=o.newAttributes,R=o.enabledAttributes;for(let Y=0,G=R.length;Y<G;Y++)R[Y]!==u[Y]&&(t.disableVertexAttribArray(Y),R[Y]=0)}function y(u,R,Y,G,q,j,z){z===!0?t.vertexAttribIPointer(u,R,Y,q,j):t.vertexAttribPointer(u,R,Y,G,q,j)}function T(u,R,Y,G){C();const q=G.attributes,j=Y.getAttributes(),z=R.defaultAttributeValues;for(const Q in j){const F=j[Q];if(F.location>=0){let _e=q[Q];if(_e===void 0&&(Q==="instanceMatrix"&&u.instanceMatrix&&(_e=u.instanceMatrix),Q==="instanceColor"&&u.instanceColor&&(_e=u.instanceColor)),_e!==void 0){const Te=_e.normalized,De=_e.itemSize,ze=n.get(_e);if(ze===void 0)continue;const nt=ze.buffer,V=ze.type,J=ze.bytesPerElement,ue=V===t.INT||V===t.UNSIGNED_INT||_e.gpuType===Fo;if(_e.isInterleavedBufferAttribute){const ie=_e.data,Me=ie.stride,ye=_e.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)c(F.location+Ie,ie.meshPerAttribute);u.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)f(F.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let Ie=0;Ie<F.locationSize;Ie++)y(F.location+Ie,De/F.locationSize,V,Te,Me*J,(ye+De/F.locationSize*Ie)*J,ue)}else{if(_e.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)c(F.location+ie,_e.meshPerAttribute);u.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ie=0;ie<F.locationSize;ie++)f(F.location+ie);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ie=0;ie<F.locationSize;ie++)y(F.location+ie,De/F.locationSize,V,Te,De*J,De/F.locationSize*ie*J,ue)}}else if(z!==void 0){const Te=z[Q];if(Te!==void 0)switch(Te.length){case 2:t.vertexAttrib2fv(F.location,Te);break;case 3:t.vertexAttrib3fv(F.location,Te);break;case 4:t.vertexAttrib4fv(F.location,Te);break;default:t.vertexAttrib1fv(F.location,Te)}}}}I()}function H(){B();for(const u in i){const R=i[u];for(const Y in R){const G=R[Y];for(const q in G)g(G[q].object),delete G[q];delete R[Y]}delete i[u]}}function P(u){if(i[u.id]===void 0)return;const R=i[u.id];for(const Y in R){const G=R[Y];for(const q in G)g(G[q].object),delete G[q];delete R[Y]}delete i[u.id]}function N(u){for(const R in i){const Y=i[R];if(Y[u.id]===void 0)continue;const G=Y[u.id];for(const q in G)g(G[q].object),delete G[q];delete Y[u.id]}}function B(){_(),a=!0,o!==r&&(o=r,m(o.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:B,resetDefaultState:_,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:f,disableUnusedAttributes:I}}function Yd(t,n,e){let i;function r(m){i=m}function o(m,g){t.drawArrays(i,m,g),e.update(g,i,1)}function a(m,g,v){v!==0&&(t.drawArraysInstanced(i,m,g,v),e.update(g,i,v))}function s(m,g,v){if(v===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,m,0,g,0,v);let M=0;for(let D=0;D<v;D++)M+=g[D];e.update(M,i,1)}function p(m,g,v,E){if(v===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let D=0;D<m.length;D++)a(m[D],g[D],E[D]);else{M.multiDrawArraysInstancedWEBGL(i,m,0,g,0,E,0,v);let D=0;for(let C=0;C<v;C++)D+=g[C]*E[C];e.update(D,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=p}function Kd(t,n,e,i){let r;function o(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==Vt&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(N){const B=N===ai&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==nn&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==en&&!B)}function p(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=e.precision!==void 0?e.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=e.logarithmicDepthBuffer===!0,E=e.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),D=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),I=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),H=D>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:a,textureTypeReadable:s,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:E,maxTextures:M,maxVertexTextures:D,maxTextureSize:C,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:I,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:H,maxSamples:P}}function $d(t){const n=this;let e=null,i=0,r=!1,o=!1;const a=new Ua,s=new Ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,E){const M=v.length!==0||E||i!==0||r;return r=E,i=v.length,M},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,E){e=g(v,E,0)},this.setState=function(v,E,M){const D=v.clippingPlanes,C=v.clipIntersection,f=v.clipShadows,c=t.get(v);if(!r||D===null||D.length===0||o&&!f)o?g(null):m();else{const I=o?0:i,y=I*4;let T=c.clippingState||null;p.value=T,T=g(D,E,y,M);for(let H=0;H!==y;++H)T[H]=e[H];c.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function g(v,E,M,D){const C=v!==null?v.length:0;let f=null;if(C!==0){if(f=p.value,D!==!0||f===null){const c=M+C*4,I=E.matrixWorldInverse;s.getNormalMatrix(I),(f===null||f.length<c)&&(f=new Float32Array(c));for(let y=0,T=M;y!==C;++y,T+=4)a.copy(v[y]).applyMatrix4(I,s),a.normal.toArray(f,T),f[T+3]=a.constant}p.value=f,p.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,f}}function Zd(t){let n=new WeakMap;function e(a,s){return s===Di?a.mapping=In:s===Ii&&(a.mapping=vn),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Di||s===Ii)if(n.has(a)){const p=n.get(a).texture;return e(p,a.mapping)}else{const p=a.image;if(p&&p.height>0){const m=new us(p.height);return m.fromEquirectangularTexture(t,a),n.set(a,m),a.addEventListener("dispose",r),e(m.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const p=n.get(s);p!==void 0&&(n.delete(s),p.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const mn=4,Xr=[.125,.215,.35,.446,.526,.582],Qt=20,Si=new Ns,qr=new je;let Mi=null,Ti=0,xi=0,bi=!1;const Jt=(1+Math.sqrt(5))/2,sn=1/Jt,Yr=[new Ce(-Jt,sn,0),new Ce(Jt,sn,0),new Ce(-sn,0,Jt),new Ce(sn,0,Jt),new Ce(0,Jt,-sn),new Ce(0,Jt,sn),new Ce(-1,1,-1),new Ce(1,1,-1),new Ce(-1,1,1),new Ce(1,1,1)];class Kr{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,e=0,i=.1,r=100){Mi=this._renderer.getRenderTarget(),Ti=this._renderer.getActiveCubeFace(),xi=this._renderer.getActiveMipmapLevel(),bi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,e=null){return this._fromTexture(n,e)}fromCubemap(n,e=null){return this._fromTexture(n,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Mi,Ti,xi),this._renderer.xr.enabled=bi,n.scissorTest=!1,zn(n,0,0,n.width,n.height)}_fromTexture(n,e){n.mapping===In||n.mapping===vn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Mi=this._renderer.getRenderTarget(),Ti=this._renderer.getActiveCubeFace(),xi=this._renderer.getActiveMipmapLevel(),bi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ai,format:Vt,colorSpace:si,depthBuffer:!1},r=$r(n,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$r(n,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jd(o)),this._blurMaterial=Jd(o,n,e)}return r}_compileMaterial(n){const e=new Je(this._lodPlanes[0],n);this._renderer.compile(e,Si)}_sceneToCubeUV(n,e,i,r){const s=new Rn(90,1,e,i),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,E=g.toneMapping;g.getClearColor(qr),g.toneMapping=Xt,g.autoClear=!1;const M=new Wt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),D=new Je(new pt,M);let C=!1;const f=n.background;f?f.isColor&&(M.color.copy(f),n.background=null,C=!0):(M.color.copy(qr),C=!0);for(let c=0;c<6;c++){const I=c%3;I===0?(s.up.set(0,p[c],0),s.lookAt(m[c],0,0)):I===1?(s.up.set(0,0,p[c]),s.lookAt(0,m[c],0)):(s.up.set(0,p[c],0),s.lookAt(0,0,m[c]));const y=this._cubeSize;zn(r,I*y,c>2?y:0,y,y),g.setRenderTarget(r),C&&g.render(D,s),g.render(n,s)}D.geometry.dispose(),D.material.dispose(),g.toneMapping=E,g.autoClear=v,n.background=f}_textureToCubeUV(n,e){const i=this._renderer,r=n.mapping===In||n.mapping===vn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jr()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zr());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=n;const p=this._cubeSize;zn(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(a,Si)}_applyPMREM(n){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Yr[(r-o-1)%Yr.length];this._blur(n,o-1,o,a,s)}e.autoClear=i}_blur(n,e,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(n,a,e,i,r,"latitudinal",o),this._halfBlur(a,n,i,i,r,"longitudinal",o)}_halfBlur(n,e,i,r,o,a,s){const p=this._renderer,m=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Je(this._lodPlanes[r],m),E=m.uniforms,M=this._sizeLods[i]-1,D=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Qt-1),C=o/D,f=isFinite(o)?1+Math.floor(g*C):Qt;f>Qt&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qt}`);const c=[];let I=0;for(let N=0;N<Qt;++N){const B=N/C,_=Math.exp(-B*B/2);c.push(_),N===0?I+=_:N<f&&(I+=2*_)}for(let N=0;N<c.length;N++)c[N]=c[N]/I;E.envMap.value=n.texture,E.samples.value=f,E.weights.value=c,E.latitudinal.value=a==="latitudinal",s&&(E.poleAxis.value=s);const{_lodMax:y}=this;E.dTheta.value=D,E.mipInt.value=y-i;const T=this._sizeLods[r],H=3*T*(r>y-mn?r-y+mn:0),P=4*(this._cubeSize-T);zn(e,H,P,3*T,2*T),p.setRenderTarget(e),p.render(v,Si)}}function jd(t){const n=[],e=[],i=[];let r=t;const o=t-mn+1+Xr.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);e.push(s);let p=1/s;a>t-mn?p=Xr[a-t+mn-1]:a===0&&(p=0),i.push(p);const m=1/(s-2),g=-m,v=1+m,E=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,D=6,C=3,f=2,c=1,I=new Float32Array(C*D*M),y=new Float32Array(f*D*M),T=new Float32Array(c*D*M);for(let P=0;P<M;P++){const N=P%3*2/3-1,B=P>2?0:-1,_=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];I.set(_,C*D*P),y.set(E,f*D*P);const u=[P,P,P,P,P,P];T.set(u,c*D*P)}const H=new Ro;H.setAttribute("position",new $n(I,C)),H.setAttribute("uv",new $n(y,f)),H.setAttribute("faceIndex",new $n(T,c)),n.push(H),r>mn&&r--}return{lodPlanes:n,sizeLods:e,sigmas:i}}function $r(t,n,e){const i=new gn(t,n,e);return i.texture.mapping=ci,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zn(t,n,e,i,r){t.viewport.set(n,e,i,r),t.scissor.set(n,e,i,r)}function Jd(t,n,e){const i=new Float32Array(Qt),r=new Ce(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zi(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Zr(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zi(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function jr(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Zi(){return`

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
	`}function Qd(t){let n=new WeakMap,e=null;function i(s){if(s&&s.isTexture){const p=s.mapping,m=p===Di||p===Ii,g=p===In||p===vn;if(m||g){let v=n.get(s);const E=v!==void 0?v.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==E)return e===null&&(e=new Kr(t)),v=m?e.fromEquirectangular(s,v):e.fromCubemap(s,v),v.texture.pmremVersion=s.pmremVersion,n.set(s,v),v.texture;if(v!==void 0)return v.texture;{const M=s.image;return m&&M&&M.height>0||g&&M&&r(M)?(e===null&&(e=new Kr(t)),v=m?e.fromEquirectangular(s):e.fromCubemap(s),v.texture.pmremVersion=s.pmremVersion,n.set(s,v),s.addEventListener("dispose",o),v.texture):null}}}return s}function r(s){let p=0;const m=6;for(let g=0;g<m;g++)s[g]!==void 0&&p++;return p===m}function o(s){const p=s.target;p.removeEventListener("dispose",o);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function a(){n=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ef(t){const n={};function e(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return n[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&fn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tf(t,n,e,i){const r={},o=new WeakMap;function a(v){const E=v.target;E.index!==null&&n.remove(E.index);for(const D in E.attributes)n.remove(E.attributes[D]);E.removeEventListener("dispose",a),delete r[E.id];const M=o.get(E);M&&(n.remove(M),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,e.memory.geometries--}function s(v,E){return r[E.id]===!0||(E.addEventListener("dispose",a),r[E.id]=!0,e.memory.geometries++),E}function p(v){const E=v.attributes;for(const M in E)n.update(E[M],t.ARRAY_BUFFER)}function m(v){const E=[],M=v.index,D=v.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let y=0,T=I.length;y<T;y+=3){const H=I[y+0],P=I[y+1],N=I[y+2];E.push(H,P,P,N,N,H)}}else if(D!==void 0){const I=D.array;C=D.version;for(let y=0,T=I.length/3-1;y<T;y+=3){const H=y+0,P=y+1,N=y+2;E.push(H,P,P,N,N,H)}}else return;const f=new(ws(E)?Ps:Ls)(E,1);f.version=C;const c=o.get(v);c&&n.remove(c),o.set(v,f)}function g(v){const E=o.get(v);if(E){const M=v.index;M!==null&&E.version<M.version&&m(v)}else m(v);return o.get(v)}return{get:s,update:p,getWireframeAttribute:g}}function nf(t,n,e){let i;function r(E){i=E}let o,a;function s(E){o=E.type,a=E.bytesPerElement}function p(E,M){t.drawElements(i,M,o,E*a),e.update(M,i,1)}function m(E,M,D){D!==0&&(t.drawElementsInstanced(i,M,o,E*a,D),e.update(M,i,D))}function g(E,M,D){if(D===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,M,0,o,E,0,D);let f=0;for(let c=0;c<D;c++)f+=M[c];e.update(f,i,1)}function v(E,M,D,C){if(D===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<E.length;c++)m(E[c]/a,M[c],C[c]);else{f.multiDrawElementsInstancedWEBGL(i,M,0,o,E,0,C,0,D);let c=0;for(let I=0;I<D;I++)c+=M[I]*C[I];e.update(c,i,1)}}this.setMode=r,this.setIndex=s,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function rf(t){const n={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(e.calls++,a){case t.TRIANGLES:e.triangles+=s*(o/3);break;case t.LINES:e.lines+=s*(o/2);break;case t.LINE_STRIP:e.lines+=s*(o-1);break;case t.LINE_LOOP:e.lines+=s*o;break;case t.POINTS:e.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:n,render:e,programs:null,autoReset:!0,reset:r,update:i}}function of(t,n,e){const i=new WeakMap,r=new Tt;function o(a,s,p){const m=a.morphTargetInfluences,g=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,v=g!==void 0?g.length:0;let E=i.get(s);if(E===void 0||E.count!==v){let _=function(){N.dispose(),i.delete(s),s.removeEventListener("dispose",_)};E!==void 0&&E.texture.dispose();const M=s.morphAttributes.position!==void 0,D=s.morphAttributes.normal!==void 0,C=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],c=s.morphAttributes.normal||[],I=s.morphAttributes.color||[];let y=0;M===!0&&(y=1),D===!0&&(y=2),C===!0&&(y=3);let T=s.attributes.position.count*y,H=1;T>n.maxTextureSize&&(H=Math.ceil(T/n.maxTextureSize),T=n.maxTextureSize);const P=new Float32Array(T*H*4*v),N=new Bo(P,T,H,v);N.type=en,N.needsUpdate=!0;const B=y*4;for(let u=0;u<v;u++){const R=f[u],Y=c[u],G=I[u],q=T*H*4*u;for(let j=0;j<R.count;j++){const z=j*B;M===!0&&(r.fromBufferAttribute(R,j),P[q+z+0]=r.x,P[q+z+1]=r.y,P[q+z+2]=r.z,P[q+z+3]=0),D===!0&&(r.fromBufferAttribute(Y,j),P[q+z+4]=r.x,P[q+z+5]=r.y,P[q+z+6]=r.z,P[q+z+7]=0),C===!0&&(r.fromBufferAttribute(G,j),P[q+z+8]=r.x,P[q+z+9]=r.y,P[q+z+10]=r.z,P[q+z+11]=G.itemSize===4?r.w:1)}}E={count:v,texture:N,size:new _t(T,H)},i.set(s,E),s.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)p.getUniforms().setValue(t,"morphTexture",a.morphTexture,e);else{let M=0;for(let C=0;C<m.length;C++)M+=m[C];const D=s.morphTargetsRelative?1:1-M;p.getUniforms().setValue(t,"morphTargetBaseInfluence",D),p.getUniforms().setValue(t,"morphTargetInfluences",m)}p.getUniforms().setValue(t,"morphTargetsTexture",E.texture,e),p.getUniforms().setValue(t,"morphTargetsTextureSize",E.size)}return{update:o}}function af(t,n,e,i){let r=new WeakMap;function o(p){const m=i.render.frame,g=p.geometry,v=n.get(p,g);if(r.get(v)!==m&&(n.update(v),r.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",s)===!1&&p.addEventListener("dispose",s),r.get(p)!==m&&(e.update(p.instanceMatrix,t.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,t.ARRAY_BUFFER),r.set(p,m))),p.isSkinnedMesh){const E=p.skeleton;r.get(E)!==m&&(E.update(),r.set(E,m))}return v}function a(){r=new WeakMap}function s(p){const m=p.target;m.removeEventListener("dispose",s),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:o,dispose:a}}const zo=new ko,Jr=new yo(1,1),Wo=new Bo,Xo=new Ws,qo=new Xs,Qr=[],eo=[],to=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function En(t,n,e){const i=t[0];if(i<=0||i>0)return t;const r=n*e;let o=Qr[r];if(o===void 0&&(o=new Float32Array(r),Qr[r]=o),n!==0){i.toArray(o,0);for(let a=1,s=0;a!==n;++a)s+=e,t[a].toArray(o,s)}return o}function lt(t,n){if(t.length!==n.length)return!1;for(let e=0,i=t.length;e<i;e++)if(t[e]!==n[e])return!1;return!0}function dt(t,n){for(let e=0,i=n.length;e<i;e++)t[e]=n[e]}function li(t,n){let e=eo[n];e===void 0&&(e=new Int32Array(n),eo[n]=e);for(let i=0;i!==n;++i)e[i]=t.allocateTextureUnit();return e}function sf(t,n){const e=this.cache;e[0]!==n&&(t.uniform1f(this.addr,n),e[0]=n)}function cf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2f(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(lt(e,n))return;t.uniform2fv(this.addr,n),dt(e,n)}}function lf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3f(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else if(n.r!==void 0)(e[0]!==n.r||e[1]!==n.g||e[2]!==n.b)&&(t.uniform3f(this.addr,n.r,n.g,n.b),e[0]=n.r,e[1]=n.g,e[2]=n.b);else{if(lt(e,n))return;t.uniform3fv(this.addr,n),dt(e,n)}}function df(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4f(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(lt(e,n))return;t.uniform4fv(this.addr,n),dt(e,n)}}function ff(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(lt(e,n))return;t.uniformMatrix2fv(this.addr,!1,n),dt(e,n)}else{if(lt(e,i))return;io.set(i),t.uniformMatrix2fv(this.addr,!1,io),dt(e,i)}}function uf(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(lt(e,n))return;t.uniformMatrix3fv(this.addr,!1,n),dt(e,n)}else{if(lt(e,i))return;no.set(i),t.uniformMatrix3fv(this.addr,!1,no),dt(e,i)}}function hf(t,n){const e=this.cache,i=n.elements;if(i===void 0){if(lt(e,n))return;t.uniformMatrix4fv(this.addr,!1,n),dt(e,n)}else{if(lt(e,i))return;to.set(i),t.uniformMatrix4fv(this.addr,!1,to),dt(e,i)}}function pf(t,n){const e=this.cache;e[0]!==n&&(t.uniform1i(this.addr,n),e[0]=n)}function mf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2i(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(lt(e,n))return;t.uniform2iv(this.addr,n),dt(e,n)}}function _f(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3i(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(lt(e,n))return;t.uniform3iv(this.addr,n),dt(e,n)}}function gf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4i(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(lt(e,n))return;t.uniform4iv(this.addr,n),dt(e,n)}}function vf(t,n){const e=this.cache;e[0]!==n&&(t.uniform1ui(this.addr,n),e[0]=n)}function Ef(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y)&&(t.uniform2ui(this.addr,n.x,n.y),e[0]=n.x,e[1]=n.y);else{if(lt(e,n))return;t.uniform2uiv(this.addr,n),dt(e,n)}}function Sf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z)&&(t.uniform3ui(this.addr,n.x,n.y,n.z),e[0]=n.x,e[1]=n.y,e[2]=n.z);else{if(lt(e,n))return;t.uniform3uiv(this.addr,n),dt(e,n)}}function Mf(t,n){const e=this.cache;if(n.x!==void 0)(e[0]!==n.x||e[1]!==n.y||e[2]!==n.z||e[3]!==n.w)&&(t.uniform4ui(this.addr,n.x,n.y,n.z,n.w),e[0]=n.x,e[1]=n.y,e[2]=n.z,e[3]=n.w);else{if(lt(e,n))return;t.uniform4uiv(this.addr,n),dt(e,n)}}function Tf(t,n,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Jr.compareFunction=wo,o=Jr):o=zo,e.setTexture2D(n||o,r)}function xf(t,n,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(n||Xo,r)}function bf(t,n,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(n||qo,r)}function Af(t,n,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(n||Wo,r)}function yf(t){switch(t){case 5126:return sf;case 35664:return cf;case 35665:return lf;case 35666:return df;case 35674:return ff;case 35675:return uf;case 35676:return hf;case 5124:case 35670:return pf;case 35667:case 35671:return mf;case 35668:case 35672:return _f;case 35669:case 35673:return gf;case 5125:return vf;case 36294:return Ef;case 36295:return Sf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return Af}}function Rf(t,n){t.uniform1fv(this.addr,n)}function Cf(t,n){const e=En(n,this.size,2);t.uniform2fv(this.addr,e)}function wf(t,n){const e=En(n,this.size,3);t.uniform3fv(this.addr,e)}function Pf(t,n){const e=En(n,this.size,4);t.uniform4fv(this.addr,e)}function Lf(t,n){const e=En(n,this.size,4);t.uniformMatrix2fv(this.addr,!1,e)}function Df(t,n){const e=En(n,this.size,9);t.uniformMatrix3fv(this.addr,!1,e)}function If(t,n){const e=En(n,this.size,16);t.uniformMatrix4fv(this.addr,!1,e)}function Uf(t,n){t.uniform1iv(this.addr,n)}function Nf(t,n){t.uniform2iv(this.addr,n)}function Of(t,n){t.uniform3iv(this.addr,n)}function Ff(t,n){t.uniform4iv(this.addr,n)}function Bf(t,n){t.uniform1uiv(this.addr,n)}function kf(t,n){t.uniform2uiv(this.addr,n)}function Hf(t,n){t.uniform3uiv(this.addr,n)}function Gf(t,n){t.uniform4uiv(this.addr,n)}function Vf(t,n,e){const i=this.cache,r=n.length,o=li(e,r);lt(i,o)||(t.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)e.setTexture2D(n[a]||zo,o[a])}function zf(t,n,e){const i=this.cache,r=n.length,o=li(e,r);lt(i,o)||(t.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)e.setTexture3D(n[a]||Xo,o[a])}function Wf(t,n,e){const i=this.cache,r=n.length,o=li(e,r);lt(i,o)||(t.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)e.setTextureCube(n[a]||qo,o[a])}function Xf(t,n,e){const i=this.cache,r=n.length,o=li(e,r);lt(i,o)||(t.uniform1iv(this.addr,o),dt(i,o));for(let a=0;a!==r;++a)e.setTexture2DArray(n[a]||Wo,o[a])}function qf(t){switch(t){case 5126:return Rf;case 35664:return Cf;case 35665:return wf;case 35666:return Pf;case 35674:return Lf;case 35675:return Df;case 35676:return If;case 5124:case 35670:return Uf;case 35667:case 35671:return Nf;case 35668:case 35672:return Of;case 35669:case 35673:return Ff;case 5125:return Bf;case 36294:return kf;case 36295:return Hf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Vf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}class Yf{constructor(n,e,i){this.id=n,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Kf{constructor(n,e,i){this.id=n,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qf(e.type)}}class $f{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,e,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(n,e[s.id],i)}}}const Ai=/(\w+)(\])?(\[|\.)?/g;function ro(t,n){t.seq.push(n),t.map[n.id]=n}function Zf(t,n,e){const i=t.name,r=i.length;for(Ai.lastIndex=0;;){const o=Ai.exec(i),a=Ai.lastIndex;let s=o[1];const p=o[2]==="]",m=o[3];if(p&&(s=s|0),m===void 0||m==="["&&a+2===r){ro(e,m===void 0?new Yf(s,t,n):new Kf(s,t,n));break}else{let v=e.map[s];v===void 0&&(v=new $f(s),ro(e,v)),e=v}}}class jn{constructor(n,e){this.seq=[],this.map={};const i=n.getProgramParameter(e,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=n.getActiveUniform(e,r),a=n.getUniformLocation(e,o.name);Zf(o,a,this)}}setValue(n,e,i,r){const o=this.map[e];o!==void 0&&o.setValue(n,i,r)}setOptional(n,e,i){const r=e[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,e,i,r){for(let o=0,a=e.length;o!==a;++o){const s=e[o],p=i[s.id];p.needsUpdate!==!1&&s.setValue(n,p.value,r)}}static seqWithValue(n,e){const i=[];for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.id in e&&i.push(a)}return i}}function oo(t,n,e){const i=t.createShader(n);return t.shaderSource(i,e),t.compileShader(i),i}const jf=37297;let Jf=0;function Qf(t,n){const e=t.split(`
`),i=[],r=Math.max(n-6,0),o=Math.min(n+6,e.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===n?">":" "} ${s}: ${e[a]}`)}return i.join(`
`)}const ao=new Ve;function eu(t){st._getMatrix(ao,st.workingColorSpace,t);const n=`mat3( ${ao.elements.map(e=>e.toFixed(4))} )`;switch(st.getTransfer(t)){case Ho:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[n,"LinearTransferOETF"]}}function so(t,n,e){const i=t.getShaderParameter(n,t.COMPILE_STATUS),r=t.getShaderInfoLog(n).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qf(t.getShaderSource(n),a)}else return r}function tu(t,n){const e=eu(n);return[`vec4 ${t}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nu(t,n){let e;switch(n){case Vs:e="Linear";break;case Gs:e="Reinhard";break;case Hs:e="Cineon";break;case ks:e="ACESFilmic";break;case Bs:e="AgX";break;case Fs:e="Neutral";break;case Os:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),e="Linear"}return"vec3 "+t+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wn=new Ce;function iu(){st.getLuminanceCoefficients(Wn);const t=Wn.x.toFixed(4),n=Wn.y.toFixed(4),e=Wn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${n}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ru(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(An).join(`
`)}function ou(t){const n=[];for(const e in t){const i=t[e];i!==!1&&n.push("#define "+e+" "+i)}return n.join(`
`)}function au(t,n){const e={},i=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(n,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),e[a]={type:o.type,location:t.getAttribLocation(n,a),locationSize:s}}return e}function An(t){return t!==""}function co(t,n){const e=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function lo(t,n){return t.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const su=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gi(t){return t.replace(su,lu)}const cu=new Map;function lu(t,n){let e=Le[n];if(e===void 0){const i=cu.get(n);if(i!==void 0)e=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Gi(e)}const du=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(t){return t.replace(du,fu)}function fu(t,n,e,i){let r="";for(let o=parseInt(n);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function uo(t){let n=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?n+=`
#define HIGH_PRECISION`:t.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function uu(t){let n="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Co?n="SHADOWMAP_TYPE_PCF":t.shadowMapType===Go?n="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ht&&(n="SHADOWMAP_TYPE_VSM"),n}function hu(t){let n="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case In:case vn:n="ENVMAP_TYPE_CUBE";break;case ci:n="ENVMAP_TYPE_CUBE_UV";break}return n}function pu(t){let n="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vn:n="ENVMAP_MODE_REFRACTION";break}return n}function mu(t){let n="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ks:n="ENVMAP_BLENDING_MULTIPLY";break;case Ys:n="ENVMAP_BLENDING_MIX";break;case qs:n="ENVMAP_BLENDING_ADD";break}return n}function _u(t){const n=t.envMapCubeUVHeight;if(n===null)return null;const e=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function gu(t,n,e,i){const r=t.getContext(),o=e.defines;let a=e.vertexShader,s=e.fragmentShader;const p=uu(e),m=hu(e),g=pu(e),v=mu(e),E=_u(e),M=ru(e),D=ou(o),C=r.createProgram();let f,c,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,D].filter(An).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,D].filter(An).join(`
`),c.length>0&&(c+=`
`)):(f=[uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,D,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(An).join(`
`),c=[uo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,D,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",e.envMap?"#define "+v:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xt?"#define TONE_MAPPING":"",e.toneMapping!==Xt?Le.tonemapping_pars_fragment:"",e.toneMapping!==Xt?nu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,tu("linearToOutputTexel",e.outputColorSpace),iu(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(An).join(`
`)),a=Gi(a),a=co(a,e),a=lo(a,e),s=Gi(s),s=co(s,e),s=lo(s,e),a=fo(a),s=fo(s),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,f=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",e.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const y=I+f+a,T=I+c+s,H=oo(r,r.VERTEX_SHADER,y),P=oo(r,r.FRAGMENT_SHADER,T);r.attachShader(C,H),r.attachShader(C,P),e.index0AttributeName!==void 0?r.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function N(R){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(C).trim(),G=r.getShaderInfoLog(H).trim(),q=r.getShaderInfoLog(P).trim();let j=!0,z=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,C,H,P);else{const Q=so(r,H,"vertex"),F=so(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+Q+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||q==="")&&(z=!1);z&&(R.diagnostics={runnable:j,programLog:Y,vertexShader:{log:G,prefix:f},fragmentShader:{log:q,prefix:c}})}r.deleteShader(H),r.deleteShader(P),B=new jn(r,C),_=au(r,C)}let B;this.getUniforms=function(){return B===void 0&&N(this),B};let _;this.getAttributes=function(){return _===void 0&&N(this),_};let u=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=r.getProgramParameter(C,jf)),u},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jf++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=P,this}let vu=0;class Eu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const e=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(n);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(n){const e=this.materialCache.get(n);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const e=this.materialCache;let i=e.get(n);return i===void 0&&(i=new Set,e.set(n,i)),i}_getShaderStage(n){const e=this.shaderCache;let i=e.get(n);return i===void 0&&(i=new Su(n),e.set(n,i)),i}}class Su{constructor(n){this.id=vu++,this.code=n,this.usedTimes=0}}function Mu(t,n,e,i,r,o,a){const s=new Ds,p=new Eu,m=new Set,g=[],v=r.logarithmicDepthBuffer,E=r.vertexTextures;let M=r.precision;const D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(_){return m.add(_),_===0?"uv":`uv${_}`}function f(_,u,R,Y,G){const q=Y.fog,j=G.geometry,z=_.isMeshStandardMaterial?Y.environment:null,Q=(_.isMeshStandardMaterial?e:n).get(_.envMap||z),F=Q&&Q.mapping===ci?Q.image.height:null,_e=D[_.type];_.precision!==null&&(M=r.getMaxPrecision(_.precision),M!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",M,"instead."));const Te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,De=Te!==void 0?Te.length:0;let ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let nt,V,J,ue;if(_e){const qe=Ut[_e];nt=qe.vertexShader,V=qe.fragmentShader}else nt=_.vertexShader,V=_.fragmentShader,p.update(_),J=p.getVertexShaderID(_),ue=p.getFragmentShaderID(_);const ie=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),ye=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,tt=!!_.map,Be=!!_.matcap,ot=!!Q,S=!!_.aoMap,bt=!!_.lightMap,Ne=!!_.bumpMap,Oe=!!_.normalMap,ge=!!_.displacementMap,Ke=!!_.emissiveMap,me=!!_.metalnessMap,h=!!_.roughnessMap,l=_.anisotropy>0,w=_.clearcoat>0,W=_.dispersion>0,K=_.iridescence>0,k=_.sheen>0,he=_.transmission>0,re=l&&!!_.anisotropyMap,ce=w&&!!_.clearcoatMap,ke=w&&!!_.clearcoatNormalMap,Z=w&&!!_.clearcoatRoughnessMap,le=K&&!!_.iridescenceMap,Se=K&&!!_.iridescenceThicknessMap,be=k&&!!_.sheenColorMap,de=k&&!!_.sheenRoughnessMap,Fe=!!_.specularMap,Pe=!!_.specularColorMap,Ye=!!_.specularIntensityMap,x=he&&!!_.transmissionMap,te=he&&!!_.thicknessMap,O=!!_.gradientMap,X=!!_.alphaMap,ae=_.alphaTest>0,oe=!!_.alphaHash,we=!!_.extensions;let it=Xt;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(it=t.toneMapping);const mt={shaderID:_e,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:V,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:M,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:ye,instancingColor:ye&&G.instanceColor!==null,instancingMorph:ye&&G.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:si,alphaToCoverage:!!_.alphaToCoverage,map:tt,matcap:Be,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:F,aoMap:S,lightMap:bt,bumpMap:Ne,normalMap:Oe,displacementMap:E&&ge,emissiveMap:Ke,normalMapObjectSpace:Oe&&_.normalMapType===hs,normalMapTangentSpace:Oe&&_.normalMapType===ps,metalnessMap:me,roughnessMap:h,anisotropy:l,anisotropyMap:re,clearcoat:w,clearcoatMap:ce,clearcoatNormalMap:ke,clearcoatRoughnessMap:Z,dispersion:W,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:k,sheenColorMap:be,sheenRoughnessMap:de,specularMap:Fe,specularColorMap:Pe,specularIntensityMap:Ye,transmission:he,transmissionMap:x,thicknessMap:te,gradientMap:O,opaque:_.transparent===!1&&_.blending===Zn&&_.alphaToCoverage===!1,alphaMap:X,alphaTest:ae,alphaHash:oe,combine:_.combine,mapUv:tt&&C(_.map.channel),aoMapUv:S&&C(_.aoMap.channel),lightMapUv:bt&&C(_.lightMap.channel),bumpMapUv:Ne&&C(_.bumpMap.channel),normalMapUv:Oe&&C(_.normalMap.channel),displacementMapUv:ge&&C(_.displacementMap.channel),emissiveMapUv:Ke&&C(_.emissiveMap.channel),metalnessMapUv:me&&C(_.metalnessMap.channel),roughnessMapUv:h&&C(_.roughnessMap.channel),anisotropyMapUv:re&&C(_.anisotropyMap.channel),clearcoatMapUv:ce&&C(_.clearcoatMap.channel),clearcoatNormalMapUv:ke&&C(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&C(_.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&C(_.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&C(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&C(_.sheenRoughnessMap.channel),specularMapUv:Fe&&C(_.specularMap.channel),specularColorMapUv:Pe&&C(_.specularColorMap.channel),specularIntensityMapUv:Ye&&C(_.specularIntensityMap.channel),transmissionMapUv:x&&C(_.transmissionMap.channel),thicknessMapUv:te&&C(_.thicknessMap.channel),alphaMapUv:X&&C(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Oe||l),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&(tt||X),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ze,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,decodeVideoTexture:tt&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return mt.vertexUv1s=m.has(1),mt.vertexUv2s=m.has(2),mt.vertexUv3s=m.has(3),m.clear(),mt}function c(_){const u=[];if(_.shaderID?u.push(_.shaderID):(u.push(_.customVertexShaderID),u.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)u.push(R),u.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(I(u,_),y(u,_),u.push(t.outputColorSpace)),u.push(_.customProgramCacheKey),u.join()}function I(_,u){_.push(u.precision),_.push(u.outputColorSpace),_.push(u.envMapMode),_.push(u.envMapCubeUVHeight),_.push(u.mapUv),_.push(u.alphaMapUv),_.push(u.lightMapUv),_.push(u.aoMapUv),_.push(u.bumpMapUv),_.push(u.normalMapUv),_.push(u.displacementMapUv),_.push(u.emissiveMapUv),_.push(u.metalnessMapUv),_.push(u.roughnessMapUv),_.push(u.anisotropyMapUv),_.push(u.clearcoatMapUv),_.push(u.clearcoatNormalMapUv),_.push(u.clearcoatRoughnessMapUv),_.push(u.iridescenceMapUv),_.push(u.iridescenceThicknessMapUv),_.push(u.sheenColorMapUv),_.push(u.sheenRoughnessMapUv),_.push(u.specularMapUv),_.push(u.specularColorMapUv),_.push(u.specularIntensityMapUv),_.push(u.transmissionMapUv),_.push(u.thicknessMapUv),_.push(u.combine),_.push(u.fogExp2),_.push(u.sizeAttenuation),_.push(u.morphTargetsCount),_.push(u.morphAttributeCount),_.push(u.numDirLights),_.push(u.numPointLights),_.push(u.numSpotLights),_.push(u.numSpotLightMaps),_.push(u.numHemiLights),_.push(u.numRectAreaLights),_.push(u.numDirLightShadows),_.push(u.numPointLightShadows),_.push(u.numSpotLightShadows),_.push(u.numSpotLightShadowsWithMaps),_.push(u.numLightProbes),_.push(u.shadowMapType),_.push(u.toneMapping),_.push(u.numClippingPlanes),_.push(u.numClipIntersection),_.push(u.depthPacking)}function y(_,u){s.disableAll(),u.supportsVertexTextures&&s.enable(0),u.instancing&&s.enable(1),u.instancingColor&&s.enable(2),u.instancingMorph&&s.enable(3),u.matcap&&s.enable(4),u.envMap&&s.enable(5),u.normalMapObjectSpace&&s.enable(6),u.normalMapTangentSpace&&s.enable(7),u.clearcoat&&s.enable(8),u.iridescence&&s.enable(9),u.alphaTest&&s.enable(10),u.vertexColors&&s.enable(11),u.vertexAlphas&&s.enable(12),u.vertexUv1s&&s.enable(13),u.vertexUv2s&&s.enable(14),u.vertexUv3s&&s.enable(15),u.vertexTangents&&s.enable(16),u.anisotropy&&s.enable(17),u.alphaHash&&s.enable(18),u.batching&&s.enable(19),u.dispersion&&s.enable(20),u.batchingColor&&s.enable(21),_.push(s.mask),s.disableAll(),u.fog&&s.enable(0),u.useFog&&s.enable(1),u.flatShading&&s.enable(2),u.logarithmicDepthBuffer&&s.enable(3),u.reverseDepthBuffer&&s.enable(4),u.skinning&&s.enable(5),u.morphTargets&&s.enable(6),u.morphNormals&&s.enable(7),u.morphColors&&s.enable(8),u.premultipliedAlpha&&s.enable(9),u.shadowMapEnabled&&s.enable(10),u.doubleSided&&s.enable(11),u.flipSided&&s.enable(12),u.useDepthPacking&&s.enable(13),u.dithering&&s.enable(14),u.transmission&&s.enable(15),u.sheen&&s.enable(16),u.opaque&&s.enable(17),u.pointsUvs&&s.enable(18),u.decodeVideoTexture&&s.enable(19),u.decodeVideoTextureEmissive&&s.enable(20),u.alphaToCoverage&&s.enable(21),_.push(s.mask)}function T(_){const u=D[_.type];let R;if(u){const Y=Ut[u];R=ms.clone(Y.uniforms)}else R=_.uniforms;return R}function H(_,u){let R;for(let Y=0,G=g.length;Y<G;Y++){const q=g[Y];if(q.cacheKey===u){R=q,++R.usedTimes;break}}return R===void 0&&(R=new gu(t,u,_,o),g.push(R)),R}function P(_){if(--_.usedTimes===0){const u=g.indexOf(_);g[u]=g[g.length-1],g.pop(),_.destroy()}}function N(_){p.remove(_)}function B(){p.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:T,acquireProgram:H,releaseProgram:P,releaseShaderCache:N,programs:g,dispose:B}}function Tu(){let t=new WeakMap;function n(a){return t.has(a)}function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function i(a){t.delete(a)}function r(a,s,p){t.get(a)[s]=p}function o(){t=new WeakMap}return{has:n,get:e,remove:i,update:r,dispose:o}}function xu(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.material.id!==n.material.id?t.material.id-n.material.id:t.z!==n.z?t.z-n.z:t.id-n.id}function ho(t,n){return t.groupOrder!==n.groupOrder?t.groupOrder-n.groupOrder:t.renderOrder!==n.renderOrder?t.renderOrder-n.renderOrder:t.z!==n.z?n.z-t.z:t.id-n.id}function po(){const t=[];let n=0;const e=[],i=[],r=[];function o(){n=0,e.length=0,i.length=0,r.length=0}function a(v,E,M,D,C,f){let c=t[n];return c===void 0?(c={id:v.id,object:v,geometry:E,material:M,groupOrder:D,renderOrder:v.renderOrder,z:C,group:f},t[n]=c):(c.id=v.id,c.object=v,c.geometry=E,c.material=M,c.groupOrder=D,c.renderOrder=v.renderOrder,c.z=C,c.group=f),n++,c}function s(v,E,M,D,C,f){const c=a(v,E,M,D,C,f);M.transmission>0?i.push(c):M.transparent===!0?r.push(c):e.push(c)}function p(v,E,M,D,C,f){const c=a(v,E,M,D,C,f);M.transmission>0?i.unshift(c):M.transparent===!0?r.unshift(c):e.unshift(c)}function m(v,E){e.length>1&&e.sort(v||xu),i.length>1&&i.sort(E||ho),r.length>1&&r.sort(E||ho)}function g(){for(let v=n,E=t.length;v<E;v++){const M=t[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:s,unshift:p,finish:g,sort:m}}function bu(){let t=new WeakMap;function n(i,r){const o=t.get(i);let a;return o===void 0?(a=new po,t.set(i,[a])):r>=o.length?(a=new po,o.push(a)):a=o[r],a}function e(){t=new WeakMap}return{get:n,dispose:e}}function Au(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let e;switch(n.type){case"DirectionalLight":e={direction:new Ce,color:new je};break;case"SpotLight":e={position:new Ce,direction:new Ce,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Ce,color:new je,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Ce,skyColor:new je,groundColor:new je};break;case"RectAreaLight":e={color:new je,position:new Ce,halfWidth:new Ce,halfHeight:new Ce};break}return t[n.id]=e,e}}}function yu(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let e;switch(n.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[n.id]=e,e}}}let Ru=0;function Cu(t,n){return(n.castShadow?2:0)-(t.castShadow?2:0)+(n.map?1:0)-(t.map?1:0)}function wu(t){const n=new Au,e=yu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)i.probe.push(new Ce);const r=new Ce,o=new Nt,a=new Nt;function s(m){let g=0,v=0,E=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let M=0,D=0,C=0,f=0,c=0,I=0,y=0,T=0,H=0,P=0,N=0;m.sort(Cu);for(let _=0,u=m.length;_<u;_++){const R=m[_],Y=R.color,G=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)g+=Y.r*G,v+=Y.g*G,E+=Y.b*G;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],G);N++}else if(R.isDirectionalLight){const z=n.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,F=e.get(R);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,i.directionalShadow[M]=F,i.directionalShadowMap[M]=j,i.directionalShadowMatrix[M]=R.shadow.matrix,I++}i.directional[M]=z,M++}else if(R.isSpotLight){const z=n.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(Y).multiplyScalar(G),z.distance=q,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[C]=z;const Q=R.shadow;if(R.map&&(i.spotLightMap[H]=R.map,H++,Q.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[C]=Q.matrix,R.castShadow){const F=e.get(R);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,i.spotShadow[C]=F,i.spotShadowMap[C]=j,T++}C++}else if(R.isRectAreaLight){const z=n.get(R);z.color.copy(Y).multiplyScalar(G),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=z,f++}else if(R.isPointLight){const z=n.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const Q=R.shadow,F=e.get(R);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,i.pointShadow[D]=F,i.pointShadowMap[D]=j,i.pointShadowMatrix[D]=R.shadow.matrix,y++}i.point[D]=z,D++}else if(R.isHemisphereLight){const z=n.get(R);z.skyColor.copy(R.color).multiplyScalar(G),z.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[c]=z,c++}}f>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=E;const B=i.hash;(B.directionalLength!==M||B.pointLength!==D||B.spotLength!==C||B.rectAreaLength!==f||B.hemiLength!==c||B.numDirectionalShadows!==I||B.numPointShadows!==y||B.numSpotShadows!==T||B.numSpotMaps!==H||B.numLightProbes!==N)&&(i.directional.length=M,i.spot.length=C,i.rectArea.length=f,i.point.length=D,i.hemi.length=c,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+H-P,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=N,B.directionalLength=M,B.pointLength=D,B.spotLength=C,B.rectAreaLength=f,B.hemiLength=c,B.numDirectionalShadows=I,B.numPointShadows=y,B.numSpotShadows=T,B.numSpotMaps=H,B.numLightProbes=N,i.version=Ru++)}function p(m,g){let v=0,E=0,M=0,D=0,C=0;const f=g.matrixWorldInverse;for(let c=0,I=m.length;c<I;c++){const y=m[c];if(y.isDirectionalLight){const T=i.directional[v];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),v++}else if(y.isSpotLight){const T=i.spot[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),M++}else if(y.isRectAreaLight){const T=i.rectArea[D];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),D++}else if(y.isPointLight){const T=i.point[E];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),E++}else if(y.isHemisphereLight){const T=i.hemi[C];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),C++}}}return{setup:s,setupView:p,state:i}}function mo(t){const n=new wu(t),e=[],i=[];function r(g){m.camera=g,e.length=0,i.length=0}function o(g){e.push(g)}function a(g){i.push(g)}function s(){n.setup(e)}function p(g){n.setupView(e,g)}const m={lightsArray:e,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:m,setupLights:s,setupLightsView:p,pushLight:o,pushShadow:a}}function Pu(t){let n=new WeakMap;function e(r,o=0){const a=n.get(r);let s;return a===void 0?(s=new mo(t),n.set(r,[s])):o>=a.length?(s=new mo(t),a.push(s)):s=a[o],s}function i(){n=new WeakMap}return{get:e,dispose:i}}const Lu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Du=`uniform sampler2D shadow_pass;
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
}`;function Iu(t,n,e){let i=new Ao;const r=new _t,o=new _t,a=new Tt,s=new Na({depthPacking:Oa}),p=new Fa,m={},g=e.maxTextureSize,v={[wn]:Ct,[Ct]:wn,[Gt]:Gt},E=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Lu,fragmentShader:Du}),M=E.clone();M.defines.HORIZONTAL_PASS=1;const D=new Ro;D.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Je(D,E),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let c=this.type;this.render=function(P,N,B){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const _=t.getRenderTarget(),u=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(tn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const G=c!==Ht&&this.type===Ht,q=c===Ht&&this.type!==Ht;for(let j=0,z=P.length;j<z;j++){const Q=P[j],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const _e=F.getFrameExtents();if(r.multiply(_e),o.copy(F.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(o.x=Math.floor(g/_e.x),r.x=o.x*_e.x,F.mapSize.x=o.x),r.y>g&&(o.y=Math.floor(g/_e.y),r.y=o.y*_e.y,F.mapSize.y=o.y)),F.map===null||G===!0||q===!0){const De=this.type!==Ht?{minFilter:It,magFilter:It}:{};F.map!==null&&F.map.dispose(),F.map=new gn(r.x,r.y,De),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const Te=F.getViewportCount();for(let De=0;De<Te;De++){const ze=F.getViewport(De);a.set(o.x*ze.x,o.y*ze.y,o.x*ze.z,o.y*ze.w),Y.viewport(a),F.updateMatrices(Q,De),i=F.getFrustum(),T(N,B,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===Ht&&I(F,B),F.needsUpdate=!1}c=this.type,f.needsUpdate=!1,t.setRenderTarget(_,u,R)};function I(P,N){const B=n.update(C);E.defines.VSM_SAMPLES!==P.blurSamples&&(E.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,E.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gn(r.x,r.y)),E.uniforms.shadow_pass.value=P.map.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(N,null,B,E,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(N,null,B,M,C,null)}function y(P,N,B,_){let u=null;const R=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)u=R;else if(u=B.isPointLight===!0?p:s,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Y=u.uuid,G=N.uuid;let q=m[Y];q===void 0&&(q={},m[Y]=q);let j=q[G];j===void 0&&(j=u.clone(),q[G]=j,N.addEventListener("dispose",H)),u=j}if(u.visible=N.visible,u.wireframe=N.wireframe,_===Ht?u.side=N.shadowSide!==null?N.shadowSide:N.side:u.side=N.shadowSide!==null?N.shadowSide:v[N.side],u.alphaMap=N.alphaMap,u.alphaTest=N.alphaTest,u.map=N.map,u.clipShadows=N.clipShadows,u.clippingPlanes=N.clippingPlanes,u.clipIntersection=N.clipIntersection,u.displacementMap=N.displacementMap,u.displacementScale=N.displacementScale,u.displacementBias=N.displacementBias,u.wireframeLinewidth=N.wireframeLinewidth,u.linewidth=N.linewidth,B.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const Y=t.properties.get(u);Y.light=B}return u}function T(P,N,B,_,u){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&u===Ht)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const G=n.update(P),q=P.material;if(Array.isArray(q)){const j=G.groups;for(let z=0,Q=j.length;z<Q;z++){const F=j[z],_e=q[F.materialIndex];if(_e&&_e.visible){const Te=y(P,_e,_,u);P.onBeforeShadow(t,P,N,B,G,Te,F),t.renderBufferDirect(B,null,G,Te,P,F),P.onAfterShadow(t,P,N,B,G,Te,F)}}}else if(q.visible){const j=y(P,q,_,u);P.onBeforeShadow(t,P,N,B,G,j,null),t.renderBufferDirect(B,null,G,j,P,null),P.onAfterShadow(t,P,N,B,G,j,null)}}const Y=P.children;for(let G=0,q=Y.length;G<q;G++)T(Y[G],N,B,_,u)}function H(P){P.target.removeEventListener("dispose",H);for(const B in m){const _=m[B],u=P.target.uuid;u in _&&(_[u].dispose(),delete _[u])}}}const Uu={[Hi]:ki,[Bi]:Ni,[Fi]:Ui,[ii]:Oi,[ki]:Hi,[Ni]:Bi,[Ui]:Fi,[Oi]:ii};function Nu(t,n){function e(){let x=!1;const te=new Tt;let O=null;const X=new Tt(0,0,0,0);return{setMask:function(ae){O!==ae&&!x&&(t.colorMask(ae,ae,ae,ae),O=ae)},setLocked:function(ae){x=ae},setClear:function(ae,oe,we,it,mt){mt===!0&&(ae*=it,oe*=it,we*=it),te.set(ae,oe,we,it),X.equals(te)===!1&&(t.clearColor(ae,oe,we,it),X.copy(te))},reset:function(){x=!1,O=null,X.set(-1,0,0,0)}}}function i(){let x=!1,te=!1,O=null,X=null,ae=null;return{setReversed:function(oe){if(te!==oe){const we=n.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT);const it=ae;ae=null,this.setClear(it)}te=oe},getReversed:function(){return te},setTest:function(oe){oe?ie(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(oe){O!==oe&&!x&&(t.depthMask(oe),O=oe)},setFunc:function(oe){if(te&&(oe=Uu[oe]),X!==oe){switch(oe){case Hi:t.depthFunc(t.NEVER);break;case ki:t.depthFunc(t.ALWAYS);break;case Bi:t.depthFunc(t.LESS);break;case ii:t.depthFunc(t.LEQUAL);break;case Fi:t.depthFunc(t.EQUAL);break;case Oi:t.depthFunc(t.GEQUAL);break;case Ni:t.depthFunc(t.GREATER);break;case Ui:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=oe}},setLocked:function(oe){x=oe},setClear:function(oe){ae!==oe&&(te&&(oe=1-oe),t.clearDepth(oe),ae=oe)},reset:function(){x=!1,O=null,X=null,ae=null,te=!1}}}function r(){let x=!1,te=null,O=null,X=null,ae=null,oe=null,we=null,it=null,mt=null;return{setTest:function(qe){x||(qe?ie(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(qe){te!==qe&&!x&&(t.stencilMask(qe),te=qe)},setFunc:function(qe,Pt,Bt){(O!==qe||X!==Pt||ae!==Bt)&&(t.stencilFunc(qe,Pt,Bt),O=qe,X=Pt,ae=Bt)},setOp:function(qe,Pt,Bt){(oe!==qe||we!==Pt||it!==Bt)&&(t.stencilOp(qe,Pt,Bt),oe=qe,we=Pt,it=Bt)},setLocked:function(qe){x=qe},setClear:function(qe){mt!==qe&&(t.clearStencil(qe),mt=qe)},reset:function(){x=!1,te=null,O=null,X=null,ae=null,oe=null,we=null,it=null,mt=null}}}const o=new e,a=new i,s=new r,p=new WeakMap,m=new WeakMap;let g={},v={},E=new WeakMap,M=[],D=null,C=!1,f=null,c=null,I=null,y=null,T=null,H=null,P=null,N=new je(0,0,0),B=0,_=!1,u=null,R=null,Y=null,G=null,q=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=Q>=1):F.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=Q>=2);let _e=null,Te={};const De=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),nt=new Tt().fromArray(De),V=new Tt().fromArray(ze);function J(x,te,O,X){const ae=new Uint8Array(4),oe=t.createTexture();t.bindTexture(x,oe),t.texParameteri(x,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(x,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<O;we++)x===t.TEXTURE_3D||x===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(te+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return oe}const ue={};ue[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),s.setClear(0),ie(t.DEPTH_TEST),a.setFunc(ii),Ne(!1),Oe(_r),ie(t.CULL_FACE),S(tn);function ie(x){g[x]!==!0&&(t.enable(x),g[x]=!0)}function Me(x){g[x]!==!1&&(t.disable(x),g[x]=!1)}function ye(x,te){return v[x]!==te?(t.bindFramebuffer(x,te),v[x]=te,x===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=te),x===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=te),!0):!1}function Ie(x,te){let O=M,X=!1;if(x){O=E.get(te),O===void 0&&(O=[],E.set(te,O));const ae=x.textures;if(O.length!==ae.length||O[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,we=ae.length;oe<we;oe++)O[oe]=t.COLOR_ATTACHMENT0+oe;O.length=ae.length,X=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,X=!0);X&&t.drawBuffers(O)}function tt(x){return D!==x?(t.useProgram(x),D=x,!0):!1}const Be={[Tn]:t.FUNC_ADD,[Ba]:t.FUNC_SUBTRACT,[ka]:t.FUNC_REVERSE_SUBTRACT};Be[Is]=t.MIN,Be[Us]=t.MAX;const ot={[Ha]:t.ZERO,[Ga]:t.ONE,[Va]:t.SRC_COLOR,[za]:t.SRC_ALPHA,[Wa]:t.SRC_ALPHA_SATURATE,[Xa]:t.DST_COLOR,[qa]:t.DST_ALPHA,[Ya]:t.ONE_MINUS_SRC_COLOR,[Ka]:t.ONE_MINUS_SRC_ALPHA,[$a]:t.ONE_MINUS_DST_COLOR,[Za]:t.ONE_MINUS_DST_ALPHA,[ja]:t.CONSTANT_COLOR,[Ja]:t.ONE_MINUS_CONSTANT_COLOR,[Qa]:t.CONSTANT_ALPHA,[es]:t.ONE_MINUS_CONSTANT_ALPHA};function S(x,te,O,X,ae,oe,we,it,mt,qe){if(x===tn){C===!0&&(Me(t.BLEND),C=!1);return}if(C===!1&&(ie(t.BLEND),C=!0),x!==_s){if(x!==f||qe!==_){if((c!==Tn||T!==Tn)&&(t.blendEquation(t.FUNC_ADD),c=Tn,T=Tn),qe)switch(x){case Zn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFunc(t.ONE,t.ONE);break;case pr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hr:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Zn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mr:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pr:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hr:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}I=null,y=null,H=null,P=null,N.set(0,0,0),B=0,f=x,_=qe}return}ae=ae||te,oe=oe||O,we=we||X,(te!==c||ae!==T)&&(t.blendEquationSeparate(Be[te],Be[ae]),c=te,T=ae),(O!==I||X!==y||oe!==H||we!==P)&&(t.blendFuncSeparate(ot[O],ot[X],ot[oe],ot[we]),I=O,y=X,H=oe,P=we),(it.equals(N)===!1||mt!==B)&&(t.blendColor(it.r,it.g,it.b,mt),N.copy(it),B=mt),f=x,_=!1}function bt(x,te){x.side===Gt?Me(t.CULL_FACE):ie(t.CULL_FACE);let O=x.side===Ct;te&&(O=!O),Ne(O),x.blending===Zn&&x.transparent===!1?S(tn):S(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),a.setFunc(x.depthFunc),a.setTest(x.depthTest),a.setMask(x.depthWrite),o.setMask(x.colorWrite);const X=x.stencilWrite;s.setTest(X),X&&(s.setMask(x.stencilWriteMask),s.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),s.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Ke(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(x){u!==x&&(x?t.frontFace(t.CW):t.frontFace(t.CCW),u=x)}function Oe(x){x!==gs?(ie(t.CULL_FACE),x!==R&&(x===_r?t.cullFace(t.BACK):x===vs?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),R=x}function ge(x){x!==Y&&(z&&t.lineWidth(x),Y=x)}function Ke(x,te,O){x?(ie(t.POLYGON_OFFSET_FILL),(G!==te||q!==O)&&(t.polygonOffset(te,O),G=te,q=O)):Me(t.POLYGON_OFFSET_FILL)}function me(x){x?ie(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function h(x){x===void 0&&(x=t.TEXTURE0+j-1),_e!==x&&(t.activeTexture(x),_e=x)}function l(x,te,O){O===void 0&&(_e===null?O=t.TEXTURE0+j-1:O=_e);let X=Te[O];X===void 0&&(X={type:void 0,texture:void 0},Te[O]=X),(X.type!==x||X.texture!==te)&&(_e!==O&&(t.activeTexture(O),_e=O),t.bindTexture(x,te||ue[x]),X.type=x,X.texture=te)}function w(){const x=Te[_e];x!==void 0&&x.type!==void 0&&(t.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function W(){try{t.compressedTexImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function k(){try{t.texSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Z(){try{t.texStorage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{t.texImage2D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function be(x){nt.equals(x)===!1&&(t.scissor(x.x,x.y,x.z,x.w),nt.copy(x))}function de(x){V.equals(x)===!1&&(t.viewport(x.x,x.y,x.z,x.w),V.copy(x))}function Fe(x,te){let O=m.get(te);O===void 0&&(O=new WeakMap,m.set(te,O));let X=O.get(x);X===void 0&&(X=t.getUniformBlockIndex(te,x.name),O.set(x,X))}function Pe(x,te){const X=m.get(te).get(x);p.get(te)!==X&&(t.uniformBlockBinding(te,X,x.__bindingPointIndex),p.set(te,X))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},_e=null,Te={},v={},E=new WeakMap,M=[],D=null,C=!1,f=null,c=null,I=null,y=null,T=null,H=null,P=null,N=new je(0,0,0),B=0,_=!1,u=null,R=null,Y=null,G=null,q=null,nt.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),o.reset(),a.reset(),s.reset()}return{buffers:{color:o,depth:a,stencil:s},enable:ie,disable:Me,bindFramebuffer:ye,drawBuffers:Ie,useProgram:tt,setBlending:S,setMaterial:bt,setFlipSided:Ne,setCullFace:Oe,setLineWidth:ge,setPolygonOffset:Ke,setScissorTest:me,activeTexture:h,bindTexture:l,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:le,texImage3D:Se,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:ke,texStorage3D:Z,texSubImage2D:k,texSubImage3D:he,compressedTexSubImage2D:re,compressedTexSubImage3D:ce,scissor:be,viewport:de,reset:Ye}}function Ou(t,n,e,i,r,o,a){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new _t,g=new WeakMap;let v;const E=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(h,l){return M?new OffscreenCanvas(h,l):zs("canvas")}function C(h,l,w){let W=1;const K=me(h);if((K.width>w||K.height>w)&&(W=w/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){const k=Math.floor(W*K.width),he=Math.floor(W*K.height);v===void 0&&(v=D(k,he));const re=l?D(k,he):v;return re.width=k,re.height=he,re.getContext("2d").drawImage(h,0,0,k,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+he+")."),re}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),h;return h}function f(h){return h.generateMipmaps}function c(h){t.generateMipmap(h)}function I(h){return h.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?t.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(h,l,w,W,K=!1){if(h!==null){if(t[h]!==void 0)return t[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let k=l;if(l===t.RED&&(w===t.FLOAT&&(k=t.R32F),w===t.HALF_FLOAT&&(k=t.R16F),w===t.UNSIGNED_BYTE&&(k=t.R8)),l===t.RED_INTEGER&&(w===t.UNSIGNED_BYTE&&(k=t.R8UI),w===t.UNSIGNED_SHORT&&(k=t.R16UI),w===t.UNSIGNED_INT&&(k=t.R32UI),w===t.BYTE&&(k=t.R8I),w===t.SHORT&&(k=t.R16I),w===t.INT&&(k=t.R32I)),l===t.RG&&(w===t.FLOAT&&(k=t.RG32F),w===t.HALF_FLOAT&&(k=t.RG16F),w===t.UNSIGNED_BYTE&&(k=t.RG8)),l===t.RG_INTEGER&&(w===t.UNSIGNED_BYTE&&(k=t.RG8UI),w===t.UNSIGNED_SHORT&&(k=t.RG16UI),w===t.UNSIGNED_INT&&(k=t.RG32UI),w===t.BYTE&&(k=t.RG8I),w===t.SHORT&&(k=t.RG16I),w===t.INT&&(k=t.RG32I)),l===t.RGB_INTEGER&&(w===t.UNSIGNED_BYTE&&(k=t.RGB8UI),w===t.UNSIGNED_SHORT&&(k=t.RGB16UI),w===t.UNSIGNED_INT&&(k=t.RGB32UI),w===t.BYTE&&(k=t.RGB8I),w===t.SHORT&&(k=t.RGB16I),w===t.INT&&(k=t.RGB32I)),l===t.RGBA_INTEGER&&(w===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),w===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),w===t.UNSIGNED_INT&&(k=t.RGBA32UI),w===t.BYTE&&(k=t.RGBA8I),w===t.SHORT&&(k=t.RGBA16I),w===t.INT&&(k=t.RGBA32I)),l===t.RGB&&w===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),l===t.RGBA){const he=K?Ho:st.getTransfer(W);w===t.FLOAT&&(k=t.RGBA32F),w===t.HALF_FLOAT&&(k=t.RGBA16F),w===t.UNSIGNED_BYTE&&(k=he===Ze?t.SRGB8_ALPHA8:t.RGBA8),w===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),w===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function T(h,l){let w;return h?l===null||l===Ln||l===Pn?w=t.DEPTH24_STENCIL8:l===en?w=t.DEPTH32F_STENCIL8:l===ri&&(w=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):l===null||l===Ln||l===Pn?w=t.DEPTH_COMPONENT24:l===en?w=t.DEPTH_COMPONENT32F:l===ri&&(w=t.DEPTH_COMPONENT16),w}function H(h,l){return f(h)===!0||h.isFramebufferTexture&&h.minFilter!==It&&h.minFilter!==pn?Math.log2(Math.max(l.width,l.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?l.mipmaps.length:1}function P(h){const l=h.target;l.removeEventListener("dispose",P),B(l),l.isVideoTexture&&g.delete(l)}function N(h){const l=h.target;l.removeEventListener("dispose",N),u(l)}function B(h){const l=i.get(h);if(l.__webglInit===void 0)return;const w=h.source,W=E.get(w);if(W){const K=W[l.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(h),Object.keys(W).length===0&&E.delete(w)}i.remove(h)}function _(h){const l=i.get(h);t.deleteTexture(l.__webglTexture);const w=h.source,W=E.get(w);delete W[l.__cacheKey],a.memory.textures--}function u(h){const l=i.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),i.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(l.__webglFramebuffer[W]))for(let K=0;K<l.__webglFramebuffer[W].length;K++)t.deleteFramebuffer(l.__webglFramebuffer[W][K]);else t.deleteFramebuffer(l.__webglFramebuffer[W]);l.__webglDepthbuffer&&t.deleteRenderbuffer(l.__webglDepthbuffer[W])}else{if(Array.isArray(l.__webglFramebuffer))for(let W=0;W<l.__webglFramebuffer.length;W++)t.deleteFramebuffer(l.__webglFramebuffer[W]);else t.deleteFramebuffer(l.__webglFramebuffer);if(l.__webglDepthbuffer&&t.deleteRenderbuffer(l.__webglDepthbuffer),l.__webglMultisampledFramebuffer&&t.deleteFramebuffer(l.__webglMultisampledFramebuffer),l.__webglColorRenderbuffer)for(let W=0;W<l.__webglColorRenderbuffer.length;W++)l.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(l.__webglColorRenderbuffer[W]);l.__webglDepthRenderbuffer&&t.deleteRenderbuffer(l.__webglDepthRenderbuffer)}const w=h.textures;for(let W=0,K=w.length;W<K;W++){const k=i.get(w[W]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(w[W])}i.remove(h)}let R=0;function Y(){R=0}function G(){const h=R;return h>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+r.maxTextures),R+=1,h}function q(h){const l=[];return l.push(h.wrapS),l.push(h.wrapT),l.push(h.wrapR||0),l.push(h.magFilter),l.push(h.minFilter),l.push(h.anisotropy),l.push(h.internalFormat),l.push(h.format),l.push(h.type),l.push(h.generateMipmaps),l.push(h.premultiplyAlpha),l.push(h.flipY),l.push(h.unpackAlignment),l.push(h.colorSpace),l.join()}function j(h,l){const w=i.get(h);if(h.isVideoTexture&&ge(h),h.isRenderTargetTexture===!1&&h.version>0&&w.__version!==h.version){const W=h.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(w,h,l);return}}e.bindTexture(t.TEXTURE_2D,w.__webglTexture,t.TEXTURE0+l)}function z(h,l){const w=i.get(h);if(h.version>0&&w.__version!==h.version){V(w,h,l);return}e.bindTexture(t.TEXTURE_2D_ARRAY,w.__webglTexture,t.TEXTURE0+l)}function Q(h,l){const w=i.get(h);if(h.version>0&&w.__version!==h.version){V(w,h,l);return}e.bindTexture(t.TEXTURE_3D,w.__webglTexture,t.TEXTURE0+l)}function F(h,l){const w=i.get(h);if(h.version>0&&w.__version!==h.version){J(w,h,l);return}e.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+l)}const _e={[ts]:t.REPEAT,[ns]:t.CLAMP_TO_EDGE,[is]:t.MIRRORED_REPEAT},Te={[It]:t.NEAREST,[rs]:t.NEAREST_MIPMAP_NEAREST,[Gn]:t.NEAREST_MIPMAP_LINEAR,[pn]:t.LINEAR,[pi]:t.LINEAR_MIPMAP_NEAREST,[bn]:t.LINEAR_MIPMAP_LINEAR},De={[os]:t.NEVER,[as]:t.ALWAYS,[ss]:t.LESS,[wo]:t.LEQUAL,[cs]:t.EQUAL,[ls]:t.GEQUAL,[ds]:t.GREATER,[fs]:t.NOTEQUAL};function ze(h,l){if(l.type===en&&n.has("OES_texture_float_linear")===!1&&(l.magFilter===pn||l.magFilter===pi||l.magFilter===Gn||l.magFilter===bn||l.minFilter===pn||l.minFilter===pi||l.minFilter===Gn||l.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(h,t.TEXTURE_WRAP_S,_e[l.wrapS]),t.texParameteri(h,t.TEXTURE_WRAP_T,_e[l.wrapT]),(h===t.TEXTURE_3D||h===t.TEXTURE_2D_ARRAY)&&t.texParameteri(h,t.TEXTURE_WRAP_R,_e[l.wrapR]),t.texParameteri(h,t.TEXTURE_MAG_FILTER,Te[l.magFilter]),t.texParameteri(h,t.TEXTURE_MIN_FILTER,Te[l.minFilter]),l.compareFunction&&(t.texParameteri(h,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(h,t.TEXTURE_COMPARE_FUNC,De[l.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(l.magFilter===It||l.minFilter!==Gn&&l.minFilter!==bn||l.type===en&&n.has("OES_texture_float_linear")===!1)return;if(l.anisotropy>1||i.get(l).__currentAnisotropy){const w=n.get("EXT_texture_filter_anisotropic");t.texParameterf(h,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l.anisotropy,r.getMaxAnisotropy())),i.get(l).__currentAnisotropy=l.anisotropy}}}function nt(h,l){let w=!1;h.__webglInit===void 0&&(h.__webglInit=!0,l.addEventListener("dispose",P));const W=l.source;let K=E.get(W);K===void 0&&(K={},E.set(W,K));const k=q(l);if(k!==h.__cacheKey){K[k]===void 0&&(K[k]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,w=!0),K[k].usedTimes++;const he=K[h.__cacheKey];he!==void 0&&(K[h.__cacheKey].usedTimes--,he.usedTimes===0&&_(l)),h.__cacheKey=k,h.__webglTexture=K[k].texture}return w}function V(h,l,w){let W=t.TEXTURE_2D;(l.isDataArrayTexture||l.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),l.isData3DTexture&&(W=t.TEXTURE_3D);const K=nt(h,l),k=l.source;e.bindTexture(W,h.__webglTexture,t.TEXTURE0+w);const he=i.get(k);if(k.version!==he.__version||K===!0){e.activeTexture(t.TEXTURE0+w);const re=st.getPrimaries(st.workingColorSpace),ce=l.colorSpace===un?null:st.getPrimaries(l.colorSpace),ke=l.colorSpace===un||re===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,l.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,l.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Z=C(l.image,!1,r.maxTextureSize);Z=Ke(l,Z);const le=o.convert(l.format,l.colorSpace),Se=o.convert(l.type);let be=y(l.internalFormat,le,Se,l.colorSpace,l.isVideoTexture);ze(W,l);let de;const Fe=l.mipmaps,Pe=l.isVideoTexture!==!0,Ye=he.__version===void 0||K===!0,x=k.dataReady,te=H(l,Z);if(l.isDepthTexture)be=T(l.format===ni,l.type),Ye&&(Pe?e.texStorage2D(t.TEXTURE_2D,1,be,Z.width,Z.height):e.texImage2D(t.TEXTURE_2D,0,be,Z.width,Z.height,0,le,Se,null));else if(l.isDataTexture)if(Fe.length>0){Pe&&Ye&&e.texStorage2D(t.TEXTURE_2D,te,be,Fe[0].width,Fe[0].height);for(let O=0,X=Fe.length;O<X;O++)de=Fe[O],Pe?x&&e.texSubImage2D(t.TEXTURE_2D,O,0,0,de.width,de.height,le,Se,de.data):e.texImage2D(t.TEXTURE_2D,O,be,de.width,de.height,0,le,Se,de.data);l.generateMipmaps=!1}else Pe?(Ye&&e.texStorage2D(t.TEXTURE_2D,te,be,Z.width,Z.height),x&&e.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,le,Se,Z.data)):e.texImage2D(t.TEXTURE_2D,0,be,Z.width,Z.height,0,le,Se,Z.data);else if(l.isCompressedTexture)if(l.isCompressedArrayTexture){Pe&&Ye&&e.texStorage3D(t.TEXTURE_2D_ARRAY,te,be,Fe[0].width,Fe[0].height,Z.depth);for(let O=0,X=Fe.length;O<X;O++)if(de=Fe[O],l.format!==Vt)if(le!==null)if(Pe){if(x)if(l.layerUpdates.size>0){const ae=gr(de.width,de.height,l.format,l.type);for(const oe of l.layerUpdates){const we=de.data.subarray(oe*ae/de.data.BYTES_PER_ELEMENT,(oe+1)*ae/de.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,oe,de.width,de.height,1,le,we)}l.clearLayerUpdates()}else e.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,Z.depth,le,de.data)}else e.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,be,de.width,de.height,Z.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?x&&e.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,Z.depth,le,Se,de.data):e.texImage3D(t.TEXTURE_2D_ARRAY,O,be,de.width,de.height,Z.depth,0,le,Se,de.data)}else{Pe&&Ye&&e.texStorage2D(t.TEXTURE_2D,te,be,Fe[0].width,Fe[0].height);for(let O=0,X=Fe.length;O<X;O++)de=Fe[O],l.format!==Vt?le!==null?Pe?x&&e.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,de.width,de.height,le,de.data):e.compressedTexImage2D(t.TEXTURE_2D,O,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?x&&e.texSubImage2D(t.TEXTURE_2D,O,0,0,de.width,de.height,le,Se,de.data):e.texImage2D(t.TEXTURE_2D,O,be,de.width,de.height,0,le,Se,de.data)}else if(l.isDataArrayTexture)if(Pe){if(Ye&&e.texStorage3D(t.TEXTURE_2D_ARRAY,te,be,Z.width,Z.height,Z.depth),x)if(l.layerUpdates.size>0){const O=gr(Z.width,Z.height,l.format,l.type);for(const X of l.layerUpdates){const ae=Z.data.subarray(X*O/Z.data.BYTES_PER_ELEMENT,(X+1)*O/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,Z.width,Z.height,1,le,Se,ae)}l.clearLayerUpdates()}else e.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)}else e.texImage3D(t.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(l.isData3DTexture)Pe?(Ye&&e.texStorage3D(t.TEXTURE_3D,te,be,Z.width,Z.height,Z.depth),x&&e.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Se,Z.data)):e.texImage3D(t.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,le,Se,Z.data);else if(l.isFramebufferTexture){if(Ye)if(Pe)e.texStorage2D(t.TEXTURE_2D,te,be,Z.width,Z.height);else{let O=Z.width,X=Z.height;for(let ae=0;ae<te;ae++)e.texImage2D(t.TEXTURE_2D,ae,be,O,X,0,le,Se,null),O>>=1,X>>=1}}else if(Fe.length>0){if(Pe&&Ye){const O=me(Fe[0]);e.texStorage2D(t.TEXTURE_2D,te,be,O.width,O.height)}for(let O=0,X=Fe.length;O<X;O++)de=Fe[O],Pe?x&&e.texSubImage2D(t.TEXTURE_2D,O,0,0,le,Se,de):e.texImage2D(t.TEXTURE_2D,O,be,le,Se,de);l.generateMipmaps=!1}else if(Pe){if(Ye){const O=me(Z);e.texStorage2D(t.TEXTURE_2D,te,be,O.width,O.height)}x&&e.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Se,Z)}else e.texImage2D(t.TEXTURE_2D,0,be,le,Se,Z);f(l)&&c(W),he.__version=k.version,l.onUpdate&&l.onUpdate(l)}h.__version=l.version}function J(h,l,w){if(l.image.length!==6)return;const W=nt(h,l),K=l.source;e.bindTexture(t.TEXTURE_CUBE_MAP,h.__webglTexture,t.TEXTURE0+w);const k=i.get(K);if(K.version!==k.__version||W===!0){e.activeTexture(t.TEXTURE0+w);const he=st.getPrimaries(st.workingColorSpace),re=l.colorSpace===un?null:st.getPrimaries(l.colorSpace),ce=l.colorSpace===un||he===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,l.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,l.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,l.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const ke=l.isCompressedTexture||l.image[0].isCompressedTexture,Z=l.image[0]&&l.image[0].isDataTexture,le=[];for(let X=0;X<6;X++)!ke&&!Z?le[X]=C(l.image[X],!0,r.maxCubemapSize):le[X]=Z?l.image[X].image:l.image[X],le[X]=Ke(l,le[X]);const Se=le[0],be=o.convert(l.format,l.colorSpace),de=o.convert(l.type),Fe=y(l.internalFormat,be,de,l.colorSpace),Pe=l.isVideoTexture!==!0,Ye=k.__version===void 0||W===!0,x=K.dataReady;let te=H(l,Se);ze(t.TEXTURE_CUBE_MAP,l);let O;if(ke){Pe&&Ye&&e.texStorage2D(t.TEXTURE_CUBE_MAP,te,Fe,Se.width,Se.height);for(let X=0;X<6;X++){O=le[X].mipmaps;for(let ae=0;ae<O.length;ae++){const oe=O[ae];l.format!==Vt?be!==null?Pe?x&&e.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,oe.width,oe.height,be,oe.data):e.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,Fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?x&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,oe.width,oe.height,be,de,oe.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,Fe,oe.width,oe.height,0,be,de,oe.data)}}}else{if(O=l.mipmaps,Pe&&Ye){O.length>0&&te++;const X=me(le[0]);e.texStorage2D(t.TEXTURE_CUBE_MAP,te,Fe,X.width,X.height)}for(let X=0;X<6;X++)if(Z){Pe?x&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,le[X].width,le[X].height,be,de,le[X].data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Fe,le[X].width,le[X].height,0,be,de,le[X].data);for(let ae=0;ae<O.length;ae++){const we=O[ae].image[X].image;Pe?x&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,we.width,we.height,be,de,we.data):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,Fe,we.width,we.height,0,be,de,we.data)}}else{Pe?x&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,be,de,le[X]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Fe,be,de,le[X]);for(let ae=0;ae<O.length;ae++){const oe=O[ae];Pe?x&&e.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,be,de,oe.image[X]):e.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,Fe,be,de,oe.image[X])}}}f(l)&&c(t.TEXTURE_CUBE_MAP),k.__version=K.version,l.onUpdate&&l.onUpdate(l)}h.__version=l.version}function ue(h,l,w,W,K,k){const he=o.convert(w.format,w.colorSpace),re=o.convert(w.type),ce=y(w.internalFormat,he,re,w.colorSpace),ke=i.get(l),Z=i.get(w);if(Z.__renderTarget=l,!ke.__hasExternalTextures){const le=Math.max(1,l.width>>k),Se=Math.max(1,l.height>>k);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?e.texImage3D(K,k,ce,le,Se,l.depth,0,he,re,null):e.texImage2D(K,k,ce,le,Se,0,he,re,null)}e.bindFramebuffer(t.FRAMEBUFFER,h),Oe(l)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,K,Z.__webglTexture,0,Ne(l)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,K,Z.__webglTexture,k),e.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(h,l,w){if(t.bindRenderbuffer(t.RENDERBUFFER,h),l.depthBuffer){const W=l.depthTexture,K=W&&W.isDepthTexture?W.type:null,k=T(l.stencilBuffer,K),he=l.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=Ne(l);Oe(l)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,k,l.width,l.height):w?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,k,l.width,l.height):t.renderbufferStorage(t.RENDERBUFFER,k,l.width,l.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,h)}else{const W=l.textures;for(let K=0;K<W.length;K++){const k=W[K],he=o.convert(k.format,k.colorSpace),re=o.convert(k.type),ce=y(k.internalFormat,he,re,k.colorSpace),ke=Ne(l);w&&Oe(l)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,ce,l.width,l.height):Oe(l)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,ce,l.width,l.height):t.renderbufferStorage(t.RENDERBUFFER,ce,l.width,l.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(h,l){if(l&&l.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(t.FRAMEBUFFER,h),!(l.depthTexture&&l.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(l.depthTexture);W.__renderTarget=l,(!W.__webglTexture||l.depthTexture.image.width!==l.width||l.depthTexture.image.height!==l.height)&&(l.depthTexture.image.width=l.width,l.depthTexture.image.height=l.height,l.depthTexture.needsUpdate=!0),j(l.depthTexture,0);const K=W.__webglTexture,k=Ne(l);if(l.depthTexture.format===$i)Oe(l)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(l.depthTexture.format===ni)Oe(l)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ye(h){const l=i.get(h),w=h.isWebGLCubeRenderTarget===!0;if(l.__boundDepthTexture!==h.depthTexture){const W=h.depthTexture;if(l.__depthDisposeCallback&&l.__depthDisposeCallback(),W){const K=()=>{delete l.__boundDepthTexture,delete l.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),l.__depthDisposeCallback=K}l.__boundDepthTexture=W}if(h.depthTexture&&!l.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Me(l.__webglFramebuffer,h)}else if(w){l.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(t.FRAMEBUFFER,l.__webglFramebuffer[W]),l.__webglDepthbuffer[W]===void 0)l.__webglDepthbuffer[W]=t.createRenderbuffer(),ie(l.__webglDepthbuffer[W],h,!1);else{const K=h.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=l.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,k)}}else if(e.bindFramebuffer(t.FRAMEBUFFER,l.__webglFramebuffer),l.__webglDepthbuffer===void 0)l.__webglDepthbuffer=t.createRenderbuffer(),ie(l.__webglDepthbuffer,h,!1);else{const W=h.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=l.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,K)}e.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(h,l,w){const W=i.get(h);l!==void 0&&ue(W.__webglFramebuffer,h,h.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),w!==void 0&&ye(h)}function tt(h){const l=h.texture,w=i.get(h),W=i.get(l);h.addEventListener("dispose",N);const K=h.textures,k=h.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=l.version,a.memory.textures++),k){w.__webglFramebuffer=[];for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0){w.__webglFramebuffer[re]=[];for(let ce=0;ce<l.mipmaps.length;ce++)w.__webglFramebuffer[re][ce]=t.createFramebuffer()}else w.__webglFramebuffer[re]=t.createFramebuffer()}else{if(l.mipmaps&&l.mipmaps.length>0){w.__webglFramebuffer=[];for(let re=0;re<l.mipmaps.length;re++)w.__webglFramebuffer[re]=t.createFramebuffer()}else w.__webglFramebuffer=t.createFramebuffer();if(he)for(let re=0,ce=K.length;re<ce;re++){const ke=i.get(K[re]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(h.samples>0&&Oe(h)===!1){w.__webglMultisampledFramebuffer=t.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(t.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ce=K[re];w.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,w.__webglColorRenderbuffer[re]);const ke=o.convert(ce.format,ce.colorSpace),Z=o.convert(ce.type),le=y(ce.internalFormat,ke,Z,ce.colorSpace,h.isXRRenderTarget===!0),Se=Ne(h);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,le,h.width,h.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,w.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),h.depthBuffer&&(w.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(w.__webglDepthRenderbuffer,h,!0)),e.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){e.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),ze(t.TEXTURE_CUBE_MAP,l);for(let re=0;re<6;re++)if(l.mipmaps&&l.mipmaps.length>0)for(let ce=0;ce<l.mipmaps.length;ce++)ue(w.__webglFramebuffer[re][ce],h,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else ue(w.__webglFramebuffer[re],h,l,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(l)&&c(t.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(he){for(let re=0,ce=K.length;re<ce;re++){const ke=K[re],Z=i.get(ke);e.bindTexture(t.TEXTURE_2D,Z.__webglTexture),ze(t.TEXTURE_2D,ke),ue(w.__webglFramebuffer,h,ke,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),f(ke)&&c(t.TEXTURE_2D)}e.unbindTexture()}else{let re=t.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(re=h.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),e.bindTexture(re,W.__webglTexture),ze(re,l),l.mipmaps&&l.mipmaps.length>0)for(let ce=0;ce<l.mipmaps.length;ce++)ue(w.__webglFramebuffer[ce],h,l,t.COLOR_ATTACHMENT0,re,ce);else ue(w.__webglFramebuffer,h,l,t.COLOR_ATTACHMENT0,re,0);f(l)&&c(re),e.unbindTexture()}h.depthBuffer&&ye(h)}function Be(h){const l=h.textures;for(let w=0,W=l.length;w<W;w++){const K=l[w];if(f(K)){const k=I(h),he=i.get(K).__webglTexture;e.bindTexture(k,he),c(k),e.unbindTexture()}}}const ot=[],S=[];function bt(h){if(h.samples>0){if(Oe(h)===!1){const l=h.textures,w=h.width,W=h.height;let K=t.COLOR_BUFFER_BIT;const k=h.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(h),re=l.length>1;if(re)for(let ce=0;ce<l.length;ce++)e.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),e.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);e.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),e.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<l.length;ce++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const ke=i.get(l[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,w,W,0,0,w,W,K,t.NEAREST),p===!0&&(ot.length=0,S.length=0,ot.push(t.COLOR_ATTACHMENT0+ce),h.depthBuffer&&h.resolveDepthBuffer===!1&&(ot.push(k),S.push(k),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,S)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(t.READ_FRAMEBUFFER,null),e.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let ce=0;ce<l.length;ce++){e.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const ke=i.get(l[ce]).__webglTexture;e.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,ke,0)}e.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&p){const l=h.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[l])}}}function Ne(h){return Math.min(r.maxSamples,h.samples)}function Oe(h){const l=i.get(h);return h.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&l.__useRenderToTexture!==!1}function ge(h){const l=a.render.frame;g.get(h)!==l&&(g.set(h,l),h.update())}function Ke(h,l){const w=h.colorSpace,W=h.format,K=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||w!==si&&w!==un&&(st.getTransfer(w)===Ze?(W!==Vt||K!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),l}function me(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(m.width=h.naturalWidth||h.width,m.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(m.width=h.displayWidth,m.height=h.displayHeight):(m.width=h.width,m.height=h.height),m}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=F,this.rebindTextures=Ie,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe}function Fu(t,n){function e(i,r=un){let o;const a=st.getTransfer(r);if(i===nn)return t.UNSIGNED_BYTE;if(i===Io)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Es)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ss)return t.BYTE;if(i===Ms)return t.SHORT;if(i===ri)return t.UNSIGNED_SHORT;if(i===Fo)return t.INT;if(i===Ln)return t.UNSIGNED_INT;if(i===en)return t.FLOAT;if(i===ai)return t.HALF_FLOAT;if(i===Ts)return t.ALPHA;if(i===xs)return t.RGB;if(i===Vt)return t.RGBA;if(i===bs)return t.LUMINANCE;if(i===As)return t.LUMINANCE_ALPHA;if(i===$i)return t.DEPTH_COMPONENT;if(i===ni)return t.DEPTH_STENCIL;if(i===ys)return t.RED;if(i===Do)return t.RED_INTEGER;if(i===Rs)return t.RG;if(i===Lo)return t.RG_INTEGER;if(i===Po)return t.RGBA_INTEGER;if(i===mi||i===_i||i===gi||i===vi)if(a===Ze)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mi)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_i)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gi)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vi)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mi)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_i)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gi)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vi)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vr||i===Er||i===Sr||i===Mr)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Er)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tr||i===xr||i===br)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Tr||i===xr)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===br)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ar||i===yr||i===Rr||i===Cr||i===wr||i===Pr||i===Lr||i===Dr||i===Ir||i===Ur||i===Nr||i===Or||i===Fr||i===Br)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ar)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ir)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ur)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Or)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fr)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Br)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ei||i===kr||i===Hr)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Ei)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cs||i===Gr||i===Vr||i===zr)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ei)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Gr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pn?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:e}}const Bu={type:"move"};class yi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Ce),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const e=this._hand;if(e)for(const i of n.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,e,i){let r=null,o=null,a=null;const s=this._targetRay,p=this._grip,m=this._hand;if(n&&e.session.visibilityState!=="visible-blurred"){if(m&&n.hand){a=!0;for(const C of n.hand.values()){const f=e.getJointPose(C,i),c=this._getHandJoint(m,C);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],E=g.position.distanceTo(v.position),M=.02,D=.005;m.inputState.pinching&&E>M+D?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!m.inputState.pinching&&E<=M-D&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(o=e.getPose(n.gripSpace,i),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));s!==null&&(r=e.getPose(n.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return s!==null&&(s.visible=r!==null),p!==null&&(p.visible=o!==null),m!==null&&(m.visible=a!==null),this}_getHandJoint(n,e){if(n.joints[e.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[e.jointName]=i,n.add(i)}return n.joints[e.jointName]}}const ku=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hu=`
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

}`;class Gu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,e,i){if(this.texture===null){const r=new ko,o=n.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const e=n.cameras[0].viewport,i=new rn({vertexShader:ku,fragmentShader:Hu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vu extends La{constructor(n,e){super();const i=this;let r=null,o=1,a=null,s="local-floor",p=1,m=null,g=null,v=null,E=null,M=null,D=null;const C=new Gu,f=e.getContextAttributes();let c=null,I=null;const y=[],T=[],H=new _t;let P=null;const N=new Rn;N.viewport=new Tt;const B=new Rn;B.viewport=new Tt;const _=[N,B],u=new Da;let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=y[V];return J===void 0&&(J=new yi,y[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=y[V];return J===void 0&&(J=new yi,y[V]=J),J.getGripSpace()},this.getHand=function(V){let J=y[V];return J===void 0&&(J=new yi,y[V]=J),J.getHandSpace()};function G(V){const J=T.indexOf(V.inputSource);if(J===-1)return;const ue=y[J];ue!==void 0&&(ue.update(V.inputSource,V.frame,m||a),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let V=0;V<y.length;V++){const J=T[V];J!==null&&(T[V]=null,y[V].disconnect(J))}R=null,Y=null,C.reset(),n.setRenderTarget(c),M=null,E=null,v=null,r=null,I=null,nt.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||a},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return E!==null?E:M},this.getBinding=function(){return v},this.getFrame=function(){return D},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(c=n.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(H),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ue=null,ie=null,Me=null;f.depth&&(Me=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ue=f.stencil?ni:$i,ie=f.stencil?Pn:Ln);const ye={colorFormat:e.RGBA8,depthFormat:Me,scaleFactor:o};v=new XRWebGLBinding(r,e),E=v.createProjectionLayer(ye),r.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),I=new gn(E.textureWidth,E.textureHeight,{format:Vt,type:nn,depthTexture:new yo(E.textureWidth,E.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:f.stencil,colorSpace:n.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}else{const ue={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,e,ue),r.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new gn(M.framebufferWidth,M.framebufferHeight,{format:Vt,type:nn,colorSpace:n.outputColorSpace,stencilBuffer:f.stencil})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,a=await r.requestReferenceSpace(s),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function j(V){for(let J=0;J<V.removed.length;J++){const ue=V.removed[J],ie=T.indexOf(ue);ie>=0&&(T[ie]=null,y[ie].disconnect(ue))}for(let J=0;J<V.added.length;J++){const ue=V.added[J];let ie=T.indexOf(ue);if(ie===-1){for(let ye=0;ye<y.length;ye++)if(ye>=T.length){T.push(ue),ie=ye;break}else if(T[ye]===null){T[ye]=ue,ie=ye;break}if(ie===-1)break}const Me=y[ie];Me&&Me.connect(ue)}}const z=new Ce,Q=new Ce;function F(V,J,ue){z.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(ue.matrixWorld);const ie=z.distanceTo(Q),Me=J.projectionMatrix.elements,ye=ue.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),tt=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],ot=(Me[9]-1)/Me[5],S=(Me[8]-1)/Me[0],bt=(ye[8]+1)/ye[0],Ne=Ie*S,Oe=Ie*bt,ge=ie/(-S+bt),Ke=ge*-S;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ke),V.translateZ(ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Me[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const me=Ie+ge,h=tt+ge,l=Ne-Ke,w=Oe+(ie-Ke),W=Be*tt/h*me,K=ot*tt/h*me;V.projectionMatrix.makePerspective(l,w,W,K,me,h),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function _e(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let J=V.near,ue=V.far;C.texture!==null&&(C.depthNear>0&&(J=C.depthNear),C.depthFar>0&&(ue=C.depthFar)),u.near=B.near=N.near=J,u.far=B.far=N.far=ue,(R!==u.near||Y!==u.far)&&(r.updateRenderState({depthNear:u.near,depthFar:u.far}),R=u.near,Y=u.far),N.layers.mask=V.layers.mask|2,B.layers.mask=V.layers.mask|4,u.layers.mask=N.layers.mask|B.layers.mask;const ie=V.parent,Me=u.cameras;_e(u,ie);for(let ye=0;ye<Me.length;ye++)_e(Me[ye],ie);Me.length===2?F(u,N,B):u.projectionMatrix.copy(N.projectionMatrix),Te(V,u,ie)};function Te(V,J,ue){ue===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ia*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return u},this.getFoveation=function(){if(!(E===null&&M===null))return p},this.setFoveation=function(V){p=V,E!==null&&(E.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(u)};let De=null;function ze(V,J){if(g=J.getViewerPose(m||a),D=J,g!==null){const ue=g.views;M!==null&&(n.setRenderTargetFramebuffer(I,M.framebuffer),n.setRenderTarget(I));let ie=!1;ue.length!==u.cameras.length&&(u.cameras.length=0,ie=!0);for(let ye=0;ye<ue.length;ye++){const Ie=ue[ye];let tt=null;if(M!==null)tt=M.getViewport(Ie);else{const ot=v.getViewSubImage(E,Ie);tt=ot.viewport,ye===0&&(n.setRenderTargetTextures(I,ot.colorTexture,E.ignoreDepthValues?void 0:ot.depthStencilTexture),n.setRenderTarget(I))}let Be=_[ye];Be===void 0&&(Be=new Rn,Be.layers.enable(ye),Be.viewport=new Tt,_[ye]=Be),Be.matrix.fromArray(Ie.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ie.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(tt.x,tt.y,tt.width,tt.height),ye===0&&(u.matrix.copy(Be.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale)),ie===!0&&u.cameras.push(Be)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const ye=v.getDepthInformation(ue[0]);ye&&ye.isValid&&ye.texture&&C.init(n,ye,r.renderState)}}for(let ue=0;ue<y.length;ue++){const ie=T[ue],Me=y[ue];ie!==null&&Me!==void 0&&Me.update(ie,J,m||a)}De&&De(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),D=null}const nt=new Vo;nt.setAnimationLoop(ze),this.setAnimationLoop=function(V){De=V},this.dispose=function(){}}}const jt=new Dn,zu=new Nt;function Wu(t,n){function e(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function i(f,c){c.color.getRGB(f.fogColor.value,Oo(t)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,I,y,T){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(f,c):c.isMeshToonMaterial?(o(f,c),v(f,c)):c.isMeshPhongMaterial?(o(f,c),g(f,c)):c.isMeshStandardMaterial?(o(f,c),E(f,c),c.isMeshPhysicalMaterial&&M(f,c,T)):c.isMeshMatcapMaterial?(o(f,c),D(f,c)):c.isMeshDepthMaterial?o(f,c):c.isMeshDistanceMaterial?(o(f,c),C(f,c)):c.isMeshNormalMaterial?o(f,c):c.isLineBasicMaterial?(a(f,c),c.isLineDashedMaterial&&s(f,c)):c.isPointsMaterial?p(f,c,I,y):c.isSpriteMaterial?m(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,e(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Ct&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,e(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Ct&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,e(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,e(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const I=n.get(c),y=I.envMap,T=I.envMapRotation;y&&(f.envMap.value=y,jt.copy(T),jt.x*=-1,jt.y*=-1,jt.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),f.envMapRotation.value.setFromMatrix4(zu.makeRotationFromEuler(jt)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,f.aoMapTransform))}function a(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform))}function s(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function p(f,c,I,y){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*I,f.scale.value=y*.5,c.map&&(f.map.value=c.map,e(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function m(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function g(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function v(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function E(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function M(f,c,I){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ct&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=I.texture,f.transmissionSamplerSize.value.set(I.width,I.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,f.specularIntensityMapTransform))}function D(f,c){c.matcap&&(f.matcap.value=c.matcap)}function C(f,c){const I=n.get(c).light;f.referencePosition.value.setFromMatrixPosition(I.matrixWorld),f.nearDistance.value=I.shadow.camera.near,f.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xu(t,n,e,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,y){const T=y.program;i.uniformBlockBinding(I,T)}function m(I,y){let T=r[I.id];T===void 0&&(D(I),T=g(I),r[I.id]=T,I.addEventListener("dispose",f));const H=y.program;i.updateUBOMapping(I,H);const P=n.render.frame;o[I.id]!==P&&(E(I),o[I.id]=P)}function g(I){const y=v();I.__bindingPointIndex=y;const T=t.createBuffer(),H=I.__size,P=I.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,H,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function v(){for(let I=0;I<s;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(I){const y=r[I.id],T=I.uniforms,H=I.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let P=0,N=T.length;P<N;P++){const B=Array.isArray(T[P])?T[P]:[T[P]];for(let _=0,u=B.length;_<u;_++){const R=B[_];if(M(R,P,_,H)===!0){const Y=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let j=0;j<G.length;j++){const z=G[j],Q=C(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,Y+q,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function M(I,y,T,H){const P=I.value,N=y+"_"+T;if(H[N]===void 0)return typeof P=="number"||typeof P=="boolean"?H[N]=P:H[N]=P.clone(),!0;{const B=H[N];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return H[N]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function D(I){const y=I.uniforms;let T=0;const H=16;for(let N=0,B=y.length;N<B;N++){const _=Array.isArray(y[N])?y[N]:[y[N]];for(let u=0,R=_.length;u<R;u++){const Y=_[u],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let q=0,j=G.length;q<j;q++){const z=G[q],Q=C(z),F=T%H,_e=F%Q.boundary,Te=F+_e;T+=_e,Te!==0&&H-Te<Q.storage&&(T+=H-Te),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=Q.storage}}}const P=T%H;return P>0&&(T+=H-P),I.__size=T,I.__cache={},this}function C(I){const y={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(y.boundary=4,y.storage=4):I.isVector2?(y.boundary=8,y.storage=8):I.isVector3||I.isColor?(y.boundary=16,y.storage=12):I.isVector4?(y.boundary=16,y.storage=16):I.isMatrix3?(y.boundary=48,y.storage=48):I.isMatrix4?(y.boundary=64,y.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),y}function f(I){const y=I.target;y.removeEventListener("dispose",f);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function c(){for(const I in r)t.deleteBuffer(r[I]);a=[],r={},o={}}return{bind:p,update:m,dispose:c}}class qu{constructor(n={}){const{canvas:e=Aa(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=a;const D=new Uint32Array(4),C=new Int32Array(4);let f=null,c=null;const I=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ki,this.toneMapping=Xt,this.toneMappingExposure=1;const T=this;let H=!1,P=0,N=0,B=null,_=-1,u=null;const R=new Tt,Y=new Tt;let G=null;const q=new je(0);let j=0,z=e.width,Q=e.height,F=1,_e=null,Te=null;const De=new Tt(0,0,z,Q),ze=new Tt(0,0,z,Q);let nt=!1;const V=new Ao;let J=!1,ue=!1;this.transmissionResolutionScale=1;const ie=new Nt,Me=new Nt,ye=new Ce,Ie=new Tt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ot(){return B===null?F:1}let S=i;function bt(d,b){return e.getContext(d,b)}try{const d={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",oe,!1),S===null){const b="webgl2";if(S=bt(b,d),S===null)throw bt(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let Ne,Oe,ge,Ke,me,h,l,w,W,K,k,he,re,ce,ke,Z,le,Se,be,de,Fe,Pe,Ye,x;function te(){Ne=new ef(S),Ne.init(),Pe=new Fu(S,Ne),Oe=new Kd(S,Ne,n,Pe),ge=new Nu(S,Ne),Oe.reverseDepthBuffer&&E&&ge.buffers.depth.setReversed(!0),Ke=new rf(S),me=new Tu,h=new Ou(S,Ne,ge,me,Oe,Pe,Ke),l=new Zd(T),w=new Qd(T),W=new dc(S),Ye=new qd(S,W),K=new tf(S,W,Ke,Ye),k=new af(S,K,W,Ke),be=new of(S,Oe,h),Z=new $d(me),he=new Mu(T,l,w,Ne,Oe,Ye,Z),re=new Wu(T,me),ce=new bu,ke=new Pu(Ne),Se=new Xd(T,l,w,ge,k,M,p),le=new Iu(T,k,Oe),x=new Xu(S,Ke,Oe,ge),de=new Yd(S,Ne,Ke),Fe=new nf(S,Ne,Ke),Ke.programs=he.programs,T.capabilities=Oe,T.extensions=Ne,T.properties=me,T.renderLists=ce,T.shadowMap=le,T.state=ge,T.info=Ke}te();const O=new Vu(T,S);this.xr=O,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const d=Ne.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=Ne.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(d){d!==void 0&&(F=d,this.setSize(z,Q,!1))},this.getSize=function(d){return d.set(z,Q)},this.setSize=function(d,b,L=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=d,Q=b,e.width=Math.floor(d*F),e.height=Math.floor(b*F),L===!0&&(e.style.width=d+"px",e.style.height=b+"px"),this.setViewport(0,0,d,b)},this.getDrawingBufferSize=function(d){return d.set(z*F,Q*F).floor()},this.setDrawingBufferSize=function(d,b,L){z=d,Q=b,F=L,e.width=Math.floor(d*L),e.height=Math.floor(b*L),this.setViewport(0,0,d,b)},this.getCurrentViewport=function(d){return d.copy(R)},this.getViewport=function(d){return d.copy(De)},this.setViewport=function(d,b,L,U){d.isVector4?De.set(d.x,d.y,d.z,d.w):De.set(d,b,L,U),ge.viewport(R.copy(De).multiplyScalar(F).round())},this.getScissor=function(d){return d.copy(ze)},this.setScissor=function(d,b,L,U){d.isVector4?ze.set(d.x,d.y,d.z,d.w):ze.set(d,b,L,U),ge.scissor(Y.copy(ze).multiplyScalar(F).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(d){ge.setScissorTest(nt=d)},this.setOpaqueSort=function(d){_e=d},this.setTransparentSort=function(d){Te=d},this.getClearColor=function(d){return d.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(d=!0,b=!0,L=!0){let U=0;if(d){let A=!1;if(B!==null){const $=B.texture.format;A=$===Po||$===Lo||$===Do}if(A){const $=B.texture.type,ne=$===nn||$===Ln||$===ri||$===Pn||$===Io||$===Uo,se=Se.getClearColor(),fe=Se.getClearAlpha(),Ae=se.r,Re=se.g,ve=se.b;ne?(D[0]=Ae,D[1]=Re,D[2]=ve,D[3]=fe,S.clearBufferuiv(S.COLOR,0,D)):(C[0]=Ae,C[1]=Re,C[2]=ve,C[3]=fe,S.clearBufferiv(S.COLOR,0,C))}else U|=S.COLOR_BUFFER_BIT}b&&(U|=S.DEPTH_BUFFER_BIT),L&&(U|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),Se.dispose(),ce.dispose(),ke.dispose(),me.dispose(),l.dispose(),w.dispose(),k.dispose(),Ye.dispose(),x.dispose(),he.dispose(),O.dispose(),O.removeEventListener("sessionstart",ir),O.removeEventListener("sessionend",rr),Kt.stop()};function X(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const d=Ke.autoReset,b=le.enabled,L=le.autoUpdate,U=le.needsUpdate,A=le.type;te(),Ke.autoReset=d,le.enabled=b,le.autoUpdate=L,le.needsUpdate=U,le.type=A}function oe(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function we(d){const b=d.target;b.removeEventListener("dispose",we),it(b)}function it(d){mt(d),me.remove(d)}function mt(d){const b=me.get(d).programs;b!==void 0&&(b.forEach(function(L){he.releaseProgram(L)}),d.isShaderMaterial&&he.releaseShaderCache(d))}this.renderBufferDirect=function(d,b,L,U,A,$){b===null&&(b=tt);const ne=A.isMesh&&A.matrixWorld.determinant()<0,se=_a(d,b,L,U,A);ge.setMaterial(U,ne);let fe=L.index,Ae=1;if(U.wireframe===!0){if(fe=K.getWireframeAttribute(L),fe===void 0)return;Ae=2}const Re=L.drawRange,ve=L.attributes.position;let He=Re.start*Ae,We=(Re.start+Re.count)*Ae;$!==null&&(He=Math.max(He,$.start*Ae),We=Math.min(We,($.start+$.count)*Ae)),fe!==null?(He=Math.max(He,0),We=Math.min(We,fe.count)):ve!=null&&(He=Math.max(He,0),We=Math.min(We,ve.count));const at=We-He;if(at<0||at===1/0)return;Ye.setup(A,U,se,L,fe);let rt,Ge=de;if(fe!==null&&(rt=W.get(fe),Ge=Fe,Ge.setIndex(rt)),A.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*ot()),Ge.setMode(S.LINES)):Ge.setMode(S.TRIANGLES);else if(A.isLine){let Ee=U.linewidth;Ee===void 0&&(Ee=1),ge.setLineWidth(Ee*ot()),A.isLineSegments?Ge.setMode(S.LINES):A.isLineLoop?Ge.setMode(S.LINE_LOOP):Ge.setMode(S.LINE_STRIP)}else A.isPoints?Ge.setMode(S.POINTS):A.isSprite&&Ge.setMode(S.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)Ge.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ge.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const Ee=A._multiDrawStarts,ft=A._multiDrawCounts,Xe=A._multiDrawCount,Lt=fe?W.get(fe).bytesPerElement:1,an=me.get(U).currentProgram.getUniforms();for(let xt=0;xt<Xe;xt++)an.setValue(S,"_gl_DrawID",xt),Ge.render(Ee[xt]/Lt,ft[xt])}else if(A.isInstancedMesh)Ge.renderInstances(He,at,A.count);else if(L.isInstancedBufferGeometry){const Ee=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,ft=Math.min(L.instanceCount,Ee);Ge.renderInstances(He,at,ft)}else Ge.render(He,at)};function qe(d,b,L){d.transparent===!0&&d.side===Gt&&d.forceSinglePass===!1?(d.side=Ct,d.needsUpdate=!0,kn(d,b,L),d.side=wn,d.needsUpdate=!0,kn(d,b,L),d.side=Gt):kn(d,b,L)}this.compile=function(d,b,L=null){L===null&&(L=d),c=ke.get(L),c.init(b),y.push(c),L.traverseVisible(function(A){A.isLight&&A.layers.test(b.layers)&&(c.pushLight(A),A.castShadow&&c.pushShadow(A))}),d!==L&&d.traverseVisible(function(A){A.isLight&&A.layers.test(b.layers)&&(c.pushLight(A),A.castShadow&&c.pushShadow(A))}),c.setupLights();const U=new Set;return d.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const $=A.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];qe(se,L,A),U.add(se)}else qe($,L,A),U.add($)}),y.pop(),c=null,U},this.compileAsync=function(d,b,L=null){const U=this.compile(d,b,L);return new Promise(A=>{function $(){if(U.forEach(function(ne){me.get(ne).currentProgram.isReady()&&U.delete(ne)}),U.size===0){A(d);return}setTimeout($,10)}Ne.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Pt=null;function Bt(d){Pt&&Pt(d)}function ir(){Kt.stop()}function rr(){Kt.start()}const Kt=new Vo;Kt.setAnimationLoop(Bt),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(d){Pt=d,O.setAnimationLoop(d),d===null?Kt.stop():Kt.start()},O.addEventListener("sessionstart",ir),O.addEventListener("sessionend",rr),this.render=function(d,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(b),b=O.getCamera()),d.isScene===!0&&d.onBeforeRender(T,d,b,B),c=ke.get(d,y.length),c.init(b),y.push(c),Me.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),V.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,J=Z.init(this.clippingPlanes,ue),f=ce.get(d,I.length),f.init(),I.push(f),O.enabled===!0&&O.isPresenting===!0){const $=T.xr.getDepthSensingMesh();$!==null&&ui($,b,-1/0,T.sortObjects)}ui(d,b,0,T.sortObjects),f.finish(),T.sortObjects===!0&&f.sort(_e,Te),Be=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Be&&Se.addToRenderList(f,d),this.info.render.frame++,J===!0&&Z.beginShadows();const L=c.state.shadowsArray;le.render(L,d,b),J===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=f.opaque,A=f.transmissive;if(c.setupLights(),b.isArrayCamera){const $=b.cameras;if(A.length>0)for(let ne=0,se=$.length;ne<se;ne++){const fe=$[ne];ar(U,A,d,fe)}Be&&Se.render(d);for(let ne=0,se=$.length;ne<se;ne++){const fe=$[ne];or(f,d,fe,fe.viewport)}}else A.length>0&&ar(U,A,d,b),Be&&Se.render(d),or(f,d,b);B!==null&&N===0&&(h.updateMultisampleRenderTarget(B),h.updateRenderTargetMipmap(B)),d.isScene===!0&&d.onAfterRender(T,d,b),Ye.resetDefaultState(),_=-1,u=null,y.pop(),y.length>0?(c=y[y.length-1],J===!0&&Z.setGlobalState(T.clippingPlanes,c.state.camera)):c=null,I.pop(),I.length>0?f=I[I.length-1]:f=null};function ui(d,b,L,U){if(d.visible===!1)return;if(d.layers.test(b.layers)){if(d.isGroup)L=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(b);else if(d.isLight)c.pushLight(d),d.castShadow&&c.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||V.intersectsSprite(d)){U&&Ie.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Me);const ne=k.update(d),se=d.material;se.visible&&f.push(d,ne,se,L,Ie.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||V.intersectsObject(d))){const ne=k.update(d),se=d.material;if(U&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Ie.copy(d.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ie.copy(ne.boundingSphere.center)),Ie.applyMatrix4(d.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const fe=ne.groups;for(let Ae=0,Re=fe.length;Ae<Re;Ae++){const ve=fe[Ae],He=se[ve.materialIndex];He&&He.visible&&f.push(d,ne,He,L,Ie.z,ve)}}else se.visible&&f.push(d,ne,se,L,Ie.z,null)}}const $=d.children;for(let ne=0,se=$.length;ne<se;ne++)ui($[ne],b,L,U)}function or(d,b,L,U){const A=d.opaque,$=d.transmissive,ne=d.transparent;c.setupLightsView(L),J===!0&&Z.setGlobalState(T.clippingPlanes,L),U&&ge.viewport(R.copy(U)),A.length>0&&Bn(A,b,L),$.length>0&&Bn($,b,L),ne.length>0&&Bn(ne,b,L),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ar(d,b,L,U){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[U.id]===void 0&&(c.state.transmissionRenderTarget[U.id]=new gn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?ai:nn,minFilter:bn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const $=c.state.transmissionRenderTarget[U.id],ne=U.viewport||R;$.setSize(ne.z*T.transmissionResolutionScale,ne.w*T.transmissionResolutionScale);const se=T.getRenderTarget();T.setRenderTarget($),T.getClearColor(q),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),Be&&Se.render(L);const fe=T.toneMapping;T.toneMapping=Xt;const Ae=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),c.setupLightsView(U),J===!0&&Z.setGlobalState(T.clippingPlanes,U),Bn(d,L,U),h.updateMultisampleRenderTarget($),h.updateRenderTargetMipmap($),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,He=b.length;ve<He;ve++){const We=b[ve],at=We.object,rt=We.geometry,Ge=We.material,Ee=We.group;if(Ge.side===Gt&&at.layers.test(U.layers)){const ft=Ge.side;Ge.side=Ct,Ge.needsUpdate=!0,sr(at,L,U,rt,Ge,Ee),Ge.side=ft,Ge.needsUpdate=!0,Re=!0}}Re===!0&&(h.updateMultisampleRenderTarget($),h.updateRenderTargetMipmap($))}T.setRenderTarget(se),T.setClearColor(q,j),Ae!==void 0&&(U.viewport=Ae),T.toneMapping=fe}function Bn(d,b,L){const U=b.isScene===!0?b.overrideMaterial:null;for(let A=0,$=d.length;A<$;A++){const ne=d[A],se=ne.object,fe=ne.geometry,Ae=U===null?ne.material:U,Re=ne.group;se.layers.test(L.layers)&&sr(se,b,L,fe,Ae,Re)}}function sr(d,b,L,U,A,$){d.onBeforeRender(T,b,L,U,A,$),d.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),A.onBeforeRender(T,b,L,U,d,$),A.transparent===!0&&A.side===Gt&&A.forceSinglePass===!1?(A.side=Ct,A.needsUpdate=!0,T.renderBufferDirect(L,b,U,A,d,$),A.side=wn,A.needsUpdate=!0,T.renderBufferDirect(L,b,U,A,d,$),A.side=Gt):T.renderBufferDirect(L,b,U,A,d,$),d.onAfterRender(T,b,L,U,A,$)}function kn(d,b,L){b.isScene!==!0&&(b=tt);const U=me.get(d),A=c.state.lights,$=c.state.shadowsArray,ne=A.state.version,se=he.getParameters(d,A.state,$,b,L),fe=he.getProgramCacheKey(se);let Ae=U.programs;U.environment=d.isMeshStandardMaterial?b.environment:null,U.fog=b.fog,U.envMap=(d.isMeshStandardMaterial?w:l).get(d.envMap||U.environment),U.envMapRotation=U.environment!==null&&d.envMap===null?b.environmentRotation:d.envMapRotation,Ae===void 0&&(d.addEventListener("dispose",we),Ae=new Map,U.programs=Ae);let Re=Ae.get(fe);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===ne)return lr(d,se),Re}else se.uniforms=he.getUniforms(d),d.onBeforeCompile(se,T),Re=he.acquireProgram(se,fe),Ae.set(fe,Re),U.uniforms=se.uniforms;const ve=U.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ve.clippingPlanes=Z.uniform),lr(d,se),U.needsLights=va(d),U.lightsStateVersion=ne,U.needsLights&&(ve.ambientLightColor.value=A.state.ambient,ve.lightProbe.value=A.state.probe,ve.directionalLights.value=A.state.directional,ve.directionalLightShadows.value=A.state.directionalShadow,ve.spotLights.value=A.state.spot,ve.spotLightShadows.value=A.state.spotShadow,ve.rectAreaLights.value=A.state.rectArea,ve.ltc_1.value=A.state.rectAreaLTC1,ve.ltc_2.value=A.state.rectAreaLTC2,ve.pointLights.value=A.state.point,ve.pointLightShadows.value=A.state.pointShadow,ve.hemisphereLights.value=A.state.hemi,ve.directionalShadowMap.value=A.state.directionalShadowMap,ve.directionalShadowMatrix.value=A.state.directionalShadowMatrix,ve.spotShadowMap.value=A.state.spotShadowMap,ve.spotLightMatrix.value=A.state.spotLightMatrix,ve.spotLightMap.value=A.state.spotLightMap,ve.pointShadowMap.value=A.state.pointShadowMap,ve.pointShadowMatrix.value=A.state.pointShadowMatrix),U.currentProgram=Re,U.uniformsList=null,Re}function cr(d){if(d.uniformsList===null){const b=d.currentProgram.getUniforms();d.uniformsList=jn.seqWithValue(b.seq,d.uniforms)}return d.uniformsList}function lr(d,b){const L=me.get(d);L.outputColorSpace=b.outputColorSpace,L.batching=b.batching,L.batchingColor=b.batchingColor,L.instancing=b.instancing,L.instancingColor=b.instancingColor,L.instancingMorph=b.instancingMorph,L.skinning=b.skinning,L.morphTargets=b.morphTargets,L.morphNormals=b.morphNormals,L.morphColors=b.morphColors,L.morphTargetsCount=b.morphTargetsCount,L.numClippingPlanes=b.numClippingPlanes,L.numIntersection=b.numClipIntersection,L.vertexAlphas=b.vertexAlphas,L.vertexTangents=b.vertexTangents,L.toneMapping=b.toneMapping}function _a(d,b,L,U,A){b.isScene!==!0&&(b=tt),h.resetTextureUnits();const $=b.fog,ne=U.isMeshStandardMaterial?b.environment:null,se=B===null?T.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:si,fe=(U.isMeshStandardMaterial?w:l).get(U.envMap||ne),Ae=U.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Re=!!L.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ve=!!L.morphAttributes.position,He=!!L.morphAttributes.normal,We=!!L.morphAttributes.color;let at=Xt;U.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(at=T.toneMapping);const rt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Ge=rt!==void 0?rt.length:0,Ee=me.get(U),ft=c.state.lights;if(J===!0&&(ue===!0||d!==u)){const gt=d===u&&U.id===_;Z.setState(U,d,gt)}let Xe=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ft.state.version||Ee.outputColorSpace!==se||A.isBatchedMesh&&Ee.batching===!1||!A.isBatchedMesh&&Ee.batching===!0||A.isBatchedMesh&&Ee.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&Ee.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&Ee.instancing===!1||!A.isInstancedMesh&&Ee.instancing===!0||A.isSkinnedMesh&&Ee.skinning===!1||!A.isSkinnedMesh&&Ee.skinning===!0||A.isInstancedMesh&&Ee.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Ee.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&Ee.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&Ee.instancingMorph===!1&&A.morphTexture!==null||Ee.envMap!==fe||U.fog===!0&&Ee.fog!==$||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==ve||Ee.morphNormals!==He||Ee.morphColors!==We||Ee.toneMapping!==at||Ee.morphTargetsCount!==Ge)&&(Xe=!0):(Xe=!0,Ee.__version=U.version);let Lt=Ee.currentProgram;Xe===!0&&(Lt=kn(U,b,A));let an=!1,xt=!1,Mn=!1;const Qe=Lt.getUniforms(),At=Ee.uniforms;if(ge.useProgram(Lt.program)&&(an=!0,xt=!0,Mn=!0),U.id!==_&&(_=U.id,xt=!0),an||u!==d){ge.buffers.depth.getReversed()?(ie.copy(d.projectionMatrix),Ra(ie),Ca(ie),Qe.setValue(S,"projectionMatrix",ie)):Qe.setValue(S,"projectionMatrix",d.projectionMatrix),Qe.setValue(S,"viewMatrix",d.matrixWorldInverse);const Et=Qe.map.cameraPosition;Et!==void 0&&Et.setValue(S,ye.setFromMatrixPosition(d.matrixWorld)),Oe.logarithmicDepthBuffer&&Qe.setValue(S,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Qe.setValue(S,"isOrthographic",d.isOrthographicCamera===!0),u!==d&&(u=d,xt=!0,Mn=!0)}if(A.isSkinnedMesh){Qe.setOptional(S,A,"bindMatrix"),Qe.setOptional(S,A,"bindMatrixInverse");const gt=A.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Qe.setValue(S,"boneTexture",gt.boneTexture,h))}A.isBatchedMesh&&(Qe.setOptional(S,A,"batchingTexture"),Qe.setValue(S,"batchingTexture",A._matricesTexture,h),Qe.setOptional(S,A,"batchingIdTexture"),Qe.setValue(S,"batchingIdTexture",A._indirectTexture,h),Qe.setOptional(S,A,"batchingColorTexture"),A._colorsTexture!==null&&Qe.setValue(S,"batchingColorTexture",A._colorsTexture,h));const yt=L.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&be.update(A,L,Lt),(xt||Ee.receiveShadow!==A.receiveShadow)&&(Ee.receiveShadow=A.receiveShadow,Qe.setValue(S,"receiveShadow",A.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(At.envMap.value=fe,At.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&b.environment!==null&&(At.envMapIntensity.value=b.environmentIntensity),xt&&(Qe.setValue(S,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&ga(At,Mn),$&&U.fog===!0&&re.refreshFogUniforms(At,$),re.refreshMaterialUniforms(At,U,F,Q,c.state.transmissionRenderTarget[d.id]),jn.upload(S,cr(Ee),At,h)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(jn.upload(S,cr(Ee),At,h),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Qe.setValue(S,"center",A.center),Qe.setValue(S,"modelViewMatrix",A.modelViewMatrix),Qe.setValue(S,"normalMatrix",A.normalMatrix),Qe.setValue(S,"modelMatrix",A.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const gt=U.uniformsGroups;for(let Et=0,hi=gt.length;Et<hi;Et++){const $t=gt[Et];x.update($t,Lt),x.bind($t,Lt)}}return Lt}function ga(d,b){d.ambientLightColor.needsUpdate=b,d.lightProbe.needsUpdate=b,d.directionalLights.needsUpdate=b,d.directionalLightShadows.needsUpdate=b,d.pointLights.needsUpdate=b,d.pointLightShadows.needsUpdate=b,d.spotLights.needsUpdate=b,d.spotLightShadows.needsUpdate=b,d.rectAreaLights.needsUpdate=b,d.hemisphereLights.needsUpdate=b}function va(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(d,b,L){me.get(d.texture).__webglTexture=b,me.get(d.depthTexture).__webglTexture=L;const U=me.get(d);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=L===void 0,U.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,b){const L=me.get(d);L.__webglFramebuffer=b,L.__useDefaultFramebuffer=b===void 0};const Ea=S.createFramebuffer();this.setRenderTarget=function(d,b=0,L=0){B=d,P=b,N=L;let U=!0,A=null,$=!1,ne=!1;if(d){const fe=me.get(d);if(fe.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(S.FRAMEBUFFER,null),U=!1;else if(fe.__webglFramebuffer===void 0)h.setupRenderTarget(d);else if(fe.__hasExternalTextures)h.rebindTextures(d,me.get(d.texture).__webglTexture,me.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ve=d.depthTexture;if(fe.__boundDepthTexture!==ve){if(ve!==null&&me.has(ve)&&(d.width!==ve.image.width||d.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");h.setupDepthRenderbuffer(d)}}const Ae=d.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const Re=me.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(Re[b])?A=Re[b][L]:A=Re[b],$=!0):d.samples>0&&h.useMultisampledRTT(d)===!1?A=me.get(d).__webglMultisampledFramebuffer:Array.isArray(Re)?A=Re[L]:A=Re,R.copy(d.viewport),Y.copy(d.scissor),G=d.scissorTest}else R.copy(De).multiplyScalar(F).floor(),Y.copy(ze).multiplyScalar(F).floor(),G=nt;if(L!==0&&(A=Ea),ge.bindFramebuffer(S.FRAMEBUFFER,A)&&U&&ge.drawBuffers(d,A),ge.viewport(R),ge.scissor(Y),ge.setScissorTest(G),$){const fe=me.get(d.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+b,fe.__webglTexture,L)}else if(ne){const fe=me.get(d.texture),Ae=b;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,fe.__webglTexture,L,Ae)}else if(d!==null&&L!==0){const fe=me.get(d.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,fe.__webglTexture,L)}_=-1},this.readRenderTargetPixels=function(d,b,L,U,A,$,ne){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=me.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){ge.bindFramebuffer(S.FRAMEBUFFER,se);try{const fe=d.texture,Ae=fe.format,Re=fe.type;if(!Oe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=d.width-U&&L>=0&&L<=d.height-A&&S.readPixels(b,L,U,A,Pe.convert(Ae),Pe.convert(Re),$)}finally{const fe=B!==null?me.get(B).__webglFramebuffer:null;ge.bindFramebuffer(S.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(d,b,L,U,A,$,ne){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=me.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const fe=d.texture,Ae=fe.format,Re=fe.type;if(!Oe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=d.width-U&&L>=0&&L<=d.height-A){ge.bindFramebuffer(S.FRAMEBUFFER,se);const ve=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ve),S.bufferData(S.PIXEL_PACK_BUFFER,$.byteLength,S.STREAM_READ),S.readPixels(b,L,U,A,Pe.convert(Ae),Pe.convert(Re),0);const He=B!==null?me.get(B).__webglFramebuffer:null;ge.bindFramebuffer(S.FRAMEBUFFER,He);const We=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await wa(S,We,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ve),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,$),S.deleteBuffer(ve),S.deleteSync(We),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,b=null,L=0){d.isTexture!==!0&&(fn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,d=arguments[1]);const U=Math.pow(2,-L),A=Math.floor(d.image.width*U),$=Math.floor(d.image.height*U),ne=b!==null?b.x:0,se=b!==null?b.y:0;h.setTexture2D(d,0),S.copyTexSubImage2D(S.TEXTURE_2D,L,0,0,ne,se,A,$),ge.unbindTexture()};const Sa=S.createFramebuffer(),Ma=S.createFramebuffer();this.copyTextureToTexture=function(d,b,L=null,U=null,A=0,$=null){d.isTexture!==!0&&(fn("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,d=arguments[1],b=arguments[2],$=arguments[3]||0,L=null),$===null&&(A!==0?(fn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=A,A=0):$=0);let ne,se,fe,Ae,Re,ve,He,We,at;const rt=d.isCompressedTexture?d.mipmaps[$]:d.image;if(L!==null)ne=L.max.x-L.min.x,se=L.max.y-L.min.y,fe=L.isBox3?L.max.z-L.min.z:1,Ae=L.min.x,Re=L.min.y,ve=L.isBox3?L.min.z:0;else{const yt=Math.pow(2,-A);ne=Math.floor(rt.width*yt),se=Math.floor(rt.height*yt),d.isDataArrayTexture?fe=rt.depth:d.isData3DTexture?fe=Math.floor(rt.depth*yt):fe=1,Ae=0,Re=0,ve=0}U!==null?(He=U.x,We=U.y,at=U.z):(He=0,We=0,at=0);const Ge=Pe.convert(b.format),Ee=Pe.convert(b.type);let ft;b.isData3DTexture?(h.setTexture3D(b,0),ft=S.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(h.setTexture2DArray(b,0),ft=S.TEXTURE_2D_ARRAY):(h.setTexture2D(b,0),ft=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,b.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,b.unpackAlignment);const Xe=S.getParameter(S.UNPACK_ROW_LENGTH),Lt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),an=S.getParameter(S.UNPACK_SKIP_PIXELS),xt=S.getParameter(S.UNPACK_SKIP_ROWS),Mn=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,rt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,rt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ae),S.pixelStorei(S.UNPACK_SKIP_ROWS,Re),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ve);const Qe=d.isDataArrayTexture||d.isData3DTexture,At=b.isDataArrayTexture||b.isData3DTexture;if(d.isDepthTexture){const yt=me.get(d),gt=me.get(b),Et=me.get(yt.__renderTarget),hi=me.get(gt.__renderTarget);ge.bindFramebuffer(S.READ_FRAMEBUFFER,Et.__webglFramebuffer),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let $t=0;$t<fe;$t++)Qe&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.get(d).__webglTexture,A,ve+$t),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.get(b).__webglTexture,$,at+$t)),S.blitFramebuffer(Ae,Re,ne,se,He,We,ne,se,S.DEPTH_BUFFER_BIT,S.NEAREST);ge.bindFramebuffer(S.READ_FRAMEBUFFER,null),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(A!==0||d.isRenderTargetTexture||me.has(d)){const yt=me.get(d),gt=me.get(b);ge.bindFramebuffer(S.READ_FRAMEBUFFER,Sa),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ma);for(let Et=0;Et<fe;Et++)Qe?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,yt.__webglTexture,A,ve+Et):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,yt.__webglTexture,A),At?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,gt.__webglTexture,$,at+Et):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,gt.__webglTexture,$),A!==0?S.blitFramebuffer(Ae,Re,ne,se,He,We,ne,se,S.COLOR_BUFFER_BIT,S.NEAREST):At?S.copyTexSubImage3D(ft,$,He,We,at+Et,Ae,Re,ne,se):S.copyTexSubImage2D(ft,$,He,We,Ae,Re,ne,se);ge.bindFramebuffer(S.READ_FRAMEBUFFER,null),ge.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else At?d.isDataTexture||d.isData3DTexture?S.texSubImage3D(ft,$,He,We,at,ne,se,fe,Ge,Ee,rt.data):b.isCompressedArrayTexture?S.compressedTexSubImage3D(ft,$,He,We,at,ne,se,fe,Ge,rt.data):S.texSubImage3D(ft,$,He,We,at,ne,se,fe,Ge,Ee,rt):d.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,$,He,We,ne,se,Ge,Ee,rt.data):d.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,$,He,We,rt.width,rt.height,Ge,rt.data):S.texSubImage2D(S.TEXTURE_2D,$,He,We,ne,se,Ge,Ee,rt);S.pixelStorei(S.UNPACK_ROW_LENGTH,Xe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Lt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,an),S.pixelStorei(S.UNPACK_SKIP_ROWS,xt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Mn),$===0&&b.generateMipmaps&&S.generateMipmap(ft),ge.unbindTexture()},this.copyTextureToTexture3D=function(d,b,L=null,U=null,A=0){return d.isTexture!==!0&&(fn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,U=arguments[1]||null,d=arguments[2],b=arguments[3],A=arguments[4]||0),fn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,b,L,U,A)},this.initRenderTarget=function(d){me.get(d).__webglFramebuffer===void 0&&h.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?h.setTextureCube(d,0):d.isData3DTexture?h.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?h.setTexture2DArray(d,0):h.setTexture2D(d,0),ge.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,ge.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const e=this.getContext();e.drawingBufferColorspace=st._getDrawingBufferColorSpace(n),e.unpackColorSpace=st._getUnpackColorSpace()}}const cn=new Dn(0,0,0,"YXZ"),ln=new Ce,Yu={type:"change"},Ku={type:"lock"},$u={type:"unlock"},_o=Math.PI/2;class Zu extends $s{constructor(n,e=null){super(n,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=ju.bind(this),this._onPointerlockChange=Ju.bind(this),this._onPointerlockError=Qu.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(n){return n.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(n){if(this.enabled===!1)return;const e=this.object;ln.setFromMatrixColumn(e.matrix,0),ln.crossVectors(e.up,ln),e.position.addScaledVector(ln,n)}moveRight(n){if(this.enabled===!1)return;const e=this.object;ln.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(ln,n)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function ju(t){if(this.enabled===!1||this.isLocked===!1)return;const n=this.object;cn.setFromQuaternion(n.quaternion),cn.y-=t.movementX*.002*this.pointerSpeed,cn.x-=t.movementY*.002*this.pointerSpeed,cn.x=Math.max(_o-this.maxPolarAngle,Math.min(_o-this.minPolarAngle,cn.x)),n.quaternion.setFromEuler(cn),this.dispatchEvent(Yu)}function Ju(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ku),this.isLocked=!0):(this.dispatchEvent($u),this.isLocked=!1)}function Qu(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}var _n;class eh{constructor(n,e,i){xe(this,"radius",.5);xe(this,"height",1.8);xe(this,"maxSpeed",10);xe(this,"jumpSpeed",10);xe(this,"onGround",!1);xe(this,"input",new Ce);xe(this,"velocity",new Ce(0,0,0));fr(this,_n,new Ce);xe(this,"camera",new Rn(75,window.innerWidth/window.innerHeight,.1,100));xe(this,"controls",new Zu(this.camera,document.body));xe(this,"selectedCoords",null);xe(this,"selectedCoordsNormal",null);this.socket=i,this.position.set(10,120,10),n.add(this.camera),this.scene=n,this.world=e,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),this.boundsHelper=new Je(new Zs(this.radius,this.radius,this.height,16),new Wt({wireframe:!0}));const r=new pt(.1,.1,.3),o=new oi().load("images/hand.png");o.colorSpace=Ki,o.magFilter=It,o.minFilter=It;const a=new Wt({map:o});this.handMesh=new Je(r,a),this.handMesh.position.set(.4,-.25,-.4),this.handMesh.rotation.x=.6,this.handMesh.rotation.z=-.4,this.handMesh.rotation.y=-.5,n.add(this.handMesh),this.camera.add(this.handMesh),this.punchDirection=1;const s=new Wt({color:0,transparent:!0,opacity:.2}),p=new oi().load("images/break.png"),m=new $e({map:p,transparent:!0}),g=new pt(1.01,1.01,1.01);this.selectionBreakHelper=new Je(g,m),this.scene.add(this.selectionBreakHelper);const v=new pt(1.01,1.01,1.01);this.selectionHelper=new Je(v,s),n.add(this.selectionHelper),this.raycaster=new js,this.mouse=new _t,this.raycaster.far=5,document.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this)),this.isDestroying=!1}onMouseDown(n){var i,r;if(this.controls.isLocked&&(this.isMouseDown=!0,this.animateHand(),this.selectedCoords))if(n.button==2){const o=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(((i=this.inventory.getSelectedItem())==null?void 0:i.block)!==void 0&&ht(o.id).interface!==!0&&ht((r=this.inventory.getSelectedItem())==null?void 0:r.block).type==="block"){this.world.addBlock(this.selectedCoordsNormal.x,this.selectedCoordsNormal.y,this.selectedCoordsNormal.z,this.inventory.getSelectedItem().block),this.inventory.removeBlock(this.inventory.getSelectedItem().block);var e=new Audio("audio/dirt1.ogg");e.play(),this.socket.emit("addBlock",{x:this.selectedCoordsNormal.x,y:this.selectedCoordsNormal.y,z:this.selectedCoordsNormal.z,blockId:this.inventory.getSelectedItem().block})}else ht(o.id).interface===!0&&this.ui.open(o.id)}else this.startDestroyingBlock(n)}startDestroyingBlock(n){var g,v;if(!this.isMouseDown||!this.selectedCoords)return;let e=0;const i=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);console.log(i);let r=ht(i.id).hardness*1e3,o=1;r*=1.5;const a=(g=this.inventory.getSelectedItem())==null?void 0:g.block;let s=null;a&&(s=ht(a),s.type=="item"&&s.tool_type==ht(i.id).tool&&(o=s.tool_material));let p=o/ht(i.id).hardness;(v=ht(i.id))!=null&&v.need_tool&&!(s&&s.type=="item"&&s.tool_type==ht(i.id).tool)?p/=100:p/=30,r=Math.ceil(1/p)/20*1e3,p>1&&(r=0),console.log(r),this.isDestroying=!0,this.animateBlockBreaking(r),this.destructionInterval=setInterval(()=>{if(!this.isMouseDown){clearInterval(this.destructionInterval),this.isDestroying=!1;return}if(e+=100,e>=r){const M=ht(i.id);Object.hasOwn(M,"drops")?this.inventory.addBlock(M.drops):this.inventory.addBlock(i.id),this.world.removeBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z),this.socket.emit("removeBlock",{x:this.selectedCoords.x,y:this.selectedCoords.y,z:this.selectedCoords.z});var E=new Audio("audio/dirt1.ogg");E.play(),this.isDestroying=!1,clearInterval(this.destructionInterval),setTimeout(()=>{this.startDestroyingBlock(n)},200)}},100)}onMouseUp(n){this.controls.isLocked&&n.button!=2&&(this.isDestroying=!1,clearInterval(this.destructionInterval),this.isMouseDown=!1)}animateHand(){this.handMesh.position.y+=this.punchDirection*.02,(this.handMesh.position.y>-.4||this.handMesh.position.y<-.6)&&(this.punchDirection*=-1)}update(n){this.updateRaycaster(n)}updateRaycaster(n){const e=this.raycaster.intersectObjects(n.children,!0);if(this.controls.isLocked)if(this.raycaster.setFromCamera(this.mouse,this.camera),e.length>0){const i=e[0],r=i.object.parent,o=new Nt;i.object.getMatrixAt(i.instanceId,o),this.selectedCoords=r.position.clone(),this.selectedCoords.applyMatrix4(o),this.selectedCoords.set(Math.round(this.selectedCoords.x),Math.round(this.selectedCoords.y),Math.round(this.selectedCoords.z)),this.selectedCoordsNormal=this.selectedCoords.clone().add(i.normal);const a=this.world.getBlock(this.selectedCoords.x,this.selectedCoords.y,this.selectedCoords.z);if(a){new Wt({color:0,transparent:!0,opacity:.2});let s=ht(a.id).geometry;this.selectionHelper.scale.set(s.parameters.width+.01,s.parameters.height+.01,s.parameters.depth+.01)}this.selectionHelper.position.copy(this.selectedCoords),this.selectionHelper.visible=!0}else this.selectedCoords=null,this.selectionHelper.visible=!1}animateBlockBreaking(n){this.selectionBreakHelper.position.copy(this.selectedCoords),this.selectionBreakHelper.visible=!0;const i=n/6;this.nextStep(i,0)}nextStep(n,e){if(e<=6&&this.isDestroying){const o=e%2,a=Math.floor(e/2);this.selectionBreakHelper.material.map.offset.set(o/2,a/3),this.selectionBreakHelper.material.map.repeat.set(1/2,1/3),e++,setTimeout(this.nextStep.bind(this),n,n,e)}else this.selectionBreakHelper.visible=!1}setBlockInHand(n){var e;if((e=ht(n))!=null&&e.material){this.scene.remove(this.meshHandItem),this.camera.remove(this.meshHandItem);const i=new pt(.3,.3,.3);this.meshHandItem=new Je(i,ht(n).material),this.meshHandItem.count=0,this.meshHandItem.castShadow=!0,this.meshHandItem.receiveShadow=!0,this.meshHandItem.rotation.x=-.2,this.meshHandItem.rotation.z=0,this.meshHandItem.rotation.y=.6,this.meshHandItem.position.set(.55,-.45,-.5),this.scene.add(this.meshHandItem),this.camera.add(this.meshHandItem),this.handMesh.visible=!1}else this.meshHandItem&&(this.meshHandItem.visible=!1),this.handMesh.visible=!0}get worldVelocity(){return Hn(this,_n).copy(this.velocity),Hn(this,_n).applyEuler(new Dn(0,this.camera.rotation.y,0)),Hn(this,_n)}applyWorldDeltaVelocity(n){n.applyEuler(new Dn(0,-this.camera.rotation.y,0)),this.velocity.add(n)}applyInputs(n){if(this.controls.isLocked){this.velocity.x=this.input.x,this.velocity.z=this.input.z,this.controls.moveRight(this.velocity.x*n),this.controls.moveForward(this.velocity.z*n),this.position.y+=this.velocity.y*n,document.getElementById("player-position").innerHTML=this.toString();const e=new Ce;this.camera.getWorldDirection(e),this.socket.emit("playerState",{id:this.socket.id,position:{x:this.position.x,y:this.position.y,z:this.position.z},direction:{x:e.x,y:e.y,z:e.z}})}}updateBoundsHelper(){this.boundsHelper.position.copy(this.position),this.boundsHelper.position.y-=this.height/2}onKeyDown(n){n.code==="ShiftLeft"&&(keys.speed=!0),n.code==="KeyW"&&(this.input.z=this.maxSpeed),n.code==="KeyS"&&(this.input.z=-this.maxSpeed),n.code==="KeyA"&&(this.input.x=-this.maxSpeed),n.code==="KeyD"&&(this.input.x=this.maxSpeed),n.code==="Space"&&this.onGround&&(this.velocity.y+=this.jumpSpeed),n.code==="F5"&&this.camera.position.set(this.camera.position.x,this.camera.position.y+1,this.camera.position.z)}onKeyUp(n){n.code==="KeyW"&&(this.input.z=0),n.code==="KeyS"&&(this.input.z=0),n.code==="KeyA"&&(this.input.x=0),n.code==="KeyD"&&(this.input.x=0)}get position(){return this.camera.position}toString(){let n="";return n+=`X: ${this.position.x.toFixed(3)} `,n+=`Y: ${this.position.y.toFixed(3)} `,n+=`Z: ${this.position.z.toFixed(3)}`,n}save(){(async()=>{new Blob([JSON.stringify(this.position)]).size;const n=this.position;await nh(n)})()}load(){(async()=>{const n=await ih();this.position.set(n.x,n.y,n.z)})()}setInventory(n){this.inventory=n}setUI(n){this.ui=n}}_n=new WeakMap;const th="minecraftDB",Un="minecraftData";function Yo(){return new Promise((t,n)=>{const e=indexedDB.open(th,1);e.onupgradeneeded=function(i){i.target.result.createObjectStore(Un,{keyPath:"id"})},e.onsuccess=function(i){t(i.target.result)},e.onerror=function(i){n(i.target.error)}})}async function nh(t){const e=(await Yo()).transaction([Un],"readwrite");return e.objectStore(Un).put({id:"minecraft_player_position",data:t}),e.complete}async function ih(){const t=await Yo();return new Promise((n,e)=>{const o=t.transaction([Un],"readonly").objectStore(Un).get("minecraft_player_position");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){e(a.target.error)}})}class rh{constructor(n){xe(this,"m_w",123456789);xe(this,"m_z",987654321);xe(this,"mask",4294967295);this.m_w=123456789+n&this.mask,this.m_z=987654321-n&this.mask}random(){this.m_z=36969*(this.m_z&65535)+(this.m_z>>16)&this.mask,this.m_w=18e3*(this.m_w&65535)+(this.m_w>>16)&this.mask;let n=(this.m_z<<16)+(this.m_w&65535)>>>0;return n/=4294967296,n}}class go extends zt{constructor(e,i,r){super();xe(this,"chunks");xe(this,"chunkSize");xe(this,"height");xe(this,"meshs");xe(this,"data",[]);this.chunks=new Map,this.chunkSize=e.width,this.height=e.height,this.params=i,this.dataStore=r,this.rng=new rh(this.params.seed)}initializeTerrain(){this.data=[];for(let e=0;e<this.chunkSize;e++){const i=[];for(let r=0;r<this.height;r++){const o=[];for(let a=0;a<this.chunkSize;a++)o.push({id:pe.empty.id,instanceId:null,inventory:null});i.push(o)}this.data.push(i)}}generate(){if(this.dataStore.contains(this.position.x,this.position.z))this.data=this.dataStore.get(this.position.x,this.position.z),this.generateMesh();else{const e=new Worker(new URL("/minecraft-threejs/assets/chunkWorker-BKcVXdZT.js",import.meta.url),{type:"module"});e.onmessage=i=>{i.data,this.data=i.data.data,this.dataStore.set(this.position.x,this.position.z,this.data),this.generateMesh(),e.terminate()},e.onerror=i=>{console.error(i),e.terminate()},e.onmessageerror=i=>{console.error("Message error in Worker:",i)},e.postMessage({chunkSize:this.chunkSize,chunkHeight:this.height,params:this.params,position:this.position,rng:this.rng})}}generateResources(e,i,r,o){const a=new SimplexNoise(e);Js.forEach(s=>{a.noise3D((this.position.x+i)/s.scale.x,(this.position.y+r)/s.scale.y,(this.position.z+o)/s.scale.z)>s.scarcity&&this.setBlockId(i,r,o,s.id)})}generateTerrain(e){var r,o;const i=new SimplexNoise(e);for(let a=0;a<this.chunkSize;a++)for(let s=0;s<this.chunkSize;s++){const p=i.noise2D((this.position.x+a)/this.params.terrain.scale,(this.position.z+s)/this.params.terrain.scale),m=this.params.terrain.offset+this.params.terrain.magnitude*p;let g=Math.floor(m*this.height);g=Math.max(1,Math.min(g,this.height-1));for(let v=0;v<this.height;v++)v<g&&v>g-3&&((r=this.getBlock(a,v,s))==null?void 0:r.id)===pe.empty.id&&this.setBlockId(a,v,s,pe.dirt.id),v<g&&((o=this.getBlock(a,v,s))==null?void 0:o.id)===pe.empty.id?(this.setBlockId(a,v,s,pe.stone.id),this.generateResources(i,a,v,s)):v==g&&(this.setBlockId(a,v,s,pe.grass.id),Math.random()<this.params.trees.frequency&&this.generateTree(e,1,a,g+1,s))}}generateTree(e,i,r,o,a){const s=this.params.trees.trunk.minHeight,p=this.params.trees.trunk.maxHeight,m=Math.round(s+(p-s)*Math.random()+1);for(let g=o;g<o+m;g++)this.setBlockId(r,g,a,pe.log.id);this.generateTreeCanopy(i,r,o+m,a,e)}generateTreeCanopy(e,i,r,o,a){const s=this.params.trees.canopy.minRadius,p=this.params.trees.canopy.maxRadius,m=Math.round(s+(p-s)*Math.random());for(let g=-m;g<=m;g++)for(let v=-m;v<=m;v++)for(let E=-m;E<=m;E++){const M=Math.random();if(g*g+v*v+E*E>m*m)continue;const D=this.getBlock(i+g,r+v,o+E);D&&D.id!==pe.empty.id||M<this.params.trees.canopy.density&&this.getBlock(i+g,r+v,o+E)!==null&&this.setBlockId(i+g,r+v,o+E,pe.leaves.id)}}generateMesh(){const e=this.chunkSize*this.chunkSize*40,i={};Object.values(pe).filter(o=>o.id!==pe.empty.id&&o.type==="block").forEach(o=>{const a=new Qs(o.geometry,o.material,e);a.name=o.id,a.count=0,a.castShadow=!0,a.receiveShadow=!0,i[o.id]=a});const r=new Nt;for(let o=0;o<this.chunkSize;o++)for(let a=0;a<this.chunkSize;a++)for(let s=0;s<this.height;s++){const p=this.getBlock(o,s,a);if(!this.isBlockObscured(o,s,a)&&p!=null&&p.id!=pe.empty.id){const m=(1-i[p.id].geometry.parameters.height)/2;r.setPosition(o,s-m,a),i[p.id].setMatrixAt(i[p.id].count,r);const v=i[p.id].count;this.setBlockInstanceId(o,s,a,v),i[p.id].count++}}this.meshs=i,this.add(...Object.values(i))}setBlockId(e,i,r,o){this.data[e][i][r].id=o}getBlock(e,i,r){return this.inBounds(e,i,r)&&typeof this.data[e]<"u"?this.data[e][i][r]:null}inBounds(e,i,r){return e>=0&&e<this.chunkSize&&r>=0&&r<this.chunkSize&&i>=0&&i<this.height}setBlockInstanceId(e,i,r,o){this.inBounds(e,i,r)&&(this.data[e][i][r].instanceId=o)}revealBlock(e,i,r){const o=this.worldToChunkCoords(e,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.addBlockInstance(o.block.x,o.block.y,o.block.z)}isBlockObscured(e,i,r){var v,E,M,D,C,f;const o=((v=this.getBlock(e,i+1,r))==null?void 0:v.id)??pe.empty.id,a=((E=this.getBlock(e,i-1,r))==null?void 0:E.id)??pe.empty.id,s=((M=this.getBlock(e+1,i,r))==null?void 0:M.id)??pe.empty.id,p=((D=this.getBlock(e-1,i,r))==null?void 0:D.id)??pe.empty.id,m=((C=this.getBlock(e,i,r+1))==null?void 0:C.id)??pe.empty.id,g=((f=this.getBlock(e,i,r-1))==null?void 0:f.id)??pe.empty.id;return!(o===pe.empty.id||a===pe.empty.id||s===pe.empty.id||p===pe.empty.id||m===pe.empty.id||g===pe.empty.id)}disposeInstances(){this.traverse(e=>{e.dipose&&e.dispose()}),this.clear}addBlock(e,i,r,o){this.getBlock(e,i,r).id===pe.empty.id&&(this.setBlockId(e,i,r,o),this.addBlockInstance(e,i,r),this.dataStore.set(this.position.x,this.position.z,this.data))}setBlockInventory(e,i,r,o){this.inBounds(e,i,r)&&(this.data[e][i][r].inventory=o)}addBlockInstance(e,i,r){const o=this.getBlock(e,i,r);if(o&&o.id!==pe.empty.id&&o.instanceId===null){const a=this.children.find(g=>g.name===o.id);o.id==50&&(console.log(a.count),console.log(e,i,r));const s=a.count++;this.setBlockInstanceId(e,i,r,s);const p=new Nt,m=(1-a.geometry.parameters.height)/2;if(p.setPosition(e,i-m,r),a.setMatrixAt(s,p),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),o.id==pe.torch.id){const g=new ec(16753920,8,14,2);g.position.set(e,i+.7,r),g.castShadow=!0,this.add(g)}}}removeBlock(e,i,r){const o=this.getBlock(e,i,r);o&&o.id!==pe.empty.id&&(this.deleteBlockInstance(e,i,r),this.setBlockId(e,i,r,pe.empty.id),this.dataStore.set(this.position.x,this.position.z,this.data))}deleteBlockInstance(e,i,r){const o=this.getBlock(e,i,r);if(o.id===pe.empty.id||o.instanceId===null)return;const a=this.children.find(g=>g.name===o.id),s=o.instanceId,p=new Nt;a.getMatrixAt(a.count-1,p);const m=new Ce;m.applyMatrix4(p),this.setBlockInstanceId(m.x,Math.round(m.y),m.z,s),a.setMatrixAt(s,p),a.count--,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),this.setBlockInstanceId(e,i,r,null)}}class oh{constructor(){this.data={}}clear(){this.data={}}contains(n,e){const i=this.getKey(n,e);return this.data[i]!==void 0}get(n,e){const i=this.getKey(n,e);return this.data[i]}set(n,e,i){const r=this.getKey(n,e);this.data[r]=i}getKey(n,e){return`${n},${e}`}getData(){return this.data}setData(n){this.data=n}}class ah extends zt{constructor(){super();xe(this,"asyncLoading",!0);xe(this,"drawDistance",2);xe(this,"chunkSize",{width:16,height:80});xe(this,"params",{seed:45678,terrain:{scale:40,magnitude:.1,offset:.8},trees:{trunk:{minHeight:4,maxHeight:7},canopy:{minRadius:3,maxRadius:3,density:.7},frequency:.005}});xe(this,"dataStore",new oh)}save(){(async()=>{const e=new Blob([JSON.stringify(this.dataStore.getData())]).size;console.log(`Taille des données : ${e} octets`);const i=this.dataStore.getData();console.log(i),await ch(i)})()}load(){(async()=>{const e=await lh();this.dataStore.setData(e),this.generate()})()}generate(){this.disposeChunks();for(let e=-this.drawDistance;e<=this.drawDistance;e++)for(let i=-this.drawDistance;i<=this.drawDistance;i++){const r=new go(this.chunkSize,this.params,this.dataStore);r.position.set(e*this.chunkSize.width,0,i*this.chunkSize.width),r.generate(),r.userData={x:e,z:i},this.add(r)}}update(e){const i=this.getVisibleChunks(e),r=this.getChunksToAdd(i);this.removeUnusedChunks(i);for(const o of r)this.generateChunk(o.x,o.z)}getVisibleChunks(e){const i=[],r=this.worldToChunkCoords(e.position.x,e.position.y,e.position.z),o=r.chunk.x,a=r.chunk.z;for(let s=o-this.drawDistance;s<=o+this.drawDistance;s++)for(let p=a-this.drawDistance;p<=a+this.drawDistance;p++)i.push({x:s,z:p});return i}getChunksToAdd(e){return e.filter(i=>!this.children.map(o=>o.userData).find(({x:o,z:a})=>i.x===o&&i.z===a))}removeUnusedChunks(e){const i=this.children.filter(r=>{const{x:o,z:a}=r.userData;return!e.find(p=>p.x===o&&p.z===a)});for(const r of i)r.disposeInstances(),this.remove(r)}generateChunk(e,i){const r=new go(this.chunkSize,this.params,this.dataStore);r.position.set(e*this.chunkSize.width,0,i*this.chunkSize.width),r.userData={x:e,z:i},this.asyncLoading?requestIdleCallback(r.generate.bind(r),{timeout:2e3}):r.generate(),this.add(r)}getBlock(e,i,r){const o=this.worldToChunkCoords(e,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);return a?a.getBlock(o.block.x,o.block.y,o.block.z):null}worldToChunkCoords(e,i,r){const o={x:Math.floor(e/this.chunkSize.width),z:Math.floor(r/this.chunkSize.width)},a={x:e-this.chunkSize.width*o.x,y:i,z:r-this.chunkSize.width*o.z};return{chunk:o,block:a}}getChunk(e,i){return this.children.find(r=>r.userData.x===e&&r.userData.z===i)}disposeChunks(){this.traverse(e=>{e.disposeInstances&&e.disposeInstances()}),this.clear()}addBlock(e,i,r,o){const a=this.worldToChunkCoords(e,i,r),s=this.getChunk(a.chunk.x,a.chunk.z);s&&(s.addBlock(a.block.x,a.block.y,a.block.z,o),ht(o).transparent!==!0&&(this.hideBlock(e-1,i,r),this.hideBlock(e+1,i,r),this.hideBlock(e,i-1,r),this.hideBlock(e,i+1,r),this.hideBlock(e,i,r-1),this.hideBlock(e,i,r+1)))}removeBlock(e,i,r){const o=this.worldToChunkCoords(e,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);o.block.y!==0&&a&&(this.checkRemoveTree(e,i,r),a.removeBlock(o.block.x,o.block.y,o.block.z),this.revealBlock(e-1,i,r),this.revealBlock(e+1,i,r),this.revealBlock(e,i-1,r),this.revealBlock(e,i+1,r),this.revealBlock(e,i,r-1),this.revealBlock(e,i,r+1))}setBlockInventory(e,i,r,o){const a=this.worldToChunkCoords(e,i,r),s=this.getChunk(a.chunk.x,a.chunk.z);s&&s.setBlockInventory(a.block.x,a.block.y,a.block.z,o)}checkRemoveTree(e,i,r){var a;if(this.getBlock(e,i,r).id==pe.log.id)for(let s=-6;s<=6;s++)for(let p=-6;p<=6;p++)for(let m=-6;m<=6;m++){let g=e+s,v=i+p,E=r+m;s===0&&p===0&&m===0||((a=this.getBlock(g,v,E))==null?void 0:a.id)==pe.leaves.id&&this.removeBlock(g,v,E)}}revealBlock(e,i,r){const o=this.worldToChunkCoords(e,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.addBlockInstance(o.block.x,o.block.y,o.block.z)}hideBlock(e,i,r){const o=this.worldToChunkCoords(e,i,r),a=this.getChunk(o.chunk.x,o.chunk.z);a&&a.isBlockObscured(o.block.x,o.block.y,o.block.z)&&a.deleteBlockInstance(o.block.x,o.block.y,o.block.z)}}const sh="minecraftDB",Nn="minecraftData";function Ko(){return new Promise((t,n)=>{const e=indexedDB.open(sh,1);e.onupgradeneeded=function(i){i.target.result.createObjectStore(Nn,{keyPath:"id"})},e.onsuccess=function(i){t(i.target.result)},e.onerror=function(i){n(i.target.error)}})}async function ch(t){const e=(await Ko()).transaction([Nn],"readwrite");return e.objectStore(Nn).put({id:"minecraft_data",data:t}),e.complete}async function lh(){const t=await Ko();return new Promise((n,e)=>{const o=t.transaction([Nn],"readonly").objectStore(Nn).get("minecraft_data");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){e(a.target.error)}})}const dh=new oi;function kt(t){const n=dh.load(t);return n.colorSpace=Ki,n.magFilter=It,n.minFilter=It,n}const et={pig_head_front:kt("images/mob/pig/pig_head_front.png"),pig_head_right:kt("images/mob/pig/pig_head_right.png"),pig_head_left:kt("images/mob/pig/pig_head_left.png"),pig_head_top:kt("images/mob/pig/pig_head_top.png"),pig_feet:kt("images/mob/pig/pig_feet_side.png"),pig_body_back:kt("images/mob/pig/pig_body_back.png"),pig_body_side:kt("images/mob/pig/pig_body_side.png"),pig_body_right:kt("images/mob/pig/pig_body_right.png"),pig_noise_front:kt("images/mob/pig/pig_noise_front.png")},Xn={pig:{id:1,name:"pig",head:{material:[new $e({map:et.pig_head_left}),new $e({map:et.pig_head_right}),new $e({map:et.pig_head_top}),new $e({map:et.pig_body_side}),new $e({map:et.pig_head_front}),new $e({map:et.pig_body_side})]},body:{material:[new $e({map:et.pig_body_side}),new $e({map:et.pig_body_side}),new $e({map:et.pig_body_right}),new $e({map:et.pig_body_side}),new $e({map:et.pig_body_side}),new $e({map:et.pig_body_back})]},feet:{material:[new $e({map:et.pig_feet}),new $e({map:et.pig_feet}),new $e({map:et.pig_feet}),new $e({map:et.pig_feet}),new $e({map:et.pig_feet}),new $e({map:et.pig_feet})]},noise:{material:[new $e({map:et.pig_body_side}),new $e({map:et.pig_body_side}),new $e({map:et.pig_body_side}),new $e({map:et.pig_body_side}),new $e({map:et.pig_noise_front}),new $e({map:et.pig_body_side})]}}};class fh extends zt{constructor(){super();const n=new pt(.9,.7,1.6),e=new pt(.7,.7,.7),i=new pt(.32,.25,.1),r=new pt(.4,.5,.4),o=new Je(n,Xn.pig.body.material);o.position.set(0,.6,0),this.add(o);const a=new Je(e,Xn.pig.head.material);a.position.set(0,.8,1),this.add(a);const s=new Je(i,Xn.pig.noise.material);s.position.set(0,.7,1.4),this.add(s);for(let p=0;p<4;p++){const m=new Je(r,Xn.pig.feet.material);m.position.set(p<2?-.25:.25,0,p%2===0?-.7:.6),m.isLeg=!0,this.add(m)}this.position.set(6,69,10),this.BOUNDARY={minX:-50,maxX:50,minZ:-50,maxZ:50},this.target=this.getRandomTarget(),this.pigVelocity=new Ce(0,0,0)}getRandomTarget(){const n=Math.random()*(this.BOUNDARY.maxX-this.BOUNDARY.minX)+this.BOUNDARY.minX,e=Math.random()*(this.BOUNDARY.maxZ-this.BOUNDARY.minZ)+this.BOUNDARY.minZ;return new Ce(n,75,e)}movePig(n,e){var o,a;this.world=e,((o=this.world.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)))==null?void 0:o.id)==0?this.pigVelocity.y-=.01:((a=this.world.getBlock(Math.floor(this.position.x),Math.ceil(this.position.y),Math.floor(this.position.z)))==null?void 0:a.id)>0?this.pigVelocity.y+=.05:this.pigVelocity.y=0,this.position.add(this.pigVelocity);const i=2,r=this.target.clone().sub(this.position).normalize();r.y=0,this.position.add(r.multiplyScalar(i*n)),this.position.distanceTo(this.target)<2&&(this.target=this.getRandomTarget()),this.target.y=this.position.y,this.lookAt(this.target),this.animatePigLegs(n)}animatePigLegs(){const e=Math.sin(Date.now()*.005*2);this.children.forEach(i=>{i.isLeg&&(i.rotation.x=e*.2)})}}const uh=new Wt({color:16711680,transparent:!0,opacity:.2}),hh=new pt(1.001,1.001,1.001),ph=new Wt({wireframe:!0,color:65280}),mh=new tc(.05,6,6);class _h{constructor(n){xe(this,"simulationRate",250);xe(this,"timestep",1/this.simulationRate);xe(this,"accumulator",0);xe(this,"gravity",32);this.helpers=new zt,n.add(this.helpers)}update(n,e,i){for(this.accumulator+=n;this.accumulator>=this.timestep;)e.controls.isLocked&&(e.velocity.y-=this.gravity*this.timestep),e.applyInputs(this.timestep),e.updateBoundsHelper(),this.detectCollisions(e,i),this.accumulator-=this.timestep}detectCollisions(n,e){n.onGround=!1,this.helpers.clear();const i=this.broadPhase(n,e),r=this.narrowPhase(i,n);r.length>0&&this.resolveCollisions(r,n)}broadPhase(n,e){var g;const i=[],r=Math.floor(n.position.x-n.radius),o=Math.ceil(n.position.x+n.radius),a=Math.floor(n.position.y-n.height),s=Math.ceil(n.position.y),p=Math.floor(n.position.z-n.radius),m=Math.ceil(n.position.z+n.radius);for(let v=r;v<=o;v++)for(let E=a;E<=s;E++)for(let M=p;M<=m;M++){const D=(g=e.getBlock(v,E,M))==null?void 0:g.id;if(D&&D!==pe.empty.id){const C={x:v,y:E,z:M};i.push(C)}}return i}narrowPhase(n,e){const i=[];for(const r of n){const o={x:Math.max(r.x-.5,Math.min(e.position.x,r.x+.5)),y:Math.max(r.y-.5,Math.min(e.position.y-e.height/2,r.y+.5)),z:Math.max(r.z-.5,Math.min(e.position.z,r.z+.5))},a=o.x-e.position.x,s=o.y-(e.position.y-e.height/2),p=o.z-e.position.z;if(this.pointInPlayerBoundingCylinder(o,e)){const m=e.height/2-Math.abs(s),g=e.radius-Math.sqrt(a*a+p*p);let v,E;m<g?(v=new Ce(0,-Math.sign(s),0),E=m,e.onGround=!0):(v=new Ce(-a,0,-p).normalize(),E=g),i.push({block:r,contactPoint:o,normal:v,overlap:E}),this.addContactPointerHelper(o)}}return i}resolveCollisions(n,e){n.sort((i,r)=>i.overlap<r.overlap);for(const i of n){if(!this.pointInPlayerBoundingCylinder(i.contactPoint,e))continue;let r=i.normal.clone();r.multiplyScalar(i.overlap),e.position.add(r);let o=e.worldVelocity.dot(i.normal),a=i.normal.clone().multiplyScalar(o);e.applyWorldDeltaVelocity(a.negate())}}pointInPlayerBoundingCylinder(n,e){const i=n.x-e.position.x,r=n.y-(e.position.y-e.height/2),o=n.z-e.position.z,a=i*i+o*o;return Math.abs(r)<e.height/2&&a<e.radius*e.radius}addCollisionHelper(n){const e=new Je(hh,uh);e.position.copy(n),this.helpers.add(e)}addContactPointerHelper(n){const e=new Je(mh,ph);e.position.copy(n),this.helpers.add(e)}}const gh={iron_ingot:{input:pe.ironOre.id,output:{id:pe.iron_ingot.id,quantity:1}},glass:{input:pe.sand.id,output:{id:pe.glass.id,quantity:1}}};class vh{check(n){let e=null;return Object.values(nc).forEach((i,r)=>{i.needed==(n==null?void 0:n.block)&&(e=i.gain)}),e}checkSmelting(n){var e;for(const[i,r]of Object.entries(gh))if(((e=n[0])==null?void 0:e.block)==r.input)return r.output;return null}}class Eh{constructor(){xe(this,"fuelList",[pe.coal.id]);xe(this,"output",2);xe(this,"fuel",1);xe(this,"input",0);this.smelting=new vh}handle(n){this.inventory=n;const e=this.smelting.checkSmelting(n);e&&this.checkFuel(n)?(n[this.output]={block:e.id,quantity:e.quantity},this.decreaseQuantity(this.fuel),this.decreaseQuantity(this.input)):n[this.output]=null}decreaseQuantity(n){this.inventory[n].quantity>1?this.inventory[n].quantity-=1:this.inventory[n]=null}checkFuel(n){var e;return!!this.fuelList.includes((e=n[this.fuel])==null?void 0:e.block)}}const Sh=t=>{let n={};for(let e=0;e<t;e++)n[e]={type:"input"};return n},qn={0:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"ouput"}},grid:2,id:0,name:"empty",visible:!1},61:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"ouput"}},grid:1,id:0,name:"empty",visible:!1},58:{slot:{0:{type:"input"},1:{type:"input"},2:{type:"input"},3:{type:"input"},4:{type:"input"},5:{type:"input"},6:{type:"input"},7:{type:"input"},8:{type:"input"},9:{type:"ouput"}},grid:3,id:0,name:"empty",visible:!1},54:{slot:Sh(27),grid:9,id:0,name:"empty",visible:!1}};class Mh{constructor(n,e){this.player=n,this.inventory=e}open(n){this.player.controls.unlock(),this.inventory.show(n)}}class Th{constructor(n,e){xe(this,"inventoryContainer",document.getElementById("inventory"));xe(this,"inventoryStockage",document.getElementById("stockage"));xe(this,"inventoryCrafter",document.getElementById("crafter"));xe(this,"inventoryOutput",document.getElementById("output"));xe(this,"bar",document.getElementById("bar"));xe(this,"selectedItemId",27);xe(this,"UIID",0);xe(this,"output",0);xe(this,"items",[{block:pe.grass.id,quantity:20},{block:pe.stone.id,quantity:20},{block:pe.craftingTable.id,quantity:20},{block:pe.planks.id,quantity:10},{block:pe.log.id,quantity:10},{block:pe.furnace.id,quantity:10},{block:pe.chest.id,quantity:4},{block:pe.glass.id,quantity:40},{block:pe.stick.id,quantity:40}]);xe(this,"inventory",Array(41).fill(null));xe(this,"blockInventory",Array(41).fill(null));xe(this,"player",null);xe(this,"heldItem",null);xe(this,"heldItemElement",document.getElementById("held-item"));this.player=n,this.world=e,this.isShow=!1,this.inventory[0]=this.items[2],this.inventory[1]=this.items[1],this.inventory[3]=this.items[8],this.inventory[27]=this.items[0],this.inventory[28]=this.items[3],this.inventory[29]=this.items[4],this.inventory[30]=this.items[5],this.inventory[31]=this.items[6],this.inventory[32]=this.items[7],this.inventory[33]=this.items[8],this.renderInventory(),this.renderBar(),document.addEventListener("mousemove",i=>{this.heldItem&&(this.heldItemElement.style.left=`${i.pageX-20}px`,this.heldItemElement.style.top=`${i.pageY-20}px`)}),this.recipes=new ic,this.furnace=new Eh,document.addEventListener("keydown",this.onKeyDown.bind(this))}show(n=0){if(this.isShow=!0,this.inventoryContainer.style.display="block",this.bar.style.display="none",this.UIID=n,console.log(this.player.selectedCoords),this.UIID){let e=this.world.getBlock(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z).inventory;console.log(e),e?this.blockInventory=e:this.blockInventory=Array(41).fill(null)}this.renderInventory()}hide(){this.inventoryContainer.style.display="none",this.bar.style.display="grid",this.renderBar(),this.UIID&&this.world.setBlockInventory(this.player.selectedCoords.x,this.player.selectedCoords.y,this.player.selectedCoords.z,this.blockInventory),this.isShow=!1}getBlock(n){return this.inventory[n]}getSelectedItem(){return this.inventory[this.selectedItemId]}selectItem(n){var e;if(n){document.querySelectorAll(".slot").forEach(o=>{o.classList.remove("selected")});const r=document.querySelector('.slot[data-index_bar="'+n+'"]');r&&(r.classList.add("selected"),this.selectedItemId=n),this.player.setBlockInHand((e=this.getBlock(n))==null?void 0:e.block)}}renderInventory(){var i;this.inventoryStockage.innerHTML="",this.inventoryCrafter.innerHTML="",this.inventoryOutput.innerHTML="",this.inventory.forEach((r,o)=>{const a=document.createElement("div");if(a.classList.add("slot"),a.dataset.index=o,r){const s=document.createElement("img"),p=document.createElement("div"),m=Object.values(pe).find(g=>g.id===r.block);s.src=m.icon,s.alt=r.block,s.width=200,p.innerHTML=r.quantity,p.classList.add("slot-quantity"),a.appendChild(s),m.stackable&&a.appendChild(p)}a.addEventListener("mousedown",s=>this.handleSlotClick(o,s)),o<36&&this.inventoryStockage.appendChild(a)});const n=(i=qn[this.UIID])==null?void 0:i.slot,e=qn[this.UIID].grid;this.inventoryCrafter.style.gridTemplateColumns="repeat("+e+", 50px)";for(const r in n)if(n.hasOwnProperty(r)){const o=n[r],a=document.createElement("div");if(a.classList.add("slot"),a.dataset.index=o.name,this.blockInventory[r]!==null){const s=document.createElement("img"),p=document.createElement("div"),m=Object.values(pe).find(g=>g.id===this.blockInventory[r].block);s.src=m.icon,s.alt=this.blockInventory[r].block,s.width=200,p.innerHTML=this.blockInventory[r].quantity,p.classList.add("slot-quantity"),a.appendChild(s),m.stackable&&a.appendChild(p)}a.addEventListener("mousedown",s=>this.handleSlotBlockClick(r,s)),n[r].type=="input"?this.inventoryCrafter.appendChild(a):(this.output=r,this.inventoryOutput.appendChild(a))}}renderBar(){this.bar.innerHTML="",this.inventory.forEach((n,e)=>{if(e>=27&&e<36){const i=document.createElement("div");if(i.classList.add("slot"),i.dataset.index_bar=e,e==this.selectedItemId&&i.classList.add("selected"),n){const r=document.createElement("img"),o=document.createElement("div"),a=Object.values(pe).find(s=>s.id===n.block);r.src=a.icon,r.alt=n.block,r.width=200,o.innerHTML=n.quantity,o.classList.add("slot-quantity"),i.appendChild(r),a.stackable&&i.appendChild(o)}this.bar.appendChild(i)}})}inventoryToGrid(){var a,s,p;const n=qn[this.UIID].grid;let e=[];for(let m=0;m<n;m++){const g=[];for(let v=0;v<n;v++)g.push(null);e.push(g)}const i=(a=qn[this.UIID])==null?void 0:a.slot;let r=0,o=0;for(const m in i){if(o>=n&&(o=0,r++,r>=n))break;(s=this.blockInventory[m])!=null&&s.block?e[r][o]=(p=this.blockInventory[m])==null?void 0:p.block:e[r][o]=null,o++}return e}handleSlotClick(n,e){const i=this.inventory[n];if(this.heldItem)if(!i)e.button==0?(this.inventory[n]=this.heldItem,this.clearHeldItem()):(this.inventory[n]={...this.heldItem},this.inventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.inventory[n].block==this.heldItem.block&&ht(this.inventory[n].block).stackable)this.inventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem();else{[this.inventory[n],this.heldItem]=[this.heldItem,this.inventory[n]];const r=Object.values(pe).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon}else if(i)if(e.button==0){this.heldItem=this.inventory[n],this.inventory[n]=null;const r=Object.values(pe).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}else{this.heldItem={...this.inventory[n]},this.heldItem.quantity=Math.round(this.heldItem.quantity/2),this.inventory[n].quantity=Math.floor(this.inventory[n].quantity/2);const r=Object.values(pe).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon,this.heldItemElement.style.display="block"}this.renderInventory()}handleSlotBlockClick(n,e){const i=this.blockInventory[n];if(this.heldItem){if(!i)e.button==0?n!=this.output&&(this.blockInventory[n]=this.heldItem,this.clearHeldItem()):(this.blockInventory[n]={...this.heldItem},this.blockInventory[n].quantity=1,this.setHeldItem(this.heldItem.block,this.heldItem.quantity-=1));else if(this.blockInventory[n].block==this.heldItem.block&&ht(this.blockInventory[n].block).stackable)n==this.output?this.setHeldItem(this.heldItem.block,this.heldItem.quantity+=this.blockInventory[n].quantity):(this.blockInventory[n].quantity+=this.heldItem.quantity,this.clearHeldItem());else if(n!=this.output){[this.blockInventory[n],this.heldItem]=[this.heldItem,this.blockInventory[n]];const r=Object.values(pe).find(o=>o.id===this.heldItem.block);this.heldItemElement.src=r.icon}}else i&&(e.button==0?(this.setHeldItem(this.blockInventory[n].block,this.blockInventory[n].quantity),this.blockInventory[n]=null):(this.setHeldItem(this.blockInventory[n].block,Math.round(this.blockInventory[n].quantity/2)),this.blockInventory[n].quantity=Math.floor(this.blockInventory[n].quantity/2)));if(this.UIID==0||this.UIID==58){const r=this.recipes.checkRecipe(this.inventoryToGrid());r?this.blockInventory[this.output]={block:r.id,quantity:r.quantity}:this.blockInventory[this.output]=null}else this.UIID==pe.furnace.id&&this.furnace.handle(this.blockInventory);this.renderInventory()}clearHeldItem(){this.heldItem=null,this.heldItemElement.style.display="none"}setHeldItem(n,e){this.heldItem={block:n,quantity:e};const i=ht(n);this.heldItemElement.src=i.icon,this.heldItemElement.style.display="block",e<1&&this.clearHeldItem()}addBlock(n){let e=!1;this.inventory.forEach((i,r)=>{r<36&&(i==null?void 0:i.block)==n&&(i.quantity+=1,e=!0)}),e||this.inventory.forEach((i,r)=>{r<36&&!e&&i==null&&(console.log(n),this.inventory[r]={quantity:1,block:n},e=!0)}),this.renderBar()}removeBlock(n){this.inventory.forEach((e,i)=>{i<36&&(e==null?void 0:e.block)==n&&(e.quantity-=1,e.quantity<=0&&(this.inventory[i]=null))}),this.renderBar()}save(){(async()=>{new Blob([JSON.stringify(this.inventory)]).size;const n=this.inventory;await bh(n)})()}load(){(async()=>{const n=await Ah();this.inventory=n,this.renderBar()})()}onKeyDown(n){document.querySelectorAll(".item").forEach(i=>i.classList.remove("selected"));let e=null;n.code==="Digit1"&&(e=27),n.code==="Digit2"&&(e=28),n.code==="Digit3"&&(e=29),n.code==="Digit4"&&(e=30),n.code==="Digit5"&&(e=31),n.code==="Digit6"&&(e=32),n.code==="Digit7"&&(e=33),n.code==="Digit8"&&(e=34),n.code==="Digit9"&&(e=35),e&&this.selectItem(e),n.key==="Escape"&&this.isShow&&(this.hide(),this.player.controls.lock())}}const xh="minecraftDB",On="minecraftData";function $o(){return new Promise((t,n)=>{const e=indexedDB.open(xh,1);e.onupgradeneeded=function(i){i.target.result.createObjectStore(On,{keyPath:"id"})},e.onsuccess=function(i){t(i.target.result)},e.onerror=function(i){n(i.target.error)}})}async function bh(t){const e=(await $o()).transaction([On],"readwrite");return e.objectStore(On).put({id:"minecraft_inventory",data:t}),e.complete}async function Ah(){const t=await $o();return new Promise((n,e)=>{const o=t.transaction([On],"readonly").objectStore(On).get("minecraft_inventory");o.onsuccess=function(){var a;n(((a=o.result)==null?void 0:a.data)||null)},o.onerror=function(a){e(a.target.error)}})}class yh{constructor(n,e,i){this.world=n,this.player=e,this.inventory=i,document.getElementById("backToGame").addEventListener("click",()=>this.backToGame()),document.getElementById("save").addEventListener("click",()=>this.save()),document.getElementById("load").addEventListener("click",()=>this.load()),window.addEventListener("keydown",s=>{console.log(this.inventory.isShow),s.key==="Escape"&&this.inventory.isShow===!1&&this.openMenu()})}backToGame(){document.getElementById("menu").style.display="none",this.player.controls.lock(),this.inventory.hide()}openMenu(){document.getElementById("menu").style.display="block",this.inventory.hide()}save(){this.world.save(),this.inventory.save(),this.player.save()}load(){this.world.load(),this.inventory.load(),this.player.load()}}const Ft=Object.create(null);Ft.open="0";Ft.close="1";Ft.ping="2";Ft.pong="3";Ft.message="4";Ft.upgrade="5";Ft.noop="6";const Jn=Object.create(null);Object.keys(Ft).forEach(t=>{Jn[Ft[t]]=t});const Vi={type:"error",data:"parser error"},Zo=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",jo=typeof ArrayBuffer=="function",Jo=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ji=({type:t,data:n},e,i)=>Zo&&n instanceof Blob?e?i(n):vo(n,i):jo&&(n instanceof ArrayBuffer||Jo(n))?e?i(n):vo(new Blob([n]),i):i(Ft[t]+(n||"")),vo=(t,n)=>{const e=new FileReader;return e.onload=function(){const i=e.result.split(",")[1];n("b"+(i||""))},e.readAsDataURL(t)};function Eo(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Ri;function Rh(t,n){if(Zo&&t.data instanceof Blob)return t.data.arrayBuffer().then(Eo).then(n);if(jo&&(t.data instanceof ArrayBuffer||Jo(t.data)))return n(Eo(t.data));ji(t,!1,e=>{Ri||(Ri=new TextEncoder),n(Ri.encode(e))})}const So="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",yn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<So.length;t++)yn[So.charCodeAt(t)]=t;const Ch=t=>{let n=t.length*.75,e=t.length,i,r=0,o,a,s,p;t[t.length-1]==="="&&(n--,t[t.length-2]==="="&&n--);const m=new ArrayBuffer(n),g=new Uint8Array(m);for(i=0;i<e;i+=4)o=yn[t.charCodeAt(i)],a=yn[t.charCodeAt(i+1)],s=yn[t.charCodeAt(i+2)],p=yn[t.charCodeAt(i+3)],g[r++]=o<<2|a>>4,g[r++]=(a&15)<<4|s>>2,g[r++]=(s&3)<<6|p&63;return m},wh=typeof ArrayBuffer=="function",Ji=(t,n)=>{if(typeof t!="string")return{type:"message",data:Qo(t,n)};const e=t.charAt(0);return e==="b"?{type:"message",data:Ph(t.substring(1),n)}:Jn[e]?t.length>1?{type:Jn[e],data:t.substring(1)}:{type:Jn[e]}:Vi},Ph=(t,n)=>{if(wh){const e=Ch(t);return Qo(e,n)}else return{base64:!0,data:t}},Qo=(t,n)=>{switch(n){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},ea="",Lh=(t,n)=>{const e=t.length,i=new Array(e);let r=0;t.forEach((o,a)=>{ji(o,!1,s=>{i[a]=s,++r===e&&n(i.join(ea))})})},Dh=(t,n)=>{const e=t.split(ea),i=[];for(let r=0;r<e.length;r++){const o=Ji(e[r],n);if(i.push(o),o.type==="error")break}return i};function Ih(){return new TransformStream({transform(t,n){Rh(t,e=>{const i=e.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const o=new DataView(r.buffer);o.setUint8(0,126),o.setUint16(1,i)}else{r=new Uint8Array(9);const o=new DataView(r.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(i))}t.data&&typeof t.data!="string"&&(r[0]|=128),n.enqueue(r),n.enqueue(e)})}})}let Ci;function Yn(t){return t.reduce((n,e)=>n+e.length,0)}function Kn(t,n){if(t[0].length===n)return t.shift();const e=new Uint8Array(n);let i=0;for(let r=0;r<n;r++)e[r]=t[0][i++],i===t[0].length&&(t.shift(),i=0);return t.length&&i<t[0].length&&(t[0]=t[0].slice(i)),e}function Uh(t,n){Ci||(Ci=new TextDecoder);const e=[];let i=0,r=-1,o=!1;return new TransformStream({transform(a,s){for(e.push(a);;){if(i===0){if(Yn(e)<1)break;const p=Kn(e,1);o=(p[0]&128)===128,r=p[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(Yn(e)<2)break;const p=Kn(e,2);r=new DataView(p.buffer,p.byteOffset,p.length).getUint16(0),i=3}else if(i===2){if(Yn(e)<8)break;const p=Kn(e,8),m=new DataView(p.buffer,p.byteOffset,p.length),g=m.getUint32(0);if(g>Math.pow(2,21)-1){s.enqueue(Vi);break}r=g*Math.pow(2,32)+m.getUint32(4),i=3}else{if(Yn(e)<r)break;const p=Kn(e,r);s.enqueue(Ji(o?p:Ci.decode(p),n)),i=0}if(r===0||r>t){s.enqueue(Vi);break}}}})}const ta=4;function ct(t){if(t)return Nh(t)}function Nh(t){for(var n in ct.prototype)t[n]=ct.prototype[n];return t}ct.prototype.on=ct.prototype.addEventListener=function(t,n){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(n),this};ct.prototype.once=function(t,n){function e(){this.off(t,e),n.apply(this,arguments)}return e.fn=n,this.on(t,e),this};ct.prototype.off=ct.prototype.removeListener=ct.prototype.removeAllListeners=ct.prototype.removeEventListener=function(t,n){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+t];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var i,r=0;r<e.length;r++)if(i=e[r],i===n||i.fn===n){e.splice(r,1);break}return e.length===0&&delete this._callbacks["$"+t],this};ct.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var n=new Array(arguments.length-1),e=this._callbacks["$"+t],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(e){e=e.slice(0);for(var i=0,r=e.length;i<r;++i)e[i].apply(this,n)}return this};ct.prototype.emitReserved=ct.prototype.emit;ct.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};ct.prototype.hasListeners=function(t){return!!this.listeners(t).length};const di=typeof Promise=="function"&&typeof Promise.resolve=="function"?n=>Promise.resolve().then(n):(n,e)=>e(n,0),Rt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Oh="arraybuffer";function na(t,...n){return n.reduce((e,i)=>(t.hasOwnProperty(i)&&(e[i]=t[i]),e),{})}const Fh=Rt.setTimeout,Bh=Rt.clearTimeout;function fi(t,n){n.useNativeTimers?(t.setTimeoutFn=Fh.bind(Rt),t.clearTimeoutFn=Bh.bind(Rt)):(t.setTimeoutFn=Rt.setTimeout.bind(Rt),t.clearTimeoutFn=Rt.clearTimeout.bind(Rt))}const kh=1.33;function Hh(t){return typeof t=="string"?Gh(t):Math.ceil((t.byteLength||t.size)*kh)}function Gh(t){let n=0,e=0;for(let i=0,r=t.length;i<r;i++)n=t.charCodeAt(i),n<128?e+=1:n<2048?e+=2:n<55296||n>=57344?e+=3:(i++,e+=4);return e}function ia(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Vh(t){let n="";for(let e in t)t.hasOwnProperty(e)&&(n.length&&(n+="&"),n+=encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n}function zh(t){let n={},e=t.split("&");for(let i=0,r=e.length;i<r;i++){let o=e[i].split("=");n[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return n}class Wh extends Error{constructor(n,e,i){super(n),this.description=e,this.context=i,this.type="TransportError"}}class Qi extends ct{constructor(n){super(),this.writable=!1,fi(this,n),this.opts=n,this.query=n.query,this.socket=n.socket,this.supportsBinary=!n.forceBase64}onError(n,e,i){return super.emitReserved("error",new Wh(n,e,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(n){this.readyState==="open"&&this.write(n)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(n){const e=Ji(n,this.socket.binaryType);this.onPacket(e)}onPacket(n){super.emitReserved("packet",n)}onClose(n){this.readyState="closed",super.emitReserved("close",n)}pause(n){}createUri(n,e={}){return n+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const n=this.opts.hostname;return n.indexOf(":")===-1?n:"["+n+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(n){const e=Vh(n);return e.length?"?"+e:""}}class Xh extends Qi{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(n){this.readyState="pausing";const e=()=>{this.readyState="paused",n()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||e()})),this.writable||(i++,this.once("drain",function(){--i||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(n){const e=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Dh(n,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const n=()=>{this.write([{type:"close"}])};this.readyState==="open"?n():this.once("open",n)}write(n){this.writable=!1,Lh(n,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const n=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=ia()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(n,e)}}let ra=!1;try{ra=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const qh=ra;function Yh(){}class Kh extends Xh{constructor(n){if(super(n),typeof location<"u"){const e=location.protocol==="https:";let i=location.port;i||(i=e?"443":"80"),this.xd=typeof location<"u"&&n.hostname!==location.hostname||i!==n.port}}doWrite(n,e){const i=this.request({method:"POST",data:n});i.on("success",e),i.on("error",(r,o)=>{this.onError("xhr post error",r,o)})}doPoll(){const n=this.request();n.on("data",this.onData.bind(this)),n.on("error",(e,i)=>{this.onError("xhr poll error",e,i)}),this.pollXhr=n}}class Ot extends ct{constructor(n,e,i){super(),this.createRequest=n,fi(this,i),this._opts=i,this._method=i.method||"GET",this._uri=e,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var n;const e=na(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(e);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(n=this._opts.cookieJar)===null||n===void 0||n.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ot.requestsCount++,Ot.requests[this._index]=this)}_onError(n){this.emitReserved("error",n,this._xhr),this._cleanup(!0)}_cleanup(n){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Yh,n)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ot.requests[this._index],this._xhr=null}}_onLoad(){const n=this._xhr.responseText;n!==null&&(this.emitReserved("data",n),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ot.requestsCount=0;Ot.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Mo);else if(typeof addEventListener=="function"){const t="onpagehide"in Rt?"pagehide":"unload";addEventListener(t,Mo,!1)}}function Mo(){for(let t in Ot.requests)Ot.requests.hasOwnProperty(t)&&Ot.requests[t].abort()}const $h=function(){const t=oa({xdomain:!1});return t&&t.responseType!==null}();class Zh extends Kh{constructor(n){super(n);const e=n&&n.forceBase64;this.supportsBinary=$h&&!e}request(n={}){return Object.assign(n,{xd:this.xd},this.opts),new Ot(oa,this.uri(),n)}}function oa(t){const n=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!n||qh))return new XMLHttpRequest}catch{}if(!n)try{return new Rt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const aa=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class jh extends Qi{get name(){return"websocket"}doOpen(){const n=this.uri(),e=this.opts.protocols,i=aa?{}:na(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(n,e,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=n=>this.onClose({description:"websocket connection closed",context:n}),this.ws.onmessage=n=>this.onData(n.data),this.ws.onerror=n=>this.onError("websocket error",n)}write(n){this.writable=!1;for(let e=0;e<n.length;e++){const i=n[e],r=e===n.length-1;ji(i,this.supportsBinary,o=>{try{this.doWrite(i,o)}catch{}r&&di(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const n=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=ia()),this.supportsBinary||(e.b64=1),this.createUri(n,e)}}const wi=Rt.WebSocket||Rt.MozWebSocket;class Jh extends jh{createSocket(n,e,i){return aa?new wi(n,e,i):e?new wi(n,e):new wi(n)}doWrite(n,e){this.ws.send(e)}}class Qh extends Qi{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(n){return this.emitReserved("error",n)}this._transport.closed.then(()=>{this.onClose()}).catch(n=>{this.onError("webtransport error",n)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(n=>{const e=Uh(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=n.readable.pipeThrough(e).getReader(),r=Ih();r.readable.pipeTo(n.writable),this._writer=r.writable.getWriter();const o=()=>{i.read().then(({done:s,value:p})=>{s||(this.onPacket(p),o())}).catch(s=>{})};o();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(n){this.writable=!1;for(let e=0;e<n.length;e++){const i=n[e],r=e===n.length-1;this._writer.write(i).then(()=>{r&&di(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var n;(n=this._transport)===null||n===void 0||n.close()}}const ep={websocket:Jh,webtransport:Qh,polling:Zh},tp=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,np=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function zi(t){if(t.length>8e3)throw"URI too long";const n=t,e=t.indexOf("["),i=t.indexOf("]");e!=-1&&i!=-1&&(t=t.substring(0,e)+t.substring(e,i).replace(/:/g,";")+t.substring(i,t.length));let r=tp.exec(t||""),o={},a=14;for(;a--;)o[np[a]]=r[a]||"";return e!=-1&&i!=-1&&(o.source=n,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=ip(o,o.path),o.queryKey=rp(o,o.query),o}function ip(t,n){const e=/\/{2,9}/g,i=n.replace(e,"/").split("/");return(n.slice(0,1)=="/"||n.length===0)&&i.splice(0,1),n.slice(-1)=="/"&&i.splice(i.length-1,1),i}function rp(t,n){const e={};return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,o){r&&(e[r]=o)}),e}const Wi=typeof addEventListener=="function"&&typeof removeEventListener=="function",Qn=[];Wi&&addEventListener("offline",()=>{Qn.forEach(t=>t())},!1);class qt extends ct{constructor(n,e){if(super(),this.binaryType=Oh,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,n&&typeof n=="object"&&(e=n,n=null),n){const i=zi(n);e.hostname=i.host,e.secure=i.protocol==="https"||i.protocol==="wss",e.port=i.port,i.query&&(e.query=i.query)}else e.host&&(e.hostname=zi(e.host).host);fi(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=zh(this.opts.query)),Wi&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Qn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(n){const e=Object.assign({},this.opts.query);e.EIO=ta,e.transport=n,this.id&&(e.sid=this.id);const i=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[n]);return new this._transportsByName[n](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const n=this.opts.rememberUpgrade&&qt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(n);e.open(),this.setTransport(e)}setTransport(n){this.transport&&this.transport.removeAllListeners(),this.transport=n,n.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",qt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",n),this.emitReserved("heartbeat"),n.type){case"open":this.onHandshake(JSON.parse(n.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=n.data,this._onError(e);break;case"message":this.emitReserved("data",n.data),this.emitReserved("message",n.data);break}}onHandshake(n){this.emitReserved("handshake",n),this.id=n.sid,this.transport.query.sid=n.sid,this._pingInterval=n.pingInterval,this._pingTimeout=n.pingTimeout,this._maxPayload=n.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const n=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+n,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},n),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const n=this._getWritablePackets();this.transport.send(n),this._prevBufferLen=n.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(e+=Hh(r)),i>0&&e>this._maxPayload)return this.writeBuffer.slice(0,i);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const n=Date.now()>this._pingTimeoutTime;return n&&(this._pingTimeoutTime=0,di(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),n}write(n,e,i){return this._sendPacket("message",n,e,i),this}send(n,e,i){return this._sendPacket("message",n,e,i),this}_sendPacket(n,e,i,r){if(typeof e=="function"&&(r=e,e=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const o={type:n,data:e,options:i};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}close(){const n=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),n()},i=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():n()}):this.upgrading?i():n()),this}_onError(n){if(qt.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",n),this._onClose("transport error",n)}_onClose(n,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Wi&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=Qn.indexOf(this._offlineEventListener);i!==-1&&Qn.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",n,e),this.writeBuffer=[],this._prevBufferLen=0}}}qt.protocol=ta;class op extends qt{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let n=0;n<this._upgrades.length;n++)this._probe(this._upgrades[n])}_probe(n){let e=this.createTransport(n),i=!1;qt.priorWebsocketSuccess=!1;const r=()=>{i||(e.send([{type:"ping",data:"probe"}]),e.once("packet",v=>{if(!i)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;qt.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(g(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const E=new Error("probe error");E.transport=e.name,this.emitReserved("upgradeError",E)}}))};function o(){i||(i=!0,g(),e.close(),e=null)}const a=v=>{const E=new Error("probe error: "+v);E.transport=e.name,o(),this.emitReserved("upgradeError",E)};function s(){a("transport closed")}function p(){a("socket closed")}function m(v){e&&v.name!==e.name&&o()}const g=()=>{e.removeListener("open",r),e.removeListener("error",a),e.removeListener("close",s),this.off("close",p),this.off("upgrading",m)};e.once("open",r),e.once("error",a),e.once("close",s),this.once("close",p),this.once("upgrading",m),this._upgrades.indexOf("webtransport")!==-1&&n!=="webtransport"?this.setTimeoutFn(()=>{i||e.open()},200):e.open()}onHandshake(n){this._upgrades=this._filterUpgrades(n.upgrades),super.onHandshake(n)}_filterUpgrades(n){const e=[];for(let i=0;i<n.length;i++)~this.transports.indexOf(n[i])&&e.push(n[i]);return e}}let ap=class extends op{constructor(n,e={}){const i=typeof n=="object"?n:e;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>ep[r]).filter(r=>!!r)),super(n,i)}};function sp(t,n="",e){let i=t;e=e||typeof location<"u"&&location,t==null&&(t=e.protocol+"//"+e.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=e.protocol+t:t=e.host+t),/^(https?|wss?):\/\//.test(t)||(typeof e<"u"?t=e.protocol+"//"+t:t="https://"+t),i=zi(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const o=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+o+":"+i.port+n,i.href=i.protocol+"://"+o+(e&&e.port===i.port?"":":"+i.port),i}const cp=typeof ArrayBuffer=="function",lp=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,sa=Object.prototype.toString,dp=typeof Blob=="function"||typeof Blob<"u"&&sa.call(Blob)==="[object BlobConstructor]",fp=typeof File=="function"||typeof File<"u"&&sa.call(File)==="[object FileConstructor]";function er(t){return cp&&(t instanceof ArrayBuffer||lp(t))||dp&&t instanceof Blob||fp&&t instanceof File}function ei(t,n){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let e=0,i=t.length;e<i;e++)if(ei(t[e]))return!0;return!1}if(er(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ei(t.toJSON(),!0);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&ei(t[e]))return!0;return!1}function up(t){const n=[],e=t.data,i=t;return i.data=Xi(e,n),i.attachments=n.length,{packet:i,buffers:n}}function Xi(t,n){if(!t)return t;if(er(t)){const e={_placeholder:!0,num:n.length};return n.push(t),e}else if(Array.isArray(t)){const e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=Xi(t[i],n);return e}else if(typeof t=="object"&&!(t instanceof Date)){const e={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=Xi(t[i],n));return e}return t}function hp(t,n){return t.data=qi(t.data,n),delete t.attachments,t}function qi(t,n){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<n.length)return n[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let e=0;e<t.length;e++)t[e]=qi(t[e],n);else if(typeof t=="object")for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=qi(t[e],n));return t}const pp=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],mp=5;var Ue;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(Ue||(Ue={}));class _p{constructor(n){this.replacer=n}encode(n){return(n.type===Ue.EVENT||n.type===Ue.ACK)&&ei(n)?this.encodeAsBinary({type:n.type===Ue.EVENT?Ue.BINARY_EVENT:Ue.BINARY_ACK,nsp:n.nsp,data:n.data,id:n.id}):[this.encodeAsString(n)]}encodeAsString(n){let e=""+n.type;return(n.type===Ue.BINARY_EVENT||n.type===Ue.BINARY_ACK)&&(e+=n.attachments+"-"),n.nsp&&n.nsp!=="/"&&(e+=n.nsp+","),n.id!=null&&(e+=n.id),n.data!=null&&(e+=JSON.stringify(n.data,this.replacer)),e}encodeAsBinary(n){const e=up(n),i=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(i),r}}function To(t){return Object.prototype.toString.call(t)==="[object Object]"}class tr extends ct{constructor(n){super(),this.reviver=n}add(n){let e;if(typeof n=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(n);const i=e.type===Ue.BINARY_EVENT;i||e.type===Ue.BINARY_ACK?(e.type=i?Ue.EVENT:Ue.ACK,this.reconstructor=new gp(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(er(n)||n.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(n),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+n)}decodeString(n){let e=0;const i={type:Number(n.charAt(0))};if(Ue[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ue.BINARY_EVENT||i.type===Ue.BINARY_ACK){const o=e+1;for(;n.charAt(++e)!=="-"&&e!=n.length;);const a=n.substring(o,e);if(a!=Number(a)||n.charAt(e)!=="-")throw new Error("Illegal attachments");i.attachments=Number(a)}if(n.charAt(e+1)==="/"){const o=e+1;for(;++e&&!(n.charAt(e)===","||e===n.length););i.nsp=n.substring(o,e)}else i.nsp="/";const r=n.charAt(e+1);if(r!==""&&Number(r)==r){const o=e+1;for(;++e;){const a=n.charAt(e);if(a==null||Number(a)!=a){--e;break}if(e===n.length)break}i.id=Number(n.substring(o,e+1))}if(n.charAt(++e)){const o=this.tryParse(n.substr(e));if(tr.isPayloadValid(i.type,o))i.data=o;else throw new Error("invalid payload")}return i}tryParse(n){try{return JSON.parse(n,this.reviver)}catch{return!1}}static isPayloadValid(n,e){switch(n){case Ue.CONNECT:return To(e);case Ue.DISCONNECT:return e===void 0;case Ue.CONNECT_ERROR:return typeof e=="string"||To(e);case Ue.EVENT:case Ue.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&pp.indexOf(e[0])===-1);case Ue.ACK:case Ue.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class gp{constructor(n){this.packet=n,this.buffers=[],this.reconPack=n}takeBinaryData(n){if(this.buffers.push(n),this.buffers.length===this.reconPack.attachments){const e=hp(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const vp=Object.freeze(Object.defineProperty({__proto__:null,Decoder:tr,Encoder:_p,get PacketType(){return Ue},protocol:mp},Symbol.toStringTag,{value:"Module"}));function Dt(t,n,e){return t.on(n,e),function(){t.off(n,e)}}const Ep=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ca extends ct{constructor(n,e,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=n,this.nsp=e,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const n=this.io;this.subs=[Dt(n,"open",this.onopen.bind(this)),Dt(n,"packet",this.onpacket.bind(this)),Dt(n,"error",this.onerror.bind(this)),Dt(n,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...n){return n.unshift("message"),this.emit.apply(this,n),this}emit(n,...e){var i,r,o;if(Ep.hasOwnProperty(n))throw new Error('"'+n.toString()+'" is a reserved event name');if(e.unshift(n),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const a={type:Ue.EVENT,data:e};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const g=this.ids++,v=e.pop();this._registerAckCallback(g,v),a.id=g}const s=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,p=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!s||(p?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(n,e){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[n]=e;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[n];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===n&&this.sendBuffer.splice(s,1);e.call(this,new Error("operation has timed out"))},r),a=(...s)=>{this.io.clearTimeoutFn(o),e.apply(this,s)};a.withError=!0,this.acks[n]=a}emitWithAck(n,...e){return new Promise((i,r)=>{const o=(a,s)=>a?r(a):i(s);o.withError=!0,e.push(o),this.emit(n,...e)})}_addToQueue(n){let e;typeof n[n.length-1]=="function"&&(e=n.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:n,flags:Object.assign({fromQueue:!0},this.flags)};n.push((r,...o)=>i!==this._queue[0]?void 0:(r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(r)):(this._queue.shift(),e&&e(null,...o)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(n=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!n||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(n){n.nsp=this.nsp,this.io._packet(n)}onopen(){typeof this.auth=="function"?this.auth(n=>{this._sendConnectPacket(n)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(n){this.packet({type:Ue.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},n):n})}onerror(n){this.connected||this.emitReserved("connect_error",n)}onclose(n,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",n,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(n=>{if(!this.sendBuffer.some(i=>String(i.id)===n)){const i=this.acks[n];delete this.acks[n],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(n){if(n.nsp===this.nsp)switch(n.type){case Ue.CONNECT:n.data&&n.data.sid?this.onconnect(n.data.sid,n.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ue.EVENT:case Ue.BINARY_EVENT:this.onevent(n);break;case Ue.ACK:case Ue.BINARY_ACK:this.onack(n);break;case Ue.DISCONNECT:this.ondisconnect();break;case Ue.CONNECT_ERROR:this.destroy();const i=new Error(n.data.message);i.data=n.data.data,this.emitReserved("connect_error",i);break}}onevent(n){const e=n.data||[];n.id!=null&&e.push(this.ack(n.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(n){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const i of e)i.apply(this,n)}super.emit.apply(this,n),this._pid&&n.length&&typeof n[n.length-1]=="string"&&(this._lastOffset=n[n.length-1])}ack(n){const e=this;let i=!1;return function(...r){i||(i=!0,e.packet({type:Ue.ACK,id:n,data:r}))}}onack(n){const e=this.acks[n.id];typeof e=="function"&&(delete this.acks[n.id],e.withError&&n.data.unshift(null),e.apply(this,n.data))}onconnect(n,e){this.id=n,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(n=>this.emitEvent(n)),this.receiveBuffer=[],this.sendBuffer.forEach(n=>{this.notifyOutgoingListeners(n),this.packet(n)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(n=>n()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ue.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(n){return this.flags.compress=n,this}get volatile(){return this.flags.volatile=!0,this}timeout(n){return this.flags.timeout=n,this}onAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(n),this}prependAny(n){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(n),this}offAny(n){if(!this._anyListeners)return this;if(n){const e=this._anyListeners;for(let i=0;i<e.length;i++)if(n===e[i])return e.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(n),this}prependAnyOutgoing(n){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(n),this}offAnyOutgoing(n){if(!this._anyOutgoingListeners)return this;if(n){const e=this._anyOutgoingListeners;for(let i=0;i<e.length;i++)if(n===e[i])return e.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(n){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const i of e)i.apply(this,n.data)}}}function Sn(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Sn.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var n=Math.random(),e=Math.floor(n*this.jitter*t);t=Math.floor(n*10)&1?t+e:t-e}return Math.min(t,this.max)|0};Sn.prototype.reset=function(){this.attempts=0};Sn.prototype.setMin=function(t){this.ms=t};Sn.prototype.setMax=function(t){this.max=t};Sn.prototype.setJitter=function(t){this.jitter=t};class Yi extends ct{constructor(n,e){var i;super(),this.nsps={},this.subs=[],n&&typeof n=="object"&&(e=n,n=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,fi(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((i=e.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Sn({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=n;const r=e.parser||vp;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(n){return arguments.length?(this._reconnection=!!n,n||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(n){return n===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=n,this)}reconnectionDelay(n){var e;return n===void 0?this._reconnectionDelay:(this._reconnectionDelay=n,(e=this.backoff)===null||e===void 0||e.setMin(n),this)}randomizationFactor(n){var e;return n===void 0?this._randomizationFactor:(this._randomizationFactor=n,(e=this.backoff)===null||e===void 0||e.setJitter(n),this)}reconnectionDelayMax(n){var e;return n===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=n,(e=this.backoff)===null||e===void 0||e.setMax(n),this)}timeout(n){return arguments.length?(this._timeout=n,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(n){if(~this._readyState.indexOf("open"))return this;this.engine=new ap(this.uri,this.opts);const e=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=Dt(e,"open",function(){i.onopen(),n&&n()}),o=s=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",s),n?n(s):this.maybeReconnectOnOpen()},a=Dt(e,"error",o);if(this._timeout!==!1){const s=this._timeout,p=this.setTimeoutFn(()=>{r(),o(new Error("timeout")),e.close()},s);this.opts.autoUnref&&p.unref(),this.subs.push(()=>{this.clearTimeoutFn(p)})}return this.subs.push(r),this.subs.push(a),this}connect(n){return this.open(n)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const n=this.engine;this.subs.push(Dt(n,"ping",this.onping.bind(this)),Dt(n,"data",this.ondata.bind(this)),Dt(n,"error",this.onerror.bind(this)),Dt(n,"close",this.onclose.bind(this)),Dt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(n){try{this.decoder.add(n)}catch(e){this.onclose("parse error",e)}}ondecoded(n){di(()=>{this.emitReserved("packet",n)},this.setTimeoutFn)}onerror(n){this.emitReserved("error",n)}socket(n,e){let i=this.nsps[n];return i?this._autoConnect&&!i.active&&i.connect():(i=new ca(this,n,e),this.nsps[n]=i),i}_destroy(n){const e=Object.keys(this.nsps);for(const i of e)if(this.nsps[i].active)return;this._close()}_packet(n){const e=this.encoder.encode(n);for(let i=0;i<e.length;i++)this.engine.write(e[i],n.options)}cleanup(){this.subs.forEach(n=>n()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(n,e){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",n,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const n=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{n.skipReconnect||(this.emitReserved("reconnect_attempt",n.backoff.attempts),!n.skipReconnect&&n.open(r=>{r?(n._reconnecting=!1,n.reconnect(),this.emitReserved("reconnect_error",r)):n.onreconnect()}))},e);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const n=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",n)}}const xn={};function ti(t,n){typeof t=="object"&&(n=t,t=void 0),n=n||{};const e=sp(t,n.path||"/socket.io"),i=e.source,r=e.id,o=e.path,a=xn[r]&&o in xn[r].nsps,s=n.forceNew||n["force new connection"]||n.multiplex===!1||a;let p;return s?p=new Yi(i,n):(xn[r]||(xn[r]=new Yi(i,n)),p=xn[r]),e.query&&!n.query&&(n.query=e.queryKey),p.socket(e.path,n)}Object.assign(ti,{Manager:Yi,Socket:ca,io:ti,connect:ti});var Cn=function(){var t=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(g){g.preventDefault(),i(++t%n.children.length)},!1);function e(g){return n.appendChild(g.dom),g}function i(g){for(var v=0;v<n.children.length;v++)n.children[v].style.display=v===g?"block":"none";t=g}var r=(performance||Date).now(),o=r,a=0,s=e(new Cn.Panel("FPS","#0ff","#002")),p=e(new Cn.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=e(new Cn.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:n,addPanel:e,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){a++;var g=(performance||Date).now();if(p.update(g-r,200),g>=o+1e3&&(s.update(a*1e3/(g-o),100),o=g,a=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return g},update:function(){r=this.end()},domElement:n,setMode:i}};Cn.Panel=function(t,n,e){var i=1/0,r=0,o=Math.round,a=o(window.devicePixelRatio||1),s=80*a,p=48*a,m=3*a,g=2*a,v=3*a,E=15*a,M=74*a,D=30*a,C=document.createElement("canvas");C.width=s,C.height=p,C.style.cssText="width:80px;height:48px";var f=C.getContext("2d");return f.font="bold "+9*a+"px Helvetica,Arial,sans-serif",f.textBaseline="top",f.fillStyle=e,f.fillRect(0,0,s,p),f.fillStyle=n,f.fillText(t,m,g),f.fillRect(v,E,M,D),f.fillStyle=e,f.globalAlpha=.9,f.fillRect(v,E,M,D),{dom:C,update:function(c,I){i=Math.min(i,c),r=Math.max(r,c),f.fillStyle=e,f.globalAlpha=1,f.fillRect(0,0,s,E),f.fillStyle=n,f.fillText(o(c)+" "+t+" ("+o(i)+"-"+o(r)+")",m,g),f.drawImage(C,v+a,E,M-a,D,v,E,M-a,D),f.fillRect(v+M-a,E,a,D),f.fillStyle=e,f.globalAlpha=.9,f.fillRect(v+M-a,E,a,o((1-c/I)*D))}}};const Yt=ti("https://baptiste-texier.ddns.net:3000"),wt=new rc,vt=new ah;vt.generate();wt.add(vt);wt.fog=new oc(8429792,vt.chunkSize.width*vt.drawDistance*.9,vt.chunkSize.width*vt.drawDistance);const on=new qu;on.setPixelRatio(window.devicePixelRatio);on.setSize(window.innerWidth,window.innerHeight);on.setClearColor(8429792);on.shadowMap.enabled=!0;on.shadowMap.type=Go;document.body.appendChild(on.domElement);const Sp=document.getElementById("fps"),Mt=new eh(wt,vt,Yt),Mp=new _h(wt),Fn=new Th(Mt,vt);new yh(vt,Mt,Fn);const Tp=new Mh(Mt,Fn);Mt.setInventory(Fn);Mt.setUI(Tp);const la=new fh;wt.add(la);const nr=new oi,da=nr.load("images/grass.png"),hn=nr.load("images/grass_block_side.png"),fa=nr.load("images/stone.png");[da,hn,fa].forEach(t=>{t.magFilter=It,t.minFilter=It});const xp=[hn,hn,da,hn,hn,hn];xp.map(t=>new Wt({map:t}));new Wt({map:fa});let ut;function bp(){ut=new sc,ut.intensity=1.5,ut.position.set(50,50,50),ut.castShadow=!0,ut.shadow.camera.left=-40,ut.shadow.camera.right=40,ut.shadow.camera.top=40,ut.shadow.camera.bottom=-40,ut.shadow.camera.near=.1,ut.shadow.camera.far=200,ut.shadow.bias=-1e-4,ut.shadow.mapSize=new _t(2048,2048),wt.add(ut),wt.add(ut.target);const t=new cc;t.intensity=.2,wt.add(t)}window.addEventListener("keydown",t=>{t.code==="KeyE"&&(Mt.controls.isLocked?(Mt.controls.unlock(),Fn.show()):(Mt.controls.lock(),Fn.hide()))});wt.background=new je(7254527);var Pi=performance.now(),xo=0,Li=0,bo=0;const Ap=new lc,ua=new Cn;document.body.appendChild(ua.dom);function ha(){const t=performance.now(),n=Ap.getDelta();let e=(t-bo)/1e3;Mp.update(e,Mt,vt),vt.update(Mt),Mt.update(vt),bo=t,Li++,t-Pi>1e3&&(xo=Math.round(Li*1e3/(t-Pi)),Sp.textContent=`FPS: ${xo}`,Pi=t,Li=0,ut.position.copy(Mt.camera.position),ut.position.sub(new Ce(-50,-50,-50)),ut.target.position.copy(Mt.camera.position)),la.movePig(n,vt),on.render(wt,Mt.camera),requestAnimationFrame(ha),ua.update()}bp();ha();document.addEventListener("contextmenu",function(t){t.preventDefault()},!1);const dn={},pa={};Yt.emit("join",{username:"Joueur1",position:{x:0,y:70,z:0},direction:{x:0,y:0,z:0}});Yt.on("player-connect",t=>{console.log("Joueurs connectés:",t),ma(t)});Yt.on("player-disconnect",t=>{console.log("Joueurs déconnecté:",t),wt.remove(pa[t])});Yt.on("addBlock",t=>{vt.addBlock(t.x,t.y,t.z,t.blockId)});Yt.on("removeBlock",t=>{vt.removeBlock(t.x,t.y,t.z)});Yt.on("playerState",t=>{ma(t)});function ma(t){for(let n in t)if(n!=Yt.id){if(!dn[n]){const s=yp();wt.add(s),dn[n]=s,pa[n]=s}dn[n].position.set(t[n].position.x,t[n].position.y-1,t[n].position.z);const e=dn[n],i=t[n].position.x+t[n].direction.x,r=t[n].position.z+t[n].direction.z,o=new Ce(i,e.position.y,r),a=Math.atan2(o.z-e.position.z,o.x-e.position.x);dn[n].rotation.y=a,dn[n].lookAt(new Ce(i,e.position.y,r))}}function yp(){const t=new zt,n=new ac({color:65280}),e=new Je(new pt(.5,.75,.25),n);e.position.set(0,.5,0),t.add(e);const i=new Je(new pt(.5,.5,.5),n);i.position.set(0,1.1,0),t.add(i);const r=new Je(new pt(.25,.75,.25),n);r.position.set(-.4,.5,0),t.add(r);const o=new Je(new pt(.25,.75,.25),n);o.position.set(.4,.5,0),t.add(o);const a=new Je(new pt(.25,.75,.25),n);a.position.set(-.1,-.2,0),t.add(a);const s=new Je(new pt(.25,.75,.25),n);return s.position.set(.1,-.2,0),t.add(s),t}
