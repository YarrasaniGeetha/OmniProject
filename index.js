const searchFun = () => {
  let filter = document.getElementById("input_search").value.toUpperCase();
  let results = document.getElementById("card_shipment");
  //   let shipmentId = results.getElementsByClassName("shipment_id");
  let id = document.querySelectorAll("shipment_id");
  let num = id.getElementsByTagName("p");
  for (var i = 0; i < id.length; i++) {
    let p = id[i].getElementsByTagName("p")[0];
    if (match) {
      match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        id[i].style.display = "";
      } else {
        id[i].style.display = "none";
      }
    }
  }
};
