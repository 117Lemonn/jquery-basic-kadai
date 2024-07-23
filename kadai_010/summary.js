$(function(){
    let target=$('#target');

    //文字の色を変化
    $('#change-color').on('click',function(){
        if (target.css('color')==='rgb(255,0,0)'||target.css('color')==='red'){
            target.css('color','black');
        }else{
            target.css('color','red');
        }
    });


    //表示に応じて文字内容をかえる
    $('#change-text').on('click',function(){
        if(target.text()!=='こんにちは！'){
            target.text('こんにちは！');
        }else{
            target.text('Hello');
        }
    });

    //フェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });


    //フェードイン
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
});