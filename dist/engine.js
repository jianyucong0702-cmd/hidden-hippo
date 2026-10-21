export const W=1672,H=941;
// Each anchor is the centre of a supporting surface, y is the feet baseline.
export const layouts={A:[[267,507,56,-5,'warm'],[520,323,35,5,'tan'],[456,471,39,-7,'tan'],[602,449,32,3,'green'],[1041,458,33,-4,'tan'],[1144,597,42,7,'warm'],[1492,197,47,-4,'tan'],[1542,381,38,5,'green'],[715,697,43,-8,'green'],[1540,738,61,7,'warm']],B:[[185,511,54,4,'tan'],[433,402,36,-4,'warm'],[527,416,32,6,'green'],[624,267,29,4,'tan'],[868,449,31,-4,'green'],[1078,523,35,4,'warm'],[1238,500,34,-5,'tan'],[1388,236,39,4,'tan'],[1502,492,43,-4,'green'],[677,801,48,5,'warm']]};
export function makeTargets(preset){return layouts[preset].map(([x,y,w,angle,tint],i)=>({id:`01-${preset}-${i+1}`,x,y,w,h:w*1.14,angle,tint,found:false,hitAt:0,occlusion:0,preset}));}
export function toWorld(x,y,c){return {x:(x-c.x)/c.scale,y:(y-c.y)/c.scale};}
export function toScreen(x,y,c){return {x:x*c.scale+c.x,y:y*c.scale+c.y};}
export function targetLocal(p,t){const a=-t.angle*Math.PI/180,dx=p.x-t.x,dy=p.y-(t.y-t.h/2);return{x:(dx*Math.cos(a)-dy*Math.sin(a))/t.w+.5,y:(dx*Math.sin(a)+dy*Math.cos(a))/t.h+.5};}
export function scoreFor(found,misses,hints,remaining,mode,complete=false){return Math.max(0,found*100-Math.max(0,misses-3)*10-hints*30+(complete&&mode==='timed'?Math.floor(remaining)*2:0));}
export function starsFor(elapsed,misses,hints,mode){const accuracy=10/(10+misses);return accuracy>=.9&&hints===0&&elapsed<=(mode==='timed'?180:360)?3:accuracy>=.65&&hints<=2?2:1;}
