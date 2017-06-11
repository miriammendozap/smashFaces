'use strict';

const reRender = (photo, result, update) => {
    result.empty();
    if(photo.length > 0) {
            result.append(PrintCoder(photo,update));
    }
};

const Info = (update) => {
    const section = $('<section></section');
    const container = $('<div class="container"></div>');
    const row = $('<div class="row" id="info"></div>');
    const col = $('<div class="col-xs-12"></div>');
    const par = $('<p>Bievenido al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tienes 5 oportunidades anes de perder 1 punto y pasar a la siguiente.</p>');
    const colText = $('<div class="col-xs-12 col-sm-2"></div>');
    const parText = ('<strong> Elige tu sede: </strong>');
    const colChoose = $('<div class="col-xs-12 col-sm-3"></div>');
    const choose = $('<select class="form-control"><option  hidden="hidden">Choose a country</option><option value="Peru">Perú</option>  <option value="Mexico">México</option> ');
    const result = $('<div class="row"id="result"></div>');

    colChoose.append(choose);
    colText.append(parText);
    col.append(par);
    row.append(col);
    row.append(colText);
    row.append(colChoose);
    container.append(row)
    container.append(result);
    section.append(container);

    choose.change( function() {
        // Llamar a otro funcion
        if($(this).val()) {
            state.selectedCountry = $(this).val();
            state.selectedPhoto = randomPhoto(state.selectedCountry);
            reRender(state.selectedPhoto, result, update);
        }
    })
    return section;
}
