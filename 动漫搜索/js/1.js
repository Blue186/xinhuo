let input=document.getElementById("input");
let btn=$("#btn");
let serch=input.value;
console.log(serch);
btn.bind("click",function(){
    let one=serch;
    let search=input.value;
    if(one!=search){
        //重新搜索重新布局
        let dt=$('.result');
        console.log(dt);
        dt.remove();
    }
    let t="http://www.torchcqs.cn:5555/search";
    let s="http://www.torchcqs.cn:5555/"+search;
    let d=''+search;
    console.log(search);
    console.log(t);
    console.log(d);
    $.post(
        t,
       {
        's':d
       },
        function(data){
            console.log(data.data[0].addr);
            let i=data.data.length;
            // let container=$(".container");
            // container.removeClass("padding-b")
            console.log(i);
            let run=function(data){
            console.log(data.index);
            for(let index=0;index<i;index++){
                let search=$(".art-art1");
            let results=$('<div class="result col-xs-12 padding-little"></div>');
            results.attr("data-url",""+data.data[index].next)
            let item=$('<div class="item col-xs-8 col-xs-offset-2"></div>');
            let grid=$('<div class="grid"></div>');
            let img=$('<div class="img"></div>');
            let imgs=$('<img src="images/00747wQSgy1fw2et6lwibj30fa0ljdjk.jpg" alt="">');
            imgs.attr("src",""+data.data[index].img);
            let text=$('<div class="text"></div>');
            let div=$('<div></div>');
            let textTitle=$('<p class="text-title"></p>');
            //设置内容
            textTitle.html(""+data.data[index].title);
            let textLeft=$('<div class="text-left"></div>');
            let textF1=$('<div class="text-f"></div>');
            let p1=$('<p></p>');
            //设置内容
            p1.html("年代："+data.data[index].time);
            let textF2=$('<div class="text-f"></div>');
            let p2=$('<p></p>');
            //设置内容
            p2.html("地区："+data.data[index].addr);
            let textF3=$('<div class="text-f"></div>');
            let p3=$('<p></p>');
            //设置内容
            p3.html("标签："+data.data[index].type);
            let textRight=$('<div class="text-right"></div>');
            p1.appendTo(textF1);
            p2.appendTo(textF2);
            p3.appendTo(textF3);
            textF1.appendTo(textLeft);
            textF2.appendTo(textLeft);
            textF3.appendTo(textLeft);
            textTitle.appendTo(div);
            div.appendTo(text);
            textLeft.appendTo(text);
            textRight.appendTo(text);
            img.appendTo(grid);
            imgs.appendTo(img);
            text.appendTo(grid);
            grid.appendTo(item);
            item.appendTo(results);
            results.appendTo(search);
            if(index===0){
                results.addClass("border");
            }



            results.bind("click",function(){
                let url="http://www.torchcqs.cn:5555/watch";
                let da=results.attr("data-url");
                console.log(da);
                $.post(
                    url,
                    {
                        'w':'/anime/1715.html'
                    },
                    function(data){
                     console.log(data);
                     console.log(da);
                     let video=$('<video src="/i/movie.ogg" class="video" preload="metadata"  controls="controls">your browser does not support the video tag</video>');
                     video.attr("src",""+data.data[0]);
                     video.appendTo(textRight);
                    }

                   
                )
            })
            }
            }
run(data);
        }
    );

    


});

