/**
 * Created by pperetko on 18.03.16.
 */

$(document).ready(function () {
    //$('#nav-kontakt').click(function () {
    //    $('.kontakt').show("slow", function () {
    //    });
    //});


});


$(document).ready(function () {
    $('#idcancel').click(function () {
        $('.kontakt').hide();
    });
});


function ValidateFrom(form) {
    var next = true;
    if (next) {
        var TestEmail = /^(.[A-Za-z0-9\-]*\w)+@+([A-Za-z0-9\-]*\w)+(\.[A-Za-z]*\w)+$/;

        var Wynik = form['email'].value.match(TestEmail);
        if (Wynik == null) {
            document.getElementById('input-email').setAttribute('style', 'border-width: 4px; border-color: red');
            document.getElementById('input-email').focus();
            next = false;

        } else {
            document.getElementById('input-email').setAttribute('style', 'border-width: 1px; border-color: black');

        }

    }
    //Walidacja numeru telefonu
    if (next) {
        var Testphone = /^\d{3}-?\d{3}-?\d{3}$/;
        var wynik1 = form['phone'].value.match(Testphone);
        if (wynik1 == null) {
            document.getElementById('input-phone').setAttribute('style', 'border-width: 4px; border-color: red');
            next = false;
        } else {
            document.getElementById('input-phone').setAttribute('style', 'border-width: 1px; border-color: black');
            document.getElementById('input-phone').focus();
        }

    }
    return next;
}


function getVar(name, url) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&#]*)')).exec(url)) {
        return decodeURIComponent(name[1]);
    }
}


$(function () {

    $("form").submit(function () {
        return (ValidateFrom(this));
    });

});


function infoOnclick(aparam) {
    document.getElementById('dobroplast-profil-1').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-2').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-1').style.display = 'none';
    document.getElementById('dobroplast-profil-2').style.display = 'none';
    document.getElementById('dobroplast-profil-3').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-4').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-3').style.display = 'none';
    document.getElementById('dobroplast-profil-4').style.display = 'none';
    document.getElementById('dobroplast-profil-5').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-6').setAttribute('style', 'display:none');
    document.getElementById('dobroplast-profil-5').style.display = 'none';
    document.getElementById('dobroplast-profil-6').style.display = 'none';
    document.getElementById('admar-profil-1').setAttribute('style', 'display:none');
    document.getElementById('admar-profil-2').setAttribute('style', 'display:none');
    document.getElementById('admar-profil-3').setAttribute('style', 'display:none');
    document.getElementById('artus-profil-1').setAttribute('style', 'display:none');
    document.getElementById('sztukmar-profil-1').setAttribute('style', 'display:none');
    document.getElementById('sztukmar-profil-2').setAttribute('style', 'display:none');
    document.getElementById('admar-profil-1').style.display = 'none';
    document.getElementById('admar-profil-2').style.display = 'none';
    document.getElementById('admar-profil-3').style.display = 'none';
    document.getElementById('artus-profil-1').style.display = 'none';
    document.getElementById('sztukmar-profil-1').style.display = 'none';
    document.getElementById('sztukmar-profil-2').style.display = 'none';
    document.getElementById('wojar-profil-1').style.display = 'none';
    document.getElementById('wojar-profil-2').style.display = 'none';
    document.getElementById('wojar-profil-1').setAttribute('style', 'display:none');
    document.getElementById('wojar-profil-2').setAttribute('style', 'display:none');
    document.getElementById('wojar-profil-3').setAttribute('style', 'display:none');
    document.getElementById('wojar-profil-3').setAttribute('style', 'display:none');

    if (aparam === 1) {
        document.getElementById('dobroplast-profil-1').style.display = 'block';
        document.getElementById('dobroplast-profil-2').style.display = 'block';
        document.getElementById('dobroplast-profil-1').setAttribute('style', 'display:block');
        document.getElementById('dobroplast-profil-2').setAttribute('style', 'display:block');
        document.getElementById('dobroplast-profil-3').style.display = 'block';
        document.getElementById('dobroplast-profil-4').style.display = 'block';
        document.getElementById('dobroplast-profil-3').setAttribute('style', 'display:block');
        document.getElementById('dobroplast-profil-4').setAttribute('style', 'display:block');
        document.getElementById('dobroplast-profil-5').style.display = 'block';
        document.getElementById('dobroplast-profil-6').style.display = 'block';
        document.getElementById('dobroplast-profil-5').setAttribute('style', 'display:block');
        document.getElementById('dobroplast-profil-6').setAttribute('style', 'display:block');

    } else
    if (aparam === 2) {
        document.getElementById('admar-profil-1').setAttribute('style', 'display:block');
        document.getElementById('admar-profil-2').setAttribute('style', 'display:block');
        document.getElementById('admar-profil-3').setAttribute('style', 'display:block');
        document.getElementById('artus-profil-1').setAttribute('style', 'display:block');
        document.getElementById('sztukmar-profil-1').setAttribute('style', 'display:block');
        document.getElementById('sztukmar-profil-2').setAttribute('style', 'display:block');
        document.getElementById('admar-profil-1').style.display = 'block';
        document.getElementById('admar-profil-2').style.display = 'block';
        document.getElementById('admar-profil-3').style.display = 'block';
        document.getElementById('artus-profil-1').style.display = 'block';
        document.getElementById('sztukmar-profil-1').style.display = 'block';
        document.getElementById('sztukmar-profil-2').style.display = 'block';

    } else
    if (aparam===3){
        document.getElementById('wojar-profil-1').style.display = 'block';
        document.getElementById('wojar-profil-1').setAttribute('style', 'display:block');
        document.getElementById('wojar-profil-2').style.display = 'block';
        document.getElementById('wojar-profil-2').setAttribute('style', 'display:block');
        document.getElementById('wojar-profil-3').style.display = 'block';
        document.getElementById('wojar-profil-3').setAttribute('style', 'display:block');

    }
}















