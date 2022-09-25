$("document").ready(function (){
    $(".card").click(function (){
        var hewan = $(this).attr('id');

        $("img").remove();
        $("audio").remove();

        // HEWAN UNGGAS
        if (hewan == 'ayam') {
            $(this).prepend(`
            <img src="images/ayam.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-ayam.mp3" autoplay></audio>`
            );
        } else if (hewan == 'bebek') {
            $(this).prepend(`
            <img src="images/bebek.png" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-bebek.mp3" autoplay></audio>
            `);
        } else if (hewan == 'penguin') {
            $(this).prepend(`
            <img src="images/penguin.png" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-penguin.mp3" autoplay></audio>`
            );
        } else if (hewan == 'merpati') {
            $(this).prepend(`
            <img src="images/merpati.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-merpati.mp3" autoplay></audio>`
            );
        }

        // HEWAN TERNAK
        else if (hewan == 'sapi') {
            $(this).prepend(`
            <img src="images/sapi.png" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-sapi.mp3" autoplay></audio>`
            );
        } else if (hewan == 'kuda') {
            $(this).prepend(`
            <img src="images/kuda.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-kuda.mp3" autoplay></audio>`
            );
        } else if (hewan == 'kambing') {
            $(this).prepend(`
            <img src="images/kambing.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-kambing.mp3" autoplay></audio>`
            );
        } else if (hewan == 'babi') {
            $(this).prepend(`
            <img src="images/babi.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-babi.mp3" autoplay></audio>`
            );
        }
        
        // HEWAN BUAS
        else if (hewan == 'singa') {
            $(this).prepend(`
            <img src="images/singa.png" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-singa.mp3" autoplay></audio>`
            );
        } else if (hewan == 'hyena') {
            $(this).prepend(`
            <img src="images/hyena.png" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-hyena.mp3" autoplay></audio>`
            );
        } else if (hewan == 'buaya') {
            $(this).prepend(`
            <img src="images/buaya.png" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-buaya.mp3" autoplay></audio>`
            );
        } else if (hewan == 'beruang') {
            $(this).prepend(`
            <img src="images/beruang.png" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-beruang.mp3" autoplay></audio>`
            );
        }
    })
});