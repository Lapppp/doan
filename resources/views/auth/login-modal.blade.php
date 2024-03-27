
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="loginModalLabel">Đăng nhập</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="loginForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="username" placeholder="Tên đăng nhập" required>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Mật khẩu" required>
                    </div>
                    <!-- Nút đăng nhập -->
                    <button type="submit" id="Sigin" class="btn btn-primary">Đăng nhập</button>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
    // Xử lý khi modal được ẩn
    $(document).ready(function() {
    $(document).on('click', '#Sigin', function(event) {      
        event.preventDefault(); 

        let email = $('#username').val();
        let password = $('#password').val();
        let formData = { email: email, password: password }; 

        if (email.trim().length <= 0) {
            $('#showError').show();
            $('#showError').text('Tên đăng nhập không được để trống');
            return;
        } 
        if (password.trim().length <= 0) {
            $('#showError').show();
            $('#showError').text('Mật khẩu không được để trống');
            return;
        }else{
        $.ajax({
            url: "{{ route('checklogin') }}",
            type: "POST",
            data: formData,
            success: function(response) {
                if (response.status === 'success') {
                    alert('Đăng nhập thành công!');
                    $('#loginModal').modal('hide');            
                    window.location.reload( );       
                } else {
                    alert('Kiểm tra lại: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error(error);
                alert('Đã xảy ra lỗi khi gửi yêu cầu đến máy chủ.');
            }
        
        });
    }
    });
});


    
</script>
