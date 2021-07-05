export function getIngr(recs, bUrl, setData, setIsPending, axios) {
    for (let i = 0; i < recs.length; i++) {
        let rec = recs[i];
        rec.ings = [];

        if (rec.rec_id) {
            rec.id = rec.rec_id;
            axios.get(bUrl + 'ingredients', { params: { rec_id: rec.id } }).then(res => {
                rec.ings = res.data.data;
    
                if (recs.indexOf(rec) === recs.length - 1) {
                    setData(recs);
                    setTimeout(() => {
                        setIsPending(false)
                    }, 1000);
                }
            })
        }
        if (rec.bl_id) {
            rec.id = rec.bl_id
            axios.get(bUrl + 'ingredients', { params: { bl_id: rec.id } }).then(res => {
                rec.ings = res.data.data;
    
                if (recs.indexOf(rec) === recs.length - 1) {
                    setData(recs);
                    setTimeout(() => {
                        setIsPending(false)
                    }, 1000);
                }
            })
        }
     
    }
}

export function findRecBlog(srch_txt, setData, array) {

    let found = [];
    let all_srch_words = srch_txt.split(' ');
    let srch_words = all_srch_words.filter(srch_w => srch_w !== 'sa' && srch_w !== 'bez' && srch_w !== 'i');

    if (array[0].bl_title) {
     
        found = array.filter(el => {
             el.words_title = el.bl_title.split(' ');
             el.words_author = el.bl_author.split(' ');
         for(let i = 0; i < el.words_title.length; i++) {
             for(let j = 0; j < srch_words.length; j++) {
                 if(el.words_title[i].toUpperCase() === srch_words[j].toUpperCase()) {
                     
                     return el;
                 }
                
             }
         }
         for(let i = 0; i < el.words_author.length; i++) {
            for(let j = 0; j < srch_words.length; j++) {
                if(el.words_author[i].toUpperCase() === srch_words[j].toUpperCase()) {
                   
                    return el;
                }
               else {
                   return null;
               }
            }
        }
        });
    }
    else if (array[0].rec_title) {

        found = array.filter(el => {
             el.words_title = el.rec_title.split(' ');
             el.words_author = el.author.split(' ');
         for(let i = 0; i < el.words_title.length; i++) {
             for(let j = 0; j < srch_words.length; j++) {
                 if(el.words_title[i].toUpperCase() === srch_words[j].toUpperCase()) {
                     
                     return el;
                 }
                
             }
         }
         for(let i = 0; i < el.words_author.length; i++) {
            for(let j = 0; j < srch_words.length; j++) {
                if(el.words_author[i].toUpperCase() === srch_words[j].toUpperCase()) {
                   
                    return el;
                }
               else {
                   return null;
               }
            }
        }
        });
    }
    setData(found.sort());
}