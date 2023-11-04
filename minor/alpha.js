function alpha() {
    var ru = document.getElementById("ru")
    var en = document.getElementById("en")

    if (ru.checked) {
        document.getElementsByTagName("p")[6].innerText = 'Обридко'
        document.getElementsByTagName("p")[8].innerText = 'Мария'
        document.getElementsByTagName("p")[9].innerText = 'Семёновна'
    }

    if (en.checked) {
        document.getElementsByTagName("p")[6].innerText = 'Obridko'
        document.getElementsByTagName("p")[8].innerText = 'Maria'
        document.getElementsByTagName("p")[9].innerText = 'Semenovna'
    }

}