$( document ).ready(function() {



    $('#school_id').on('select2:select', function (e)
    {
        let startMonth = $('#startMonth').val();
        let endMonth = $('#endMonth').val();
        var data = e.params.data;

        if (startMonth.trim().length <= 0) {
            $('#displayError').show();
            $('#showError').html('Please enter Start Month');
            $('#startMonth').focus();
        }else if (endMonth.trim().length <= 0) {
            $('#displayError').show();
            $('#showError').html('Please enter End Month');
            $('#endMonth').focus();
        }else {
            $.ajax({
                type:'POST',
                url: baseUrl+'/pupil/json',
                dataType:'json',
                data: {
                    school_id: data.id,
                    _token:$('meta[name="csrf-token"]').attr('content'),
                    startMonth:startMonth,
                    endMonth:endMonth
                },
                success:function (dataJson) {
                    if(dataJson.status =='fail') {
                        $('#displayError').show();
                        $('#showError').html(dataJson.message);
                    }else {
                        $('#pupil_id').html(dataJson.data.jsonHTML).trigger('change');
                    }
                }
            });
        }

    });

    $(document).on('click','#submitBravo',function (e) {

        let startMonth = $('#startMonth').val();
        let endMonth = $('#endMonth').val();
        let school_id = $('#school_id').val();
        let pupil_id = $('#pupil_id').val();
        $('#displayError').hide();
        $('#showLoading').hide();

        if (startMonth.trim().length <= 0) {
            $('#displayError').show();
            $('#showError').html('Please enter Start Month');
            $('#startMonth').focus();
        }else if (endMonth.trim().length <= 0) {
            $('#displayError').show();
            $('#showError').html('Please enter End Month');
            $('#endMonth').focus();
        }else if (school_id.trim().length <= 0) {
            $('#school_id').select2('open');
            $('#displayError').show();
            $('#showError').html('Please choose The School');
        }else {
            $('#showLoading').show();
            $.ajax({
                type:'POST',
                url: baseUrl+'/pupil/json',
                dataType:'json',
                data: {
                    school_id: data.id,
                    _token:$('meta[name="csrf-token"]').attr('content'),
                    startMonth:startMonth,
                    endMonth:endMonth
                },
                success:function (dataJson) {
                    if(dataJson.status =='fail') {
                        $('#displayError').show();
                        $('#showError').html(dataJson.message);
                    }
                }
            });
        }


    })


});
