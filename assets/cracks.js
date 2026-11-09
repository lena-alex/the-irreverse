/* Hand-off cracks: continue the cracks in the home-page video out into the page.
   Every line starts where a real crack meets the edge of the video, or branches off one of those lines. */
const FAINT=[{"u": 0.2313, "ang": 3.4558, "core": 52, "thick": 1.0, "w": 1, "dark": 0.20392156862745098, "score": 0.59}, {"u": 0.3969, "ang": 3.0718, "core": 189, "thick": 1.0, "w": 1, "dark": 0.7411764705882353, "score": 0.83}, {"u": 0.4156, "ang": 3.0369, "core": 105, "thick": 1.0, "w": 1, "dark": 0.4117647058823529, "score": 0.57}, {"u": 0.4875, "ang": 3.1765, "core": 174, "thick": 1.0, "w": 1, "dark": 0.6823529411764706, "score": 0.72}, {"u": 0.5208, "ang": 3.2114, "core": 94, "thick": 1.0, "w": 1, "dark": 0.3686274509803922, "score": 0.71}, {"u": 0.5719, "ang": 2.8274, "core": 126, "thick": 1.0, "w": 1, "dark": 0.49411764705882355, "score": 0.34}, {"u": 0.5906, "ang": 3.2463, "core": 170, "thick": 1.0, "w": 1, "dark": 0.6666666666666666, "score": 0.59}, {"u": 0.7198, "ang": 3.4907, "core": 159, "thick": 1.0, "w": 1, "dark": 0.6235294117647059, "score": 0.43}, {"u": 0.7281, "ang": 3.4208, "core": 159, "thick": 1.0, "w": 1, "dark": 0.6235294117647059, "score": 0.57}, {"u": 0.75, "ang": 3.1765, "core": 159, "thick": 1.0, "w": 1, "dark": 0.6235294117647059, "score": 0.48}, {"u": 0.7906, "ang": 3.3161, "core": 126, "thick": 1.0, "w": 1, "dark": 0.49411764705882355, "score": 0.98}, {"u": 0.8302, "ang": 3.4558, "core": 156, "thick": 1.0, "w": 1, "dark": 0.611764705882353, "score": 0.53}, {"u": 0.8385, "ang": 3.351, "core": 153, "thick": 1.0, "w": 1, "dark": 0.6, "score": 1.0}, {"u": 0.974, "ang": 3.4907, "core": 235, "thick": 1.0, "w": 1, "dark": 0.9215686274509803, "score": 0.55}];
const EXITS={"left": [{"u": 0.0229, "ang": 3.3161, "score": 1.0, "w": 3, "dark": 0.5176, "core": 111, "thick": 2.0, "bg": 255}, {"u": 0.0844, "ang": 2.6878, "score": 1.0, "w": 4, "dark": 0.451, "core": 157, "thick": 2.0, "bg": 255}, {"u": 0.1, "ang": 3.1416, "score": 1.0, "w": 3, "dark": 0.349, "core": 104, "thick": 2.0, "bg": 255}, {"u": 0.1844, "ang": 2.7227, "score": 0.79, "w": 4, "dark": 0.149, "core": 145, "thick": 2.5, "bg": 255}, {"u": 0.2188, "ang": 2.9671, "score": 0.87, "w": 5, "dark": 0.0078, "core": 82, "thick": 2.0, "bg": 255}, {"u": 0.249, "ang": 2.9671, "score": 0.58, "w": 2, "dark": 0.8275, "core": 157, "thick": 2.0, "bg": 255}, {"u": 0.2844, "ang": 2.7925, "score": 0.97, "w": 2, "dark": 0.7882, "core": 196, "thick": 2.0, "bg": 255}, {"u": 0.3208, "ang": 3.0369, "score": 0.97, "w": 1, "dark": 0.8078, "core": 200, "thick": 1.0, "bg": 255}, {"u": 0.3635, "ang": 2.8623, "score": 0.89, "w": 2, "dark": 0.8353, "core": 204, "thick": 2.0, "bg": 255}, {"u": 0.5437, "ang": 3.351, "score": 0.74, "w": 3, "dark": 0.4118, "core": 208, "thick": 2.0, "bg": 255}, {"u": 0.6115, "ang": 3.2114, "score": 0.87, "w": 2, "dark": 0.8706, "core": 207, "thick": 2.0, "bg": 255}, {"u": 0.6312, "ang": 3.2114, "score": 0.71, "w": 3, "dark": 0.5922, "core": 114, "thick": 2.0, "bg": 255}, {"u": 0.6458, "ang": 3.3161, "score": 0.95, "w": 9, "dark": 0.0157, "core": 130, "thick": 6.0, "bg": 255}, {"u": 0.6802, "ang": 3.2114, "score": 0.71, "w": 2, "dark": 0.8706, "core": 224, "thick": 2.0, "bg": 255}, {"u": 0.8625, "ang": 3.351, "score": 1.0, "w": 3, "dark": 0.3843, "core": 79, "thick": 1.0, "bg": 255}, {"u": 0.9156, "ang": 3.3859, "score": 1.0, "w": 2, "dark": 0.7451, "core": 203, "thick": 2.0, "bg": 255}, {"u": 0.9469, "ang": 3.4208, "score": 1.0, "w": 2, "dark": 0.7137, "core": 185, "thick": 1.0, "bg": 255}], "bottom": [{"u": 0.1573, "ang": 0.3142, "score": 1.0, "w": 10, "dark": 0.7412, "core": 201, "thick": 2.0, "bg": 255}, {"u": 0.2635, "ang": 0.384, "score": 0.71, "w": 2, "dark": 0.9569, "core": 109, "thick": 2.0, "bg": 255}, {"u": 0.2792, "ang": 0.2793, "score": 1.0, "w": 11, "dark": 0.3098, "core": 96, "thick": 1.5, "bg": 255}, {"u": 0.2948, "ang": 0.2443, "score": 1.0, "w": 2, "dark": 1.0, "core": 95, "thick": 1.5, "bg": 255}, {"u": 0.4, "ang": 0.2793, "score": 0.95, "w": 9, "dark": 0.6275, "core": 181, "thick": 1.5, "bg": 255}, {"u": 0.5323, "ang": 2.0595, "score": 0.97, "w": 2, "dark": 0.8745, "core": 174, "thick": 1.0, "bg": 255}, {"u": 0.5646, "ang": 0.6632, "score": 0.53, "w": 1, "dark": 0.8824, "core": 246, "thick": 2.0, "bg": 255}, {"u": 0.676, "ang": 2.7227, "score": 1.0, "w": 8, "dark": 0.5216, "core": 156, "thick": 1.5, "bg": 255}, {"u": 0.8385, "ang": 2.8972, "score": 0.63, "w": 2, "dark": 0.6667, "core": 249, "thick": 6.0, "bg": 255}, {"u": 0.8677, "ang": 2.6878, "score": 1.0, "w": 6, "dark": 0.2275, "core": 31, "thick": 2.0, "bg": 255}, {"u": 0.9615, "ang": 2.3038, "score": 0.66, "w": 4, "dark": 0.4196, "core": 121, "thick": 1.5, "bg": 255}], "right": [{"u": 0.0729, "ang": 6.2832, "score": 0.87, "w": 1, "dark": 0.7098, "core": 222, "thick": 2.0, "bg": 255}, {"u": 0.1677, "ang": 6.3879, "score": 1.0, "w": 4, "dark": 0.051, "core": 22, "thick": 2.0, "bg": 255}, {"u": 0.2406, "ang": 5.2011, "score": 0.97, "w": 8, "dark": 0.2902, "core": 174, "thick": 1.5, "bg": 255}, {"u": 0.6365, "ang": 5.62, "score": 0.5, "w": 2, "dark": 0.7608, "core": 236, "thick": 1.5, "bg": 255}, {"u": 0.7021, "ang": 5.7945, "score": 0.76, "w": 3, "dark": 0.6275, "core": 207, "thick": 2.0, "bg": 255}, {"u": 0.749, "ang": 5.5851, "score": 0.74, "w": 2, "dark": 0.7137, "core": 216, "thick": 1.5, "bg": 255}, {"u": 0.826, "ang": 5.6549, "score": 1.0, "w": 2, "dark": 0.7804, "core": 196, "thick": 1.5, "bg": 255}, {"u": 0.9292, "ang": 5.7247, "score": 1.0, "w": 3, "dark": 0.3647, "core": 79, "thick": 1.0, "bg": 255}, {"u": 0.9625, "ang": 5.5152, "score": 0.66, "w": 5, "dark": 0.0, "core": 119, "thick": 1.5, "bg": 255}]};
function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function textRects(hr){
  const out=[];
  for(const el of document.querySelectorAll('.hero .eyebrow,.hero h1,.hero .lead')){
    const w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let n;
    while((n=w.nextNode())){ if(!n.textContent.trim())continue; const g=document.createRange(); g.selectNodeContents(n);
      for(const r of g.getClientRects()) out.push({x0:r.left-hr.left,y0:r.top-hr.top,x1:r.right-hr.left,y1:r.bottom-hr.top}); }
  }
  return out;
}
const angDiff=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
function draw(seed){
  const hero=document.querySelector('.hero'), cv=document.getElementById('cracks');
  const hr=hero.getBoundingClientRect(), dpr=2;
  cv.width=hr.width*dpr; cv.height=hr.height*dpr; const c=cv.getContext('2d'); c.scale(dpr,dpr); c.lineCap='round'; c.lineJoin='round';
  const v=document.querySelector('.film video').getBoundingClientRect();
  const vx=v.left-hr.left, vy=v.top-hr.top, vs=v.width, k=vs/480;     // k: video pixels -> page pixels
  const T=textRects(hr);
  const distText=(x,y)=>Math.min(...T.map(r=>{const dx=Math.max(r.x0-x,0,x-r.x1), dy=Math.max(r.y0-y,0,y-r.y1); return (dx===0&&dy===0)?-1:Math.hypot(dx,dy);}));
  const inVideo=(x,y)=>x>vx+0.5&&x<vx+vs-0.5&&y>vy+0.5&&y<vy+vs-0.5;
  const h1=document.querySelector('.hero h1'), tn=[...h1.childNodes].filter(n=>n.nodeType===3).pop();
  const rg=document.createRange(); rg.selectNodeContents(tn); const wr=[...rg.getClientRects()].pop();
  const word={x:wr.right-hr.left+30,y:(wr.top+wr.bottom)/2-hr.top};
  const ceiling=wr.top-hr.top+10;
  const R=rng(seed);
  function stopHere(x,y,steps,free){
    if(steps>1&&inVideo(x,y)) return true;
    if(x<0||y<0||x>hr.width||y>hr.height) return true;
    const d=distText(x,y); if(d<0) return true;
    let p=0.5*Math.exp(-d/22);
    if(y<ceiling&&!free) p+=0.1+0.012*(ceiling-y);
    return R()<p;
  }
  // a crack continues smoothly from (x,y) with heading a0; 'goal' is a heading it is gently drawn towards after a while
  function crack(x,y,a0,len,w,alpha,depth,opt){
    let d=0,a=a0,curv=(R()-0.5)*0.01,steps=0; const pts=[[x,y]];
    while(d<len){
      const step=2.5+R()*4;
      const pull=Math.min(1,d/60)*(opt.pull||0);              // no pull at first, so the line leaves the box on its own course
      curv+= (R()-0.5)*0.004; curv*=0.97;
      a+= curv*step + (R()-0.5)*0.05 + (opt.goal!=null? angDiff(opt.goal,a)*pull : 0);
      if(depth<2&&d>20&&R()<0.012) a+=(R()-0.5)*0.7;           // the odd glassy kink
      const nx=x+Math.cos(a)*step, ny=y+Math.sin(a)*step; steps++;
      if(stopHere(nx,ny,steps,opt.free)) break;
      x=nx;y=ny;d+=step;pts.push([x,y,a]);
      // branches grow out of this line
      if(depth<3 && d>12 && R()<(opt.branch||0.02)*(depth===0?1:0.6)){
        const side=R()<0.5?-1:1, ba=a+side*(0.22+R()*0.6);
        crack(x,y,ba,(len-d)*(0.3+R()*0.7),w*(0.45+R()*0.25),alpha*0.85,depth+1,{goal:opt.goal,pull:(opt.pull||0)*0.7,branch:opt.branch,free:opt.free});
      }
      if(R()<0.006){c.fillStyle='rgba(10,10,10,'+(0.3+R()*0.4)*alpha+')';c.beginPath();c.arc(x+(R()-0.5)*4,y+(R()-0.5)*4,0.4+R()*0.9,0,7);c.fill();}
    }
    // where a line leaves the video: begin a few pixels inside it, along the real crack, fading in (darken-only, so the
    // video's own crack is never covered), then hold the crack's own grey and thickness and ease into the drawn style
    const J=20, JW=70, M=opt.match;
    if(M){
      const L=M.steep?24:10, sx=pts[0][0]-Math.cos(a0)*L, sy=pts[0][1]-Math.sin(a0)*L, n=10;
      c.save(); c.globalCompositeOperation='darken';
      for(let i=0;i<n;i++){
        const t0=i/n, t1=(i+1)/n, g=Math.round(255-(255-Math.min(M.g,150))*Math.pow(t1,0.8));
        c.strokeStyle='rgb('+g+','+g+','+g+')'; c.lineWidth=M.w*(0.7+0.3*t1);
        c.beginPath(); c.moveTo(sx+(pts[0][0]-sx)*t0, sy+(pts[0][1]-sy)*t0); c.lineTo(sx+(pts[0][0]-sx)*t1, sy+(pts[0][1]-sy)*t1); c.stroke();
      }
      c.restore();
    }
    let s=0;
    c.save(); c.beginPath(); c.rect(0,0,hr.width,hr.height); c.rect(vx,vy,vs,vs); c.clip('evenodd');
    for(let i=1;i<pts.length;i++){
      const t=i/pts.length;
      const aO=alpha*Math.pow(1-t,1.15)+0.03, wO=Math.max(0.2,w*Math.pow(1-t,0.7));
      s+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);
      const ws=M? (()=>{let q=Math.min(1,Math.max(0,s-4)/(JW-4)); q=q*q*(3-2*q); return M.w+(wO-M.w)*q;})() : wO;
      if(M && s<J){
        let b=Math.max(0,(s-6))/(J-6); b=b*b*(3-2*b);               // smooth blend, starting a few px out
        const gO=255-243*(1-Math.pow(1-Math.min(1,aO),1.8)), g0=Math.min(M.g,gO+25), g=Math.round(g0+(gO-g0)*b);
        c.strokeStyle='rgb('+g+','+g+','+g+')';
        c.lineWidth=ws;
      }else{
        const gO=Math.round(255-243*(1-Math.pow(1-Math.min(1,aO),1.8))); c.strokeStyle='rgb('+gO+','+gO+','+gO+')';
        c.lineWidth=ws;
      }
      c.beginPath();c.moveTo(pts[i-1][0],pts[i-1][1]);c.lineTo(pts[i][0],pts[i][1]);c.stroke();
    }
    c.restore();
  }
  const mix=(a,b,c2)=>{const r=R();return r<0.3?a[0]+R()*a[1]:r<0.7?b[0]+R()*b[1]:c2[0]+R()*c2[1];};
  const normals={left:Math.PI,right:0,bottom:Math.PI/2};
  const edgeOf=o=>EXITS.left.includes(o)?'left':EXITS.right.includes(o)?'right':'bottom';
  const CURVE=[[0,0],[0.35,0.16],[0.6,0.36],[0.8,0.6],[0.9,0.8],[0.95,1],[1,1]];   // same curve as applied to the video
  const shown=v=>{const x=v/255; for(let i=1;i<CURVE.length;i++){const [x0,y0]=CURVE[i-1],[x1,y1]=CURVE[i]; if(x<=x1) return 255*(y0+(y1-y0)*(x-x0)/(x1-x0));} return 255;};
  const match=o=>({g:Math.min(245,shown(o.core)), w:Math.max(0.45,Math.min(1.5,o.thick*k*0.8)), steep:Math.cos(angDiff(o.ang,normals[edgeOf(o)]))>0.55});
  const style=o=>({w:Math.max(0.35,Math.min(1.6,o.w*k*0.55+(1-o.dark)*0.9)), alpha:Math.min(0.95,0.35+(1-o.dark)*0.75)});

  const narrow = window.matchMedia('(max-width: 900px)').matches;
  // LEFT edge: each crack carries on from where it leaves the picture
  for(const o of (narrow?[]:EXITS.left)){
    const y=vy+o.u*vs, st=style(o);
    if(o.u<0.34){                                            // upper part: short stubs that peter out quickly
      crack(vx,y,o.ang,40+R()*140,st.w,st.alpha,1,{match:match(o),free:true,branch:0.015});
    }else{                                                   // middle and lower part: longer, creeping towards "irreverse", branching
      const toWord=Math.atan2(word.y-y,word.x-vx);
      const goal = o.u<0.75 ? toWord : Math.PI+0.08;
      crack(vx,y,o.ang,mix([90,120],[220,220],[420,320]),st.w*1.15,st.alpha,0,{match:match(o),goal,pull:0.035,branch:o.u<0.75?0.045:0.03});
    }
  }
  // BOTTOM edge: continue each crack downwards / outwards and let it fan
  for(const o of EXITS.bottom){
    const x=vx+o.u*vs, st=style(o);
    crack(x,vy+vs,o.ang,mix([50,90],[140,180],[280,260]),st.w*1.1,st.alpha,0,{match:match(o),goal:Math.PI/2,pull:0.008,branch:0.035});
  }
  // extra cracks at the bottom-left corner: second continuations of the real cracks there, bent down and out to the left
  const R2=rng(91);
  const lowLeft=EXITS.left.filter(o=>o.u>0.78), lowBottom=EXITS.bottom.filter(o=>o.u<0.45);
  for(const o of (narrow?[]:lowLeft)){
    const y=vy+o.u*vs, st=style(o);
    for(let j=0;j<2;j++) crack(vx,y,o.ang+(R2()-0.3)*0.25,140+R2()*240,st.w*0.9,st.alpha*0.9,1,{match:match(o),goal:Math.PI*0.68+R2()*0.2,pull:0.03,branch:0.04});
  }
  for(const o of lowBottom){
    const x=vx+o.u*vs, st=style(o);
    crack(x,vy+vs,o.ang,120+R2()*220,st.w,st.alpha*0.9,1,{match:match(o),goal:Math.PI*0.62+R2()*0.25,pull:0.03,branch:0.04});
  }
  // the fainter, broken cracks along the left edge: fine continuations of uneven length that thin out organically
  const R3=rng(57);
  for(const o of (narrow?[]:FAINT)){
    const y=vy+o.u*vs;
    const r=R3(), len = r<0.35 ? 30+R3()*70 : r<0.8 ? 110+R3()*180 : 260+R3()*260;
    const m={g:Math.min(235,shown(o.core)+20), w:0.6, steep:true};
    crack(vx,y,o.ang+(R3()-0.5)*0.08,len,0.5+R3()*0.5,0.28+R3()*0.3,1,{match:m,goal:o.u>0.6?Math.PI*0.97:Math.PI*1.02,pull:0.01,branch:0.02});
  }
  // RIGHT edge, lower half only
  for(const o of (narrow?[]:EXITS.right)){
    if(o.u<0.5) continue;
    const y=vy+o.u*vs, st=style(o);
    crack(vx+vs,y,o.ang,mix([40,80],[110,150],[220,200]),st.w,st.alpha,0,{match:match(o),goal:0.15,pull:0.01,branch:0.03});
  }
}
function redraw(){ try{ draw(7); }catch(e){} }
let _t; window.addEventListener('resize',()=>{clearTimeout(_t);_t=setTimeout(redraw,150);});
window.addEventListener('load',()=>{ redraw(); if(document.fonts&&document.fonts.ready) document.fonts.ready.then(redraw); });
