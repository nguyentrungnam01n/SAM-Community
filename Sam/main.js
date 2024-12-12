function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'  // Tạo hiệu ứng cuộn mượt mà
    });
}

function copyAddress() {
    const address = "0x64bAa63F3eeDf9661f736d8E4D42c6f8aa0cdA71";
    navigator.clipboard.writeText(address).then(() => {
        const button = document.querySelector('.copy-button');
        const originalText = button.textContent;
        button.textContent = 'COPIED!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Countdown timer logic
function updateCountdown() {
    // Thời gian kết thúc (thay đổi thời gian ở đây)
    const targetDate = new Date('2024-12-25T00:00:00'); // Ví dụ: Ngày Giáng Sinh

    const now = new Date();
    const timeRemaining = targetDate - now;

    // Nếu thời gian còn lại > 0, tiếp tục đếm ngược
    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Tính số ngày
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Tính số giờ
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // Tính số phút
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // Tính số giây

        // Cập nhật các phần tử trên giao diện
        document.getElementById("days").textContent = formatTime(days);
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);
    } else {
        // Nếu countdown kết thúc, hiển thị thông báo
        document.querySelector('.countdown-title').textContent = "LAUNCH TIME!";
    }
}

// Hàm thêm số 0 cho các số nhỏ hơn 10
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Cập nhật countdown mỗi giây
setInterval(updateCountdown, 1000);


// Lấy phần tử button
const backToBuyButton = document.getElementById('backToBuyButton');

// Hàm kiểm tra khi cuộn
function checkScrollPosition() {
    const scrollPosition = window.scrollY; // Lấy vị trí cuộn hiện tại
    const scrollThreshold = 300;  // Vị trí cuộn tối thiểu cần đạt được để kích hoạt nút

    // Kiểm tra nếu cuộn xuống dưới scrollThreshold thì enable button
    if (scrollPosition > scrollThreshold) {
        backToBuyButton.classList.remove('disabled');  // Bật lại nút
    } else {
        backToBuyButton.classList.add('disabled');  // Tắt nút
    }
}

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', checkScrollPosition);

// Khởi động hàm khi trang tải
checkScrollPosition();


