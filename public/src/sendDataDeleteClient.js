export default function sendDataDeleteClient() {
    $('.button-delete').click(() => {
        let delBody = {};
  
        delBody.deleteName = $('#delete-name').val();

        $.ajax({
          type: "POST",
          url: "http://localhost:3000/deleteClient",
          crossDomian: true,
          dataType: "json",
          data: JSON.stringify(delBody)
        }).done(data => {
          console.log("Ajax callback response" + JSON.stringify(data));
          (".form-select").load("../database", () => {
            for (let i = 0; i < fullData.length; i++) {
              $(".form-select").append(
                $(`<option value = ${i}>${fullData[i].name}</option>`)
              );
            }
          });
        });
      });
}