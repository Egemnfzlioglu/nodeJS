/* Dairenin Alanı = π x r2 */
// console.log(`Yarıçapı (Yarıçap) olan dairenin alanı: (Alan)`);

const yaricap = process.argv.slice(2) * 1

const daireAlanı = () => {
    let alan = Math.PI.toFixed(2) * (yaricap ** 2)

    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
}

daireAlanı(yaricap);

/*
################

ÖRNEK KULLANIM:
 node odev 9

################

*/