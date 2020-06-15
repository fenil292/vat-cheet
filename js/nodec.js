var socket = io.connect( 'http://localhost:8080' );
$( "#send" ).click( function() {
	var m = $( "#msgbox" ).val();
	var name= document.getElementById('name');
	var t,user_id;
	m=m.trim();
	if(m!="")
	{
			$.ajax({
                type:"POST",
                dataType:'text',
                url:"./js/insert_msg.php",
                data: { message: m },
                success:function(res){                  
                    var d=JSON.parse(res);               
                    user_id=d.name;
                    t=d.time;
                    $('#msgbox').focus();
                    document.getElementById('msgbox').value = "";
                    socket.emit( 'message', { name: name.textContent, message: m, time: t} );
                }           
            });
	}
	else
	{
		$('#msgbox').focus();
        document.getElementById('msgbox').value = "";
		alert('Tari ****,First Type a Message!');
	}           
	return false;
});

socket.on( 'message', function( data ) {
	var name= document.getElementById('name');
	var div = document.getElementById('chat');
	if(data.name==name.textContent)
    {
    	div.innerHTML += "<div class='container darker' style='float:right;width:50%;'><p>"+data.message+"</p><span class='time-left'>"+data.time+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><div style='color:blue;' class='time-left'>"+data.name+"</div></div>";
    }
    else
    {
    	div.innerHTML += "<div class='container' style='width:50%;float:left;'><p>"+data.message+"</p><span class='time-right'>"+data.time+"</span><div style='color:red;' class='time-right'>"+data.name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>";
    }
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
});