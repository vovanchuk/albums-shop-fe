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
  images: [],
  pages: {
    1: {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
    },
    2: [
      {id:  1, base64: '', file: null, zIndex: 1, orgImageId: null},
      {id:  2, base64: '', file: null, zIndex: 2, orgImageId: null},
      {id:  3, base64: '', file: null, zIndex: 3, orgImageId: null},
      {id:  4, base64: '', file: null, zIndex: 4, orgImageId: null},
      {id:  5, base64: '', file: null, zIndex: 5, orgImageId: null}
    ],
    3: [
      {id:  1, base64: '', file: null, zIndex: 1, orgImageId: null},
      {id:  2, base64: '', file: null, zIndex: 2, orgImageId: null},
      {id:  3, base64: '', file: null, zIndex: 3, orgImageId: null},
      {id:  4, base64: '', file: null, zIndex: 4, orgImageId: null},
      {id:  5, base64: '', file: null, zIndex: 5, orgImageId: null}
    ]
  },
  currentPage: 1,
})


export const mutations = {
  ADD_IMAGE(state, imageObj) {
    state.images.push(imageObj)
  },
  ADD_ELEMENT(state, type){
    var page = state.pages[state.currentPage]['elements']
    var id = page.length + 1
    if(type === 'image')
      page.push({id:  id, base64: '', file: null, zIndex: 1, orgImageId: null, type: 'image'})
    else
      page.push({id:  id, text: 'Dodaj tekst', zIndex: 1, type: 'text'})
  },
  ADD_IMAGE_TO_PAGE(state, imageObj) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(image => image.id === imageObj.itemId)
    obj.base64 = imageObj.base64
    obj.file = imageObj.file
    obj.zIndex = imageObj.itemId
    obj.orgImageId = imageObj.id
  },
  DELETE_IMAGE_BY_INDEX(state, idx){
    state.images.splice(idx, 1)
  },
  UPDATE_IMAGE_BY_INDEX(state, {newObj, idx}) {
    state.images[idx] = newObj
  },
  UPDATE_IMAGE_FROM_PAGE_BY_INDEX(state, {newObj, idx}) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(image => image.id === idx)
    obj.base64 = newObj.base64
    obj.file = newObj.file
  },
  CHANGE_Z_TO_BOTTOM(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(image => image.id === id)
    if (obj.zIndex === 1){
      return
    }
    obj.zIndex = 1
    page.forEach((image) => {
      if(image.id !== id && image.zIndex !== page.length){
        image.zIndex = image.zIndex + 1
      }
    })
  },
  CHANGE_Z_TO_TOP(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(image => image.id === id)
    if (obj.zIndex === page.length){
      return
    }
    obj.zIndex = page.length
    page.forEach((image) => {
      if(image.id !== id && image.zIndex !== 1){
        image.zIndex = image.zIndex - 1
      }
    })
  },
  CHANGE_CURRENT_PAGE(state, number){
    state.currentPage = number
  },
  UPDATE_BG_IMAGE(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = newBg
  },
  UPDATE_BG_COLOR(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = 'color'
    page['backgroundColor'] = newBg
  }
}

export const getters = {
  getTemplatesByCategory: (state) => (category) => {
    return state.allTemplates[category]
  },
  getTemplateById: (state) => (category, id) => {
    return state.allTemplates[category].find(template => template.id == id)
  },
  getPhotos: (state) => state.images,
  getPhotosFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'image'),
  getTextFieldsFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'text'),
  getElementFromCurrentPage: (state) => (id) => state.pages[state.currentPage]['elements'].find(element => element.id === id),
  getPages: (state) => state.pages,
  getPageById: (state) => (id) => state.pages[id],
  getCurrentPage: (state) => state.currentPage,
  getPageBackgroundImage: (state) => state.pages[state.currentPage]['backgroundImage'],
  getPageBackgroundColor: (state) => state.pages[state.currentPage]['backgroundColor']

}
