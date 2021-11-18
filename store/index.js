export const state = () => ({
  allTemplates: {
    'wedding': [
      { id: 1, url: 'wedding-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'wedding-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'wedding-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'wedding-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'wedding-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'wedding-modern.jpg', title: 'Nowoczesny'},
    ],
    'occasion': [
      { id: 1, url: 'ocasion-template.jpg', title: 'Okazjonalne'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'trip': [
      { id: 1, url: 'trip-template.jpg', title: 'Podróżnicze'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'kids': [
      { id: 1, url: 'kids-template.jpg', title: 'Dziecięce'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'birthday': [
      { id: 1, url: 'birthday-template.jpg', title: 'Urodzinowe'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'person': [
      { id: 1, url: 'person-template.jpg', title: 'Dla specjalnej osoby'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ]
  },
  images: []
})


export const mutations = {
  ADD_IMAGE(state, imageObj) {
    state.images.push(imageObj)
  },
  DELETE_IMAGE_BY_INDEX(state, idx){
    state.images.splice(idx, 1)
  },
  UPDATE_IMAGE_BY_INDEX(state, {newObj, idx}) {
    console.log(newObj)
    console.log(idx)
    state.images[idx] = newObj
  }
}

export const getters = {
  getTemplatesByCategory: (state) => (category) => {
    return state.allTemplates[category]
  },
  getTemplateById: (state) => (category, id) => {
    return state.allTemplates[category].find(template => template.id == id)
  },
  getPhotos: (state) => state.images
}
