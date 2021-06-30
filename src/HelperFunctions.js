export function getIngr(recs, bUrl, setData, setIsPending, axios) {
    for (let i = 0; i < recs.length; i++) {
        let rec = recs[i];
        rec.ings = [];

        if (rec.rec_id) {
            rec.id = rec.rec_id;
        }
        if (rec.bl_id) {
            rec.id = rec.bl_id
        }
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
}

export function findRecBlog(title, setData, array) {

    let found = [];

    if (array[0].bl_title) {
        found = array.filter(el => el.bl_title.toUpperCase() === title.toUpperCase());
    }
    else if (array[0].rec_title) {
        found = array.filter(el => el.rec_title.toUpperCase() === title.toUpperCase());
    }
    let newArr = found;
    setData(newArr);
}