

 const coins = 1000;
    var data;
    $("#amount").on("input", function (e) {
        reCalc();
    });
    $("#select-coin").on("select2:select", function (e) {
        reCalc();
    });
    function reCalc(){
        var amount = $("#amount").val()
        if (amount ==0){
            amount = 1;
        };
        var coin = $("#select-coin").val();
        $('#BTC').text((data[coin].price_btc*amount).toFixed(8));
        $('#USD').text((data[coin].price_usd*amount).toFixed(2));
        $('#RANK').text(data[coin].rank);
        $('#SUP').text(data[coin].available_supply+" "+data[coin].symbol);
        $('#TSUP').text(data[coin].total_supply+" "+data[coin].symbol);
        $('#MCAP').text(data[coin].market_cap_usd +" $");
        $('#1H').text(data[coin].percent_change_1h +"%");
        $('#24H').text(data[coin].percent_change_24h +"%");
        $('#7D').text(data[coin].percent_change_7d +"%");
        
    }
    $(document).ready(function(){
        $("#select-coin").select2({
            placeholder: 'coin'
        });
        $.ajax({url: "https://api.coinmarketcap.com/v1/ticker/?limit=10000", success: function(result){
            data = result;
            $.each(result, function (i, item) {
                $('#select-coin').append($('<option value="'+i+'">'+item.symbol+" "+item.name+'</option>'));
            });
            $("#select-coin").val();
            reCalc();
        }});



    });


    $('.patch-container').patchpanel();



    function submitContactForm(){
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var message = $('#inputMessage').val();
    if(name.trim() == '' ){
        alert('Please enter your name.');
        $('#inputName').focus();
        return false;
    }else if(email.trim() == '' ){
        alert('Please enter your email.');
        $('#inputEmail').focus();
        return false;
    }else if(email.trim() != '' && !reg.test(email)){
        alert('Please enter valid email.');
        $('#inputEmail').focus();
        return false;
    }else if(message.trim() == '' ){
        alert('Please enter your message.');
        $('#inputMessage').focus();
        return false;
    }
}