# Masterclass_18_Manipulacao_de_DOM_com_JavaScrip_rocketseat
 ## Inspirado rocketseat-content/youtube-masterclass-dom
 
 ## ***Apresentação***

* document.location.href
* document.URL
* document
* console.dir(document)
* document.title
* document.head
* document.links
* document.images
* document.forms


## ***Buscando e selecionando elementos***


* document.getElementById("usuario")retorna um unico elemento
* console.dir(document.getElementById("usuario"))
* document.getElementsByClassName("form-group")retorna HTMLCollection
* document.getElementsByTagName("div") retorna HTMLCollection
* document.querySelector("");retorna um elemento
    * class ->document.querySelector(".form-group")
    * id ->document.querySelector("#usuario")
    * tag ->document.querySelector("a")
* document.querySelectorAll("");retorna varios elementos e retorna nodeList e não HTMLCollection
    * class ->document.querySelectorAll(".form-group")
    * tag ->document.querySelectorAll("input")

É possivel aplicar o método .forEach em NodeList, mas não em HTMLCollection(ver a compatibilidade do navegador)

>  HTMLCollection

A interface HTMLCollection representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.

> NodeList

Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos Node.childNodes e document.querySelectorAll(). 

## ***Manipulando conteúdo***

* .textContent --> retorna o conteudo do elemento html
* let pagina1 = document.querySelector(".btn-primary")
    * pagina1.textContent

* .innerText --> mudar o conteúdo texto do elemento html para um texto
    * pagina1.innerText = "Gelson"

* .innerHTML --> mudar ou retorna o conteúdo texto do elemento html para um elemento HTML
    * pagina1.innerHTML = "<h1>Acha</h1>"

* .value(inputs) retorna e modifca os valores de um input
    * let usuario = document.querySelector("#usuario")
      * usuario.value = "asdd"
      * usuario.value 

## ***Alterando estilos***
* .style.property(camelCase)
    * let app = document.querySelector("#usuario")
    * app.style.backgroundColor
    * app.style.backgroundColor = "#ABD"

* .classList
   * .add()
   * .remove()
   * .toggle()--> sê não existe adiciona e sê existe remova

> ***Navegando pelos elementos***

* Parents--> pai
    * .parentNode
    * .parentElement

* Children--> filho
    * .childNodes
    * .children
    * .childElementCount
    * .firstChild
    * .firstElementChild
    * .lastChild
    * .lastElementChild
    * .remove()
      * let container = document.querySelectorAll(".container")
      * container[0].children[0].style.backgroundColor = "yellow"

* Siblings-->irmãos
    * .nextSibling
    * .nextElementSibling
    * .previousSibling
    * .previousElementSibling

## ***Criando Elementos***
* .createElement()
    * let iframe = document.createElement("iframe")
    * iframe.src = "url ou caminho"
    * iframe.width = "100px"

## ***Trabalhondo com propriedades dos elementos***
* .setAttribute()
   * frame.setAttribute("id", "my-id")
* .getAttribute()
   * frame.getAttribute("id")
   * frame.getAttribute("class")
* .removeAttribute()
   * frame.removeAttribute("id")


## ***Inserindo elementos no HTML***
* .insertBefore()
* .insertAfter()
* .append()-->coloca depois de tudo
   * document.body.append(iframe)
* .appendChild()
* .prepend()-->coloca antes de tudo
  * document.body.append(iframe)

## ***Eventos***

* .addEventListener()-->cria evento e vai estar a ouvir este evento
    * load
    * click
    * scroll
    * keydown
    * change
    * submit
* event
    * target
        * id
        * className
    * type 
    * clientX/clientY (relative to document)
    * offsetX/offsetY (relative to element)
    * preventDefault()


🎹 Create a virtual piano with html, css and vanilla javascript. https://www.youtube.com/watch?v=UftSB4DaRU4
by:maykbrito
