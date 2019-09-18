$('.addSkill').click(function(evt){
  let newSkill = $('#skill').val()
  let htmlString =
  `
  <tr>
    <td><button class="btn btn-danger">X</button></td>
    <td>${newSkill}</td>
  </tr>
  `
  $('tbody').append(htmlString);
  $('#skill').val("");
});

$('tbody').on('click', 'button', function() {
  $(this).closest('tr').fadeOut(1000, function() {
    $(this).remove();
  })
});
