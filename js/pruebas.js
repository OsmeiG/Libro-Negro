$(document).ready(function(){
   $("#myBtnCarga").click(function(){
     var hClinica = $("#hClinica").val();
     if(hClinica==""||Number.isNaN(hClinica)||hClinica.length>=8||/^\s+$/.test(hClinica)){
      $("#hClinicaRta").addClass("incorrecto");
      $("#hClinicaRta").html("Datos incorrectos");
      }else{
        $("#hClinicaRta").removeClass("correcto"); 
        $("#hClinicaRta").html("Campo Válido");
        if(nCompleto==""||nCompleto.length>=25||/^\s+$/.test(nCompleto)){
          $("#nCompletoRta").addClass("incorrecto");
          $("#nCompletoRta").html("Datos incorrectos");
        }else{
          $("#nCompletoRta").addClass("correcto");
          $("#nCompletoRta").html("Campo Válido");
          if(medico==""||medico.length>=25||/^\s+$/.test(medico)){
            $("#medicoRta").addClass("incorrecto");
            $("#medicoRta").html("Datos incorrectos");
          }else{
            $("#medicoRta").addClass("correcto");
            $("#medicoRta").html("Campo Válido");
            if(cPracticada==""||cPracticada.length>=25||/^\s+$/.test(cPracticada)){
              $("#cPracticadaRta").addClass("incorrecto");
              $("#cPracticadaRta").html("Datos incorrectos");
            }else{
              $("#cPracticadaRta").addClass("correcto");
              $("#cPracticadaRta").html("Campo Válido");
              if(diagnostico==""||diagnostico.length>=25||/^\s+$/.test(diagnostico)){
                $("#diagnosticoRta").addClass("incorrecto");
                $("#diagnosticoRta").html("Datos incorrectos");
              }else{
                $("#diagnosticoRta").addClass("correcto");
                $("#diagnosticoRta").html("Campo Válido");
                if(fAlta==""||fAlta.length>=25||/^\s+$/.test(fAlta)){
                  $("#fAltaRta").addClass("incorrecto");
                  $("#fAltaRta").html("Datos incorrectos");
                }else{
                  $("#fAltaRta").addClass("correcto");
                  $("#fALtaRta").html("Campo Válido");
                  if(cEgreso==""||cEgreso.length>=25||/^\s+$/.test(CEgreso)){
                    $("#cEgresoRta").addClass("incorrecto");
                    $("#cEgresoRta").html("Datos incorrectos");
                  }else{
                    $("#cEgresoRta").addClass("correcto");
                    $("#cEgresoRta").html("Campo Válido");
                  }
                }
              }
            }
          }
        }
      }
   });
});   