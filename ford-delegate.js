(function(map, on, off) {
    $.fn.on = function(type, fn, a, sel, p){
        if(a) sel=fn,map.push([fn=function(e){
            p=e.target; do{
                if(p.matches(sel)) return e.target=p,a.call(this,e);
            }while(p=p.parentNode);
        },a]);
        return on.call(this, type, fn);
    };
    $.fn.off = function(type, fn, a, c){
        for(c=map.length;a&&c--;)
            if(map[c][1]==a){fn=map.splice(c,1)[0][0];break;}
        return off.call(this, type, fn);
    };
}([], $.fn.on, $.fn.off));
