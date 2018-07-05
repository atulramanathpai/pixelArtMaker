// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const $pixelCanvas = $('#pixelCanvas');
$pixelCanvas.on('click', 'td', function(event) {
  $(event.target).css('background-color', $('#colorPicker').val());
  $(event.target).toggleClass('unclicked');
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $pixelCanvas.append('<tr></tr>');
    }

    for(let i = 0; i < width; i++) {
        $('tr').append('<td class="unclicked"></td>');
    }
}

$('#sizePicker').submit( event => {
    event.preventDefault();
    $pixelCanvas.html('');
    this.makeGrid($('#inputHeight').val(), $('#inputWeight').val());
});
