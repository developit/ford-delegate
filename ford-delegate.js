function($){
	var map=[], on=$.fn.on, off=$.fn.off;
    $.fn.on = function(type, fn, a, sel, p){
        if(a) map.push([sel=fn,fn=function(e){
            p=e.target; do{
                if(p.matches && p.matches(sel))
                    return e.target=p,a.call(this,e);
            }while(p=p.parentNode);
        },a]);
        return on.call(this, type, fn);
    };
    $.fn.off = function(type, fn, a, c){
        for(c=map.length;a&&c--;)
            if(map[c][2]==a && map[c][0]===fn)
                {fn=map.splice(c,1)[0][1];break;}
        return off.call(this, type, fn);
    };
}

if (typeof define==='function' && define.amd) {
	define(['ford'], function($){  });
}
