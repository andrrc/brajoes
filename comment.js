const comentarioImage = document.getElementById("comentarioImage");
const comentario = document.getElementById("comentario");
var altura = document.body.clientHeight;
console.log(altura)

comentarioImage.addEventListener('click', criarComentario);

function criarComentario() {
    var sectionComment = document.createElement('section');
    document.body.appendChild(sectionComment);
    sectionComment.style.height = `${altura}px`;
    sectionComment.classList.add('sectionComment');

    var boxComment = document.createElement('div');
    boxComment.classList.add('boxComment');
    sectionComment.appendChild(boxComment)

    var buttonClose = document.createElement('img')
    buttonClose.src = '../Imagens/close.png';
    boxComment.appendChild(buttonClose);
    buttonClose.style.width = '20px';
    buttonClose.style.cursor = 'pointer';


    var inputText = document.createElement('textarea');
    inputText.classList.add('inputText');
    inputText.setAttribute('row', '75');
    inputText.setAttribute('column', '75');
    inputText.setAttribute('maxlength', '200');
    inputText.autofocus;
    inputText.setAttribute('placeholder', 'Digite aqui seu comentario...');
    boxComment.appendChild(inputText);
    inputText.focus();

    var sendButton = document.createElement('button');
    sendButton.style.cursor = 'pointer';
    sendButton.classList.add('sendButton');
    sendButton.textContent = 'Compartilhar comentário';
    boxComment.appendChild(sendButton);
    
    comentarioImage.removeEventListener('click', criarComentario);
    buttonClose.addEventListener('click', () =>{
        sectionComment.remove();
        comentarioImage.addEventListener('click', criarComentario);
    })
}
comentarioImage.addEventListener('click', criarComentario);

