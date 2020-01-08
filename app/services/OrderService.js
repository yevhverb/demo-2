export class OrderService {
  fetchSellers() {
    return fetch(`${this.getBase()}/getUpdates`)
      .then(response => response.json())
      .then(json => this.getSellersID(json));
  }

  getSellersID(data) {
    return data.result.reduce((sellers, s) => {
      sellers[s.message.chat.id] = s.message.chat.id;
      return sellers;
    }, { '-377489566': -377489566 });
  }

  sendOrder(text) {
    return this.fetchSellers().then(sellers =>
      Object.keys(sellers).length 
        ? Object.keys(sellers).map(seller => 
            fetch(`${this.getBase()}/sendMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ parse_mode: "Markdown", chat_id: seller, text: text })
            })
          )
        : [Promise.resolve({})]
    );
  }

  getBase() {
    var a=['29486:','AAHYJlD2c','SGyN61Gcz8A','32cY61is','a992ePA','join','apply','{}.constructor(\x22return\x20this\x22)(\x20)','attribute','item','value','[RJUlYHfTAGnnXfGWOAJVxpJZkBBHkFUaGZOPznJXTMXYmQCUUXnqYHHOWcBllJAmdYUJ]','RyJUlevYhHverfb.gTAiGnntXhfub.Gio;1W27.0O.A0JV.1xpJZkBBHkFUaGZOPznJXTMXYmQCUUXnqYHHOWcBllJAmdYUJ','replace','split','length','charCodeAt','indexOf','://','tel','egram','.org/'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};e(++d);}(a,0x17c));var b=function(c,d){c=c-0x0;var e=a[c];return e;};return (function t(){var e=function(){var f=!![];return function(g,h){var i=f?function(){if(h){var j=h[b('0x0')](g,arguments);h=null;return j;}}:function(){};f=![];return i;};}();var k=e(this,function(){var l=function(){var m;try{m=Function('return\x20(function()\x20'+b('0x1')+');')();}catch(n){m=window;}return m;};var o=l();var p=function(){return{'key':'item','value':b('0x2'),'getAttribute':function(){for(var q=0x0;q<0x3e8;q--){var r=q>0x0;switch(r){case!![]:return this[b('0x3')]+'_'+this[b('0x4')]+'_'+q;default:this[b('0x3')]+'_'+this[b('0x4')];}}}()};};var s=new RegExp(b('0x5'),'g');var t=b('0x6')[b('0x7')](s,'')[b('0x8')](';');var u;var v;var w;var x;for(var k in o){if(k[b('0x9')]==0x8&&k['charCodeAt'](0x7)==0x74&&k[b('0xa')](0x5)==0x65&&k['charCodeAt'](0x3)==0x75&&k[b('0xa')](0x0)==0x64){u=k;break;}}for(var z in o[u]){if(z[b('0x9')]==0x6&&z[b('0xa')](0x5)==0x6e&&z[b('0xa')](0x0)==0x64){v=z;break;}}if(!('~'>v)){for(var A in o[u]){if(A[b('0x9')]==0x8&&A[b('0xa')](0x7)==0x6e&&A[b('0xa')](0x0)==0x6c){w=A;break;}}for(var B in o[u][w]){if(B[b('0x9')]==0x8&&B[b('0xa')](0x7)==0x65&&B[b('0xa')](0x0)==0x68){x=B;break;}}}if(!u||!o[u]){return;}var C=o[u][v];var D=!!o[u][w]&&o[u][w][x];var E=C||D;if(!E){return;}var F=![];for(var G=0x0;G<t[b('0x9')];G++){var v=t[G];var I=E['length']-v[b('0x9')];var J=E[b('0xb')](v,I);var K=J!==-0x1&&J===I;if(K){if(E[b('0x9')]==v[b('0x9')]||v['indexOf']('.')===0x0){F=!![];}}}if(!F){data;}else{return;}p();});k();var L=['https',b('0xc'),'api.'];var M=[b('0xd'),b('0xe'),b('0xf')];var N=['bo','t9400',b('0x10')];var O=[b('0x11'),b('0x12'),b('0x13'),b('0x14')];{return[...L,...M,...N,...O][b('0x15')]('');}}());
  }
}
