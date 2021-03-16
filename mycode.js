jQuery(document).ready(function($)
{
$('#submit-button').click(function(e)
{
    var nameva=$('#name').val();
    var pass=$('#password').val();
    var ppass=$('#confirm_password').val();
    $('.wrong').remove();

    if(nameva.length<5 )
    {
        $("#name").after('<p class="namewrong wrong" style="color:red"> Please Enter Name with more than 5 characters</p>');
        setTimeout(function()
        {
            $('.namewrong').remove();

        },5000);
        e.preventDefault();

    }

    if(pass.length<8)
    {
        $("#password").after('<p class="passlength wrong" style="color:red"> Please Enter Password with more than 8 characters</p>');
        setTimeout(function()
        {
            $('.passlength').remove();

        },5000);
        e.preventDefault();
    }

    if(pass!=ppass)
    {
        $("#confirm_password").after('<p class="passwrong wrong" style="color:red"> Please enter exact same passwords.</p>');
        setTimeout(function()
        {
            $('.passwrong').remove();
        },5000);
        e.preventDefault();
    }


});

});