import{S as Z,i as x,s as ee,k as _,q as T,a as V,l as v,m as h,r as O,h as f,c as I,n as i,b as z,C as c,B as Y,D as Je,E as qe,F as ue,e as be,G as he,H as Ge,I as Ue,J as je,f as y,t as L,u as Ke,K as S,w as U,x as j,y as J,L as we,M as Ee,z as K,N as W,O as Qe,P as ie,Q as pe,R as Re,T as Xe,U as Ye}from"../../chunks/index-62e91808.js";function We(o,e,t){const a=o.slice();return a[0]=e[t],a[2]=t,a}function Ze(o){let e,t,a,s,l;return{c(){e=_("div"),t=_("a"),a=T("어딘가 링크 - "),s=T(o[2]),l=V(),this.h()},l(n){e=v(n,"DIV",{});var r=h(e);t=v(r,"A",{href:!0});var m=h(t);a=O(m,"어딘가 링크 - "),s=O(m,o[2]),m.forEach(f),l=I(r),r.forEach(f),this.h()},h(){i(t,"href","#")},m(n,r){z(n,e,r),c(e,t),c(t,a),c(t,s),c(e,l)},p:Y,d(n){n&&f(e)}}}function xe(o){let e,t,a,s,l,n,r,m,D,H,B=new Array(10),g=[];for(let p=0;p<B.length;p+=1)g[p]=Ze(We(o,B,p));return{c(){e=_("div"),t=_("div"),a=_("div"),s=_("h2"),l=T("Foldable IDEA"),n=V(),r=_("p"),m=T("폴더블 아이디어에 대한 멋진 소개글"),D=V(),H=_("div");for(let p=0;p<g.length;p+=1)g[p].c();this.h()},l(p){e=v(p,"DIV",{class:!0});var w=h(e);t=v(w,"DIV",{class:!0});var b=h(t);a=v(b,"DIV",{class:!0});var A=h(a);s=v(A,"H2",{});var C=h(s);l=O(C,"Foldable IDEA"),C.forEach(f),n=I(A),r=v(A,"P",{});var E=h(r);m=O(E,"폴더블 아이디어에 대한 멋진 소개글"),E.forEach(f),A.forEach(f),D=I(b),H=v(b,"DIV",{class:!0});var q=h(H);for(let G=0;G<g.length;G+=1)g[G].l(q);q.forEach(f),b.forEach(f),w.forEach(f),this.h()},h(){i(a,"class","row"),i(H,"class","col-4 flat"),i(t,"class","row large"),i(e,"class","footer")},m(p,w){z(p,e,w),c(e,t),c(t,a),c(a,s),c(s,l),c(a,n),c(a,r),c(r,m),c(t,D),c(t,H);for(let b=0;b<g.length;b+=1)g[b].m(H,null)},p:Y,i:Y,o:Y,d(p){p&&f(e),Je(g,p)}}}class et extends Z{constructor(e){super(),x(this,e,null,xe,ee,{})}}function Pe(o){let e,t;return{c(){e=ue("title"),t=T(o[0])},l(a){e=he(a,"title",{});var s=h(e);t=O(s,o[0]),s.forEach(f)},m(a,s){z(a,e,s),c(e,t)},p(a,s){s&1&&Ke(t,a[0])},d(a){a&&f(e)}}}function tt(o){let e,t,a,s=o[0]&&Pe(o);const l=o[3].default,n=qe(l,o,o[2],null);return{c(){e=ue("svg"),s&&s.c(),t=be(),n&&n.c(),this.h()},l(r){e=he(r,"svg",{xmlns:!0,viewBox:!0,class:!0});var m=h(e);s&&s.l(m),t=be(),n&&n.l(m),m.forEach(f),this.h()},h(){i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"viewBox",o[1]),i(e,"class","svelte-c8tyih")},m(r,m){z(r,e,m),s&&s.m(e,null),c(e,t),n&&n.m(e,null),a=!0},p(r,[m]){r[0]?s?s.p(r,m):(s=Pe(r),s.c(),s.m(e,t)):s&&(s.d(1),s=null),n&&n.p&&(!a||m&4)&&Ge(n,l,r,r[2],a?je(l,r[2],m,null):Ue(r[2]),null),(!a||m&2)&&i(e,"viewBox",r[1])},i(r){a||(y(n,r),a=!0)},o(r){L(n,r),a=!1},d(r){r&&f(e),s&&s.d(),n&&n.d(r)}}}function lt(o,e,t){let{$$slots:a={},$$scope:s}=e,{title:l=null}=e,{viewBox:n}=e;return o.$$set=r=>{"title"in r&&t(0,l=r.title),"viewBox"in r&&t(1,n=r.viewBox),"$$scope"in r&&t(2,s=r.$$scope)},[l,n,s,a]}class Ve extends Z{constructor(e){super(),x(this,e,lt,tt,ee,{title:0,viewBox:1})}}function at(o){let e;return{c(){e=ue("path"),this.h()},l(t){e=he(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){i(e,"d","M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z")},m(t,a){z(t,e,a)},p:Y,d(t){t&&f(e)}}}function st(o){let e,t;const a=[{viewBox:"0 0 512 512"},o[0]];let s={$$slots:{default:[at]},$$scope:{ctx:o}};for(let l=0;l<a.length;l+=1)s=S(s,a[l]);return e=new Ve({props:s}),{c(){U(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,[n]){const r=n&1?we(a,[a[0],Ee(l[0])]):{};n&2&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function nt(o,e,t){return o.$$set=a=>{t(0,e=S(S({},e),W(a)))},e=W(e),[e]}class rt extends Z{constructor(e){super(),x(this,e,nt,st,ee,{})}}function ot(o){let e;return{c(){e=ue("path"),this.h()},l(t){e=he(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){i(e,"d","M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z")},m(t,a){z(t,e,a)},p:Y,d(t){t&&f(e)}}}function ct(o){let e,t;const a=[{viewBox:"0 0 576 512"},o[0]];let s={$$slots:{default:[ot]},$$scope:{ctx:o}};for(let l=0;l<a.length;l+=1)s=S(s,a[l]);return e=new Ve({props:s}),{c(){U(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,[n]){const r=n&1?we(a,[a[0],Ee(l[0])]):{};n&2&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function ft(o,e,t){return o.$$set=a=>{t(0,e=S(S({},e),W(a)))},e=W(e),[e]}class it extends Z{constructor(e){super(),x(this,e,ft,ct,ee,{})}}function ut(o){let e;return{c(){e=ue("path"),this.h()},l(t){e=he(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){i(e,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},m(t,a){z(t,e,a)},p:Y,d(t){t&&f(e)}}}function ht(o){let e,t;const a=[{viewBox:"0 0 24 24"},o[0]];let s={$$slots:{default:[ut]},$$scope:{ctx:o}};for(let l=0;l<a.length;l+=1)s=S(s,a[l]);return e=new Ve({props:s}),{c(){U(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,[n]){const r=n&1?we(a,[a[0],Ee(l[0])]):{};n&2&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function mt(o,e,t){return o.$$set=a=>{t(0,e=S(S({},e),W(a)))},e=W(e),[e]}class dt extends Z{constructor(e){super(),x(this,e,mt,ht,ee,{})}}function _t(o){let e=!1,t=()=>{e=!1},a,s,l,n,r,m,D,H,B,g,p,w,b,A,C,E,q,G,F,k,u,$,N,Q,oe,te,me,R,de,P,X,le,Ie,ke,ae,ze,De,se,ne,re,He,Be;return Qe(o[3]),g=new it({}),te=new rt({}),ne=new dt({}),{c(){s=_("div"),l=_("div"),n=_("div"),r=_("a"),m=_("h1"),D=T("Coding All In One"),H=V(),B=_("h1"),U(g.$$.fragment),p=V(),w=_("div"),b=_("a"),A=T("코딩올인원?"),C=V(),E=_("a"),q=T("컴포넌트 소개"),G=V(),F=_("a"),k=T("후원하기"),u=V(),$=_("div"),N=_("a"),Q=T("후원하기"),oe=V(),U(te.$$.fragment),me=V(),R=_("div"),de=V(),P=_("div"),X=_("div"),le=_("a"),Ie=T("코딩올인원?"),ke=V(),ae=_("a"),ze=T("컴포넌트 소개"),De=V(),se=_("div"),U(ne.$$.fragment),this.h()},l(d){s=v(d,"DIV",{class:!0});var M=h(s);l=v(M,"DIV",{});var ce=h(l);n=v(ce,"DIV",{});var Ae=h(n);r=v(Ae,"A",{href:!0,class:!0});var _e=h(r);m=v(_e,"H1",{class:!0});var Me=h(m);D=O(Me,"Coding All In One"),Me.forEach(f),H=I(_e),B=v(_e,"H1",{class:!0});var Te=h(B);j(g.$$.fragment,Te),Te.forEach(f),_e.forEach(f),Ae.forEach(f),p=I(ce),w=v(ce,"DIV",{class:!0});var fe=h(w);b=v(fe,"A",{href:!0,class:!0});var Oe=h(b);A=O(Oe,"코딩올인원?"),Oe.forEach(f),C=I(fe),E=v(fe,"A",{href:!0,class:!0});var Ce=h(E);q=O(Ce,"컴포넌트 소개"),Ce.forEach(f),G=I(fe),F=v(fe,"A",{href:!0,class:!0,target:!0});var Fe=h(F);k=O(Fe,"후원하기"),Fe.forEach(f),fe.forEach(f),u=I(ce),$=v(ce,"DIV",{class:!0});var ve=h($);N=v(ve,"A",{class:!0,href:!0,target:!0});var ye=h(N);Q=O(ye,"후원하기"),ye.forEach(f),oe=I(ve),j(te.$$.fragment,ve),ve.forEach(f),ce.forEach(f),M.forEach(f),me=I(d),R=v(d,"DIV",{class:!0}),h(R).forEach(f),de=I(d),P=v(d,"DIV",{class:!0});var $e=h(P);X=v($e,"DIV",{class:!0});var ge=h(X);le=v(ge,"A",{href:!0,class:!0});var Le=h(le);Ie=O(Le,"코딩올인원?"),Le.forEach(f),ke=I(ge),ae=v(ge,"A",{href:!0,class:!0});var Se=h(ae);ze=O(Se,"컴포넌트 소개"),Se.forEach(f),ge.forEach(f),De=I($e),se=v($e,"DIV",{class:!0});var Ne=h(se);j(ne.$$.fragment,Ne),Ne.forEach(f),$e.forEach(f),this.h()},h(){i(m,"class","single-line pc"),i(B,"class","single-line mob"),i(r,"href","/"),i(r,"class","flat col middle clear"),i(b,"href","/about"),i(b,"class","flat"),i(E,"href","/component"),i(E,"class","flat"),i(F,"href","/"),i(F,"class","flat button prim"),i(F,"target","_blank"),i(w,"class","col large pc menu"),i(N,"class","button flat prim"),i(N,"href","/"),i(N,"target","_blank"),i($,"class","mob col hambug"),i(s,"class","header"),ie(s,"active",o[0]>10),i(R,"class","dimmer"),ie(R,"active",o[1]),i(le,"href","/about"),i(le,"class","flat"),i(ae,"href","/component"),i(ae,"class","flat"),i(X,"class","row"),i(se,"class","close"),i(P,"class","hambug-menu"),ie(P,"active",o[1])},m(d,M){z(d,s,M),c(s,l),c(l,n),c(n,r),c(r,m),c(m,D),c(r,H),c(r,B),J(g,B,null),c(l,p),c(l,w),c(w,b),c(b,A),c(w,C),c(w,E),c(E,q),c(w,G),c(w,F),c(F,k),c(l,u),c(l,$),c($,N),c(N,Q),c($,oe),J(te,$,null),z(d,me,M),z(d,R,M),z(d,de,M),z(d,P,M),c(P,X),c(X,le),c(le,Ie),c(X,ke),c(X,ae),c(ae,ze),c(P,De),c(P,se),J(ne,se,null),re=!0,He||(Be=[pe(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(t,100),o[3]()}),pe($,"click",o[4]),pe(se,"click",o[5])],He=!0)},p(d,[M]){M&1&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,d[0]),a=setTimeout(t,100)),(!re||M&1)&&ie(s,"active",d[0]>10),(!re||M&2)&&ie(R,"active",d[1]),(!re||M&2)&&ie(P,"active",d[1])},i(d){re||(y(g.$$.fragment,d),y(te.$$.fragment,d),y(ne.$$.fragment,d),re=!0)},o(d){L(g.$$.fragment,d),L(te.$$.fragment,d),L(ne.$$.fragment,d),re=!1},d(d){d&&f(s),K(g),K(te),d&&f(me),d&&f(R),d&&f(de),d&&f(P),K(ne),He=!1,Re(Be)}}}function vt(o,e,t){let a=0,s=0;function l(D){t(1,s=D)}function n(){t(0,a=window.pageYOffset)}return[a,s,l,n,()=>l(1),()=>{l(0)}]}class $t extends Z{constructor(e){super(),x(this,e,vt,_t,ee,{})}}function gt(o){let e;return{c(){e=ue("path"),this.h()},l(t){e=he(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){i(e,"d","M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z")},m(t,a){z(t,e,a)},p:Y,d(t){t&&f(e)}}}function pt(o){let e,t;const a=[{viewBox:"0 0 24 24"},o[0]];let s={$$slots:{default:[gt]},$$scope:{ctx:o}};for(let l=0;l<a.length;l+=1)s=S(s,a[l]);return e=new Ve({props:s}),{c(){U(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,n){J(e,l,n),t=!0},p(l,[n]){const r=n&1?we(a,[a[0],Ee(l[0])]):{};n&2&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function bt(o,e,t){return o.$$set=a=>{t(0,e=S(S({},e),W(a)))},e=W(e),[e]}class wt extends Z{constructor(e){super(),x(this,e,bt,pt,ee,{})}}function Et(o){let e,t,a,s,l,n,r,m,D,H,B,g,p,w,b,A=o[1][o[0]].content+"",C,E,q,G;t=new $t({});const F=o[4].default,k=qe(F,o,o[3],null);return r=new wt({}),g=new et({}),{c(){e=_("div"),U(t.$$.fragment),a=V(),s=_("div"),k&&k.c(),l=V(),n=_("button"),U(r.$$.fragment),m=V(),D=_("span"),H=T("테마변경"),B=V(),U(g.$$.fragment),w=V(),b=new Xe(!1),C=be(),this.h()},l(u){e=v(u,"DIV",{class:!0,theme:!0});var $=h(e);j(t.$$.fragment,$),a=I($),s=v($,"DIV",{class:!0});var N=h(s);k&&k.l(N),N.forEach(f),l=I($),n=v($,"BUTTON",{class:!0});var Q=h(n);j(r.$$.fragment,Q),m=I(Q),D=v(Q,"SPAN",{});var oe=h(D);H=O(oe,"테마변경"),oe.forEach(f),Q.forEach(f),B=I($),j(g.$$.fragment,$),$.forEach(f),w=I(u),b=Ye(u,!1),C=be(),this.h()},h(){i(s,"class","content"),i(n,"class","popbutton"),i(e,"class","page-wrapper"),i(e,"theme",p=o[1][o[0]].name??"normal"),b.a=C},m(u,$){z(u,e,$),J(t,e,null),c(e,a),c(e,s),k&&k.m(s,null),c(e,l),c(e,n),J(r,n,null),c(n,m),c(n,D),c(D,H),c(e,B),J(g,e,null),z(u,w,$),b.m(A,u,$),z(u,C,$),E=!0,q||(G=pe(n,"click",o[2]),q=!0)},p(u,[$]){k&&k.p&&(!E||$&8)&&Ge(k,F,u,u[3],E?je(F,u[3],$,null):Ue(u[3]),null),(!E||$&1&&p!==(p=u[1][u[0]].name??"normal"))&&i(e,"theme",p),(!E||$&1)&&A!==(A=u[1][u[0]].content+"")&&b.p(A)},i(u){E||(y(t.$$.fragment,u),y(k,u),y(r.$$.fragment,u),y(g.$$.fragment,u),E=!0)},o(u){L(t.$$.fragment,u),L(k,u),L(r.$$.fragment,u),L(g.$$.fragment,u),E=!1},d(u){u&&f(e),K(t),k&&k.d(u),K(r),K(g),u&&f(w),u&&f(C),u&&b.d(),q=!1,G()}}}function Vt(o,e,t){let{$$slots:a={},$$scope:s}=e;const l=[{name:"normal",content:`
            <style>
                html, body {
                    --caio-black:rgb(0, 37, 129);
                    --caio-white:rgb(245, 242, 231);
                    --mobile-font-size:15px;
                    font-size: 18px;
                    font-weight: 500;
                }
            </style>
            `},{name:"toss",content:`
            <style>
                html,body {
                    --mobile-font-size:13px;

                    --caio-black:#000;
                    --caio-white:#fff;
                    --blue50: #e8f3ff;
                    --blue200: #90c2ff;
                    --blue100: #c9e2ff;
                    --blue300: #64a8ff;
                    --blue400: #4593fc;
                    --blue500: #3182f6;
                    --blue600: #2272eb;
                    --blue700: #1b64da;
                    --blue800: #1957c2;
                    --blue900: #194aa6;
                    --bg-color: #2f4f6;
                    --black-fade: rgba(0,0,0,.85);

                    --caio-theme:var(--blue500);
                    font-size: 16px;
                    font-weight: 500;
                    background:#f2f4f6;
                }
            </style>
            `}];let n=1;function r(){t(0,n++,n),t(0,n=n%l.length)}return o.$$set=m=>{"$$scope"in m&&t(3,s=m.$$scope)},[n,l,r,s,a]}class kt extends Z{constructor(e){super(),x(this,e,Vt,Et,ee,{})}}export{kt as default};