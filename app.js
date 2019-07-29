// 'http://aws.random.cat//meow'

const img = $('#catImg');
const styles = {
  backgroundColor: function() {
    return `rgb(${Math.random() * 256}, ${Math.random() *
      256}, ${Math.random() * 256})`;
  },
  color: function() {
    return `rgb(${Math.random() * 256}, ${Math.random() *
      256}, ${Math.random() * 256})`;
  },
  outline: 'none'
};

$('#btn').on('click', function() {
  $.getJSON('http://aws.random.cat//meow')
    .then(data => {
      img.attr('src', data['file']);
      $(this).css(styles);
    })
    .fail(error => console.log('error is:', error));
});
