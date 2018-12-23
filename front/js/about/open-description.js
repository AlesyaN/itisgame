var showedDescrId;
$('li').bind('click', function () {
    $('p.description1').hide();
    if (showedDescrId !== $(this).attr('data-description')) {
        $('#' + $(this).attr('data-description')).fadeIn();
        showedDescrId = $(this).attr('data-description');
    }
});