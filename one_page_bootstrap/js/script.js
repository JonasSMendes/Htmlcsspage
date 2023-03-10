$(function(){
    $.ajax({
        url:'https://api.b7web.com.br/cinema/',
        type: 'GET',
        datatype: 'json',
        beforesend: function(){
            $('.filmes').html('<div class="col-md-12 filme"> carregando... </div>')
        },
        success: function(json){
            let html = '';

            for(let i in json){
                html += '<div class="col-md-4 filme"> <img src="'+json[i].avatar+'" />'+json[i].titulo+' </div>'
            }

            $('.filmes').html(html)
        }
    })
})