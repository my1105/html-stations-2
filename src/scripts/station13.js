function changeBackgroundColor() {
  const toggle = document.getElementById('check');
  const text = document.getElementById('text');

  toggle.addEventListener('change', function () {
    if (toggle.checked) {
      text.style.backgroundColor = 'red';
    } else {
      text.style.backgroundColor = 'white';
    }
  });
}

document.addEventListener('DOMContentLoaded', changeBackgroundColor);
