$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();

    $('select').formSelect();

    $('#dateFrom').datepicker({
        autoClose: true,
        onClose: function() {
            var date = this.date;

           /* if ($('#dateTo').val()) {

            }*/

            $('#dateTo').datepicker({
                minDate: date,
                autoClose: true,
                onClose: function() {
                    var dateFromValue = M.Datepicker.getInstance($('#dateFrom'));
                    var days = setCalcDays(dateFromValue.date, this.date);
                    $('.dateAmount').html(days);
                    recalcTotalAmount();
                }
            });
        },
        minDate: new Date()
    });

    $('.calc input').on('change', recalcTotalAmount);

    function recalcTotalAmount() {
        var days = +$('.dateAmount').html();
        var priceDay = 0;
        var total = 0;
        var inputs = $('.calc input:checked').each(function(i, input){
            total += +$(input).parent().find('.price').html();
        });
        var takeFrom = $('.takeFrom').val() ? +$('.takeFrom').val() : 0;
        var takeTo = $('.takeTo').val() ? +$('.takeTo').val() : 0;
        var priceList = $('.prices li');
        if (days <= 3) {
            priceDay = priceList.eq(3).data('price');
        } else

        if (days <= 9) {
            priceDay = priceList.eq(2).data('price');
        } else

        if (days <= 29) {
            priceDay = priceList.eq(1).data('price');
        } else

        if (days => 30) {
            priceDay = priceList.eq(1).data('price');
        }


        $('.totalAmount').html((total*days)+ (priceDay*days) + takeFrom + takeTo);
    }

    function setCalcDays(dateFrom, dateTo){
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        return Math.round(Math.abs((dateFrom.getTime() - dateTo.getTime())/(oneDay)));
    }

    $('.takeFrom, .takeTo').on('change', recalcTotalAmount);

});
