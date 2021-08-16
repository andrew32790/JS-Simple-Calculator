$(document).ready(function () {
    var a = "";
    var b = "";
    var input = "";
    var operator = "";
    var result;

    document.addEventListener("keypress", keyTap);
    function keyTap(event) {
        addnum(event.key);
        
    }
     
    function addnum(key) {
        switch (key) {
            case "9":
                $("#mathp").text("");
                input += "9";
                $("#mathp").text(input);
                break;
            case "8":
                $("#mathp").text("");
                input += "8";
                $("#mathp").text(input);
                break;
            case "7":
                $("#mathp").text("");
                input += "7";
                $("#mathp").text(input);
                break;
            case "6":
                $("#mathp").text("");
                input += "6";
                $("#mathp").text(input);
                break;
            case "5":
                $("#mathp").text("");
                input += "5";
                $("#mathp").text(input);
                break;
            case "4":
                $("#mathp").text("");
                input += "4";
                $("#mathp").text(input);
                break;
            case "3":
                $("#mathp").text("");
                input += "3";
                $("#mathp").text(input);
                break;
            case "2":
                $("#mathp").text("");
                input += "2";
                $("#mathp").text(input);
                break;
            case "1":
                $("#mathp").text("");
                input += "1";
                $("#mathp").text(input);
                break;
            case "0":
                $("#mathp").text("");
                input += "0";
                $("#mathp").text(input);
                break;
            case ".":
                if (input != "0") {
                    input = input + ".";
                }
                else {
                    input = ".";
                }

                $("#mathp").text(input);
                break;

        }

    }
    




    $("#9b").click(function () {


        $("#mathp").text("");
        input += "9";
        $("#mathp").text(input);

    });

    $("#8b").click(function () {
        if (input != "0") {
            input = input + "8";
        }
        else {
            input = "8";
        }

        $("#mathp").text(input);

    });
    $("#7b").click(function () {
        if (input != "0") {
            input = input + "7";
        }
        else {
            input = '7';
        }

        $("#mathp").text(input);

    });
    $("#6b").click(function () {
        if (input != "0") {
            input = input + "6";
        }
        else {
            input = '6';
        }

        $("#mathp").text(input)

    });
    $("#5b").click(function () {
        if (input != "0") {
            input = input + "5";
        }
        else {
            input = "5";
        }

        $("#mathp").text(input);

    });
    $("#4b").click(function () {
        if (input != "0") {
            input = input + "4";
        }
        else {
            input = "4";
        }

        $("#mathp").text(input);

    });
    $("#3b").click(function () {
        if (input != "0") {
            input = input + "3";
        }
        else {
            input = "3";
        }

        $("#mathp").text(input);

    });
    $("#2b").click(function () {
        if (input != "0") {
            input = input + "2";
        }
        else {
            input = "2";
        }

        $("#mathp").text(input);

    });
    $("#1b").click(function () {
        if (input != "0") {
            input = input + "1";
        }
        else {
            input = "1";
        }

        $("#mathp").text(input);

    });
    $("#0b").click(function () {
        if (input != "0") {
            input = input + "0";
        }
        else {
            input = '0';
        }

        $("#mathp").text(input);

    });
    $("#dotb").click(function () {
        if (input != "0") {
            input = input + ".";
        }
        else {
            input = ".";
        }

        $("#mathp").text(input);

    });
    $("#plusb").click(function () {
        a = input;

        $("#mathp").text("+");
        operator = "+";
        input = "";
    });
    $("#minub").click(function () {
        a = input;

        $("#mathp").text("-");
        operator = "-";
        input = "";

    });
    $("#mulb").click(function () {
        a = input;

        $("#mathp").text("*");
        operator = "*";
        input = "";
    });
    $("#divb").click(function () {
        a = input;

        $("#mathp").text("/");
        operator = "/";
        input = "";
    });
    $("#clearb").click(function () {
        input = "";
        a = "";
        b = "";
        operator = "";
        $("#mathp").text("0");
    });

    $("#eqb").click(function () {
        b = input
        c = parseFloat(a);
        d = parseFloat(b);
        if (operator == "+") {
            result = c + d;
            $("#mathp").text(result);
        }
        if (operator == "-") {
            result = c - d;
            $("#mathp").text(result);
        }
        if (operator == "*") {
            result = c * d;
            $("#mathp").text(result);
        }
        if (operator == "/") {
            if (d == 0) {
                $("#mathp").text("CANNOT DIVIDE BY ZERO");
            }
            else {
                result = c / d;
                $("#mathp").text(result);
            }

        }
    });

});
