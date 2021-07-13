function salvarDados() {
    const dadosUsuario ={
        'Nome':document.getElementById('nome').value,
        'Email': document.getElementById("email").value
    };
    localStorage.setItem('UserData',JSON.stringify(dadosUsuario));
}