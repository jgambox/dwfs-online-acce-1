var x = 2;

function A(){
    var x = 5;
    B();
}

function B(){
    console.log(x);
}

A();