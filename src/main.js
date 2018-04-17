import $ from 'jquery';
import { Triangle } from './triangle.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputSide1 = parseInt($("#side1").val());
    var inputSide2 = parseInt($("#side2").val());
    var inputSide3 = parseInt($("#side3").val());

    var newTriangle = new Triangle(inputSide1, inputSide2, inputSide3);

    // if (side1 + side2 <= side3) {
    //   $("#result").text("This is not a triangle.");
    // } else if (side1 === side2 && side2 === side3) {
    //   $("#result").text("This is an equilateral triangle.");
    // } else if (side1 === side2 || side2 === side3 ||side1 === side3) {
    //   $("#result").text("This is an isosceles triangle.")
    // } else {
    //   $("#result").text("This is a scalene triangle.")
    // }

    $("#result").text(newTriangle.checkType());
    $("#result").show();
    $("form")[0].reset();
  });
});
