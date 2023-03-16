const messegesNames = [];

function writeCards( names, value ) {
    let messegesNames = []
    for ( let i = 0;  i < names.length;  i++ ) {
       messegesNames.push( `Thank you, ${names[i]}, for the wonderful ${value} gift!` );
    }
       return messegesNames;
}
function countDown(number) {
    while (number >= 0) {
        console.log (number)
        number --
    }
}




