class Gempa{
    constructor(lokasi, skala){
        this.lokasi = lokasi;
        this.skala = skala;
    }

    getDampak(){
        if(this.skala <= 2) this.dampak = 'Tidak terasa';
        else if(this.skala > 2 && this.skala <= 4) this.dampak = 'Bangunan retak-retak';
        else if(this.skala > 4 && this.skala <= 6) this.dampak = 'Bangunan roboh';
        else if(this.skala > 6) this.dampak = 'Bangunan roboh dan berpotensi tsunami';
        else this.dampak = '';

        return this.dampak;
    }

    infoGempa(){
        
    }

}