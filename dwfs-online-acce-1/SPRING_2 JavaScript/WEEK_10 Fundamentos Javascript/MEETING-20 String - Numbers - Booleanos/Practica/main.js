// global variables
let add_store = 0;
let add_drinks = 0;
let input_number_passenger = 0;
let total_ticket_cost = 0;
let total_with_tax = 0;
let input_drinks = 0;
let input_store = 0;
// const variables
let pass_ticket_cost = 20000;
let promo_price_store = 4250;
let promo_price_drinks = 4250;
let promo_price_both = 8500;
let ticket_tax = 0.1;
// formula
// ticket_total_cost = input_number_passenger*pass_ticket_cost + (addSpace + addDrinks)*4250 + promo_price_both
// total_with_tax = ticket_tax*ticket_total_cost + ticket_total_cost

input_number_passenger = prompt("insert number of passenger");
input_number_passenger = parseInt(input_number_passenger);

if (input_number_passenger >= 2) {
    let input_both_promo = prompt("do you want both promo?").toLowerCase();

    if (input_both_promo === "s") {
        add_store = 0;
        add_drinks = 0;
    } else {
        promo_price_both = 0;
        input_store = prompt("Add more store space?").toLowerCase();
        input_drinks = prompt("Add Drink?").toLowerCase();

        add_store = input_store === "s" ? 1 : 0;
        add_drinks = input_drinks === "s" ? 1 : 0;
    }

    total_ticket_cost = input_number_passenger * pass_ticket_cost + add_store * promo_price_store + add_drinks * promo_price_drinks + promo_price_both;
    total_with_tax = ticket_tax * total_ticket_cost + total_ticket_cost;
    alert("Costo total PROMO para " + input_number_passenger + " PASAJEROS es de " + total_with_tax + " incluido IVA.");

} else if (input_number_passenger < 2) {

    add_store = 0;
    add_drinks = 0;
    promo_price_both = 0;

    total_ticket_cost = input_number_passenger * pass_ticket_cost + add_store * promo_price_store + add_drinks * promo_price_drinks + promo_price_both
    total_with_tax = (1 + ticket_tax) * total_ticket_cost;
    alert("Costo total SIN PROMO para " + input_number_passenger + " PASAJEROS es de " + total_with_tax + " incluido IVA.");
}

