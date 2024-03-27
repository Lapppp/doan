<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="registerModalLabel">Đăng ký</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="registerForm">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Họ Tên" required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email" required>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Mật khẩu" required>
                    </div>
                    <!-- Nút đăng ký -->
                    <button type="submit" id="Signup" class="btn btn-primary">Đăng ký</button>
                </form>
            </div>
        </div>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script>
  $(document).ready(function() {
    $(document).on('click', '#Signup', function(event) {
        event.preventDefault();
        let name = $('#registerModal #name').val();
        let email = $('#registerModal #email').val();
        let password =$('#registerModal #password').val();
        let formData = { name: name, email: email, password: password }; 

        console.log(password);
        if (password.trim().length === 0) {
            alert('Mật khẩu không được để trống');
            return;
        }

       
        if (name.trim().length <= 0) { 
            showError('Họ tên không được để trống');
            return;
        } else if (email.trim().length <= 0) {
            showError('Tên đăng nhập không được để trống');
            return;
        } else { 
            $.ajax({
                url: "{{ route('checksignup') }}",

            
                type: 'POST', 
                data: formData,                        
                success: function (response) {
                    if (response.status === 'success') {
                        alert('Đăng ký thành công!');
                        $('#registerModal').modal('hide');
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

    function showError(message) {
        $('#error').text(message).show();
    }
});


</script>
