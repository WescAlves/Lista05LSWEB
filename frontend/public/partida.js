window.addEventListener("load", () => {
    let url = window.location.href;
          url = url.split('?id=');
          let id = url[1];
          console.log(id)
})