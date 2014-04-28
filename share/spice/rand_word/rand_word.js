function ddg_spice_rand_word(api_result) {
    "use strict";

    if (!api_result.word) {
        return;
    }

    Spice.add({
	id: "rand_word",
        data: api_result,
        name: "Random Word",
        meta: {
            sourceUrl: 'http://wordnik.com',
            sourceName: 'Wordnik',
	    sourceIcon: true
        },
        templates: {
            detail: Spice.rand_word.detail
        },
    });
}