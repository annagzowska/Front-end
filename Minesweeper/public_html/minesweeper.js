let _table = [];

function bombIsNear(_table, y, x) {
    if (x > 0) { //doesn't let to expand the table
        if (_table[y][x - 1] > -1) {
            _table[y][x - 1] += 1;
        }
    }
    if (x < (_table.length - 1)) {
        if (_table[y][x + 1] > -1) {
            _table[y][x + 1] += 1;
        }
    }
    if (y > 0) {
        if (_table[y - 1][x] > -1) {
            _table[y - 1][x] += 1;
        }
    }
    if (y < (_table.length - 1)) {
        if (_table[y + 1][x] > -1) {
            _table[y + 1][x] += 1;
        }
    }
    if (y > 0 && x > 0) {
        if (_table[y - 1][x - 1] > -1) {
            _table[y - 1][x - 1] += 1;
        }
    }
    if (y > 0 && x < (_table.length - 1)) {
        if (_table[y - 1][x + 1] > -1) {
            _table[y - 1][x + 1] += 1;
        }
    }
    if (y < (_table.length - 1) && x > 0) {
        if (_table[y + 1][x - 1] > -1) {
            _table[y + 1][x - 1] += 1;
        }
    }
    if (y < (_table.length - 1) && x < (_table.length - 1)) {
        if (_table[y + 1][x + 1] > -1) {
            _table[y + 1][x + 1] += 1;
        }
    }
}
;

function getRandomElement(_table, howMany) {
    while (howMany > 0) {
        var y = Math.round(Math.random() * (_table.length - 1));
        var x = Math.round(Math.random() * (_table.length - 1));
        if (_table[y][x] != '-1') {
            howMany--;
            _table[y][x] = '-1';
            bombIsNear(_table, y, x);
        }
        ;
    }
    ;
}
;

function getSingleCell(element) {
    if (element === '-1') {
        return "<td class='cell bombToBe hidden'>";
    }
    ;
    if (element === 0) {
        return "<td class='cell0 withoutBomb hidden'>";
    }
    ;
    return "<td class='cell withoutBomb hidden'>";
}
;

function _generateArray(width, height, howManyBombs) {
    let table1 = [];
    for (let i = 0; i < height; i++) {
        let _row = [];
        for (let j = 0; j < width; j++) {
            _row.push(0);
        }
        table1.push(_row); //puts next row
    }
    getRandomElement(table1, howManyBombs);
    return table1;
}
;

Array.prototype._generateTableMarkup = function (_myId) { //generates html
    let _str = '<table cellspacing=0 cellpadding=0 border="1">';
    for (let i = 0; i < this.length; i++) {
        _str += "<tr>";
        let _row = this[i];
        for (let j = 0; j < _row.length; j++) {
            _str += getSingleCell(_row[j]) + _row[j] + "</td>";
        }
        _str += "</tr>";
    }
    _str += "</table>";
    $('#' + _myId).html(_str);
};

function bindEvents() {
    $('td.bombToBe').on('click', function () {
        $('td.bombToBe').removeClass('hidden').addClass('bomb');
        errorManager.showError();
    });
    $('td.withoutBomb').on('click', function () {
        $(this).removeClass('hidden');
    });
    $('td').on('mousedown', function (event) {
        if (event.which === 3) {
            $(this).toggleClass('flag');
        }
        ;
    });
    //$('td cell0').on('click', function() {
    //$(this).removeClass('hidden');
    //});
}
;

var errorManager = {
    showError: function () {
        $('#message-error').css('display', 'block');
    },
    hideError: function () {
        $('#message-error').css('display', 'none');
    }
};

function initSaper(side, bombs) {
    let _ourArray = _generateArray(side, side, bombs);
    _ourArray._generateTableMarkup('saper');
    bindEvents();
    errorManager.hideError();
}
;

initSaper(5, 5);



$(function(){
    $('#_5').on('click', function () {
        initSaper(5, 5);
    });
    $('#_10').on('click', function () {
        initSaper(10, 10);
    });
    $('#_15').on('click', function () {
        initSaper(15, 15);
    });
});