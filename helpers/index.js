export function copyText(text){
  navigator.clipboard.writeText(text)
}

export function isValidURL(str) {
  if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
       console.log('YES');
       return true
   } else {
       console.log('NO');
       return false
   }
}

export function somethingLoadingAlert(){
  alert("Enregistrement en cours. Merci de patienter !");
}

export function equalObjects(obj1, obj2){
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function pushPage(router, url){
  setTimeout(() => {
    router?.push(url)
  }, 2000);
}

export function setButtonText(
  loading, status, originalText
){
  // this function is usefull to define a text in a button according to the operation loading value and status
  if(loading === false && status === ""){
    // if the operation is not started yet
    return originalText
  } else if(status === "failed"){
    // if the operation has been launched, but has failed for whatever reason
    return "Echec. Réessayer !"
  } else if(loading === false) {
    // if the operation has been launched, has not failed, and has finished loading
    return "Opération réussie !"
  } else {
    // if the operation has been launched, has not failed, but is still loading
    return "Veuillez patienter..."
  }
}