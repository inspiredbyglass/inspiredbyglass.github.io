$(function () {
  const groups = ['.photogal1', '.photogal2', '.photogal3', '.photogal4'];
  const $groups = $(groups.join(','));

  $groups.hide();

  function showOnly(sel) {
    if ($(sel).is(':visible')) {
      $groups.hide();
      $('.carousel').carousel('pause');
      return;
    }
    $groups.hide();
    $('.carousel').carousel('pause');

    const $chosen = $(sel).show();
    $chosen.find('.carousel').carousel({ interval: 6000 }).carousel('cycle');
  }

  $('.photogal-toggle1').on('click', () => showOnly('.photogal1'));
  $('.photogal-toggle2').on('click', () => showOnly('.photogal2'));
  $('.photogal-toggle3').on('click', () => showOnly('.photogal3'));
  $('.photogal-toggle4').on('click', () => showOnly('.photogal4'));
});
