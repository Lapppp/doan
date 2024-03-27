<x-layout.frontend>
    <section class="breadcrumb__section breadcrumb__bg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb__content text-center">
                        <h1 class="breadcrumb__content--title text-white mb-4">Đăng nhập & Tạo tài khoản mới</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a class="text-white" href="{{ route('frontend.home.index') }}">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Đăng nhập & Tạo tài khoản mới</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Login -->
    <div class="login__section py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form action="{{ route('frontend.auth.login') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="username" class="form-label">Tên đăng nhập</label>
                            <input type="text" class="form-control" id="email" name="email" placeholder="Nhập tên đăng nhập" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Mật khẩu</label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Nhập mật khẩu" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-layout.frontend>

<x-slot name="css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.7.3/dist/sweetalert2.min.css" integrity="sha256-sWZjHQiY9fvheUAOoxrszw9Wphl3zqfVaz1kZKEvot8=" crossorigin="anonymous">
</x-slot>

<x-slot name="javascript">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('form').on('submit', function(event) {
                event.preventDefault();
                let formData = $(this).serialize();
                $.ajax({
                    url: "{{ route('frontend.auth.login') }}",
                    type: "POST",
                    data: formData,
                    success: function(response) {
                        if (response.status === 'success') {
                            alert('Đăng nhập thành công!');
                            window.location.reload();
                        } else {
                            alert('Kiểm tra lại: ' + response.message);
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error(error);
                        alert('Đã xảy ra lỗi khi gửi yêu cầu đến máy chủ.');
                    }
                });
            });
        });
    </script>
</x-slot>
