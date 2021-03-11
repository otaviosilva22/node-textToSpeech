function hearSound(){
    var idmessage = this.name;
    $.ajax({
        method: "POST",
        url: "/generateSound", //rota get para leitura de comentários
        dataType: 'json',
        data: { idmessage },    
        statusCode:{ //tratando respostas
            201:(response)=>{
                
                nowDate = new Date();
                $("#source").attr('src', response.url+"?"+nowDate.getTime()); //resolve problema de cache
                $("#audio").get(0).load();
                $("#audio").get(0).play();
                
            },
            406:(response)=>{
                console.log(response);
            }
        }
    });
}

$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/readComments", //rota get para leitura de comentários
        dataType: 'json',
        statusCode:{  //tratando respostas..
            302:(response)=>{
                console.log(response);
                var json = response['responseJSON'];
                json.forEach(element => {
                    $('#comments').prepend("<div class='element'><div class='elementMessage'>"+element.message+"</div><button class='ouvir' name='"+element.id+"' onClick='hearSound.call(this);'>Ouvir</button></div>");
                });
            },
            404:(response)=>{
                console.log(response);
            }
        }
    });

    $("#btnCadastrar").click(function(e) {
        e.preventDefault(); //setando
        var text = document.getElementById('textArea');
        var message = text.value;
        text.value = " ",
        $.ajax({
            method: "POST",
            url: "/comments", //rota para criar comentário no database
            dataType: 'json',
            data: { message },
            statusCode: {
                400:()=>{
                    alert ('Error 400: Bad request!');
                }
            },
            success: function(result){
                $('#comments').prepend("<div class='element'><div class='elementMessage'>"+result.message+"</div><button class='ouvir' name='"+result.id+"' onClick='hearSound.call(this);'>Ouvir</button></div>");
            }
        });
    });
});